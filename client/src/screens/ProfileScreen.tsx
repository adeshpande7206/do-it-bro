import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Image, Button } from "@rneui/themed";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Octicons, Entypo, MaterialCommunityIcons, MaterialIcons, Feather } from "@expo/vector-icons";

import handleLogout from "../utils/handleLogout";
import { FALLBACK_IMAGE_URI } from "../constants";
import useStore from "../store";
import { splitName } from "../utils/commonUtils";

const image_width = 120;

export default function ProfileScreen() {
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const user = useStore((state) => state.user);

  const [fontLoaded, _error] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const tabBarHeight = useBottomTabBarHeight();

  const navigation = useNavigation();

  useEffect(() => {
    return () => {
      setIsLoggingOut(false);
    };
  }, []);

  const logout = () => {
    setIsLoggingOut(true);

    handleLogout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: "LogIn"}]
      });
    });
  };

  if (!fontLoaded) return null;

  return (
    <ScrollView style={[styles.container, { marginBottom: tabBarHeight }]}>
      <View style={styles.profileImgContainer}>
        <Image
          style={{
            height: "100%",
            width: "100%",
            resizeMode: "center",
          }}
          source={{
            uri: user?.image_url || FALLBACK_IMAGE_URI,
          }}
          containerStyle={styles.profileImage}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.name}>{splitName(user?.first_name)}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.settings}>
        <View style={{ marginLeft: 15, marginRight: 10 }}>
          <Feather
            name="info"
            size={24}
            color="black"
          />
        </View>
        <Text style={{ fontSize: 17, flex: 1 }}>Privacy Policy</Text>
        <View style={{ marginRight: 15 }}>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.settings}>
        <View style={{ marginLeft: 15, marginRight: 10 }}>
          <MaterialCommunityIcons
            name="shape-outline"
            size={24}
            color="black"
          />
        </View>
        <Text style={{ fontSize: 17, flex: 1 }}>Terms of Service</Text>
        <View style={{ marginRight: 15 }}>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.settings}>
        <View style={{ marginLeft: 15, marginRight: 10 }}>
          <Feather
            name="file-text"
            size={24}
            color="black"
          />
        </View>
        <Text style={{ fontSize: 17, flex: 1 }}>Community Guidelines</Text>
        <View style={{ marginRight: 15 }}>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.settings}>
        <View style={{ marginLeft: 15, marginRight: 10 }}>
          <Octicons
            name="question"
            size={23}
            color="black"
          />
        </View>
        <Text style={{ fontSize: 17, flex: 1 }}>Support</Text>
        <View style={{ marginRight: 15 }}>
          <Entypo name="chevron-small-right" size={24} color="black" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.settings} onPress={logout} disabled={isLoggingOut}>
        <View style={{ marginLeft: 15, marginRight: 10 }}>
          <MaterialIcons
            name="logout"
            size={24}
            color="red"
          />
        </View>
        <Text style={{ fontSize: 17, flex: 1, color: "red" }}>{isLoggingOut ? "Logging Out" : "Log out"}</Text>
        <View style={{ marginRight: 15 }}>
          <Entypo name="chevron-small-right" size={24} color="red" />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  profileImgContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  profileImage: {
    backgroundColor: "#fff",
    width: image_width,
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: image_width / 2,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 22,
    fontFamily: "Poppins_700Bold",
  },
  email: {
    fontSize: 16,
    color: "#636363",
  },
  settings: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 15,
    marginVertical: 7
  },
});
