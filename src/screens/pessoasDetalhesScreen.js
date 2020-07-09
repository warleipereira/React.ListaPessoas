import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

import Line from '../components/line';

export default class PessoasDetalhesScreen extends React.Component {
	render() {
		const { pessoa } = this.props.navigation.state.params;

		return (
			<View style={styles.container}>
				<Image
					source={{ uri: pessoa.picture.large }}
					style={styles.avatar}/>
				<View style={styles.detailContainer}>
                    <Line label="Nome:" content={pessoa.name.first +' ' +pessoa.name.last} />
                    <Line label="Idade:" content={pessoa.dob.age} />
					<Line label="Email:" content={pessoa.email} />
					<Line label="Cidade:" content={pessoa.location.city} />
					<Line label="Estado:" content={pessoa.location.state} />
					<Line label="Tel:" content={pessoa.phone} />
					<Line label="Cel:" content={pessoa.cell} />
					<Line label="Nacionalidade:" content={pessoa.nat} />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	avatar: {
		aspectRatio: 1
	},
	detailContainer: {
		backgroundColor: '#e2f9ff',
		marginTop: 20,
		elevation: 1
	},
});