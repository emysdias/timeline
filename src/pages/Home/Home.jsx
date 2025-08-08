import { useState } from "react";
import initialData from "../../data/timelineItems";
import { Toolbar } from "../../components/Toolbar/Toolbar";
import { Timeline } from "../../components/Timeline/Timeline";
import { toEpochDay } from "../../utils/dateUtils";
import "../../styles.css";

export default function Home() {
  const [items, setItems] = useState(initialData);
  const [pxPerDay, setPxPerDay] = useState(14);

  const onZoomIn = () => setPxPerDay((z) => Math.min(60, z + 2));
  const onZoomOut = () => setPxPerDay((z) => Math.max(4, z - 2));
  const onFit = () => {
    const days = items.flatMap((it) => [
      toEpochDay(it.start),
      toEpochDay(it.end),
    ]);
    const min = Math.min(...days);
    const max = Math.max(...days);
    const totalDays = Math.max(1, max - min + 1);
    const vw = Math.max(800, window.innerWidth - 300);
    const target = Math.min(
      60,
      Math.max(4, Math.floor((vw * 0.8) / totalDays))
    );
    setPxPerDay(target);
  };

  const onReset = () => setItems(initialData);

  const onAddItem = () => {
    const id = String(Date.now());
    const today = new Date();
    const y = today.getUTCFullYear();
    const m = String(today.getUTCMonth() + 1).padStart(2, "0");
    const d = String(today.getUTCDate()).padStart(2, "0");
    const start = `${y}-${m}-${d}`;
    const end = `${y}-${m}-${String(today.getUTCDate() + 3).padStart(2, "0")}`;
    setItems((prev) => [...prev, { id, name: "New item", start, end }]);
  };

  return (
    <div className="home">
      <Toolbar
        zoom={pxPerDay}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onFit={onFit}
        onReset={onReset}
        onAddItem={onAddItem}
      />
      <Timeline items={items} setItems={setItems} pxPerDay={pxPerDay} />
    </div>
  );
}
