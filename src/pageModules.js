import menuLoad from './menu';
import chefLoad from './chef';
import pageLoad from './pageLoad';
import diningLoad from './dining';

function loadFont() {
    const newStyle = document.createElement("style");
    newStyle.appendChild(document.createTextNode("\
    @font-face {\
        font-family: " + "BaskervilleMTStd-Regular" + ";\
        src: url('" + "BaskervilleMTStd-Regular.otf" + "');\
    }\
    "));
    document.head.appendChild(newStyle);
}
function styleBody() {
    const body = document.querySelector("body");
    body.style.fontFamily = "futura-pt, sans-serif";
    body.style.margin = "0";
    body.style.backgroundColor = "#f4f4f4";
    body.style.fontSize = "14px";
    body.style.fontWeight = "300";
}

function makeHeader() {
    const content = document.querySelector("#content");
    const header = document.createElement("header");
    header.style.background = "black";
    header.style.color = "white";
    header.style.paddingTop = "0px";
    header.style.minHeight = "100px";
    header.style.letterSpacing = ".2em";
    header.style.position = "fixed";
    header.style.top = "0px";
    header.style.zIndex = "1";
    header.style.width = "100%";

    const container = document.createElement("div");
    container.className = "container";
    container.style.marginTop = "20px";
    content.appendChild(header);
    header.appendChild(container);
    const branding = makeBranding();
    branding.style.float = "left";
    branding.style.marginLeft = "70px";
    container.appendChild(branding);

    makeNav();
}

function makeBranding() {
    const branding = document.createElement("div");
    branding.id = "branding";
    
    branding.style.textAlign = "center";
    
    branding.style.fontStretch = "wider";
    const restaurantName = document.createElement('h1');
    restaurantName.id = "faux";
    restaurantName.style.fontSize = "2rem";
    restaurantName.style.lineHeight = "0";
    restaurantName.textContent = "FAUX NOUVEAU"
    const restaurant = document.createElement('p');
    restaurant.id = "fauxRest";
    restaurant.textContent = "Restaurant & Bistro";
    restaurant.style.textTransform = "uppercase";
    branding.appendChild(restaurantName);
    branding.appendChild(restaurant);
    return branding;
}

function makeNav() {
    const container = document.querySelector(".container");
    const navBar = document.createElement('nav');
    navBar.style.float= "right";
    navBar.style.marginTop = "6px";
    const list = document.createElement('ul');
    list.style.color = "white";
    list.style.textDecoration = "none";
    list.style.textTransform = "uppercase";
    container.appendChild(navBar);
    navBar.appendChild(list);
    const navList = ["home", "menu", "chef", "private dining"];
    for (let i = 0, n = navList.length; i < n; i++) {
        makeListElement(navList[i]);
    }
    const imgList = ["facebook", "twitter", "email"];
    for (let i = 0, n = imgList.length; i < n; i++) {
        makeNavImgLinks(imgList[i]);
    }

}

function makeListElement(name) {
    const list = document.querySelector('ul');
    const item = document.createElement('li');
    item.id = name;
    item.textContent = name;
    item.style.float = "left";
    item.style.display = "inline";
    item.style.padding = "0 20px 0 20px";
    item.addEventListener('click', loadNext);
    item.addEventListener('mouseenter', () => {
        item.style.color = "red";
        item.style.transition = "all 1s ease";
        item.style.cursor = "pointer";
    });
    item.addEventListener("mouseleave", () => {
        item.style.color = "white";
        item.style.transition = "all 1s ease";
    })
    list.appendChild(item);
}

function makeNavImgLinks(name) {
    const list = document.querySelector('ul');
    const item = document.createElement('li');
    item.style.float = "left";
    item.style.display = "inline";
    item.style.padding = "0 20px 0 20px";
    const link = document.createElement('a');
    const image = document.createElement('img');
    image.style.height = "22px";
    image.id = name;
    image.src = `../images/${name}.png`;
    link.href = ".";
    link.appendChild(image);
    item.appendChild(link);
    list.appendChild(item);   
}

function makeFooter() {
    const content = document.querySelector("#content");
    const footer = document.createElement("footer");
    footer.style.background = "black";
    footer.style.height = "450px";
    content.appendChild(footer);

    // Make footer image
    const footerImg = makeFooterImg();
    footer.appendChild(footerImg);
    
    // Make footer container
    const footerContainer = makeFooterContainer();
    footer.appendChild(footerContainer);
}

function makeFooterImg() {
    const footerImgDiv = document.createElement("div");
    footerImgDiv.id = "footerimg";
    footerImgDiv.style.height = "95px";
    const footerImg = document.createElement("img");
    footerImg.src = "../images/footer.png";
    footerImg.style.width = "100%";
    footerImgDiv.appendChild(footerImg);
    return footerImgDiv;
}

function makeFooterContainer() {
    const footerContainer = document.createElement("div");
    footerContainer.className = "container";
    footerContainer.id = "footer-container";
    footerContainer.style.textAlign= "center";
    footerContainer.style.background = "black";
    footerContainer.style.color = "white";
    footerContainer.style.paddingTop = "100px";
    //Add branding
    const branding = makeBranding();
    branding.style.letterSpacing = ".2em";
    //Add address
    const address = makeFooterAddress();
    footerContainer.appendChild(branding);
    footerContainer.appendChild(address);
    return footerContainer;
}

function makeTitle(text) {
    const titleDiv = document.createElement("div");
    titleDiv.style.textAlign = "center";
    const title = document.createElement('h2');
    title.textContent = text
    title.style.color = "#333";
    title.style.fontFamily = "DejaVu Sans";
    title.style.fontSize = "36px";
    title.style.lineHeight = "60px";
    title.style.textTransform = "uppercase";
    title.style.letterSpacing = ".1em";
    title.style.fontWeight = "300";
    titleDiv.appendChild(title);
    return titleDiv;
}

function makeFooterAddress() {
    const addressContainer = document.createElement("div");
    addressContainer.id = "address-container";
    addressContainer.style.color = "white";
    addressContainer.style.textAlign = "center";
    addressContainer.style.fontSize = "16px";
    addressContainer.style.fontFamily = "BaskervilleMTStd-Regular";
    addressContainer.style.marginTop = "60px";
    const address1 = document.createElement('p');
    address1.textContent = "SodaSopo International Hotel & Tower Toronto®";
    const address2 = document.createElement('p');
    address2.textContent = "425 Pseudo Way, Toronto, ON";
    const phone = document.createElement('p');
    phone.textContent = "555.234.5678";
    addressContainer.appendChild(address1);
    addressContainer.appendChild(address2);
    addressContainer.appendChild(phone);
    return addressContainer;
}

function loadNext(e) {

    const content = document.querySelector("#content");
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    switch(e.target.id) {
        case 'home':
            pageLoad();
            break;
        case 'menu':
            menuLoad();
            break;
        case 'chef':
            chefLoad();
            break;
        case 'private dining':
            diningLoad();
    } 
    document.body.scrollTop = 0;  // Safari
    document.documentElement.scrollTop = 0; // Chrome, FF, IE and Opera
}
export {
    loadFont,
    styleBody,
    makeHeader,
    makeBranding,
    makeFooter,
    makeTitle
}
