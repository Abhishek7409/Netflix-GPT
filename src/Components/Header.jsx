import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
      navigate('/')
      }).catch((error) => {
        navigate('/error')
      });
  }

  return (
    <div
      className="h-28 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop')"
      }}
    >
      <div className="flex justify-between items-center px-6 py-4">

        <img
          className="w-24 md:w-32 lg:w-40"
          src="https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg"
          alt="Netflix logo"
        />

        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            alt="User icon"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
          />

          {user && <button onClick={handleSignOut} className="text-white cursor-pointer">
            Sign out
          </button>}
        </div>

      </div>
    </div>
  )
}

export default Header