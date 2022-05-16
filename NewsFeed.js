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
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  flatlist: {
    borderColor: "silver",
    borderWidth: 2,
  },
  img: {
    width: 300,
    height: 400,
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
        <Text style={styles.text}>Instagram ♡</Text>
      </View>
      <FlatList
        style={styles.flatlist}
        keyExtractor={(item) => item.id.toString()}
        data={photos}
        showsVerticalScrollIndicator={false}
        style={{ borderColor: "silver", borderWidth: 2 }}
        ItemSeparatorComponent={(props) => {
          return <View style={{ height: 2, backgroundColor: "silver" }} />;
        }}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.img} source={{ uri: item.thumbnailUrl }} />
            <Text>View shop</Text>
          </View>
        )}
      />
      <View>
        <Text style={styles.text}>More details...</Text>
      </View>
    </View>
  );
}
