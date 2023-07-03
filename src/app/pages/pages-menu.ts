import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: { 
      icon : 'tachometer-alt',
      pack : 'fas',
    },
    expanded : true,
    children : [
      { 
        title : "Piping Assets",
        link: '/pages/dashboards/piping-assets',
        home: true,
      },
      { 
        title : "Piping Circuit",
        link: '/pages/dashboards/piping-circuits',
        home: true,
      },
      { 
        title : "View Proposal",
        link: '/pages/dashboards/view-proposal',
        home: true,
      },
    ]
  },
  {
    title: 'Assesment',
    icon: { 
      icon : 'cog',
      pack : 'fas',
    },
    children : [
      { 
        title : "Visual Condition",
        link: '/pages/assesment/visual-condition',
        home: true,
      },
      { 
        title : "Thickness",
        link: '/pages/assesment/thickness',
        home: true,
      },
      { 
        title : "Damage Mechanism",
        link: '/pages/assesment/damage-mechanism',
        home: true,
      },
    ]
  },
  {
    title: 'Analytics',
    icon: { 
      icon : 'chart-bar',
      pack : 'fas',
    },
    children : [
      { 
        title : "CML Trend",
        link: '/pages/analytics/corrosion-rate-trend',
        home: true,
      },
      { 
        title : "Piping Trend",
        link: '/pages/analytics/remaining-life-trend',
        home: true,
      },
    ]
  },
  {
    title: 'Report',
    icon: { 
      icon : 'book',
      pack : 'fas',
    },
    children : [
      { 
        title : "Piping Assets",
        link: '/pages/report/piping-assets',
        home: true,
      },
      { 
        title : "Piping Circuits",
        link: '/pages/report/piping-circuits',
        home: true,
      },
    ]
  },
];
