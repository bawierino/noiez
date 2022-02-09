import { generateSilence } from "../generate_silence";
import { PitchedSoundGenerationModel } from "../models/pitched_sound_generation_model";
import { callFrequencyProvider } from "./utils/call_frequency_generator";

export function generateTriangleWave(
    model: PitchedSoundGenerationModel
): Float32Array {
    const { durationMs, frequencyProvider, sampleRate } = model;
    return generateSilence({ durationMs, sampleRate }).map(
        (x, i) =>
            Math.asin(
                Math.sin(
                    (2 * Math.PI * i) /
                        sampleRate /
                        (1 /
                            callFrequencyProvider({
                                frequencyProvider,
                                sampleIndex: i,
                                sampleRate,
                            }))
                )
            ) * 2
    );
}
