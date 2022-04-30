
import axios from "axios";
import {useEffect, useState } from "react";
import { useNavigate,useParams } from "react-router-dom";


const EditUserForm = () =>{
 
  
    const navigate = useNavigate();
    const {userId} = useParams();
  

    const[firstName, setfirst_name]=useState("");
    const [lastName, setlast_name]=useState("")
    const[Email, setemail]=useState("");
    const[mobNo,setmobile_No]=useState("");

    useEffect(() =>{

        axios.get(`http://localhost:4000/user/${userId}`)
        .then(res =>{
            
           setfirst_name(res.data[0].firstName);

           setlast_name(res.data[0].lastName);

           setemail(res.data[0].email);

           setmobile_No(res.data[0].mobNo)

        }).catch(err => alert("error"))
    },[]);
  // to updated the user data............... 
const updateUserHandler =(e) =>{

  e.preventDefault();

  
  const data ={
    firstName: firstName,
    lastName: lastName,
    email:Email,
    mobNo:mobNo,

}
console.log(data);
 axios.put(`http://localhost:4000/user/${userId}`,data)
 .then(res => {alert("user Details updated Successfully")
   navigate("/");
})
 .catch(err => alert(err));


   
}

    return (
        <div>
            <h1 className="text-center m-2">EDIT USER INFO</h1>
            <form onSubmit={updateUserHandler}>
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
  
  <input type="submit" value="Save Changes" 
  className="btn btn-success" />

</form>
        </div>
    )
}
export default EditUserForm;