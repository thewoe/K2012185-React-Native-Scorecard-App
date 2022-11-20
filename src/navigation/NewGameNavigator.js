import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameCompleteScreen from '../screens/GameCompleteScreen';
import ScorecardCompetitionScreen from '../screens/ScorecardCompetitionScreen';
import ScorecardEndScreen from '../screens/ScorecardEndScreen';
import ScorecardScoresScreen from '../screens/ScorecardScoresScreen';
import ScorecardTeamScreen from '../screens/ScorecardTeamScreen';

const Stack = createNativeStackNavigator();

const NewGameNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='ScorecardCompetition' screenOptions={{labelStyle: {fontSize: 11}, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
        <Stack.Screen name='GameComplete' component={GameCompleteScreen} options={{ title: 'Game Complete' }} />
        <Stack.Screen name='ScorecardCompetition' component={ScorecardCompetitionScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardEnd' component={ScorecardEndScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardScores' component={ScorecardScoresScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardTeam' component={ScorecardTeamScreen} options={{ title: 'New Scorecard' }} />
      </Stack.Navigator>
    );
};

export {NewGameNavigator};