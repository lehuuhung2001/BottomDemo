import * as React from 'react';
import {View, Text} from 'react-native';


export default function DetailScreen({navigation}) {
    return(
        <View>
        <Text onPress = {() => navigation.navigate('Home')}> DetailScreen</Text>
     </View>

    );

}