const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 2,
    name: "Contact",
    type: "contact",
  },
  {
    id: 3,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio",
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery",
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact",
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills",
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive",
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2, 2025",
    title: "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
    image: "/images/blog1.png",
    link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
  },
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    category: "Database",
    items: ["MySQL", "Relational Database Design", "SQL"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "GitHub", "API Integration", "Responsive Dev"],
  },
  {
    category: "Other",
    items: ["E-commerce", "Shopify", "Client Communication"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/issamkebdani780",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://linkedin.com/in/issam-kebdani-8b6154334",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    {
      id: 5,
      name: "Healthora - Healthcare Appointment",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-5",
      children: [
        {
          id: 1,
          name: "Healthora Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Healthora — Healthcare Appointment & Management Platform",
            "Built a full-stack healthcare management platform designed around doctor-patient appointment management.",
            "Developed functionality allowing patients to manage their appointments and access prescriptions and medical documents.",
            "Implemented doctor functionality for managing availability, appointments, prescriptions, and customized medical documents.",
            "Built both the frontend and backend, including API integration and database functionality.",
          ],
        },
        {
          id: 2,
          name: "Frontend Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://healthoraweb.netlify.app",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "Portal Client Link",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://healthora-portal-client.vercel.app",
          position: "top-40 right-20",
        },
      ],
    },
    {
      id: 6,
      name: "RiseManager - COD Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-48",
      windowPosition: "top-[18vh] left-7",
      children: [
        {
          id: 1,
          name: "RiseManager Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "RiseManager — COD Order Management Platform",
            "Developed a landing page designed to manage, confirm, and deliver Cash on Delivery (COD) orders.",
            "Built responsive interfaces for business operations and order management using React.js and Tailwind CSS.",
          ],
        },
        {
          id: 2,
          name: "risemanager.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://risemanager.vercel.app",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 7,
      name: "Unik - Cosmetics Brand",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-96",
      windowPosition: "top-[31vh] left-7",
      children: [
        {
          id: 1,
          name: "Unik Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Unik — Cosmetics Brand Website",
            "Developed a modern responsive website for a cosmetics brand.",
            "Built reusable frontend components and responsive layouts.",
            "Implemented the interface using React.js and Tailwind CSS.",
            "Focused on presenting products and brand content through a modern user experience.",
          ],
        },
        {
          id: 2,
          name: "unik-eosin.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://unik-eosin.vercel.app",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 8,
      name: "Baytee - Hotel Booking",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-48 left-5",
      windowPosition: "top-[44vh] left-7",
      children: [
        {
          id: 1,
          name: "Baytee Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Baytee — Hotel Booking Platform",
            "Developed a responsive hotel booking platform focused on presenting accommodation information and booking functionality.",
            "Built reusable React components and responsive interfaces.",
            "Implemented the frontend architecture and user-facing booking experience using React.js and Tailwind CSS.",
          ],
        },
        {
          id: 2,
          name: "baytee.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://baytee.vercel.app",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 9,
      name: "Carvo - Automotive Project",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-48 left-48",
      windowPosition: "top-[57vh] left-7",
      children: [
        {
          id: 1,
          name: "Carvo Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Carvo — Automotive Web Project",
            "Developed a responsive automotive-focused web interface using React.js and Tailwind CSS.",
            "Built reusable components and responsive layouts for different screen sizes.",
            "Focused on delivering a clean and modern user experience.",
          ],
        },
        {
          id: 2,
          name: "carvo-mocha.vercel.app",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://carvo-mocha.vercel.app",
          position: "top-10 right-20",
        },
      ],
    },
    {
      id: 10,
      name: "Artigiano DZ - E-commerce",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-48 left-96",
      windowPosition: "top-[70vh] left-7",
      children: [
        {
          id: 1,
          name: "Artigiano DZ Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Artigiano DZ — E-commerce Project",
            "Built and developed an online presence for a footwear e-commerce business.",
            "Worked on the website and product presentation.",
            "Applied practical knowledge of e-commerce, customer communication, and digital marketing.",
            "Gained experience understanding how website presentation and marketing activities support online sales.",
          ],
        },
        {
          id: 2,
          name: "instagram.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://instagram.com/artigianodz",
          position: "top-10 right-20",
        },
        {
          id: 3,
          name: "store.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://artigianodz.linguaflo.me/collections/all",
          position: "top-50 left-40",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-5",
      subtitle: "Junior Full-Stack Web Developer",
      image: "",
      description: [
        "Hey! I'm Issam Kebdani 👋, a Junior Full-Stack Web Developer from Algeria.",
        "I have professional experience developing responsive web applications within a development team and hands-on experience building full-stack applications from frontend to backend and database.",
        "I have a strong foundation in React.js, JavaScript, HTML, CSS, Tailwind CSS, Express.js, REST APIs, and MySQL.",
        "I have built and deployed business websites, e-commerce platforms, booking systems, and management applications, including a healthcare appointment management platform.",
        "My previous experience in e-commerce sales and client communication developed strong skills in understanding customer needs, handling objections, and business-oriented communication.",
        "Education: Licence in Computer Science, Université Abou Bekr Belkaid — Tlemcen.",
      ],
    },
    {
      id: 5,
      name: "experience.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-10 left-48",
      subtitle: "Professional Experience",
      description: [
        "CREAPLUS DIGITAL (April 2026 - August 2026) | Junior Frontend Developer",
        "- Developed responsive web applications using React.js, JavaScript, HTML, CSS, and Tailwind CSS.",
        "- Built reusable frontend components and integrated REST APIs.",
        "",
        "MMG (Jan 2025 - Oct 2025) | Closer",
        "- Managed sales conversations for an e-commerce training program.",
        "- Used CRM tools to manage prospects and handle customer objections.",
        "",
        "MEDIAZ (Dec 2025 - Feb 2026) | Closer",
        "- Managed customer conversations and sales processes for a management program.",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      position: "top-10 left-5",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [],
};

const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  locations,
};

const INITIAL_Z_INDEX = 10;

const WINDOW_CONFIG = {
  finder: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0 },
  safari: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0 },
  photos: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0 },
  terminal: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0 },
  contact: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0 },
  txtfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, data: null },
  imgfile: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0, data: null },
  resume: { isOpen: false, isMinimized: false, isMaximized: false, zIndex: 0 },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };