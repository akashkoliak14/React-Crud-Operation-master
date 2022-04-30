import axios from "axios"
import {Link} from "react-router-dom";

const TableRow =({user})=>{
    const deleteUserHandler = ()=>{
        

        axios.delete(`http://localhost:4000/user/${user._id}`)
        .then(res =>{
            // alert("user Deleted successfully");
        window.location.reload();
        })
        .catch(err =>alert(err));
      }
    return(
        <tr>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td>{user.mobNo}</td>
        <td>
           <Link to ={`/edit-user/${user._id}`} className="btn btn-primary  ">Edit</Link> 
           </td>
           <td>
           <button className="btn btn-danger " onClick={deleteUserHandler}>Delete</button> 
           </td>
      </tr>
    )
}
export default TableRow;