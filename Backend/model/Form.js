import mongoose from "mongoose"

const StudSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{ type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address']},
    password:{type:String,required:true},
    department:{type:String,required:true}
})

const Stud=mongoose.model('details',StudSchema)
export default Stud