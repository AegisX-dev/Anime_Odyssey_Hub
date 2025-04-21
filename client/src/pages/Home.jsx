import { useState } from 'react';
import axios from 'axios';
import AnimeList from '../components/AnimeList';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`/api/anime/search?title=${searchTerm}`);
      setSearchResults(response.data);
      setError('');
    } catch (err) {
      setError('No anime found. Try a different search term.');
      setSearchResults([]);
    }
  };

  return (
    <div className="container">
      <h1>Anime Odyssey Hub</h1>
      <form onSubmit={handleSearch} className="form">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search anime by title..."
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p className="error">{error}</p>}
      {searchResults.length > 0 ? (
        <div>
          <h2>Search Results</h2>
          {searchResults.map((anime) => (
            <div key={anime._id} className="anime-card">
              <h3>{anime.title}</h3>
              <p><strong>Genres:</strong> {anime.genres.join(', ')}</p>
              <p><strong>Synopsis:</strong> {anime.synopsis}</p>
              <p><strong>Release Year:</strong> {anime.release_year}</p>
            </div>
          ))}
        </div>
      ) : (
        <AnimeList />
      )}
    </div>
  );
}

export default Home;