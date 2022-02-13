import { makeStyles } from '@mui/styles';

const useGlobalStyles = makeStyles({
  '@global': {
    '::-webkit-scrollbar' : {
      width: '9px',
    },
    
    '*:hover::-webkit-scrollbar-thumb' : {
      background: '#2a2b2b',
      borderRadius: '6px'
    },

    '*::-webkit-scrollbar-thumb' : {
      background: '#181919',
      borderRadius: '6px',
    },

    'a, a:visited, a:hover, a:active': {
      color: 'inherit',
      textDecoration: 'none'
    },

    '.swal2-container': {
      zIndex: `1400 !important`,
      fontFamily: '"Montserrat", "sans-serif"'
    },

    '.read-more-list' : {
      color: 'green !important',
      fontStyle: 'italic',
      textDecoration: 'underline',
      display: 'flex',
      justifyContent: 'flex-end'
    },

    '.read-more-list-left' : {
      color: 'green !important',
      fontStyle: 'italic',
      textDecoration: 'underline',
      display: 'flex',
      justifyContent: 'flex-start'
    },
  },
});

export default useGlobalStyles;