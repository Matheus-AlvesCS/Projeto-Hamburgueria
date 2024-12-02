const main = document.querySelector(".main-content")
const forEachBTN = document.querySelector("#forEach")
const mapBTN = document.querySelector("#map")
const reduceBTN = document.querySelector("#reduce")
const filterBTN = document.querySelector("#filter")

const formatPrice = price => {
    const formatedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(price)

    return formatedValue
}

const showProducts = list => {
    main.innerHTML = ""
    main.style.backgroundColor = "#634c43"

    list.forEach( product => {
        main.innerHTML += `
            <div class="card">
                <img src=${product.src}>
                <p class="product-name">${product.name}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
            </div>
        `
    })
}

const giveDescont = list => {
    main.style.backgroundColor = "#634c43"

    const newPrices = list.map( product => ({
        ...product,
        price: product.price - (product.price * 0.10)
    }))

    showProducts(newPrices)
}

const totalValue = list => {
    main.style.backgroundColor = "#634c43"

    const finalValue = list.reduce((acc, curr) => acc + curr.price, 0)

    main.innerHTML = `
        <div class="card">
            <p class="total-price">A soma do valor de todos os produtos é: ${formatPrice(finalValue)}</p>
        </div>
    `
}

const filterVegans = list => {
    main.style.backgroundColor = "#634c43"
    
    const filtredProducts = list.filter( product => product.vegan)

    showProducts(filtredProducts)
}

forEachBTN.addEventListener("click", () => showProducts(menuOptions))
mapBTN.addEventListener("click", () => giveDescont(menuOptions))
reduceBTN.addEventListener("click", () => totalValue(menuOptions))
filterBTN.addEventListener("click", () => filterVegans(menuOptions))