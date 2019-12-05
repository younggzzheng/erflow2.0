import PropTypes from 'prop-types';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import * as React from 'react';
import { Firebase, FirebaseRef } from '../../../lib/firebase';
import { Actions } from 'react-native-router-flux';

var roomNum;

const logRoomEntry = function(mrn, room){
    FirebaseRef.child('barcodes').push({
        action: "Room number entered",
        num: mrn ? mrn : "failed",
        room: room ? room : "failed",
        log_time: Firebase.database.ServerValue.TIMESTAMP
    }).then((data)=>{
        //success callback
        const message = 'Room #' + room + '" has been assigned to MRN #' + mrn;
        const title = "Success"
        Alert.alert(title, message);
        console.log('logged: ' , data)
        Actions.pop();
        Actions.pop();
    }).catch((error)=>{
        //error callback
        const message = "Something went wrong!\n" + error;
        const title = "Error"
        Alert.alert(title, message);
        console.log('error: ' , error)
    });
}

const Room = ({mrn}) => (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
        paddingTop: 5,
    }}>
        <Text>Enter Room Number</Text>
        <TextInput
            style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
            allowFontScaling={false}
            placeholder="Type here for Room #!"
            maxLength={20}
            keyboardType="number-pad"
            onChangeText={(newText) => roomNum = newText}
        />
        <Button
            title="Go!"
            onPress={() => {
              if (isNaN(roomNum)) {
                  Alert.alert("Error", "Please enter a valid Room #");
              } else {
                  logRoomEntry(mrn, roomNum);
              }
            }}
        />
    </View>
);

Room.propTypes = {
    mrn: PropTypes.any.isRequired,
}

export default Room;
