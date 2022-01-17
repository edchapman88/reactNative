import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import CustomHeaderButton from "../components/UI/HeaderButton";



// import {
//   createStackNavigator,
//   createDrawerNavigator,
//   createAppContainer
// } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';
import UserProductsScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';
import Colours from '../constants/Colors';


const headerWithBurger = (nav) => {
  let headerWithBurgerObj = {
      
      headerLeft: () => 
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item 
                  title='burger'
                  iconName={'ios-menu'}
                  onPress={()=> {nav.openDrawer()}}
                  />
          </HeaderButtons>
  };
  return headerWithBurgerObj;
};

const ProductsStack = createNativeStackNavigator();
const OrdersStack = createNativeStackNavigator();
const AdminStack = createNativeStackNavigator();

const ProductsNavigator = ({navigation}) => {
  return (
    <ProductsStack.Navigator >
      <ProductsStack.Screen name='ProductsOverview' component={ProductsOverviewScreen}
        options={{...headerWithBurger(navigation), 
          headerRight: () =>
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => {
                  navigation.navigate('Cart');
                }}
              />
            </HeaderButtons>
          }}/>
      <ProductsStack.Screen name='ProductDetail' component={ProductDetailScreen}
        options={({ route }) => ({
          title: route.params.productTitle
        })
      }/>
      <ProductsStack.Screen name='Cart' component={CartScreen}/>
    </ProductsStack.Navigator>
  );
};

const OrdersNavigator = ({navigation}) => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name='Orders' component={OrdersScreen}
        options={headerWithBurger(navigation)}/>
    </OrdersStack.Navigator>
  );
};

const AdminNavigator = ({navigation}) => {
  return (
    <AdminStack.Navigator >
      <AdminStack.Screen name='UserProducts' component={UserProductsScreen}
        options={headerWithBurger(navigation)}/>
      <AdminStack.Screen name='EditProduct' component={EditProductScreen}/>
    </AdminStack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colours.secondary,
        drawerLabelStyle: {
            fontFamily: 'open-sans'
        }
      }}>
      <Drawer.Screen name='ProductsDrawer' component={ProductsNavigator} />
      <Drawer.Screen name='OrdersDrawer' component={OrdersNavigator} />
      <Drawer.Screen name='AdminDrawer' component={AdminNavigator} />
    </Drawer.Navigator>
  );
};

const NavContainer = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default NavContainer;
