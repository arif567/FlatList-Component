import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'



import ProductOverviewScreen from '../screens/ProductOverviewScreen'

const ProdcutNavigator =createStackNavigator({
    ProductOverview:ProductOverviewScreen
},{}


)

export default createAppContainer(ProductsNavigation)

