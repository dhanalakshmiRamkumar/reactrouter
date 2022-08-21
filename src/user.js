import React from 'react';
import { useParams , useNavigate , useLocation} from 'react-router-dom';

export default function User() {
    const params = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(params);
    return(
      <>
      <h3>User</h3>
      {location.state ? (
        <>
          Name : {location.state.name} <br />
          Age : {location.state.age} <br />
        </>
      ) : (
        <> </>
      )}
      User Id : {params.UserId} <br/>
      Course Id : {params.courseId} <br/>
      <button onClick={() => navigate(-1)}> Go Back</button> &nbsp; &nbsp;
      <button onClick={() => navigate(1)}> Go Forward</button>
      </>
    )
  }