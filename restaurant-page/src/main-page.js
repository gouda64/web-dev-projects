import CatChef from './assets/cat-chef.jpg';

const load = () => {
    const content = document.querySelector("#content");
    if (content.hasChildNodes()) {
        content.textContent = "";
    }
    content.classList.add("main");

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "women want us, fish fear us";

    const pic = document.createElement("img");
    pic.src = CatChef;
    pic.alt = "Grumpy-looking tabby cat with chef hat holds large grey fish over stove and pan";

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.textContent = '"i love [our food] and that is the beginning and end of everything." - the great catsby';

    content.appendChild(headline);
    content.appendChild(pic);
    content.appendChild(caption);
}

export {load};