import { SafeAreaView, StyleSheet, Text, ScrollView, View, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import Ionicons from "react-native-vector-icons/Ionicons"; // Ensure correct import

type Props = NativeStackScreenProps<RootStackParamList, "EventCards">;

const EventCards: React.FC<Props> = ({ navigation: { navigate } }) => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <ScrollView>
      <SafeAreaView>
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
                marginTop: Spacing * 6,
              }}
            >
              Book Event
            </Text>
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.small,
                textAlign: "center",
              }}
            >
              Book Events That Match Your Interests!
            </Text>
          </View>
        <View style={styles.container}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              $49.00
              <Text style={styles.smallText}>/Person</Text>
            </Text>
          </View>
          <View style={{ borderColor: Colors.primary, borderWidth: 2 }}>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Comfortable Seats</Text>
            </View>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Free Lunch and Coffee</Text>
            </View>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Classical Music</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigate("BookEvent")}
              style={{
                padding: Spacing,
                backgroundColor: Colors.primary,
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
Buy Ticket              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={styles.container}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              $49.00
              <Text style={styles.smallText}>/Person</Text>
            </Text>
          </View>
          <View style={{ borderColor: Colors.primary, borderWidth: 2 }}>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Comfortable Seats</Text>
            </View>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Free Lunch and Coffee</Text>
            </View>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Classical Music</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigate("BookEvent")}
              style={{
                padding: Spacing,
                backgroundColor: Colors.primary,
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
                Buy Ticket  
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
        <View style={styles.container}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>
              $49.00
              <Text style={styles.smallText}>/Person</Text>
            </Text>
          </View>
          <View style={{ borderColor: Colors.primary, borderWidth: 2 }}>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Comfortable Seats</Text>
            </View>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Free Lunch and Coffee</Text>
            </View>
            <View style={styles.box}>
              <View style={styles.iconContainer}>
                <Ionicons name="checkmark" size={15} color={Colors.primary} />
              </View>
              <Text style={styles.text}>Classical Music</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigate("BookEvent")}
              style={{
                padding: Spacing,
                backgroundColor: Colors.primary,
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
            Buy Ticket
              </Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: Spacing * 4,
    padding: Spacing * 2,
  },
  priceContainer: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  priceText: {
    fontSize: FontSize.xLarge,
    color: "#ffffff",
    fontFamily: Font["poppins-bold"],
    marginVertical: Spacing * 3,
    textAlign: "center",
  },
  smallText: {
    fontSize: FontSize.small,
    color: "#ffffff",
    fontFamily: Font["poppins-regular"],
  },
  box: {
    flexDirection: "row", // Align items horizontally
    padding: 10, // Optional: Add padding inside the box
    alignItems: "center", // Center items vertically
  },
  iconContainer: {
    width: 20, // Width of the circle
    height: 20, // Height of the circle
    borderRadius: 20, // Half of the width and height to make it a circle
    borderColor: Colors.primary, // Circle border color
    borderWidth: 1, // Circle border width
    justifyContent: "center", // Center the icon horizontally
    alignItems: "center", // Center the icon vertically
    marginRight: 5, // Add space between the circle and the text
    backgroundColor: Colors.lightPrimary,
  },
  text: {
    fontSize: FontSize.medium, // Adjust font size as needed
    color: Colors.primary, // Match text color to icon color
  },
});

export default EventCards;
