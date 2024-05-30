import { Document } from "mongoose"

type TOrder = {
    email: string,
    productId : string,
    price: number,
    quantity: number
}

export default TOrder;