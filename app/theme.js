import { createMuiTheme } from "@material-ui/core";


export default createMuiTheme({
    palette: {
        primary: { main: "#92000B" },
        secondary: { main: "#707070" },
        primaryText: { main: "#92000B" },
        secondaryText: { main: "#707070" },
        text_icons: { main: "##92000B" },
        dividerColor: { main: "#707070" }
    },

    typography: {
        fontFamily: 'Myriad Pro,Myriad Hebrew, Myanmar Text,',
        button: {
            fontFamily: 'Myriad Pro,Myriad Hebrew, Myanmar Text',
            textTransform: 'none',
        },
    },

    spacing: 8,
});
