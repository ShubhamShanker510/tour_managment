const mongoose=require('mongoose');

const tourSchema=mongoose.Schema({
    tour_id:{
        type: Number,
        required: true,
        unique: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        default: ""
    },
    pick_up: {
        type: String,
        required: true
    },
    drop_off:{
        type: String,
        required: true
    },
    duration:{
        type: String,
        required: true,
    },
    duration_unit:{
        type: String,
        required: true,
        enum: ['hours', 'days']
    }
},{timestamps: true})

module.exports=mongoose.model('Tour', tourSchema)