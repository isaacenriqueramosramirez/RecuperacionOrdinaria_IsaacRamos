import React from 'react';
import { Image, Text, StyleSheet } from 'react-native';
import Card from './card';

// Card con la información del estudiante.
export default function StudentCard({ student }) {
  return (
    <Card style={styles.card}>
      <Image
       source={require('../../assets/images.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.name}>{student.fullName}</Text>
      <Text style={styles.line}>Carnet: {student.carnet}</Text>
      <Text style={styles.line}>{student.sectionGroup}</Text>
      <Text style={styles.course}>{student.course}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center' },
  logo: { width: 140, height: 140, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: '700', textAlign: 'center' },
  line: { fontSize: 16, marginTop: 6, color: '#333' },
  course: { fontSize: 14, marginTop: 12, textAlign: 'center', color: '#555' },
});
