import clsx from 'clsx';

import { AppBar, Toolbar, Button } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

import styles from './SideMenuHeader.module.scss';

type Props = {
  handleSideMenuButton: () => void,
  isOpen: boolean
}

const SideMenuHeader = ({ handleSideMenuButton: _handleSideMenuButton, isOpen: _isOpen } : Props) => {
  return(
    <div className={styles.root}>
      <AppBar position="static" elevation={0}>
        <Toolbar className={styles.toolBar}>
          <Button onClick={_handleSideMenuButton} 
                  color="secondary"
                  className={clsx(styles.button, !_isOpen && styles.buttonClosed)}>
            {!_isOpen && <ArrowRightIcon />}
            {_isOpen && <ArrowLeftIcon />}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SideMenuHeader;