import { generateSilence } from "../generate_silence";
import { SoundGenerationModel } from "../models/sound_generation_model";

export function generateWhiteNoise(model: SoundGenerationModel): Float32Array {
    const { durationMs, sampleRate } = model;
    return generateSilence({ durationMs, sampleRate }).map(
        (x, i) => Math.random() - 0.5
    );
}
