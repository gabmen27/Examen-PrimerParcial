import React from 'react';
import { View, Text } from 'react-native';
import ListaTransacciones from '../components/ListaTransacciones';
import { useContextTransferencia } from '../provider/Provider';

export default function HistorialPage() {
  const { listaTransferencias } = useContextTransferencia();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginVertical: 20 }}>
        Historial de Operaciones
      </Text>

      <View style={{ backgroundColor: '#e3e3e3', padding: 20, borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 16, textAlign: 'center' }}>
          Total de transacciones realizadas desde la aplicación:
        </Text>
        <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>
          {listaTransferencias.length}
        </Text>
      </View>

      <Text style={{ fontSize: 16, marginBottom: 10, fontWeight: 'bold' }}>Detalle de Auditoría:</Text>
      <ListaTransacciones />
    </View>
  );
}