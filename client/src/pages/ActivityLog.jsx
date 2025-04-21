import { useState, useEffect } from 'react';
import axios from 'axios';

function ActivityLog() {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/user/activity', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        const data = response.data;
        console.log('API Response:', data); // Debug log
        if (Array.isArray(data)) {
          setActivities(data);
        } else if (data && Array.isArray(data.activities)) {
          setActivities(data.activities);
        } else if (data && Array.isArray(data.data)) {
          setActivities(data.data);
        } else {
          setActivities([]);
          setError('Unexpected API response format.');
        }
      } catch (err) {
        setError('Failed to fetch activities. Please try again.');
        setActivities([]);
      } finally {
        setLoading(false);
      }
    };
    fetchActivities();
  }, []);

  if (loading) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Activity Log</h2>
      {error && <p className="error">{error}</p>}
      {activities.length === 0 ? (
        <p>No activities logged yet.</p>
      ) : (
        activities.map((activity) => {
          if (!activity || typeof activity !== 'object') {
            return <p key="error">Invalid activity data.</p>;
          }
          return (
            <div key={activity._id} className="activity-item">
              <p><strong>Anime ID:</strong> {activity.anime_id?._id || 'N/A'}</p>
              <p><strong>Anime Title:</strong> {activity.anime_id?.title || 'N/A'}</p>
              <p><strong>Activity:</strong> {activity.activity_type || 'N/A'}</p>
              <p><strong>Date:</strong> {activity.timestamp ? new Date(activity.timestamp).toLocaleString() : 'N/A'}</p>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ActivityLog;