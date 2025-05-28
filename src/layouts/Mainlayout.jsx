import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../components/Footer';
import Personals from '../components/Personals'
import Marquee from '../components/Marquee'
import AboutUs from '../components/Aboutus';

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Outlet />
      </main>
      <AboutUs/>
      <Marquee/>
      <Personals/>
      <Footer />
    </>
  );
};

export default MainLayout;
