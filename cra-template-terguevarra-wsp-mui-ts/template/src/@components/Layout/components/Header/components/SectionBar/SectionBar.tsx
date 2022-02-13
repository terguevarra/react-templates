import { Typography, Toolbar } from '@mui/material';

import { ReactComponent as MyPortalTitle } from '@assets/svg/MyPortal_TitleOnly.svg';

import styles from './SectionBar.module.scss';

type Props = {
  appName: string,
  warningText?: string
}

const SectionBar = ({ appName: _appName, warningText: _warningText } : Props) => {
  return(
    <Toolbar className={styles.toolbar}>
      <div className={styles.left}>
        <div className={styles.imgLogo}>
          <MyPortalTitle />
        </div>
        <Typography component="p" className={styles.title}>{_appName}</Typography>
      </div>
      <Typography sx={{ color: (theme) => theme.palette.error.main }} variant="h3">
        {_warningText}
      </Typography>
    </Toolbar>
  );
}

export default SectionBar;