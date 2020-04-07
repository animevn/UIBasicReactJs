import {red, orange} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const indexTheme = createMuiTheme({
  palette: {
    primary: {
      main: orange["400"],
    },
    secondary: {
      main: red.A400,
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