import mongoose from "mongoose";

const CreatePollSchema = mongoose.Schema({
    question:{
        type:String,
        require:true
    },
    options:{
        type: Array,
        default:[],
    }
})