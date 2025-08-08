import { toEpochDay } from "./dateUtils";
import { packLanes } from "./packLanes";

export function computeLayout(items) {
  const lanes = packLanes(items);
  const placed = lanes.flatMap((laneItems, lane) =>
    laneItems.map((it) => ({
      ...it,
      lane,
      startDay: toEpochDay(it.start),
      endDay: toEpochDay(it.end),
    }))
  );

  if (!placed.length) {
    const today = Math.floor(Date.now() / 86400000);
    return { placed, lanesCount: 0, minDay: today, maxDay: today };
  }

  const minDay = Math.min(...placed.map((p) => p.startDay));
  const maxDay = Math.max(...placed.map((p) => p.endDay));
  return { placed, lanesCount: lanes.length, minDay, maxDay };
}
