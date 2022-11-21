import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import { Camera, CameraType, FlashMode } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

const EndCameraScreen = ({navigation}) => {
    const [hasCameraPermission, setHasCameraPermission] = useState(null);
    const [hasLibraryPermission, setHasLibraryPermission] = useState(null);
    const [cameraType, setCameraType] = useState(CameraType.back);
    const getPermission = async () => {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermission(cameraStatus.status === 'granted');
        const libraryStatus = await MediaLibrary.requestPermissionsAsync();
        setHasLibraryPermission(libraryStatus.status === 'granted');
    };
    let camera;
    const getPicture = async () => {
        if (camera) {
            const { uri } = await camera.takePictureAsync();
            const persistantUri = await MediaLibrary.createAssetAsync(uri)
            navigation.navigate('EndPhoto', { uri: persistantUri.uri })
        }
    };
    const toggleCamera = () => setCameraType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    useEffect(() => { getPermission(); }, []);
    if (hasCameraPermission === null || hasLibraryPermission === null) return <Text>Awaiting Camera/Photo Library Permission</Text>
    if (!hasCameraPermission || !hasLibraryPermission) return <Text>{`${hasCameraPermission} ${hasLibraryPermission} Camera/Photo Library Access Denied!`}</Text>

    return (
        <View style={styles.container}>
            <Camera style={styles.subContainer} ref={ref => camera = ref} type={cameraType} flashMode={FlashMode.auto}>
                <Pressable style={styles.buttonStyle} onPress={() => getPicture()}>
                    <Text style={styles.textStyle}>Take Picture!</Text>
                </Pressable>
                <Pressable style={styles.buttonStyle} onPress={toggleCamera}>
                    <Text style={styles.textStyle}>Change Camera</Text>
                </Pressable>
            </Camera>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row-reverse',
        alignItems: 'flex-end'
    },
    buttonStyle: {
        flex: 0.3,
        alignItems: 'center'
    },
    textStyle: {
        fontSize: 24,
        marginBottom: 15,
        color: 'yellow'
    }
});

export default EndCameraScreen;