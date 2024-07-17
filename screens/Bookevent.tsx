import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    ScrollView,
    Platform,
    Modal,
    Alert
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
  import DatePicker from "react-native-modern-datepicker";
  type Props = NativeStackScreenProps<RootStackParamList, "BookEvent">;
  
  const BookEvent: React.FC<Props> = ({ navigation: { navigate } }) => {
    const [focused, setFocused] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [startDate, setStartDate] = useState<string>("");
    const [endDate, setEndDate] = useState<string>("");
  
    const [activeInput, setActiveInput] = useState<"start" | "end" | null>(null);
  
    const todayDate = new Date().toISOString().split('T')[0];
  
    function handleOnPress(input: "start" | "end") {
      setActiveInput(input);
      setOpen(true);
    }
  
    function handleChange(selectedDate: string) {
      const isValidDate = new Date(selectedDate) >= new Date(todayDate);
  
      if (activeInput === "start") {
        if (isValidDate) {
          setStartDate(selectedDate);
        } else {
          Alert.alert("Invalid Date", "Please select a date that is today or later.");
        }
      } else if (activeInput === "end") {
        if (isValidDate) {
          setEndDate(selectedDate);
        } else {
          Alert.alert("Invalid Date", "Please select a date that is today or later.");
        }
      }
      setOpen(false);
      setActiveInput(null);
    }
  
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
                Book Events That Match Your Interests!
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
  
              <TouchableOpacity onPress={() => handleOnPress("start")}>
                <AppTextInput placeholder="Starting Date" value={startDate} editable={false} />
              </TouchableOpacity>
  
              <TouchableOpacity onPress={() => handleOnPress("end")}>
                <AppTextInput placeholder="Ending Date" value={endDate} editable={false} />
              </TouchableOpacity>
  
              <Modal animationType="slide" transparent={true} visible={open}>
                <View style={styles.centerAlign}>
                  <View style={styles.modalView}>
                    <DatePicker
                      mode="calendar"
                      selected={activeInput === "start" ? startDate : endDate}
                      onDateChange={handleChange}
                    />
                    <TouchableOpacity onPress={() => setOpen(false)}>
                      <Text>Close</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
  
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
      textAlignVertical: "top",
    },
    focusedTextArea: {
      borderWidth: 2,
      borderColor: Colors.primary,
      shadowOffset: { width: 4, height: Spacing },
      shadowColor: Colors.primary,
      shadowOpacity: 0.5,
      shadowRadius: Spacing,
    },
    centerAlign: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
      marginTop: 20,
      backgroundColor: "white",
      borderRadius: 20,
      width: "90%",
      padding: 35,
      alignItems: "center",
    },
  });
  
  export default BookEvent;
  