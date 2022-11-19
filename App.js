import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import GameHistoryScreen from './src/screens/GameHistoryScreen';
import GameCompleteScreen from './src/screens/GameCompleteScreen';
import EditScorecardTeamScreen from './src/screens/EditScorecardTeamScreen';
import EditScorecardScoresScreen from './src/screens/EditScorecardScoresScreen';
import EditScorecardEndScreen from './src/screens/EditScorecardEndScreen';
import EditScorecardCompetitionScreen from './src/screens/EditScorecardCompetitionScreen';
import AddScorecardTeamScreen from './src/screens/AddScorecardTeamScreen';
import AddScorecardScoresScreen from './src/screens/AddScorecardScoresScreen';
import AddScorecardEndScreen from './src/screens/AddScorecardEndScreen';
import AddScorecardCompetitionScreen from './src/screens/AddScorecardCompetitionScreen';
import { GameHistoryNavigator } from './src/navigation/StackNavigator';
import { MaterialIcons, AntDesign, Feather, Ionicons } from '@expo/vector-icons';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{labelStyle: {fontSize: 11}, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name='Settings' component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name='GameHistory' component={GameHistoryScreen} options={{ title: 'Game History' }} />
        <Stack.Screen name='GameComplete' component={GameCompleteScreen} options={{ title: 'Game Complete' }} />
        <Stack.Screen name='EditScorecardTeam' component={EditScorecardTeamScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='EditScorecardScores' component={EditScorecardScoresScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='EditScorecardEnd' component={EditScorecardEndScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='EditScorecardCompetition' component={EditScorecardCompetitionScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='AddScorecardTeam' component={AddScorecardTeamScreen} options={{ title: 'New Game' }} />
        <Stack.Screen name='AddScorecardScores' component={AddScorecardScoresScreen} options={{ title: 'New Game' }} />
        <Stack.Screen name='AddScorecardEnd' component={AddScorecardEndScreen} options={{ title: 'New Game' }} />
        <Stack.Screen name='AddScorecardCompetition' component={AddScorecardCompetitionScreen} options={{ title: 'New Game' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  // Put in a stack navigator as well to allow navigation to the unindexed pages
}

export default App;