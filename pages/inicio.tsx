import { View, Text,Button} from 'react-native'
import React from 'react'
import { useContextTransferencia } from '../provider/Provider';


export default function Inicio() {

    const {montoActual, realizarDeposito} = useContextTransferencia();

    function hacerDeposito(){
        realizarDeposito({
            numeroCuenta: '123456789',
            nombreDestinatario: 'Jesus Mendez',
            descripcion: 'Auto deposito',
            monto: 500
        })
    }

    function hacerRetiro(){
        realizarDeposito({
            numeroCuenta: '123456789',
            nombreDestinatario: 'Jesus Mendez',
            descripcion: 'Auto retiro',
            monto: 200
        })
    }
  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', padding: 20}}>Hola, Bienvenido a tu banca personal!</Text>
      <Text style={{ fontSize: 16, padding: 20 }}>Tu monto actual es: {montoActual}</Text>
      <Button title='Depositar L.500' onPress={hacerDeposito}/>
      <Button title='Retirar L.200' onPress={hacerRetiro}/>
    </View>

  )
}