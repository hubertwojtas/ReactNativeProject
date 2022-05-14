import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingTop: 50,
    paddingBottom: 50,
  },
});

const url = "https://jsonplaceholder.typicode.com/photos";

async function getPhotos() {
  const response = await fetch(url);
  return await response.json();
}

export default function NewsFeed() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos().then((resPhotos) => setPhotos(resPhotos));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text>
          <strong>Instagram ♡ </strong>
        </Text>
      </View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={photos}
        showsVerticalScrollIndicator={false}
        style={{ borderColor: "silver", borderWidth: 2 }}
        ItemSeparatorComponent={(props) => {
          return <View style={{ height: 2, backgroundColor: "silver" }} />;
        }}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{ width: 300, height: 400 }}
            />
            <Text>View shop</Text>
          </View>
        )}
      />
      <View>
        <Text>
          <strong>Details</strong>
          <br />
          <strong>More details...</strong>
        </Text>
      </View>
    </View>
  );
}
