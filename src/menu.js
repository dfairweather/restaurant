import {
    makeHeader,
    makeFooter,
    makeTitle
} from './pageModules';




function menuContainer() {
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.id = "menu-container"
    menuContainer.style.paddingTop = "100px";
    const mealTitle = makeTitle("dinner");
    menuContainer.appendChild(mealTitle);
    content.appendChild(menuContainer);    

}

function makeMenuSection(title, menuList) {
    const menuContainer = document.querySelector("#menu-container");
    const menuSection = document.createElement("section");
    const sectionTitle = makeSectionTitle(title);
    menuSection.style.width = "47%";
    menuSection.style.margin = "auto";
    menuSection.style.paddingBottom = "36px";
    menuContainer.appendChild(menuSection);
    menuSection.appendChild(sectionTitle);
    for (let i = 0; i < menuList.length; i++){
        const item = addMenuItem(menuList[i].name, menuList[i].price, menuList[i].description);
        menuSection.appendChild(item);
    }
}

function makeSectionTitle(title) {
    const secTitle = document.createElement("h4");
    secTitle.textContent = title;
    secTitle.style.fontFamily = "BaskervilleMTStd-Regular"; 
    secTitle.style.fontSize = "18px";
    secTitle.style.fontWeight = "400";
    secTitle.style.letterSpacing = ".1em";
    secTitle.style.textAlign = "left";
    secTitle.style.textDecoration= "underline";
    return secTitle;
}

function Item(name, price, description) {
    this.name = name
    this.price = price
    this.description = description
    this.info = function() {
        return `name: ${name} price ${price}, description: ${description}.`
    }
}

const starterList = [["America Caesar Salad", 16, "creamy roasted garlic dressing"],
                ["Wild & Tame Mushroom Soup", 14, "enough said"],
                ["Bella Casara Burrata", "19/26", "arugula, pickled cherry, balsamic"],
                ["100km Green Salad", 13, "candied walnuts, house pickles"],
                ["Heirloom Tomatoes", "18/25",
                "100km squash, olive oil, monforte dairy goat feta"],
                ["Tuna Poke Salad", "24/34",
                "green apple, pineapple, coconut"],
                ["Finest Coastal Oysters",24,
                "half dozen on the half shell"],
                ["Foie Gras Flapjack",27,
                "birch table syrup, apricot, peanuts"],
                ["Steak Tartare","19/31",
                "bbq potato chips"],
                ["Pan-Seared Scallops","24",
                "salsify, braised little gem lettuce"]];
            
const mainsList = [[
    "Roasted Bradford Bay Chicken",33,
    
    "sausage & sage stuffin', rosemary gravy"],
    [
        "Charred Sustainable Tuna Steak",39,
        
        "mustard greens, 100km squash"],
    [
        "Provimi Veal Rib Chop", 68,
        
        "whipped potatoes, bourbon peppercorn sauce"],
    [
        "Sichuan Pepper Duck Breast", 48,
        
        "foie gras, sweet potato, wild mushrooms"],
    [
        "Lemon Risotto", 28,
        
        "roasted sunchoke, celeriac, grilled fennel"],
    [
        "Bay Scallop, Shrimp & Squid Linguine", 34,
        
        "crushed tomatoes, white wine, basil"],
    [
        "Iced Seafood Raw Bar & Crudités for Two", 87,
        
        "oysters, shrimp, tuna poke, fogo island crab, market additions"
        ]];

const dailySpecialsList = [
    [
        "Monday - Cioppino", 29,

        "clams, scallop, sea bass, crab"],
    [
        "Tuesday - Grandview Farms Wagyu Beef Burger", 26,

        "pimento cheese, green tomato pickle, bourbon thousand island dressing"],
    [
        "Wednesday - B.C. Lingcod", 36,

        "octopus, navy bean ragoût"],
    [
        "Thursday - Roasted St-Canut Piglet", 45,

        "celeriac choucroute, carrot purée, marjoram"],
    [
        "Friday - Whole Roasted Dover Sole", "MP",

        "charred lemon, brown butter, parsley"],
    [
        "Saturday - Butcher’s Mixed Grill", 58,

        "hand-selected cuts"],
    [
        "Sunday - Roast for Two", 75,

        "béarnaise sauce, whipped yukon potatoes, popovers, roasted mushrooms"]

        ]



function makeSectionList(menuItems) {
    let sectionList = []
    for (let i = 0; i < menuItems.length; i++) {
        let newItem = new Item(menuItems[i][0], menuItems[i][1], menuItems[i][2]);
        sectionList.push(newItem);
    }
    return sectionList;
}

function addMenuItem(name, price, description) {
    const item = document.createElement("div");
    item.className = "menu-item";
    item.style.textAlign = "left";
    item.style.marginBottom = "22px";
    const itemName = document.createElement("h5");
    itemName.style.margin = 0;
    itemName.style.fontFamily = "BaskervilleMTStd-Regular"; 
    itemName.style.fontSize = "18px";
    itemName.style.fontWeight = "400";
    itemName.style.lineHeight = "22px";
    itemName.style.boxSizing = "border-box";
    itemName.innerHTML = `<i>${name}</i> <span style="float:right; font-size: 14px;">${price}</span>`;
    const itemDescription = document.createElement('p');
    itemDescription.textContent = description;
    itemDescription.style.fontFamily = "BaskervilleMTStd-Regular"; 
    itemDescription.style.fontSize = "14px";
    itemDescription.style.margin = 0;
    item.appendChild(itemName);
    item.appendChild(itemDescription);
    return item;
}

function menuLoad() {
    makeHeader();
    menuContainer();
    makeMenuSection("starters", makeSectionList(starterList));
    makeMenuSection("mains",  makeSectionList(mainsList));
    makeMenuSection("daily specials", makeSectionList(dailySpecialsList));
    makeFooter();
}

export default menuLoad;