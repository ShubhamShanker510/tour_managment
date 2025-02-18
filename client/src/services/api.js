import axios from 'axios';

export const sendData = async (data) => {
  try {
    const res = await axios.post('http://localhost:3000/api/tour', data, {
      withCredentials: true,
    });
    
    if (res.status === 200) { 
      return res.data; 
    } else {
      console.log("Error in response:", res);  
      return null;  
    }
  } catch (error) {
    console.log('Sending data failed =>', error); 
    throw error; 
  }
};


export const getData=async()=>{
    try {
        const res=await axios.get('http://localhost:3000/api/tour',{
            withCredentials: true,
        })

        
    } catch (error) {
        
    }
}