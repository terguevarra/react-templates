import { Paper, Grid, Typography, Button } from '@mui/material';

import { APPNAME } from '@configurations/Settings';
import WspLogo from '@assets/svg/WSP_logo_red.svg';
import { useAuth } from '@helpers/Auth/Hooks';
import styles from './Login.module.scss';

const Login = () => {
  const { login, isLoginInProgress } = useAuth();

  const onClick_Login = async () => {
    await login();
  }

  return(
    <Grid container component="main" className={styles.root}>
      <Grid item xs={12} sm={12} md={12} xl={12}>
        <Paper elevation={3} className={styles.loginContainer}>
          <div className={styles.imgContainer}>
            <img src={WspLogo} alt="WSP" className={styles.logo} /> 
          </div>
          <Typography component="p" variant="h4" className={styles.appName}>{APPNAME!.toUpperCase()}</Typography>
          <Typography variant="body1" gutterBottom>Use an updated, modern browser for the best experience.</Typography>
          <Typography variant="body1" gutterBottom>Either Chrome or Edge is best.</Typography>
          <Typography variant="body1" gutterBottom>(Older versions of browsers, such as IE, are problematic.)</Typography>
          <Button variant="contained" disabled={isLoginInProgress} onClick={onClick_Login}>Login with WSP Account</Button>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Login;