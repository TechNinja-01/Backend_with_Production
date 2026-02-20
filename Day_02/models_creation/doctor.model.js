import mongoose from "mongoose";

const Workinghours = new mongoose.Schema({
    doctorID :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Doctor"
    },
    workinghours: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital"
    }
},{})

const doctorSchema = new mongoose.Schema({
    name : {
        type : String,
        require  : true,
    },
    qualification :{
        type : Number,
        default : 0,
    },

},{timestamps: true});

export const Doctor = mongoose.model("Doctor", doctorSchema);