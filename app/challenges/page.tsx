'use client';

import ChallengeList from '../components/ChallengeList';

export default function ChallengesPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Challenges</h1>
      <ChallengeList />
    </div>
  );
}