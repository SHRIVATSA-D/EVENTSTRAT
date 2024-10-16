import axios from "axios";

async function apiData() {
    const token ='eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJVU0VSIiwiU1VQRVJfQURNSU4iLCJBRE1JTiIsIk1PREVSQVRPUiJdLCJzdWIiOiJzaHViaGFtQHNwaWNldHJhZGUuY29tIiwiaWF0IjoxNzI4MjM4ODc1LCJleHAiOjE3MjgyNDI0NzV9.3M6x3RM-B46M9zhexcqJ4qONSURin5M4JgH15HfOt8I'
    const response = await axios.get(
        `http://15.206.56.160:8000/api/event?id=8`,
        {
          headers: {
              Authorization: `Bearer ${token}`, // Ensure correct token is passed
              "Content-Type": "application/json",}
        }
      );
      // console.log('eventname', response.data.event.name);
      return response.data;
      
}

export {apiData};
