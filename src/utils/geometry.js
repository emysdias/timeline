export const laneTop = (lane) => lane * (44 + 8);
export const toX = (day, minDay, pxPerDay) => (day - minDay) * pxPerDay;
export const toW = (startDay, endDay, pxPerDay) =>
  Math.max(1, endDay - startDay + 1) * pxPerDay;
export const contentWidth = (minDay, maxDay, pxPerDay) =>
  (maxDay - minDay + 1) * pxPerDay + 200;
