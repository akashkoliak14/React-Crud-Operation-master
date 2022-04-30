import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUserform =()=>{

  const navigate= useNavigate();

    const[firstName, setfirst_name]=useState("");
    const [lastName, setlast_name]=useState("")
    const[Email, setemail]=useState("");
    const[mobNo,setmobile_No]=useState("");




const submitFormHandler =(e) =>{
    e.preventDefault();
    // alert("Inside function save");
    // console.log(firstname, lastname, Email, mobNo);

   const data ={
       firstName: firstName,
       lastName: lastName,
       email:Email,
       mobNo:mobNo,

   }
   console.log(data);
    axios.post("http://localhost:4000/user",data)
    .then(res =>{
      alert("user Added Successfully")
      // window.location.href="/";
      // or----
     navigate("/");

    })
    .catch(err => alert(err));

}
    return(
        <div>
            <h1 className="text-center m-2">ADD NEW USER</h1>
            <form  onSubmit={submitFormHandler}>
  <div className="form-group">
    <label>First Name</label>
    <input type="text" className="form-control"  placeholder="Enter First Name" required
   value={firstName} onChange={(e) => setfirst_name(e.target.value)} />

  </div>
  <div className="form-group">
    <label>Last Name</label>
    <input type="text" className="form-control"  placeholder="Enter Last Name" required
    value={lastName} onChange={(e)=>setlast_name(e.target.value)} />
  </div>
  <div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control"  placeholder="Enter Email Address" required
    value={Email}onChange={(e)=>setemail(e.target.value)} />
  </div>
  <div className="form-group">
    <label>Contact Number</label>
    <input type="number" className="form-control"  placeholder="Enter Mobile Number" required
    value={mobNo}onChange={(e)=>setmobile_No(e.target.value)} />
  </div>
  
  <input type="submit" value="Add User" 
  className="btn btn-success" />

</form>
        </div>
    )

}

export default AddUserform