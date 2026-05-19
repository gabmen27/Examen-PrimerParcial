import React, { useContext, useState } from 'react'
import { Transferencia } from '../models/Transferecia';
import { contextTransferencia } from '../context/AppContext';
import { View } from '../models/View';

export default function Provider(props : View) {

    const [listaTransferencias, setListaTransferencias] = useState<Transferencia[]>([]);
    const[montoActual, setMontoActual] = useState<number>(10000);
    
    function realizarRetiro(transferencia: Transferencia) {
        setListaTransferencias([...listaTransferencias, transferencia]);
        setMontoActual(montoActual - transferencia.monto);
    }
    
    function realizarDeposito(transferencia: Transferencia) {
        setListaTransferencias([...listaTransferencias, transferencia]);
        setMontoActual(montoActual + transferencia.monto);
    }
  return (
   <contextTransferencia.Provider value={
    {montoActual,
    listaTransferencias, 
    realizarDeposito, 
    realizarRetiro}}>
    {props.children}
   </contextTransferencia.Provider>
  )
}

export function useContextTransferencia(){
    return useContext(contextTransferencia);
}