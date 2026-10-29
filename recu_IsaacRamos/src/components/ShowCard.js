import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import Card from './card';

// Card de un show de TVMaze.
export default function ShowCard({ show }) {
  return (
    <Card>
      <View style={styles.row}>
        {show.image ? (
          <Image source={{ uri: show.image }} style={styles.image} />
        ) : (
          <View style={[styles.image, styles.noImage]}>
            <Text style={styles.noImageText}>Sin imagen</Text>
          </View>
        )}
        <View style={styles.info}>
          <Text style={styles.title}>{show.name}</Text>
          <Text style={styles.meta}>Géneros: {show.genres}</Text>
          <Text style={styles.meta}>Inicio: {show.premiered}</Text>
          <Text style={styles.meta}>Fin: {show.ended}</Text>
        </View>
      </View>
      <Text style={styles.summary} numberOfLines={6}>
        {show.summary}
      </Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  image: { width: 100, height: 140, borderRadius: 8, backgroundColor: '#e9ecef' },
  noImage: { alignItems: 'center', justifyContent: 'center' },
  noImageText: { fontSize: 12, color: '#868e96' },
  info: { flex: 1, marginLeft: 12 },
  title: { fontSize: 18, fontWeight: '700', marginBottom: 6 },
  meta: { fontSize: 13, color: '#444', marginBottom: 3 },
  summary: { marginTop: 12, fontSize: 13, color: '#333' },
});
