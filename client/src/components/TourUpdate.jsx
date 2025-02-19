import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { updateData } from "../services/api";
import {useNavigate} from 'react-router-dom'

const TourUpdate = () => {
    const [formData,setFormData]=useState({
        title: "",
        description: "",
        pick_up: "",
        drop_off: "",
        duration: "",
        duration_unit: "hours",
    })
    const navigate=useNavigate()

    const tourIdSelector=useSelector((store)=>store.Id.id)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit=async(e)=>{
        e.preventDefault();

        const {
        title,
        description,
        pick_up,
        drop_off,
        duration,
        duration_unit,
        } = formData;

        try {
            await updateData(tourIdSelector,formData)
            .then(()=>{
                toast.success("Updated Successfully", {autoClose: 3000, position: "top-center"})
                
                              navigate('/')
                
            })
        } catch (error) {
            console.log("Update data error=>",error);
        }
      }

    return (
        <>
          <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
            <h2 className="text-2xl font-semibold text-center mb-6">Update Tour</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="tour_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Tour Id: {tourIdSelector} 
                </label>
              </div>
    
              <div className="mb-4">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
    
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
    
              <div className="mb-4">
                <label
                  htmlFor="pick_up"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pick Up Location
                </label>
                <input
                  type="text"
                  id="pick_up"
                  name="pick_up"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.pick_up}
                  onChange={handleChange}
                />
              </div>
    
              <div className="mb-4">
                <label
                  htmlFor="drop_off"
                  className="block text-sm font-medium text-gray-700"
                >
                  Drop Off Location
                </label>
                <input
                  type="text"
                  id="drop_off"
                  name="drop_off"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.drop_off}
                  onChange={handleChange}
                />
              </div>
    
              <div className="mb-4">
                <label
                  htmlFor="duration"
                  className="block text-sm font-medium text-gray-700"
                >
                  Duration
                </label>
                <input
                  type="text"
                  id="duration"
                  name="duration"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.duration}
                  onChange={handleChange}
                />
              </div>
    
              <div className="mb-6">
                <label
                  htmlFor="duration_unit"
                  className="block text-sm font-medium text-gray-700"
                >
                  Duration Unit
                </label>
                <select
                  id="duration_unit"
                  name="duration_unit"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  value={formData.duration_unit} // This binds the value of the select to the form state
                  onChange={handleChange} // This triggers handleChange when a user selects an option
                >
                  <option value="hours">hours</option>
                  <option value="days">days</option>
                </select>
              </div>
    
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </>
      );
}

export default TourUpdate