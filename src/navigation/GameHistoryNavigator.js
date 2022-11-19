import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameHistoryScreen from '../screens/GameHistoryScreen';
import GameCompleteScreen from '../screens/GameCompleteScreen';
import ScorecardCompetitionScreen from '../screens/ScorecardCompetitionScreen';
import ScorecardEndScreen from '../screens/ScorecardEndScreen';
import ScorecardScoresScreen from '../screens/ScorecardScoresScreen';
import ScorecardTeamScreen from '../screens/ScorecardTeamScreen';

const Stack = createNativeStackNavigator();

const GameHistoryNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='GameHistory' screenOptions={{labelStyle: {fontSize: 11}, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
        <Stack.Screen name='GameHistory' component={GameHistoryScreen} options={{ title: 'Game History' }} />
        <Stack.Screen name='GameComplete' component={GameCompleteScreen} options={{ title: 'Game Complete' }} />
        <Stack.Screen name='ScorecardCompetitionScreen' component={ScorecardCompetitionScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='ScorecardEndScreen' component={ScorecardEndScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='ScorecardScoresScreen' component={ScorecardScoresScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='ScorecardTeamScreen' component={ScorecardTeamScreen} options={{ title: 'Edit Scorecard' }} />
      </Stack.Navigator>
    );
};

export {GameHistoryNavigator};