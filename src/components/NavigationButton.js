import { Button, StyleSheet } from 'react-native';

const NavigationButton = ({ color, screenName, navigation }) => {
    return (
        <Button 
            color={color}
            title={`Go to ${screenName}`}
            onPress={() => navigation.navigate(screenName)} 
        />
    );
}

const styles = StyleSheet.create({
    homeButton: {

    }
});

export default NavigationButton;