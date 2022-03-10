
import { createDrawerNavigator } from "@react-navigation/drawer";
import PHHSScreen from "@screens/HSScreen";
import HSScreen from "@screens/PHHSScreen";
import React from "react";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HSScreen" component={HSScreen} />
      <Drawer.Screen name="PHHSScreen" component={PHHSScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;