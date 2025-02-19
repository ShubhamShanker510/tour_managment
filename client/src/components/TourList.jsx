import React, { useEffect, useState } from "react";
import { deleteData, getData } from "../services/api";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { getTourId } from "../redux/shareId";
import {useNavigate} from 'react-router-dom'

const TourList = () => {
  const [data, setData] = useState([]);
  const dispatch=useDispatch();
  const navigate=useNavigate()

  const getdata = async () => {
    try {
      const res = await getData();
      setData(res.data); 
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleDelete=async(id)=>{
      try {
        await deleteData(id)
        .then(()=>{
            toast.success("Tour deleted successfully",{autoClose: 3000, position: "top-center"})
            getdata()
        })
        
    } catch (error) {
        console.log("Handle delete error =>", error);
              toast.error(error.response?.data?.message || "Something went wrong", {
                autoClose: 3000,
                position: "top-center",
              });
    }
  }
  const handleUpdate=(id)=>{
    dispatch(getTourId(id))
    navigate('/update')
  }

  useEffect(() => {
    getdata(); 
  }, []);
  console.log("data=>",data)

  return (
   <div className="flex flex-col">
    <div className="formbtn mb-3 cursor-pointer">
    <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none" onClick={()=>navigate('/create')}>
              Create Tour
        </button>
    </div>
     <div className="grid grid-cols-4 gap-10">
      {data.map((item, index) => (
        <div
          className=" bg-white shadow-lg rounded-lg overflow-hidden p-6 border"
          key={index}
        >
    
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Tour ID:</h3>
            <p className="text-gray-600">{item.tour_id}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Description:</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Pick Up:</h3>
            <p className="text-gray-600">{item.pick_up}</p>
          </div>

 
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Drop Off:</h3>
            <p className="text-gray-600">{item.drop_off}</p>
          </div>


          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Duration:</h3>
            <p className="text-gray-600">{item.duration}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-700">Duration Unit:</h3>
            <p className="text-gray-600">{item.duration_unit}</p>
          </div>
          <div className="flex justify-between mt-6">
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"onClick={()=>handleUpdate(item.tour_id)}>
              Update
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none" onClick={()=>handleDelete(item.tour_id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
      <ToastContainer/>
    </div>
   </div>
  );
};

export default TourList;
