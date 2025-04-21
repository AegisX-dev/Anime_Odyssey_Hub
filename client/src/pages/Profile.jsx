import { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get('/api/user', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch profile. Please try again.');
      }
    };
    fetchProfile();
  }, []);

  if (!user) return <div className="container">Loading...</div>;

  return (
    <div className="container">
      <h2>User Profile</h2>
      {error && <p className="error">{error}</p>}
      <div className="anime-card">
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
      </div>
    </div>
  );
}

export default Profile;