import { createContext } from "react";
import { Transferencia } from "../models/Transferecia";


export const contextTransferencia = createContext({
    montoActual: 10000,
   listaTransferencias: [] as Transferencia[], 
   realizarDeposito: (transferencia: Transferencia) => {},
   realizarRetiro: (transferencia: Transferencia) => {}
})