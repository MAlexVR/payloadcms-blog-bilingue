export const en = {
  header: {
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
          { name: 'Proyecta Events', href: '#eventos-proyecta' },
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
      { name: 'Contact Us', href: '/contact' },
    ],
    actions: {
      login: 'Login',
      languageSelector: 'Language',
    },
  },
  hero: {
    title: 'Innovation in Research and Development',
    description:
      'Research group committed to academic excellence, technological development, and the generation of applied knowledge for real-world solutions',
    primaryButton: 'Our Services',
    secondaryButton: 'View Projects',
  },
  footer: {
    brand: {
      description:
        'Committed to excellence in research, technological development, and the generation of applied knowledge to transform our society.',
      innovationCenter: 'Innovation Center',
    },
    columns: {
      nosotros: {
        title: 'About Us',
        links: [
          { name: 'Who are we?', href: '#nosotros' },
          { name: 'Mission & Vision', href: '#mision-vision' },
          { name: 'Objectives', href: '#objetivos' },
          { name: 'Projects', href: '#proyectos' },
        ],
      },
      servicios: {
        title: 'Services',
        links: [
          { name: 'Service Portfolio', href: '#portafolio' },
          { name: 'Unified Services Lab - LSU', href: '#lsu' },
          { name: 'Solar Panel Testing Lab - LEPS', href: '#leps' },
          { name: 'Refrigerant Gas Regeneration Center', href: '#crgr' },
          { name: 'Service Request', href: '#solicitud' },
        ],
      },
      eventos: {
        title: 'Events',
        links: [
          { name: 'Proyecta Events', href: '#eventos-proyecta' },
          { name: 'Memories', href: '#memorias' },
        ],
      },
      legal: {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '#privacidad' },
          { name: 'Terms of Use', href: '#terminos' },
        ],
      },
    },
    copyright: {
      rights: 'All rights reserved.',
      developedBy: 'Powered by Next.js and Payload CMS',
    },
  },
  home: {
    about: {
      title: 'Who Are We?',
      description:
        'We are an interdisciplinary group of researchers dedicated to developing innovative projects in technology, renewable energy, and sustainability. Our commitment is to generate applicable knowledge that positively impacts society and the productive sector.',
      mission: {
        title: 'Mission',
        description:
          'To develop high-impact applied research that contributes to technological and scientific advancement, training qualified human talent and establishing effective links with the productive sector and the community.',
      },
      vision: {
        title: 'Vision',
        description:
          'To be recognized nationally and internationally as a leading group in research and technological development, a benchmark in innovation and generation of sustainable solutions for contemporary challenges.',
      },
    },
    services: {
      title: 'Our Services',
      description:
        'We offer specialized services through laboratories equipped with state-of-the-art technology',
      cards: [
        {
          title: 'Unified Services Laboratory',
          acronym: 'LSU',
          description:
            'Comprehensive analysis, measurement, and material characterization services using state-of-the-art equipment.',
          href: '#lsu',
        },
        {
          title: 'Solar Panel Testing Laboratory',
          acronym: 'LEPS',
          description:
            'Evaluation and certification of photovoltaic systems and solar energy technologies with international standards.',
          href: '#leps',
        },
        {
          title: 'Refrigerant Gas Regeneration Center',
          acronym: 'CRGR',
          description:
            'Recovery, recycling, and regeneration of refrigerant gases with a focus on environmental sustainability.',
          href: '#crgr',
        },
      ],
      cta: 'Request Services',
    },
    projects: {
      title: 'Featured Projects',
      description: 'Applied innovation that transforms challenges into opportunities',
      cards: [
        {
          title: 'Research Project 1',
          code: 'SGI-2024-001',
          year: '2024',
          description:
            'Development of innovative solutions applying scientific methodologies and emerging technologies',
          href: '#project-1',
        },
        {
          title: 'Research Project 2',
          code: 'SGI-2024-002',
          year: '2023',
          description:
            'Development of innovative solutions applying scientific methodologies and emerging technologies',
          href: '#project-2',
        },
        {
          title: 'Research Project 3',
          code: 'SGI-2024-003',
          year: '2022',
          description:
            'Development of innovative solutions applying scientific methodologies and emerging technologies',
          href: '#project-3',
        },
      ],
    },
    contact: {
      title: 'Ready to collaborate with us?',
      description:
        'Join our network of collaborators and access specialized research and technological development services',
      contactButton: 'Contact Us',
      portfolioButton: 'View Portfolio',
    },
  },
  contact: {
    meta: {
      title: 'Contact Us | GICS',
      description: 'Get in touch with our research and services team.',
    },
    tagline: 'Connect with us',
    title: 'We are here to help you',
    description:
      'Do you have any questions or comments? We would love to hear from you. Write to us and we will respond in less than 24 business hours.',
    form: {
      firstName: 'First Name',
      firstNamePlaceholder: 'Your first name',
      lastName: 'Last Name',
      lastNamePlaceholder: 'Your last name',
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g. John Doe',
      email: 'Email',
      emailPlaceholder: 'email@example.com',
      subject: 'Subject',
      subjectPlaceholder: 'Select a reason',
      subjects: {
        general: 'General Inquiry',
        collaboration: 'Collaboration',
        feedback: 'Feedback',
        other: 'Other reason',
      },
      message: 'Message',
      messagePlaceholder: 'Write your message here...',
      submit: 'Send Message',
      success: 'Message sent successfully!',
      error: 'There was an error sending the message. Please try again.',
      privacyNote: 'By sending this form, you accept our privacy policy.',
      privacyLink: 'privacy policy',
    },
    info: {
      title: 'Send us a message',
      emailTitle: 'Send us an email',
      emailDescription: 'Our team is ready to read you.',
      email: 'contact@gics-research.com',
      addressTitle: 'Visit us',
      addressDescription: 'Come meet us at our offices.',
      address: 'Calle 123 # 45 - 67, Bogota, Colombia',
      phone: '+57 (1) 123 4567',
      socialTitle: 'Follow us on social media',
    },
    map: {
      title: 'Our Headquarters',
      subtitle: 'Open Monday to Friday, 9:00 - 18:00',
    },
  },
}
