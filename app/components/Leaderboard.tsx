import React from 'react';
import Image from 'next/image';

const leaderboardData = [
  { id: 1, name: 'Alex', score: 2500, avatar: '/images/avatar-2.jpg' },
  { id: 2, name: 'Samantha', score: 2300, avatar: '/images/avatar-3.jpg' },
  { id: 3, name: 'John', score: 2100, avatar: '/images/avatar-4.jpg' },
  { id: 4, name: 'Maria', score: 1900, avatar: '/images/avatar-5.jpg' },
  { id: 5, name: 'David', score: 1700, avatar: '/images/avatar-6.jpg' },
];

const Leaderboard = () => {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Top Challengers</h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          {leaderboardData.map((user) => (
            <li key={user.id} className="py-3 sm:py-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <Image className="w-8 h-8 rounded-full" src={user.avatar} alt={`${user.name} avatar`} width={32} height={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                    {user.name}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                  {user.score}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;