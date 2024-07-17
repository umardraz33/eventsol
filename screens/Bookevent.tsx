import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Platform,
  } from "react-native";
  import React, { useState } from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
  import AppTextInput from "../components/AppTextInput";
  
  type Props = NativeStackScreenProps<RootStackParamList, "BookEvent">;
  
  const BookEvent: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [focused, setFocused] = useState<boolean>(false);
  
    return (
      <ScrollView>
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
                Book Event
              </Text>
              <Text
                style={{
                  fontFamily: Font["poppins-semiBold"],
                  fontSize: FontSize.large,
                  textAlign: "center",
                }}
              >
                Book Events That Match Your Interests!{" "}
              </Text>
            </View>
            <View
              style={{
                marginVertical: Spacing * 3,
              }}
            >
              <AppTextInput placeholder="Name" />
  
              <AppTextInput placeholder="Address" />
              <AppTextInput placeholder="Post code" />
  
              <TextInput
                style={[styles.textArea, focused && styles.focusedTextArea]}
                placeholder="Description"
                placeholderTextColor={Colors.darkText}
                numberOfLines={10}
                multiline={true}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
            </View>
            <TouchableOpacity
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
                Submit
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigate("Login")}
              style={{
                padding: Spacing * 2,
                borderRadius: Spacing,
                marginVertical: Spacing * 3,
                justifyContent: "center",
              }}
            ></TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    textArea: {
      height: 150,
      backgroundColor: Colors.lightPrimary,
      width: "100%",
      padding: 10,
      borderRadius: 5,
      textAlignVertical: "top", // Aligns text at the top of the text area
    },
    focusedTextArea: {
      borderWidth: 2,
      borderColor: Colors.primary,
      shadowOffset: { width: 4, height: Spacing },
      shadowColor: Colors.primary,
      shadowOpacity: 0.5,
      shadowRadius: Spacing,
    },
  });
  
  export default BookEvent;
  