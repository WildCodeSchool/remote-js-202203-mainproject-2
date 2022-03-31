import { Outlet } from 'react-router-dom';

function UserProfile() {
  return (
    <section id="profile">
      <div className="content">
        <Outlet />
      </div>
    </section>
  );
}

export default UserProfile;