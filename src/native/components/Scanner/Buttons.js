import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";
import PropTypes from 'prop-types';

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Actions } from 'react-native-router-flux';

import { Firebase, FirebaseRef } from '../../../lib/firebase';
import Spacer from '../UI/Spacer';

const logButtonPress = function(action, num){
    const date = new Date();
    if (action == "Room cleaned") {
        dataType = "Room";
    } else {
        dataType = "MRN";
    }
    FirebaseRef.child('barcodes').push({
        action,
        num,
        log_time: Firebase.database.ServerValue.TIMESTAMP
    }).then((data)=>{
        //success callback
        const message = '"' + action + '" action has been logged for ' + dataType + ' #' + num
            + "\n\nTimestamp: " + date;
        const title = "Success"
        Alert.alert(title, message);
        console.log('logged: ' , data)
    }).catch((error)=>{
        //error callback
        const message = "Something went wrong!\n" + error;
        const title = "Error"
        Alert.alert(title, message);
        console.log('error: ' , error)
    });
}

const Buttons = ({mrn}) => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        marginTop: 40,
        marginBottom: 40,
    }}>
        <AwesomeButtonBlue
            type="primary"
            stretch={true}
            borderRadius={50}
            onPress = {() => {
                logButtonPress("Triaged", mrn);
                Actions.pop();
            }
        }>
            <Text>Triaged</Text>
        </AwesomeButtonBlue>

        <Spacer size={4} />

        <AwesomeButtonBlue
            type="primary"
            stretch={true}
            borderRadius={50}
            onPress = {() => {
                logButtonPress("Roomed", mrn);
                Actions.rooms({mrn: mrn});
            }
        }>
            <Text>Roomed</Text>
        </AwesomeButtonBlue>

        <Spacer size={4} />

        <AwesomeButtonBlue
            type="primary"
            stretch={true}
            borderRadius={50}
            onPress = {() => {
                logButtonPress("Seen by MD", mrn);
                Actions.pop();
            }
        }>
            <Text>Seen by MD</Text>
        </AwesomeButtonBlue>

        <Spacer size={4} />

        <AwesomeButtonBlue
            type="primary"
            stretch={true}
            borderRadius={50}
            onPress = {() => {
                logButtonPress("Discharged by MD", mrn);
                Actions.pop();
            }
        }>
            <Text>Discharged by MD</Text>
        </AwesomeButtonBlue>

        <Spacer size={4} />

        <AwesomeButtonBlue
            type="primary"
            stretch={true}
            borderRadius={50}
            onPress = {() => {
                logButtonPress("Discharged by RN", mrn);
                Actions.pop();
            }
        }>
            <Text>Discharged by RN</Text>
        </AwesomeButtonBlue>

        <Spacer size={4} />

        <AwesomeButtonBlue
            type="primary"
            stretch={true}
            borderRadius={50}
            onPress = {() => {
                logButtonPress("Room cleaned", mrn);
                Actions.pop();
            }
        }>
            <Text>Room cleaned</Text>
        </AwesomeButtonBlue>
    </View>
);

Buttons.propTypes = {
    mrn: PropTypes.any.isRequired,
}

export default Buttons;
