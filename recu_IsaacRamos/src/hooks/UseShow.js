import { useCallback, useEffect, useState } from 'react';

const API_URL = 'https://api.tvmaze.com/shows';

// Quita las etiquetas HTML del resumen que devuelve la API.
const stripHtml = (html) =>
  html ? html.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').trim() : 'Sin resumen disponible';

// Custom hook: consume la API y deja solo los campos requeridos.
export default function useShows() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchShows = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const data = await response.json();
      const mapped = data.map((s) => ({
        id: s.id,
        name: s.name,
        genres: s.genres && s.genres.length ? s.genres.join(', ') : 'Sin género',
        premiered: s.premiered || 'No disponible',
        ended: s.ended || 'En emisión / no disponible',
        image: s.image ? s.image.medium : null,
        summary: stripHtml(s.summary),
      }));
      setShows(mapped);
    } catch (e) {
      setError(e.message || 'No se pudo cargar la información');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  return { shows, loading, error, refetch: fetchShows };
}
