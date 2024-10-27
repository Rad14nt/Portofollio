import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import jesticon from "../../assets/icons/jesticon.svg";
import gymicon from "../../assets/icons/gym-icon.svg";
import communicationicon from "../../assets/icons/communicationicon.svg";
import hobbyicon from "../../assets/icons/hobbyicon.svg";
import journeyicon from "../../assets/icons/journeyicon.svg";
import giticon from "../../assets/icons/giticon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
import dockericon from "../../assets/icons/dockericon.svg";
import awsicon from "../../assets/icons/awsicon.svg";
import angularicon from "../../assets/icons/angularicon.svg";
import springbooticon from "../../assets/icons/spring-booticon.svg";
import pqsqlicon from "../../assets/icons/pqsqlicon.svg";
import jenkinsicon from "../../assets/icons/jenkinsicon.svg";
import phpicon from "../../assets/icons/phpicon.svg";
import kotlinicon from "../../assets/icons/kotlinicon.svg";
import sqlicon from "../../assets/icons/sqlicon.svg";
import flywayicon from "../../assets/icons/flywayicon.svg";
import fluttericon from "../../assets/icons/fluttericon.svg";
import nestjsicon from "../../assets/icons/nesticon.svg";
import javaicon from "../../assets/icons/javaicon.svg";
import juniticon from "../../assets/icons/juniticon.svg";
import totalftix from "../../assets/img/totalfitx.webp";
import profilepicture from "../img/me2.webp";
import travelicon from "../../assets/icons/travel-icon.svg";
import bunnyicon from "../../assets/icons/bunnyicon.svg";
import solidwhiteicon from "../../assets/icons/solid-white-icon.svg";
import brainshoticon from "../../assets/icons/brainshoticon.svg";


import bbcicon from "../../assets/icons/bbcicon.svg";
import tbzicon from "../../assets/icons/tbz-icon.svg";


import generaliicon from "../../assets/icons/generaliicon.svg";
import cleoicon from "../../assets/icons/cleoagicon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";

import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import {GoHome, GoPerson, GoStack, GoProject, GoBriefcase} from "react-icons/go";

// import {GoMail} from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
// import { FiLink } from "react-icons/fi";


