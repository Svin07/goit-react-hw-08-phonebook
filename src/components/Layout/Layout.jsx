import Header from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Layout;
