import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-around p-4 bg-gray-800 text-white">
      <Link href="/">Home</Link>
      <Link href="/challenges">Challenges</Link>
      <Link href="/upload">Upload</Link>
      <Link href="/leaderboard">Leaderboard</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
};

export default Navbar;