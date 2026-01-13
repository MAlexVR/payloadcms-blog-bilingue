export const es = {
  header: {
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
      { name: 'Contáctenos', href: '/contact' },
    ],
    actions: {
      login: 'Inicio de sesión',
      languageSelector: 'Idioma',
    },
  },
  hero: {
    title: 'Innovación en Investigación y Desarrollo',
    description:
      'Grupo de investigación comprometido con la excelencia académica, el desarrollo tecnológico y la generación de conocimiento aplicado a soluciones reales',
    primaryButton: 'Nuestros Servicios',
    secondaryButton: 'Ver Proyectos',
  },
  footer: {
    brand: {
      description:
        'Comprometidos con la excelencia en investigación, desarrollo tecnológico y la generación de conocimiento aplicado para transformar nuestra sociedad.',
      innovationCenter: 'Centro de Innovación',
    },
    columns: {
      nosotros: {
        title: 'Nosotros',
        links: [
          { name: '¿Quiénes somos?', href: '#nosotros' },
          { name: 'Misión y visión', href: '#mision-vision' },
          { name: 'Objetivos', href: '#objetivos' },
          { name: 'Proyectos', href: '#proyectos' },
        ],
      },
      servicios: {
        title: 'Servicios',
        links: [
          { name: 'Portafolio de servicios', href: '#portafolio' },
          { name: 'Laboratorio de Servicios Unificados - LSU', href: '#lsu' },
          { name: 'Laboratorio de Ensayos para Paneles Solares - LEPS', href: '#leps' },
          { name: 'Centro de Regeneración de Gases Refrigerantes', href: '#crgr' },
          { name: 'Solicitud de servicios', href: '#solicitud' },
        ],
      },
      eventos: {
        title: 'Eventos',
        links: [
          { name: 'Eventos Proyecta', href: '#eventos-proyecta' },
          { name: 'Memorias', href: '#memorias' },
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          { name: 'Política de privacidad', href: '#privacidad' },
          { name: 'Términos de uso', href: '#terminos' },
        ],
      },
    },
    copyright: {
      rights: 'Todos los derechos reservados.',
      developedBy: 'Desarrollado con Next.js y Payload CMS',
    },
  },
  home: {
    about: {
      title: '¿Quiénes Somos?',
      description:
        'Somos un grupo interdisciplinario de investigadores dedicados al desarrollo de proyectos innovadores en áreas de tecnología, energía renovable y sostenibilidad. Nuestro compromiso es generar conocimiento aplicable que impacte positivamente en la sociedad y el sector productivo.',
      mission: {
        title: 'Misión',
        description:
          'Desarrollar investigación aplicada de alto impacto que contribuya al avance tecnológico y científico, formando talento humano calificado y estableciendo vínculos efectivos con el sector productivo y la comunidad.',
      },
      vision: {
        title: 'Visión',
        description:
          'Ser reconocidos a nivel nacional e internacional como un grupo líder en investigación y desarrollo tecnológico, referente en innovación y generación de soluciones sostenibles para los desafíos contemporáneos.',
      },
    },
    services: {
      title: 'Nuestros Servicios',
      description:
        'Ofrecemos servicios especializados a través de laboratorios equipados con tecnología de última generación',
      cards: [
        {
          title: 'Laboratorio de Servicios Unificados',
          acronym: 'LSU',
          description:
            'Servicios integrales de análisis, medición y caracterización de materiales y sistemas con equipos de última generación.',
          href: '#lsu',
        },
        {
          title: 'Laboratorio de Ensayos para Paneles Solares',
          acronym: 'LEPS',
          description:
            'Evaluación y certificación de sistemas fotovoltaicos y tecnologías de energía solar con estándares internacionales.',
          href: '#leps',
        },
        {
          title: 'Centro de Regeneración de Gases Refrigerantes',
          acronym: 'CRGR',
          description:
            'Recuperación, reciclaje y regeneración de gases refrigerantes con enfoque en sostenibilidad ambiental.',
          href: '#crgr',
        },
      ],
      cta: 'Solicitar Servicios',
    },
    projects: {
      title: 'Proyectos Destacados',
      description: 'Innovación aplicada que transforma desafíos en oportunidades',
      cards: [
        {
          title: 'Proyecto de Investigación 1',
          code: 'SGI-2024-001',
          year: '2024',
          description:
            'Desarrollo de soluciones innovadoras aplicando metodologías científicas y tecnologías emergentes',
          href: '#proyecto-1',
        },
        {
          title: 'Proyecto de Investigación 2',
          code: 'SGI-2024-002',
          year: '2023',
          description:
            'Desarrollo de soluciones innovadoras aplicando metodologías científicas y tecnologías emergentes',
          href: '#proyecto-2',
        },
        {
          title: 'Proyecto de Investigación 3',
          code: 'SGI-2024-003',
          year: '2022',
          description:
            'Desarrollo de soluciones innovadoras aplicando metodologías científicas y tecnologías emergentes',
          href: '#proyecto-3',
        },
      ],
    },
    contact: {
      title: '¿Listo para colaborar con nosotros?',
      description:
        'Únete a nuestra red de colaboradores y accede a servicios especializados de investigación y desarrollo tecnológico',
      contactButton: 'Contáctenos',
      portfolioButton: 'Ver Portafolio',
    },
  },
  contact: {
    meta: {
      title: 'Contáctenos | GICS',
      description: 'Ponte en contacto con nuestro equipo de investigación y servicios.',
    },
    tagline: 'Conecta con nosotros',
    title: 'Estamos aquí para ayudarte',
    description:
      '¿Tienes alguna pregunta o comentario? Nos encantaría escucharte. Escríbenos y te responderemos en menos de 24 horas hábiles.',
    form: {
      firstName: 'Nombre',
      firstNamePlaceholder: 'Tu nombre',
      lastName: 'Apellido',
      lastNamePlaceholder: 'Tu apellido',
      fullName: 'Nombre Completo',
      fullNamePlaceholder: 'Ej. Juan Pérez',
      email: 'Correo electrónico',
      emailPlaceholder: 'correo@ejemplo.com',
      subject: 'Asunto',
      subjectPlaceholder: 'Selecciona un motivo',
      subjects: {
        general: 'Consulta General',
        collaboration: 'Colaboración',
        feedback: 'Sugerencias',
        other: 'Otro motivo',
      },
      message: 'Mensaje',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      submit: 'Enviar mensaje',
      success: '¡Mensaje enviado con éxito!',
      error: 'Hubo un error al enviar el mensaje. Por favor intenta de nuevo.',
      privacyNote: 'Al enviar este formulario, aceptas nuestra política de privacidad.',
      privacyLink: 'política de privacidad',
    },
    info: {
      title: 'Envíanos un mensaje',
      emailTitle: 'Envíanos un correo',
      emailDescription: 'Nuestro equipo está listo para leerte.',
      email: 'contacto@gics-investigacion.com',
      addressTitle: 'Visítanos',
      addressDescription: 'Ven a conocernos a nuestras oficinas.',
      address: 'Calle 123 # 45 - 67, Bogotá, Colombia',
      phone: '+57 (1) 123 4567',
      socialTitle: 'Síguenos en redes',
    },
    map: {
      title: 'Nuestras Oficinas Centrales',
      subtitle: 'Abierto de Lunes a Viernes, 9:00 - 18:00',
    },
  },
}
