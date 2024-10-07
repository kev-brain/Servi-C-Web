export const solicitud =  
    `<section id="solicitud">
        <h2>Solicitud de Servicios</h2>
        <form method="POST" class="formulario" id="formSolicitud" action="../../backend/solicitud_servicio.php" >
            <input type="hidden" name="acciones" value="Enviar Solicitud">

            <label for="nombre">Nombre:</label><br>
            <input type="text" id="nombre" name="nombre"><br>
    
              <label for="apellido">Apellido:</label><br>
              <input type="text" id="apellido" name="apellido"><br>
              
              <label for="dni">DNI:</label><br>
              <input type="text" id="dni" name="dni"><br>
              
              <label for="domicilio">Domicilio:</label><br>
              <input type="text" id="domicilio" name="domicilio" placeholder="ej: La Plaza 1935 e/Cabildo y Constitucion"><br>
              
              <label for="email">E-mail:</label><br>
              <input type="email" id="email" name="email"><br>
              
              <label for="telefono">Teléfono/Celular:</label><br>
              <input type="tel" id="telefono" name="telefono" placeholder="ej: 3447572050"><br>
              
              <label for="electrodomestico">Electrodoméstico:</label><br>
              <select id="electrodomestico" name="electrodomestico">
                  <option value="heladera">Heladera</option>
                  <option value="lavarropa">Lavarropa</option>
                  <option value="aire_acondicionado">Aire Acondicionado</option>
                  <option value="secarropas">Secarropas</option>
              </select><br>
              
              <label for="marca">Marca:</label><br>
              <select id="marca" name="marca">
                  <option value="Ariston">Ariston</option>
                  <option value="Aurora">Aurora</option>
                  <option value="Bosch">Bosch</option>
                  <option value="Candy">Candy</option>
                  <option value="Carrier">Carrier</option>
                  <option value="Columbia">Columbia</option>
                  <option value="Coventry">Coventry</option>
                  <option value="Drean">Drean</option>
                  <option value="Electrolux">Electrolux</option>
                  <option value="Eslavon de lujo">Eslavon de lujo</option>
                  <option value="Gafa">Gafa</option>
                  <option value="General electric">General electric</option>
                  <option value="Indesit">Indesit</option>
                  <option value="Koh-i-noor">Koh-i-noor</option>
                  <option value="Longvie">Longvie</option>
                  <option value="Mabe">Mabe</option>
                  <option value="Patrick">Patrick</option>
                  <option value="Peabody">Peabody</option>
                  <option value="Philco">Philco</option>
                  <option value="Philips">Philips</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Surrey">Surrey</option>
                  <option value="Whirlpool">Whirlpool</option>
                  <option value="Whitte-westinghouse">Whitte-westinghouse</option>
                  <option value="Otra">Otra</option>
                </select><br>
              
              <label for="modelo">Modelo:</label><br>
              <input type="text" id="modelo" name="modelo"><br>

              <label for="Falla">Falla:</label><br>
              <textarea id="Falla" name="Falla" placeholder="¿Cuál es la falla que le hace el electrodomestico?"></textarea><br>
              
              <button type="submit" class="btnEnviar"> Enviar solicitud </button>
        </form>
    </section>`;