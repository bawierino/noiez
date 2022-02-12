import { generateSilence } from "../generate_silence";
import { SoundGenerationModel } from "../sound_generation_model";
import { callAmplitudeProvider } from "../utils/call_amplitude_provider";

export function generateWhiteNoise(model: SoundGenerationModel): Float32Array {
    const { durationMs, sampleRate, amplitudeProvider } = model;
    return generateSilence({ durationMs, sampleRate }).map(
        (x, i) =>
            callAmplitudeProvider({
                amplitudeProvider,
                sampleIndex: i,
                sampleRate,
            }) *
            (Math.random() - 0.5)
    );
}
