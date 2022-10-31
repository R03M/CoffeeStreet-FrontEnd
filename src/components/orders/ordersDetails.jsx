import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsOrder } from '../../redux/action';

const OrdersDetails = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const orderDetails = useSelector((state) => state.detailsOrder.order_product);
    // console.log("detalles",orderDetails);

    useEffect(() => {
        dispatch(detailsOrder(id));
    }, [dispatch]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Orders Details</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Id Order</th>
                                <th scope="col">Id Product</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderDetails.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.idProduct}</td>
                                    <td>{order.product.name}</td>
                                    <td>{order.quantity}</td>
                                    <td>$ {order.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Link to="/admin" className="btn btn-primary">
                        Back
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default OrdersDetails
