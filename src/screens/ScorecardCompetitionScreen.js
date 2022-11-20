import { useState } from 'react';
import { ScrollView, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import NavigationButton from '../components/NavigationButton';

const ScorecardCompetitionScreen = ({navigation}) => {
    const [competitionName, setCompetitionName] = useState('');
    const [dateTime, setDateTime] = useState(new Date());
    const [rinkNumber, setRinkNumber] = useState(0);
    const [team1NumberOfPlayers, setTeam1NumberOfPlayers] = useState(0);
    const [team2NumberOfPlayers, setTeam2NumberOfPlayers] = useState(0);
    const [numberOfEnds, setNumberOfEnds] = useState(0);

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

    return (
        <SafeAreaView>
            <ScrollView keyboardDismissMode='on-drag'>
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
                    keyboardType='numeric'
                    placeholder='Type rink number here'
                    value={rinkNumber}
                    onChangeText={input => setRinkNumber(input)}
                />
                <Text style={styles.textLabel}>Select the number of players in Team 1</Text>
                <Picker
                    selectedValue={team1NumberOfPlayers}
                    onValueChange={(value, index) =>
                    setTeam1NumberOfPlayers(value)
                }>
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                </Picker>
                <Text style={styles.textLabel}>Select the number of players in Team 2</Text>
                <Picker
                    selectedValue={team2NumberOfPlayers}
                    onValueChange={(value, index) =>
                    setTeam2NumberOfPlayers(value)
                }>
                    <Picker.Item label="1" value={1} />
                    <Picker.Item label="2" value={2} />
                    <Picker.Item label="3" value={3} />
                    <Picker.Item label="4" value={4} />
                </Picker>
                <Text style={styles.textLabel}>Enter the number of ends</Text>
                <TextInput
                    style={styles.textInput}
                    keyboardType='numeric'
                    placeholder='Type number of ends here'
                    value={numberOfEnds}
                    onChangeText={input => setNumberOfEnds(input)}
                />
                <NavigationButton color='blue' message='Cancel' screenName='Home' navigation={navigation} />
                <NavigationButton color='blue' message='Next' screenName='ScorecardTeam' navigation={navigation} data={{
                    competitionName: competitionName,
                    dateTime: dateTime,
                    rinkNumber: rinkNumber,
                    team1NumberOfPlayers: team1NumberOfPlayers,
                    team2NumberOfPlayers: team2NumberOfPlayers,
                    numberOfEnds: numberOfEnds
                }} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default ScorecardCompetitionScreen;