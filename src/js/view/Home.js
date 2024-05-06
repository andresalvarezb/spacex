import { getHistories } from "../model/Histories.model.js";

export async function cardHistories() {
    const main = document.getElementById('#main')

    const data = await getHistories();

    const cards = []
    await Promise.all(data.forEach(({ title, date, details, links }) => {
        const card = document.createElement('div')
        const titleCard = document.createElement('h2')
        const textCard = document.createElement('p')
        const dateCard = document.createElement('span')
        const linkArticle = document.createElement('a')
        const container = document.createElement('div')

        titleCard.textContent = title
        textCard.textContent = details
        dateCard.textContent = date

        // atributtes
        card.classList.add("card")
        titleCard.classList.add("card__title")
        textCard.classList.add("card__details")
        dateCard.classList.add("card__date")
        card.classList.add("card")
        linkArticle.classList.add("card__article")
        linkArticle.setAttribute("href", links[0])

        // JOIN

        container.append(dateCard, linkArticle)
        cards.push(card.append(titleCard, textCard, container))
    }))

    // main.append(...cards)
    // console.log( await Promise.all(cards));
    console.log(cards);

    // < div class="card" >
    //     <h2 class="card__title"></h2>
    //     <p class="card__details"></p>
    //     <div>
    //         <span class="card__date"></span>
    //         <a href="" class="card_article"><i class='bx bx-link'></i></a>
    //     </div>
    // </ div>
}