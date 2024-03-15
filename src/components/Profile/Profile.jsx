import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileContainer}>
      <div className={css.profileData}>
        <img className={css.profileImg} src={image} alt="User avatar" />
        <p className={css.profileTitle}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span>Followers </span>
          <span className={css.profileItemCounter}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span>Views </span>
          <span className={css.profileItemCounter}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span>Likes </span>
          <span className={css.profileItemCounter}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
