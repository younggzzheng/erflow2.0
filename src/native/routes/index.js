import React from 'react';
import { Scene, Tabs, Stack } from 'react-native-router-flux';
import { Icon } from 'native-base';

import DefaultProps from '../constants/navigation';
import AppConfig from '../../constants/config';

import RecipesContainer from '../../containers/Recipes';
import RecipeListingComponent from '../components/Recipe/Listing';
import RecipeSingleComponent from '../components/Recipe/Single';

import SignUpContainer from '../../containers/SignUp';
import SignUpComponent from '../components/User/SignUp';

import LoginContainer from '../../containers/Login';
import LoginComponent from '../components/User/Login';

import ForgotPasswordContainer from '../../containers/ForgotPassword';
import ForgotPasswordComponent from '../components/User/ForgotPassword';

import UpdateProfileContainer from '../../containers/UpdateProfile';
import UpdateProfileComponent from '../components/User/UpdateProfile';

import MemberContainer from '../../containers/Member';
import ProfileComponent from '../components/User/Profile';

import AboutComponent from '../components/About';

import ScannerComponent from '../components/Scanner/BarcodeScanner';
import ButtonsComponent from '../components/Scanner/Buttons';
import RoomComponent from '../components/Scanner/Room';

const Index = (
  <Stack hideNavBar>
    <Scene hideNavBar>
      <Tabs
        key="tabbar"
        swipeEnabled
        type="replace"
        showLabel={false}
        {...DefaultProps.tabProps}
      >

      <Stack
        key="profile"
        title="PROFILE"
        icon={() => <Icon name="contact" {...DefaultProps.icons} />}
        // {...DefaultProps.navbarProps}
      >
        <Scene key="profileHome" component={MemberContainer} Layout={ProfileComponent} />
        <Scene
          back
          key="signUp"
          title="SIGN UP"
          // {...DefaultProps.navbarProps}
          component={SignUpContainer}
          Layout={SignUpComponent}
        />
        <Scene
          back
          key="login"
          title="LOGIN"
          // {...DefaultProps.navbarProps}
          component={LoginContainer}
          Layout={LoginComponent}
        />
        <Scene
          back
          key="forgotPassword"
          title="FORGOT PASSWORD"
          // {...DefaultProps.navbarProps}
          component={ForgotPasswordContainer}
          Layout={ForgotPasswordComponent}
        />
        <Scene
          back
          key="updateProfile"
          title="UPDATE PROFILE"
          // {...DefaultProps.navbarProps}
          component={UpdateProfileContainer}
          Layout={UpdateProfileComponent}
        />
        </Stack>

        <Stack
          key="scanstack"
          title="SCAN"
          icon={() => <Icon name="camera" {...DefaultProps.icons} />}
          // {...DefaultProps.navbarProps}
        >
            <Scene
                key="scanner"
                title="SCAN BARCODE"
                // {...DefaultProps.navbarProps}
                component={ScannerComponent}
            />
            <Scene
                key="buttons"
                title="LOG DATA"
                component={ButtonsComponent}
            />
            <Scene
                key="rooms"
                title="ENTER ROOM NUMBER"
                component={RoomComponent}
            />
        </Stack>
      </Tabs>
    </Scene>
  </Stack>
);

export default Index;