export const headerIntroData = {
  title: {
    de: "Hi, ich bin Andrei",
    en: "Hi, I'm Andrei",
  },
  subtitle: "Fullstack Developer @ CLEO AG",
  description: {
    de: "Ich bin Andrei, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Entwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Andrei, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "TotalFitX",
    description:
        "Eine umfassende Gesundheits- und Fitness-App, die es Nutzern ermöglicht, ihre Fitness- und Wellness-Ziele effizient zu erreichen. TotalFitX bietet ein zentrales Dashboard zur Erfassung von Kalorien, Schlaf, Workouts und Gesundheitsmetriken und weiteres. Entwickelt mit einen modernen Tech-Stack wie Java, Spring Boot, React, TypeScript und Docker. Diese Anwendung befindet sich noch in der Entwicklung.",
    description_EN:
        "A comprehensive health and fitness app designed to help users efficiently reach their fitness and wellness goals. TotalFitX provides a centralized dashboard to track calories, sleep, workouts, health metrics and much more . Built with a modern tech stack including Java, Spring Boot, React, TypeScript, and Docker. This application is still under development.",
    technologies: [
      { name: "Java", icon: javaicon },
      { name: "Spring Boot", icon: springbooticon },
      { name: "React", icon: reacticon },
      { name: "TypeScript", icon: typescripticon },
      { name: "NextJS", icon: nextjsiconwhite },
      { name: "Docker", icon: dockericon },
      { name: "AWS", icon: awsicon },
      { name: "PostgreSQL", icon: pqsqlicon },
      { name: "Flyway", icon: flywayicon },
      { name: "Flutter", icon: fluttericon },
      { name: "JUnit", icon: juniticon },
      { name: "TailwindCSS", icon: tailwindcssicon },

    ],
    image: totalftix,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#4CAF50",
    },
  },
  {
    title: "Video Uploader",
    description:
        "Nachdem ich von der Brain-Shot AG gebeten wurde, eine Lösung für sie zu entwickeln, war dieses Projekt eine steile Lernkurve. Das Projekt wurde innerhalb von drei Wochen entworfen und abgeschlossen. Das Ziel war es, eine Benutzeroberfläche in Webflow zu implementieren, die es Lehrern ermöglicht, Videos zu einer externen API namens Bunny hochzuladen, welche anschließend auch das Webflow CMS aktualisiert. Aus Sicherheitsgründen habe ich eine API auf AWS erstellt, da Webflow nur clientseitig funktioniert. AWS wurde dann auch für rollenbasierte Authentifizierung verwendet.",
    description_EN:
        "Having been asked by Brain-Shot AG to develop a solution for them, this project was a steep learning curve. The project was designed and completed in 3 weeks. The goal was to implement a UI into Webflow, that allowed Teachers to upload videos to an external API called Bunny, which afterwards would update the Webflow CMS aswell. For security purposes I created an API on AWS, since Webflow is client side only. AWS was then also used for role-based authentication,",
    technologies: [
      { name: "AWS", icon: awsicon },
      { name: "JavaScript", icon: javascripticon },
      { name: "React", icon: htmlicon },
      { name: "TypeScript", icon: cssicon },
      { name: "Bunny API", icon: bunnyicon },
      { name: "Wordpress", icon: wordpressicon},
      { name: "HTML", icon: htmlicon},
      { name: "CSS", icon: cssicon},

    ],
    image: totalftix,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#4CAF50",
    },
  },
  {
    title: "Digital Financing Solution",
    description:
        "Eine umfassende Gesundheits- und Fitness-App, die es Nutzern ermöglicht, ihre Fitness- und Wellness-Ziele effizient zu erreichen. TotalFitX bietet ein zentrales Dashboard zur Erfassung von Kalorien, Schlaf, Workouts und Gesundheitsmetriken und weiteres. Entwickelt mit einen modernen Tech-Stack wie Java, Spring Boot, React, TypeScript und Docker. Diese Anwendung befindet sich noch in der Entwicklung.",
    description_EN:
        "A comprehensive health and fitness app designed to help users efficiently reach their fitness and wellness goals. TotalFitX provides a centralized dashboard to track calories, sleep, workouts, health metrics and much more . Built with a modern tech stack including Java, Spring Boot, React, TypeScript, and Docker. This application is still under development.",
    technologies: [
      { name: "Java", icon: javaicon },
      { name: "Spring Boot", icon: springbooticon },
      { name: "React", icon: reacticon },
      { name: "TypeScript", icon: typescripticon },
      { name: "NextJS", icon: nextjsiconwhite },
      { name: "Docker", icon: dockericon },
      { name: "AWS", icon: awsicon },
      { name: "PostgreSQL", icon: pqsqlicon },
      { name: "Flyway", icon: flywayicon },
      { name: "Flutter", icon: fluttericon },
      { name: "JUnit", icon: juniticon },
      { name: "TailwindCSS", icon: tailwindcssicon },

    ],
    image: totalftix,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#4CAF50",
    },
  }
] as const;


export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataFrontendDevelopment = [
  {
    skillsTitle: "Frontend Development",
    skills: [
      {
        title: "HTML",
        hash: "#HTML",
        icon: htmlicon,
        color: "#E34F26",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#00D7FE",
      },
      {
        title: "Angular",
        hash: "#Angular",
        icon: angularicon,
        color: "#DD0031",
      },
      {
        title: 'nextjs',
        hash: "#NextJS",
        icon: nextjsiconwhite,
        color: "#61DAFB",
      },
      {
        title: "Jest",
        hash: "#Jest",
        icon: jesticon,
        color: "#E83E8C",
      },
      {
        title: "Tailwindcss",
        hash: "#Tailwindcss",
        icon: tailwindcssicon,
        color: "#44A8B3",
      },
    ],
  },
] as const;

