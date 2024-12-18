import mongoose from "mongoose";
import bcrypt from'bcrypt';

let userSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true,
        unique: true 
    },
    password: {
        type: String, 
        required: true,
        select: false 
    },
})

userSchema.pre('save', async function (){
    this.password = await bcrypt.hash(this.password, 10)
})


let userModel = new mongoose.model('MyUsers', userSchema)

export default userModel