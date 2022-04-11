export const graphConfig = {
  automaticRearrangeAfterDropNode: true,
  collapsible: true,
  directed: true,
  focusAnimationDuration: 0.75,
  focusZoom: 1,
  freezeAllDragEvents: false,
  height: 800,
  highlightDegree: 2,
  highlightOpacity: 0.2,
  linkHighlightBehavior: true,
  maxZoom: 12,
  minZoom: 0.05,
  nodeHighlightBehavior: true,
  panAndZoom: false,
  staticGraph: false,
  staticGraphWithDragAndDrop: false,
  width: 1200,
  d3: {
    alphaTarget: 0.05,
    gravity: -1150,
    linkLength: 180,
    linkStrength: 1,
    disableLinkForce: false,
  },
  node: {
    color: "#d3d3d3",
    fontColor: "black",
    fontSize: 16,
    fontWeight: "normal",
    highlightColor: "red",
    highlightFontSize: 16,
    highlightFontWeight: "bold",
    highlightStrokeColor: "red",
    highlightStrokeWidth: 1.2,
    mouseCursor: "crosshair",
    opacity: 0.9,
    renderLabel: true,
    size: 400,
    strokeColor: "none",
    strokeWidth: 1,
    symbolType: "circle",
  },
  link: {
    color: "lightgray",
    fontColor: "black",
    fontSize: 8,
    fontWeight: "normal",
    highlightColor: "red",
    highlightFontSize: 8,
    highlightFontWeight: "normal",
    opacity: 1,
    renderLabel: false,
    semanticStrokeWidth: true,
    strokeWidth: 3,
    markerHeight: 9,
    markerWidth: 4,
    strokeLinecap: "butt",
  },
};