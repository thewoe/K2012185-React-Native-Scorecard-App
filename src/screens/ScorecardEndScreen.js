import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const ScorecardEndScreen = () => {
  const [endFields, setEndFields] = useState([{
    end: 1, 
    team1Shots: 'team1Shots',
    team2Shots: 'team2Shots'
  }]);

  const handleAddEndClick = () => {
      setEndFields([...endFields, {
        end: endFields.length+1, 
        team1Shots: 'team1Shots',
        team2Shots: 'team2Shots'
      }]);
      console.log(endFields);
  };

  const handleEndText = (text) => {
    console.log('Click in text input box: ' + text);
  };

  return (
        <View>
            <Text style={styles.textLabel}>Enter Score</Text>
            <Button onPress={handleAddEndClick} title='Add another player' />
            {endFields.map((item) => {
                return (
                    <View key={item.end}>
                        <Text style={styles.textLabel}>{`Enter Player ${item.end}'s Name`}</Text>
                        { (item.end === 1) && <Text>This player is Team 1's skip</Text> }
                        <TextInput
                            style={styles.textInput}
                            placeholder='Type player name here'
                            value={'poop'}
                            onChangeText={input => handleEndText(input)}
                            autoFocus={true}
                        />
                    </View>
                );
            })}
        </View>
    );


  // const [player, setPlayer] = useState({
  //   firstName: 'Ranjani',
  //   lastName: 'Shettar',
  //   score: 10,
  // });
  // function handlePlusClick() {
  //   setPlayer({
  //     ...player,
  //     score: player.score + 1,
  //   });
  // }
  //   return (
  //     <View>
  //       <Button onPress={handlePlusClick} title='Incrememnt'/>
  //       <Text>{player.score}</Text>
  //     </View>
  //   );
};

const styles = StyleSheet.create({});

export default ScorecardEndScreen;