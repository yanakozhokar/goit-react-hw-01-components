import Proptypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li className={css.item} key={id}>
      <span className={css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: Proptypes.number,
  avatar: Proptypes.string,
  name: Proptypes.string,
  isOnline: Proptypes.bool,
};
