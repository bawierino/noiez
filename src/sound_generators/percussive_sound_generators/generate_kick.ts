import { adsr } from "../../sound_manipulation/adsr";
import { mixSounds } from "../../sound_manipulation/mix_sounds";
import { getMsForSampleIndex } from "../../utils/get_ms_for_sample";
import { generateSilence } from "../generate_silence";
import { generateSineWave } from "../pitched_sound_generators/generate_sine_wave";
import { SoundGenerationModel } from "../sound_generation_model";

export interface KickSoundGenerationModel extends SoundGenerationModel {
    tone?: number;
    decay?: number;
}

export function generateKick(model: KickSoundGenerationModel): Float32Array {
    const {
        durationMs,
        amplitudeProvider,
        sampleRate,
        decay = 50,
        tone = 80,
    } = model;

    const attack = 2;
    const release = 20;
    const sustain = 0.8;
    const kickDuration = attack + decay + release;

    return mixSounds([
        generateSilence({ durationMs, sampleRate }),
        generateSineWave({
            durationMs: kickDuration,
            frequencyProvider: (currentTimeMs) =>
                Math.max(tone - currentTimeMs / 100, 20),
            sampleRate,
            amplitudeProvider: (currentTimeMs) =>
                adsr({
                    attack,
                    currentTimeMs,
                    decay,
                    sustain,
                    release,
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
