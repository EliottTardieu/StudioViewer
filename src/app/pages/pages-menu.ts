import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Accueil',
    data: 'home',
    icon: {
      icon: 'home',
      pack: 'solid',
    },
    link: '/pages/home',
    home: true,
  },
  {
    title: 'Studios',
    expanded: true,
    icon: {
      icon: 'building',
      pack: 'solid',
    },
    children: [
      {
        title: 'Studio 220',
        data: 'Studio_220',
        link: '/pages/studio/1',
        icon: {
          icon: 'house-user',
          pack: 'solid',
        },
      },
      {
        title: 'Studio 3',
        data: 'Studio_3',
        link: '/pages/studio/2',
        icon: {
          icon: 'house-user',
          pack: 'solid',
        },
      },
    ],
  },
  {
    title: 'Contact',
    data: 'contact',
    icon: {
      icon: 'mail-bulk',
      pack: 'solid',
    },
    link: '/pages/contact',
  }
];
