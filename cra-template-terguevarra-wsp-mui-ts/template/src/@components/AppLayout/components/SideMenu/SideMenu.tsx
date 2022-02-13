import { Fragment, useEffect } from 'react';

import clsx from 'clsx';

import { List, ListItemButton, ListItemIcon, ListItemText, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import RateReviewIcon from '@mui/icons-material/RateReview';

import { useLocation, useHistory } from 'react-router-dom';

import { IsInArrayLike } from '@helpers/Utility';

import styles from './SideMenu.module.scss';

const defaultList = [
  { title: 'Home', icon: <HomeIcon />, route: '/', include: [] },
  { title: 'Route 1', icon: <ConnectWithoutContactIcon />, route: '/route1', include: ['route1'] },
  { title: 'Route 2', icon: <RateReviewIcon />, route: '/route2', include: ['route2'] }
  // { title: 'Client Connection (CCR)', icon: <ConnectWithoutContactIcon />, route: '/client-connection', include: ['client-connection'] },
  // { title: 'Client Feedback', icon: <RateReviewIcon />, route: '/client-feedback', include: ['client-feedback'] }
]

type Props = {
  isOpen: boolean
}

const SideMenu = ({ isOpen: _isOpen } : Props) => {
  const location = useLocation();
  const history = useHistory();

  const onClick_Item = (e: any) => {
    history.push(e.currentTarget.dataset.route);
  }

  useEffect(() => {
    
  }, [location]);

  return(
    <div className={styles.root}>
      <List className={styles.root}>
        {defaultList.map(item => (
          <Fragment key={item.title}>
            <ListItemButton className={(location.pathname === item.route || location.pathname.split('/').some(i => IsInArrayLike(i, item.include))) ? styles.selected : ''} 
                            data-route={item.route} 
                            onClick={onClick_Item}>
              <ListItemIcon className={clsx(!_isOpen && styles.itemClosed, location.pathname === item.route && styles.selectedIcon)}>{item.icon}</ListItemIcon>
              {_isOpen && <ListItemText primary={item.title} />}
            </ListItemButton>
            <Divider component="li" className={styles.divider} />
          </Fragment>
        ))}
      </List>
      <List className={styles.root}>
        
      </List>
    </div>
  );
}

export default SideMenu;