import { getFish } from './database.js'

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fishList">'

    // Create HTML representations of each fish here
    for (let fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div class="fish-ind">
                <img  class="fish__image image--card" src="${fish.image}" />
                    <p class="fish-name">${fish.name}</p>
                    <ul class="fish-deets">
                        <li class="fish__species">Species: ${fish.species}</li>
                        <li  class="fish__length">Size: ${fish.length}</li>
                        <li class="fish__location">Home: ${fish.home}</li>
                        <li class="fish__diet">Eats: ${fish.diet}</li>
                    </ul>
            </div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}

