export function Toolbar({
  zoom,
  onZoomIn,
  onZoomOut,
  onFit,
  onReset,
  onAddItem,
}) {
  return (
    <div className="toolbar">
      <strong>Timeline</strong>
      <span style={{ color: "#6b7280", fontSize: 12, marginLeft: 8 }}>
        px/day: {zoom}
      </span>
      <button onClick={onZoomOut} title="Zoom out (-)">
        −
      </button>
      <button onClick={onZoomIn} title="Zoom in (+)">
        +
      </button>
      <button onClick={onFit} title="Fit to range">
        Fit
      </button>
      <div className="spacer" />
      <button onClick={onAddItem} title="Add a new item">
        + Add item
      </button>
      <button onClick={onReset} title="Reset data">
        Reset
      </button>
    </div>
  );
}
