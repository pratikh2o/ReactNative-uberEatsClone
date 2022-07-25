import { View, Text, Image } from "react-native";
import React from "react";

const MenuItem = ({ food }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
        borderBottomColor: "#eee",
        borderBottomWidth: 2,
      }}
    >
      <FoodDetail name={food.name} desp={food.description} price={food.price} />
      <FoodImage image={food.image} />
    </View>
  );
};

const FoodDetail = ({ name, desp, price }) => {
  return (
    <View
      style={{
        width: 240,
        justifyContent: "space-evenly",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 19 }}>{name}</Text>
      <Text>{desp}</Text>
      <Text>{price}</Text>
    </View>
  );
};

const FoodImage = ({ image }) => {
  return (
    <Image
      source={{ uri: image }}
      style={{ width: 100, height: 100, borderRadius: 5 }}
    />
  );
};

export default MenuItem;
