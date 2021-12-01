import { gql, useQuery } from "@apollo/client";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { logUserOut } from "../apollo";
import { COMMENT_FRAGMENT, PHOTO_FRAGMENT } from "../fragments";

const FEED_QUERY = gql`
  query seeFeed {
    seeFeed {
      ...PhotoFragment
      user {
        userId
        avatar
      }
      caption
      comments {
        ...CommentFragment
      }
      createdAt
      isMine
    }
  }
  ${PHOTO_FRAGMENT}
  ${COMMENT_FRAGMENT}
`;

export default function Feed({ navigation }) {
  const { data } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <View
      style={{
        backgroundColor: "black",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>Feed</Text>
      <TouchableOpacity onPress={() => logUserOut()}>
        <Text style={{ color: "white" }}>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
}
