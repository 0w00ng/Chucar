import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Header({
    title,
    titlePress,
    noIcon,
    rightIcon,
    rightIconPress,
    leftIcon,
    leftIconPress,
}) {

    return (
        <View style={styles.container}>
            {leftIcon &&
                <TouchableOpacity
                    style={styles.leftIcon}
                    onPress={leftIconPress}
                >
                    {leftIcon}
                </TouchableOpacity>

            }
            <View style={[styles.titleContainer, noIcon ? {} : { alignSelf: 'center' }]}>
                <TouchableOpacity
                    onPress={titlePress}
                    disabled={titlePress ? false : true}
                >
                    <Text style={{ textAlign: 'center' }}> {title} </Text>
                </TouchableOpacity>
            </View>
            {rightIcon &&
                <TouchableOpacity
                    style={styles.rightIcon}
                    onPress={rightIconPress}
                >
                    {rightIcon}
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 32,
        marginTop: 32,
    },
    titleContainer: {
        height: '100%',
        justifyContent: 'center',
    },
    leftIcon: {
        position: 'absolute',
        top: 10,
        left: 5,
        justifyContent: 'center'
    },
    rightIcon: {
        position: 'absolute',
        bottom: 10,
        right: 5,
        justifyContent: 'center'
    }
})