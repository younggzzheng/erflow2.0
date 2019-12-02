import React from 'react';
import {
  Container, Content, Text, H1, H2, H3,
} from 'native-base';
import Spacer from './UI/Spacer';
import {ImageBackground} from 'react-native'

const About = () => (
  <Container>
        <ImageBackground source={ require('./launch.png')} style={{width: '100%', height: '100%'}}>

    <Content >

    <Spacer size={200} />
      <H1 style={{color: 'white'}}>
        {/* Introduction to ER Flow */}
      </H1>
      <Spacer size={10} />
      <Text style={{color: 'white'}}>
        {/* An application to gather data on ER flow in order to determine the biggest sources of inefficiency. [Some other introductory info] ER overcrowding leads to inefficiencies in hospitals. Tap below to scan a barcode.  */}
      </Text>
    </Content>
    </ImageBackground>

  </Container>
);

export default About;
