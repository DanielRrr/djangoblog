import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "h1 a": {
        "color": "#0000FF",
        "fontStyle": "oblique",
        "fontFamily": "Georgia"
    },
    "body": {
        "paddingLeft": 20
    },
    "page-header": {
        "backgroundColor": "#F0F8FF",
        "marginTop": 0,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 40
    },
    "page-header h1": {
        "color": "#6495ED",
        "fontSize": "45pt",
        "textDecoration": "none"
    },
    "page-header h1 a": {
        "color": "#6495ED",
        "fontSize": "45pt",
        "textDecoration": "none"
    },
    "page-header h1 a:visited": {
        "color": "#6495ED",
        "fontSize": "45pt",
        "textDecoration": "none"
    },
    "page-header h1 a:active": {
        "color": "#6495ED",
        "fontSize": "45pt",
        "textDecoration": "none"
    },
    "content": {
        "marginLeft": 167,
        "marginTop": 10
    },
    "content p": {
        "fontFamily": "Georgia"
    },
    "date": {
        "float": "right",
        "color": "#828282"
    },
    "save": {
        "float": "right"
    },
    "post-form textarea": {
        "width": "100%"
    },
    "post-form input": {
        "width": "100%"
    },
    "top-menu": {
        "color": "#ffffff",
        "float": "right",
        "fontSize": "26pt",
        "marginRight": 20
    },
    "top-menu:hover": {
        "color": "#ffffff",
        "float": "right",
        "fontSize": "26pt",
        "marginRight": 20
    },
    "top-menu:visited": {
        "color": "#ffffff",
        "float": "right",
        "fontSize": "26pt",
        "marginRight": 20
    },
    "post": {
        "marginBottom": 70
    },
    "post h1 a": {
        "color": "#000000"
    },
    "post h1 a:visited": {
        "color": "#000000"
    }
});