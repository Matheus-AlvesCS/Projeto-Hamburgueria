const menuOptions = [
    {name: "X-Salada", price: 30, vegan: false, src: "./assets/xsalada.jpeg"},
    {name: "X-Bacon", price: 34, vegan: false, src: "./assets/xbacon.png"},
    {name: "X-Bacon Egg", price: 39, vegan: false, src: "./assets/bacon-egg.png"},
    {name: "Monstruoso", price: 50, vegan: false, src: "./assets/monstruoso.png"},
    {name: "Big Vegano", price: 55, vegan: true, src: "./assets/monstruoso-vegan.png"},
    {name: "X-Vegano", price: 45, vegan: true, src: "./assets/xvegan.png"}
]

const main = document.querySelector(".main-content")
const forEachBTN = document.querySelector("#forEach")
const mapBTN = document.querySelector("#map")
const reduceBTN = document.querySelector("#reduce")
const filterBTN = document.querySelector("#filter")

const formatarValor = price => {
    const formatedValue = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(price)

    return formatedValue
}

const showProducts = list => {
    main.innerHTML = ""

    list.forEach( product => {
        main.innerHTML += `
            <div class="card">
                <img src=${product.src}>
                <p class="product-name">${product.name}</p>
                <p class="product-price">${formatarValor(product.price)}</p>
            </div>
        `
    })
}

const giveDescont = list => {
    main.innerHTML = ""

    list.map(product => {
        main.innerHTML += `
            <div class="card">
                <img src=${product.src}>
                <p class="product-name">${product.name}</p>
                <p class="product-price">${formatarValor(product.price - (product.price * 0.10))}</p>
            </div>
        `
    })
}

const totalValue = list => {
    main.innerHTML = ""

    const value = list.reduce((acc, product) => {
        return acc + product.price
    }, 0)

    main.innerHTML = `
        <div class="card">
            <p class="total-price">A soma do valor de todos os produtos é: ${formatarValor(value)}</p>
        </div>
    `
}

const filterVegans = list => {
    main.innerHTML = ""

    list.filter( product => {
        if (product.vegan === true) return main.innerHTML += `
            <div class="card">
                <img src=${product.src}>
                <p class="product-name">${product.name}</p>
                <p class="product-price">${formatarValor(product.price)}</p>
            </div>
        `
    })
}

forEachBTN.addEventListener("click", () => showProducts(menuOptions))
mapBTN.addEventListener("click", () => giveDescont(menuOptions))
reduceBTN.addEventListener("click", () => totalValue(menuOptions))
filterBTN.addEventListener("click", () => filterVegans(menuOptions))