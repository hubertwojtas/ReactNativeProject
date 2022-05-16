import { View } from "react-native";
import NewsFeed from "./NewsFeed";
import Search from "./Search";

export function SearchView() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Search />
    </View>
  );
}

export function NewsFeedView() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <NewsFeed />
    </View>
  );
}
