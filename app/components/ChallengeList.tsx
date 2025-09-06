import React from 'react';

const challenges = [
  { id: 1, title: 'Ice Bucket Challenge', description: 'Pour a bucket of ice water over your head.', deadline: '2024-07-21' },
  { id: 2, title: 'Mannequin Challenge', description: 'Freeze in place like a mannequin.', deadline: '2024-07-22' },
  { id: 3, title: 'The Git Up Challenge', description: 'Dance to the song The Git Up.', deadline: '2024-07-23' },
  { id: 4, title: 'Spicy Noodle Challenge', description: 'Eat a bowl of spicy noodles as fast as you can.', deadline: '2024-07-24' },
  { id: 5, title: 'Whisper Challenge', description: 'Guess what the other person is saying while wearing noise-cancelling headphones.', deadline: '2024-07-25' },
  { id: 6, title: 'Exclusive VIP Challenge', description: 'A special challenge for our premium members.', deadline: '2024-08-01', premium: true },
];

const ChallengeList = () => {
  return (
    <div>
      {challenges.map((challenge) => (
        <div key={challenge.id} className="mb-4 p-4 border rounded-lg">
          <h3 className="font-bold flex items-center">
            {challenge.title}
            {challenge.premium && <span className="ml-2">🔒</span>}
          </h3>
          <p>{challenge.description}</p>
          <p className="text-sm text-gray-500 mt-2">Deadline: {new Date(challenge.deadline).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default ChallengeList;