export const skillsDataBackendDevelopment = [
  {
    skillsTitle: "Backend Development",
    skills: [
      {
        title: "Java",
        hash: "#Java",
        icon: javaicon,
        color: "#73A1FB",
      },
      {
        title: "Spring Boot",
        hash: "#SpringBoot",
        icon: springbooticon,
        color: "#8BC34A",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#FFDA4B",
      },
      {
        title: "Node.js",
        hash: "#NodeJS",
        icon: nodejsicon,
        color: "#83CD29",
      },
      {
        title: "PHP",
        hash: "#PHP",
        icon: phpicon,
        color: "#777BB4",
      },
      {
        title: "Kotlin",
        hash: "#Kotlin",
        icon: kotlinicon,
        color: "#F88316",
      },
      {
        title: "NestJS",
        hash: "#NestJS",
        icon: nestjsicon,
        color: "#E0234E",
      },
      {
        title: "JUnit",
        hash: "#JUnit",
        icon: juniticon,
        color: "#25A162",
      },
    ],
  },
] as const;

export const skillsDataDatabaseManagement = [
  {
    skillsTitle: "Database",
    skills: [
      {
        title: "SQL",
        hash: "#SQL",
        icon: sqlicon,
        color: "#00BCF2",
      },
      {
        title: "PostgreSQL",
        hash: "#PostgreSQL",
        icon: pqsqlicon,
        color: "#336791",
      },
      {
        title: "Flyway",
        hash: "#Flyway",
        icon: flywayicon,
        color: "#CC0000",
      },
    ],
  },
] as const;

export const skillsDataDevOpsCloud = [
  {
    skillsTitle: "DevOps & Cloud",
    skills: [
      {
        title: "Docker",
        hash: "#Docker",
        icon: dockericon,
        color: "#2496ED",
      },
      {
        title: "AWS",
        hash: "#AWS",
        icon: awsicon,
        color: "#FF9900",
      },
      {
        title: "Jenkins",
        hash: "#Jenkins",
        icon: jenkinsicon,
        color: "#F0D6B7",
      },
      {
        title: "Git",
        hash: "#Git",
        icon: giticon,
        color: "#F05032",
      },
    ],
  },
] as const;


export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Erfahrung", en: "Experience", hash: "#experience", icon: GoBriefcase },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  // { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;


export const sideBarRightMail = {
  link: "mailto:andrei@gimli.ro",
  text: "andrei@gimli.ro",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/andrei-mititelu-24b9b7192/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/Rad14nt",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "mailto:andrei@gimli.ro",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"The best way to predict the future is to create it."`,
    author: "Abraham Lincoln",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Mein Weg in die IT-Welt",
      description:
          "Vor 12 Jahren zog ich in die Schweiz, wo ich die Primarschule abschloss, danach das Gymnasium besuchte und schliesslich meine Lehre absolvierte. In die Fussstapfen meines Vaters tretend, begann ich meine Laufbahn in der IT-Branche. Hier habe ich meine Leidenschaft und meinen Platz gefunden.",
      icon: journeyicon,
    },
    {
      title: "Kraft und Geist im Einklang",
      description:
          "Ich bin überzeugt davon, dass ein gesunder Körper der Schlüssel zu einem gesunden Geist ist. Das Fitnessstudio ist mehr als nur ein Hobby; es ist ein wesentlicher Bestandteil meines Lebens. Es hilft mir, den Kopf freizubekommen, unkonventionelle Ideen zu entwickeln und hält mich mental und körperlich stark und gesund.",
      icon: gymicon,
    },
    {
      title: "Die Vielfalt des Lebens",
      description:
          "Ich tauche gerne in neue Interessen ein und habe im Laufe der Jahre viele Hobbys ausprobiert. Diese Vielfalt ermöglicht es mir, neue Verbindungen aufzubauen, flexibel zu bleiben und meine Kreativität zu fördern – sowohl in meiner Freizeit als auch bei der Arbeit.",
      icon: hobbyicon,
    },
    {
      title: "Menschen im Mittelpunkt",
      description:
          "Als extrovertierte Person finde ich schnell Anschluss in neuen Gruppen und geniesse es, Gespräche und gemeinsame Erlebnisse zu teilen. Der Austausch mit anderen inspiriert mich und eröffnet mir immer wieder neue Perspektiven.",
      icon: communicationicon,
    },
    {
      title: "Reiselust und Welterkundung",
      description:
          "Das Reisen ist eine wahre Leidenschaft von mir. Die Welt zu erkunden und neue Kulturen kennenzulernen erweitert meinen Horizont und inspiriert mich in unzähligen Bereichen – beruflich wie persönlich.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "My Journey into IT",
      description:
          "Twelve years ago, I moved to Switzerland, where I completed primary school, went on to gymnasium, and then finished my apprenticeship. Following in my father’s footsteps, I entered the IT industry, where I discovered my passion and found my place.",
      icon: journeyicon,
    },
    {
      title: "Strength and Mind in Balance",
      description:
          "I believe that a healthy body is key to a healthy mind. The gym is more than a hobby; it's an essential part of my life. It allows me to take my mind off work, come up with out-of-the-box ideas, and keeps me healthy and strong, both mentally and physically.",
      icon: gymicon,
    },
    {
      title: "Exploring Life's Variety",
      description:
          "I love diving into new interests, and over the years, I’ve tried out many hobbies. This variety lets me build new connections, keeps me adaptable, and fuels my creativity, whether in my free time or work.",
      icon: hobbyicon,
    },
    {
      title: "People-Centric",
      description:
          "As an extrovert, I find myself fitting in well with new groups, enjoying conversations and shared experiences. Interacting with others inspires me and brings fresh perspectives.",
      icon: communicationicon,
    },
    {
      title: "Wanderlust and World Exploration",
      description:
          "Traveling is a true passion of mine. Exploring the world and learning about new cultures broadens my perspective and inspires me in countless ways, both professionally and personally.",
      icon: travelicon,
    },
  ],
};


