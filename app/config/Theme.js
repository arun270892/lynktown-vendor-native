//import { StyleSheet } from 'react-native';

import colors from "./colors";

const theme={
    light:{
        theme:"light",
    
        background:colors.secondarycolor,
        textcolor:colors.primarycolor,
        iconcolor:colors.primarycolor,
        buttoncolor:colors.primarycolor,
        buttontextcolor:colors.secondarycolor,
        graytextcolor:colors.inputborderline,
        tabbackgroundcolor:colors.primarycolor,
        tabtextcolor:colors.lightgray,
        tabcolor:colors.secondarycolor,
        text2:colors.graytextcolor,
        cartbutton:colors.fbbuttoncolor,
        cattabcolor:colors.cattablight,
        servicetabcolor:colors.whitecolor,
        samecolor:colors.fbbuttoncolor,
        bookingbuttoncolor:colors.graybackground,
        menuiconcolor:colors.menuiconcolor,
        buttontext:colors.fbbuttoncolor,
        inputcolor:colors.whitecolor,

        
    },
    dark:{
        theme:"dark",
       
        background:colors.primarycolor,
        textcolor:colors.secondarycolor,
        iconcolor:colors.secondarycolor,
        buttoncolor:colors.secondarycolor,
        buttontextcolor:colors.primarycolor,
        graytextcolor:colors.graytextcolor,
        tabbackgroundcolor:colors.secondarycolor,
        tabtextcolor:colors.lightgray,
        tabcolor:colors.tabcolordark,
        text2:colors.lightgray,
        cartbutton:colors.primarycolor,
        cattabcolor:colors.cattabdark,
        servicetabcolor:colors.cattabdark,
        samecolor:colors.fbbuttoncolor,
        bookingbuttoncolor:colors.cattabdark,
        menuiconcolor:colors.cattabdark,
        buttontext:colors.whitecolor,
        inputcolor:colors.cattabdark,
        
    },
};
export default theme; 