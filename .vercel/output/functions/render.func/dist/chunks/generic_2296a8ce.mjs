export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/generic_bd86143c.mjs').then(n => n.g);

export { page };
