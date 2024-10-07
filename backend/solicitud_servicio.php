<?php
require '../Class/database.php';

$dsn = 'mysql:dbname=servi-c;host=127.0.0.1';
$usuario = 'root';
$contraseña = '';

try {
    $db = new database($dsn, $usuario, $contraseña);
     //echo "Conexion exitosa";
} catch (Exception $e) {
    die("Error de conexión: " . $e->getMessage());
}

if (isset($_POST) && $_POST['acciones'] == 'Enviar Solicitud') {
    
    /*//Probamos que el post llegue y su contenido
    echo "<pre>";
        print_r ($_POST);
    echo "</pre>";*/

    //Capturamos los datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $dni = $_POST['dni'];
    $domicilio = $_POST['domicilio'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $electrodomestico = $_POST['electrodomestico'];
    $marca = $_POST['marca'];
    $modelo = $_POST['modelo'];
    $falla = $_POST['Falla'];
    
    // Verificar si el cliente ya existe
    $clienteExistente = $db->select('clientes',['dni'], [], 'dni = :dni', [':dni' => $dni]);

    try {
    if (empty($clienteExistente)) { //si el cliente no existe lo insertamos
            $db->insert('clientes', 'dni, nombre, apellido, domicilio, email, telefono', 
                ":dni, :nombre, :apellido, :domicilio, :email, :telefono", 
                [
                    ':dni' => $dni,
                    ':nombre' => $nombre,
                    ':apellido' => $apellido,
                    ':domicilio' => $domicilio,
                    ':email' => $email,
                    ':telefono' => $telefono
                ]
            );
    
        } else {
                //si ya existe actualiza la información del cliente 
                $db->update('clientes', 'nombre = :nombre, apellido = :apellido, domicilio = :domicilio, email = :email, telefono = :telefono', 'dni = :dni',
                 [
                    ':dni' => $dni,
                    ':nombre' => $nombre,
                    ':apellido' => $apellido,
                    ':domicilio' => $domicilio,
                    ':email' => $email,
                    ':telefono' => $telefono
                 ]);
                }
            
        

    // Insertamos el electrodoméstico en la base de datos
     $electrodomesticoId = $db->insert('electrodomesticos', 'tipo, modelo, marca', 
         ":tipo, :modelo, :marca", 
         [
             ':tipo' => $electrodomestico,
             ':modelo' => $modelo,
             ':marca' => $marca
         ]
        );

    // Insertamos la solicitud de servicio
     $solicitudId = $db->insert('solicitudes_servicio', 'cliente_dni, electrodomestico_id, falla, estado', 
         ":cliente_dni, :electrodomestico_id, :falla, :estado", 
        [
             ':cliente_dni' => $dni,
             ':electrodomestico_id' => $electrodomesticoId,
             ':falla' => $falla,
             ':estado' => 'PENDIENTE' // Estado inicial
         ]
        );

    // Insertamos el estado del pago
    $pagoId = $db->insert('pagos', 'solicitud_id, estado_pago', 
         ":solicitud_id, :estado_pago", 
         [
             ':solicitud_id' => $solicitudId,
            ':estado_pago' => 'PENDIENTE', // Estado inicial
         ]
        );

     echo "Solicitud enviada correctamente. ID de la solicitud: " . $solicitudId;
    } catch (Exception $e) {
     echo "Error al procesar la solicitud: " . $e->getMessage();
    };
};