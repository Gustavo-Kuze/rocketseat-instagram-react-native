import React from 'react'
import Routes from "./Routes.js"
import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
    "Unrecognized WebSocket"
]);

const App = () => {
    return <Routes />
}

export default App
