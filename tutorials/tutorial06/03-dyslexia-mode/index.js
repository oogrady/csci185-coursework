/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/
const makeDyslexic = ev => {
  document.querySelector("h1").className = "dyslexia-mode";
  document.querySelector("div.content").className = "dyslexia-mode";

};
