import {load as loadMain} from './main-page.js';
import {load as loadMenu} from './menu-page.js';
import {load as loadContact} from './contact-page.js';

const body = document.querySelector("body");

const loadHeader = () => {
    const header = document.createElement("div");
    header.classList.add("header");
    header.textContent = "possibly perfect café"
    
    const btw = document.createElement("div");
    btw.classList.add("btw");
    btw.textContent = "no cat puns - we take our job seriously";
    header.appendChild(btw);

    body.insertBefore(header, document.querySelector("#content"));
};

const loadTabs = () => {
    const tabs = document.createElement("div");
    //could do ul but then you gotta deal with all that styling stuff
    //accessibility concern?
    /* anyways I know comments are supposed to be informative
    and not my personal diary but honestly idrc nobody else is gonna
    see this anyways, who am I even talking to?
    tldr: why write less word when more word do job?
    */

    const mainChild = document.createElement("div");
    mainChild.textContent = "main";
    const menuChild = document.createElement("div");
    menuChild.textContent = "menu";
    const contactChild = document.createElement("div");
    contactChild.textContent = "contact";
    
    tabs.appendChild(mainChild);
    tabs.appendChild(menuChild);
    tabs.appendChild(contactChild);

    body.insertBefore(tabs, document.querySelector("#content"));
};

const loadFooter = () => {
    const footer = document.createElement("div");
    footer.classList.add("footer");
    footer.textContent = "menu info and images aren't mine. i could add a copyright, but why are you trying to steal from cats?";
    body.appendChild(footer);
};

const startSite = () => {
    loadHeader();
    loadTabs();
    loadMain();
    loadFooter();
}

startSite();