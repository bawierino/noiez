export function slowVibrato(model: {
    pitch: number;
    currentTimeMs: number;
}): number {
    const { currentTimeMs, pitch } = model;
    return pitch + 0.1 * Math.sin(currentTimeMs / 100);
}
