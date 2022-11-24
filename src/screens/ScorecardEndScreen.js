import { ScrollView, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext, useState, useEffect } from 'react';
import ItemContext from '../contexts/ItemContext';
import NavigationButton from '../components/NavigationButton';

const ScorecardEndScreen = ({navigation, route}) => {
  const { competitionName, dateTime, rinkNumber, team1Name, team2Name, team1Players, team2Players, image } = route.params;
  const { create } = useContext(ItemContext);
  const [receivedCompetitionName, setReceivedCompetitionName] = useState(competitionName);
  const [receivedDateTime, setReceivedDateTime] = useState(dateTime);
  const [receivedRinkNumber, setReceivedRinkNumber] = useState(rinkNumber);
  const [receivedTeam1Name, setReceivedTeam1Name] = useState(team1Name);
  const [receivedTeam2Name, setReceivedTeam2Name] = useState(team2Name);
  const [receivedTeam1Players, setReceivedTeam1Players] = useState(team1Players);
  const [receivedTeam2Players, setReceivedTeam2Players] = useState(team2Players);
  // Below code required independent research, to dynmically create and manage end input fields on clicking a button
  const [ends, setEnds] = useState([]);
  const [endID, setEndID] = useState(2);
  const [endFields, setEndFields] = useState([{end: 1}]);
  const [returnedImage, setReturnedImage] = useState(null);
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  const resetForm = () => {
    setEnds([]);
    setEndID(2);
    setEndFields([{end: 1}]);
    setTeam1Score(0);
    setTeam2Score(0);
  };

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
            team1Shots: ((parseInt(input) !== 'NaN') ? parseInt(input) : 0),
            team1Score: team1Score+((parseInt(input) !== 'NaN') ? parseInt(input) : 0),
            team2Shots: 0,
            team2Score: team2Score,
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
        team1Shots: ((parseInt(input) !== 'NaN') ? parseInt(input) : 0),
        team1Score: team1Score+((parseInt(input) !== 'NaN') ? parseInt(input) : 0),
        team2Shots: 0,
        team2Score: team2Score,
        imageUri: ''
      };
      setEnds([...ends, newEnd]);
    }
    setTeam1Score(team1Score + ((parseInt(input) !== 'NaN') ? parseInt(input) : 0));
  };

  const handleTeam2EndTextInput = (input, id) => {
    const endExists = ends.find(end => end.end === id);
    if (endExists) {
      const updateEnd = ends.map(end => {
        if (end.end === id) {
          return { 
            ...end,
            team1Shots: 0,
            team1Score: team1Score,
            team2Shots: ((parseInt(input) !== 'NaN') ? parseInt(input) : 0),
            team2Score: team2Score+((parseInt(input) !== 'NaN') ? parseInt(input) : 0),
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
        team1Score: team1Score,
        team2Shots: ((parseInt(input) !== 'NaN') ? parseInt(input) : 0),
        team2Score: team2Score+((parseInt(input) !== 'NaN') ? parseInt(input) : 0),
        imageUri: ''
      };
      setEnds([...ends, newEnd]);
    }
    setTeam2Score(team2Score + ((parseInt(input) !== 'NaN') ? parseInt(input) : 0));
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
                  <Text style={styles.textLabel}>{(ends.length > 0) && (item.end < ends.length) && ends[item.end-1].team1Score}</Text>
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
                  <Text style={styles.textLabel}>{(ends.length > 0) && (item.end < ends.length) && ends[item.end-1].team2Score}</Text>
                  <NavigationButton color='green' message='Take Picture' screenName='EndCamera' navigation={navigation} data={{end: item.end}} />
                </View>
            );
        })}
        <Button onPress={handleNewEndClick} title='Add another end' />
        <Button title='Clear Input' onPress={resetForm} />
        <Button title='Next' onPress={() => {
          const id = Math.floor(Math.random() * 99999);
          const match = { 
              dateTime: receivedDateTime,
              title: receivedCompetitionName,
              rinkNumber: receivedRinkNumber
          };
          const teams = {
              team1: {
                team1Name: receivedTeam1Name,
                players: receivedTeam1Players
              },
              team2: {
                team2Name: receivedTeam2Name,
                players: receivedTeam2Players
              },
              scores: ends,
              finalscore: {
                team1Score: ((ends.length > 0) ? ends[ends.length-1].team1Score.toString() : 'N/A'),
                team2Score: ((ends.length > 0) ? ends[ends.length-1].team2Score.toString() : 'N/A'),
                winner: ((ends.length > 0) ? ((ends[ends.length-1].team1Score > ends[ends.length-1].team2Score) ? "team1" : "team2") : 'N/A')
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