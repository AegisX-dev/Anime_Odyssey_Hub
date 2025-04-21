import { useState, useEffect } from 'react';
import axios from 'axios';
import AnimeCard from './AnimeCard';

function AnimeList() {
  const [animeList, setAnimeList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await axios.get(`/api/anime?page=${page}&limit=5`);
        setAnimeList(response.data.anime);
        setTotalPages(response.data.pages);
      } catch (err) {
        setError('Failed to fetch anime. Please try again.');
      }
    };
    fetchAnime();
  }, [page]);

  const handleWatch = async (animeId) => {
    try {
      await axios.post(
        '/api/user/activity',
        { anime_id: animeId, activity_type: 'watched' },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );
      alert('Anime marked as watched!');
    } catch (err) {
      setError('Failed to log activity. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Anime Catalog</h2>
      {error && <p className="error">{error}</p>}
      {animeList.map((anime) => (
        <AnimeCard key={anime._id} anime={anime} onWatch={handleWatch} />
      ))}
      <div>
        <button
          className="btn"
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span> Page {page} of {totalPages} </span>
        <button
          className="btn"
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AnimeList;