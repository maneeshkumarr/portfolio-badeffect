'use client';

import { useEffect, useState } from 'react';

type SubmissionCalendar = {
  [timestamp: string]: number;
};

interface LeetCodeStats {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  submissionCalendar: SubmissionCalendar;
}

export default function Calendar() {
  const [data, setData] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch('/api/leetcode'); // backend proxy
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
      }
    }

    fetchStats();
  }, []);

  if (!data) return <p className="text-gray-400">Loading LeetCode stats...</p>;

  // ✅ Generate timeline
  const calendar: { date: Date; count: number }[] = [];
  const entries = Object.entries(data.submissionCalendar);
  if (entries.length) {
    const minDate = new Date(Number(entries[0][0]) * 1000);
    const maxDate = new Date(Number(entries[entries.length - 1][0]) * 1000);
    const current = new Date(minDate);

    while (current <= maxDate) {
      const ts = Math.floor(current.getTime() / 1000);
      const count = data.submissionCalendar[ts] || 0;
      calendar.push({ date: new Date(current), count });
      current.setDate(current.getDate() + 1);
    }
  }

  // Group into weeks
  const weeks: { date: Date; count: number }[][] = [];
  let currentWeek: { date: Date; count: number }[] = [];

  calendar.forEach((day) => {
    if (day.date.getDay() === 0 && currentWeek.length) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  });
  if (currentWeek.length) weeks.push(currentWeek);

  // ✅ Green shades
  const getColor = (count: number) => {
    if (count === 0) return 'bg-[#1a2e1a]'; // dark green (empty)
    if (count <= 2) return 'bg-green-700';
    if (count <= 5) return 'bg-green-500';
    if (count <= 8) return 'bg-green-300';
    return 'bg-green-100'; // peak activity
  };

  return (
    <div className="mt-12">
      {/* Username */}
      <h3 className="text-2xl font-semibold mb-1 text-green-400">
        ManeeshGowda
      </h3>
      <p className="text-gray-400 mb-4">LeetCode Activity</p>

      {/* Stats summary */}
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300 mb-6">
        <div>Solved: {data.totalSolved} / {data.totalQuestions}</div>
        <div>Easy: {data.easySolved} / {data.totalEasy}</div>
        <div>Medium: {data.mediumSolved} / {data.totalMedium}</div>
        <div>Hard: {data.hardSolved} / {data.totalHard}</div>
        <div>Acceptance: {data.acceptanceRate}%</div>
        <div>Ranking: {data.ranking}</div>
      </div>

      {/* Heatmap */}
      <div className="flex gap-1 overflow-x-auto pb-2 scrollbar-hide">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {Array.from({ length: 7 }).map((_, di) => {
              const day = week.find((d) => d.date.getDay() === di);
              const count = day ? day.count : 0;

              return (
                <div
                  key={di}
                  className={`w-4 h-4 rounded-sm ${getColor(count)}`}
                  title={
                    day
                      ? `${day.date.toDateString()}: ${count} submissions`
                      : 'No submissions'
                  }
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* CSS for scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
}
