import html from "../../assets/html5.png";
import css from "../../assets/css3.png";
import javascript from "../../assets/js.png";
import react from "../../assets/react.png";
import git from "../../assets/git.png";
import sass from "../../assets/sass.png";
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
    name: "css",
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
      "React'owi obecnie poświęcam najwięcej czasu, uczę się go od mniej więcej 7 miesięcy. Zacząłem naukę od kursów internetowych, a obecnie tworzę za jego pomocą strony internetowe.",
    imageUrl: react,
    imageClass: "fab fa-react",
    color: "#61DBFB",
  },
  sass: {
    name: "sass",
    description:
      "Z\xA0SASS'em zetknąłem się mniej więcej 1.5 roku temu na wcześniej wspomnianym stażu i\xA0od tamtego czasu korzystam z\xA0niego praktycznie cały czas. Zanim zacząłem używać React App, kod SASS'a kompilowałem przy użyciu Gulpa.",
    imageUrl: sass,
    imageClass: "fab fa-sass",
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