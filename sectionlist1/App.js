import { StatusBar } from 'expo-status-bar';
import { SectionList, StyleSheet, Text, View } from 'react-native';

const MENU = [
  {
    id: 1,
    title: "Çorbalar",
    data: [
      {
        id: 1,
        title: "Mercimek",
      },
      {
        id: 2,
        title: "Ezogelin",
      },
      {
        id: 3,
        title: "Yayla",
      },
    ],
  },
  {
    id: 2,
    title: "Tatlılar",
    data: [
      {
        id: 1,
        title: "Künefe",
      },
      {
        id: 2,
        title: "Şöbiyet",
      },
      {
        id: 3,
        title: "Sütlaç",
      },
    ],
  },
  {
    id: 3,
    title: "Ana Yemekler",
    data: [
      {
        id: 1,
        title: "Pilav",
      },
      {
        id: 2,
        title: "Makarna",
      },
      {
        id: 3,
        title: "Kebap",
      },
      {
        id: 4,
        title: "Izgara Köfte",
      },
      {
        id: 5,
        title: "Pizza",
      },
    ],
  },
  {
    id: 4,
    title: "İçecekler",
    data: [
      {
        id: 1,
        title: "Kola",
      },
      {
        id: 2,
        title: "Ayran",
      },
      {
        id: 3,
        title: "Su",
      },
    ],
  },

];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <SectionList
        style={{ width: "80%" }}
        sections={MENU}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (<Item name={item.title} />)}
        renderSectionHeader={({ section }) => <Title name={section.title} />}
      />





    </View>
  );
}

const Title = ({ name }) => {
  return (
    <Text
      style={{
        fontSize: 30,
        fontWeight: "bold",
        width: "90%",
        textAlign: "left"
      }}>
      {name}
    </Text>
  );
};

const Item = ({ name }) => {
  return (
    <View style={{
      width: "90%",
      height: 70,
      marginBottom: 5,
      backgroundColor: "#E7D3C8",
      borderRadius: 15,
      paddingLeft: 10,
      justifyContent: "center",
    }}>

      <Text style={{ fontSize: 20, }}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
