import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ShowCard from '../components/ShowCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useShows from '../hooks/useShows';

export default function ShowsScreen() {
  const { shows, loading, error, refetch } = useShows();

  if (loading) return <Loading message="Cargando shows..." />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={shows}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ShowCard show={item} />}
        contentContainerStyle={styles.list}
        initialNumToRender={8}
        windowSize={7}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f1f3f5' },
  list: { padding: 16 },
});
