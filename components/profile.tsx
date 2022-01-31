const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center mb-4">
      <img className="rounded-full h-36 w-36" src="/profile.png" />
      <h1 className="prose prose-2xl font-black">Christopher Bell</h1>
      <h1 className="prose prose-sm thin">Software Engineer</h1>
    </div>
  );
};

export default Profile;
