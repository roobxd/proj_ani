import { FunctionComponent, useEffect, useState } from "react";
import { LoginScreenProps } from "../../navigation/AuthStackNavigator";
import TextInput from "../../components/TextInput";
import { View, StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import Button from "../../components/Button";
import useStore from "../../store/store";
import {StatusBar} from "expo-status-bar";
import Text from "../../components/Text"
import Title from "../../components/Title";

const Login: FunctionComponent<LoginScreenProps> = () => {
    const { signIn, authError } = useStore();
    const [identifier, setIdentifier] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorText, setError] = useState<string | undefined | null>();

    const attemptLogin = () => {
        signIn(identifier, password);
    };

    useEffect(() => {
        setError(authError)
    }, [authError])

    const checkEmptyString = (str: string) => {
        return str.length === 0 || str === "";
    };

    return (
        <SafeAreaView>
                <StatusBar style="light" />
                <View style={styles.formContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Project Ani.</Text>
                    </View>
                    <View>
                        {
                            !checkEmptyString(errorText || "") && (
                                <View style={styles.errorTextContainer}>
                                    <Text style={{color: "red"}}>{errorText}</Text>
                                </View>
                            )
                        
                        }
                        <TextInput
                            value={identifier}
                            onChangeText={(text) => setIdentifier(text)}
                            style={styles.formItem}
                            placeholder="E-mail"
                        />
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            style={styles.formItem}
                            placeholder="Password"
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title={"Inloggen"} style={styles.button} onPress={() => attemptLogin()} disabled={checkEmptyString(identifier) || checkEmptyString(password)}/>
                    </View>
                </View>
            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
    },
    buttonContainer: {
        justifyContent: "flex-end",
        gap: 16
    },
    formContainer: {
        height: "90%",
        justifyContent: "flex-end",
        padding: 16,
        gap: 16,
    },
    formItem: {
        backgroundColor: "#ffffff"
    },
    button: {
        backgroundColor: "#4c9c68",
        padding: 16,
        borderRadius: 6
    },
    errorTextContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderColor: "#DCDCDC",
        borderRadius: 8,
        borderWidth: 2,
        width: "100%",
        color: "#121212",
        marginBottom: 16,
        overflow: "visible",
        backgroundColor: "#f5f5f5"
    },
    titleContainer: {
        height: "50%"
    },
    title: {
        color: "#f5f5f5",
        fontSize: 36,
        fontWeight: "bold",
        alignSelf: "center"
    }
});

export default Login;
