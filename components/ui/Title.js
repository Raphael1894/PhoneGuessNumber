import { Text, StyleSheet } from 'react-native';
import Colors from '../../constants/colors';

function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: Colors.secondaryAccent,
		textAlign: 'center',
		borderWidth: 2,
		borderColor: Colors.secondaryAccent,
		padding: 12
	}
});
