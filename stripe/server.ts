import express from 'express';
import Stripe from 'stripe';
import { createCustomer, isOldCustomer }  from './stripe';
import { CustomerInfo,  } from './interface';

    
    const app = express();
    
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    
    app.get('/', async function (req, res){
        res.send('Health Check!');
    })
    
    app.post('/login',async ( req, res ) => {
        
        const customerInfo: CustomerInfo = req.body;
        
        // dont create customer if already exist
        const isCustomerExist:boolean = await isOldCustomer(customerInfo.email);
    
        if(!isCustomerExist){
            const customer = await createCustomer({
                email: customerInfo.email,
                name: customerInfo.name,    
                phone: customerInfo.phone
            });
    
           return res.status(200).send('Login & Customer Created: ' + JSON.stringify(customer));
        }
    
        return res.status(200).send('Login Successful');
    })
    
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server is up and running on http:localhost:${PORT}`));