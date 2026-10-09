<?php
/**
 * Formulario de contacto de legem.mx
 * Recibe los datos del formulario y los envía por correo.
 *
 * ⚠️ CONFIGURACIÓN — revisa estas líneas antes de publicar:
 */
$DESTINATARIOS = ['oconde@legem.mx'];      // TODO: correos que reciben las consultas
$REMITENTE     = 'sitio-web@legem.mx';       // TODO: una cuenta real del dominio (mejora la entrega)
$ASUNTO        = 'Nueva consulta desde legem.mx';

// ---------------------------------------------------------------------------

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function responder($code, $ok, $msg = '') {
    http_response_code($code);
    echo json_encode(['ok' => $ok, 'message' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    responder(405, false, 'Método no permitido');
}

// Campo trampa: si viene lleno, es un bot. Respondemos "ok" sin enviar nada.
if (!empty($_POST['website'])) {
    responder(200, true);
}

function limpiar($v, $max = 5000) {
    $v = trim((string)($v ?? ''));
    $v = str_replace(["\r\n", "\r"], "\n", $v);
    return mb_substr(strip_tags($v), 0, $max);
}
function una_linea($v, $max = 200) {
    return preg_replace('/[\r\n]+/', ' ', limpiar($v, $max));
}

$nombre   = una_linea($_POST['name'] ?? '');
$email    = una_linea($_POST['email'] ?? '');
$telefono = una_linea($_POST['phone'] ?? '', 40);
$empresa  = una_linea($_POST['company'] ?? '');
$area     = una_linea($_POST['area'] ?? '');
$mensaje  = limpiar($_POST['message'] ?? '');
$idioma   = ($_POST['lang'] ?? 'es') === 'en' ? 'en' : 'es';
$consent  = ($_POST['consent'] ?? '') === 'yes';

if ($nombre === '' || $mensaje === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$consent) {
    responder(422, false, 'Datos incompletos');
}

// Límite simple: 1 envío cada 30 segundos por sesión
session_start();
if (isset($_SESSION['ultimo_envio']) && time() - $_SESSION['ultimo_envio'] < 30) {
    responder(429, false, 'Demasiados envíos');
}

$cuerpo  = "Nueva consulta recibida desde el sitio web (" . strtoupper($idioma) . ")\n\n";
$cuerpo .= "Nombre:   $nombre\n";
$cuerpo .= "Correo:   $email\n";
$cuerpo .= "Teléfono: " . ($telefono ?: '—') . "\n";
$cuerpo .= "Empresa:  " . ($empresa ?: '—') . "\n";
$cuerpo .= "Área:     " . ($area ?: '—') . "\n";
$cuerpo .= "Aceptó aviso de privacidad: sí\n\n";
$cuerpo .= "Mensaje:\n$mensaje\n";

$headers  = "From: Legem sitio web <$REMITENTE>\r\n";
$headers .= "Reply-To: $nombre <$email>\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

$asunto = '=?UTF-8?B?' . base64_encode($ASUNTO . ($area ? " · $area" : '')) . '?=';

$enviado = mail(implode(',', $DESTINATARIOS), $asunto, $cuerpo, $headers, "-f$REMITENTE");

if (!$enviado) {
    responder(500, false, 'No se pudo enviar');
}

$_SESSION['ultimo_envio'] = time();
responder(200, true);
