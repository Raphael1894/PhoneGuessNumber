import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar as Bar } from 'expo-status-bar';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';

export default function App() {
	const [ userNumber, setUserNumber ] = useState();
	const [ gameIsOver, setGameIsOver ] = useState(true);
	const [ guessRounds, setGuessRounds ] = useState(0);

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
		setGameIsOver(false);
	}

	function gameOverHandler(numberOfRounds) {
		setGameIsOver(true);
		setGuessRounds(numberOfRounds)
	}

	function startNewGameHandler() {
		setUserNumber(null);
		setGuessRounds(0);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
	}

	if (gameIsOver && userNumber) {
		screen = (
			<GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
		);
	}

	return (
		<>
		<Bar style='light'/>
		<LinearGradient colors={[ Colors.primary700, Colors.accent500 ]} style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<SafeAreaView style={styles.safeArea}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1
	},
	safeArea: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	},
	backgroundImage: {
		opacity: 0.15
	}
});
