import { Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

function Layout(): JSX.Element {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
