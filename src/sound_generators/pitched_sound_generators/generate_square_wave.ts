import { generateSilence } from "../generate_silence";
import { PitchedSoundGenerationModel } from "../models/pitched_sound_generation_model";
import { callAmplitudeProvider } from "../utils/call_amplitude_provider";
import { callFrequencyProvider } from "./utils/call_frequency_provider";

export function generateSquareWave(
    model: PitchedSoundGenerationModel
): Float32Array {
    const { durationMs, frequencyProvider, sampleRate, amplitudeProvider } =
        model;
    return generateSilence({ durationMs, sampleRate }).map(
        (x, i) =>
            (callAmplitudeProvider({
                amplitudeProvider,
                sampleIndex: i,
                sampleRate,
            }) *
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
                )) /
            3
    );
}
