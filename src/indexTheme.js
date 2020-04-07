import {red, blue, green, orange} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const indexTheme = createMuiTheme({
  palette: {
    primary: {
      main: green.A200,
    },
    secondary: {
      main: blue["900"],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: orange["50"],
    },
  },
});

export default indexTheme;