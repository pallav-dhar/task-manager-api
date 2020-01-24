const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{ useNewUrlParser: true }, (error , client) => {
    if(error) {
        return console.log("Unable To Connect To Database")
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne( {
    //     name : 'pallav',
    //     age : 27
    // }, (error , result) => {
    //     if(error){
    //         return console.log("Unable to connect")
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany( [{
    //     name : 'aarti',
    //     age : 32
    // },{
    //     name : "binit",
    //     age : 32
    // }
    //   ], (error , result) => {
    //     if(error){
    //         return console.log("Unable to connect")
    //     }
    //     console.log(result.ops)
    // })
//     db.collection('tasks').insertMany( [{
//        description : 'homework',
//        completed : 'no'
//     },{
//        description : 'eating',
//        completed : 'yes'
//     },{  
//        description : 'playing',
//        completed : 'yes'
//     },
//    ], (error , result) => {
//         if(error){
//             return console.log("Unable to connect")
//         }
//         console.log(result.ops)
//     })

})
