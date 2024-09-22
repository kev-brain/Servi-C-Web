const routes = {
    //seccion inicio //
    '/':
    `<section id="inicio">
        <h2>¿Se rompió tu electrodoméstico?</h2>
        <h3> Tranqui no te preocupes Estamos para ayudarte</h3>
        <p>¡Reserva tu reparación ahora! Hacemos que el proceso sea rápido y sencillo.</p>
        <div class="cta">
            <a href="#/solicitud">Haz tu pedido ahora</a>
        </div>
        <div class="procesos">
            <div class="proceso1">
                <div class="numsProcesos">
                <p>1</p>
                </div>
                <div class="textoProcesos">
                <p>Hace tu pedido y nuestro equipo se va a contactar con vos para pactar una visita a tu domicilio <b>¡¡sin cargo!!</b> </p>   
                <p>Acoradate de guardar el número de solicitud de servicio</p>
                </div>
            </div>
            
            <div class="procesos2">
                <div class="numsProcesos">
                <p>2</p>
                </div>
                <div class="textoProcesos">
                <p>Vas a poder darle seguimiento a tu pedido desde nuestra seccion <a href="#/novedades">novedades</a></p>   
                <p>Nuestros tecnicos revisaran tu equipo y te daran el mejor presusupuesto en relacion precio/calidad de la zona</p>
                </div>
            </div>
            
            <div class="procesos3">
                <div class="numsProcesos">
                <p>3</p>
                </div>
                <div class="textoProcesos">
                <p>Una vez aceptado el presupuesto, se realiza la reparacion y desde la fecha de entrega tenes <b>3 meses de garantia</b> por el trabajo realizado</p>
                </div>   
            </div>

        </div>

        <p><b>Listo. Felicitaciones!! En 3 pasos problema resuelto!!</b></P>

        <div class="seccionesInicio" :hover>
            <h2>Nuestros Servicios</h2>
            <p>Ofrecemos servicio de reparacion y mantenimiento de una gran variedad de electrodomesticos, desde domiciliarios hasta equipos industriales. Puedes solicitar más información en nuestro chat de <a href="https://wa.me/5403447572050" target="_blank">Whatsapp</a>.</p>
            <h3>Trabajamos con todas las marcas</h3>
            <img src="../img/marcas-servicio-tecnico-aires-acondicionados-a-domicilio-buenos-aires-argentina-001.jpg" alt="" class="imgMarcas">
            <h3>Aceptamos todas las formas de pago</h3>
            <img src="../img/Imagen-Formas-de-Pago.png" alt="" class="imgPagos">
        </div>
        <div class="seccionesInicio" :hover>
            <h2>Novedades</h2>
            <p>Mantente al tanto de nuestras últimas noticias de tu pedido. Visita la sección de <a href="#/novedades">Novedades</a> para más detalles. (No olvides tener a mano tu numero de solicitud)</p>
        </div>
        <div class="seccionesInicio" :hover>
            <h2>Ubicación</h2>
            <p>Conoce nuestra ubicación y cómo llegar. Consulta el mapa en la sección de <a href="#/ubicacion">Ubicación</a>.</p>
        </div>
        <div class="seccionesInicio" :hover>
            <h2>Consejos Útiles</h2>
            <p>¿Tenes alguna duda? Explora nuestros <a href="#/tips">Tips</a> para sacar el máximo provecho de tu electrodomestico.</p>
        </div>
    </section>`,
//seccion solicitud//
'/solicitud': 
    `<section id="solicitud">
        <h2>Solicitud de Servicios</h2>
        <form method="POST" class="formulario" onsubmit="validarFormulario(event)">
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
                  <option value="Columbia">Columbia</option>
                  <option value="Coventry">Coventry</option>
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
                  <option value="Whirlpool">Whirlpool</option>
                  <option value="Whitte-westinghouse">Whitte-westinghouse</option>
                  <option value="Otra">Otra</option>
                </select><br>
              
              <label for="modelo">Modelo:</label><br>
              <input type="text" id="modelo" name="modelo"><br>

              <label for="Falla">Falla:</label><br>
              <textarea id="Falla" name="Falla" placeholder="¿Cuál es la falla que le hace el electrodomestico?"></textarea><br>
              
              <boton ><input type="submit" value="Enviar Solicitud"></boton>
        </form>
    </section>`,
// seccion ubicacion //
'/ubicacion': 
    `<section id="ubicacion">
        <h2>Ubicación</h2>
            <div id="map" style="width: 100%; height: 400px;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d956.1188720569895!2d-58.212596399999995!3d-32.2018403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae2d8ab49376e1%3A0xccd377faa676c5e0!2zU2VydmktQyByZWZyaWdlcmFjacOzbiDvuI8!5e1!3m2!1ses-419!2sar!4v1725233279859!5m2!1ses-419!2sar" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p>a</p>
            <p>b</p>
            <p>c</p>
            <p>d</p>
    </section>`,
// seccion novedades //
'/novedades': 
    `<section id="novedades">
    <h2>Novedades</h2>
    <p>Mantente al tanto de nuestras últimas noticias sobre tu pedido.</p>
    </section>`,
// seccion tip/preguntas frecuentes //
'/tips': 
    `<section id="tips">
    <h2>Preguntas Frecuentes</h2>
    <p>Encuentra respuestas a tus preguntas comunes y consejos útiles para el mantenimiento de tus electrodomésticos.</p>
    <h2>Tips para el Uso y Mantenimiento de Electrodomésticos</h2>

    <div class="tip">
        <div class="tip-content">
            <h2>¿Cómo mantener mi heladera en óptimas condiciones?</h2>
            <img src="../img/hel.png" alt="Heladera">
            <p>Para mantener tu heladera eficiente, asegúrate de limpiar las bobinas detrás de la unidad al menos una vez al año y verifica que las puertas sellen correctamente. Además, revisa la temperatura interna, que debe estar entre 0°C y 4°C para una conservación adecuada.</p>
            <p>Evita colocar alimentos calientes directamente en la heladera, ya que esto puede afectar la temperatura interna. Organiza los alimentos para permitir una buena circulación del aire.</p>
        </div>
    </div>

    <div class="tip">
        <div class="tip-content">
            <h2>¿Cuál es la mejor manera de usar mi lavarropas?</h2>
            <img src="../img/lav.png" alt="Lavarropas">
            <p>Evita sobrecargar el lavarropas y utiliza ciclos adecuados según el tipo de ropa. Limpia el filtro regularmente para un mejor rendimiento. Además, usa la cantidad adecuada de detergente y considera el uso de productos específicos para cada tipo de tejido.</p>
            <p>Realiza ciclos de lavado en frío siempre que sea posible, ya que esto ahorra energía y es menos agresivo con las prendas. No olvides dejar la puerta abierta después de cada lavado para evitar malos olores.</p>
        </div>
    </div>

    <div class="tip">
        <div class="tip-content">
            <h2>¿Cómo cuidar mi aire acondicionado?</h2>
            <img src="../img/AC.png" alt="Aire Acondicionado">
            <p>Limpia o reemplaza los filtros cada mes durante la temporada de uso. También es recomendable programar un mantenimiento profesional al menos una vez al año. Asegúrate de que las salidas de aire no estén obstruidas y que el termostato esté calibrado correctamente.</p>
            <p>Utiliza el aire acondicionado de manera eficiente, cerrando puertas y ventanas mientras está en funcionamiento. Considera el uso de ventiladores para ayudar a circular el aire y reducir el consumo de energía.</p>
        </div>
    </div>
    </section>`,
// seccion taller //
'/taller': 
    `<section id="taller">
        <h2>Taller</h2>
        <p>Información sobre el taller.</p>
    </section>`,
};

