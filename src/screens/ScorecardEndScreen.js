import { View, Text, Button } from 'react-native';
import { useState } from 'react';

const ScorecardEndScreen = () => {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });
  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }
    return (
      <View>
        <Button onPress={handlePlusClick} title='Incrememnt'/>
        <Text>{player.score}</Text>
      </View>
    );
};

export default ScorecardEndScreen;