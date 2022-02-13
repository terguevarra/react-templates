import { Fragment } from 'react';

import { Typography, Divider } from '@mui/material';

import { APPNAME } from '@configurations/Settings';
import useCurrentPageStore from '@store/useCurrentPageStore';

import styles from './Breadcrumb.module.scss';

const Breadcrumb = () => {
  const breadCrumb = useCurrentPageStore(state => state.breadCrumb);
  return(
    <div className={styles.root}>
      <nav>
        <ol className={styles.breadcrumb}>
          <li><Typography variant="caption">My Portal</Typography></li>
          <li className={styles.breadcrumbSeparator}>|</li>
          <li><Typography variant="caption">Strategy & Development</Typography></li>
          <li className={styles.breadcrumbSeparator}>|</li>
          <li><Typography variant="caption">{APPNAME}</Typography></li>
          {breadCrumb.map(item => (
            <Fragment key={item.title}>
              <li className={styles.breadcrumbSeparator}>|</li>
              <li><Typography variant="caption">{item.title}</Typography></li>
            </Fragment>
          ))}
        </ol>
      </nav>
      <Divider />
    </div>
  );
}

export default Breadcrumb;