import { adsr } from "../../sound_manipulation/adsr";
import { mixSounds } from "../../sound_manipulation/mix_sounds";
import { getMsForSampleIndex } from "../../utils/get_ms_for_sample";
import { generateSilence } from "../generate_silence";
import { SoundGenerationModel } from "../models/sound_generation_model";
import { generateSineWave } from "../pitched_sound_generators/generate_sine_wave";

export function generateKick(model: SoundGenerationModel): Float32Array {
    const { durationMs, amplitudeProvider, sampleRate } = model;

    return mixSounds([
        generateSilence({ durationMs, sampleRate }),
        generateSineWave({
            durationMs: 51,
            frequencyProvider: () => 80,
            sampleRate,
            amplitudeProvider: (currentTimeMs) =>
                adsr({
                    attack: 1,
                    currentTimeMs,
                    decay: 30,
                    sustain: 0.8,
                    release: 20,
                }),
        }),
    ]).map(
        (x, i) =>
            x *
            amplitudeProvider(
                getMsForSampleIndex({ sampleRate, sampleIndex: i })
            )
    );
}
