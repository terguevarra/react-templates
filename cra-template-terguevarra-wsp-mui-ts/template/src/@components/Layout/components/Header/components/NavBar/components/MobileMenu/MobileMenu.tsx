import { useState } from 'react';

import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick_Open = () => {
    setIsOpen(true);
  }

  const onClose_Drawer = () => {
    setIsOpen(false);
  }

  return(
    <>
      <IconButton color="inherit" size="small" onClick={onClick_Open}><MenuIcon /></IconButton>
      <Drawer anchor="left" open={isOpen} onClose={onClose_Drawer} ModalProps={{disablePortal: true}}>
        <div  role="presentation"
              onClick={onClose_Drawer}
              onKeyDown={onClose_Drawer}>
          <List>
            <ListItem button>
              <ListItemText primary="Business Development" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Project Delivery / Tools" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Dashboard and Reports" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Employee Resources" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
}

export default MobileMenu;