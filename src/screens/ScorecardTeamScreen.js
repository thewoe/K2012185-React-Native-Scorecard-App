import { useState, useEffect } from 'react';
import { ScrollView, View, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationButton from '../components/NavigationButton';

const ScorecardTeamScreen = ({navigation, route}) => {
    const { competitionName, dateTime, rinkNumber } = route.params;
    console.log(competitionName, dateTime, rinkNumber);

    // Below code required independent research, to dynmically create and manage player input fields on clicking a button
    const [team1Name, setTeam1Name] = useState('');
    const [team2Name, setTeam2Name] = useState('');
    const [team1Players, setTeam1Players] = useState([]);
    const [team2Players, setTeam2Players] = useState([]);
    const [team1PlayerID, setTeam1PlayerID] = useState(2);
    const [team1PlayerFields, setTeam1PlayerFields] = useState([{id: 1}]);
    const [team2PlayerID, setTeam2PlayerID] = useState(2);
    const [team2PlayerFields, setTeam2PlayerFields] = useState([{id: 1}]);
    const [displayTeam1AddNewPlayer, setDisplayTeam1AddNewPlayer] = useState(true);
    const [displayTeam2AddNewPlayer, setDisplayTeam2AddNewPlayer] = useState(true);

    const handleNewTeam1PlayerClick = () => {
        if (team1PlayerFields.length <= 3) {
            setTeam1PlayerFields([...team1PlayerFields, {
            id: team1PlayerID,
            }]);
            setTeam1PlayerID(team1PlayerID + 1);
        }
        else {
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
        else {
            setDisplayTeam2AddNewPlayer(false);
        }
    };

    const handleTeam1PlayerTextInput = (input, id) => {
        const playerExists = team1Players.find(player => player.id === id);
        if (playerExists) {
            const updatePlayers = team1Players.map(player => {
                if (player.id === id) {
                    console.log('Found it');
                    return { ...player, name: input }
                }
                return player;
            });
            setTeam1Players(updatePlayers);
        }
        else {
            console.log('new player');
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
                    console.log('Found it');
                    return { ...player, name: input }
                }
                return player;
            });
            setTeam2Players(updatePlayers);
        }
        else {
            console.log('new player');
            const newPlayer = {
                id: id,
                name: input
            }
            setTeam2Players([...team2Players, newPlayer]);
        }
    };

    return (
        <SafeAreaView>
            <ScrollView keyboardDismissMode='on-drag'>
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
                            { (item.id === 1) && <Text>This player is Team 1's skip</Text> }
                            <TextInput
                                style={styles.textInput}
                                placeholder='Type team 1 player name here'
                                value={team1Players[item.id]}
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
                            { (item.id === 1) && <Text>This player is Team 2's skip</Text> }
                            <TextInput
                                style={styles.textInput}
                                placeholder='Type team 2 player name here'
                                value={team2Players[item.id]}
                                onChangeText={input => handleTeam2PlayerTextInput(input, item.id)}
                            />
                        </View>
                    );
                })}
                { displayTeam2AddNewPlayer && <Button onPress={handleNewTeam2PlayerClick} title='Add another Team 2 player' /> }
                <NavigationButton color='blue' message='Cancel' screenName='Home' navigation={navigation} />
                <NavigationButton color='blue' message='Next' screenName='ScorecardEnd' navigation={navigation} data={{
                    competitionName: competitionName, 
                    dateTime: dateTime, 
                    rinkNumber: rinkNumber,
                    team1Name: team1Name,
                    team2Name: team2Name,
                    team1Players: team1Players,
                    team2Players: team2Players
                }} />
            </ScrollView>
        </SafeAreaView>
    );

    // const [team1NumberOfPlayers, setTeam1NumberOfPlayers] = useState(0);
    // const [team2NumberOfPlayers, setTeam2NumberOfPlayers] = useState(0);
    // const [team1Players, setTeam1Players] = useState([]);
    // const [team2Name, setTeam2Name] = useState('');
    // const [team2Players, setTeam2Players] = useState();
    // const [team1PlayerFields, setTeam1PlayerFields] = useState([]);

    // const addTeam1PlayerField = () => {
    //     // setTeam1PlayerFields(
    //     //     [...team1PlayerFields, {id: 'id', name: 'name'}]
    //     // );
    //     console.log('Player fields length' + team1PlayerFields.length);
    // };

    // useEffect(() => {addTeam1PlayerField()}, [team1PlayerFields < 5]);

    // const handlePlayer1Change = (playerId, playerName) => {
    //     setTeam1Players([{
    //         ...team1Players,
    //         [team1Players[playerId].name]: playerName
    //     }]);
    // };

    // const handlePlayer2Change = (playerId, playerName) => {
    //     setTeam2Players({
    //         ...team2Players,
    //         [team2Players[playerId].name]: playerName
    //     });
    // };

    // return (
    //     <View>
    //         <Text style={styles.textLabel}>Enter Team 1's Name:</Text>
    //         <TextInput
    //             style={styles.textInput}
    //             placeholder='Type Team 1 name here'
    //             value={team1Name}
    //             onChangeText={input => setTeam1Name(input)}
    //             autoFocus={true}
    //         />
    //         <Text style={styles.textLabel}>Enter Team 1's Players:</Text>
    //         <Button onPress={setTeam1PlayerFields([...team1PlayerFields, {id: 'id', name: 'name'}])} title='Add another player' />
    //         {team1PlayerFields.map((input, index) => {
    //             return (
    //                 <View key={index}>
    //                     <Text style={styles.textLabel}>{`Enter Player ${index}'s Name`}</Text>
    //                     { (index === 1) && <Text>This player is Team 1's skip</Text> }
    //                     <TextInput
    //                         style={styles.textInput}
    //                         placeholder='Type player name here'
    //                         value={setTeam1Players([index])}
    //                         onChangeText={input => handlePlayer1Change(input)}
    //                         autoFocus={true}
    //                     />
    //                 </View>
    //             );
    //         })}
    //     </View>
    // );
};

const styles = StyleSheet.create({});

export default ScorecardTeamScreen;