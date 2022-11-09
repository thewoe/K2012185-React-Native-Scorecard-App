import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-nativation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import GameHistory from './src/screens/GameHistoryScreen';
import AddScorecardCompetitionScreen from './src/screens/AddScorecardCompetitionScreen';
import AddScorecardScoresScreen from './src/screens/AddScorecardScoresScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Index'>
        <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
        <Tab.Screen name='GameHistory' component={GameHistory} options={{ title: 'Game History'}} />
        <Tab.Screen name='NewGame' component={AddScorecardCompetitionScreen} options={{ title: 'New Game'}} />
        <Tab.Screen name='CurrentGame' component={AddScorecardScoresScreen} options={{ title: 'Current Game'}} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{ title: 'Settings'}} />
      </Tab.Navigator>
      // Put in a stack navigator as well to allow navigation to the unindexed pages
    </NavigationContainer>
  );
}

export default App;