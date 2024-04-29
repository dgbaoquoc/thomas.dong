import { ImageResponse } from "next/og";

export const size = {
  width: 24,
  height: 24,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 16,
          background: "black",
          padding: "4px",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        TD
      </div>
    ),
    {
      ...size,
    }
  );
}
