import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import Home from './Components/Home';
import ComponentScreen from './Components/ComponentScreen';
import ListScreen from './Components/ListScreen';

const App = createStackNavigator(
  {
    Home: Home,
    Components: ComponentScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
)

export default createAppContainer(App);

