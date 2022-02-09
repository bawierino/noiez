import { SoundGenerationModel } from "../models/sound_generation_model";

export function generateWhiteNoise(model: SoundGenerationModel): Float32Array {
    const { durationMs, sampleRate } = model;
    const durationSamples = (durationMs / 1000) * sampleRate;
    return new Float32Array(durationSamples).map((x, i) => {
        return Math.random() - 0.5;
    });
}
