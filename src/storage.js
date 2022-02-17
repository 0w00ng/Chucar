import AsyncStorage from '@react-native-async-storage/async-storage';

exports.setData = async (Item,value) => {
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
        console.log('getting error');
    // error reading value
    }
}

//  테스트 필요
exports.delData = async (Item) => {
    try {
        await AsyncStorage.removeItem(Item);
        console.log('delete : ' + value)
    } catch(e) {
        console.log('deleting error');
    // error reading value
    }
}

exports.clearData = async () => {
    try {
        await AsyncStorage.clear();
        console.log('clear')
    } catch(e) {
        console.log('clear error');
    // error reading value
    }
}