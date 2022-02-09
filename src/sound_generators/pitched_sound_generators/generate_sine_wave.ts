import { generateSilence } from "../generate_silence";
import { PitchedSoundGenerationModel } from "../models/pitched_sound_generation_model";
import { callFrequencyProvider } from "./utils/call_frequency_generator";

export function generateSineWave(
    model: PitchedSoundGenerationModel
): Float32Array {
    const { durationMs, frequencyProvider, sampleRate } = model;
    return generateSilence({ durationMs, sampleRate }).map((x, i) =>
        Math.sin(
            ((i * (2 * Math.PI)) / sampleRate) *
                callFrequencyProvider({
                    frequencyProvider,
                    sampleIndex: i,
                    sampleRate,
                })
        )
    );
}
