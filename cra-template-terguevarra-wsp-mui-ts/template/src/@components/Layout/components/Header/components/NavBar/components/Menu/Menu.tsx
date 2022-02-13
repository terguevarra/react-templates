import { default as MN, MenuProps } from '@mui/material/Menu';

import styles from './Menu.module.scss';

const Menu = (props : MenuProps) => {
  return(
    <MN className={styles.menu}
        keepMounted
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        {...props}>
      {props.children}
    </MN>
  );
}

export default Menu;