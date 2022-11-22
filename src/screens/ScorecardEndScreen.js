import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useState, useEffect } from 'react';
import ItemContext from '../contexts/ItemContext';
import NavigationButton from '../components/NavigationButton';

const ScorecardEndScreen = ({navigation, route}) => {
  const { competitionName, dateTime, rinkNumber, team1Name, team2Name, team1Players, team2Players, image } = route.params;
  console.log(competitionName, dateTime, rinkNumber, team1Name, team2Name, team1Players, team2Players);
  const { create } = useContext(ItemContext);

  // Below code required independent research, to dynmically create and manage end input fields on clicking a button
  const [ends, setEnds] = useState([]);
  const [endID, setEndID] = useState(2);
  const [endFields, setEndFields] = useState([{end: 1}]);
  const [returnedImage, setReturnedImage] = useState(null);

  const handleReturnedImage = () => {
    if (image) {
      const addImage = ends.map(end => {
        if (end.end === image.end) {
          return { 
            ...end,
            imageUri: image.uri
          }
        }
        return end;
      });
      setEnds(addImage);
    }
  };

  useEffect(() => handleReturnedImage(), [image]);

  const handleNewEndClick = () => {
    setEndFields([...endFields, {
      end: endID
    }]);
    setEndID(endID + 1);

  };

  const handleTeam1EndTextInput = (input, id) => {
    const endExists = ends.find(end => end.end === id);
    if (endExists) {
      const updateEnd = ends.map(end => {
        if (end.end === id) {
          return { 
            ...end,
            team1Shots: input,
            team1Score: calculateTeam1Score(),
            team2Shots: 0,
            team2Score: calculateTeam2Score(),
            imageUri: ''
          }
        }
        return end;
      });
      setEnds(updateEnd);
    }
    else {
      const newEnd = {
        end: id,
        team1Shots: input,
        team1Score: calculateTeam1Score(),
        team2Shots: 0,
        team2Score: calculateTeam2Score(),
        imageUri: ''
      };
      setEnds([...ends, newEnd]);
    }
  };

  const handleTeam2EndTextInput = (input, id) => {
    const endExists = ends.find(end => end.end === id);
    if (endExists) {
      const updateEnd = ends.map(end => {
        if (end.end === id) {
          return { 
            ...end,
            team1Shots: 0,
            team1Score: calculateTeam1Score(parseInt(input)),
            team2Shots: parseInt(input),
            team2Score: calculateTeam2Score(0),
            imageUri: ''
          }
        }
        return end;
      });
      setEnds(updateEnd);
    }
    else {
      const newEnd = {
        end: id,
        team1Shots: 0,
        team1Score: calculateTeam1Score(0),
        team2Shots: input,
        team2Score: calculateTeam2Score(parseInt(input)),
        imageUri: ''
      };
      setEnds([...ends, newEnd]);
    }
  };

  const calculateTeam1Score = (shots) => {
    if (ends.length === 0) return 0;
    return parseInt((ends.reduce((totalScore, end) => totalScore + end.team1Shots) + shots));
  };

  const calculateTeam2Score = (shots) => {
    if (ends.length === 0) return 0;
    return parseInt((ends.reduce((totalScore, end) => totalScore + end.team2Shots) + shots));
  };

  return (
    <SafeAreaView>
      <ScrollView keyboardDismissMode='on-drag'>
        {endFields.map((item) => {
            return (
                <View key={item.end}>
                  <Text style={styles.textLabel}>{`End ${item.end}`}</Text>
                  <Text style={styles.textLabel}>{team1Name}</Text>
                  <Text style={styles.textLabel}>SHOTS</Text>
                  <TextInput
                    keyboardType='number-pad'
                    style={styles.textInput}
                    placeholder={`${team1Name} shots`}
                    value={ends[item.end]}
                    onChangeText={input => handleTeam1EndTextInput(input, item.end)}
                  />
                  <Text style={styles.textLabel}>TOTAL</Text>
                  {/* <Text style={styles.textLabel}>{(item.end < 2) ? 0 : ends[item.end].team1Score}</Text> */}
                  <Text style={styles.textLabel}>{team2Name}</Text>
                  <Text style={styles.textLabel}>SHOTS</Text>
                  <TextInput
                    keyboardType='number-pad'
                    style={styles.textInput}
                    placeholder={`${team2Name} shots`}
                    value={ends[item.end]}
                    onChangeText={input => handleTeam2EndTextInput(input, item.end)}
                  />
                  <Text style={styles.textLabel}>TOTAL</Text>
                  {/* <Text style={styles.textLabel}>{(item.end < 2) ? 0 : ends[item.end].team2Score}</Text> */}
                  <NavigationButton color='green' message='Take Picture' screenName='EndCamera' navigation={navigation} data={{end: item.end}} />
                </View>
            );
        })}
        <Button onPress={handleNewEndClick} title='Add another end' />
        <NavigationButton color='blue' message='Cancel' screenName='Home' navigation={navigation} />
        <Button title='Next' onPress={() => {
          console.log('THIS IS WHAT IT LOOKS LIKE: ' + ends[ends.length-1].team1Score.toString());
          console.log([ends[ends.length-1].team1Score].toString());
          const id = Math.floor(Math.random() * 99999);
          const match = { 
              dateTime: dateTime,
              title: competitionName,
              rinkNumber: rinkNumber
          };
          const teams = {
              team1: {
                team1Name: team1Name,
                players: team1Players
              },
              team2: {
                team2Name: team2Name,
                players: team2Players
              },
              scores: ends,
              finalscore: {
                team1Score: ends[ends.length-1].team1Score.toString(),
                team2Score: ends[ends.length-1].team2Score.toString(),
                winner: (ends[ends.length-1].team1Score > ends[ends.length-1].team2Score) ? "team1" : "team2"
              }
          };
          create(id, match, teams, navigation.navigate('GameComplete', {id: id}));
        }} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default ScorecardEndScreen;