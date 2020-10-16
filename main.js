(()=>{"use strict";var e={};function t(e,t){const n=document.querySelector("#menu-container"),o=document.createElement("section"),a=function(e){const t=document.createElement("h4");return t.textContent=e,t.style.fontFamily="BaskervilleMTStd-Regular",t.style.fontSize="18px",t.style.fontWeight="400",t.style.letterSpacing=".1em",t.style.textAlign="left",t.style.textDecoration="underline",t}(e);o.style.width="47%",o.style.margin="auto",o.style.paddingBottom="36px",n.appendChild(o),o.appendChild(a);for(let e=0;e<t.length;e++){const n=l(t[e].name,t[e].price,t[e].description);o.appendChild(n)}}function n(e,t,n){this.name=e,this.price=t,this.description=n,this.info=function(){return`name: ${e} price ${t}, description: ${n}.`}}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var o=n.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const o=[["America Caesar Salad",16,"creamy roasted garlic dressing"],["Wild & Tame Mushroom Soup",14,"enough said"],["Bella Casara Burrata","19/26","arugula, pickled cherry, balsamic"],["100km Green Salad",13,"candied walnuts, house pickles"],["Heirloom Tomatoes","18/25","100km squash, olive oil, monforte dairy goat feta"],["Tuna Poke Salad","24/34","green apple, pineapple, coconut"],["Finest Coastal Oysters",24,"half dozen on the half shell"],["Foie Gras Flapjack",27,"birch table syrup, apricot, peanuts"],["Steak Tartare","19/31","bbq potato chips"],["Pan-Seared Scallops","24","salsify, braised little gem lettuce"]],a=[["Roasted Bradford Bay Chicken",33,"sausage & sage stuffin', rosemary gravy"],["Charred Sustainable Tuna Steak",39,"mustard greens, 100km squash"],["Provimi Veal Rib Chop",68,"whipped potatoes, bourbon peppercorn sauce"],["Sichuan Pepper Duck Breast",48,"foie gras, sweet potato, wild mushrooms"],["Lemon Risotto",28,"roasted sunchoke, celeriac, grilled fennel"],["Bay Scallop, Shrimp & Squid Linguine",34,"crushed tomatoes, white wine, basil"],["Iced Seafood Raw Bar & Crudités for Two",87,"oysters, shrimp, tuna poke, fogo island crab, market additions"]],i=[["Monday - Cioppino",29,"clams, scallop, sea bass, crab"],["Tuesday - Grandview Farms Wagyu Beef Burger",26,"pimento cheese, green tomato pickle, bourbon thousand island dressing"],["Wednesday - B.C. Lingcod",36,"octopus, navy bean ragoût"],["Thursday - Roasted St-Canut Piglet",45,"celeriac choucroute, carrot purée, marjoram"],["Friday - Whole Roasted Dover Sole","MP","charred lemon, brown butter, parsley"],["Saturday - Butcher’s Mixed Grill",58,"hand-selected cuts"],["Sunday - Roast for Two",75,"béarnaise sauce, whipped yukon potatoes, popovers, roasted mushrooms"]];function r(e){let t=[];for(let o=0;o<e.length;o++){let a=new n(e[o][0],e[o][1],e[o][2]);t.push(a)}return t}function l(e,t,n){const o=document.createElement("div");o.className="menu-item",o.style.textAlign="left",o.style.marginBottom="22px";const a=document.createElement("h5");a.style.margin=0,a.style.fontFamily="BaskervilleMTStd-Regular",a.style.fontSize="18px",a.style.fontWeight="400",a.style.lineHeight="22px",a.style.boxSizing="border-box",a.innerHTML=`<i>${e}</i> <span style="float:right; font-size: 14px;">${t}</span>`;const i=document.createElement("p");return i.textContent=n,i.style.fontFamily="BaskervilleMTStd-Regular",i.style.fontSize="14px",i.style.margin=0,o.appendChild(a),o.appendChild(i),o}const s=e.p+"41021b17d2b48e5c1a9af4427628ae54.jpg",c=e.p+"4207b9d2d45dbeeaaa8f73b5f6ae0899.jpg",d=e.p+"34fbb7ec5b5cbf88f3e51dd605294304.jpg";function u(e,t,n,o){const a=document.querySelector("#chef-container"),i=document.createElement("div");i.style.marginBottom="70px";const r=function(e){const t=document.createElement("div");t.className="chef-image";const n=document.createElement("img");return t.style.width="40%",n.style.maxWidth="100%",n.style.maxHeight="100%",n.src=e,t.style.float="left",t.appendChild(n),t}(e);i.appendChild(r);const l=function(){const e=document.createElement("div");return e.style.width="50%",e.style.float="left",e.style.textAlign="left",e.style.marginLeft="20px",e}(),s=function(e,t){const n=document.createElement("h3");return n.className="chef-title",n.style.fontFamily="BaskervilleMTStd-Regular",n.style.fontSize="20px",n.style.fontWeight="400",n.style.margin="0 0 25px 0",n.innerHTML=`<i>${t}, Faux Nouveau</i> - ${e}`,n}(t,n),c=function(e){const t=document.createElement("p");return t.textContent=e,t.style.fontFamily="BaskervilleMTStd-Regular",t.style.fontSize="16px",t.style.lineHeight="30px",t}(o);l.appendChild(s),l.appendChild(c),i.appendChild(l),a.appendChild(i)}const p=e.p+"d5da08d867bd6245b15b41cc9d8fbc09.jpg";const h=["Capacities: ","Loft: 40 seated; 60 reception","Main Dining Room: 80 seated; 150 reception","Available breakfast, lunch, dinner & late night"],m=["To Book: ","Inquiry Form","events@fauxnouveau.com","555.234.5678"];function f(e){const t=document.createElement("div");t.style.fontFamily="BaskervilleMTStd-Regular",t.style.fontSize="18px",t.style.lineHeight="36px",t.style.width="50%",t.style.margin="auto",t.style.marginBottom="36px";const n=document.createElement("b");n.textContent=e[0],n.style.fontWeight="700",t.appendChild(n);const o=document.createElement("ul");for(let t=1;t<e.length;t++){const n=document.createElement("li");n.textContent=e[t],o.appendChild(n)}return t.appendChild(o),t}const y=function(){b(),function(){const e=document.querySelector("#content"),t=function(){const e=document.createElement("div");e.style.overflow="hidden",e.style.height="900px";const t=document.createElement("img");return t.src=p,t.style.width="100%",t.style.objectPosition="0px -260px",e.appendChild(t),e}();e.appendChild(t);const n=function(){const e=document.createElement("div");e.style.marginBottom="150px",e.id="dining-info";const t=B("private dining");e.appendChild(t);const n=function(){const e=document.createElement("div");e.style.width="50%",e.style.margin="auto",e.style.paddingBottom="36px",e.style.textAlign="center";const t=document.createElement("p");return t.textContent="Faux Nouveau Restaurant & Bistro is a dynamic space that lends itself to everything from elegant business luncheons to extravagant social affairs. Available for a main dining room buyout for breakfast, lunch or dinner, Faux Nouveau can accommodate 80 guests for a seated event or 150 guests for a reception. For a more intimate experience, the Loft at Faux Nouveau can accommodate 40 guests for a seated event or 60 guests for a reception.",t.style.fontFamily="BaskervilleMTStd-Regular",t.style.fontSize="18px",t.style.lineHeight="36px",e.appendChild(t),e}();e.appendChild(n);const o=f(h),a=f(m);return e.appendChild(o),e.appendChild(a),e}();e.appendChild(n)}(),E()},g=e.p+"c18660322569c9a5c314b10bc53f90bc.png",C=e.p+"cac819461bdf58a0b6108255e2906809.png",x=e.p+"24dd8b1e6bc6470075aba72ddf5343d5.png",v=e.p+"110b306221d8f27a83ab931372c73805.png";function b(){const e=document.querySelector("#content"),t=document.createElement("header");t.style.background="black",t.style.color="white",t.style.paddingTop="0px",t.style.minHeight="100px",t.style.letterSpacing=".2em",t.style.position="fixed",t.style.top="0px",t.style.zIndex="1",t.style.width="100%";const n=document.createElement("div");n.className="container",n.style.marginTop="20px",e.appendChild(t),t.appendChild(n);const o=S();o.style.float="left",o.style.marginLeft="70px",n.appendChild(o),function(){const e=document.querySelector(".container"),t=document.createElement("nav");t.style.float="right",t.style.marginTop="6px";const n=document.createElement("ul");n.style.color="white",n.style.textDecoration="none",n.style.textTransform="uppercase",e.appendChild(t),t.appendChild(n);const o=["home","menu","chef","private dining"];for(let e=0,t=o.length;e<t;e++)w(o[e]);const a=["facebook","twitter","email"];for(let e=0,t=a.length;e<t;e++)k(a[e])}()}function S(){const e=document.createElement("div");e.id="branding",e.style.textAlign="center",e.style.fontStretch="wider";const t=document.createElement("h1");t.id="faux",t.style.fontSize="2rem",t.style.lineHeight="0",t.textContent="FAUX NOUVEAU";const n=document.createElement("p");return n.id="fauxRest",n.textContent="Restaurant & Bistro",n.style.textTransform="uppercase",e.appendChild(t),e.appendChild(n),e}function w(e){const t=document.querySelector("ul"),n=document.createElement("li");n.id=e,n.textContent=e,n.style.float="left",n.style.display="inline",n.style.padding="0 20px 0 20px",n.addEventListener("click",F),n.addEventListener("mouseenter",(()=>{n.style.color="red",n.style.transition="all 1s ease",n.style.cursor="pointer"})),n.addEventListener("mouseleave",(()=>{n.style.color="white",n.style.transition="all 1s ease"})),t.appendChild(n)}function k(e){const t=document.querySelector("ul"),n=document.createElement("li");n.style.float="left",n.style.display="inline",n.style.padding="0 20px 0 20px";const o=document.createElement("a"),a=document.createElement("img");switch(a.style.height="22px",a.id=e,e){case"facebook":a.src=g;break;case"twitter":a.src=C;break;case"email":a.src=x}o.href=".",o.appendChild(a),n.appendChild(o),t.appendChild(n)}function E(){const e=document.querySelector("#content"),t=document.createElement("footer");t.style.background="black",t.style.height="450px",e.appendChild(t);const n=T();t.appendChild(n);const o=function(){const e=document.createElement("div");e.className="container",e.id="footer-container",e.style.textAlign="center",e.style.background="black",e.style.color="white",e.style.paddingTop="100px";const t=S();t.style.letterSpacing=".2em";const n=function(){const e=document.createElement("div");e.id="address-container",e.style.color="white",e.style.textAlign="center",e.style.fontSize="16px",e.style.fontFamily="BaskervilleMTStd-Regular",e.style.marginTop="60px";const t=document.createElement("p");t.textContent="SodaSopo International Hotel & Tower Toronto®";const n=document.createElement("p");n.textContent="425 Pseudo Way, Toronto, ON";const o=document.createElement("p");return o.textContent="555.234.5678",e.appendChild(t),e.appendChild(n),e.appendChild(o),e}();return e.appendChild(t),e.appendChild(n),e}();t.appendChild(o)}function T(){const e=document.createElement("div");e.id="footerimg",e.style.height="95px";const t=document.createElement("img");return t.src=v,t.style.width="100%",e.appendChild(t),e}function B(e){const t=document.createElement("div");t.style.textAlign="center";const n=document.createElement("h2");return n.textContent=e,n.style.color="#333",n.style.fontFamily="futura-pt",n.style.fontStretch="wider",n.style.fontSize="36px",n.style.lineHeight="60px",n.style.textTransform="uppercase",n.style.letterSpacing=".1em",n.style.fontWeight="400",t.appendChild(n),t}function F(e){const n=document.querySelector("#content");for(;n.firstChild;)n.removeChild(n.firstChild);switch(e.target.id){case"home":H();break;case"menu":b(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="menu-container",t.style.paddingTop="100px";const n=B("dinner");t.appendChild(n),e.appendChild(t)}(),t("starters",r(o)),t("mains",r(a)),t("daily specials",r(i)),E();break;case"chef":b(),function(){const e=document.querySelector("#content"),t=document.createElement("div");t.id="chef-container",t.style.paddingTop="100px",t.style.width="50%",t.style.margin="auto",t.style.display="flex",t.style.flexDirection="column";const n=B("chef");t.appendChild(n),e.appendChild(t)}(),u(s,"Randy Flavin","Chef de Cuisine","One of the world’s most highly revered and respected chefs, Randy Flavin is the Corporate Executive Chef of Faux Nouveau Restaurants. In this role, Chef Flavin oversees the culinary direction of all properties in the diverse FN portfolio, including the restaurants, the event spaces and the catering arm. Prior to his appointment to FN’s Corporate Executive Chef, Chef Flavin served as Executive Chef for the iconic Canadian restaurant Dulce Canoe. There, his leadership, unrivaled culinary craftsmanship and visionary sense for haute Canadian cuisine played a vital role in the restaurant’s meteoric ascent on the country’s fine dining scene. Over the course of his career, Chef Flavin has won critical acclaim by domestic and international media and has received numerous awards, including gold medals from Taste of Canada, Black Box, Salon Culinaire and the Ontario Hostelry Institute. Deemed a ‘culinary titan’ by Chef Michael Bonier, Chef Flavin continues to inspire and influence media, foodies, and the culinary world alike."),u(c,"Tim","Sous Chef","With a career spanning more than two decades, Chef Tim has travelled the world climbing the culinary ladder. Having joined Faux Nouveau Restaurant in 2000, Chef Tim has worked in some of FN’s finest restaurants, including The Pretentious Pommier and Dulce Canoe. He quickly made an impression on the FN culinary team with his remarkable talent, creativity, and drive, and soon after, was named Corporate Concept Chef of the Smoothie Stand & Grill, and the historic Windermere House in Muskoka. With his record of success in this role, Chef Tim continues his meteoric rise on Toronto’s culinary scene with his recently appointed role of Executive Chef of the luxury, five-star SodaSopo International Hotel & Tower Toronto."),u(d,"Marv","Chef d'Line","Chef Marv's culinary journey has taken him around the world and back again to his current role as Chef d'Line' of Faux Nouveau. Chef Marv’s international experience kicked off in London, England, where he worked and trained at the Michelin-starred Tree & Leave at the Orange Hotel, followed by a role at Bar Bouncer in London, working directly with critically acclaimed chef Daniel Bouncer. His passion, skill, and ability to fuse exciting flavours into classic French cuisine impressed Chef Bouncer, who then appointed Chef Marv to the prestigious position of Sous Chef at Bistro Moderne at the luxurious Sandy Hotel in Singapore. With classical training under the world’s culinary leaders, and a flair for elevating it was only natural for Chef Marv to return home and take up residence as Senior Sous Chef at Dulce Canoe, one of Canada’s top restaurants. With his most recent appointment as Chef de Cuisine at Fouc Nouveau, Chef Marv delivers a never-before-seen contemporary, lavish take on classic American cuisine, such as the grilled cheese sandwich."),E();break;case"private dining":y()}document.body.scrollTop=0,document.documentElement.scrollTop=0}const M=e.p+"19bb7815f11d8a411eae8ae6e3042ef6.png",R=e.p+"1126697f75d476caf8f754fb86298377.jpg";const H=function(){!function(){const e=document.createElement("style");e.appendChild(document.createTextNode("    @font-face {        font-family: BaskervilleMTStd-Regular;        src: url('BaskervilleMTStd-Regular.otf');    }    ")),document.head.appendChild(e)}(),function(){const e=document.querySelector("body");e.style.fontFamily="futura-pt, sans-serif",e.style.margin="0",e.style.backgroundColor="#f4f4f4",e.style.fontSize="14px",e.style.fontWeight="300"}(),b(),function(){const e=document.querySelector("#content"),t=document.createElement("section");t.id="showcase",t.style.height="1000px",t.style.width="100%",t.style.overflow="hidden";const n=document.createElement("img");n.src=R,n.style.width="100%",t.appendChild(n),t.style.background="black",t.style.color="white",e.appendChild(t),function(){const e=document.querySelector("#showcase"),t=document.createElement("div");t.id="tagline";const n=document.createElement("p");n.innerHTML="Everyone<br>Wants<br>In",n.style.textTransform="uppercase",t.style.fontFamily="futura-pt",t.style.fontStretch="wider",t.style.width="25%",t.style.textAlign="center",t.style.fontSize="76px",t.style.fontWeight="300",t.style.lineHeight="110px",t.style.letterSpacing=".1em",t.style.position="absolute",t.style.top="50%",t.style.left="37.5%";const o=document.createElement("img");o.src=M,o.style.position="relative",o.style.bottom="80px",e.appendChild(t),t.appendChild(n),t.appendChild(o)}()}(),E()};H()})();