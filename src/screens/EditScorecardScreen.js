import { useContext, useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionBreak from '../components/SectionBreak';
import ItemContext from '../contexts/ItemContext';

const EditScorecardScreen = ({ route, navigation }) => {
    const { state, update } = useContext(ItemContext);
    const { id, image } = route.params;
    const foundItem = state.filter(game => {
        if (game.id === id) return game;
    });
    const item = foundItem[0];

    const [competitionName, setCompetitionName] = useState(item.match.title);
    const [dateTime, setDateTime] = useState(new Date(item.match.dateTime));
    const [rinkNumber, setRinkNumber] = useState(item.match.rinkNumber);
    const [team1Name, setTeam1Name] = useState(item.teams.team1.team1Name);
    const [team2Name, setTeam2Name] = useState(item.teams.team2.team2Name);
    const [team1Players, setTeam1Players] = useState(item.teams.team1.players);
    const [team2Players, setTeam2Players] = useState(item.teams.team2.players);
    const [team1PlayerID, setTeam1PlayerID] = useState(item.teams.team1.players.length+1);
    const [team1PlayerFields, setTeam1PlayerFields] = useState(item.teams.team1.players);
    const [team2PlayerID, setTeam2PlayerID] = useState(item.teams.team2.players.length+1);
    const [team2PlayerFields, setTeam2PlayerFields] = useState(item.teams.team2.players);
    const [displayTeam1AddNewPlayer, setDisplayTeam1AddNewPlayer] = useState((item.teams.team1.players.length < 4) ? true : false);
    const [displayTeam2AddNewPlayer, setDisplayTeam2AddNewPlayer] = useState((item.teams.team2.players.length < 4) ? true : false);
    const [ends, setEnds] = useState(item.teams.scores);
    const [endID, setEndID] = useState(item.teams.scores.length+1);
    const [endFields, setEndFields] = useState(item.teams.scores);
    const [team1Score, setTeam1Score] = useState(0);
    const [team2Score, setTeam2Score] = useState(0);

    const updateEndScores = () => {
        let accumulativeTeam1Score = 0;
        let accumulativeTeam2Score = 0;
        const updateScores = ends.map(end => {
            accumulativeTeam1Score += end.team1Shots;
            accumulativeTeam2Score += end.team2Shots;
            return { 
                ...end, 
                team1Score: accumulativeTeam1Score,
                team2Score: accumulativeTeam2Score
            }
        });
        setEnds(updateScores);
    };
    
    // Below code required independent research, to create a cross-platform datetime picker to select the match date and time
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') setShow(false);
        setShow(true);
        setMode(currentMode);
    };
    const showDatepicker = () => showMode('date');
    const showTimepicker = () => showMode('time');
    const hideMode = () => setShow(false);

    const handleNewTeam1PlayerClick = () => {
        if (team1PlayerFields.length <= 3) {
            setTeam1PlayerFields([...team1PlayerFields, {
            id: team1PlayerID,
            }]);
            setTeam1PlayerID(team1PlayerID + 1);
        }
        if (team1PlayerFields.length === 3) {
            setDisplayTeam1AddNewPlayer(false);
        }
    };

    const handleNewTeam2PlayerClick = () => {
        if (team2PlayerFields.length <= 3) {
            setTeam2PlayerFields([...team2PlayerFields, {
            id: team2PlayerID,
            }]);
            setTeam2PlayerID(team2PlayerID + 1);
        }
        if (team2PlayerFields.length === 3) {
            setDisplayTeam2AddNewPlayer(false);
        }
    };

    const handleTeam1PlayerTextInput = (input, id) => {
        const playerExists = team1Players.find(player => player.id === id);
        if (playerExists) {
            const updatePlayers = team1Players.map(player => {
                if (player.id === id) {
                    return { ...player, name: input }
                }
                return player;
            });
            setTeam1Players(updatePlayers);
        }
        else {
            const newPlayer = {
                id: id,
                name: input
            }
            setTeam1Players([...team1Players, newPlayer]);
        }
    };

    const handleTeam2PlayerTextInput = (input, id) => {
        const playerExists = team2Players.find(player => player.id === id);
        if (playerExists) {
            const updatePlayers = team2Players.map(player => {
                if (player.id === id) {
                    return { ...player, name: input }
                }
                return player;
            });
            setTeam2Players(updatePlayers);
        }
        else {
            const newPlayer = {
                id: id,
                name: input
            }
            setTeam2Players([...team2Players, newPlayer]);
        }
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
        //updateEndScores();
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
        //updateEndScores();
      };
    
    return (
        <SafeAreaView>
            <ScrollView keyboardDismissMode='on-drag'>
            <Text style={styles.header}>Edit Scorecard</Text>
                <SectionBreak headerTitle='Competition' />
                <Text style={styles.textLabel}>Enter the competition name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type competition name here'
                    value={competitionName}
                    onChangeText={input => setCompetitionName(input)}
                    autoFocus={true}
                />
                <Text style={styles.textLabel}>Select the competition date and time</Text>
                <Button onPress={showDatepicker} title='Click to select date' />
                <Button onPress={showTimepicker} title='Click to select time' />
                {show && (
                    <DateTimePicker
                        display='spinner'
                        value={dateTime}
                        mode={mode}
                        onChange={(event, selectedDate) => {
                            setDateTime(selectedDate);
                        }
                        }
                    />
                )}
                { show && (mode === 'date') && <Button onPress={hideMode} title='Select Date' /> }
                { show && (mode === 'time') && <Button onPress={hideMode} title='Select Time' /> }
                <Text style={styles.textLabel}>Enter the rink number</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='number-pad'
                    placeholder='Type rink number here'
                    value={rinkNumber}
                    onChangeText={input => setRinkNumber(input)}
                />
                <SectionBreak headerTitle='Teams' />
                <Text style={styles.textLabel}>Enter Team 1's Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 1 name here'
                    value={team1Name}
                    onChangeText={input => setTeam1Name(input)}
                    autoFocus={true}
                />
                {team1PlayerFields.map((item) =>{
                    return (
                        <View key={item.id}>
                            <Text style={styles.textLabel}>{`Enter Player ${item.id}'s Name`}</Text>
                            { (item.id === 1) && <Text style={styles.skip}>This player is Team 1's skip</Text> }
                            <TextInput
                                style={styles.textInput}
                                placeholder='Type team 1 player name here'
                                value={team1Players[item.id-1].name}
                                onChangeText={input => handleTeam1PlayerTextInput(input, item.id)}
                            />
                        </View>
                    );
                })}
                { displayTeam1AddNewPlayer && <Button onPress={handleNewTeam1PlayerClick} title='Add another Team 1 player' /> }
                <Text style={styles.textLabel}>Enter Team 2's Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 2 name here'
                    value={team2Name}
                    onChangeText={input => setTeam2Name(input)}
                />
                {team2PlayerFields.map((item) =>{
                    return (
                        <View key={item.id}>
                            <Text style={styles.textLabel}>{`Enter Player ${item.id}'s Name`}</Text>
                            { (item.id === 1) && <Text style={styles.skip}>This player is Team 2's skip</Text> }
                            <TextInput
                                style={styles.textInput}
                                placeholder='Type team 2 player name here'
                                value={team2Players[item.id-1].name}
                                onChangeText={input => handleTeam2PlayerTextInput(input, item.id)}
                            />
                        </View>
                    );
                })}
                { displayTeam2AddNewPlayer && <Button onPress={handleNewTeam2PlayerClick} title='Add another Team 2 player' /> }
                <SectionBreak headerTitle='Ends' />
                {endFields.map((item) => {
                        return (
                            <View key={item.end}>
                            <Text style={styles.textLabel}>{`End ${item.end}`}</Text>
                            <Text style={styles.textLabel}>{team1Name}</Text>
                            <Text style={styles.textLabel}>SHOTS</Text>
                            <TextInput
                                keyboardType='number-pad'
                                style={styles.textInput}
                                placeholder={ends[item.end-1].team1Shots.toString()}
                                value={ends[item.end-1].team1Shots}
                                onChangeText={input => handleTeam1EndTextInput(input, item.end)}
                            />
                            <Text style={styles.textLabel}>{team2Name}</Text>
                            <Text style={styles.textLabel}>SHOTS</Text>
                            <TextInput
                                keyboardType='number-pad'
                                style={styles.textInput}
                                placeholder={ends[item.end-1].team2Shots.toString()}
                                value={ends[item.end-1].team2Shots}
                                onChangeText={input => handleTeam2EndTextInput(input, item.end)}
                            />
                            </View>
                        );
                    })}
                <Button onPress={handleNewEndClick} title='Add another end' />
                <Button onPress={updateEndScores} title='Update end scores' />
                <SectionBreak headerTitle='Save Changes' />
                <Button title='Save Changes' onPress={() => {
                    updateEndScores();
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
                            team1Score: ((ends.length > 0) ? ends[ends.length-1].team1Score.toString() : 'N/A'),
                            team2Score: ((ends.length > 0) ? ends[ends.length-1].team2Score.toString() : 'N/A'),
                            winner: ((ends.length > 0) ? ((ends[ends.length-1].team1Score > ends[ends.length-1].team2Score) ? "team1" : "team2") : 'N/A')
                        }
                    };
                    update(id, match, teams, navigation.navigate('GameComplete', {id: id}));
            }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textLabel: {
        margin: 10,
        fontWeight: 'bold',
        fontSize: 20
    },
    textInput: {
        marginTop: 0,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        fontSize: 20,
        borderWidth: 1
    },
    skip: {
        margin: 10,
        marginTop: 0,
        fontSize: 18
    }
});

export default EditScorecardScreen;