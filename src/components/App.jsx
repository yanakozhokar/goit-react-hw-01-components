import Profile from '../components/Profile';
import user from '../user.json';

export default function App() {
  return <div>
    <Profile
      username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes}
    />
  </div>;
};
