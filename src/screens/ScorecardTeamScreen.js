import { useState, useEffect } from 'react';
import { ScrollView, Text, TextInput, FlatList, Button, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationButton from '../components/NavigationButton';

const ScorecardTeamScreen = ({navigation, route}) => {
    const scorecard = route.params;

    // const competitionName = scorecard.match.title;
    // const dateTime = scorecard.match.dateTime;
    // const rinkNumber = scorecard.match.rinkNumber;
    const [team1Name, setTeam1Name] = useState('');
    const [team2Name, setTeam2Name] = useState('');
    const [team1Player1Name, setTeam1Player1Name] = useState('');
    const [team1Player2Name, setTeam1Player2Name] = useState('');
    const [team1Player3Name, setTeam1Player3Name] = useState('');
    const [team1Player4Name, setTeam1Player4Name] = useState('');
    const [team2Player1Name, setTeam2Player1Name] = useState('');
    const [team2Player2Name, setTeam2Player2Name] = useState('');
    const [team2Player3Name, setTeam2Player3Name] = useState('');
    const [team2Player4Name, setTeam2Player4Name] = useState('');

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
                <Text style={styles.textLabel}>Enter Team 1's Player 1 Name:</Text>
                <Text>This player is Team 1's skip</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 1 player name here'
                    value={team1Player1Name}
                    onChangeText={input => setTeam1Player1Name(input)}
                />
                <Text style={styles.textLabel}>Enter Team 1's Player 2 Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 1 player name here'
                    value={team1Player2Name}
                    onChangeText={input => setTeam1Player2Name(input)}
                />
                <Text style={styles.textLabel}>Enter Team 1's Player 3 Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 1 player name here'
                    value={team1Player3Name}
                    onChangeText={input => setTeam1Player3Name(input)}
                />
                <Text style={styles.textLabel}>Enter Team 2's Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 2 name here'
                    value={team2Name}
                    onChangeText={input => setTeam2Name(input)}
                    autoFocus={true}
                />
                <Text style={styles.textLabel}>Enter Team 1's Player 4 Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 1 player name here'
                    value={team1Player4Name}
                    onChangeText={input => setTeam1Player4Name(input)}
                />
                <Text style={styles.textLabel}>Enter Team 2's Player 1 Name:</Text>
                <Text>This player is Team 2's skip</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 2 player name here'
                    value={team2Player1Name}
                    onChangeText={input => setTeam2Player1Name(input)}
                />
                <Text style={styles.textLabel}>Enter Team 2's Player 2 Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 2 player name here'
                    value={team2Player2Name}
                    onChangeText={input => setTeam2Player2Name(input)}
                />
                <Text style={styles.textLabel}>Enter Team 2's Player 3 Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 2 player name here'
                    value={team2Player3Name}
                    onChangeText={input => setTeam2Player3Name(input)}
                />
                <Text style={styles.textLabel}>Enter Team 2's Player 4 Name:</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Type Team 2 player name here'
                    value={team2Player4Name}
                    onChangeText={input => setTeam2Player4Name(input)}
                />
                <NavigationButton color='blue' message='Cancel' screenName='Home' navigation={navigation} />
                <NavigationButton color='blue' message='Next' screenName='ScorecardEnd' navigation={navigation} data={{
                    match: scorecard,
                    team1Name: team1Name,
                    team2Name: team2Name,
                    team1Player1Name: team1Player1Name,
                    team1Player2Name: team1Player2Name,
                    team1Player3Name: team1Player3Name,
                    team1Player4Name: team1Player4Name,
                    team2Player1Name: team2Player1Name,
                    team2Player2Name: team2Player2Name,
                    team2Player3Name: team2Player3Name,
                    team2Player4Name: team2Player4Name
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