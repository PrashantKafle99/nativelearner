import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from "expo-router";

export default function Tabslayout() {
  return(  
  <>
  <Tabs screenOptions={{tabBarActiveTintColor: "blue"}}>
    <Tabs.Screen
      name="index"
      options={{
        title: "Home",
        tabBarIcon: ({color}) => (
          <Entypo name="home" size={24} color={color} />
        )
      }} />
      <Tabs.Screen
      name="login"
      options= { {
        title: "Login",
      }} />
      <Tabs.Screen
      name="user"
      options={{
        title: "User",
        tabBarIcon: ({color}) => (
          <FontAwesome5 name="user-alt" size={24} color={color} />
        )
      }} />
  </Tabs>
  </>
  );
}
