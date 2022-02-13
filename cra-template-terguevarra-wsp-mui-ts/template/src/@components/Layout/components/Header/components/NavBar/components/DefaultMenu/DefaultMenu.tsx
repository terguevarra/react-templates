import { useState } from 'react';

import clsx from 'clsx';

import { Button, MenuItem, ListItemIcon, IconButton } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import styles from './DefaultMenu.module.scss';
import Menu from '../Menu'; 

type Props = {
  activeParent?: string,
  activeChild?: string
}

const DefaultMenu = ({ activeParent, activeChild } : Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [openMenu, setOpenMenu] = useState(null);
  const [openSecondaryMenu, setOpenSecondaryMenu] = useState(null);

  const onClick_Menu = (event : any) => {
    
    if(event.currentTarget.dataset.issecondary) {
      setOpenSecondaryMenu(event.currentTarget.dataset.menu);
      setAnchorEl2(event.currentTarget);
    }else {
      setOpenMenu(event.currentTarget.dataset.menu);
      setAnchorEl(event.currentTarget);
    };
  };

  const closeMenu = () => {
    setAnchorEl(null);
    setOpenMenu(null);
    setAnchorEl2(null);
    setOpenSecondaryMenu(null);
  };

  return(
    <>
      <IconButton color="inherit" size="small"><HomeIcon /></IconButton>
      <Button className={clsx(styles.parentButton, styles.activeParentButton)} color="inherit" endIcon={<ArrowDropDownIcon />} data-menu="bd-menu" onClick={onClick_Menu}>STRATEGY & DEVELOPMENT</Button>
      <Button className={clsx(styles.parentButton)} color="inherit" endIcon={<ArrowDropDownIcon />} data-menu="pd-menu" onClick={onClick_Menu}>PROJECT DELIVERY / TOOLS</Button>
      <Button className={clsx(styles.parentButton)} color="inherit" endIcon={<ArrowDropDownIcon />} data-menu="dr-menu" onClick={onClick_Menu}>DASHBOARDS AND REPORTS</Button>
      <Button className={clsx(styles.parentButton)} color="inherit" endIcon={<ArrowDropDownIcon />} data-menu="er-menu" onClick={onClick_Menu}>EMPLOYEE RESOURCES</Button>

      <Menu id="bd-menu"
            anchorEl={anchorEl}
            open={openMenu === "bd-menu" && true}
            onClose={closeMenu}
            disablePortal={true}>
        <MenuItem onClick={closeMenu} className={styles.activeChildItem}>Client Hive</MenuItem>
        <MenuItem onClick={closeMenu}>Business Development</MenuItem>
        <MenuItem onClick={closeMenu}>Supplier Registration</MenuItem>
      </Menu>

      <Menu id="pd-menu"
            anchorEl={anchorEl}
            open={openMenu === "pd-menu" && true}
            onClose={closeMenu}
            disablePortal={true}>
        <MenuItem onClick={closeMenu}>PM Portal</MenuItem>
        <MenuItem onClick={closeMenu}>Integrated Approvals System</MenuItem>
        <MenuItem onClick={closeMenu}>RMIS</MenuItem>
        <MenuItem onClick={closeMenu}>Safety (iSMS)</MenuItem>
        <MenuItem onClick={closeMenu}>EDIS (PCR)</MenuItem>
        <MenuItem onClick={closeMenu}>Supplier Invoices (Markview)</MenuItem>
        <MenuItem onClick={closeMenu}>Purchasing (Epicor)</MenuItem>
        <MenuItem onClick={closeMenu}>UI Apps</MenuItem>
      </Menu>

      <Menu id="dr-menu"
            anchorEl={anchorEl}
            open={openMenu === "dr-menu" && true}
            onClose={closeMenu}
            disablePortal={true}>
        <MenuItem onClick={closeMenu}>Project Costs - DQT</MenuItem>
        <MenuItem onClick={closeMenu}>Project Dashboard</MenuItem>
        <MenuItem onClick={closeMenu}>Client Dashboard</MenuItem>
        <MenuItem onClick={closeMenu}>Marketing Search</MenuItem>
      </Menu>

      <Menu id="er-menu"
            anchorEl={anchorEl}
            open={openMenu === "er-menu" && true}
            onClose={closeMenu}
            disablePortal={true}>
        <MenuItem onClick={closeMenu}>PE & D Intranet Page</MenuItem>
        <MenuItem onClick={closeMenu}>Time / Expense</MenuItem>
        <MenuItem onClick={closeMenu}>My Learning Portal</MenuItem>
        <MenuItem onMouseOver={onClick_Menu} data-menu="cr-menu" data-issecondary="true" style={{ display: 'flex', justifyContent: 'space-between' }}>
          My Career <ListItemIcon><ArrowRightIcon fontSize="small" /></ListItemIcon>
        </MenuItem>
      </Menu>

      <Menu id="cr-menu"
            anchorEl={anchorEl2}
            open={openSecondaryMenu === "cr-menu" && true}
            onClose={closeMenu}
            anchorOrigin={{ vertical: "center", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            disablePortal={true}>
        <MenuItem onClick={closeMenu}>My Employee Info</MenuItem>
        <MenuItem onClick={closeMenu}>Employee Approval Queue</MenuItem>
        <MenuItem onClick={closeMenu}>Employee Search</MenuItem>
        <MenuItem onClick={closeMenu}>PMAP</MenuItem>
        <MenuItem onClick={closeMenu}>PMAP Evaluation</MenuItem>
      </Menu>
    </>
  );
}

export default DefaultMenu;