import React from 'react'
import { View, Text, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
const HomeScreen = () => {
    const navigation = useNavigation();
    const gotooscreen = (screen) => {
        navigation.navigate(screen);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "red", justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                Dhruvesh Rana
            </Text>
            <TouchableOpacity
                onPress={() => gotooscreen('Detail')}
            >
                <Text>Go to the detail</Text>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen
