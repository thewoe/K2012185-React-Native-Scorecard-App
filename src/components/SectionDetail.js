import { View, Text, StyleSheet } from 'react-native';

const SectionDetail = ({ title, details }) => {
    return (
        <Text style={styles.title}>{`${title}: `}
                <Text style={styles.details}>{details}</Text>
        </Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    },
    details: {
        fontWeight: 'normal'
    }
});

export default SectionDetail;