import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import { GameHistoryNavigator } from './src/navigation/GameHistoryNavigator';
import { NewGameNavigator } from './src/navigation/NewGameNavigator';
import SettingsScreen from './src/screens/SettingsScreen';
import { MaterialIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { ItemProvider } from './src/contexts/ItemContext';
import HelpScreen from './src/screens/HelpScreen';

// Below code required independent research, to create a nested navigator, i.e., a stack navigator for a screen indexed by the tab navigator
const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <ItemProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Home' screenOptions={{labelStyle: {fontSize: 11}, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
            <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Home', tabBarLabel: 'Home', tabBarIcon: () => (<MaterialIcons name='home' size={40} color='black' />) }} />
            <Tab.Screen name='GameHistory' component={GameHistoryNavigator} options={{ headerShown: false, title: 'Game History', tabBarLabel: 'Game History', tabBarIcon: () => (<AntDesign name='bars' size={40} color='black' />)}} />
            <Tab.Screen name='NewGame' component={NewGameNavigator} options={{ headerShown: false, title: 'New Game', tabBarLabel: 'New Game', tabBarIcon: () => (<AntDesign name='plus' size={40} color='black' />)}} />
            <Tab.Screen name='Help' component={HelpScreen} options={{ title: 'Current Game', tabBarLabel: 'Current Game', tabBarIcon: () => (<Feather name='play' size={35} color='black' />)}} />
            <Tab.Screen name='Settings' component={SettingsScreen} options={{ title: 'Settings', tabBarLabel: 'Settings', tabBarIcon: () => (<Ionicons name='settings-outline' size={35} color='black' />)}} />
          </Tab.Navigator>
      </NavigationContainer>
    </ItemProvider>
  );
};

export default App;