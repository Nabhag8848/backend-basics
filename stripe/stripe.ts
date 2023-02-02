import Stripe from 'stripe';
import * as dotenv from 'dotenv';
import { CustomerInfo, ProductInfo } from './interface'
dotenv.config()




const secret:string = <string>process.env.secret;
const stripe = new Stripe(secret,{
    apiVersion: '2022-08-01',
});

const createCustomer = async function (customerInfo: CustomerInfo){

    const email:string = customerInfo.email;
    const phone:string = customerInfo.phone;
    const name:string =  customerInfo.name;

    const params: Stripe.CustomerCreateParams = {
        email,
        phone,
        name,
        description: 'test customer',
    }
    const customer: Stripe.Customer = await stripe.customers.create(params);

    return customer;
}

const isOldCustomer = async function (email:string): Promise<boolean>{
    try {
        
        const customer = await stripe.customers.list({
            email,
            limit: 1
        });

        if(customer.data.length == 0){
            return false;
        }

        return true;

    }catch (err:unknown) {
        throw new Error(<string>err);
    }

}

const createProduct = async function (productInfo: ProductInfo): Promise<Stripe.Product> {
    try {

        const name:string = productInfo.name;
        const description:string = productInfo.description;
    
        const params: Stripe.ProductCreateParams = {
            name,
            description
        }

        const product: Stripe.Product = await stripe.products.create(params);

        return product;

    }catch (err: unknown) {
        throw new Error(<string>err);
    }
}

// const listProduct = async function ():Promise<Stripe.Product> {
//     try {


//     }catch (err:unknown) {
//         throw new Error(<string>err);
//     }
// }


export { createCustomer, isOldCustomer };