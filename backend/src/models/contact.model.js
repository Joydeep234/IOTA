import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
    catagory: {
        type: String,
        required: true
    },
    userdetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    message: {
        type: String,
        required: true
    },
    complete:{
        type:Boolean,
        default:false
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    // Additional fields as needed
});

export const ContactFormSubmission = mongoose.model('ContactFormSubmission', contactFormSchema);

