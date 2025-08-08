import { useState } from "react";
import initialData from "../../data/timelineItems";
import { Toolbar } from "../../components/Toolbar/Toolbar";
import { Timeline } from "../../components/Timeline/Timeline";
import "../../styles.css";

export default function Home() {
  const [items, setItems] = useState(initialData);
  const [pxPerDay, setPxPerDay] = useState(14);

  const onZoomIn = () => setPxPerDay((z) => Math.min(60, z + 2));
  const onZoomOut = () => setPxPerDay((z) => Math.max(4, z - 2));
  const onReset = () => setItems(initialData);

  return (
    <div className="home">
      <Toolbar
        zoom={pxPerDay}
        onZoomIn={onZoomIn}
        onZoomOut={onZoomOut}
        onReset={onReset}
      />
      <Timeline items={items} setItems={setItems} pxPerDay={pxPerDay} />
    </div>
  );
}
