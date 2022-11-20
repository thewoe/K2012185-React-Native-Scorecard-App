import { Button, StyleSheet } from 'react-native';

const NavigationButton = ({ color, message, screenName, navigation, data=null }) => {
    return (
        <Button 
            color={color}
            title={message}
            onPress={() => navigation.navigate(screenName, data)}
        />
    );
}

const styles = StyleSheet.create({
    homeButton: {

    }
});

export default NavigationButton;