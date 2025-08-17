'use client'

import { useMemo } from 'react'
import Image from 'next/image'

// Example props
type SubmissionCalendar = {
  [timestamp: string]: number
}

export default function SubmissionCalendar({
  submissionCalendar,
  username = 'ManeeshGowda',
}: {
  submissionCalendar: SubmissionCalendar
  username?: string
}) {
  // Convert submission calendar into date-value objects
  const data = useMemo(() => {
    return Object.entries(submissionCalendar).map(([ts, count]) => {
      const date = new Date(Number(ts) * 1000) // timestamp -> date
      return { date, count }
    })
  }, [submissionCalendar])

  // Find min & max for color scaling
  const maxCount = Math.max(...data.map((d) => d.count), 1)

  // Utility to get color shade
  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-200'
    const intensity = Math.ceil((count / maxCount) * 4) // 1–4 levels
    return [
      'bg-green-100',
      'bg-green-300',
      'bg-green-500',
      'bg-green-700',
      'bg-green-900',
    ][intensity - 1]
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header with avatar + username */}
      <div className="flex items-center gap-3 mb-6">
        <Image
          src="/leetcode-dummy.png" // replace later
          alt="User Avatar"
          width={50}
          height={50}
          className="rounded-full border"
        />
        <h2 className="text-xl font-bold">{username}</h2>
      </div>

      {/* Heatmap grid */}
      <div className="grid grid-cols-53 gap-1">
        {Array.from({ length: 53 }).map((_, weekIdx) => (
          <div key={weekIdx} className="flex flex-col gap-1">
            {Array.from({ length: 7 }).map((_, dayIdx) => {
              const date = new Date()
              date.setDate(date.getDate() - (52 - weekIdx) * 7 - (6 - dayIdx))

              const dayData = data.find(
                (d) =>
                  d.date.toDateString() === date.toDateString()
              )

              return (
                <div
                  key={dayIdx}
                  title={`${date.toDateString()} • ${dayData?.count || 0} submissions`}
                  className={`w-3 h-3 rounded-sm ${getColor(
                    dayData?.count || 0
                  )}`}
                ></div>
              )
            })}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="flex justify-end w-full gap-2 mt-4 text-xs text-gray-500">
        <span>Less</span>
        <div className="w-3 h-3 bg-gray-200 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-300 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-700 rounded-sm"></div>
        <div className="w-3 h-3 bg-green-900 rounded-sm"></div>
        <span>More</span>
      </div>
    </div>
  )
}
