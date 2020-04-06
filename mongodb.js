const { MongoClient, ObjectID } = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id  = new ObjectID()

MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    } 
    const db = client.db(databaseName)
    
    db.collection('users').updateOne({ 
        _id: new ObjectID("5e8ace5490440b836820b5ce")
        }, {
            $inc: {
            age:1
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})