import React, { useContext } from 'react';
import { UserContext } from '../context/User';

export default function Usercontact() {
    const { userData, Loading } = useContext(UserContext);

    if (Loading) {
        return <p>Loading...</p>;
    }
  return (
   <div>
    <h2>{userData.email}</h2>
    <h2>{userData.phone}</h2>
   </div>
  )
}
