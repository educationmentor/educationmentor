import React from "react";

/**
 * JourneyStamp — the page's one signature decorative device.
 * A rotated, dashed "visa stamp" badge. Used sparingly (hero, stage
 * sections, blog postmarks) so it stays memorable instead of decorative
 * clutter. Keep every other section quiet.
 *
 * Props:
 *  - label: short text inside the stamp (e.g. "EST.", "SAATHI", a date)
 *  - sub: smaller second line (optional)
 *  - tone: "marigold" | "teal" | "navy"
 *  - rotate: rotation in degrees (default -8)
 *  - size: pixel diameter (default 88)
 */
const TONES = {
  marigold: { ring: "#E7A335", text: "#8A5A12" },
  teal: { ring: "#2F6F62", text: "#1E4A40" },
  navy: { ring: "#14213D", text: "#14213D" },
};

const JourneyStamp = ({
  label,
  sub,
  tone = "marigold",
  rotate = -8,
  size = 88,
  className = "",
}) => {
  const colors = TONES[tone] || TONES.marigold;

  return (
    <div
      className={`inline-flex select-none items-center justify-center rounded-full border-2 border-dashed ${className}`}
      style={{
        width: size,
        height: size,
        borderColor: colors.ring,
        transform: `rotate(${rotate}deg)`,
        background: "rgba(255,255,255,0.85)",
      }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center justify-center text-center leading-none px-2">
        <span
          className="font-semibold tracking-tight"
          style={{ color: colors.text, fontSize: size * 0.16 }}
        >
          {label}
        </span>
        {sub && (
          <span
            className="mt-1 opacity-80"
            style={{ color: colors.text, fontSize: size * 0.11 }}
          >
            {sub}
          </span>
        )}
      </div>
    </div>
  );
};

export default JourneyStamp;