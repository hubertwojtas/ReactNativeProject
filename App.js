import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchView } from "./views";
import { NewsFeedView } from "./views";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingTop: 50,
  },
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Search") {
              iconName = focused ? "ios-list" : "ios-list";
            } else if (route.name === "News Feed") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "yellowgreen",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Search" component={SearchView} />
        <Tab.Screen name="News Feed" component={NewsFeedView} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
