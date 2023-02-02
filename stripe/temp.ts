// const getCustomerById =async (id) => {
//     const customer = await stripe.customers.retrieve(id);
//     return customer;
// }

import Stripe from 'stripe';
import * as dotenv from 'dotenv';
dotenv.config()
const secret:string = <string>process.env.secret;
const stripe = new Stripe(secret,{
    apiVersion: '2022-08-01',
});
   
async function del(){
    const {data} = await stripe.customers.list({
        limit:10
    })

    for(let i = 0;i < 7; ++i){
        await stripe.customers.del(
            data[i].id
        )
    }
}
del()
// export {
//     createCustomer, 
//     // getCustomerById
// }


async function subscribe() {
    
    const subscription = await stripe.subscriptions.create({
        customer: 'cus_MSI9MyrCwbKDXL',
        items: [
          {price: 'price_1LjNsJSDQhil9bRPsUe7TAZa'},
        ],
    });

    console.log(subscription);
    const subscriptions = await stripe.subscriptions.list({
        limit: 10,
    })

    console.log(subscriptions)

}

// subscribe();

async function cus() {

    await stripe.customers.update('cus_MSI9MyrCwbKDXL', {
        invoice_settings: {
            default_payment_method: 'pm_1LjO1nSDQhil9bRPIgbsZIfD'
        }
    })

    const customer = await stripe.customers.list({
        limit:3
    })

    console.log(customer)

}

// cus();

async function productPrice() {
    const price = await stripe.prices.create({
        currency:'usd',
        billing_scheme: 'per_unit',
        recurring: {interval: 'month', interval_count:1, usage_type:'licensed'},
        product:'prod_MSIIv9V2h0iSCe',
        unit_amount: 49,


    })

    console.log(price);
}

// productPrice();

async function createProduct() {
    const product = await stripe.products.create({
        name:'snappyStore',
    })

    console.log(product);
}

// createProduct();

async function Payment() {
    // const paymentMethod = await stripe.paymentMethods.create({
    //     type: 'card',
    //     card: {
    //       number: '4242424242424242',
    //       exp_month: 9,
    //       exp_year: 2023,
    //       cvc: '314',
    //     },
    //   });

    //   {
    //     object: 'list',
    //     data: [],
    //     has_more: false,
    //     url: '/v1/payment_methods'
    //   }
    //   
    //   {
    //     id: 'pm_1LjO1nSDQhil9bRPIgbsZIfD',
    //     object: 'payment_method',
    //     billing_details: {
    //       address: {
    //         city: null,
    //         country: null,
    //         line1: null,
    //         line2: null,
    //         postal_code: null,
    //         state: null
    //       },
    //       email: null,
    //       name: null,
    //       phone: null
    //     },
    //     card: {
    //       brand: 'visa',
    //       checks: {
    //         address_line1_check: null,
    //         address_postal_code_check: null,
    //         cvc_check: 'unchecked'
    //       },
    //       country: 'US',
    //       exp_month: 9,
    //       exp_year: 2023,
    //       fingerprint: 'tDxU6ebOfH31HOlc',
    //       funding: 'credit',
    //       generated_from: null,
    //       last4: '4242',
    //       networks: { available: [Array], preferred: null },
    //       three_d_secure_usage: { supported: true },
    //       wallet: null
    //     },
    //     created: 1663509564,
    //     customer: null,
    //     livemode: false,
    //     metadata: {},
    //     type: 'card'
    //   }      

    // console.log(paymentMethod)

    const paymentMethod = await stripe.paymentMethods.attach(
      'pm_1LjO1nSDQhil9bRPIgbsZIfD',
      {
        customer: 'cus_MSI9MyrCwbKDXL',
      }
    );
}

// Payment();

// {
//     id: 'sub_1LjOFnSDQhil9bRPUOkmIPew',
//     object: 'subscription',
//     application: null,
//     application_fee_percent: null,
//     automatic_tax: { enabled: false },
//     billing_cycle_anchor: 1663510431,
//     billing_thresholds: null,
//     cancel_at: null,
//     cancel_at_period_end: false,
//     canceled_at: null,
//     collection_method: 'charge_automatically',
//     created: 1663510431,
//     currency: 'usd',
//     current_period_end: 1666102431,
//     current_period_start: 1663510431,
//     customer: 'cus_MSI9MyrCwbKDXL',
//     days_until_due: null,
//     default_payment_method: null,
//     default_source: null,
//     default_tax_rates: [],
//     description: null,
//     discount: null,
//     ended_at: null,
//     items: {
//       object: 'list',
//       data: [ [Object] ],
//       has_more: false,
//       total_count: 1,
//       url: '/v1/subscription_items?subscription=sub_1LjOFnSDQhil9bRPUOkmIPew'
//     },
//     latest_invoice: 'in_1LjOFnSDQhil9bRPHQBuiZsB',
//     livemode: false,
//     metadata: {},
//     next_pending_invoice_item_invoice: null,
//     pause_collection: null,
//     payment_settings: {
//       payment_method_options: null,
//       payment_method_types: null,
//       save_default_payment_method: 'off'
//     },
//     pending_invoice_item_interval: null,
//     pending_setup_intent: null,
//     pending_update: null,
//     plan: {
//       id: 'price_1LjNsJSDQhil9bRPsUe7TAZa',
//       object: 'plan',
//       active: true,
//       aggregate_usage: null,
//       amount: 49,
//       amount_decimal: '49',
//       billing_scheme: 'per_unit',
//       created: 1663508975,
//       currency: 'usd',
//       interval: 'month',
//       interval_count: 1,
//       livemode: false,
//       metadata: {},
//       nickname: null,
//       product: 'prod_MSIIv9V2h0iSCe',
//       tiers_mode: null,
//       transform_usage: null,
//       trial_period_days: null,
//       usage_type: 'licensed'
//     },
//     quantity: 1,
//     schedule: null,
//     start_date: 1663510431,
//     status: 'incomplete',
//     test_clock: null,
//     transfer_data: null,
//     trial_end: null,
//     trial_start: null
//   }
