import React from "react";
import { Container } from "../../styles/styles";
import { Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Login() {
  return (
    <Container>
      <Icon name="mood" size={60} color="red" />
      <Text>Ola</Text>
    </Container>
  );
}