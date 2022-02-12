import { generateSilence } from "../generate_silence";
import { PitchedSoundGenerationModel } from "./pitched_sound_generation_model";
import { callAmplitudeProvider } from "../utils/call_amplitude_provider";
import { callFrequencyProvider } from "./utils/call_frequency_provider";

export function generateSineWave(
    model: PitchedSoundGenerationModel
): Float32Array {
    const { durationMs, frequencyProvider, sampleRate, amplitudeProvider } =
        model;
    return generateSilence({ durationMs, sampleRate }).map(
        (x, i) =>
            callAmplitudeProvider({
                amplitudeProvider,
                sampleIndex: i,
                sampleRate,
            }) *
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
