import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useNavigate} from 'react-router-dom'

function Dashboard(props) {   
    let navigate = useNavigate();   

    let handleDelete=(i)=>{
        let newData = [...props.data.users]
        newData.splice(i,1)
        props.data.setUsers(newData)
    }
  return <>         
    <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <div className="container-fluid">
        {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">CRUD UI</h1>
            </div>

    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Batch</th>
          <th>Mobile</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            props.data.users.map((user,i) => {
                return <tr key={i}> 
                        <td>{i+1}</td>  
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.batch}</td>
                        <td>{user.mobile}</td>
                        <td>
                        <Button variant='primary' onClick={()=>navigate(`/edit-user/${i}`)}> <EditIcon/>Edit</Button>
                        &nbsp;
                        <Button variant='danger' onClick={()=>handleDelete(i)}><DeleteIcon/>Delete</Button>                        
                        </td>
                    </tr>
            })
        }
      </tbody>
    </Table>
  </div>
 </div> 
</div> 
</>
}

export default Dashboard