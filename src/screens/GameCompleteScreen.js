import { useContext } from 'react';
import { ScrollView, View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionBreak from '../components/SectionBreak';
import SectionDetail from '../components/SectionDetail';
import ItemContext from '../contexts/ItemContext';
import { Feather } from '@expo/vector-icons';

const GameCompleteScreen = ({route}) => {
    const { state } = useContext(ItemContext);
    const { id } = route.params;
    const foundItem = state.filter(game => {
        if (game.id === id) return game;
    });
    const item = foundItem[0];
    const winningScore = (item.teams.finalscore.winner === 'team1') ? item.teams.finalscore.team1Score : item.teams.finalscore.team2Score;

    const itemTest = [
        {
            "id": 1,
            "match": {
                "dateTime": "2022-01-22T11:09:00", 
                "title": 'Local Semi-Final Match', 
                "rinkNumber": 1
            }, 
            "teams": {
                "team1": {
                    "team1Name": "Eagles",
                    "players": [
                        { 
                            "id": 1, 
                            "name": "John Smith" 
                        },
                        { 
                            "id": 2, 
                            "name": "Dave Smith" 
                        },
                        { 
                            "id": 3, 
                            "name": "Graham Bourne" 
                        }
                    ]
                }, "team2": {
                    "team2Name": "Goats", 
                    "players": [
                        { 
                            "id": 1, 
                            "name": "Henri Smith" 
                        },
                        { 
                            "id": 2, 
                            "name": "Paul Jones" 
                        },
                        { 
                            "id": 3, 
                            "name": "John Bourne" 
                        }
                    ]
                }, "scores": [
                    {
                        "end": 1,
                        "team1Shots": 1, 
                        "team1Score": 1, 
                        "team2Shots": 0, 
                        "team2Score": 0,
                        "imageUri": "https://i.ytimg.com/vi/XRV8aNpvy2Q/maxresdefault.jpg"
                    }, {
                        "end": 2,
                        "team1Shots": 0, 
                        "team1Score": 1, 
                        "team2Shots": 2, 
                        "team2Score": 2,
                        "imageUri": "https://i.ytimg.com/vi/XRV8aNpvy2Q/maxresdefault.jpg"
                    }, {
                        "end": 3,
                        "team1Shots": 1, 
                        "team1Score": 2, 
                        "team2Shots": 0, 
                        "team2Score": 2,
                        "imageUri": "https://i.ytimg.com/vi/XRV8aNpvy2Q/maxresdefault.jpg"
                    }, {
                        "end": 4,
                        "team1Shots": 0, 
                        "team1Score": 2, 
                        "team2Shots": 6, 
                        "team2Score": 8,
                        "imageUri": "https://i.ytimg.com/vi/XRV8aNpvy2Q/maxresdefault.jpg"
                    }
                ],
                "finalscore": {
                    "team1Score": 2,
                    "team2Score": 8,
                    "winner": "team1"
                }
            }
        }
    ];
    // console.log('ITEM TITLE' + item[0].match.title.toString());
    // Below code required independent research, to allow additional components to be placed in a FlatList, 
    // but only contained at the top of the FlatList (not repeated through each iteration)
    return (
        <SafeAreaView>
            <ScrollView>
                <FlatList 
                    ListHeaderComponent={() => {
                        return (
                            <View>
                                <SectionBreak headerTitle='Winner' />
                                <Text>And the winner is...</Text>
                                <Text>{item.teams.finalscore.winner}</Text>
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
                                {item.imageUri && <Pressable onPress={navigation.navigate('ViewEndPhoto', { uri: item.imageUri })}><Feather name="camera" size={24} color="black"/></Pressable>}
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