import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    age:{
        type: Number,
        require: true
    },
    Gender:{
        type : String,
        enum : ["M","F","O"],
    },

    DiagnoseWith:{
        type : String,
        require: true
    },
    Appointeddoctor:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Doctor",
    },

},{timestamps: true});

export const Patient = mongoose.model("Patient", patientSchema);