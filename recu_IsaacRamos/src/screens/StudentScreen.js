import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import StudentCard from '../components/StudentCard';
import AppButton from '../components/AppButton';
import useStudentInfo from '../hooks/UseStudentInfo';

export default function StudentScreen({ navigation }) {
  const student = useStudentInfo();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StudentCard student={student} />
      <AppButton title="Ver shows" onPress={() => navigation.navigate('Shows')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f1f3f5', flexGrow: 1, justifyContent: 'center' },
});
