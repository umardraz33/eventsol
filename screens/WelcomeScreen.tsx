import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height, width } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={{
            height: height / 2.5,
            width:"80%",
            marginLeft: width * 0.2, // 10% of the width on the left
            marginRight: width * 0.2, // 10% of the width on the right
          }}
          resizeMode="contain"
          source={require("../assets/images/es.png")}
        />
      </View>
      <View
        style={{
          paddingHorizontal: Spacing * 4,
          paddingTop: Spacing * 1,
        }}
      >
        <Text
          style={{
            fontSize: FontSize.xxLarge,
            color: Colors.primary,
            fontFamily: Font["poppins-bold"],
            textAlign: "center",
          }}
        >
          Discover Your Dream Events Here
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: Spacing * 4,
          paddingTop: Spacing * 4,
        }}
      >
        <Text
          style={{
            fontSize: FontSize.small,
            color: Colors.text,
            fontFamily: Font["poppins-regular"],
            textAlign: "center",
            marginTop: Spacing * 2,
          }}
        >
          Explore All The Existing Events Based On Your Interest{" "}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: Spacing * 2,
          paddingTop: Spacing * 6,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigate("Login")}
          style={{
            backgroundColor: Colors.primary,
            borderRadius: Spacing,
            paddingVertical: Spacing * 1.5,
            marginTop: Spacing * 4,
            width: "48%",
            ...Platform.select({
              ios: {
                shadowColor: Colors.primary,
                shadowOffset: { width: 0, height: Spacing },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              },
              android: {
                elevation: Spacing,
              },
            }),
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.onPrimary,
              fontSize: FontSize.large,
              textAlign: "center",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("Register")}
          style={{
            borderRadius: Spacing,
            paddingVertical: Spacing * 1.5,
            marginTop: Spacing * 4,
            width: "48%",
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-bold"],
              color: Colors.text,
              fontSize: FontSize.large,
              textAlign: "center",
            }}
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
