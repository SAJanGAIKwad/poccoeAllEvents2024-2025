import {useContext, useState} from "react";
import {UserContext} from "../../UserContext.jsx";
import {Navigate, useParams} from "react-router-dom";
import axios from "axios";

export default function UserPage() {
  const [redirect,setRedirect] = useState(null);
  const {ready,user,setUser} = useContext(UserContext);
  let {subpage} = useParams();
  if (subpage === undefined) {
    subpage = 'profile';
  }

  async function logout() {
    await axios.post('http://localhost:3001/logout');
    setRedirect('/');
    setUser(null);
  }

  if (!ready) {
    return 'Loading...';
  }

  if (ready && !user && !redirect) {
    return <Navigate to={'/login'} />
  }

  if (redirect) {
    return <Navigate to={redirect} />
  }
  return (
    <div>
      {subpage === 'profile' && (
        <div className="">
          <h2 className="mt-10 text-lg font-semibold">{user.name}</h2>
          <p className="text-gray-600">({user.email})</p>
          <br />
          <button onClick={logout} className="primary max-w-sm mt-2">Logout</button>
        </div>
      )}
    </div>
  );
}