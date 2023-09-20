import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';


export default function RefForm() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLasttName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const clearButton = () => {
        setFirstName("")
        setLasttName("")
        setEmail("")
    }

    const showAlert =()=>{
        alert("Your name: "+firstName+" "+lastName+"\n"+"Email: "+email)
    }
    return (
        <View style={styles.secondContainer}>
            <View style={styles.regform}>
                <Text style={styles.header}>Registeration</Text>
            </View>
            {/* First anme */}
            <TextInput placeholder='First name'
                placeholderTextColor="#fff"
                value={firstName}
                onChangeText={firstName => setFirstName(firstName)}
                underlineColorAndroid={'transparent'}
                style={styles.textInput}></TextInput>
            {/* Last name */}
            <TextInput placeholder='Last Name'
                value={lastName}
                onChangeText={lastName => setLasttName(lastName)}
                placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'}
                style={styles.textInput}></TextInput>
            {/* Email */}
            <TextInput placeholder='Email'
            value={email}
            onChangeText={email => setEmail(email)}
                keyboardType='email-address'
                placeholderTextColor="#fff"
                underlineColorAndroid={'transparent'}
                style={styles.textInput}></TextInput>

            <TouchableOpacity style={styles.button} onPress={showAlert}>
                <Text style={styles.textButton}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearButton} onPress={clearButton}>
                <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    regform: {
        alignSelf: 'stretch',
        borderBottomColor: "#199187",
        borderBottomWidth: 1,
        marginBottom: 40,
    },

    header: {
        fontSize: 24,
        color: "#fff",
        paddingBottom: 10,
        marginBottom: 0,
    },

    secondContainer: {
        alignSelf: 'stretch',
        alignItems: 'flex-start'

    },

    textInput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: "#fff",
        borderBottomColor: "#f8f8f8",
        borderBottomWidth: 1
    },

    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#59cbbd',
        marginTop: 20,
        borderRadius: 12
    },

    textButton: {
        color: "#fff",
        fontWeight: 'bold'
    },

    clearButton: {
        paddingTop: 15
    },

    clearText: {
        color: "#89CFEF"
    }
});
