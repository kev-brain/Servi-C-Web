<?php 

//defino las variables finales para la pueba
define ("dsn" , 'mysql:dbname=servi-c;host=127.0.0.1');
define ("usuario", 'root');
define ("contraseña" , '');

// //probamos la conexion con la base de datos
// try {
//     $gbd = new PDO(dsn, usuario, contraseña); 
//     echo "Conexion exitosa";
// } catch (PDOException $e) {
//     echo 'Falló la conexión: ' . $e->getMessage();
// }
 
// DEFINIMOS LA CLASE BASE DE DATOS
class database {
    private $gbd;

    // DEFINIMOS FUNCIÓN PARA ESTABLECER CONEXIÓN DB
    function __construct($dsn, $usuario, $contraseña) {
        $this -> gbd = new PDO($dsn, $usuario, $contraseña);
        $this->gbd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        if (!$this->gbd) {
            throw new Exception("No se ha podido realizar la conexión.\n\n
        Revisar:\n\t- Parámetros de acceso;\n\t- Credenciales.");
        }
    }

    // ********************** CONSULTAS SQL BÁSICAS **********************
    
    // DEFINIMOS FUNCIÓN SELECT PARA EXTRAER DATOS DE LA BASE DE DATOS
    function select($tabla, array $columns = null, $joins = [], $condicion = null, $arr_prepare = null, $order = null, $limit = null) {

        if ($columns != null) {
            $columnSelection = implode(", ", $columns);
        }else{
            $columnSelection = '*';
        }

        
        $sql = "SELECT " . $columnSelection . " FROM " . $tabla;

        if (!empty($joins)) {
            foreach ($joins as $join) {
                $sql .= " INNER JOIN " . $join['tabla'] . " ON " . $join['condicion'];
            }
        }
        if ($condicion != null) {
            $sql .= " WHERE " . $condicion;
        }
        if ($order != null) {
            $sql .= " ORDER BY " . $order;
        }
        if ($limit != null) {
            $sql .= " LIMIT " . $limit;
        }

        $recurso = $this -> gbd -> prepare($sql);
        $recurso -> execute($arr_prepare);

        if ($recurso) {
            return $recurso->fetchAll(PDO::FETCH_ASSOC);
        } else {
            echo '<pre>';
            print_r($this->gbd->errorInfo());
            echo '</pre>';

            throw new Exception('No se ha podido realizar la consulta.');
        }
    }
    
    // DEFINIMOS FUNCIÓN DELETE PARA ELIMINAR DATOS DE LA BASE DE DATOS
    function delete($tabla, $condicion = null, $arr_prepare = null) {
        $sql = "DELETE FROM " . $tabla . " WHERE " . $condicion;

        $recurso = $this -> gbd -> prepare($sql);
        $recurso -> execute($arr_prepare);
        
        if ($recurso) {
            return $recurso->rowCount(); // Retorna el número de filas afectadas
        } else {
            echo '<pre>';
            print_r($this->gbd->errorInfo());
            echo '</pre>';

            throw new Exception('Error al remover los datos.');
        }
    }

    // DEFINIMOS FUNCIÓN INSERT PARA AGREGAR NUEVOS DATOS A LA BASE DE DATOS
    function insert($tabla, $campos, $valores, $arr_prepare = null) {
        $sql = "INSERT INTO " . $tabla . "(" . $campos . ") VALUES ($valores)";

        $recurso = $this -> gbd -> prepare($sql);
        $recurso -> execute($arr_prepare);

        if ($recurso) {
            return $this->gbd->lastInsertId();   
        }
        else {
            echo '<pre>';
            print_r($this -> gbd -> errorInfo());
            echo '</pre>';

            throw new Exception('Error al insertar los datos.');
        }
    }

    // DEFINIMOS FUNCIÓN UPDATE PARA MODIFICAR DATOS EXISTENTES EN LA BASE DE DATOS
    function update($tabla, $campo_valor, $condicion, $arr_prepare = null) {
        $sql = "UPDATE " . $tabla . " SET " . $campo_valor . " WHERE " . $condicion;

        $recurso = $this -> gbd -> prepare($sql);
        $recurso->execute($arr_prepare);
        //  echo '<pre>';
        //      print_r($sql).print_r($arr_prepare);
        //      echo '</pre>';

         if ($recurso) {
             return $recurso->rowCount();
         }
         else {
             echo '<pre>';
             print_r($this -> gbd -> errorInfo());
             echo '</pre>';

             throw new Exception('Error al actualizar los datos.');
         }
    }
}