// creacion del modelo SPA y routeo de cada seccion// 
    const contenido = document.getElementById('contenido');
    
    // creacion de funcion para renderizar en contenido cada seccion //
    const render = () => {
    const hash = window.location.hash.slice(1) || '/';
    contenido.innerHTML = routes[hash] || '<h1>404 - Página no encontrada</h1>';
    updateActiveLink(hash);
    cambiarImagenFondo(hash);
    }

// funcion para cambiar imagen de fondo para cada seccion //
    const cambiarImagenFondo = (hash) => {
        const body = document.querySelector('body');'../img/2.jpg'
        switch (hash) {
            case '/':
                body.style.backgroundImage = "url('../img/2.jpg')";
                break;
            case '/solicitud':
                body.style.backgroundImage = "url('../img/washing-machine-repairs.6430f470f061a0a15693.webp')";
                break;
            case '/ubicacion':
                body.style.backgroundImage = "url('../img/tecnicobsas-servicio-tecnico-aires-acondicionados-service-a-domicilio-buenos-aires-argentina-001.jpg')";
                break;
            case '/novedades':
                body.style.backgroundImage = "url('../img/service-aires-acondicionados-de-confianza-buenos-aires-argentina-001.jpg')";
                break;
            case '/tips':
                body.style.backgroundImage = "url('../img/service-lavarropas-a-domicilio-buenos-aires-argentina-002.jpg')";
                break;
            case '/taller':
                body.style.backgroundImage = "url('../img/service-aires-acondicionados-a-domicilio-buenos-aires-argentina-002.jpg')";
                break;
            default:
                body.style.backgroundImage = "url('../img/2.jpg')"; 
        }
    };
    
