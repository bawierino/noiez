import { PitchedSoundGenerationModel } from "../models/pitched_sound_generation_model";
import { callFrequencyProvider } from "./utils/call_frequency_generator";

export function generateSineWave(
    model: PitchedSoundGenerationModel
): Float32Array {
    const { durationMs, frequencyProvider, sampleRate } = model;
    const durationSamples = (durationMs / 1000) * sampleRate;
    return new Float32Array(durationSamples).map((x, i) => {
        return Math.sin(
            ((i * (2 * Math.PI)) / sampleRate) *
                callFrequencyProvider({
                    frequencyProvider,
                    sampleIndex: i,
                    sampleRate,
                })
        );
    });
}
