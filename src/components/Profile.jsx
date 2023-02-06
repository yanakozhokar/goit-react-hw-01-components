import PropTypes from 'prop-types';

function Profile({ username, tag, location, avatar, followers, views, likes }) {
    return <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt={username}
      class="avatar"
    />
    <p class="name">{username}</p>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">{followers}</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">{views}</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">{likes}</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
likes: PropTypes.number,
}

export default Profile;