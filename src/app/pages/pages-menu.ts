import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Página Inicial',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Menu',
    group: true,
  },
  {
    title: 'Unidades',
    icon: 'nb-e-commerce',
    link: '/pages/unidades',
  },
  {
    title: 'Câmeras',
    icon: 'nb-e-commerce',
    link: '/pages/cameras',
  },
  {
    title: 'Caixas',
    icon: 'nb-e-commerce',
    link: '/pages/caixas',
  },
];
