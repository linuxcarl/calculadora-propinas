import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}
export default function OrderContents({ order }: OrderContentsProps) {
  return (
    <div>
        <h2 className="font-black text-3xl">Consumo</h2>
        <div className="space-y-3 mt-10">
            {
                order.length === 0 ? 
                <p className="text-center text-2xl">La orden esta vacia</p> 
                :
                (
                    order.map( item => (
                        <div key={item.id} className="flex justify-between border-t items-center border-gray-200 py-5 last-of-type:border-b" >
                           <div>
                                <p className="text-lg">{item.name} - { formatCurrency(item.price) }</p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - { formatCurrency(item.price * item.quantity) }
                                </p>
                           </div>
                           <div>
                                <button type="button" className="text-2xl text-red-500 hover:text-red-700">
                                    &times;
                                </button>
                           </div>
                        </div>
                    ))
                )
            }
        </div>
    </div>
  )
}
