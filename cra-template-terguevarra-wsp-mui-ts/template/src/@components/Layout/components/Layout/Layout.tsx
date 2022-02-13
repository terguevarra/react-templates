import { ReactNode } from 'react';

import { CssBaseline, Hidden } from '@mui/material';

import { APPNAME } from '@configurations/Settings';
import styles from './Layout.module.scss';
import Header from '../Header';
import Footer from '../Footer';
import Breadcrumb from '../Breadcrumb';

import { useAuth } from '@helpers/Auth/Hooks';


type Props = {
  children: ReactNode
}

const Layout = ({ children } : Props) => {
  const { logout } = useAuth();

  const onClick_Logout = async () => {
    await logout();
  }
  return(
    <div>
      <CssBaseline />
      <Header appName={APPNAME!.toUpperCase()} onClick_Logout={onClick_Logout} />
      <main className={styles.content}>
        <Hidden xsDown>
          <Breadcrumb />
        </Hidden>
        <div className={styles.container}>
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;