export const glow = (color = "#4dd0e1", opacity = 0.3) => ({
    boxShadow: `0 0 0 1px ${color}33 inset, 0 10px 24px ${color}33, 0 0 30px ${color}${Math.round(
        opacity * 255,
    ).toString(16)}`,
});

export const gradientText = (from: string, to: string) => ({
    background: `linear-gradient(90deg, ${from}, ${to})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
});