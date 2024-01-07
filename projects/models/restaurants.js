const {mongoose, mongoclient} = require('../db/mongodb');

const restaurantSchema = new mongoose.Schema({
    address: {
        building: {
            type: String,
            required: true
        },
        coord:{
            latitude: Number, 
            longitude: Number, 
            unique: true
        },
        street: {
            type: String,
            required: true,
            trim: true
        },
        zipcode: {
            type: String,
            required: true,
            trim: true
        }
    },
    borough: {
        type: String
    },
    cuisine: String,
    grades: [{ 
        date: {
            type: Date,
            default: Date.now
            required: true
        },
        grade: {
            type: String,
            required: true
        },
        score: { 
            type: Number,
            required: true
        }
    }],
    name: {
        required: true,
        type:String,
        unique: true,
        trim: true,
    },
    restaurant_id: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    }
})

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

async function main(){

}

main().catch(err => console.error(err));