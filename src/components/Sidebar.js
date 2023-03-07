import React from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {Link} from 'react-router-dom';


function Sidebar() {
  return <>
        {/* <!-- Sidebar --> */}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

{/* <!-- Sidebar - Brand --> */}
<a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
    </div>
    <div className="sidebar-brand-text mx-3"> User CRUD </div>
</a>

{/* <!-- Divider --> */}
<hr className="sidebar-divider my-0"/>

{/* <!-- Nav Item - Dashboard --> */}
<Link to='/dashboard'>
    <li className="nav-item active">
        <a className="nav-link" href="index.html">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></a>
    </li>
</Link>

{/* <!-- Nav Item - Pages Collapse Menu --> */}
<Link to='/add-user'>
    <li className="nav-item">
        <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <PersonAddIcon/>
            <span>Add User</span> 
        </div>
    </li>
</Link>

</ul> 
{/* <!-- End of Sidebar -->     */}

  </>
}

export default Sidebar