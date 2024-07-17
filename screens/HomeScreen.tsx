import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
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
      <SafeAreaView style={{ backgroundColor: Colors.primary }}>
        <View
          style={{
            height: 95,
            flex: 0,
            justifyContent: "flex-end",
            paddingBottom: Spacing * 2,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: Font["poppins-semiBold"],
              fontSize: FontSize.large,
              textAlign: "center",
              color: "white",
            }}
          >
            Home
          </Text>
        </View>
      </SafeAreaView>
      <ScrollView>
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
              paddingTop: Spacing * 2,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.large,
                textAlign: "left",
                color: Colors.primary,
              }}
            >
              Unique Solutions For Every Event!
            </Text>

            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.large,
                textAlign: "left",
                color: Colors.primary,
                marginTop: Spacing * 2,
              }}
            >
              Introduction
            </Text>
            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "left",
                marginTop: Spacing * 2,
              }}
            >
              The events industry faces significant challenges exacerbated by
              Covid-19, including organizational complexities, supplier
              management issues, and inadequate event promotion. These factors
              contribute to frequent event failures, highlighting the need for
              efficient planning and coordination.{" "}
            </Text>

            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "left",
                marginTop: Spacing,
              }}
            >
              Event costs, such as venue expenses, catering, and equipment
              rentals, strain profitability. While virtual events offer
              cost-saving benefits, they lack the interpersonal interactions
              crucial for professional development.{" "}
            </Text>
            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "left",
                marginTop: Spacing,
              }}
            >
              To address these challenges, innovative event management solutions
              are crucial. Custom software can boost planners' confidence by
              streamlining event planning, execution, and networking. This
              approach aims to blend the convenience of virtual events with the
              networking benefits of in-person gatherings.{" "}
            </Text>
            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "left",
                marginTop: Spacing,
              }}
            >
              Despite the rise of virtual experiences, some events still require
              physical presence, necessitating effective use of data from past
              events to optimize future planning and execution.{" "}
            </Text>

            <Text
              style={{
                fontFamily: Font["poppins-semiBold"],
                fontSize: FontSize.large,
                textAlign: "left",
                color: Colors.primary,
                marginTop: Spacing * 2,
              }}
            >
              What we propose?
            </Text>

            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "left",
                marginTop: Spacing,
              }}
            >
              Our SaaS platform provides a robust solution for businesses, event
              organizers, and individuals to strategically manage events from
              planning to execution. Leveraging data-driven insights, we empower
              clients to effectively plan, coordinate, and execute events while
              storing valuable data for future use.{" "}
            </Text>
            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "left",
                marginTop: Spacing,
              }}
            >
              Key features include real-time staff tracking, comprehensive
              on-site personnel coordination, guest management tools, and
              enhanced networking capabilities. This all-inclusive software
              evolves into a complete end-to-end planning and management tool,
              adaptable for both large-scale in-person and virtual events.
            </Text>
            <Text
              style={{
                fontSize: FontSize.small,
                color: Colors.text,
                fontFamily: Font["poppins-regular"],
                textAlign: "left",
                marginTop: Spacing,
              }}
            >
              Our mission is to equip clients with the tools needed to
              streamline event organization, ensuring successful outcomes and
              fostering meaningful connections.
            </Text>

            <TouchableOpacity
              onPress={() => navigate("Contact")}
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
              onPress={() => navigate("BookEvent")}
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
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
