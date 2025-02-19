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
    return null;
  }
};


export const getData=async()=>{
    try {
        const res=await axios.get('http://localhost:3000/api/tour',{
            withCredentials: true,
        })
        console.log("res getting data=>", res)

        if(res.status==200){
          console.log("res data=>", res)
          return res.data;
        }
        else{
          console.log("get res data=>", res)
          return null;
        }

        
    } catch (error) {
        console.log("Error getting data=>", error);
        return null;
    }
}

export const updateData=async(id,data)=>{
  try {
    const res=await axios.put(`http://localhost:3000/api/tour/${id}`,data,{
      withCredentials: true
    })
    if (res.status === 200) { 
      return res.data; 
    } else {
      console.log("Error in response:", res);  
      return null;  
    }

  } catch (error) {
    console.log("Error in updating data=>", error);
    return null;
  }
}

export const deleteData=async(id)=>{
  try {
    const res=await axios.delete(`http://localhost:3000/api/tour/${id}`,{
      withCredentials: true
    })
    console.log("delete data res=>", res);
    if(res.status===200){
      return res.data;
    }else{
      return null;
    }
  } catch (error) {
    console.log("Error i deleting data=>",error);
    return null;
  }
}