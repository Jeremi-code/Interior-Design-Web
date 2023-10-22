import mongoose from "mongoose"
const userMessage = mongoose.Schema({
  name : {
    type : String,
    required : true
  } ,
  email : {
    type : String,
    required : true
  },
  message : {
    type : String,
    required : true
  }

})

const User = mongoose.model ("User",userMessage )

export default User