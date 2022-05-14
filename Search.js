import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingTop: 2,
    paddingBottom: 2,
  },
});

const url = "https://jsonplaceholder.typicode.com/photos";

async function getPhotos() {
  const response = await fetch(url);
  return await response.json();
}

export default function Search() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    getPhotos().then((resPhotos) => setPhotos(resPhotos));
  }, []);

  return (
    <View style={styles.container}>
      <Text>🔍 Search</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={photos}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        style={{ borderColor: "silver", borderWidth: 2 }}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.thumbnailUrl }}
              style={{ height: 100, width: 100 }}
            />
          </View>
        )}
      />
    </View>
  );
}
