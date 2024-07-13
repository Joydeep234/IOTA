import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    userdetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    content: {
        type: String,   
    },
    rating: {
        type: Number,   
    },
    // Additional fields as needed
}
,{timestamps:true}
);

export const Review = mongoose.model('Review', reviewSchema);


