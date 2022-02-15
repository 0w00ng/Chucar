import AsyncStorage from '@react-native-async-storage/async-storage';

exports.storeData = async (Item,value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(Item, jsonValue);
        console.log('save : ' + value)
    } catch (e) {
        console.log('saving error');
        // saving error
    }
}

exports.getData = async (Item) => {
    try {
        const jsonValue = await AsyncStorage.getItem(Item);
        console.log('get : ' + JSON.parse(jsonValue));
        if(jsonValue)  return JSON.parse(jsonValue)
        else return null;
    } catch(e) {
        console.log('err reading value');
    // error reading value
    }
}