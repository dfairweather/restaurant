import {
    styleBody,
    makeHeader,
    makeFooter,
    loadFont,
} from './pageModules';

function makeShowcase() {
    const content = document.querySelector("#content");
    const section = document.createElement("section");
    section.id = "showcase";
    section.style.height = "900px";
    section.style.width = "100%";
    section.style.marginTop = "100px";
    section.style.background = "url('../images/shrimp.jpg') no-repeat center";
    section.style.bacgroundSize = "cover";
    section.style.color = "white";
    content.appendChild(section);
    makeTagline();
}

function makeTagline() {
    const showcase = document.querySelector("#showcase");
    const tagdiv = document.createElement("div")
    tagdiv.id = "tagline";
    const tagline = document.createElement("p");
    tagline.innerHTML = "Everyone<br>Wants<br>In";
    tagline.style.textTransform = "uppercase";
    tagdiv.style.fontFamily = "DejaVu Sans";
    tagdiv.style.width = "25%";
    tagdiv.style.margin = "auto";
    tagdiv.style.textAlign = "center";
    tagdiv.style.fontSize = "72px";
    tagdiv.style.fontWeight = "300";
    tagdiv.style.lineHeight = "110px";
    tagdiv.style.paddingTop = "400px";
    tagdiv.style.letterSpacing = ".1em";


    const arrow = document.createElement("img");
    arrow.src = "../images/arrow.png";
    arrow.style.position = "relative";
    arrow.style.bottom = "80px";
    showcase.appendChild(tagdiv);
    tagdiv.appendChild(tagline);
    tagdiv.appendChild(arrow);
}

function pageLoad() {
    loadFont();
    styleBody();
    makeHeader();
    makeShowcase();
    makeFooter();
}

export default pageLoad
