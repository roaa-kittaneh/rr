import React, { useContext } from 'react';
import { UserContext } from '../context/User';

export default function Userinfo() {
    const { userData, Loading } = useContext(UserContext);

    if (Loading) {
        return <p>Loading...</p>;
    }
  return (
   <div>
    <h2>{userData.userName}</h2>
    <img src={userData.image?.secure_url} alt="User" />
   </div>
  )
}
