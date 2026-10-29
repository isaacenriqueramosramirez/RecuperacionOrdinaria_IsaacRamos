import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

// Botón reutilizable.
export default function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3b5bdb',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 16,
  },
  text: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
