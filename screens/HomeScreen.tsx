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
  import { createDrawerNavigator } from "@react-navigation/drawer";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
  const { height, width } = Dimensions.get("window");
  
  type Props = NativeStackScreenProps<RootStackParamList, "Home">;
  
  const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
      <SafeAreaView style ={{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      }}>
       
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
            Welcome Waqas Awan To EventSol
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
        
      </SafeAreaView>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({});
  