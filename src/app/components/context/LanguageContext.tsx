"use client";

// context/LanguageContext.tsx

import React, { createContext, useState, useContext, useEffect } from 'react';

// Definición de la estructura de las traducciones
interface Translations {
  portfolio: string;
  home: string;
  whoAmI: string;
  projects: string;
  projectsTitle: string;
  offWork: string;
  riskIt: string;
  testimonials: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  clickMe: string;
  hobbiesTitle: string;
  hobbiesSubtitle: string;
  hobbiesText1: string;
  hobbiesText2: string;
  hobbiesText3: string;
  hobby1Title: string;
  hobby2Title: string;
  hobby3Title: string;
  whyMeTitle: string;
  whyMeText1: string;
  whyMeText2: string;
  whyMeText3: string;
  whyMeText4: string;
  whyMeText5: string;
  contact: string;
  email: string;
}

// Interfaz para el estado del contexto de idioma
interface LanguageContextType {
  lang: 'es' | 'en';
  t: Translations; // Objeto de traducciones actual
  toggleLanguage: () => void;
}

// Diccionario de traducciones 
const translations: Record<'es' | 'en', Translations> = {
  en: {
    portfolio: "JDMB Portfolio",
    home: "HOME",
    whoAmI: "WHO AM I?",
    projects: "PROJECTS",
    projectsTitle: "Some of my projects",
    offWork: "OFF-WORK",
    riskIt: "RISK IT",
    testimonials: "TESTIMONIALS",
    heroTitle: "What I am, what I believe, what I build",
    heroSubtitle: "Because behind the code is a person: curious, creative and connected with the world that inspires them.",
    aboutTitle: "Who I am",
    aboutText1:
      "I am a future software engineer who has many expectations for society and a passion for creating tools that solve real problems. I would like to specialize in cybersecurity, dig into my knowledge in the backend and expand it in the frontend, design robust systems that improve people's lives and optimize processes in digital environments. I see software engineering as a form of constant learning.",
    aboutText2: "I'm motivated by understanding how things work and improving what already exists.",
    clickMe: "Click me",
    hobbiesTitle: "A bit of me outside a machine",
    hobbiesSubtitle:
      "My human side. Because although I am a software engineer, I am also someone who finds inspiration in the small moments, in the landscapes that surround me, in the music I listen to, in the people who accompany me.",
    hobbiesText1:
      "I like to disconnect to reconnect. Whether it's walking through the mountains of Nariño, sharing a good conversation, cooking something new or simply observing the world without screens.",
    hobbiesText2:
      "These spaces help me think better, create with more meaning and remember that behind every line of code there is a story, an emotion, an intention. I believe that the balance between the technical and the human not only improves my work, but also makes me more aware of the impact of what I build.",
    hobbiesText3: "Because in the end, we program for people, and I never want to lose sight of that.",
  hobby1Title: "Explore Nature",
  hobby2Title: "Share Conversations",
  hobby3Title: "Cook New Things",
    whyMeTitle: "Why risk it with me?",
    whyMeText1:
      "Riskying it with me is betting on a software engineer who not only masters technologies like Java, JavaScript, Python, C++ and HTML, but also understands the value of collaboration in diverse environments.",
    whyMeText2:
      "I have worked with distributed teams, adapting to different work styles, cultures and time zones, always prioritizing clear communication, precise documentation and respect for processes.",
    whyMeText3:
      "I believe that software is not built only with code, but with people who know how to listen, contribute and build together.",
    whyMeText4:
      "Furthermore, I stand out for soft skills that I consider essential: empathy to understand the needs of the team and the user, proactivity to anticipate problems and propose solutions, and resilience to adapt to changes without losing focus.",
    whyMeText5:
      "I am someone who adds value both technically and humanly, and who always seeks to contribute from both fronts.",
    contact: "Contact",
    email: "Email Address",
  },
  es: {
    portfolio: "Portafolio JDMB",
    home: "CASA",
    whoAmI: "QUIEN SOY?",
    projects: "PROYECTOS",
    projectsTitle: "Algunos de mis proyectos",
    offWork: "FUERA DEL TRABAJO",
    riskIt: "ARRIESGATE",
    testimonials: "TESTIMONIOS",
    heroTitle: "Lo que soy, lo que creo, lo que construyo",
    heroSubtitle:
      "Porque detrás del código hay una persona: curiosa, creativa y conectada con el mundo que la inspira.",
    aboutTitle: "Quien soy",
    aboutText1:
      "Soy un futuro ingeniero de software que tiene muchas expectativas para la sociedad y pasión por crear herramientas que resuelvan problemas reales, me gustaria especializarme en ciberseguridad, excavar en mi conocimiento en el backend y expandirlo en el frontend, diseñar sistemas robustos que mejoren la vida de las personas y optimicen procesos en entornos digitales, veo la ingeniería de software como una forma de aprendizaje constante.",
    aboutText2: "Me motiva entender cómo funcionan las cosas y mejorar lo que ya existe.",
    clickMe: "Tocame",
    hobbiesTitle: "Un poco de mi fuera de una maquina",
    hobbiesSubtitle:
      "Mi lado humano. Porque aunque soy ingeniero de software, también soy alguien que encuentra inspiración en los pequeños momentos, en los paisajes que me rodean, en la música que escucho, en las personas que me acompañan.",
    hobbiesText1:
      "Me gusta desconectarme para reconectarme. Ya sea caminando por las montañas de Nariño, compartiendo una buena conversación, cocinando algo nuevo o simplemente observando el mundo sin pantallas.",
    hobbiesText2:
      "Esos espacios me ayudan a pensar mejor, a crear con más sentido y a recordar que detrás de cada linea de código hay una historia, una emoción, una intención. Creo que el equilibrio entre lo técnico y lo humano no solo mejora mi trabajo, sino que me hace más consciente del impacto que puede tener lo que construyo.",
    hobbiesText3: "Porque al final, programamos para personas, y yo nunca quiero perder de vista eso.",
  hobby1Title: "Explorar la Naturaleza",
  hobby2Title: "Compartir Conversaciones",
  hobby3Title: "Cocinar Nuevo",
    whyMeTitle: "¿Por que arriesgarse conmigo?",
    whyMeText1:
      "Arriesgarse conmigo es apostar por un ingeniero de software que no solo domina tecnologias como Java, JavaScript, Python, C++ y HTML, sino que también entiende el valor de la colaboración en entornos diversos.",
    whyMeText2:
      "He trabajado con equipos distribuidos, adaptándome a distintos estilos de trabajo, culturas y zonas horarias, siempre priorizando la comunicación clara, la documentación precisa y el respeto por los procesos.",
    whyMeText3:
      "Creo que el software no se construye solo con código, sino con personas que saben escuchar, aportar y construir juntos.",
    whyMeText4:
      "Además, me destaco por habilidades blandas que considero esenciales: la empatía para entender las necesidades del equipo y del usuario, la proactividad para anticipar problemas y proponer soluciones, y la resiliencia para adaptarme a los cambios sin perder el enfoque.",
    whyMeText5:
      "Soy alguien que suma tanto en lo técnico como en lo humano, y que busca siempre aportar valor desde ambos frentes.",
    contact: "CONTACTO",
    email: "Correo electronico",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<'es' | 'en'>(() => {
    try {
      const stored = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
      return stored === 'en' ? 'en' : 'es';
    } catch {
      return 'es';
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch {
      // noop
    }
  }, [lang]);

  // cambiar entre 'es' y 'en'
  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'es' ? 'en' : 'es'));
  };

  //traducción actual
  const t = translations[lang];
  const value = { lang, t, toggleLanguage };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
};