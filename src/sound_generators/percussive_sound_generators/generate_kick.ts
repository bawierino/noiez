import { adsr } from "../../sound_manipulation/adsr";
import { mixSounds } from "../../sound_manipulation/mix_sounds";
import { getMsForSampleIndex } from "../../utils/get_ms_for_sample";
import { generateSilence } from "../generate_silence";
import { SoundGenerationModel } from "../models/sound_generation_model";
import { generateSineWave } from "../pitched_sound_generators/generate_sine_wave";

export function generateKick(model: SoundGenerationModel): Float32Array {
    const { durationMs, amplitudeProvider, sampleRate } = model;

    const attack = 1;
    const decay = 30;
    const release = 20;
    const sustain = 0.8;
    const kickDuration = attack + decay + release;

    return mixSounds([
        generateSilence({ durationMs, sampleRate }),
        generateSineWave({
            durationMs: kickDuration,
            frequencyProvider: () => 80,
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
