import React from 'react';
import {BrowserRouter , Routes , Route , Link , useNavigate, Outlet} from 'react-router-dom';
import User from './user';

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Link to="/">Dashboard</Link> &nbsp;
      <Link to="/aboutus">Aboutus</Link> &nbsp;
      <Link to="/contactus">Contactus</Link> &nbsp;
      <Link to="/User/23/course/3/?sort=asc">User</Link> &nbsp;
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/aboutus" element={<AboutUs/>}>
         <Route path="" element={<AboutUsIndex />} />
         <Route path="history" element={<History />} />
         <Route path="branches" element={<Branches />} />
        </Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        <Route path="/User/:UserId/course/:courseId" element={<User/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
  );
}

function Dashboard() {
  const navigate = useNavigate();
  

  return(
    <>
    <h3>Dashboard Component</h3>
    <button onClick={() => navigate(-1)}> Go Back</button> &nbsp; &nbsp;
    <button onClick={() => navigate(1)}> Go Forward</button> &nbsp; &nbsp;
    <button onClick={() => navigate('/User/23/course/3', { state: { name: 'XXX', age: 10 } })}>
      User Component
    </button>
    
    </>
  )
}

function AboutUs() {
  const navigate = useNavigate();

  return(
    <>
    <h3>AboutUs Component</h3>
    <button onClick={() => navigate(-1)}> Go Back</button> &nbsp; &nbsp;
    <button onClick={() => navigate(1)}> Go Forward</button> <br/>
    <button onClick={() => navigate('/aboutus/history')}> 
    {''}
    History{''} 
    </button> {''}
    &nbsp;
    <button onClick={() => navigate('/aboutus/branches')}> Branches</button>
    <Outlet />
    </>
  )
}

function ContactUs() {
  const navigate = useNavigate();
  return(
    <>
    <h3>ContactUs Component</h3>
    <button onClick={() => navigate(-1)}> Go Back</button> &nbsp; &nbsp;
    <button onClick={() => navigate(1)}> Go Forward</button>
    </>
  )
}

function History(){
  return(
    <>
    <h3>History Component</h3>
    </>
  )
}

function Branches(){
  return(
    <>
    <h3> Branches Component</h3>
    </>
  )
}

function AboutUsIndex(){
  return(
    <>
    <h3> AboutUs Index Component</h3>
    </>
  )
}
