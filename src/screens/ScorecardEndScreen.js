import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import NavigationButton from '../components/NavigationButton';

const ScorecardEndScreen = ({navigation, route}) => {
  const scorecard = route.params;
  console.log(scorecard.team1Name);
  const team1Name = scorecard.team1Name;
  const team2Name = scorecard.team2Name;

  const [endFields, setEndFields] = useState([{
    end: 1, 
    team1Shots: 0,
    team2Shots: 0
  }]);
  const [ends, setEnds] = useState([]);
  const [team1Shots, setTeam1Shots] = useState(0);
  const [team2Shots, setTeam2Shots] = useState(0);

  const handleNewEndClick = () => {
      setEndFields([...endFields, {
        end: endFields.length+1, 
        team1Shots: 0,
        team2Shots: 0
      }]);
      console.log(ends);
  };

  const calculateTeam1Score = () => {
    if (ends.length === 0) return 0;
    return ends.reduce((totalScore, end) => totalScore + end.team1Shots);
  };

  const calculateTeam2Score = () => {
    if (ends.length === 0) return 0;
    return ends.reduce((totalScore, end) => totalScore + end.team2Shots);
  };

  const handleEndTextInput = (end, input, team) => {
    if (team === 'team1') {
      setTeam1Shots(input);
      setTeam2Shots(0);
    }
    if (team === 'team2') {
      setTeam1Shots(0);
      setTeam2Shots(input);
    }
    if (ends.indexOf(end) === -1) {
      const newEnd = {
        end: end,
        team1Shots: team1Shots,
        team1Score: calculateTeam1Score(),
        team2Shots: team2Shots,
        team2Score: calculateTeam2Score(),
        imageUri: ''
      }
      setEnds([...ends, newEnd]);
    }
    else {
      const updateEnd = {
        end: end,
        team1Shots: team1Shots,
        team1Score: calculateTeam1Score(),
        team2Shots: team2Shots,
        team2Score: calculateTeam2Score(),
        imageUri: ''
      }
      setEnds([...ends, ends[end] = updateEnd]);
    }
    setTeam1Shots(0);
    setTeam2Shots(0);
  };

  // const handleEndTextInput = (end, input, team) => {
  //   if (team === 'team1') {
  //     setTeam1Shots(input);
  //     setTeam2Shots(0);
  //   }
  //   if (team === 'team2') {
  //     setTeam1Shots(0);
  //     setTeam2Shots(input);
  //   }
  // }

  return (
        <ScrollView>
            <Text style={styles.textLabel}>Enter Score</Text>
            <Button onPress={handleNewEndClick} title='Add another player' />
            {endFields.map((item) => {
                return (
                    <View key={item.end}>
                      <Text style={styles.textLabel}>{`End ${item.end}`}</Text>
                      <Text style={styles.textLabel}>{team1Name}</Text>
                      <Text style={styles.textLabel}>SHOTS</Text>
                      <TextInput
                        editable={true}
                        keyboardType='number-pad'
                        style={styles.textInput}
                        placeholder={`${team1Name} shots`}
                        value={team1Shots.toString()}
                        onChangeText={input => handleEndTextInput(item.end, input, 'team1')}
                        autoFocus={true}
                      />
                      <Text style={styles.textLabel}>TOTAL</Text>
                      {/* <Text style={styles.textLabel}>{(item.end < 3) ? 0 : ends[item.end-1].team1Score}</Text> */}
                      <Text style={styles.textLabel}>{team2Name}</Text>
                      <Text style={styles.textLabel}>SHOTS</Text>
                      <TextInput
                        editable={true}
                        keyboardType='number-pad'
                        style={styles.textInput}
                        placeholder={`${team2Name} shots`}
                        value={team2Shots.toString()}
                        onChangeText={input => handleEndTextInput(item.end, input, 'team2')}
                        autoFocus={true}
                      />
                      <Text style={styles.textLabel}>TOTAL</Text>
                      {/* <Text style={styles.textLabel}>{(item.end <3) ? 0 : ends[item.end-1].team2Score}</Text> */}
                      <NavigationButton color='green' message='Take Picture' screenName='EndCamera' navigation={navigation} />
                    </View>
                );
            })}
            <NavigationButton color='blue' message='Cancel' screenName='Home' navigation={navigation} />
            <NavigationButton color='blue' message='Next' screenName='GameComplete' navigation={navigation} data={{
                item: scorecard
            }} />
        </ScrollView>
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