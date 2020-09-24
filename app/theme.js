import { createMuiTheme } from "@material-ui/core";

// #FBB814

// #92000B
export default createMuiTheme({
  palette: {
    primary: { main: "#FBB814" },
    secondary: { main: "#707070" },
    primaryText: { main: "#FBB814" },
    secondaryText: { main: "#707070" },
    text_icons: { main: "#FBB814" },
    dividerColor: { main: "#707070" }
  },

  typography: {
    fontFamily: 'Myriad Pro,Myriad Hebrew, Myanmar Text,',
    button: {
      fontFamily: 'Myriad Pro,Myriad Hebrew, Myanmar Text',
      textTransform: 'none',
    },
  },

  spacing: 4,
});
