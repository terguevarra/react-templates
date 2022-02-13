import { Paper, Hidden } from '@mui/material';

import useLoggedInAsStore from '@store/useLoggedInAsStore';

import styles from './Header.module.scss';
import TitleBar from './components/TitleBar';
import SectionBar from './components/SectionBar';
import NavBar from './components/NavBar/NavBar';

type Props = {
  appName: string,
  onClick_Logout: () => void,
  warningText?: string,
  activeParent?: string,
  activeChild?: string
}

const Header = ({ appName, warningText, onClick_Logout, activeParent, activeChild } : Props) => {
  const { loggedInAsUsername, loggedInAsDisplayName } = useLoggedInAsStore();
  return(
    <Paper className={styles.root} elevation={3} component="header">
      <TitleBar displayName={loggedInAsDisplayName} 
                email={loggedInAsUsername}
                userPhoto={''}
                onClick_Logout={onClick_Logout} />
      <Hidden smDown>
        <SectionBar appName={appName} warningText={warningText} />
      </Hidden>
      <NavBar />
    </Paper>
  );
}

export default Header;