import { ImageResponse } from "next/og";

export const alt = "Regnskapslosen AS – regnskapskontor i Kristiansund";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#00493e",
          color: "white",
        }}
      >
        <div style={{ fontSize: 40, opacity: 0.8 }}>Regnskapslosen AS</div>
        <div style={{ fontSize: 78, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Autorisert regnskapskontor i Kristiansund
        </div>
        <div style={{ fontSize: 34, marginTop: 36, opacity: 0.85 }}>
          Regnskap, lønn og rådgiving i Tripletex
        </div>
      </div>
    ),
    size,
  );
}
