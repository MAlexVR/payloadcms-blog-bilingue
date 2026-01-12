export type MenuItem = {
  name: string
  href: string
  submenu?: MenuItem[]
}

export type HeaderDictionary = {
  navigation: MenuItem[]
  actions: {
    login: string
    languageSelector: string
  }
}

export const dictionary = {
  es: {
    navigation: [
      { name: 'Inicio', href: '/' },
      {
        name: 'Nosotros',
        href: '#',
        submenu: [
          { name: '¿Quiénes somos?', href: '#nosotros' },
          { name: 'Misión y visión', href: '#mision-vision' },
          { name: 'Objetivos', href: '#objetivos' },
          { name: 'Proyectos', href: '#proyectos' },
          { name: 'Gestión del conocimiento', href: '#gestion' },
        ],
      },
      {
        name: 'Eventos',
        href: '#',
        submenu: [
          { name: 'Eventos Proyecta', href: '#eventos-proyecta' },
          { name: 'Memorias', href: '#memorias' },
        ],
      },
      {
        name: 'Servicios',
        href: '#',
        submenu: [
          { name: 'Portafolio de servicios', href: '#portafolio' },
          { name: 'Laboratorio de Servicios Unificados - LSU', href: '#lsu' },
          { name: 'Laboratorio de Ensayos para Paneles Solares - LEPS', href: '#leps' },
          { name: 'Centro de Regeneración de Gases Refrigerantes', href: '#crgr' },
          { name: 'Solicitud de servicios', href: '#solicitud' },
        ],
      },
      { name: 'Contáctenos', href: '#contacto' },
    ],
    actions: {
      login: 'Inicio de sesión',
      languageSelector: 'Idioma',
    },
  },
  en: {
    navigation: [
      { name: 'Home', href: '/' },
      {
        name: 'About Us',
        href: '#',
        submenu: [
          { name: 'Who are we?', href: '#nosotros' },
          { name: 'Mission & Vision', href: '#mision-vision' },
          { name: 'Objectives', href: '#objetivos' },
          { name: 'Projects', href: '#proyectos' },
          { name: 'Knowledge Management', href: '#gestion' },
        ],
      },
      {
        name: 'Events',
        href: '#',
        submenu: [
          { name: 'Projecta Events', href: '#eventos-proyecta' },
          { name: 'Memories', href: '#memorias' },
        ],
      },
      {
        name: 'Services',
        href: '#',
        submenu: [
          { name: 'Service Portfolio', href: '#portafolio' },
          { name: 'Unified Services Lab - LSU', href: '#lsu' },
          { name: 'Solar Panel Testing Lab - LEPS', href: '#leps' },
          { name: 'Refrigerant Gas Regeneration Center', href: '#crgr' },
          { name: 'Service Request', href: '#solicitud' },
        ],
      },
      { name: 'Contact Us', href: '#contacto' },
    ],
    actions: {
      login: 'Login',
      languageSelector: 'Language',
    },
  },
}
