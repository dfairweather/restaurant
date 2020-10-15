import {
    makeHeader,
    makeFooter,
    makeTitle,
} from './pageModules';


function chefContainer() {
    const content = document.querySelector("#content");
    const chefContainer = document.createElement("div");
    chefContainer.id = "chef-container";
    chefContainer.style.paddingTop = "100px";
    chefContainer.style.width = "50%";
    chefContainer.style.margin = "auto";
    chefContainer.style.display = "flex";
    chefContainer.style.flexDirection = "column";
    const title = makeTitle("chef");
    chefContainer.appendChild(title);
    content.appendChild(chefContainer);    
}

function chefContent(image, name, title, copy) {
    const container = document.querySelector("#chef-container");
    const contentContainer = document.createElement('div');
    contentContainer.style.marginBottom = "70px";

    // Make image container for chef
    const chefImage = makeChefImage(image)
    contentContainer.appendChild(chefImage);
    
    // Make chef info div container
    const chefInfoDiv = makeChefInfoDiv();
    
    // Make chef title
    const chefTitle = makeChefTitle(name, title)

    // Make chef copy
    const chefCopy = makeChefCopy(copy);
    
    // Add elements to container
    chefInfoDiv.appendChild(chefTitle);
    chefInfoDiv.appendChild(chefCopy);
    contentContainer.appendChild(chefInfoDiv);
    container.appendChild(contentContainer);
}

function makeChefImage(image) {
    const chefImageDiv = document.createElement("div");
    chefImageDiv.className = "chef-image";
    const chefImage = document.createElement("img");
    chefImageDiv.style.width = "40%";
    chefImage.style.maxWidth = "100%";
    chefImage.style.maxHeight = "100%";
    chefImage.src = image;
    chefImageDiv.style.float = "left";
    chefImageDiv.appendChild(chefImage);
    return chefImageDiv;
}

function makeChefInfoDiv() {
    const chefInfoDiv = document.createElement("div");
    chefInfoDiv.style.width = "50%";
    chefInfoDiv.style.float = "left";
    chefInfoDiv.style.textAlign = "left";
    chefInfoDiv.style.marginLeft = "20px";
    return chefInfoDiv;
}

function makeChefTitle(name, title) {
    const chefTitle = document.createElement("h3");
    chefTitle.className = "chef-title";
    chefTitle.style.fontFamily = "BaskervilleMTStd-Regular";
    chefTitle.style.fontSize = "20px";
    chefTitle.style.fontWeight = "400";
    chefTitle.style.margin = "0 0 25px 0";
    chefTitle.innerHTML = `<i>${title}, Faux Nouveau</i> - ${name}`;
    return chefTitle;
}

function makeChefCopy(copy) {
    const chefCopy = document.createElement('p');
    chefCopy.textContent = copy;
    chefCopy.style.fontFamily = "BaskervilleMTStd-Regular";
    chefCopy.style.fontSize = "16px";
    chefCopy.style.lineHeight = "30px";
    return chefCopy;
}

const copy1 = "One of the world’s most highly revered and respected chefs, Randy Flavin is the Corporate Executive Chef of Faux Nouveau Restaurants. In this role, Chef Flavin oversees the culinary direction of all properties in the diverse FN portfolio, including the restaurants, the event spaces and the catering arm. Prior to his appointment to FN’s Corporate Executive Chef, Chef Flavin served as Executive Chef for the iconic Canadian restaurant Dulce Canoe. There, his leadership, unrivaled culinary craftsmanship and visionary sense for haute Canadian cuisine played a vital role in the restaurant’s meteoric ascent on the country’s fine dining scene. Over the course of his career, Chef Flavin has won critical acclaim by domestic and international media and has received numerous awards, including gold medals from Taste of Canada, Black Box, Salon Culinaire and the Ontario Hostelry Institute. Deemed a ‘culinary titan’ by Chef Michael Bonier, Chef Flavin continues to inspire and influence media, foodies, and the culinary world alike.";

const copy2 = "With a career spanning more than two decades, Chef Tim has travelled the world climbing the culinary ladder. Having joined Faux Nouveau Restaurant in 2000, Chef Tim has worked in some of FN’s finest restaurants, including The Pretentious Pommier and Dulce Canoe. He quickly made an impression on the FN culinary team with his remarkable talent, creativity, and drive, and soon after, was named Corporate Concept Chef of the Smoothie Stand & Grill, and the historic Windermere House in Muskoka. With his record of success in this role, Chef Tim continues his meteoric rise on Toronto’s culinary scene with his recently appointed role of Executive Chef of the luxury, five-star SodaSopo International Hotel & Tower Toronto.";

const copy3 = "Chef Marv's culinary journey has taken him around the world and back again to his current role as Chef d'Line' of Faux Nouveau. Chef Marv’s international experience kicked off in London, England, where he worked and trained at the Michelin-starred Tree & Leave at the Orange Hotel, followed by a role at Bar Bouncer in London, working directly with critically acclaimed chef Daniel Bouncer. His passion, skill, and ability to fuse exciting flavours into classic French cuisine impressed Chef Bouncer, who then appointed Chef Marv to the prestigious position of Sous Chef at Bistro Moderne at the luxurious Sandy Hotel in Singapore. With classical training under the world’s culinary leaders, and a flair for elevating it was only natural for Chef Marv to return home and take up residence as Senior Sous Chef at Dulce Canoe, one of Canada’s top restaurants. With his most recent appointment as Chef de Cuisine at Fouc Nouveau, Chef Marv delivers a never-before-seen contemporary, lavish take on classic American cuisine, such as the grilled cheese sandwich."

function chefLoad() {
    makeHeader();
    chefContainer();
    chefContent("../images/chef1.jpg", "Randy Flavin", "Chef de Cuisine", copy1);
    chefContent("../images/chef2.jpg", "Tim", "Sous Chef", copy2);
    chefContent("../images/chef3.jpg", "Marv", "Chef d'Line", copy3);
    makeFooter();
}


export default chefLoad