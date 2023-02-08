import { Profile } from 'components/Profile/Profile.jsx';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import user from 'user.json';
import data from 'data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
