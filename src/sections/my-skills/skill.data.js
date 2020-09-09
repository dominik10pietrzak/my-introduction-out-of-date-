import html from "../../assets/html5.png";
import css from "../../assets/css3.png";
import javascript from "../../assets/js.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import vue from "../../assets/vue.png";
import eng from "../../assets/english.png";
import adobe from "../../assets/adobe.png";

const SKILL_DATA = {
  html: {
    name: "html",
    description:
      "Od HTML i\xA0CSS zacząłem (chyba z\xA0resztą jak każdy) swoją przygodę z\xA0Frond-Endem. Pierwszą styczność z\xA0nimi miałem w\xA0liceum, a\xA0poważniej zainteresowałem się tym tematem mniej więcej 1.5\xA0roku temu. ",
    imageUrl: html,
    imageClass: "fab fa-html5",
    color: "#E44D26",
  },
  css: {
    name: "css (sass)",
    description:
      "Naukę zacząłem od kursów internetowych i\xA0własnych projektów. Narzędzie to cały czas zaskakuje mnie tym jak wiele niesamowitych rzeczy można za jego pomocą stworzyć.",
    imageUrl: css,
    imageClass: "fab fa-css3-alt",
    color: "#3C99DC",
  },
  javascript: {
    name: "javascript",
    description:
      "Javascriptu zacząłem uczyć się rok temu, naukę tego języka znacząco ułatwiła mi całkiem dobra znajomość Javy. Przerobiłem różne kursy internetowe, jednak najwięcej wiedzy przyswoiłem tworząc własne aplikacje.",
    imageUrl: javascript,
    imageClass: "fab fa-js",
    color: "#F0DB4F",
  },
  react: {
    name: "react",
    description:
      "Reacta uczę się już prawie rok i uważam, że poznałem go dość dobrze. Naukę zacząłem od kursów internetowych, a obecnie tworzę za jego pomocą strony internetowe.",
    imageUrl: react,
    imageClass: "fab fa-react",
    color: "#61DBFB",
  },
  sass: {
    name: "vue",
    description:
      "Vue uczę się od niedawna i nie umiem go (jeszcze) tak dobrze jak Reacta, ale znajomość wspomnianego wcześniej frameworka pozwala mi uczyć się Vue w zatrważającym tempie.",
    imageUrl: vue,
    imageClass: "fab fa-vuejs",
    color: "#CD6799",
  },
  eng: {
    name: "angielski",
    description:
      "Posługiwanie się językiem angielskim nigdy nie sprawiało mi problemów, rozumiem go dobrze, także ze słuchu. Programowania też uczyłem się w większości z anglojęzycznych źródeł m.in. z\xA0dokumentacji.",
    imageUrl: eng,
    imageClass: "far fa-comments",
    color: "#CF081F",
  },
  //new skills
  git: {
    name: "git",
    description:
      "Git to system kontroli wersji, którego korzystam na codzień. Nauczyłem się go głównie na bieżąco, podczas korzystania z niego.",
    imageUrl: git,
    color: "#F1502F",
    imageClass: "fab fa-git",
    class: "new",
  },
  adobe: {
    name: "adobe",
    description:
      "W podstawowym stopniu opanowałem Adobe Illustrator i Adobe XD, zaczynam się także uczyć obsługi Photoshopa. ",
    imageUrl: adobe,
    imageClass: "fab fa-adobe",
    color: "#fff",
  },
  // redux: {
  //   name: "redux",
  //   description: "",
  //   imageUrl: redux,
  //   color: "black",
  //   class: "new"
  // }
};

export default SKILL_DATA;
