import { createContext } from "react";
import { Transferencia } from "../models/Transferecia";


export const constestTransferencia = createContext({
   listaTransferencias: [] as Transferencia[], 
   realizarDeposito: (transferencia: Transferencia) => {},
   realizarRetiro: (transferencia: Transferencia) => {}
})