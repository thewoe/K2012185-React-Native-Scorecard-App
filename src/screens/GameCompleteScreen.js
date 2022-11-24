import { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, Pressable, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionBreak from '../components/SectionBreak';
import SectionDetail from '../components/SectionDetail';
import ItemContext from '../contexts/ItemContext';
import { Feather } from '@expo/vector-icons';

const GameCompleteScreen = ({ route, navigation }) => {
    const { state } = useContext(ItemContext);
    const { id } = route.params;
    const foundItem = state.filter(game => {
        if (game.id === id) return game;
    });
    const item = foundItem[0];
    const winningScore = (item.teams.finalscore.winner === 'team1') ? item.teams.finalscore.team1Score : item.teams.finalscore.team2Score;
    // Below code required independent research, as FlatLists cannot be nested within other FlatLists or ScrollViews, so a map function was required
    return (
        <SafeAreaView>
            <ScrollView>
                <View>
                    <SectionBreak headerTitle='Winner' />
                    <Text>And the winner is...</Text>
                    <Text>{(item.teams.finalscore.winner === 'team1') ? item.teams.team1.team1Name : item.teams.team2.team2Name}</Text>
                    <Text>{`Totalling ${winningScore} Points`}</Text>
                    <SectionBreak headerTitle='Game Information' />
                    <SectionDetail title='Competition Name' details={item.match.title} />
                    <SectionDetail title='Competition Date' details={new Date(item.match.dateTime).toLocaleString()} />
                    <SectionDetail title='Rink Number' details={item.match.rinkNumber} />
                    <SectionDetail title='Ends Played' details={item.teams.scores.length} />
                    <SectionBreak headerTitle='Team Information' />
                    <Text style={styles.teamName}>{item.teams.team1.team1Name}</Text>
                    <Text style={styles.teamName}> vs. </Text>
                    <Text style={styles.teamName}>{item.teams.team2.team2Name}</Text>
                </View>
                { item.teams.team1.players.map((item) => {
                    return (
                        <View key={item.id}>
                            { 
                                (item.id === 1) 
                                    ? <Text>Skip: <Text>{item.name}</Text></Text> 
                                    : <Text>{item.name}</Text>
                            }
                        </View>
                    )
                })}
                { item.teams.team2.players.map((item) => {
                    return (
                        <View key={item.id}>
                            { 
                                (item.id === 1) 
                                    ? <Text>Skip: <Text>{item.name}</Text></Text> 
                                    : <Text>{item.name}</Text>
                            }
                        </View>
                    )
                })}
                <SectionBreak headerTitle='Score History' />
                { item.teams.scores &&
                    item.teams.scores.map((item) => {
                        return (
                            <View key={item.end}>
                                <Text>{`End: ${item.end}`}</Text>
                                <Text>{`Team 1 Shots: ${item.team1Shots}`}</Text>
                                <Text>{`Team 1 Score: ${item.team1Score}`}</Text>
                                <Text>{`Team 2 Shots: ${item.team2Shots}`}</Text>
                                <Text>{`Team 2 Score: ${item.team2Score}`}</Text>
                                {item.imageUri && <Pressable onPress={() => navigation.navigate('ViewEndPhoto', { uri: item.imageUri })}><Feather name="camera" size={24} color="black"/></Pressable>}
                            </View>
                        );
                    })
                }
                <Button color='blue' title='Done' onPress={() => navigation.navigate('Home')} />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
});

export default GameCompleteScreen;