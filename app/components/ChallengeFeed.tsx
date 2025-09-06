'use client';

import React, { useState } from 'react';

const challenges = [
  {
    id: 1,
    title: 'Epic Bottle Flip Challenge',
    description: 'Can you land the most epic bottle flip? Show us your skills!',
    videoUrl: '', // Placeholder for video
    thumbnailUrl: 'https://placehold.co/400x225?text=Bottle+Flip',
    likes: 150,
    deadline: '2024-07-21',
    category: 'Fun',
    comments: [
      { id: 1, user: 'Alex', text: 'So close!' },
      { id: 2, user: 'Samantha', text: 'I did it on my first try!' },
    ],
  },
  {
    id: 2,
    title: 'Dance Craze Challenge',
    description: 'Learn this viral dance and show us your moves!',
    videoUrl: '', // Placeholder for video
    thumbnailUrl: 'https://placehold.co/400x225?text=Dance+Craze',
    likes: 320,
    deadline: '2024-07-28',
    category: 'Dance',
    comments: [],
  },
  {
    id: 3,
    title: 'Super Soda Challenge',
    description: 'Show us your best reaction to our new soda flavor!',
    videoUrl: '', // Placeholder for video
    thumbnailUrl: 'https://placehold.co/400x225?text=Super+Soda',
    likes: 500,
    deadline: '2024-08-01',
    sponsored: true,
    brandLogo: 'https://www.logodesign.net/logo/abstract-soda-can-with-bubbles-5896ld.png',
    category: 'Food',
    comments: [],
  },
];

const ChallengeFeed = () => {
  const [posts, setPosts] = useState(challenges.map(c => ({ ...c, isFollowing: false })));
  const [filter, setFilter] = useState('All');
  const [muted, setMuted] = useState(true);

  const handleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleFollow = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, isFollowing: !post.isFollowing } : post
      )
    );
  };

  const filteredPosts = filter === 'All' ? posts : posts.filter(p => p.category === filter);

  return (
    <div>
      <div className="flex justify-center space-x-4 mb-4">
        <button onClick={() => setFilter('All')} className={`px-4 py-2 rounded-lg ${filter === 'All' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>All</button>
        <button onClick={() => setFilter('Fun')} className={`px-4 py-2 rounded-lg ${filter === 'Fun' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Fun</button>
        <button onClick={() => setFilter('Dance')} className={`px-4 py-2 rounded-lg ${filter === 'Dance' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Dance</button>
        <button onClick={() => setFilter('Food')} className={`px-4 py-2 rounded-lg ${filter === 'Food' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}>Food</button>
        <button onClick={() => setMuted(!muted)} className="px-4 py-2 rounded-lg bg-gray-700 text-gray-300">{muted ? 'Unmute' : 'Mute'}</button>
      </div>
      {filteredPosts.map((challenge) => (
        <div key={challenge.id} className="border rounded-lg p-4 mb-4">
          {challenge.sponsored && (
            <div className="flex items-center mb-2">
              <img src={challenge.brandLogo} alt="Brand Logo" className="w-6 h-6 mr-2" />
              <span className="text-sm font-bold text-gray-500">Sponsored</span>
            </div>
          )}
          <div className="flex justify-between">
            <h3 className="font-bold">{challenge.title}</h3>
            <span className="text-sm font-bold text-gray-500">{challenge.category}</span>
           </div>
          <div>
            {challenge.videoUrl ? (
              <video
                className="w-full h-64 mt-2 bg-black"
                autoPlay
                loop
                muted={muted}
                playsInline
                src={challenge.videoUrl}
                poster={challenge.thumbnailUrl}
              />
            ) : (
              <img
                className="w-full h-64 mt-2 object-cover bg-black"
                src={challenge.thumbnailUrl}
                alt={challenge.title}
              />
            )}
          </div>
          <p className="mt-2">{challenge.description}</p>
          <p className="text-sm text-gray-500 mt-2">Deadline: {new Date(challenge.deadline).toLocaleDateString()}</p>
          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-4">
              <button onClick={() => handleLike(challenge.id)} className="flex items-center space-x-1">
                <span>❤️</span>
                <span>{challenge.likes}</span>
              </button>
              <button className="flex items-center space-x-1">
                <span>💬</span>
                <span>{challenge.comments.length}</span>
              </button>
              <button className="flex items-center space-x-1">
                <span>🔗</span>
                <span>Share</span>
              </button>
              <button onClick={() => handleFollow(challenge.id)} className="flex items-center space-x-1 bg-blue-500 text-white px-3 py-1 rounded-lg">
                <span>{challenge.isFollowing ? 'Following' : 'Follow'}</span>
              </button>
            </div>
          </div>
          <div className="mt-4">
            {challenge.comments.map((comment) => (
              <div key={comment.id} className="flex space-x-2 text-sm">
                <span className="font-bold">{comment.user}:</span>
                <span>{comment.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChallengeFeed;