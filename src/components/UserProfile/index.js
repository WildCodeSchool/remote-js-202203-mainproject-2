import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import '../../assets/styles/profile.css';
import UserProfileContext from '../../contexts/UserProfileContext';

export default function UserProfile() {
  const userDatas = {
    firstName: 'Patrick',
    lastName: 'Chirac',
    email: 'patrick.chirac@camping.com',
    avatar: 'https://i.imgur.com/uzGcA4U.png',
    birthDate: '1963-11-07 05:00:00',
    genre: 'male',
    altEmail: 'patrick.chirac@camping.fr',
    password: '5uc3M4B',
    tokenRecoverPassword: null,
    connected: true,
    datas: [
      {
        id: 1,
        title: 'Owned',
        count: 250
      },
      {
        id: 2,
        title: 'Loved',
        count: 125
      },
      {
        id: 3,
        title: 'Seen',
        count: 3521
      }
    ],
    favoritesGenres: [
      {
        id: 13,
        name: 'Sport'
      }, 
      {
        id: 11,
        name: 'Family'
      }, 
      {
        id: 14,
        name: 'Drama'
      }, 
      {
        id: 2,
        name: 'Crime'
      }, 
      {
        id: 28,
        name: 'History'
      }
    ],
    periglioni: {
      flags: ['nsfw', 'religious'],
      categories: ['dark', 'pun'],
    },
  };

  const [mainUser, setMainUser] = React.useState(userDatas);

  return (
    <UserProfileContext.Provider
      value={{
        mainUser: mainUser,
        setMainUser: setMainUser,
      }}
    >
      <section id='mainApp' className='profile'>
        <div className='profile-content'>
          <Outlet />
        </div>
        <NavBar />
      </section>
    </UserProfileContext.Provider>
  );
}
