import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PessoasScreen from './src/screens/pessoasScreen';
import PessoasDetalhesScreen from './src/screens/pessoasDetalhesScreen';



const AppNavigator = createStackNavigator({
	'Main': {
		screen: PessoasScreen
  },
  
	'PessoasDetalhesScreen': {
		screen: PessoasDetalhesScreen,
		navigationOptions: ({ navigation }) => {
		
      const {pessoa} = 	navigation.state.params;
      
			return ({
				title: pessoa.name.first,
				headerTitleStyle: {
					color: 'white',
					fontSize: 30,
				}
			});
		}
	},
}, {
	defaultNavigationOptions: {
		title: 'Pessoas',
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#6ca2f7',
			borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5',
		},
		headerTitleStyle: {
			color: 'white',
			fontSize: 30,

			// centralizar o header
			flexGrow: 1,
			textAlign: 'center'
		},
	}
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;


