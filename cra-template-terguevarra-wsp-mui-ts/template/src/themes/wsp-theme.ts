import { Components, createTheme } from '@mui/material/styles';

const palette = {
  primary: {
    light: '#82a7c9',
    main: '#537898',
    dark: '#244c6a',
  },
  secondary: {
    light: '#ff7a63',
    main: '#ff4337',
    dark: '#c4000d',
  },
  
  background: {
    default: '#f2f2f2',
    paper: '#fff'
  },
  titleBarBgColor: '#1e252b',
  sectionHeadersBgColor: '#333d47',
  sideMenuBgColor: '#d9d9d6',
  bottomFooterBgColor: '#333d47',
  linkColor: '#23527c',
  formSectionHeaderBgColor: '#6c6c6c',
  formSubSectionHeader: '#939596',
  approvalItemsBorderAndBgColor: '#B3D6EC',
  status: {
    pending: '#fce776'
  }
};

// const shape = {
//   borderRadius: 0
// };

const mixins = {
  toolbar: {
    minHeight: 40
  },
  sideBar: {
    minWidth: 300
  }
};

const typography = {
  fontFamily: '"Montserrat", "sans-serif"'
}

const components : Components = {
  MuiTextField: {
    defaultProps: {
      variant: 'standard'
    }
  },
  MuiSelect: {
    defaultProps: {
      variant: 'standard'
    }
  }
}

const wspTheme = createTheme({
  palette, mixins, typography, components
});

export default wspTheme;