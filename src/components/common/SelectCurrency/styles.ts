import { makeStyles } from '@material-ui/core';
import { colors, fonts } from 'theme';

export default makeStyles((theme) => ({
  root: {
    position: 'relative',
    marginBottom: 16,
    width: '100%',
    '& .MuiInputBase-input': {
      padding: 0,
    },
    '& .MuiInputBase-root, .MuiInputBase-root::before': {
      border: 'none',
      borderBottom: 'none !important',
    },
    '& .MuiInput-underline::after': {
      border: 'none',
    },
  },
  select: {
    backgroundColor: colors.grayTertiary,
    color: colors.grayQuaternary,
    transition: 'color .2s ease, background-color .2s ease',
    border: `1px solid ${colors.grayTertiary}`,
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    padding: '10px 18px',
    fontSize: fonts.size.mobile.input,
    fontWeight: fonts.weight.mobile.input,
    lineHeight: fonts.lineHeight.mobile.input,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.input,
      fontWeight: fonts.weight.desktop.input,
      lineHeight: fonts.lineHeight.desktop.input,
    },
    marginTop: 6,
    marginBottom: 6,
    '&:focus': {
      backgroundColor: colors.blackSecondary,
    },
  },
  selectMenu: {
    '& .MuiMenu-paper': {
      backgroundColor: colors.graySecondary,
    },
    '& .MuiListItem-root.Mui-selected': {
      backgroundColor: colors.bluePrimary,
      color: colors.whitePrimary,
    },
  },
  selectMenuItem: {
    color: colors.grayQuaternary,
    fontSize: 13,
    fontWeight: 400,
    lineHeight: '19.5px',
    minHeight: 'unset',
    padding: '10px 16px',
    '&:hover': {
      backgroundColor: colors.blueQuaternary,
      color: colors.bluePrimary,
    },
  },
  label: {
    color: colors.whitePrimary,
    fontSize: fonts.size.mobile.inputLabel,
    fontWeight: fonts.weight.mobile.inputLabel,
    lineHeight: fonts.lineHeight.mobile.inputLabel,
    [theme.breakpoints.up('md')]: {
      fontSize: fonts.size.desktop.inputLabel,
      fontWeight: fonts.weight.desktop.inputLabel,
      lineHeight: fonts.lineHeight.desktop.inputLabel,
    },
  },
  currencyFlag: {
    marginRight: 16,
  },
  currencyName: {
    opacity: 0.6,
  },
}));
