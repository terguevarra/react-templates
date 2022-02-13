import React, { useState } from 'react';

import { Toolbar, Button, Grid, Avatar, Menu, MenuItem, Hidden, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import WspLogo from '@assets/img/Logo_wsp_white.webp';

import styles from './TitleBar.module.scss';

type Props = {
  displayName: string, 
  onClick_Logout: () => void, 
  userPhoto?: string,
  email?: string
}

const TitleBar = ({ 
  displayName: _displayName, 
  userPhoto: _userPhoto,
  email: _email,
  onClick_Logout: _onClick_Logout 
} : Props) => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [anchorElement, setAnchorElement] = useState(null);

  const onClick_Menu = (event: any) => {
    setMenuOpen(event.currentTarget.dataset.menu);
    setAnchorElement(event.currentTarget);
  }

  const closeMenu = () => {
    setMenuOpen(null);
    setAnchorElement(null);
  }

  const onClick_Logout = () => {
    _onClick_Logout();
    closeMenu();
  }
  
  return(
    <Toolbar className={styles.toolbar}>
      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} className={styles.imgContainer}><img src={WspLogo} alt="WSP" height="25" width="125" /></Grid>
        <Grid item xs={4} className={styles.actionButtonContainer}>
          {_displayName !== '' && (
            <Button color="inherit" 
                    className={styles.actionButton} 
                    endIcon={<ArrowDropDownIcon />} 
                    data-menu="action-menu" 
                    onClick={onClick_Menu}>
              <Hidden smDown>{_displayName} <Avatar src={_userPhoto} className={styles.avatar}/></Hidden>
            </Button>
          )}
        </Grid>
      </Grid>
      
      <Menu id="action-menu"
            anchorEl={anchorElement}
            open={menuOpen === "action-menu" && true}
            onClose={closeMenu}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            keepMounted>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={_userPhoto} />
          </ListItemAvatar>
          <ListItemText primary={_email} />
        </ListItem>
        <Divider />
        <MenuItem onClick={onClick_Logout}>Sign Out</MenuItem>
      </Menu>

    </Toolbar>
  );
}

export default TitleBar;