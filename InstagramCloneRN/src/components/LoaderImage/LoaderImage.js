import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const LoaderImage = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.loader}
                source={require('../../../assets/images/loader.gif')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loader: {
        width: 50,
        height: 50
    }
});

export default LoaderImage