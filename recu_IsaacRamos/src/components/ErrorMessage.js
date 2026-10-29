import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AppButton from './AppButton';

export default function ErrorMessage({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ocurrió un error: {message}</Text>
      <AppButton title="Reintentar" onPress={onRetry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  text: { color: '#c92a2a', textAlign: 'center' },
});
