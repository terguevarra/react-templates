import { AppBar, Toolbar, Typography } from '@mui/material';

// import Masquerade from '@components/Masquerade';
import useCurrentPageStore from '@store/useCurrentPageStore';

import styles from './SectionHeader.module.scss';

const SectionHeader = () => {
  const pageTitle = useCurrentPageStore(state => state.pageTitle);

  return(
    <div className={styles.root}>
      <AppBar position="static" elevation={1}>
        <Toolbar className={styles.toolBar}>
          <Typography className={styles.pageTitle}>
            {pageTitle}
          </Typography>
          {/* <Masquerade /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SectionHeader;