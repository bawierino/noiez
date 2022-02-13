import { adsr } from "../../sound_manipulation/adsr";
import { forceSoundLength } from "../../sound_manipulation/force_sound_length";
import { getMsForSampleIndex } from "../../utils/get_ms_for_sample";
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

    return forceSoundLength({
        sound: generateSineWave({
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
        }).map(
            (x, i) =>
                x *
                amplitudeProvider(
                    getMsForSampleIndex({ sampleRate, sampleIndex: i })
                )
        ),
        sampleRate,
        durationMs,
    });
}
