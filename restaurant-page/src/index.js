import {load as loadMain} from './main-page.js';
import {load as loadMenu} from './menu-page.js';
import {load as loadContact} from './contact-page.js';

const body = document.querySelector("body");

const getHeader = () => {
    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "possibly perfect café"
    
    const btw = document.createElement("div");
    btw.classList.add("btw");
    btw.textContent = "no cat puns - we take our job seriously";
    header.appendChild(btw);

    return header;
};

const getTabs = () => {
    const content = document.querySelector("#content");

    const tabs = document.createElement("div");
    tabs.classList.add("tabs");

    const buttonMaker = (text) => {
        const butt = document.createElement("button");
        butt.type = 'button';
        butt.textContent = text;
        return butt;
    }

    const mainChild = buttonMaker("home");
    const menuChild = buttonMaker("menu");
    const contactChild = buttonMaker("contact");

    mainChild.onclick = () => {
        if (!content.classList.contains("main")) {
            loadMain();
        }  
    };
    menuChild.onclick = () => {
        if (!content.classList.contains("menu")) {
            loadMenu();
        }
    }
    contactChild.onclick = () => {
        if (!content.classList.contains("contact")) {
            loadContact();
        }
    }

    tabs.appendChild(mainChild);
    tabs.appendChild(menuChild);
    tabs.appendChild(contactChild);

    return tabs;
};

const loadTop = () => {
    const top = document.createElement("div");
    top.classList.add("top");
    top.appendChild(getHeader());
    top.appendChild(getTabs());

    body.insertBefore(top, document.querySelector("#content"));
}

const loadFooter = () => {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "menu info and images aren't mine. in my horrid-looking websites because I'm too lazy to download assets era";
    body.appendChild(footer);
};

const startSite = () => {
    loadTop();
    loadMain();
    loadFooter();

    const bkgd = document.createElement("div");
    bkgd.classList.add("bkgd-disp");
    body.appendChild(bkgd);
}

startSite();