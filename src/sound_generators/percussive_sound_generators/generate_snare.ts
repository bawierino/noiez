import { adsr } from "../../sound_manipulation/adsr";
import { lowPassFilter } from "../../sound_manipulation/low_pass_filter";
import { mixSounds } from "../../sound_manipulation/mix_sounds";
import { getMsForSampleIndex } from "../../utils/get_ms_for_sample";
import { generateSilence } from "../generate_silence";
import { generateWhiteNoise } from "../noise_sound_generators/generate_white_noise";
import { generateSineWave } from "../pitched_sound_generators/generate_sine_wave";
import { SoundGenerationModel } from "../sound_generation_model";

export interface SnareSoundGenerationModel extends SoundGenerationModel {
    tone?: number;
    decay?: number;
    thiccness?: number;
    bottomVolume?: number;
}

export function generateSnare(model: SnareSoundGenerationModel): Float32Array {
    const {
        durationMs,
        amplitudeProvider,
        sampleRate,
        tone = 200,
        decay = 150,
        thiccness = 0.5,
        bottomVolume = 0.8,
    } = model;

    const attack = 2;
    const bottomRelease = 10;
    const bottomDuration = attack + decay + bottomRelease;

    return mixSounds([
        lowPassFilter({
            cutoffGenerator: (currentTimeMs) =>
                1 - thiccness - currentTimeMs / 1000,
            sampleRate,
            sound: mixSounds([
                generateSilence({ durationMs, sampleRate }),
                generateSineWave({
                    durationMs: 62,
                    frequencyProvider: (currentTimeMs) =>
                        tone + currentTimeMs / 15,
                    sampleRate,
                    amplitudeProvider: (currentTimeMs) =>
                        adsr({
                            attack,
                            currentTimeMs,
                            decay: 50,
                            sustain: 0.8,
                            release: 10,
                        }),
                }),
                generateWhiteNoise({
                    durationMs: bottomDuration,
                    sampleRate,
                    amplitudeProvider: (currentTimeMs) =>
                        bottomVolume *
                        adsr({
                            attack,
                            currentTimeMs,
                            decay,
                            sustain: 0.2,
                            release: bottomRelease,
                        }),
                }),
            ]),
        }),
    ]).map(
        (x, i) =>
            x *
            amplitudeProvider(
                getMsForSampleIndex({ sampleRate, sampleIndex: i })
            )
    );
}
