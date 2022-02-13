import { Toolbar, Hidden } from '@mui/material';

import styles from './NavBar.module.scss';
import MobileMenu from './components/MobileMenu';
import DefaultMenu from './components/DefaultMenu';

const NavBar = () => {
  return(
    <Toolbar className={styles.root}>
      <Hidden smDown>
        <DefaultMenu />
      </Hidden>
      <Hidden mdUp>
        <MobileMenu />
      </Hidden>
    </Toolbar>
  );
}

export default NavBar;