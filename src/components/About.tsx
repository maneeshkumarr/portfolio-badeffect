"use client"

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { SiGithub, SiLeetcode, SiGeeksforgeeks } from "react-icons/si"

export default function AboutPage() {
  const cardClasses =
    "bg-[#2b0505] border border-[#ffd700]/30 shadow-[0_0_25px_rgba(255,215,0,0.3)] " +
    "hover:shadow-[0_0_50px_rgba(255,215,0,0.6)] hover:border-[#ffd700]/50 " +
    "transition-all rounded-2xl"

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#180202] via-[#2b0505] to-[#430a0a] p-8">
      <h1 className="text-5xl font-extrabold text-center text-[#ffd700] mb-12 drop-shadow-lg">
         My Coding Streaks
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* GitHub */}
        <Card className={cardClasses}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-[#ffd700]">
              <SiGithub className="text-2xl" /> GitHub
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <img
                src="https://avatars.githubusercontent.com/maneeshkumarr"
                alt="GitHub Avatar"
                className="w-16 h-16 rounded-full border-2 border-[#ffd700] shadow-[0_0_15px_rgba(255,215,0,0.6)]"
              />
              <div>
                <h2 className="text-lg font-semibold text-white">maneeshkumarr</h2>
                <p className="text-sm text-gray-300">💻 Full-Stack Developer</p>
              </div>
            </div>

            {/* GitHub Streak with black non-streak days */}
            <div className="rounded-xl overflow-hidden border border-[#ffd700]/40 shadow-[0_0_20px_rgba(255,215,0,0.4)]">
              <img
                src="https://streak-stats.demolab.com?user=maneeshkumarr&theme=dark&hide_border=true&ring=FFD700&fire=00FF00&currStreakLabel=FFD700&dates=000000"
                alt="GitHub Streak"
                className="w-full"
              />
            </div>

            {/* Contribution Graph */}
            <div className="rounded-xl overflow-hidden border border-[#ffd700]/40 shadow-[0_0_20px_rgba(255,215,0,0.4)]">
              <img
                src="https://ghchart.rshah.org/maneeshkumarr"
                alt="GitHub Contribution Graph"
                className="w-full"
              />
            </div>
          </CardContent>
        </Card>

        {/* LeetCode */}
        <Card className={cardClasses}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-[#ffd700]">
              <SiLeetcode className="text-2xl" /> LeetCode
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://leetcard.jacoblin.cool/ManeeshGowda?theme=dark&border=0&ext=heatmap"
              alt="LeetCode streak chart"
              className="rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.4)] w-full transition-all hover:shadow-[0_0_50px_rgba(255,215,0,0.6)]"
            />
          </CardContent>
        </Card>

        {/* GeeksforGeeks */}
        <Card className={cardClasses}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl text-[#ffd700]">
              <SiGeeksforgeeks className="text-2xl" /> GeeksforGeeks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="https://geeks-for-geeks-stats-card.vercel.app/?username=manishperm1aj&theme=dark"
              alt="GFG streak chart"
              className="rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.4)] w-full transition-all hover:shadow-[0_0_50px_rgba(255,215,0,0.6)]"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
