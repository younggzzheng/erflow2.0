import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import AwesomeButtonBlue from "react-native-really-awesome-button/src/themes/blue";

import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { Firebase, FirebaseRef } from '../../../lib/firebase';
import Spacer from '../UI/Spacer';

export default class Buttons extends React.Component {
    // TODO: Make MRN a prop

    render() {
        const data = "hi";

        return (
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
                    this.logButtonPress("Triaged", data);
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
                    this.logButtonPress("Roomed", data);
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
                    this.logButtonPress("Seen by MD", data);
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
                    this.logButtonPress("Discharged by MD", data);
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
                    this.logButtonPress("Discharged by RN", data);
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
                    this.logButtonPress("Room cleaned", data);
                }
            }>
                <Text>Room cleaned</Text>
            </AwesomeButtonBlue>
        </View>
        );
    }

    logButtonPress(action, mrn) {
        FirebaseRef.child('barcodes').push({
            action,
            mrn,
            log_time: Firebase.database.ServerValue.TIMESTAMP
        }).then((data)=>{
            //success callback
            const date = new Date();
            const message = '"' + action + '" action has been logged for MRN #' + mrn
                + "\n\nTimestamp: " + date;
            const title = "Success"
            Alert.alert(title, message);
            console.log('logged: ' , data)
        }).catch((error)=>{
            //error callback
            const date = new Date();
            const message = "Something went wrong!\n" + error;
            const title = "Error"
            Alert.alert(title, message);
            console.log('error: ' , error)
        })
    }
}
