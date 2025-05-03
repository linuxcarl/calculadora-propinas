import { useState } from "react"
import { OrderItem } from "../types"
import { MenuItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([])
    console.log(order)
    const addItem = (item: MenuItem) =>{
        const itemExists = order.find(r => r.id === item.id)
        if(itemExists) {
            const updateOrder = order.map( orderItem => orderItem.id === item.id ?
                {...orderItem, quantity: orderItem.quantity +1 }:
                orderItem
            )
            setOrder(updateOrder)
        } else {
            const newItem: OrderItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }
    return {
        order,
        addItem
    }
}