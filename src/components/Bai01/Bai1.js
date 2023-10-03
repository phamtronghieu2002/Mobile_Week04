import { View, Text, TextInput, Button, Alert } from "react-native";
import { styles } from "./Bai1Style";

import { IconMethodFB, IconMethodUser, IconMethodWifi, IconPassword, IconUser } from "../Icons/IconBai8";
import { useState } from "react";


const dataBaseUser = [{
    username: "phamhieu",
    password: "123456"

}
    , {
    username: "phamCuong",
    password: "123456789"

}
    , {
    username: "TranLong",
    password: "abc123"

}


]
function Bai01() {

    const handleSubmit = () => {

        const { username, password } = formData;
        console.log(username + password)
        if (dataBaseUser.some(user => user.password === password && user.username === username)) {
              alert("success !")
        }
        else {
            alert("wrong username or password ! !!")
        }





    }

    const [formData, setFormDate] = useState({ username: '', password: '' })

    return (
        <View style={styles.container}>
            <View style={styles.wpIMG}>
                <Text style={{ fontSize: 35 }}>Login</Text>
            </View>
            <View style={styles.InputGroup}>
                <View style={styles.IconInput}>
                    <IconUser />
                </View>
                <TextInput
                    placeholderTextColor={'#C4C4C4'}
                    style={styles.InputText}
                    placeholder="Please input username"
                    value={formData.username}
                    onChangeText={(value) => setFormDate({ ...formData, username: value })}
                />

            </View>
            <View style={styles.InputGroup}>
                <View style={styles.IconInput}>
                    <IconPassword />
                </View>
                <TextInput
                    placeholderTextColor={'#C4C4C4'}
                    secureTextEntry={true}
                    style={styles.InputText}
                    placeholder="Please input password"
                    value={formData.password}
                    onChangeText={(value) => setFormDate({ ...formData, password: value })}
                />

            </View>

            <Button onPress={handleSubmit} title="Login" />
            <View style={styles.actions}>
                <Text style={styles.TextAction}>Register</Text>
                <Text style={styles.TextAction}>Forget password</Text>

            </View>

            <Text style={{ marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
                Orther Login Methods
            </Text>
            <View style={styles.methods}>


                <IconMethodUser />
                <IconMethodWifi />
                <View style={{ width: 74, height: 74, backgroundColor: '#3A579C', alignItems: 'center', justifyContent: 'center' }}>
                    <IconMethodFB />
                </View>
            </View>
        </View>
    );
}

export default Bai01;
