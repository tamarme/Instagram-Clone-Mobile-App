import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = () => {
    const [token, setToken] = useState(null);
    const handleClick = async () => {
        const baseUrl = "http://desktop-1tvalv9:44888/login";
        const header = {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
        await axios.get(baseUrl, header)
            .then(value => setToken(value.data))
            .catch(error => console.log(error))
    }

    return (
        <View style={styles.container}>
            {token && <Text>{token}</Text>}
            <Button
                title="fetch token"
                onPress={handleClick}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Home