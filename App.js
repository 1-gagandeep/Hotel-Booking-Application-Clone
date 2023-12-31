import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ModalPortal} from 'react-native-modals'
import StackNavigator from './StackNavigator';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
   <>
   <Provider store={store} >

   <StackNavigator/>
   <ModalPortal/>
   </Provider>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
