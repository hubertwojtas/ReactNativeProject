import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingTop: 2,
    paddingBottom: 2,
  },
  flatlist: {
    borderColor: "silver",
    borderWidth: 2,
  },
  img: {
    width: 100,
    height: 100,
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
        style={styles.flatlist}
        keyExtractor={(item) => item.id}
        data={photos}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity>
              <Image style={styles.img} source={{ uri: item.thumbnailUrl }} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
