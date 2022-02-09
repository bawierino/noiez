import { generateSilence } from "../generate_silence";
import { PitchedSoundGenerationModel } from "../models/pitched_sound_generation_model";
import { callFrequencyProvider } from "./utils/call_frequency_generator";

export function generateSquareWave(
    model: PitchedSoundGenerationModel
): Float32Array {
    const { durationMs, frequencyProvider, sampleRate } = model;
    return generateSilence({ durationMs, sampleRate }).map(
        (x, i) =>
            Math.sign(
                Math.sin(
                    (2 *
                        Math.PI *
                        callFrequencyProvider({
                            sampleRate,
                            frequencyProvider,
                            sampleIndex: i,
                        }) *
                        i) /
                        sampleRate
                )
            ) / 3
    );
}
