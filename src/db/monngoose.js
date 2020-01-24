const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser : true,
    useCreateIndex : true,
    useUnifiedTopology: true
})


// const user = mongoose.model('User', {
//     name : {
//         type : String,
//         required : true,
//         trim : true
//     },
//     age : {
//         type : Number,
//         default : 0,
//         validate(value) {
//             if(value < 0) {
//                 throw new Error('Age Must be Positive')
//             }
//         }
//     }, 
//      password : {
//          type : String,
//          trim : true,
//          required : true,
//          minlength : 7,
//          validate(value) {
//              if( value.toLowerCase().includes('password')){
//                  throw new Error('password cannot contain "password"')
//              }
//          }
//      },
//     email : {
//         type : String,
//         required : true,
//         trim : true,
//         validate(value) {
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is Invalid')
//             }
//         }
//     }
// })

// const me = new user( {
//     name : '  pallav ',
//     password : '  houglglglgkfui23  ',
    
//     email : '  pallav@gmail.com '
// })

// me.save().then( (result) => {
//   console.log(result)
// }).catch( (error) => {
//    console.log('error' , error)
// })

//  const task = mongoose.model('task' ,{
//      description : {
//          type : String,
//          trim : true,
//          required : true
//      },
//      completed : {
//          type : Boolean,
//          default : false
//      }
//  })

