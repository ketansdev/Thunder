import mongoose from "mongoose";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    name :{
        type : "String",
        minLength : 3,
        maxLength : 20,
        trim : true,
        required : true,
    },
    age : {
        type : "Number",
        required : true,
        min : 18,
        max : 100
    },
    city : {
        type : "String",
        required : true,
    },
    accountNumber : {
        type : "String",
        required : true,
        unique : "true"
    },
    balance: {
        type : "Number",
        min : 0,
        default : true
    },
    accountType:{
        type : "String",
        required: true,
        enum : ["Savings", "Current"],
        default : "Savings"
    }
}, {timestamps : true})

const User = mongoose.model("User", userSchema);

export default User;