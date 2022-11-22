import { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionBreak from '../components/SectionBreak';
import SectionDetail from '../components/SectionDetail';
import ItemContext from '../contexts/ItemContext';

const GameCompleteScreen = ({route}) => {
    const { state } = useContext(ItemContext);
    const { id } = route.params;
    const item = state.map(game => {
        if (game.id === id) return game;
    });
    console.log(item);
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatList 
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <SectionBreak headerTitle='Winner' />
                                <Text>And the winner is...</Text>
                                {/* <Text>{item.teams.finalscore.winner}</Text> */}
                                <Text>{`Totalling ${winningScore} points`}</Text>
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
                        );
                    }}
                    scrollEnabled={false}
                    data={item.teams.team1.players} 
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        return (
                            <View>
                                { 
                                    (item.id === 1) 
                                        ? <Text>Skip: <Text>{item.name}</Text></Text> 
                                        : <Text>{item.name}</Text>
                                }
                            </View>
                        )}
                    }
                />
                <FlatList 
                    scrollEnabled={false}
                    data={item.teams.team2.players} 
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => {
                        return (
                            <View>
                                { 
                                    (item.id === 1) 
                                        ? <Text>Skip: <Text>{item.name}</Text></Text> 
                                        : <Text>{item.name}</Text>
                                }
                            </View>
                        )}
                    }
                />
                <SectionBreak headerTitle='Score History' />
                <FlatList
                    scrollEnabled={false}
                    data={item.teams.scores}
                    keyExtractor={(item) => item.end.toString()}
                    renderItem={({item}) => {
                        return (
                            <View>
                                <Text>{`End: ${item.end}`}</Text>
                                <Text>{`Team 1 Shots: ${item.team1Shots}`}</Text>
                                <Text>{`Team 1 Score: ${item.team1Score}`}</Text>
                                <Text>{`Team 2 Shots: ${item.team2Shots}`}</Text>
                                <Text>{`Team 2 Score: ${item.team2Score}`}</Text>
                                <Text>{`Image URI: ${item.imageUri}`}</Text>
                            </View>
                        );
                    }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    
});

export default GameCompleteScreen;