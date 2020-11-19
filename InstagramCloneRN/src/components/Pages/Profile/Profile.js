import React, { useContext } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../../../context/context';

const Profile = () => {
    const { signOut } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Button title="Sign Out" onPress={() => { signOut() }} />
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

export default Profile