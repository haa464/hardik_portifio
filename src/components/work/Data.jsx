import Work1 from "../../assets/projects/download.png";
import Work2 from "../../assets/projects/work-2.png";
import Work3 from "../../assets/projects/work-3.png";
import Work4 from "../../assets/projects/work-4.png";
import Work5 from "../../assets/projects/wordpress-1.png";
import Work6 from "../../assets/projects/wordpress-2.png";
import Work7 from "../../assets/projects/wordpress-3.png";
import Work8 from "../../assets/projects/wordpress-4.png";
import Work9 from "../../assets/projects/wordpress-5.png";


export const projectsData = [
      {
        id: 1,
        image: Work4,
        title: "Real Estate Website",
        category: "Front End Developer",
        language: ["React js", "Tailwind ", "formik"],
        isOpen: true,
        gitlink: "https://github.com/haa464/real-estate", 
        link: "https://real-estate-plum.vercel.app/",
        
      },
      {
        id: 2,
        image: Work1,
        title: "Travel Tour Website",
        category: "Front End Developer",
        language: ["React js","Javascript", "CSS", "Swiper js", "animation"],
        isOpen: true,
        gitlink: "https://github.com/haa464/Travel-Tour",
        link: "https://travel-tour-sooty.vercel.app/"
      },
      {
        id: 3,
        image: Work2,
        title: "Restaurant Website",
        category: "Front End Developer",
        language: ["React js", "CSS", "Javascript"],
        isOpen: true,
        gitlink: "https://github.com/haa464/ui_restaurant",
        link: "https://ui-restaurant.vercel.app/"
      },
      {
        id: 4,
        image: Work3,
        title: "Camp Website",
        category: "Front End Developer",
        language: ["React js", "Tailwind ", "Framer Motion", "Typescript"],
        isOpen: true,
        gitlink: "https://github.com/haa464/landing-camp",
        link: "https://landing-camp.vercel.app/"
      },
      {
        id: 5,
        image: Work5,
        title: "Web design",
        category: "Wordpress",
        language: ["React js", "Tailwind ", "formik"],
        isOpen: false,
        link: "https://magicpestcontrol.com.au/",
      },
      {
        id: 6,
        image: Work6,
        title: "Web design",
        category: "Wordpress",
        isOpen: false,
        link: "https://matrixcarpetrepairsydney.com.au/",
      },
      {
        id: 7,
        image: Work7,
        title: "Web design",
        category: "Wordpress",
        isOpen: false,
        link: "https://samedaypestcontrolcranbourne.com.au/",
      },
      {
        id: 8,
        image: Work8,
        title: "Web design",
        category: "Wordpress",
        isOpen: false,
        link: "https://dailypestcontrol.com.au",
      },
      {
        id: 9,
        image: Work9,
        title: "Web design",
        category: "Wordpress",
        isOpen: false,
        link: "https://universalcarpetcleaning.au/",
      },
];

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'Front End Developer',
    },
    {
        name: 'Wordpress',
    },
];