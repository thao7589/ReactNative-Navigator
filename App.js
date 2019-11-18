import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './Components/Home';
import ComponentScreen from './Components/ComponentScreen';

const navigator = createStackNavigator(
  {
    Home: Home,
    Components: ComponentScreen
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'App'
    }  
  }
); 

export default createAppContainer(navigator);