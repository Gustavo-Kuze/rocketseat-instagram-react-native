import React from "react";
import { createAppContainer, createStackNavigator } from "react-navigation";
import logo from "./assets/logo.png";
import { Image } from "react-native";

import Feed from "./pages/Feed";
import New from "./pages/New";

const HeaderTitle = (<Image style={{ marginHorizontal: 20 }} source={logo} />);

const defaultNavigationOptions = {
  headerTintColor: "#000",
  headerTitle: HeaderTitle,
  headerBackTitle: null
};

export default createAppContainer(
  createStackNavigator(
    { Feed, New },
    { defaultNavigationOptions, mode: "modal" }
  )
)
