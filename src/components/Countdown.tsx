import React, { useEffect, useMemo, useState } from 'react';

interface CountdownProps {
  // Target date/time in ISO or Date; default = end of current week (Sun 23:59:59) Lima time
  target?: Date | string;
  label?: string;
  emphasis?: boolean; // if true, uses accent styling for stronger visibility
  size?: 'sm' | 'md'; // compact for mobile
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

const Countdown: React.FC<CountdownProps> = React.memo(({ target, label = 'Oferta termina en', emphasis = false, size = 'md', urgentThresholdHours = 12 }) => {
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
    <div className="inline-flex flex-col items-center text-white" role="timer" aria-live="off" aria-atomic="true">
      <span className="sr-only">{label}</span>
      <span aria-hidden className={size === 'sm' ? 'text-xs opacity-90' : 'text-sm md:text-base opacity-90'}>{label}</span>
      <div className={`mt-2 flex items-center gap-1.5 md:gap-2 font-mono ${isUrgent && emphasis ? 'animate-pulse' : ''}`}>
        {d > 0 && (
          <div className={`${emphasis ? 'bg-accent-600 text-white' : 'bg-white/10 text-white'} rounded-lg ${size === 'sm' ? 'px-2 py-1 text-base' : 'px-3 py-2 text-lg md:text-2xl'}`}>
            {pad2(d)}<span className={`${size === 'sm' ? 'text-[10px]' : 'text-xs md:text-sm'} ml-1 opacity-80`}>d</span>
          </div>
        )}
        <div className={`${emphasis ? 'bg-accent-600 text-white' : 'bg-white/10 text-white'} rounded-lg ${size === 'sm' ? 'px-2 py-1 text-base' : 'px-3 py-2 text-lg md:text-2xl'}`}>
          {pad2(h)}<span className={`${size === 'sm' ? 'text-[10px]' : 'text-xs md:text-sm'} ml-1 opacity-80`}>h</span>
        </div>
        <div className={`${emphasis ? 'bg-accent-600 text-white' : 'bg-white/10 text-white'} rounded-lg ${size === 'sm' ? 'px-2 py-1 text-base' : 'px-3 py-2 text-lg md:text-2xl'}`}>
          {pad2(m)}<span className={`${size === 'sm' ? 'text-[10px]' : 'text-xs md:text-sm'} ml-1 opacity-80`}>m</span>
        </div>
        <div className={`${emphasis ? 'bg-accent-600 text-white' : 'bg-white/10 text-white'} rounded-lg ${size === 'sm' ? 'px-2 py-1 text-base' : 'px-3 py-2 text-lg md:text-2xl'}`}>
          {pad2(s)}<span className={`${size === 'sm' ? 'text-[10px]' : 'text-xs md:text-sm'} ml-1 opacity-80`}>s</span>
        </div>
      </div>
    </div>
  );
});

Countdown.displayName = 'Countdown';

export default Countdown;
