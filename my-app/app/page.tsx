"use client";

import { useState, useEffect } from "react";

// --- Workout Data ---
const DAYS = [
  { key: "sun", name: "Sunday", letter: "S", subtitle: "Rest Day", isRest: true, exercises: [] },
  {
    key: "mon",
    name: "Monday",
    letter: "M",
    subtitle: "Chest & Core",
    isRest: false,
    exercises: [
      { id: "mon_1", name: "Toe Stretching Hold", detail: "30 sec · 3 sets", type: "timed", duration: 30, sets: 3, category: "stretch" },
      { id: "mon_2", name: "Squats", detail: "40 reps", type: "reps", reps: 40, category: "legs" },
      { id: "mon_3", name: "Diamond Push-ups", detail: "45 reps", type: "reps", reps: 45, category: "push" },
      { id: "mon_4", name: "Declined Push-ups", detail: "35 reps", type: "reps", reps: 35, category: "push" },
      { id: "mon_5", name: "Plank", detail: "1.5 min · 3 sets", type: "timed", duration: 90, sets: 3, category: "abs" },
      { id: "mon_6", name: "Seated In-outs", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "mon_7", name: "Leg Raises", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "mon_8", name: "Russian Twists", detail: "40 reps · 3 sets", type: "reps", reps: 120, category: "abs" },
      { id: "mon_9", name: "Cross Mountain Climbers", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs", toFailure: true },
    ],
  },
  {
    key: "tue",
    name: "Tuesday",
    letter: "T",
    subtitle: "Shoulders & Core",
    isRest: false,
    exercises: [
      { id: "tue_1", name: "Squats", detail: "40 reps", type: "reps", reps: 40, category: "legs" },
      { id: "tue_2", name: "Pike Push-ups", detail: "25 reps", type: "reps", reps: 25, category: "push" },
      { id: "tue_3", name: "Declined Push-ups", detail: "35 reps", type: "reps", reps: 35, category: "push" },
      { id: "tue_4", name: "Plank", detail: "1.5 min · 3 sets", type: "timed", duration: 90, sets: 3, category: "abs" },
      { id: "tue_5", name: "Seated In-outs", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "tue_6", name: "Cross Mountain Climbers", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "tue_7", name: "Russian Twists", detail: "40 reps · 3 sets", type: "reps", reps: 120, category: "abs" },
      { id: "tue_8", name: "Leg Raises", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs", toFailure: true },
    ],
  },
  {
    key: "wed",
    name: "Wednesday",
    letter: "W",
    subtitle: "Triceps & Core",
    isRest: false,
    exercises: [
      { id: "wed_1", name: "Squats", detail: "50 reps", type: "reps", reps: 50, category: "legs" },
      { id: "wed_2", name: "Pull-ups", detail: "5-10 reps · 3 sets", type: "reps", reps: 30, category: "push" },
      { id: "wed_3", name: "Tricep Dips", detail: "40 reps", type: "reps", reps: 40, category: "arms" },
      { id: "wed_4", name: "Diamond Push-ups", detail: "45 reps", type: "reps", reps: 45, category: "push" },
      { id: "wed_5", name: "Plank", detail: "1.5 min · 3 sets", type: "timed", duration: 90, sets: 3, category: "abs" },
      { id: "wed_6", name: "Seated In-outs", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "wed_7", name: "Leg Raises", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "wed_8", name: "Cross Mountain Climbers", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "wed_9", name: "Russian Twists", detail: "40 reps · 3 sets", type: "reps", reps: 120, category: "abs", toFailure: true },
    ],
  },
  {
    key: "thu",
    name: "Thursday",
    letter: "T",
    subtitle: "Upper Body & Core",
    isRest: false,
    exercises: [
      { id: "thu_1", name: "Squats", detail: "40 reps", type: "reps", reps: 40, category: "legs" },
      { id: "thu_2", name: "Diamond Push-ups", detail: "45 reps", type: "reps", reps: 45, category: "push" },
      { id: "thu_3", name: "Pike Push-ups", detail: "25 reps", type: "reps", reps: 25, category: "push" },
      { id: "thu_4", name: "Declined Push-ups", detail: "35 reps", type: "reps", reps: 35, category: "push" },
      { id: "thu_5", name: "Plank", detail: "1.5 min · 3 sets", type: "timed", duration: 90, sets: 3, category: "abs" },
      { id: "thu_6", name: "Seated In-outs", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "thu_7", name: "Russian Twists", detail: "40 reps · 3 sets", type: "reps", reps: 120, category: "abs" },
      { id: "thu_8", name: "Cross Mountain Climbers", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs", toFailure: true },
    ],
  },
  {
    key: "fri",
    name: "Friday",
    letter: "F",
    subtitle: "Full Upper & Core",
    isRest: false,
    exercises: [
      { id: "fri_1", name: "Squats", detail: "40 reps", type: "reps", reps: 40, category: "legs" },
      { id: "fri_2", name: "Pull-ups", detail: "5-10 reps · 3 sets", type: "reps", reps: 30, category: "push" },
      { id: "fri_3", name: "Diamond Push-ups", detail: "65 reps", type: "reps", reps: 65, category: "push" },
      { id: "fri_4", name: "Tricep Dips", detail: "40 reps", type: "reps", reps: 40, category: "arms" },
      { id: "fri_5", name: "Pike Push-ups", detail: "30 reps", type: "reps", reps: 30, category: "push" },
      { id: "fri_6", name: "Plank", detail: "1.5 min · 3 sets", type: "timed", duration: 90, sets: 3, category: "abs" },
      { id: "fri_7", name: "Leg Raises", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "fri_8", name: "Seated In-outs", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "fri_9", name: "Cross Mountain Climbers", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "fri_10", name: "Russian Twists", detail: "40 reps · 3 sets", type: "reps", reps: 120, category: "abs", toFailure: true },
    ],
  },
  {
    key: "sat",
    name: "Saturday",
    letter: "S",
    subtitle: "Full Intensity",
    isRest: false,
    exercises: [
      { id: "sat_1", name: "Toe Stretching Hold", detail: "30 sec · 3 sets", type: "timed", duration: 30, sets: 3, category: "stretch" },
      { id: "sat_2", name: "Seated Toe Stretching Hold", detail: "30 sec · 3 sets", type: "timed", duration: 30, sets: 3, category: "stretch" },
      { id: "sat_3", name: "Squats", detail: "45 reps", type: "reps", reps: 45, category: "legs" },
      { id: "sat_4", name: "Diamond Push-ups", detail: "60 reps", type: "reps", reps: 60, category: "push" },
      { id: "sat_5", name: "Declined Push-ups", detail: "45 reps", type: "reps", reps: 45, category: "push" },
      { id: "sat_6", name: "Pike Push-ups", detail: "30 reps", type: "reps", reps: 30, category: "push" },
      { id: "sat_7", name: "Tricep Dips", detail: "45 reps", type: "reps", reps: 45, category: "arms" },
      { id: "sat_8", name: "Plank", detail: "1.5 min · 3 sets", type: "timed", duration: 90, sets: 3, category: "abs" },
      { id: "sat_9", name: "Seated In-outs", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "sat_10", name: "Leg Raises", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs" },
      { id: "sat_11", name: "Russian Twists", detail: "40 reps · 3 sets", type: "reps", reps: 120, category: "abs" },
      { id: "sat_12", name: "Cross Mountain Climbers", detail: "50 reps · 3 sets", type: "reps", reps: 150, category: "abs", toFailure: true },
    ],
  },
];

export default function Home() {
  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const [completedExercises, setCompletedExercises] = useState<Record<string, string[]>>({});

  useEffect(() => {
    // Set active day to today
    const todayIndex = new Date().getDay();
    setActiveDayIndex(todayIndex);

    // Load completed
    const loaded: Record<string, string[]> = {};
    DAYS.forEach(d => {
      const key = `pt_${d.key}_${new Date().toISOString().slice(0, 10)}`;
      try {
        const raw = localStorage.getItem(key);
        loaded[d.key] = raw ? JSON.parse(raw) : [];
      } catch {
        loaded[d.key] = [];
      }
    });
    setCompletedExercises(loaded);
  }, []);

  const toggleCompleted = (dayKey: string, exId: string) => {
    setCompletedExercises(prev => {
      const dayCompleted = prev[dayKey] || [];
      const isDone = dayCompleted.includes(exId);
      const newDayCompleted = isDone ? dayCompleted.filter(id => id !== exId) : [...dayCompleted, exId];
      const newState = { ...prev, [dayKey]: newDayCompleted };
      localStorage.setItem(`pt_${dayKey}_${new Date().toISOString().slice(0, 10)}`, JSON.stringify(newDayCompleted));
      return newState;
    });
  };

  const activeDay = DAYS[activeDayIndex] || DAYS[0];
  const isDone = (exId: string) => (completedExercises[activeDay.key] || []).includes(exId);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00E5FF] selection:text-black pb-24">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-[#1f2128]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white text-black rounded-lg flex items-center justify-center font-black text-sm tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            PT
          </div>
          <h1 className="text-lg font-bold tracking-tight">PersonalTrainz</h1>
        </div>
        <div className="text-sm font-semibold text-[#00E5FF] shadow-[0_0_10px_rgba(0,229,255,0.2)]">
          {completedExercises[activeDay.key]?.length || 0} / {activeDay.exercises.length}
        </div>
      </header>

      {/* Tabs */}
      <nav className="flex overflow-x-auto gap-2 px-4 py-3 border-b border-[#1f2128] no-scrollbar">
        {DAYS.map((day, idx) => (
          <button
            key={day.key}
            onClick={() => setActiveDayIndex(idx)}
            className={`flex flex-col items-center justify-center min-w-[56px] h-[52px] rounded-xl border transition-all ${
              activeDayIndex === idx
                ? "bg-white border-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                : "bg-transparent border-[#1f2128] text-[#9499a8] hover:bg-[#0f1014]"
            }`}
          >
            <span className="font-bold text-[15px] leading-none">{day.letter}</span>
            <span className="text-[9px] uppercase font-semibold mt-1 opacity-80">{day.key}</span>
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="p-4 md:p-6 max-w-2xl mx-auto">
        {activeDay.isRest ? (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
            <div className="w-20 h-20 rounded-full border border-[#2d313c] flex items-center justify-center mb-6 text-[#9499a8]">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8m0 0l-5 5m5-5l5 5m-5-13a8 8 0 100 16 8 8 0 000-16z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Rest Day</h2>
            <p className="text-[#9499a8] max-w-[260px]">Recovery is part of the program. Rest, hydrate, and come back stronger tomorrow.</p>
          </div>
        ) : (
          <div className="animate-fade-in">
            <div className="mb-6 px-2">
              <h2 className="text-3xl font-black tracking-tight">{activeDay.name}</h2>
              <p className="text-[#00E5FF] font-semibold mt-1">{activeDay.subtitle}</p>
            </div>
            <div className="space-y-3">
              {activeDay.exercises.map((ex) => (
                <div
                  key={ex.id}
                  onClick={() => toggleCompleted(activeDay.key, ex.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer ${
                    isDone(ex.id)
                      ? "bg-[#0c0c0c] border-[#1f2128] opacity-60"
                      : "bg-[#0f1014] border-[#1f2128] hover:border-[#2d313c] shadow-sm"
                  }`}
                >
                  <div>
                    <h3 className={`font-bold text-[16px] ${isDone(ex.id) ? "line-through text-[#9499a8]" : "text-white"}`}>
                      {ex.name}
                    </h3>
                    <p className={`text-sm mt-0.5 ${isDone(ex.id) ? "text-[#4a4e59]" : "text-[#9499a8]"}`}>
                      {ex.detail}
                    </p>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                      isDone(ex.id)
                        ? "bg-[#00E5FF] border-[#00E5FF] text-black shadow-[0_0_10px_rgba(0,229,255,0.3)]"
                        : "border-[#2d313c] text-transparent"
                    }`}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
