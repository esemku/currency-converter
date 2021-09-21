import { makeStyles } from '@material-ui/core';
import { colors } from 'theme';

export default makeStyles((theme: any) => ({
  root: {},
  content: {
    padding: 50,
  },
  container: {
    width: '100%',
    backgroundColor: colors.grayQuinary,
    borderRadius: theme.shape.borderRadius,
    padding: '10px 40px 20px',
  },
  contentHeader: {
    margin: '0px 0px 10px',
  },
  dashedLine: {
    width: '100%',
    borderBottomStyle: 'dashed',
    borderBottom: `1px solid ${colors.graySenary}`,
    marginBottom: 20,
  },
  converterWrapper: {
    backgroundColor: colors.graySecondary,
    borderRadius: theme.shape.borderRadius,
    padding: '26px 30px',
  },
}));
