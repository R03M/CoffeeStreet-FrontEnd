import React from 'react'
import { addProductToCart, removeProductFromCart, clearCart } from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)

    const handleAdd = (id) => {
        dispatch(addProductToCart(id))
    }

    const handleRemove = (id) => {
        dispatch(removeProductFromCart(id))
    }

    const handleClear = () => {
        dispatch(clearCart())
    }

    const handleTotal = () => {
        let total = 0
        cart.forEach(product => {
            total += product.price
        })
        return total
    }

    return (
        <div className="shoppingCart">
            <h1>Shopping Cart</h1>
            <div className="shoppingCartContainer">
                <div className="shoppingCartProducts">
                    {cart.map(product => (
                        <div className="shoppingCartProduct" key={product.id}>
                            <div className="shoppingCartProductImg">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="shoppingCartProductInfo">
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <div className="shoppingCartProductButtons">
                                    <button onClick={() => handleAdd(product.id)}>+</button>
                                    <button onClick={() => handleRemove(product.id)}>-</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="shoppingCartTotal">
                    <p>Total: ${handleTotal()}</p>
                    <button onClick={handleClear}>Clear Cart</button>
                </div>
            </div>
        </div>
    )

}

export default ShoppingCart


// import React from 'react'
// import { addProductToCart, removeProductFromCart, clearCart } from '../../redux/action'
// import { useDispatch, useSelector } from 'react-redux'

// export const ShoppingCart = () => { 
//     const cart = useSelector(state => state.cart.map (item => {
//         return {
//             ...item,
//             product: state.products.find(product => product.id === item.productId)
//         }
//     }))

//     //  const product = useSelector(state => state.products)

//     const dispatch = useDispatch()

//     const handlerRemove = (productId) => {
//         dispatch(removeProductFromCart(productId))
//     }

//     const handlerClear = () => {
//         dispatch(clearCart())
//     }

//     const handlerAdd = (productId) => {
//         dispatch(addProductToCart(productId))
//     }
//     const handlerTotal = () => {
//         let total = 0
//         cart.forEach(product => {
//             total +=  product.price * product.quantity
//         })
//     }

//     return (
//         <div className="shoppingCartDiv">
//             <div className="shoppingCartDivBody">
//                 <div className="shoppingCartDivBodyTitle">
//                     <h1>Shopping Cart</h1>
//                 </div>
//                 <div className="shoppingCartDivBodyProducts">
//                     {cart.length === 0 ? <h1>There are no products in the cart</h1> : cart.map((product) => {
//                         return (
//                             <div className="shoppingCartDivBodyProductsCard">
//                                 <div className="shoppingCartDivBodyProductsCardImg">
//                                     <img src={product.image} alt="product" />
//                                 </div>
//                                 <div className="shoppingCartDivBodyProductsCardName">
//                                     <p>{product.name}</p>
//                                 </div>
//                                 <div className="shoppingCartDivBodyProductsCardPrice">
//                                     <p>${product.price}</p>
//                                 </div>
//                                 <div className="shoppingCartDivBodyProductsCardButtons">
//                                     <button onClick={() => handlerAdd(product.id)}>+</button>
//                                     <button onClick={() => handlerRemove(product.id)}>-</button>
//                                 </div>
//                             </div>
//                         )
//                     }
//                     )}
//                 </div>
//                 <div className="shoppingCartDivBodyTotal">
//                     <p>Total: ${handlerTotal()}</p>
//                 </div>
//                 <div className="shoppingCartDivBodyButtons">
//                     <button onClick={() => handlerClear()}>Clear Cart</button>
//                     <button>Buy</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ShoppingCart