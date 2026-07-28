import { RenderMode, ServerRoute } from '@angular/ssr';

const personnageIds = [1, 2, 3, 4, 5, 11, 12, 13, 14, 15, 16];

export const serverRoutes: ServerRoute[] = [
  {
    path: 'personnage/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      return personnageIds.map(id => ({ id: id.toString() }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];

