import React, { useState }from 'react'
import { addProductToCart, removeProductFromCart, clearCart,removeOneProductFromCart} from '../../redux/action'
import { useDispatch, useSelector } from 'react-redux'
import "./ShoppingCart.css"

const ShoppingCart = () => {
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const [count, setCount] = useState(1)
    const quantity = useSelector(state => state.quantity)
    const [order, setOrder] = useState([])

    const handleAdd = (id) => {
        dispatch(addProductToCart(id))
        quantity.map((q) => {
            if (q.id === id) {
                setCount(q.quantity)
            }
        })
    }
    const handleRemove = (id) => {
        dispatch(removeProductFromCart(id))
        setCount(count - 1)
   
        setOrder(order.filter((e) => e !== id))
    }
    const handleRemoveOne = (id) => {
        dispatch(removeOneProductFromCart(id))
        quantity.map((q) => {
            if (q.id === id) {
                setCount(q.quantity)
            }
        })
    }
    const handleClear = () => {
        dispatch(clearCart())
    }
    const handleTotal = () => {
        let total = 0
        cart.map((p) => {
            total += p.price * p.quantity
        })
        return total
    }
console.log(count)
    return (
        <div className="shoppingCart">
            <div>
                <div className="shoppingCart__container__title">
                    <h1>Carrito de compras</h1>
                </div>
                <div className="shoppingCart__container__products">
                    <div className="shoppingCart__conainer__products__title">
                        <h2>Productos</h2>
                    </div>
                    <div className="shoppingCart__container__products__list">
                        {cart.map((e) => (
                            <div className="shoppingCart__container__products__list__item">
                            <div className="shoppingCart__container__products__list__item__remove">
                                    <button className="btnBCardPeDelete" onClick={() => handleRemove(e.id)}>X</button>
                                </div>
                                <div className="shoppingCart__container__products__list__item__img">
                                    <img src={e.image} alt="" />
                                </div>
                                <div className="shoppingCart__container__products__list__item__name">
                                    <h3>{e.name}</h3>
                                </div>
                                <div className="shoppingCart__container__products__list__item__price">
                                <h3>Price: </h3>
                                    <h3>${e.price}</h3>
                                </div>
                                <div className="shoppingCart__container__products__list__item__quantity">
                                    <button onClick={() => handleRemoveOne(e)}>-</button>
                                    <h3>Quantity</h3>
                                    <h3>{e.quantity}</h3>
                                    <button onClick={() => handleAdd(e)}>+</button>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <div className="shoppingCart__container__total">
                    <div className="shoppingCart__container__total__title">
                        <h2>Total</h2>
                    </div>
                    <div className="shoppingCart__container__total__price">
                        <h2>${handleTotal()}</h2>
                    </div>
                    <div className="shoppingCart__container__total__button">
                        <button onClick={() => handleClear()}>Vaciar carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart
