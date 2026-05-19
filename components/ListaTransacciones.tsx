import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { useContextTransferencia } from '../provider/Provider';


export default function ListaTransacciones() {

    const {listaTransferencias} = useContextTransferencia();
    
  return (
    <FlatList
        data={listaTransferencias}
        renderItem={({item}) => (
            <View>
                <Text>{item.numeroCuenta}</Text>
                <Text>{item.nombreDestinatario}</Text>
                <Text>{item.descripcion}</Text>
                <Text>{item.monto}</Text>
            </View>
        )}
        keyExtractor={(item, index) => item.numeroCuenta + (index+1)}>  </FlatList>
  )
}