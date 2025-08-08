import { fromEpochDay } from "./dateUtils";

export function monthTicks(minDay, maxDay) {
  const first = new Date(fromEpochDay(minDay) + "T00:00:00Z");
  const last = new Date(fromEpochDay(maxDay) + "T00:00:00Z");
  let y = first.getUTCFullYear();
  let m = first.getUTCMonth();
  const arr = [];
  while (
    y < last.getUTCFullYear() ||
    (y === last.getUTCFullYear() && m <= last.getUTCMonth())
  ) {
    const day = Date.UTC(y, m, 1) / (24 * 60 * 60 * 1000);
    arr.push({ day, label: `${y}-${String(m + 1).padStart(2, "0")}` });
    m++;
    if (m > 11) {
      m = 0;
      y++;
    }
  }
  return arr;
}
