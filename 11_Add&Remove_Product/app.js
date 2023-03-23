document.querySelector('#productForm').addEventListener('submit', (e) => {
    const name = document.querySelector('#name').value
    const model = document.querySelector('#model').value
    const price = document.querySelector('#price').value

    const products = new Products(name, model, price)
    const ui = new UI()

    if (name == "" || model == "" || price == "") {
        ui.Alert("Please do not leave blank", "Error")
    } else {
        ui.addProduct(products)
        ui.Alert("Successfully added", "Complated")
    }





    ui.clearList()






    e.preventDefault()
})

function Products(name, model, price) {
    this.name = name
    this.model = model
    this.price = price
}

function UI() { }

UI.prototype.addProduct = function (products) {
    console.log(products);

    const list = document.querySelector('.productList')
    const uls = document.createElement("ul")
    uls.innerHTML = `
    <li>${products.name}</li>
    <li>${products.model}</li>
    <li>${products.price}</li>
    <li class="delete">X</li>
    `
    list.appendChild(uls);
}

UI.prototype.clearList = () => {
    document.querySelector('#name').value = ""
    document.querySelector('#model').value = ""
    document.querySelector('#price').value = ""
}


UI.prototype.Alert = function (mesage, _className) {
    const div = document.createElement('div')
    div.className = `error ${_className}`
    const text = document.createTextNode(mesage)
    div.appendChild(text)
    const form = document.querySelector('#productForm')
    document.body.insertBefore(div, form)

    setTimeout(() => {
        document.querySelector('.error').remove();
    }, 3000);

}

UI.prototype.deleteProductInList = (_target) => {
    if (_target.className == 'delete') {
        _target.parentElement.remove()
    }
}

document.querySelector('.productList').addEventListener('click', (e) => {
    const ui = new UI()
    ui.deleteProductInList(e.target)
    ui.Alert("Deletion successful", "Deleted")

    e.preventDefault()
})