import React, { FunctionComponent, useState } from "react";
import { TextInput as RNTextInput, StyleSheet, TextInputProps } from "react-native";

const TextInput: FunctionComponent<TextInputProps> = ({ ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <RNTextInput
      onChangeText={props.onChangeText}
      style={[
        styles.input,
        props.style,
        isFocused && styles.focusedInput,
      ]}
      placeholder={props.placeholder}
      placeholderTextColor={"#DCDCDC"}
      clearTextOnFocus={true}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderColor: "#DCDCDC",
    borderRadius: 10,
    borderWidth: 2,
    width: "100%",
    color: "#121212",
    marginBottom: 16,
    overflow: "visible"
  },
  focusedInput: {
    borderColor: "#BACD92",
  },
});

export default TextInput;
