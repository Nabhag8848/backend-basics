const {mongoose, mongoclient} = require('../db/mongodb')
const validator = require('validator');

mongoclient();
const letterSchema = new mongoose.Schema({
    emp_id: {
        type: String,
        require: true,
        unique: true
    },
    emp_name: {
        type: String,
        require: true
    },
    phone_number: {
        type: String,
        require: true,
        validate(value) {
            if(!validator.isMobilePhone(value, 'en-IN')){
                throw new Error({
                    error: 'Not a valid phone number'
                })
            }
        }
    },
    ssc_score: {
        type: Number,
        require: true,
        validate(value) {
            if(value > 100){
                throw new Error({
                    error: 'Not a valid score'
                })
            }
        }
    },
    hsc_score: {
        type: Number,
        validate(value) {
            if(value > 100){
                throw new Error({
                    error: 'Not a valid score'
                })
            }
        }
    },
    company_name: {
        type: String,
        require: true,
        trim: true
    }

})

const Letter = mongoose.model('Letter', letterSchema);


async function insert(){

    // const record = new Letter({
    //     emp_id: '20dce063',
    //     emp_name: 'Nabhag Motivaras',
    //     phone_number: 7984450754,
    //     ssc_score: 78,
    //     hsc_score: 67,
    //     company_name: 'Neev Technologies Inc.'
    // })

    // await record.save();
    const record = await Letter.find({emp_id: '20dce063'});

    console.log(record);

}

insert().then((res) => console.log(res));


// module.exports = Letter;
