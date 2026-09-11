<?php
$nombre = htmlspecialchars($_POST['name'] ?? 'Sin nombre', ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($_POST['email'] ?? 'Sin correo', ENT_QUOTES, 'UTF-8');
$clase = htmlspecialchars($_POST['clase'] ?? 'No seleccionada', ENT_QUOTES, 'UTF-8');
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Formulario enviado</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main>
      <h1>Formulario recibido</h1>
      <p>Los datos fueron enviados correctamente para esta demostración.</p>
      <ul>
        <li><strong>Nombre:</strong> <?= $nombre ?></li>
        <li><strong>Correo:</strong> <?= $email ?></li>
        <li><strong>Clase:</strong> <?= $clase ?></li>
      </ul>
      <p><a href="formulario.html">Volver al formulario</a></p>
    </main>
  </body>
</html>
