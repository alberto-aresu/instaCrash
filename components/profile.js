import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';


const Profile = (props) => {

  const navigation = useNavigation();

  const {
    name,
    avatar,
    followers,
    following,
    posts,
    description,
    city,
    email,
    images } = props.route.params


  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 15 }}>
        <Icon style={{ margin: 10 }}
          name='arrow-left'
          size={35}
          onPress={() => { navigation.navigate("Home") }}
        />
        <View style={styles.profileName}>
          <Text style={styles.nameText}>{name}</Text>
        </View>
        <View style={styles.drower}>
          <Icon
            name='dots-vertical'
            size={35}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Image
              source={{ uri: avatar }}
              style={styles.profileImage}
            />
          </View>
          <View style={styles.profileView}>
            <View style={styles.statsView}>
              <Text style={styles.profileStats}>{posts}</Text>
              <Text style={{ fontSize: 18 }}>Post</Text>
            </View>
            <View style={styles.statsView}>
              <Text style={styles.profileStats}>{followers}</Text>
              <Text style={{ fontSize: 18 }}>Follower</Text>
            </View>
            <View style={styles.statsView}>
              <Text style={styles.profileStats}>{following}</Text>
              <Text style={{ fontSize: 18 }}>Seguiti</Text>
            </View>
          </View>
        </View>
        <Text style={styles.nameImage}>{name}</Text>
        <Text style={styles.description}>{city}</Text>
        <Text style={styles.description} >{email}</Text>
        <Text style={styles.description} >{description}</Text>

        <View style={styles.separator} width={windowWidth}></View>

        <View style={styles.imagesView}>
          {images.map((image, index) => { return (<Image onPress={() => { navigation.navigate("ImmagineFullScreen") }} style={styles.imagesProfile} key={index} source={{ uri: image }} />) })}
        </View>
      </ScrollView>
    </View>
  )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  profileName: {
    flexDirection: "row",
  },
  nameText: {
    fontSize: 20,
    fontWeight: "700",
    margin: 15
  },
  drower: {
    flex: 1,
    flexDirection: "row-reverse",
    margin: 15,
  },
  profileImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginLeft: 15
  },
  nameImage: {
    fontSize: 17,
    fontWeight: "700",
    marginLeft: 15,
    marginTop: 10
  },
  profileView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center',
  },
  statsView: {
    flexDirection: "column",
    alignItems: "center"
  },
  profileStats: {
    fontSize: 23,
    fontWeight: "700",
  },
  description: {
    fontSize: 15,
    marginLeft: 15,
    marginRight: 10,
  },
  separator: {
    height: 0,
    borderWidth: 1,
    borderColor: "#e6e6e6",
    marginTop: 5,
    marginBottom: 5
  },
  imagesView: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  imagesProfile: {
    margin: 1,
    height: windowWidth / 3 - 2,
    width: windowWidth / 3 - 2,
  }
})


export default Profile