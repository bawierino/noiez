import fs from "fs";
import { join } from "path";
import WavEncoder from "wav-encoder";
import { generateSilence } from "./sound_generators/generate_silence";
import { generateKick } from "./sound_generators/percussive_sound_generators/generate_kick";
import { generateSnare } from "./sound_generators/percussive_sound_generators/generate_snare";
import { generateSawtoothWave } from "./sound_generators/pitched_sound_generators/generate_sawtooth_wave";
import { generateSineWave } from "./sound_generators/pitched_sound_generators/generate_sine_wave";
import { generateSquareWave } from "./sound_generators/pitched_sound_generators/generate_square_wave";
import { adsr } from "./sound_manipulation/adsr";
import { concatSounds } from "./sound_manipulation/concat_sounds";
import { lowPassFilter } from "./sound_manipulation/low_pass_filter";
import { slowVibrato } from "./sound_manipulation/slow_vibrato";

export const sampleRate = 44100;

const tightKick = generateKick({
    amplitudeProvider: () => 1,
    durationMs: 500,
    sampleRate,
    decay: 69,
});

const bassDrop = generateKick({
    amplitudeProvider: () => 1,
    durationMs: 2000,
    sampleRate,
    decay: 1900,
});

const snare = generateSnare({
    amplitudeProvider: () => 1,
    durationMs: 500,
    sampleRate,
});

const audioData = {
    sampleRate,
    channelData: [
        concatSounds([
            generateSilence({ durationMs: 100, sampleRate }),
            tightKick,
            snare,
            tightKick,
            snare,
            tightKick,
            snare,
            tightKick,
            snare,
            tightKick,
            snare,
            bassDrop,
            bassDrop,
            generateSineWave({
                sampleRate,
                frequencyProvider: (currentTimeMs) =>
                    slowVibrato({ pitch: 440, currentTimeMs }),
                durationMs: 3000,
                amplitudeProvider: (currentTimeMs) =>
                    adsr({
                        currentTimeMs,
                        attack: 1000,
                        decay: 1400,
                        sustain: 0.4,
                        release: 300,
                    }),
            }),
            generateSineWave({
                sampleRate,
                frequencyProvider: (currentTimeMs) => 440,
                durationMs: 2300,
                amplitudeProvider: (currentTimeMs) => 1,
            }),
            generateSawtoothWave({
                sampleRate,
                frequencyProvider: () => 238,
                durationMs: 1000,
                amplitudeProvider: () => 1,
            }),
            lowPassFilter({
                sound: generateSawtoothWave({
                    sampleRate,
                    frequencyProvider: () => 238,
                    durationMs: 1000,
                    amplitudeProvider: () => 1,
                }),
                cutoffGenerator: () => 0.1,
                sampleRate,
            }),
            generateSquareWave({
                sampleRate,
                frequencyProvider: () => 60,
                durationMs: 1000,
                amplitudeProvider: () => 1,
            }),
        ]),
    ],
};

WavEncoder.encode(audioData).then(async (buffer: ArrayBuffer) => {
    const rendersFolderPath = join(__dirname, "..", "renders");

    if (!fs.existsSync(rendersFolderPath)) {
        fs.mkdirSync(rendersFolderPath);
    }

    fs.writeFileSync(join(rendersFolderPath, "sound.wav"), Buffer.from(buffer));
});
