import { makeStyles } from '@material-ui/core';
import { colors, fonts } from 'theme';

export default makeStyles((theme: any) => ({
  root: {},
  content: {
    padding: 16,
    [theme.breakpoints.up('sm')]: {
      padding: 50,
    },
  },
  container: {
    width: '100%',
    backgroundColor: colors.grayQuinary,
    borderRadius: theme.shape.borderRadius,
    padding: '8px 16px 16px',
    [theme.breakpoints.up('sm')]: {
      padding: '16px 40px',
    },
  },
  contentHeader: {
    margin: '0px 0px 10px',
  },
  dashedLine: {
    width: '100%',
    borderBottomStyle: 'dashed',
    borderBottom: `1px solid ${colors.graySenary}`,
    marginBottom: 16,
  },
  converterWrapper: {
    backgroundColor: colors.graySecondary,
    borderRadius: theme.shape.borderRadius,
    padding: '26px 30px',
  },
  resultTextCurrencyToConvert: {
    fontSize: fonts.size.mobile.span,
    fontWeight: fonts.weight.mobile.span,
    lineHeight: fonts.lineHeight.mobile.span,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.span,
      fontWeight: fonts.weight.desktop.span,
      lineHeight: fonts.lineHeight.desktop.span,
    },
    color: colors.grayQuaternary,
  },
  resultTextCurrencyConverted: {
    fontSize: fonts.size.mobile.h2,
    fontWeight: fonts.weight.mobile.h2,
    lineHeight: fonts.lineHeight.mobile.h2,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.h2,
      fontWeight: fonts.weight.desktop.h2,
      lineHeight: fonts.lineHeight.desktop.h2,
    },
    color: colors.whitePrimary,
    margin: '8px 0',
  },
  convertButton: {
    marginTop: 16,
  },
}));
