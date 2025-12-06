/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import ScrollSyncTabBar from './src/components/ScrollSyncTabBar';
import ScrollAdaptiveStickyFooter from './src/components/ScrollAdaptiveStickyFooter';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={{ flex: 1 }}>
        {/* <OTPInput digits={5} onChange={()=>console.log("onChange")}/> */}
        {/* <ScrollSyncTabBar /> */}
        <ScrollAdaptiveStickyFooter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
