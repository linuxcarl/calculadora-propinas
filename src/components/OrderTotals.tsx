import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number
}
export default function OrderTotals({ order , tip=0}: OrderTotalsProps) {
    const subtotal = useMemo(() => order.reduce((total, item)=> total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(()=> subtotal * tip , [tip, order])
    const totalAmount = useMemo(()=> subtotal + tipAmount , [tip, order])
    return (
      <>
        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas:</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subtotal)}</span>
            </p>
            <p>Propinas: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>Toltal a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>
      </>
    )
}
