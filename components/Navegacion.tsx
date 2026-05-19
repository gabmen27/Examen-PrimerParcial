
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../pages/inicio';
import Transferencia from '../pages/Tranferencia';
import Historial from '../pages/Historial';

export default function Navegacion() {

  const tab = createBottomTabNavigator();
  return (

      <NavigationContainer>
        <tab.Navigator>

          <tab.Screen name="Configuracion" component={Inicio} />
          <tab.Screen name="Home" component={Transferencia} />
          <tab.Screen name="Historial" component={Historial} />
    </tab.Navigator>

      </NavigationContainer>

  )
}