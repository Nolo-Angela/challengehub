import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const badges = [
  { id: 1, name: 'First Challenge', icon: '🏆' },
  { id: 2, name: 'Top 10', icon: '🔥' },
  { id: 3, name: 'Streak Starter', icon: '🚀' },
];

const UserProfile = () => {
  return (
    <div className="p-4">
      <div className="flex items-center mb-4">
                <Image className="w-24 h-24 rounded-full mr-4" src="/images/avatar-1.jpg" alt="User avatar" width={96} height={96} />
        <div>
          <h2 className="text-2xl font-bold">John Doe</h2>
          <p className="text-gray-500">Challenge enthusiast | Tech lover | Coffee addict</p>
        </div>
      </div>
      <div className="flex justify-around">
        <div className="text-center">
          <p className="font-bold text-xl">1200</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-xl">150</p>
          <p className="text-gray-500">Following</p>
        </div>
        <div className="text-center">
          <p className="font-bold text-xl">25</p>
          <p className="text-gray-500">Streak</p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Badges</h3>
        <div className="flex space-x-4">
          {badges.map((badge) => (
            <div key={badge.id} className="text-center">
              <div className="text-4xl">{badge.icon}</div>
              <p className="text-sm text-gray-500">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center">
        <Link href="/sponsor" className="inline-block bg-green-500 text-white px-6 py-3 rounded-lg font-bold">
          Become a Sponsor
        </Link>
      </div>
    </div>
  );
};

export default UserProfile;