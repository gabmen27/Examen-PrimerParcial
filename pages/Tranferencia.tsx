import { View, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import { useContextTransferencia } from '../provider/Provider';


export default function Tranferencia() {

    const {montoActual, realizarDeposito} = useContextTransferencia();
    
    const [cuenta,setCuenta] = useState<string>('');
    const [nombreDestinatario,setNombreDestinatario] = useState<string>('');
    const [montoaTransferir,setMontoaTransferir] = useState<string>('');

   function hacerTransferencia(){
    const montoInput = parseFloat(montoaTransferir);

        if(!cuenta || !nombreDestinatario || !montoaTransferir){
            Alert.alert('Error', 'Por favor, complete todos los campos correctamente');
            return;
        }

        if(montoInput<=0){
            Alert.alert('Error', 'El monto a transferir debe ser mayor a cero');
            return;
        }

        if(montoInput > montoActual){
            Alert.alert('Error', 'Fondos insuficientes');
            return;
        }

        realizarDeposito({
            numeroCuenta: cuenta,
            nombreDestinatario: nombreDestinatario,
            descripcion: 'Transferencia',
            monto: montoInput
        });

        Alert.alert('Éxito', 'Transacción exitosa');
        setCuenta('');
        setNombreDestinatario('');
        setMontoaTransferir('');

   }
    
  return (
    <View>
   
      <TextInput style={{ borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 }}
       value = {cuenta} 
       onChangeText={setCuenta} 
       placeholder='Ingrese el numero de cuenta'/>

   
       <TextInput style={{ borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 }}
       value = {montoaTransferir} 
       onChangeText={setMontoaTransferir} 
       placeholder='L. 0.00'
       keyboardType='numeric'/>  

      
       <TextInput style={{ borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5 }}
       value = {nombreDestinatario} 
       onChangeText={setNombreDestinatario} 
       placeholder='Nombre destinatario'
       /> 


    <Button title='Transferir Saldo' onPress={hacerTransferencia}/>
      
    </View>
  )
}