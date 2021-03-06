const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type:String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }  
        }
    },
    age: {
        type: Number,
        dafault: 0,
        validate(value) {
            if(value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 7,
        validate(value) {
            if(value.includes('password')) {
                throw new Error('Try with different password')
            }
        }
    }
})

// const me = new User({name: 'Dona', email: 'mikeaa@ata.com' , password: 'pasrd'})

// me.save()
//     .then((me) => {
//         console.log(me)
//     })
//     .catch((error) => {
//         console.log(error);
// })

const Task = mongoose.model('Task', {
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Task({description: ''})
task.save().then((me) => {
            console.log(me)
        })
        .catch((error) => {
            console.log(error);
    })