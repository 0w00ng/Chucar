import AsyncStorage from '@react-native-async-storage/async-storage';

exports.storeData = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('token_chucar', jsonValue);
        console.log('saving complete');
    } catch (e) {
        console.log('saving error');
        // saving error
    }
}

exports.getData = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('token_chucar');
        console.log('getting complete : ' + jsonValue);
        if(jsonValue) return JSON.parse(jsonValue)
        else return null;
    } catch(e) {
        console.log('err reading value');
    // error reading value
    }
}