import { getFish } from './database.js'

const allFish = getFish()

for (let fish of allFish) {
    console.log(fish)
}

import { FishList } from './FishList.js'
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
    const parentHTMLElement = document.querySelector(".fishList")


    parentHTMLElement.innerHTML = FishList()