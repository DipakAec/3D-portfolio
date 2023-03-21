import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    git,
    shopify,


    mov,
    port,
    bmi,
    weather,
    porthtml,

    threejs,
    mbs,
    mysql,
    wordpress,
    php,

    contem,
    raga,
    uma,
    siba,
    mbsw,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },

    {
      id: "portfolio",
      title: "Works",
    },

    {
      id: "work",
      title: "Projects",
    },
    
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Web App Development",
      icon: mobile,
    },
    {
      title: "WordPress & E-commerce",
      icon: backend,
    },
    {
      title: "Hosting",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "Wordpress",
      icon: wordpress,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "shopify",
      icon: shopify,
    },

  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "MindBrew Studio",
      icon: mbs,
      iconBg: "#383E56",
      date: " August 2022 - Present",
      points: [
        "Developing websites using HTML, CSS, JavaScript, and jQuery languages.",
        "Coded websites Back-End using PHP, and MySQL.",
        "Provided website development and maintenance in WordPress and wocommerce.",
        "Hosted website on various hosting Platforms.",
        "Developed user-oriented visuals and features usingfront-end languages to increase site traffic.",
        "Conceived and built optimized landing pages in HTML and CSS for integration and cross-browsercompatibility.",
  
      ],
    },
    
  ];
  
  const jobs = [
    {
      name: "Raga Interior",
      description:
        "Raga Interior website is a Display Website build on HTML,CSS,JS and PHP,MySQL.In this site they display their works ,user can ask for services.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },

      ],
      image: raga,
      website_link: "https://ragakitchen.com/",
      role: "Development"
    },

    {
      name: "Contemporary",
      description:
        "Contemporary Real Estate Brokrage is a Website build on WordPress.This is a UAE based brokrage company.In this site they showcase there popertys and people can see and contact them to buy.",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "Elementor",
          color: "green-text-gradient",
        },
       
      ],
      image: contem,
      website_link: "https://contemporaryrealestate.ae/",
      role: "Development & Maintanence"
    },

    {
      name: "UMA Group",
      description: "UMA Group website is display site of UMA Group.It build on HTML,CSS,Bootstrap,JavaScript and PHP.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: uma,
      website_link: "https://umagroup.in/",
      role: "Development"
    },

    {
      name: "MindBrew Studio",
      description:
        "MindBrew Studio is a one stop ad agency which provide services include Branding,Marketing,A-V ad and Web services.I created a Website for them to show there work to the world.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
      ],
      image: mbsw,
      website_link: "https://mindbrewstudio.com/",
      role: "Development & Maintanence"
    },

    {
      name: "Madame Sibarita",
      description:
        "Madame Sibarita website is build on WordPress ,It's a wo-commerce site.This SIte comes to us with some prblems. Some pages were brocken,Animation distrubed.Currently we maintain this site",
      tags: [
        {
          name: "WordPress",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Java Script",
          color: "pink-text-gradient",
        },
        {
          name: "Gsap",
          color: "pink-text-gradient",
        },
      ],
      image: siba,
      website_link: "https://madamesibarita.com/",
      role: "Maintanence"
    },

  ];

  
  const projects = [
    {
      name: "React Weather App",
      description:
        "React Weather App is a web app built on React JSand TailwindCSS. Used open-weather API to getweather. Users can search for the weather by place.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "OpenWeather API",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/DipakAec/React-Weather-App",
      website_link: "https://dipakaec.github.io/React-Weather-App",
    },

    {
      name: "Movie Search",
      description:
        "React Movie Search App is a movie search web appbuilt on React JS and tailwind CSS. I used themoviedb API for searching movies.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "theMovieDB",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind-css",
          color: "pink-text-gradient",
        },
      ],
      image: mov,
      source_code_link: "https://github.com/DipakAec/movie-Search-React",
      website_link: "https://dipakaec.github.io/movie-Search-React/",
    },

    {
      name: "BMI Calculetor",
      description:
        "BMI calculator is a BMI calculating web app that cancalculate the BMI of a person by using the Heightand Weight of that person and can give results.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind-css",
          color: "green-text-gradient",
        },
      ],
      image: bmi,
      source_code_link: "https://github.com/DipakAec/React-BMI-calculetor",
      website_link: "https://dipakaec.github.io/React-BMI-calculetor/",
    },

    {
      name: "Job IT",
      description:
        "React Portfolio App is my Personal Portfolio build in react js.Here I showcase my office and personal projects",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "React States",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/DipakAec/React-Portfolio",
      website_link: "https://dipak-react-portfolio.vercel.app/",
    },

  ];
  
  export { services, technologies, experiences, jobs, projects };