import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return (
      <section className="card profile-card profile-empty">
        <span className="status-dot" aria-hidden="true" />
        <h2>Your profile</h2>
        <p>Please log in to see your shared profile.</p>
      </section>
    );
  } else {
    return (
      <section className="card profile-card">
        <span className="status-dot" aria-hidden="true" />
        <p className="eyebrow">Profile connected</p>
        <h2>Welcome, {user.username || "friend"}!</h2>
        <p>Your login state is available through Context.</p>
      </section>
    );
  }
}

export default Profile;
