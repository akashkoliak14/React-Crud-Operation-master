import React,{useState, useEffect} from "react"

import axios from "axios";
import TableRow from "../componants/TableRow";
import {Link} from "react-router-dom";

function Home(){

// const[firstname, setfirstname]=useState("sunil");
// const [lastname, setlastname]=useState("pawar")
// const[Email, setEmail]=useState("pawar281297@gmail.com");
// const[mobNo,setmobNo]=useState("7499218733");

// to store the data from API
const [UserData, setUserData] = useState([]);

   console.log(UserData);
// to access the data from backend
useEffect(()=>{
  
  axios.get("http://localhost:4000/user")
  .then(res =>{

    // console.log(res.data);

    setUserData(res.data);

  }).catch(err => alert(err));

},[]);


     return(
        <>
           <h1 className="text-center bg-danger text-white">REACT, NODE, EXPRESSJS, MONGO DB CRUD APP</h1>
 
 <Link to ="/add-user"  className="btn btn-success  float-right mb-3" >add user</Link>
 <table className="table align-center">
   <thead className="thead bg-dark black text-white">
     <tr>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Email</th>
       <th>Mobile Number</th>
       <th>Edit</th>
       <th>Delete</th>
       
     </tr>

   </thead>
   <tbody>
     {
       UserData.map((user) => {
         return(
         <TableRow  key={user._id} user={user} />
         )
       })
     }
     
     </tbody>    
 </table>

        </>
     ) 
    
}
export default Home