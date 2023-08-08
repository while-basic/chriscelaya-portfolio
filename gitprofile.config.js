// gitprofile.config.js

const config = {
  github: {
    username: 'while-basic', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },

  social: {
    linkedin: 'christophercelaya',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://chriscelaya.xyz',
    phone: '',
    email: 'chris@chriscelaya.xyz',
  },

  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1l9IEuiGeIzf-Nn80EOXMKsR9jakR5fRr/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },

  skills: [
    'Java',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHP',
    'CSS',
    'HTML',
    'Tailwind',
    'Python',
  ],
  experiences: [
    {
      company: 'Microsoft',
      position: 'Data Center Technician II',
      from: '2021',
      to: '2022',
      companyLink: 'https://microsoft.com',
    },
    {
      company: 'CN Wire',
      position: 'Electro-mechanical Technician',
      from: '2018',
      to: '2022',
      companyLink: 'https://cnwire.com',
    },
    {
      company: 'Schneider Electric',
      position: 'Wiring Technician | QA Inspector',
      from: '2016',
      to: '2017',
      companyLink: 'https://schneiderelectric.com',
    },
    {
      company: 'Self Employed',
      position: '',
      from: '2015',
      to: '2022',
      companyLink: '',
    },
    {
      company: 'Delfingen',
      position: 'Industrial Maintenance Mechanic',
      from: '2015',
      to: '2016',
      companyLink: 'https://delfingen.com/en/',
    },
    {
      company: 'Dal-Tile',
      position: 'Industrial Hydraulic Technician',
      from: '2012',
      to: '2015',
      companyLink: 'https://www.daltile.com/',
    },
    {
      company: 'Trans Communications',
      position: 'Cable Technician',
      from: '2012',
      to: '2012',
      companyLink: '',
    },
  ],


  certifications: [
    {
      name: 'NFPA 70E - Electrical Safety',
      body: 'Requirements for safe work practices Electrical Wiring, Panel Inspection & Critical Facilities',
      year: '2022',
      link: ''
    },
    {
      name: 'OSHA 10 - Construction Safety',
      body: 'Health Hazards Focus Four, Handling Hazards, Employer Responsibilities, Hand and Power Tool Hazards',
      year: '2022',
      link: ''
    },
    {
      name: 'Build Your First Blockchain - Udemy',
      body: 'Concepts and intuitions, building chains, creating currency and contracts',
      year: '2018',
      link: ''
    },
    {
      name: 'Blockchain & Bitcoin Fundamentals - Udemy',
      body: 'Fundamentals blockchain, bitcoin, contracts, cryptocurrencies, tokens',
      year: '2018',
      link: ''
    },
    {
      name: 'Master Ethereum & Solidity Programming - Udemy',
      body: 'Blockchain, contract compilation and deployment',
      year: '2018',
      link: ''
    },
  ],


  education: [
    {
      institution: 'University of Texas at El Paso',
      degree: 'Electrical Engineering',
      from: '2007',
      to: '2008',
    },
    {
      institution: 'El Paso Community College',
      degree: 'Associate Mechanical Engineering',
      from: '2008',
      to: '2009',
    },
    {
      institution: 'El Paso Community College',
      degree: 'Associate Computer Electrical Engineering',
      from: '2012',
      to: '2013',
    },
    {
      institution: 'University of Texas at El Paso',
      degree: 'Degree',
      from: '2012',
      to: '2014',
    },
    {
      institution: 'University of Texas at El Paso',
      degree: 'Electrical Engineering',
      from: '2015',
      to: '2017',
    },
    {
      institution: 'El Paso Community College',
      degree: 'Associate Computer Science',
      from: '2023',
      to: '2024',
    },
    
    
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'BeatSaber MIDI Controller',
      description: `MIDI-BS Controller is a midi controller for creating beat maps for the virtual reality game Beat Saber using a Novation MIDI Controller.`,
      imageUrl: '',
      link: 'https://youtu.be/fW6c3pb60kE',
    },
    {
      title: 'Law-GPT',
      description: `Apple watch enabled with OpenAi, features streaming, and voice to text.`,
      imageUrl: '',
      link: 'https://youtu.be/19iWJPfot6k',
    },
    {
      title: 'UniMe',
      description: `Connecting NFT's and crypto currency through Metamask and Unity, enabling players to own, trade, and monetize unique in-game web3 wallets, characters, and assets securely.`,
      imageUrl: '',
      link: 'https://youtu.be/3EK6BbkEthA',
    },
    {
      title: 'Blockchain Domain Name Service',
      description: `Deployed a domain name service on the Polygon Network, enabling users to connect Metamask wallet's to their personal domains.`,
      imageUrl: '',
      link: 'https://www.youtube.com/watch?v=W3PUwbJamiY&t=2s',
    },
    {
      title: 'Facebook Profile Scrape Tool',
      description: `Testing vulnerabilities on Facebook.com.`,
      imageUrl: '',
      link: 'https://www.youtube.com/watch?v=RPDdzpXB-2A',
    },
    {
      title: 'Custom Beat Saber Map',
      description: `Deployed a domain name service on the Polygon Network, enabling users to connect Metamask wallet's to their personal domains.`,
      imageUrl: '',
      link: 'https://www.youtube.com/watch?v=_lwYn8YuRYs',
    },
    {
      title: 'QUARANTINE 2020',
      description: `Released an LP album during the COVID-19 lockdown in 2020. Tracks Available on Spotify, TikTok, Instagram, SoundCloud and many others.`,
      imageUrl: '',
      link: 'https://www.instagram.com/p/CcZm_2yjeuY/?utm_source=ig_web_copy_link',
    },
    {
      title: 'Varavyshka',
      description: `Created a flower eCommerce store with my colleague in Russia. Site is down due to recent events.`,
      imageUrl: '',
      link: 'http://varavyshka.com/',
    },
    {
      title: 'Stable Diffusion Artwork',
      description: `Quick showcase of artwork I've created using stable diffusion.`,
      imageUrl: '',
      link: 'https://www.instagram.com/reel/Csna5ttOA1J/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    {
      title: 'Stable Diffusion Animation',
      description: `Short video animation.`,
      imageUrl: '',
      link: 'https://www.instagram.com/p/CmNF_iYjR3L/',
    },
    {
      title: 'Unreal Engine 5 Enviornment',
      description: `Developed small forest environment, created camera pan movements and angles.`,
      imageUrl: '',
      link: 'https://www.instagram.com/p/Ch6W2jMjjnc/',
    },
    {
      title: 'Blender Video Animation',
      description: `Created a short static shot of a metallic ball in levitation.`,
      imageUrl: '',
      link: 'https://www.instagram.com/p/ChrG4v_jgls/',
    },
    {
      title: '2009 Nissan 350z Engine Build',
      description: `Built a V6 naturally aspirated VQ35DE engine for my Nissan 350z.`,
      imageUrl: '',
      link: 'https://www.instagram.com/p/Bzy2RRqhB6I/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    },
    {
      title: 'Wi-Fi Deauthenticator',
      description: `Developed a wireless toolkit to create nonsensical hotspot names, deauthenticate, and more.`,
      imageUrl: '',
      link: 'https://www.instagram.com/p/CE62Nq8hjD_/?img_index=1',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
