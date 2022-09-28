import { createStore } from "vuex";

export default createStore({
  state: {
    // portfolioUrl: "https://i.postimg.cc/Fs9sBMTW/Raeesedit.png",
    portfolioUrl: "https://i.postimg.cc/D0wMC1XV/Raees.jpg",
    about: [
      {
        p: "I am a humble person. In order to have respect for everyone you encounter as well as for the ones nearest to you, I believe respect must be earned through time, effort, and trust. I am a hard worker who seeks to complete tasks feasibly and effectively.",
      },
      {
        p: "My fascination with computers began when I was 12 years old. I've learned how to build a computer and am continuously learning about each component.",
      },
      {
        p: "I applied to LifeChoices to gain coding experience and to strengthen my computer knowledge.",
      },
    ],
    resume: [
      {
        softSkills: [
          {
            name: "Soft ",
            name1: "skills",
          },
          {
            skill: "Can Work In a Team",
          },
          {
            skill: "Organised",
          },
          {
            skill: "Easy To Talk To",
          },
          {
            skill: "Good Time Management",
          },
        ],
        experience: [
          {
            studio: "Lc Studio at ",
            main: "Life",
            name: "Choices Academy",
            start: "2022/09/26 -",
            end: " Present",
            duties: "UpSkilling Myself",
            duties1: "Learning Vuetify",
          },
          {
            main: "Life",
            name: "Choices Academy",
            start: "2022/03/28 -",
            end: " 2022/09/16",
            duties: "Learning Code",
            duties1: "Personal and Professional Development",
            duties2: "Life Skills",
          },
          {
            name: "Self Employed",
            start: "2021 -",
            end: "2022/11",
            duties: "Building Computers",
          },
          {
            name: "Casual Labourer",
            start: "2022 -",
            end: " 2022/03",
            duties:
              "Casual weekends working for my uncle in the building field",
          },
          {
            name: "Education",
            start: "",
            end: " 2020",
            duties: "Finished Matric with bachelor's",
          },
        ],
      },
      {
        skillTechnical: [
          {
            icon: "fa-brands fa-html5",
            skill: "Html",
          },
          {
            icon: "fa-brands fa-css3-alt",
            skill: "Css",
          },
          {
            icon: "fa-brands fa-bootstrap",
            skill: "Bootstrap",
          },
          {
            icon: "fa-brands fa-js",
            skill: "Javascipt",
          },
          {
            icon: "fa-brands fa-node",
            skill: "Node Js",
          },
          {
            icon: "fa-brands fa-vuejs",
            skill: "Vue Js",
          },
          {
            icon: 'fa fa-database aria-hidden="true"',
            skill: "MySql",
          },
          {
            icon: "fa-solid fa-e",
            skill: "Express Js",
          },
        ],
      },
      // {
      //   software: [
      //     {
      //       icon: "fa-brands fa-github",
      //       skill: "github",
      //     },
      //     {
      //       icon: "",
      //       skill: "windows",
      //     },
      //   ],
      // },
    ],
    projects: [
      {
        githubLink: "https://github.com/GarlicBuns19/GPU-Land-frontend",
        firebase: "https://gpu-land.firebaseapp.com/",
        netlify: "https://gpu-land.netlify.app/",
        image: "https://i.postimg.cc/132ym6VL/GpuLand.png",
        projectName: "Gpu Land",
        aboutProject: "",
      },
      {
        githubLink: "https://github.com/GarlicBuns19/Pokedex",
        netlify: "https://pokedex-r.netlify.app",
        image: "https://i.postimg.cc/zX9QGs96/Pokedex.png",
        projectName: "Pokedex Api",
        aboutProject: "",
      },
      {
        githubLink: "https://github.com/GarlicBuns19/TodoApp",
        netlify: "https://todo-app-rrr.netlify.app",
        image: "https://i.postimg.cc/506G0f2c/TodoApp.png",
        projectName: "TodoApp",
        aboutProject: "",
      },
      {
        githubLink: "https://github.com/GarlicBuns19/PropertyListing",
        netlify: "https://property-listing-r.netlify.app",
        image: "https://i.postimg.cc/dV08RLwV/Rb-Property.png",
        projectName: "Property Listing",
        aboutProject: "",
      },
      {
        githubLink: "https://github.com/GarlicBuns19/BMI-Calculator",
        netlify: "https://bmi-calculator-r.netlify.app",
        image: "https://i.postimg.cc/MG8KVrjr/Bmi-Calculator.png",
        projectName: "Bmi-Calculator",
        aboutProject: "",
      },
      {
        githubLink: "https://github.com/GarlicBuns19/Temperature-Converter",
        netlify: "https://temperature-converter-r.netlify.app",
        image: "https://i.postimg.cc/VN549DQn/Temp-Calculator.png",
        projectName: "Temperature Converter",
        aboutProject: "",
      },
    ],
    testimonails: [
      {
        image: "https://i.postimg.cc/prMdzXhn/Joel.jpg",
        name: "Joel",
        aboutMe:
          "Ra'ees has a gentle personality which makes him approachable. He has great potential in front-end technologies. You will be glad to have him on your team. Joel Mukanya-Coding Lecturer.",
        position: "Lecture",
      },
      {
        image: "https://i.postimg.cc/L6RckKyP/Charles.jpg",
        name: "Abdus",
        aboutMe:
          "Ra'ees is an inquisitive person whose thirst for knowledge is second  to none.He's always eager to learn new things and use what he learned to assist others.",
        position: "Colleague / Peer",
      },
      {
        image: "https://i.postimg.cc/JnLxwmHc/Mashalino.jpg",
        name: "Mashalino",
        aboutMe:
          "Even though I have known Ra'ees Benny for a short period of time at LifeChoices. He has both become my colleague and friend. He is always very helpful to his peers and pleasant to be around. His coding ability is truly on a whole different position with his brilliant ideas and excellent work ethic, he is sure to be an important asset to the workplace and team that he is apart of.",
        position: "Colleague / Peer",
      },
      {
        image: "https://i.postimg.cc/QC6JWT40/Ridhaa.jpg",
        name: "Ridhaa",
        aboutMe:
          "He is a very friendly person and he is a very good web developer. He is very creative, and hard-working and will do everything to the best of his ability. Ra'ees is a great person to be around and would be a great person to have on your team.",
        position: "Colleague / Peer",
      },
      {
        image: "https://i.postimg.cc/Df5gN9vL/Saleem.jpg",
        name: "Saleem",
        aboutMe:
          "Ra'ees is a hard worker , He is able  to solve any problem that he faces with full determination and dedication amongst other qualities and it is presented in his work. He goes out of his way to help others where needed.",
        position: "Colleague / Peer",
      },
      {
        image: "https://i.postimg.cc/0jWJ2cG3/Liam.png",
        name: "Liam",
        aboutMe:
          "Ra'ees is a great guy to work with. My experience with him the work place is pleasant. He is always working hard and willing to help others.",
        position: "Colleague / Peer",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
