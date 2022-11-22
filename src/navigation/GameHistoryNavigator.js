import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameHistoryScreen from '../screens/GameHistoryScreen';
import GameCompleteScreen from '../screens/GameCompleteScreen';
import ScorecardCompetitionScreen from '../screens/ScorecardCompetitionScreen';
import ScorecardEndScreen from '../screens/ScorecardEndScreen';
import ScorecardScoresScreen from '../screens/ScorecardScoresScreen';
import ScorecardTeamScreen from '../screens/ScorecardTeamScreen';
import EndCameraScreen from '../screens/EndCameraScreen';
import EndPhotoScreen from '../screens/EndPhotoScreen';
import ViewEndPhotoScreen from '../screens/ViewEndPhotoScreen';

// Below code required independent research, to create a nested navigator, i.e., a stack navigator for a screen indexed by the tab navigator

const Stack = createNativeStackNavigator();

const GameHistoryNavigator = () => {
    return (
      <Stack.Navigator initialRouteName='GameHistoryMain' screenOptions={{labelStyle: {fontSize: 11}, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
        <Stack.Screen name='GameHistoryMain' component={GameHistoryScreen} options={{ title: 'Game History' }} />
        <Stack.Screen name='GameComplete' component={GameCompleteScreen} options={{ title: 'Game Complete' }} />
        <Stack.Screen name='ScorecardCompetition' component={ScorecardCompetitionScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='ScorecardEnd' component={ScorecardEndScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='ScorecardScores' component={ScorecardScoresScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='ScorecardTeam' component={ScorecardTeamScreen} options={{ title: 'Edit Scorecard' }} />
        <Stack.Screen name='EndCamera' component={EndCameraScreen} options={{ title: 'Take End Picture' }} />
        <Stack.Screen name='EndPhoto' component={EndPhotoScreen} options={{ title: 'View End Picture' }} />
        <Stack.Screen name='ViewEndPhoto' component={ViewEndPhotoScreen} options={{ title: 'View End Picture' }} />
      </Stack.Navigator>
    );
};

export {GameHistoryNavigator};