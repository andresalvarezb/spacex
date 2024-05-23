import { showHome } from "./Home.js";
import { showRockets } from "./rockets.js";

export async function show(viewName) {
    const main = document.getElementById("main");
    if (main.childNodes.length > 0) {
        main.innerHTML = "";
    }
    if(viewName =='Home') await showHome()
    if(viewName =='Rockets') await showRockets()
}