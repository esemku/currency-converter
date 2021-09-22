import { makeStyles } from '@material-ui/core';
import { colors } from 'theme';

export default makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
    opacity: 0.6,
    marginLeft: 2,
    marginTop: -8,
    '&:hover': {
      opacity: 0.7,
    },
    '& > path': {
      fill: colors.grayQuaternary,
    },
  },
}));
