import { ImageResponse } from "next/og";
export const alt =
  "Sandra Ogbudinkpa — Software Engineer. Petal Relay and KinOS engineering case studies.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#fff9fb",
          color: "#342638",
          width: "100%",
          height: "100%",
          padding: "72px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#99385f" }}>
          Sandra Ogbudinkpa
        </div>
        <div style={{ display: "flex", fontSize: 65, lineHeight: 1.15 }}>
          Reliable products. Thoughtful interactions.
        </div>
        <div style={{ display: "flex", fontSize: 26 }}>
          Petal Relay · KinOS · Engineering case studies
        </div>
      </div>
    ),
    size,
  );
}
