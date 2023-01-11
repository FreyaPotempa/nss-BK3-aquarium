const database = {
    fish: [
        {
            id: 1,
            name: "Toodles",
            species: "Koi",
            length: "Long",
            home: "Japan",
            diet: "whatever",
            image: "https://www.aquascapeinc.com/upload/tancho-kohaku-800.jpg"
        },
        {
            id: 2,
            name: "Buff Boi",
            species: "Betta",
            length: "short",
            home: "Thailand",
            diet: "bloodworms",
            image: "https://www.peta.org/wp-content/uploads/2019/08/iStock-1160758684_NONTANUN-CHAIPRAKON-1-602x301.jpg"
        },
        {
            id: 3,
            name: "Leon",
            species: "Cleaner",
            length: "ity-bitty",
            home: "Brazil",
            diet: "dead skin",
            image: "https://cdn.theatlantic.com/thumbor/9IKzFDUr_w9QXZgFVnJzMJS4FxY=/169x0:2852x2012/1200x900/media/img/mt/2018/03/GettyImages_97101070/original.jpg"
        },
        {
            id: 4,
            name: "Noodles",
            species: "Catfish",
            length: "big-boi",
            home: "United States",
            diet: "arms",
            image: "https://mississippiencyclopedia.org/wp-content/uploads/2018/01/Figure-33.-Catfish.jpg"
        },
        {
            id: 5,
            name: "Ralph",
            species: "Zebra",
            length: "itty-bitty",
            home: "India",
            diet: "whatever",
            image: "https://i.guim.co.uk/img/static/sys-images/Observer/Pix/pictures/2013/9/11/1378895854308/Zebrafish-aquarium.--010.jpg?width=465&quality=85&dpr=1&s=none"
        },
        {
            id: 6,
            name: "Pizza",
            species: "Moray eel",
            length: "big-boi",
            home: "India",
            diet: "fishes",
            image: "https://www.biographic.com/wp-content/uploads/2019/09/fangtooth-moray-eel-Enchelycore-anatina.jpg",
        }

    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}