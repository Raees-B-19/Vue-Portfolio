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
        p: "I applied to LifeChoices to gain coding experience and to strengthen my computer knowledge."
      },
    ],
    projects: [
      {
        image: "https://i.postimg.cc/zX9QGs96/Pokedex.png",
        projectName: "Pokedex Api",
        aboutProject:
          "This is a project When I failed to get a place at university, I was down, but a friend told me about Life Choices. I applied and got the opportunity. I want to have the knowledge to develop web applications.",
      },
      {
        image: "https://i.postimg.cc/tTM5mPbw/Property-Listing.png",
        projectName: "Property Listing",
        aboutProject:
          "This is a project When I failed to get a place at university, I was down, but a friend told me about Life Choices. I applied and got the opportunity. I want to have the knowledge to develop web applications.",
      },
      {
        image: "https://i.postimg.cc/506G0f2c/TodoApp.png",
        projectName: "TodoApp",
        aboutProject:
          "This is a project When I failed to get a place at university, I was down, but a friend told me about Life Choices. I applied and got the opportunity. I want to have the knowledge to develop web applications.",
      },
      {
        image: "https://i.postimg.cc/MG8KVrjr/Bmi-Calculator.png",
        projectName: "Bmi-Calculator",
        aboutProject: "This is a 2222222t",
      },
      {
        image: "https://i.postimg.cc/qBKbZbtG/Swegga.png",
        projectName: "Swegga",
        aboutProject: "This is a project4444444444444444444",
      },
      {
        image: "https://i.postimg.cc/VN549DQn/Temp-Calculator.png",
        projectName: "Temperature Converter",
        aboutProject: "This is a project4444444444444444444",
      },
    ],
    testimonails: [
      {
        image: "https://i.postimg.cc/prMdzXhn/Joel.jpg  ",
        name: "Joel",
        aboutMe:
          "Ra'ees has a gentle personality which makes him approachable. He has great potential in front-end technologies. You will be glad to have him on your team. Joel Mukanya-Coding Lecturer.",
        level: "Lecture",
      },
      {
        image: "https://i.postimg.cc/L6RckKyP/Charles.jpg",
        name: "Abdus",
        aboutMe:
          "Ra'ees is an inquisitive person whose thirst for knowledge is second  to none.He's always eager to learn new things and use what he learned to assist others.",
        level: "Colleague / Peer",
      },
      {
        image: "https://i.postimg.cc/JnLxwmHc/Mashalino.jpg",
        name: "Mashalino",
        aboutMe:
          "Even though I have known Ra'ees Benny for a short period of time at LifeChoices. He has both become my colleague and friend. He is always very helpful to his peers and pleasant to be around. His coding ability is truly on a whole different level with his brilliant ideas and excellent work ethic, he is sure to be an important asset to the workplace and team that he is apart of.",
        level: "Colleague / Peer",
      },
      {
        image: "https://i.postimg.cc/QC6JWT40/Ridhaa.jpg",
        name: "Ridhaa",
        aboutMe:
          "He is a very friendly person and he is a very good web developer. He is very creative, and hard-working and will do everything to the best of his ability. Ra'ees is a great person to be around and would be a great person to have on your team.",
        level: "Colleague / Peer",
      },
      {
        image: "https://i.postimg.cc/Df5gN9vL/Saleem.jpg",
        name: "Saleem",
        aboutMe:
          "Ra'ees is a hard worker , He is able  to solve any problem that he faces with full determination and dedication amongst other qualities and it is presented in his work. He goes out of his way to help others where needed.",
        level: "Colleague / Peer",
      },
      {
        image: "https://i.postimg.cc/Df5gN9vL/Saleem.jpg",
        name: "Liam",
        aboutMe:
          "Ra'ees is a great guy to work with. My experience with him the work place is pleasant. He is always working hard and willing to help others.",
        level: "Colleague / Peer",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
