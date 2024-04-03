// Create HTML elements
const html = document.createElement('html');
const head = document.createElement('head');
const linkFont = document.createElement('link');
const linkCss = document.createElement('link');
const body = document.createElement('body');
const divLanding = document.createElement('div');
const divForLand = document.createElement('div');
const divNew = document.createElement('div');
const divDiv1 = document.createElement('div');
const divImg = document.createElement('div');
const spanEvents = document.createElement('span');
const spanTeaParty = document.createElement('span');
const spanMembers = document.createElement('span');
const spanAbout = document.createElement('span');
const spanGeneral = document.createElement('span');
const spanLogin = document.createElement('span');

// Set attributes
html.lang = "en";
linkFont.rel = "stylesheet";
linkFont.href = "https://fonts.googleapis.com/css?family=Kurale&display=swap";
linkCss.rel = "stylesheet";
linkCss.href = "./css/navigation.css";
divLanding.className = "landing";
divForLand.className = "forland";
divNew.className = "new";
divDiv1.className = "div1";
divImg.className = "img";
spanEvents.className = "events";
spanTeaParty.className = "teaparty";
spanMembers.className = "members";
spanAbout.className = "about";
spanGeneral.className = "general";
spanLogin.className = "login";

// Set text content
spanEvents.textContent = "Events";
spanTeaParty.textContent = "Tea Party";
spanMembers.textContent = "Members";
spanAbout.textContent = "About";
spanGeneral.textContent = "General";
spanLogin.textContent = "Login";

// Append elements
html.appendChild(head);
head.appendChild(linkFont);
head.appendChild(linkCss);
html.appendChild(body);
body.appendChild(divLanding);
divLanding.appendChild(divForLand);
divLanding.appendChild(divNew);
divNew.appendChild(divDiv1);
divNew.appendChild(divImg);
divImg.appendChild(spanEvents);
divImg.appendChild(spanTeaParty);
divImg.appendChild(spanMembers);
divImg.appendChild(spanAbout);
divImg.appendChild(spanGeneral);
divImg.appendChild(spanLogin);

// Output HTML
document.documentElement.replaceWith(html);
