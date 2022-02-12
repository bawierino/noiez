import { adsr } from "../../sound_manipulation/adsr";
import { lowPassFilter } from "../../sound_manipulation/low_pass_filter";
import { mixSounds } from "../../sound_manipulation/mix_sounds";
import { getMsForSampleIndex } from "../../utils/get_ms_for_sample";
import { generateSilence } from "../generate_silence";
import { generateWhiteNoise } from "../noise_sound_generators/generate_white_noise";
import { generateSineWave } from "../pitched_sound_generators/generate_sine_wave";
import { SoundGenerationModel } from "../sound_generation_model";

export interface SnareSoundGenerationModel extends SoundGenerationModel {}

export function generateSnare(model: SnareSoundGenerationModel): Float32Array {
    const { durationMs, amplitudeProvider, sampleRate } = model;

    return mixSounds([
        generateSilence({ durationMs, sampleRate }),
        generateSineWave({
            durationMs: 62,
            frequencyProvider: (currentTimeMs) => Math.max(150, 20),
            sampleRate,
            amplitudeProvider: (currentTimeMs) =>
                adsr({
                    attack: 2,
                    currentTimeMs,
                    decay: 50,
                    sustain: 0.8,
                    release: 10,
                }),
        }),
        lowPassFilter({
            cutoffGenerator: (currentTimeMs) => 0.5 - currentTimeMs / 1000,
            sampleRate,
            sound: generateWhiteNoise({
                durationMs: 200,
                sampleRate,
                amplitudeProvider: (currentTimeMs) =>
                    adsr({
                        attack: 2,
                        currentTimeMs,
                        decay: 150,
                        sustain: 0.2,
                        release: 10,
                    }),
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
