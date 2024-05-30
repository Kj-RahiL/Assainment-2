import { Document } from "mongoose"

interface TOrder extends Document {
    email: string,
    productId : string,
    price: number,
    quantity: number
}

export default TOrder;