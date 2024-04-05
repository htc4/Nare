// Menu items data
let menuItems = [
    { id: "events", text: "EVENTS", link: "../Events/events.html" },
    { id: "teaparty", text: "TEAPARTY", link: "../TeaParty/teaparty.html" },
    { id: "members", text: "MEMBERS", link: "../Members/members.html" },
    { id: "aboutus", text: "ABOUTUS", link: "../AboutUS/aboutus.html" },
    { id: "login", text: "LOGIN", link: "../Login/login.html" },
    { id: "general", text: "GENERAL", link: "../index.html" },
];

let menuItems1 = [
    { id: "events", text: "EVENTS", link: "./Events/events.html" },
    { id: "teaparty", text: "TEAPARTY", link: "./TeaParty/teaparty.html" },
    { id: "members", text: "MEMBERS", link: "./Members/members.html" },
    { id: "aboutus", text: "ABOUTUS", link: "./AboutUS/aboutus.html" },
    { id: "login", text: "LOGIN", link: "./Login/login.html" },
    { id: "general", text: "GENERAL", link: "./index.html" },
];

// Function to create menu items
function createMenu() {
    if (!window.location.href.endsWith('index.html') && !window.location.href.endsWith('index.html#')) {


        let menuContainer = document.getElementById('menuContainer'); //id-a talis div-in


        // Create menu toggle button - rensponsivi jamanak poqranaluc heto ereva
        let menuToggle = document.createElement('div');
        menuToggle.classList.add('menu_toggle');
        menuToggle.innerHTML = '&#9776;';
        menuContainer.appendChild(menuToggle);

        // Create menu items container
        let menuItemsContainer = document.createElement('div');
        menuItemsContainer.classList.add('menu_items');

        menuItems.forEach(item => {
            let menuItem = document.createElement('a');
            menuItem.classList.add('menu_item');
            menuItem.textContent = item.text;
            menuItem.href = item.link;

            // Add click event listener to each menu item
            menuItem.addEventListener('click', () => {
                setActiveMenuItem(item.id);
            });

            menuItemsContainer.appendChild(menuItem);
        });

        menuContainer.appendChild(menuItemsContainer);

        // Toggle menu items on mobile
        menuToggle.addEventListener('click', function () {
            menuItemsContainer.classList.toggle('active');
        });
    }
    else {

        let menuContainer = document.getElementById('menuContainer'); //id-a talis div-in

        // Create menu toggle button - rensponsivi jamanak poqranaluc heto ereva
        let menuToggle = document.createElement('div');
        menuToggle.classList.add('menu_toggle');
        menuToggle.innerHTML = '&#9776;';
        menuContainer.appendChild(menuToggle);

        // Create menu items container
        let menuItemsContainer = document.createElement('div');
        menuItemsContainer.classList.add('menu_items');

        menuItems1.forEach(item => {
            let menuItem = document.createElement('a');
            menuItem.classList.add('menu_item');
            menuItem.textContent = item.text;
            menuItem.href = item.link;

            // Add click event listener to each menu item
            menuItem.addEventListener('click', () => {
                setActiveMenuItem(item.id);
            });

            menuItemsContainer.appendChild(menuItem);
        });

        menuContainer.appendChild(menuItemsContainer);

        // Toggle menu items on mobile
        menuToggle.addEventListener('click', function () {
            menuItemsContainer.classList.toggle('active');
        });


    }
}

// Create a link element
var linkElement = document.createElement('link');
// Set the rel attribute to 'stylesheet'
linkElement.rel = 'stylesheet';
// Set the type attribute to 'text/css'
linkElement.type = 'text/css';
// Set the href attribute to your CSS file
linkElement.href = '/home/administrator/Documents/Nare/Client/Component/navigation.css'; /*see pahth*/
// Append the link element to the document's head
document.head.appendChild(linkElement);


// Call createMenu() function to initialize the menu
if (document.getElementById("menuContainer")) {
    createMenu();
}

