import React from "react";
import { useReducer, useEffect } from "react";
import { actionTypes } from "../helpers/actionTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ItemContext = React.createContext();
const STORAGE_KEY = 'bowls_scorecard_storage_key';

let initialScorecardState = [
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
    }, {
        "id": 2,
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
    },
];

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.create:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    match: {
                        dateTime: action.payload.match.dateTime, 
                        title: action.payload.match.dateTime, 
                        rinkNumber: action.payload.match.rinkNumber
                    }, 
                    teams: {
                        team1: {
                            team1Name: action.payload.teams.team1.team1Name,
                            players: action.payload.teams.team1.players
                        }, team2: {
                            team2Name: action.payload.teams.team2.team2Name, 
                            players: action.payload.teams.team2.players
                        }, scores: action.payload.teams.scores,
                        finalscore: {
                            team1Score: action.payload.teams.finalscore.team1Score,
                            team2Score: action.payload.teams.finalscore.team2Score,
                            winner: action.payload.teams.finalscore.winner
                        }
                    }
                }
            ];
        case actionTypes.update:
            return state.map((item) => {
                if (item.id === action.payload.id) return action.payload;
                return item;
            });
        case actionTypes.delete:
            return state.filter((item) => item.id !== action.payload.id);
        case actionTypes.save:
            try {
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            }
            catch (error) {
                console.log(error);
            }
            finally {
                return state;
            }
        case actionTypes.load:
            return [
                ...state, {
                    id: action.payload.id,
                    match: {
                        dateTime: action.payload.match.dateTime, 
                        title: action.payload.match.dateTime, 
                        rinkNumber: action.payload.match.rinkNumber
                    }, 
                    teams: {
                        team1: {
                            team1Name: action.payload.teams.team1.team1Name,
                            players: action.payload.teams.team1.players
                        }, team2: {
                            team2Name: action.payload.teams.team2.team2Name, 
                            players: action.payload.teams.team2.players
                        }, scores: action.payload.teams.scores,
                        finalscore: {
                            team1Score: action.payload.teams.finalscore.team1Score,
                            team2Score: action.payload.teams.finalscore.team2Score,
                            winner: action.payload.teams.finalscore.winner
                        }
                    }
                }
            ]
        default:
            return state;
    };
};

export const ItemProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialScorecardState);
    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if (storage !== null && state.length === 0) {
                initialScorecardState = JSON.parse(storage);
                initialScorecardState.forEach(element => {
                    dispatch({type: actionTypes.load, payload: element});
                });
            }
        }
        loadStorage();
    }, [STORAGE_KEY]);
    const addItem = (match, teams, callback) => {
        dispatch({type: actionTypes.create, payload: {match, teams}});
        dispatch({type: actionTypes.save});
        if (callback) callback();
    };
    const deleteItem = (id, callback) => {
        dispatch({type: actionTypes.delete, payload: {id: id}});
        dispatch({type: actionTypes.save});
        if (callback) callback();
    };
    const updateItem = (id, match, teams, callback) => {
        dispatch({type: actionTypes.update, payload: {id, match, teams}});
        dispatch({type: actionTypes.save});
        if (callback) callback();
    };
    return (
        <ItemContext.Provider value={{
            state: state,
            create: addItem,
            remove: deleteItem,
            update: updateItem
        }}>
            {children}
        </ItemContext.Provider>
    );
};

export default ItemContext;