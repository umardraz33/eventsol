import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/AppTextInput";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
  return (
    <SafeAreaView>
      <View
        style={{
          padding: Spacing * 3,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: FontSize.xLarge,
              color: Colors.primary,
              fontFamily: Font["poppins-bold"],
              marginVertical: Spacing * 3,
            }}
          >
            Login Here
          </Text>
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              textAlign: "center",
            }}
          >
            Welcome Back you've been missed!
          </Text>
        </View>
        <View
          style={{
            marginVertical: Spacing * 3,
          }}
        >
          <AppTextInput placeholder="Email"/>
          <AppTextInput placeholder="Password" secureTextEntry/>
        </View>
        <TouchableOpacity
        onPress={()=>navigate("Home")}
          style={{
            padding: Spacing * 2,
            backgroundColor: Colors.primary,
            borderRadius: Spacing,
            marginVertical: Spacing * 3,
            justifyContent: "center",
            ...Platform.select({
              ios: {
                shadowColor: Colors.primary,
                shadowOffset: { width: 0, height: Spacing },
                shadowOpacity: 0.3,
                shadowRadius: Spacing,
              },
              android: {
                shadowColor: Colors.primary,
                shadowOffset: { width: 0, height: Spacing },
                shadowOpacity: 0.3,
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
            Sign in
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigate("Register")}
          style={{
            padding: Spacing * 2,
            borderRadius: Spacing,
            marginVertical: Spacing * 3,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              color: Colors.text,
              fontSize: FontSize.small,
              textAlign: "center",
            }}
          >
            Create New Account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
