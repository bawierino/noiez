import { generateSilence } from "../sound_generators/generate_silence";
import { getDurationInSamples } from "../sound_generators/utils/get_duration_in_samples";
import { mixSounds } from "./mix_sounds";

export function forceSoundLength(model: {
    sound: Float32Array;
    durationMs: number;
    sampleRate: number;
}): Float32Array {
    const { durationMs, sampleRate, sound } = model;

    const intendedDurationInSamples = getDurationInSamples({
        durationMs,
        sampleRate,
    });
    const actualDurationInSamples = sound.length;

    if (intendedDurationInSamples === actualDurationInSamples) {
        return new Float32Array(sound);
    } else if (intendedDurationInSamples > actualDurationInSamples) {
        return mixSounds([generateSilence({ durationMs, sampleRate }), sound]);
    } else {
        return new Float32Array(sound.slice(0, intendedDurationInSamples));
    }
}
