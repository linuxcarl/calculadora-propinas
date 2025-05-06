import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItems: (id: string) => void
}
export default function OrderContents({ order, removeItems }: OrderContentsProps) {
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
                                <button 
                                    type="button" 
                                    onClick={() => removeItems(item.id)}
                                    className="h-8 w-8 bg-red-600 rounded-full text-white font-black hover:text-red-950">
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
