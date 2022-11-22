import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameCompleteScreen from '../screens/GameCompleteScreen';
import ScorecardCompetitionScreen from '../screens/ScorecardCompetitionScreen';
import ScorecardEndScreen from '../screens/ScorecardEndScreen';
import ScorecardScoresScreen from '../screens/ScorecardScoresScreen';
import ScorecardTeamScreen from '../screens/ScorecardTeamScreen';
import EndCameraScreen from '../screens/EndCameraScreen';
import EndPhotoScreen from '../screens/EndPhotoScreen';

// Below code required independent research, to create a nested navigator, i.e., a stack navigator for a screen indexed by the tab navigator

const Stack = createNativeStackNavigator();

const NewGameNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='ScorecardCompetition' screenOptions={{labelStyle: {fontSize: 11}, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
        <Stack.Screen name='GameComplete' component={GameCompleteScreen} options={{ title: 'Game Complete' }} />
        <Stack.Screen name='ScorecardCompetition' component={ScorecardCompetitionScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardEnd' component={ScorecardEndScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardScores' component={ScorecardScoresScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='ScorecardTeam' component={ScorecardTeamScreen} options={{ title: 'New Scorecard' }} />
        <Stack.Screen name='EndCamera' component={EndCameraScreen} options={{ title: 'Take End Picture' }} />
        <Stack.Screen name='EndPhoto' component={EndPhotoScreen} options={{ title: 'View End Picture' }} />
      </Stack.Navigator>
    );
};

export {NewGameNavigator};