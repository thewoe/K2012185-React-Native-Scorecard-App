import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameCompleteScreen from '../screens/GameCompleteScreen';
import ScorecardCompetitionScreen from '../screens/ScorecardCompetitionScreen';
import ScorecardEndScreen from '../screens/ScorecardEndScreen';
import ScorecardScoresScreen from '../screens/ScorecardScoresScreen';
import ScorecardTeamScreen from '../screens/ScorecardTeamScreen';

const Stack = createNativeStackNavigator();

const NewGameNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='ScorecardCompetitionScreen' screenOptions={{labelStyle: {fontSize: 11}, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
        <Stack.Screen name='GameComplete' component={GameCompleteScreen} options={{ title: 'Game Complete' }} />
        <Stack.Screen name='ScorecardCompetitionScreen' component={ScorecardCompetitionScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardEndScreen' component={ScorecardEndScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardScoresScreen' component={ScorecardScoresScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardTeamScreen' component={ScorecardTeamScreen} options={{ title: 'New Scorecard' }} />
      </Stack.Navigator>
    );
};

export {NewGameNavigator};