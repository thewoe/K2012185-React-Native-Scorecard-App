import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';

const ScorecardTeamScreen = ({navigation, route}) => {
    const scorecard = route.params;

    // const competitionName = scorecard.match.title;
    // const dateTime = scorecard.match.dateTime;
    // const rinkNumber = scorecard.match.rinkNumber;
    const [team1Name, setTeam1Name] = useState('');
    const [team1NumberOfPlayers, setTeam1NumberOfPlayers] = useState(0);
    const [team2NumberOfPlayers, setTeam2NumberOfPlayers] = useState(0);
    const [team1Players, setTeam1Players] = useState([]);
    const [team2Name, setTeam2Name] = useState('');
    const [team2Players, setTeam2Players] = useState();
    const [team1PlayerFields, setTeam1PlayerFields] = useState([]);

    const addTeam1PlayerField = () => {
        // setTeam1PlayerFields(
        //     [...team1PlayerFields, {id: 'id', name: 'name'}]
        // );
        console.log('Player fields length' + team1PlayerFields.length);
    };

    useEffect(() => {addTeam1PlayerField()}, [team1PlayerFields < 5]);

    const handlePlayer1Change = (playerId, playerName) => {
        setTeam1Players([{
            ...team1Players,
            [team1Players[playerId].name]: playerName
        }]);
    };

    const handlePlayer2Change = (playerId, playerName) => {
        setTeam2Players({
            ...team2Players,
            [team2Players[playerId].name]: playerName
        });
    };

    return (
        <View>
            <Text style={styles.textLabel}>Enter Team 1's Name:</Text>
            <TextInput
                style={styles.textInput}
                placeholder='Type Team 1 name here'
                value={team1Name}
                onChangeText={input => setTeam1Name(input)}
                autoFocus={true}
            />
            <Text style={styles.textLabel}>Enter Team 1's Players:</Text>
            <Button onPress={setTeam1PlayerFields([...team1PlayerFields, {id: 'id', name: 'name'}])} title='Add another player' />
            {team1PlayerFields.map((input, index) => {
                return (
                    <View key={index}>
                        <Text style={styles.textLabel}>{`Enter Player ${index}'s Name`}</Text>
                        { (index === 1) && <Text>This player is Team 1's skip</Text> }
                        <TextInput
                            style={styles.textInput}
                            placeholder='Type player name here'
                            value={setTeam1Players([index])}
                            onChangeText={input => handlePlayer1Change(input)}
                            autoFocus={true}
                        />
                    </View>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({});

export default ScorecardTeamScreen;