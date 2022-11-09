import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import GameHistory from './src/screens/GameHistoryScreen';
import AddScorecardCompetitionScreen from './src/screens/AddScorecardCompetitionScreen';
import AddScorecardScoresScreen from './src/screens/AddScorecardScoresScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import { MaterialIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Home', tabBarLabel: 'Home', tabBarIcon: () => (<MaterialIcons name='home' size={40} color='blue' />) }} />
        <Tab.Screen name='GameHistory' component={GameHistory} options={{ title: 'Game History', tabBarLabel: 'Game History', tabBarIcon: () => (<AntDesign name='bars' size={40} color='black' />)}} />
        <Tab.Screen name='NewGame' component={AddScorecardCompetitionScreen} options={{ title: 'New Game', tabBarLabel: 'New Game', tabBarIcon: () => (<AntDesign name='plus' size={40} color='black' />)}} />
        <Tab.Screen name='CurrentGame' component={AddScorecardScoresScreen} options={{ title: 'Current Game', tabBarLabel: 'Current Game', tabBarIcon: () => (<Feather name='play' size={35} color='black' />)}} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{ title: 'Settings', tabBarLabel: 'Settings', tabBarIcon: () => (<Ionicons name='settings-outline' size={35} color='black' />)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
  // Put in a stack navigator as well to allow navigation to the unindexed pages
}

export default App;