// funcion para actualizar la URL en cada seccion //
    const updateActiveLink = (hash) => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${hash}`) {
    link.classList.add('active');
    }
    });
    };
    
    window.addEventListener('hashchange', render);
    window.addEventListener('load', render);

// validacioanes para el formulario de solicitud de servicio //
function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario hasta que se valide

    const nombre = document.querySelector("#nombre").value.trim().toUpperCase();
    const apellido = document.querySelector("#apellido").value.trim().toUpperCase();
    const dni = document.querySelector("#dni").value.trim();
    const domicilio = document.querySelector("#domicilio").value.trim().toUpperCase();
    const email = document.querySelector("#email").value.trim();
    const telefono = document.querySelector("#telefono").value.trim();
    const electrodomestico = document.querySelector("#electrodomestico").value.trim().toUpperCase();
    const marca = document.querySelector("#marca").value.trim().toUpperCase();
    const modelo = document.querySelector("#modelo").value.trim().toUpperCase();
    const falla = document.querySelector("#Falla").value.trim().toUpperCase();
    const errores = [];

    if (nombre === "") {
        errores.push("Debe completar el nombre");
    }
    if (apellido === "") {
        errores.push("Debe completar el apellido");
    }
    if (dni === ""|| isNaN(dni) || (dni.length < 8 || dni.length > 9)) {
        errores.push("Debe completar el DNI con un número de 8 0 9 digitos");
    }
    if (domicilio === "") {
        errores.push("Debe completar el domicilio");
    }
    if (telefono === ""|| isNaN(telefono) || telefono.length != 10) {
        errores.push("Debe completar el teléfono con un número valido de 10 digitos (codigo de area + número)");
    }
    if (electrodomestico === "") {
        errores.push("Debe completar el electrodoméstico");
    }
    if (marca === "") {
        errores.push("Debe completar la marca");
    }
    if (falla === "") {
        errores.push("Debe completar la falla");
    }

    if (errores.length > 0) {
        errores.push("Atentamente Servi-C");
        alert(errores.join("\n"));
        return false;
    } else {
        const confirmacion = confirm(`Hola ${nombre}\nTu teléfono es: ${telefono}?`);
        if (confirmacion) {
            alert(`Felicitaciones, tu solicitud fue enviada correctamente. Dentro de los días hábiles, nuestro equipo se contactará con vos para organizar la visita sin cargo.`);
        event.target.submit(); 
        }
    }
}