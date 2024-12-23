import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSetRecoilState } from 'recoil';
import userAtom from '../atoms/userAtom'; // Update path if necessary

export default function Login({ navigation }) {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const setUser = useSetRecoilState(userAtom); // Recoil setter for userAtom

    const onChangeFunction = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async (userType) => {
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8000/api/users/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                // body: JSON.stringify({ ...formData, userType }),
                body: JSON.stringify({ ...formData }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert("Success", "Logged in successfully!");

                // Update userAtom and AsyncStorage
                setUser(data);

                // Navigate to the appropriate home screen
                if (userType === 'buyer') {
                    navigation.navigate('BuyerHome');
                } else if (userType === 'seller') {
                    navigation.navigate('SellerHome');
                }

                // Clear the form
                setFormData({ username: "", password: "" });
            } else {
                Alert.alert("Login Failed", data.error || "An unknown error occurred.");
            }
        } catch (error) {
            Alert.alert("Error", "Failed to connect to the server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const { username, password } = formData;

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <View style={styles.form}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput
                        style={styles.input}
                        value={username}
                        onChangeText={(text) => onChangeFunction("username", text)}
                        placeholder="Enter your username"
                    />
                </View>
                <View style={styles.formControl}>
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.passwordGroup}>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={(text) => onChangeFunction("password", text)}
                            placeholder="Enter your password"
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            style={styles.togglePassword}
                            onPress={() => setShowPassword((prev) => !prev)}
                        >
                            <Text style={styles.toggleText}>
                                {showPassword ? "Hide" : "Show"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity
                    style={[styles.button, loading && styles.buttonDisabled]}
                    onPress={() => handleLogin('buyer')}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Login as Buyer</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, loading && styles.buttonDisabled]}
                    onPress={() => handleLogin('seller')}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="#fff" />
                    ) : (
                        <Text style={styles.buttonText}>Login as Seller</Text>
                    )}
                </TouchableOpacity>
                <Text style={styles.signupText}>
                    Not a user?{' '}
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text style={styles.signupLink}>Signup</Text>
                    </TouchableOpacity>
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    form: {
        width: '100%',
        maxWidth: 400,
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 5,
    },
    formControl: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        padding: 10,
        fontSize: 14,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        backgroundColor: '#f9f9f9',
    },
    passwordGroup: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    togglePassword: {
        marginLeft: 10,
    },
    toggleText: {
        color: '#007bff',
        fontSize: 14,
    },
    button: {
        width: '100%',
        padding: 15,
        backgroundColor: '#333',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonDisabled: {
        backgroundColor: '#aaa',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    signupText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
    },
    signupLink: {
        color: '#007bff',
        textDecorationLine: 'underline',
    },
});
