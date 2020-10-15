import {
    makeHeader,
    makeFooter,
    makeTitle,
} from './pageModules';


function makeDiningContent() {
    const content = document.querySelector("#content");
    const diningImgContainer = makeDiningImage();
    content.appendChild(diningImgContainer);
    const diningInfo = makeDiningInfo();
    content.appendChild(diningInfo);
}

function makeDiningImage() {
    const diningImgContainer = document.createElement("div");
    diningImgContainer.style.overflow = "hidden";
    diningImgContainer.style.height = "900px";
    const diningImg = document.createElement("img");
    diningImg.src = "../images/diningroom.jpg";
    diningImg.style.width = "100%";
    diningImg.style.objectPosition = "0px -260px";
    diningImgContainer.appendChild(diningImg);
    return diningImgContainer;
}

function makeDiningInfo() {
    const diningInfoContainer = document.createElement("div");
    diningInfoContainer.style.marginBottom = "150px";
    diningInfoContainer.id = "dining-info";
    const title = makeTitle("private dining");
    diningInfoContainer.appendChild(title);
    const diningCopy = makeDiningCopy();
    diningInfoContainer.appendChild(diningCopy);
    const diningStats1 = makeDiningStatsList(listItems1);
    const diningStats2 = makeDiningStatsList(listItems2);
    diningInfoContainer.appendChild(diningStats1);
    diningInfoContainer.appendChild(diningStats2);
    return diningInfoContainer;
}

function makeDiningCopy() {
    const diningCopyDiv = document.createElement("div");
    diningCopyDiv.style.width = "50%";
    diningCopyDiv.style.margin = "auto";
    diningCopyDiv.style.paddingBottom = "36px";
    diningCopyDiv.style.textAlign = "center";
    const diningCopy = document.createElement("p");
    diningCopy.textContent = "Faux Nouveau Restaurant & Bistro is a dynamic space that lends itself to everything from elegant business luncheons to extravagant social affairs. Available for a main dining room buyout for breakfast, lunch or dinner, Faux Nouveau can accommodate 80 guests for a seated event or 150 guests for a reception. For a more intimate experience, the Loft at Faux Nouveau can accommodate 40 guests for a seated event or 60 guests for a reception.";
    diningCopy.style.fontFamily = "BaskervilleMTStd-Regular";
    diningCopy.style.fontSize = "18px";
    diningCopy.style.lineHeight = "36px";
    diningCopyDiv.appendChild(diningCopy);
    return diningCopyDiv
}
const listItems1 = ["Capacities: ", "Loft: 40 seated; 60 reception", "Main Dining Room: 80 seated; 150 reception", "Available breakfast, lunch, dinner & late night"];
const listItems2 = ["To Book: ", "Inquiry Form", "events@fauxnouveau.com", "555.234.5678"];


function makeDiningStatsList(listItems) {
    const container = document.createElement('div')
    container.style.fontFamily = "BaskervilleMTStd-Regular";
    container.style.fontSize = "18px";
    container.style.lineHeight = "36px";
    container.style.width = "50%";
    container.style.margin = "auto";
    container.style.marginBottom = "36px";
    const title = document.createElement('b');
    title.textContent = listItems[0]
    title.style.fontWeight = "700";
    container.appendChild(title)
    const list = document.createElement("ul");
    for (let i = 1; i < listItems.length; i++) {
        const item = document.createElement("li");
        item.textContent= listItems[i];
        list.appendChild(item);
    }
    container.appendChild(list); 
    return container;
}

function diningLoad() {
    makeHeader();
    makeDiningContent();
    makeFooter(); 
}

export default diningLoad
