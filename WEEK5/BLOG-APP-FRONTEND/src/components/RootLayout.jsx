import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useAuth } from '../store/authStore';
import { useEffect } from 'react';

function RootLayout() {
  const checkAuth=useAuth((state)=>state.checkAuth);
  const loading=useAuth((state)=>state.loading);
  useEffect(()=>{
    checkAuth();
  },[]);

  //wait untill auth check completes
  if(loading)
  {
    return <p className="text-center mt-10">Loading...</p>;
  }
  return (
    <div>
        <Header />
        <div className='min-h-screen'>
            <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout;