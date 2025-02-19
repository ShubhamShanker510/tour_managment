import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { sendData } from "../services/api";
import {useNavigate} from "react-router-dom"

const TourForm = () => {
  const [formData, setFormData] = useState({
    tour_id: "",
    title: "",
    description: "",
    pick_up: "",
    drop_off: "",
    duration: "",
    duration_unit: "hours",
  });
  const navigate=useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const {
      tour_id,
      title,
      description,
      pick_up,
      drop_off,
      duration,
      duration_unit,
    } = formData;
  
    const durationRegex = /^\d+$/;
  

    if (!durationRegex.test(duration)) {
      toast.error("Enter number for duration", {
        autoClose: 3000,
        position: "top-center",
      });
      return;
    }
  
    const data = {
      tour_id: Number(tour_id),
      title,
      description,
      pick_up,
      drop_off,
      duration,
      duration_unit,
    };
  
    try {
      const res = await sendData(data); 
      if (res) {
        toast.success("Details registered successfully", {
          autoClose: 3000,
          position: "top-center",
        });
        navigate('/'); 
      } else {
        toast.error("Something went wrong. Please try again.", {
          autoClose: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      // If an error occurs during the sendData API call
      console.log("Handle Submit error =>", error);
      toast.error(error.response?.data?.message || "Something went wrong", {
        autoClose: 3000,
        position: "top-center",
      });
    }
  };
  
  return (
    <div className=''>
      <div className="formbtn mb-3 cursor-pointer">
    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none" onClick={()=>navigate('/')}>
              Show List
        </button>
    </div>
      <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Tour</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="tour_id"
              className="block text-sm font-medium text-gray-700"
            >
              Tour ID
            </label>
            <input
              type="number"
              id="tour_id"
              name="tour_id"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              value={formData.tour_id}
              onChange={handleChange}
            />
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
              required
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
              required
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
              required
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
              required
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
              required
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
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TourForm;