export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Andrei meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Andrei may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const resumeSectionData = {
  sectionId: "experience",
  title: {
    de: "Erfahrung",
    en: "Experience",
  },
  subtitle: {
    de: "Meine Ausbildung und Erfahrung",
    en: "My Education and Experience",
  },
  educationTitle: {
    de: "Ausbildung",
    en: "Education",
  },
  experienceTitle: {
    de: "Erfahrung",
    en: "Experience",
  },
};

export const resumeData = [
  {
    id: 1,
    category: "education",
    logo: tbzicon,
    year: {
      de: "2020 - 2024",
      en: "2020 - 2024",
    },
    title: {
      de: "Berufsschule Applikationsentwickler",
      en: "Vocational School for Application Development",
    },
    desc: {
      de: "Berufsbegleitende Ausbildung während der Lehre.",
      en: "Part-time vocational training during the apprenticeship.",
    },
  },
  {
    id: 2,
    category: "education",
    logo: bbcicon,
    year: {
      de: "2020-2021",
      en: "2020-2021",
    },
    title: {
      de: "Basislehrjahr Lehre",
      en: "Basic Apprenticeship Year",
    },
    desc: {
      de: "Basislehrjahr der Informatikerlehre.",
      en: "Basic year of the IT apprenticeship.",
    },
  },
  {
    id: 3,
    category: "education",
    logo: solidwhiteicon,
    year: {
      de: "- 2019",
      en: "- 2019",
    },
    title: {
      de: "Grundbildung",
      en: "Basic Education",
    },
    desc: {
      de: "",
      en: "",
    },
  },
  {
    id: 4,
    category: "experience",
    logo: cleoicon,
    year: {
      de: "2024 - Aktuell",
      en: "2024 - Present",
    },
    title: {
      de: "CLEO AG",
      en: "CLEO AG",
    },
    desc: {
      de: "Full-Stack Entwickler",
      en: "Full-Stack Developer",
    },
  },
  {
    id: 5,
    category: "experience",
    logo: brainshoticon,
    year: {
      de: "2024 - 2024",
      en: "2024 - 2024",
    },
    title: {
      de: "Brain-Shot AG",
      en: "Brain-Shot AG",
    },
    desc: {
      de: "Full-Stack Entwickler - 4 Wochen Projekt",
      en: "Full-Stack Developer - 4-week project",
    },
  },
  {
    id: 6,
    category: "experience",
    logo: generaliicon,
    year: {
      de: "2020 - 2024",
      en: "2020 - 2024",
    },
    title: {
      de: "Generali Schweiz AG",
      en: "Generali Switzerland AG",
    },
    desc: {
      de: "Lehre Applikationsentwickler",
      en: "Application Developer Apprenticeship",
    },
  },
];



export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
