import React, { useContext } from 'react';
import { UserContext } from '../context/User';
import style from './Profile.module.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Profile() {
    const { userData, Loading } = useContext(UserContext);

    if (Loading) {
        return <p>Loading...</p>;
    }

    return (
        <aside className={`${style.profile}`}>
            <div className={`${style.profileLink}`}>
                <nav>
                    <Link to='info'>info</Link>
                    <Link to='contact'>contact</Link>
                </nav>
            </div>


            <div className={`${style.userData}`}>
                <Outlet/>
            </div>

            </aside>



            //{userData ? (
               //</aside> <div className={`${style.userData}`}>
                  //</aside>  <h2>{userData.userName}</h2>
                  //</aside>  <img src={userData.image?.secure_url} alt="User" />
               //</aside> </div>
           //</aside> ) : null}

           //</aside> {userData ? (
             //</aside>   <div className={`${style.userData}`}>
             //</aside>       <h2>{userData.email}</h2>
             //</aside>       <h2>{userData.phone}</h2>
             //</aside>   </div>
           //</aside> ) : null}

       // </aside>
    );
}
