import './App.css';
import { useState } from 'react'; 
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';
import Adduser from './components/Adduser';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import EditUser from './components/EditUser';

function App() {
  
  let [users,setUsers] = useState([
    {
      name:"selvanth",
      email:"selvanth@gmail.com",
      batch:"B39WDT",
      mobile:"987456310"
    },
    {
      name:"john",
      email:"john@gmail.com",
      batch:"B39WDT",
      mobile:"8765432109"
    },
    {
      name:"joel",
      email:"jeol@gmail.com",
      batch:"B39WDT",
      mobile:"7654321098"
    }
  ])
return<>
      <div id="wrapper">
      <BrowserRouter>
      <Sidebar/>
        <Routes>
            <Route path='/dashboard' element={<Dashboard data={{users,setUsers}}/>}/> 
            <Route path='/add-user'  element={<Adduser data={{users,setUsers}}/>}/>
            <Route path='/edit-user/:id'  element={<EditUser data={{users,setUsers}}/>}/>
            <Route path='*'  element={<Navigate to ='/dashboard'/>}/>
        </Routes>
      </BrowserRouter>        
    </div>
</>
}

export default App;
