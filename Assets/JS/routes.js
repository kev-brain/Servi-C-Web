import { inicio } from './routes/inicio.js';
import { solicitud } from './routes/solicitud.js';
import { ubicacion } from './routes/ubicacion.js';
import { novedades } from './routes/novedades.js';
import { tips } from './routes/tips.js';
import { taller } from './routes/taller.js';


export const routes = {
    '/': inicio,
    '/solicitud': solicitud,
    '/ubicacion': ubicacion,
    '/novedades': novedades,
    '/tips': tips,
    '/taller': taller
};