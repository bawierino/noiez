import { generateSilence } from "../generate_silence";
import { PitchedSoundGenerationModel } from "../models/pitched_sound_generation_model";
import { callAmplitudeProvider } from "../utils/call_amplitude_provider";
import { callFrequencyProvider } from "./utils/call_frequency_provider";

export function generateSawtoothWave(
    model: PitchedSoundGenerationModel
): Float32Array {
    const { durationMs, frequencyProvider, amplitudeProvider, sampleRate } =
        model;
    return generateSilence({ durationMs, sampleRate }).map(
        (x, i) =>
            callAmplitudeProvider({
                amplitudeProvider,
                sampleIndex: i,
                sampleRate,
            }) *
            (1 / 5) *
            Math.atan(
                1 /
                    Math.tan(
                        (Math.PI * i) /
                            sampleRate /
                            (1 /
                                callFrequencyProvider({
                                    frequencyProvider,
                                    sampleIndex: i,
                                    sampleRate,
                                }))
                    )
            )
    );
}
