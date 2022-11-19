import { View, Text, StyleSheet } from 'react-native';

const SectionBreak = ({ headerTitle }) => {
    return (
        <View style={styles.sectionContainer}>
                <View style={styles.lineSeparator} />
                    <View>
                        <Text style={styles.sectionHeader}>{headerTitle}</Text>
                    </View>
                <View style={styles.lineSeparator} />
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    lineSeparator: {
        flex: 1,
        height: 1,
        backgroundColor: 'black'
    },
    sectionHeader: {
        paddingHorizontal: 10,
        textAlign: 'center'
    }
});

export default SectionBreak;