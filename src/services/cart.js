

async function addItem(userCart, item){
 userCart.push(item)
}

async function removeItem(userCart, item) {
    const index = userCart.findIndex((p) => p.name === item.name)
    if(index === -1) {
        console.log('item not found.')
        return
    }
    if(userCart[index].quantity > 1) {
    userCart[index].quantity -= 1
    return 
    }
    if(userCart[index].quantity == 1) {
        userCart.splice(index, 1)
        return
    }
    
}

async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name)
    if(index !== -1) {
        userCart.splice(index,1)
    }
    
}

async function total(userCart) {
   const result = userCart.reduce((totalValue , item) => totalValue + item.subtotal(),0)
   console.log(result)
}

async function showItens(userCart) {
    console.log('Your products:')
    userCart.forEach((item, index) => {
        console.log(`${index + 1} -- ${item.name} quantity: ${item.quantity}`)
    });
}

export { addItem, removeItem, deleteItem, total, showItens}