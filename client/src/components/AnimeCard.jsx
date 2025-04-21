function AnimeCard({ anime, onWatch }) {
  const token = localStorage.getItem('token');

  return (
    <div className="anime-card">
      <h3>{anime.title}</h3>
      <p><strong>Genres:</strong> {anime.genres.join(', ')}</p>
      <p><strong>Synopsis:</strong> {anime.synopsis}</p>
      <p><strong>Release Year:</strong> {anime.release_year}</p>
      {token && (
        <button className="btn" onClick={() => onWatch(anime._id)}>
          Mark as Watched
        </button>
      )}
    </div>
  );
}

export default AnimeCard;