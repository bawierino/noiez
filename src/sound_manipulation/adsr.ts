export function adsr(model: {
    currentTimeMs: number;
    attack: number;
    decay: number;
    sustain: number;
    release: number;
}): number {
    const { attack, currentTimeMs, decay, release, sustain } = model;

    if (currentTimeMs <= attack) {
        return (1 / attack) * currentTimeMs;
    } else if (currentTimeMs <= attack + decay) {
        return Math.pow(sustain, (currentTimeMs - attack) / decay);
    } else {
        return Math.max(
            0,
            (sustain * (decay + release + attack - currentTimeMs)) / release
        );
    }
    return 1;
}
