const load = () => {
    const content = document.querySelector("#content");
    if (content.hasChildNodes()) {
        content.textContent = "";
    }
    content.classList.add("contact");

    content.appendChild(contactCard("phone", "we're literally cats"));
    content.appendChild(contactCard("email", "wemaybecats@butwehavesomeprofessionalism.com"));
    content.appendChild(contactCard("address", "we reside beyond the realm of human understanding"));
};

const contactCard = (type, text) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("div");
    title.textContent = type;
    card.appendChild(title);

    const answer = document.createElement("div");
    answer.textContent = text;
    card.appendChild(answer);

    return card;
};

export {load};