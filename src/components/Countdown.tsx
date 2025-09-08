import React, { useEffect, useMemo, useState } from 'react';

interface CountdownProps {
  // Target date/time in ISO or Date; default = end of current week (Sun 23:59:59) Lima time
  target?: Date | string;
  label?: string;
  emphasis?: boolean; // if true, uses accent styling for stronger visibility
  urgentThresholdHours?: number; // pulse when below threshold
}

// Compute end of current week in Lima timezone (America/Lima)
const getEndOfWeekLima = (): Date => {
  const now = new Date();
  // Lima doesn't observe DST; use offset -05:00 but rely on locale for safety
  // Find days until Sunday (0 = Sunday)
  const daysUntilSunday = (7 - now.getDay()) % 7; // 0 if today Sunday
  const end = new Date(now);
  end.setDate(now.getDate() + daysUntilSunday);
  end.setHours(23, 59, 59, 999);
  return end;
};

// Format remaining time as dd:hh:mm:ss (with days if >= 1)
const formatDiff = (ms: number) => {
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const totalSeconds = Math.floor(ms / 1000);
  const d = Math.floor(totalSeconds / 86400);
  const h = Math.floor((totalSeconds % 86400) / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return { d, h, m, s };
};

const pad2 = (n: number) => n.toString().padStart(2, '0');

const Countdown: React.FC<CountdownProps> = React.memo(({ target, label = 'Oferta termina en', emphasis = false, urgentThresholdHours = 12 }) => {
  const targetDate = useMemo(() => (target ? new Date(target) : getEndOfWeekLima()), [target]);
  const [remaining, setRemaining] = useState<number>(() => Math.max(0, targetDate.getTime() - Date.now()));

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(Math.max(0, targetDate.getTime() - Date.now()));
    }, 1000);
    return () => clearInterval(id);
  }, [targetDate]);

  const { d, h, m, s } = useMemo(() => formatDiff(remaining), [remaining]);
  const hoursLeft = Math.floor(remaining / 3600000);
  const isUrgent = hoursLeft <= urgentThresholdHours;

  return (
    <div className="flex flex-col items-center text-white" role="timer" aria-live="off" aria-atomic="true">
      <span className="sr-only">{label}</span>
      <span className="text-sm md:text-base opacity-90 mb-3">{label}</span>

      {/* Contenedor principal de círculos */}
      <div className={`flex items-center justify-center gap-3 md:gap-4 ${isUrgent && emphasis ? 'animate-pulse' : ''}`}>
        {/* Días */}
        {d > 0 && (
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-300">
              <span className="text-gray-900 font-bold text-lg md:text-xl">{pad2(d)}</span>
            </div>
            <span className="text-xs md:text-sm text-white/80 mt-1 font-medium">Días</span>
          </div>
        )}

        {/* Horas */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-300">
            <span className="text-gray-900 font-bold text-lg md:text-xl">{pad2(h)}</span>
          </div>
          <span className="text-xs md:text-sm text-white/80 mt-1 font-medium">Horas</span>
        </div>

        {/* Minutos */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-300">
            <span className="text-gray-900 font-bold text-lg md:text-xl">{pad2(m)}</span>
          </div>
          <span className="text-xs md:text-sm text-white/80 mt-1 font-medium">Minutos</span>
        </div>

        {/* Segundos */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-amber-400 rounded-full flex items-center justify-center shadow-lg ring-2 ring-amber-300">
            <span className="text-gray-900 font-bold text-lg md:text-xl">{pad2(s)}</span>
          </div>
          <span className="text-xs md:text-sm text-white/80 mt-1 font-medium">Segundos</span>
        </div>
      </div>
    </div>
  );
});

Countdown.displayName = 'Countdown';

export default Countdown;
