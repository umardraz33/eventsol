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
      <>
      <SafeAreaView style={{backgroundColor:Colors.primary,}}>
        
      <View style={{height:95, flex:0, justifyContent:"flex-end", paddingBottom: Spacing*2, alignItems:"center"}}>
        <Text style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              textAlign: "center",
              color:"white"
            }}>Home</Text>
      </View>
      </SafeAreaView>
      <SafeAreaView>
       
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
          <TouchableOpacity
          onPress={()=>navigate("Contact")}
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
            Contact Us
          </Text>
        </TouchableOpacity>
          <TouchableOpacity
          onPress={()=>navigate("Contact")}
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
            Book Event
          </Text>
        </TouchableOpacity>
        </View>
        
      </SafeAreaView>
      </>
    );
  };
  
  export default HomeScreen;
  
  const styles = StyleSheet.create({});
  