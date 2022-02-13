import { Toolbar, Typography, Grid, Link, Hidden, Paper } from '@mui/material';

import WspLogo from '@assets/svg/WSP_logo_red.svg';

import PrivacyGraphics from '@assets/img/wsp-data-privacy-graphics.webp';

import styles from './Footer.module.scss';

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <Hidden mdDown>
        <Paper elevation={3}>
          <Toolbar className={styles.mainFooter}>
            <Grid container spacing={2}>
              <Grid item xl={2} md={6} className={styles.logoContainer}>
                <img src={WspLogo} height="140" width="240" alt="WSP" className={styles.logo} /> 
              </Grid>
              <Grid item xl={5} md={6} className={styles.aboutContainer}>
                <Typography variant="h6" gutterBottom className={styles.title}>
                  ABOUT MY PORTAL
                </Typography>
                <Typography variant="caption" gutterBottom className={styles.text}>
                  My Portal provides a single point of access to view, manage and collaborate on opportunities, projects, reports and data. This portal is a work in progress. As we strive to continuously build, integrate and improve upon the components of the site, we welcome and appreciate your input and feedback
                </Typography>
                <br />
                <Typography variant="caption" gutterBottom className={styles.text}>
                  All information in My Portal is presumed to be WSP confidential. Click to reference the Global Information Classification and Handling Policy.
                </Typography>
                <br />
                <Typography variant="caption" gutterBottom className={styles.text}>
                  Use an updated, modern browser for the best experience. Either Chrome or Edge is best. (Older versions of browsers, such as IE, are problematic.)
                </Typography>
              </Grid>
              <Grid item xl={2} md={6} className={styles.supportContainer}>
                <Typography variant="h6" gutterBottom className={styles.title}>
                  SUPPORT
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <Link className={styles.link}>How-To & Training Videos</Link>
                </Typography>
                <br />
                <Typography variant="caption" gutterBottom>
                  <Link className={styles.link}>Understanding Client Types</Link>
                </Typography>
                <Typography variant="h6" gutterBottom className={styles.title}>
                  CONTACT
                </Typography>
                <Typography variant="caption" gutterBottom>
                  <Link className={styles.link}>ATOS Support</Link>
                </Typography>
                <br />
                <Typography variant="caption" gutterBottom>
                  <Link className={styles.link}>IAS-Admin Support</Link>
                </Typography>
              </Grid>
              <Grid item xl={3} md={6} className={styles.dataPrivacyContainer}>
                <Paper elevation={3} style={{height: 140, width: 280}}><img src={PrivacyGraphics} alt="Privacy" height="140" width="280" className={styles.dataPrivacyImg} /></Paper>
              </Grid>
            </Grid>
          </Toolbar>
          <Toolbar className={styles.toolbar}></Toolbar>
        </Paper>
      </Hidden>
    </footer>
  );
}

export default Footer;