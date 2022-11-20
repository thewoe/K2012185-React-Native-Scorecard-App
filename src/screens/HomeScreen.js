import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationButton from '../components/NavigationButton';

const HomeScreen = ({navigation}) => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.title}>Bowls Scorecard</Text>
                <Text style={styles.subtitle}>Kingston Bowls Club</Text>
                <Text style={styles.welcomeMessage}>Welcome to the Bowls Scorecard. Would you like to?</Text>
                <NavigationButton color='green' message='Go to Game History' screenName='GameHistory' navigation={navigation} />
                <NavigationButton color='green' message='Go to New Game' screenName='NewGame' navigation={navigation} />
                <NavigationButton color='green' message='Go to Current Game' screenName='CurrentGame' navigation={navigation} />
                <NavigationButton color='green' message='Go to Test' screenName='ScorecardEndScreen' navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10
    }
});

export default HomeScreen;