import { useState, ReactNode } from 'react';

import clsx from 'clsx';

import { Paper } from '@mui/material';
import SideMenuHeader from './components/SideMenuHeader';
import SideMenu from './components/SideMenu';
import SectionHeader from './components/SectionHeader';

import styles from './AppLayout.module.scss';

type Props = {
  children: ReactNode
}

const AppLayout = ({ children } : Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleSideMenu = () => {
    setIsOpen(!isOpen);
  }

  return(
    <Paper elevation={3} className={styles.root}>
      <div className={clsx(styles.sideMenuContainer, isOpen && styles.sideMenuContainerShift)}>
        <SideMenuHeader handleSideMenuButton={handleSideMenu} isOpen={isOpen} />
        <SideMenu isOpen={isOpen} />
      </div>
      <div className={styles.sectionContainer}>
        <SectionHeader />
        <div className={styles.child}>
          {children}
        </div>
      </div>
    </Paper>
  );
}

export default AppLayout;