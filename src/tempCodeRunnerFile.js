import createItem from "./services/itens.js"
import { addItem, removeItem, deleteItem, total, showItens } from "./services/cart.js"

const cart = []

console.log('Welcome to your cart...')

const item1 = await createItem('toalha',10.00, 1)
const item2 = await createItem('lençol',49.99, 2)

await addItem(cart,item1)
await addItem(cart,item2)

await showItens(cart)

await deleteItem(cart,item1)
await removeItem(cart,item2)

await showItens(cart)


await total(cart)