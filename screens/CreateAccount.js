import React, { useRef } from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import AuthButton from "../components/auth/AuthButton";
import AuthLayout from "../components/auth/AuthLayout";
import { TextInput } from "../components/auth/AuthShared";

export default function CreateAccount() {
  const userNameRef = useRef();
  const userIdRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onNext = (nextOne) => {
    nextOne?.current?.focus();
  };
  const onDone = () => {
    alert("done!");
  };
  return (
    <AuthLayout>
      <TextInput
        ref={userNameRef}
        placeholder="User Name"
        returnKeyType="next"
        onSubmitEditing={() => onNext(userIdRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
      />
      <TextInput
        ref={userIdRef}
        placeholder="User Id"
        returnKeyType="next"
        onSubmitEditing={() => onNext(emailRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
      />
      <TextInput
        ref={emailRef}
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="next"
        onSubmitEditing={() => onNext(passwordRef)}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        secureTextEntry
        returnKeyType="done"
        onSubmitEditing={onDone}
        lastOne={true}
        placeholderTextColor={"rgba(255, 255, 255, 0.6)"}
      />
      <AuthButton text="Create Account" disabled={true} onPress={() => null} />
    </AuthLayout>
  );
}