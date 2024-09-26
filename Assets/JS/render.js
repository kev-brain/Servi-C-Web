import { routes } from './routes.js';

// creacion del modelo SPA y routeo de cada seccion// 
const contenido = document.getElementById('contenido');
    
// creacion de funcion para renderizar en contenido cada seccion //
    export const render = () => {
    const hash = window.location.hash.slice(1) || '/';
    contenido.innerHTML = routes[hash] || '<h1>404 - Página no encontrada</h1>';
    updateActiveLink(hash);
    cambiarImagenFondo(hash);
}

// funcion para cambiar imagen de fondo para cada seccion //
    export const cambiarImagenFondo = (hash) => {
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
    export const updateActiveLink = (hash) => {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${hash}`) {
    link.classList.add('active');
    }
    });
};