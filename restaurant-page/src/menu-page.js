import Burger from './assets/777-burger.jpg'; 
import Omelet from './assets/lobster-omelet.jpg';
import Pizza from './assets/pizza.jpg';
import Taco from './assets/taco.jpg';
import Purrito from './assets/purrito.gif';

const load = () => {
    const content = document.querySelector("#content");
    if (content.hasChildNodes()) {
        content.textContent = "";
    }
    content.classList.add("menu");

    content.appendChild(itemCard("fancy burger", Burger,  "Very fancy, high-stacked burger on plate, with salad on the side", "$777 - high-grade beef, pancetta, goat cheese, seared foie grass, arugula, maine lobster, and 100 year-aged balsamic vinegar on your choice of ridiculously overengineered roll, served with a salad and bottle of dom perignon rosé (to jack up the price even more)"));

    content.appendChild(itemCard("even fancier omelet", Omelet, "Round yellow omelet on plate topped with chives, lobster, and large mound of caviar", "$2,000 - six eggs, cream, chives, lobster sauce, a whole lobster, and 10 (not excessive) ounces of sevurga caviar, served over yukon gold potatoes"));

    content.appendChild(itemCard("even fancier than fancy pizza", Pizza, "Pizza with creamy white cheese topped with slices of lobster and several different colors of caviar, garnished with (seemingly) scallions in an x-formation", "$12,000 - 20 cm pizza with weird dough that takes 72 hours to rise (me fr), topped with seven types of cheese, lobster from norway, and three types of caviar with fancy unspellable names, plus bottles of champagne, brancy, and cognac; an exclusive limited edition set of dishes and cutlery (just 'cause); and they literally come to your house"));

    content.appendChild(itemCard("world record fancy taco", Taco, "Yellow tortilla taco filled with various expensive fillings and garnished with flowers in wooden holder", "$25,000 aka just get a car - gold flake-infused corn tortilla filled with kobe beef, almas beluga caviar, and black truffle brie cheese, and served with salsa of dried morita chili peppers, ley.925 (super-)ultra-premium añejo tequila, and civet coffee beans (fun fact: civets are also called toddy cats - cute! - and civet coffee is made from the partially digested and fermented coffee beans found in their poop - why!)"))

    content.appendChild(itemCard("purrito", Purrito, "Tabby kitten wrapped in green towel with only head sticking out, throwing back head and mewing", "$1,000,000,000,000 - we sold out."))
};

const itemCard = (name, imgSrc, imgAlt, caption) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = name;
    card.appendChild(title);

    const pic = document.createElement("img");
    pic.src = imgSrc;
    pic.alt = imgAlt;
    card.appendChild(pic);

    const cpt = document.createElement("div");
    cpt.classList.add("caption");
    cpt.textContent = caption;
    card.appendChild(cpt);

    return card;
}

export {load};