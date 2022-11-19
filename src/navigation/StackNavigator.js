import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import GameHistory from '../screens/GameHistoryScreen';
import AddScorecardCompetitionScreen from '../screens/AddScorecardCompetitionScreen';
import AddScorecardScoresScreen from '../screens/AddScorecardScoresScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{labelStyle: {fontSize: 11}, activeTintColor: 'blue', inactiveTintColor: 'black'}}>
        <Tab.Screen name='Home' component={HomeScreen} options={{ title: 'Home', tabBarLabel: 'Home', tabBarIcon: () => (<MaterialIcons name='home' size={40} color='blue' />) }} />
        <Tab.Screen name='GameHistoryNavigator' component={GameHistory} options={{ title: 'Game History', tabBarLabel: 'Game History', tabBarIcon: () => (<AntDesign name='bars' size={40} color='black' />)}} />
        <Tab.Screen name='NewGame' component={AddScorecardCompetitionScreen} options={{ title: 'New Game', tabBarLabel: 'New Game', tabBarIcon: () => (<AntDesign name='plus' size={40} color='black' />)}} />
        <Tab.Screen name='CurrentGame' component={AddScorecardScoresScreen} options={{ title: 'Current Game', tabBarLabel: 'Current Game', tabBarIcon: () => (<Feather name='play' size={35} color='black' />)}} />
        <Tab.Screen name='Settings' component={SettingsScreen} options={{ title: 'Settings', tabBarLabel: 'Settings', tabBarIcon: () => (<Ionicons name='settings-outline' size={35} color='black' />)}} />
      </Tab.Navigator>
    );
};

export {TabNavigator};