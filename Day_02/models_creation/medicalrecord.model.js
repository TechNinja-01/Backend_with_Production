import mongoose from "mongoose";

const medicalrecordSchema = new mongoose.Schema({},{});

export  const MedicalRecord = mongoose.model("MedicalRecord", medicalrecordSchema);