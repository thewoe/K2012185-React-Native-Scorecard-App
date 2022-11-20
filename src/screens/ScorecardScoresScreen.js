import { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ScorecardScoresScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
      <Button onClick={() => {setCounter(counter + 1)}} title='Increment' />
      <Text>{`Count: ${counter}`}</Text>
        </View>
    );
};

export default ScorecardScoresScreen;