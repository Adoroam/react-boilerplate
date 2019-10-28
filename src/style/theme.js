import { createMuiTheme } from '@material-ui/core/styles'

export const primary = '#364ea3'
export const secondary = '#c79126'

const palette = {
  primary: { main: primary },
  secondary: { main: secondary },
  type: 'dark'
}
const overrides = {
  MuiTouchRipple: {
    root: {
      color: palette.primary.main
    }
  }
}
const themeObj = {
  themeName: 'your theme name',
  palette,
  overrides
}

export default createMuiTheme(themeObj)
