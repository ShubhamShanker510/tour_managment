const Tour=require('../models/tour.model')

// tour_id:{
//     type: Number,
//     required: true,
//     unique: true
// },
// title:{
//     type: String,
//     required: true
// },
// description:{
//     type: String,
// },
// pick_up: {
//     type: String,
//     required: true
// },
// drop_off:{
//     type: String,
//     required: true
// },
// duration:{
//     type: String,
//     required: true,
// },
// duration_unit:{
//     type: String,
//     enum: ['hours', 'day']
// }

//create a tour
const createTour=async(req,res)=>{
    try {
        const {tour_id,title,description, pick_up, drop_off,duration,duration_unit}=req.body;

        if(!tour_id || !title || !pick_up || !drop_off || !duration || !duration_unit){
            return res.status(400).json({
                success: false,
                message: "All fields are mandatory"
            })
        }

        //checking exist tour_id
        const exisitingTour=await Tour.findOne({tour_id});

        if(exisitingTour){
            return res.status(400).json({
                success: false,
                message: "Existing tour id"
            })
        }

        //creation of tour
        const tour=await Tour.create({
            tour_id,
            title,
            description,
            pick_up,
            drop_off,
            duration,
            duration_unit
        })

        
        return res.status(200).json({
            success: true,
            message: "Tour created successfully",
            data: tour
        })

        
    } catch (error) {
        console.log("Create Tour error=>", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"            
        })
    }
}

//get all tours
const getAllTours=async(req,res)=>{
    try {
        const tours=await Tour.find();
        if(!tours){
            return res.status(200).json({
                success: false,
                message: "No tours found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Tours found successfully",
            data: tours
        })
        
    } catch (error) {
        console.log("Get all Tour error=>", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"            
        })
    }
}

// update tour by tour_id
const updateTourById=async(req, res)=>{
    try {
        const tour=await Tour.findOneAndUpdate({tour_id: req.params.id},req.body,{new: true, runValidators: true});

        if(!tour){
            return res.status(400).json({
                success: false,
                message: "No tour found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Tour updated successfully",
            data: tour
        })
        
    } catch (error) {
        console.log("Update Tour By Id error=>", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"            
        })
    }
}

// delete tour by tour id
const deleteTourById=async(req,res)=>{
    try {
        const tour=await Tour.findOneAndDelete({tour_id: req.params.id});

        if(!tour){
            return res.status(400).json({
                success: false,
                message: "No user found"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Tour deleted successfully"
        })
        
    } catch (error) {
        console.log("delete Tour By Id error=>", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong"            
        })
    }
}

module.exports={createTour,getAllTours,updateTourById, deleteTourById};