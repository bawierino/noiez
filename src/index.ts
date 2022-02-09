import fs from "fs";
import { join } from "path";
import WavEncoder from "wav-encoder";
import { concatSounds } from "./sound_data_manipulation/concat_sounds";
import { lowPassFilter } from "./sound_data_manipulation/low_pass_filter";
import { mixSounds } from "./sound_data_manipulation/mix_sounds";
import { generateWhiteNoise } from "./sound_generators/noise_sound_generators/generate_white_noise";
import { generateSawtoothWave } from "./sound_generators/pitched_sound_generators/generate_sawtooth_wave";
import { generateSineWave } from "./sound_generators/pitched_sound_generators/generate_sine_wave";
import { generateSquareWave } from "./sound_generators/pitched_sound_generators/generate_square_wave";
import { generateTriangleWave } from "./sound_generators/pitched_sound_generators/generate_triangle_wave";

export const sampleRate = 44100;

const audioData = {
    sampleRate,
    channelData: [
        concatSounds([
            lowPassFilter({
                sound: mixSounds([
                    generateSineWave({
                        sampleRate,
                        frequencyProvider: () => 440,
                        durationMs: 1000,
                    }),
                    generateTriangleWave({
                        sampleRate,
                        frequencyProvider: () => 600,
                        durationMs: 1500,
                    }),
                ]),
                cutoffGenerator: (currentTimeMs) =>
                    Math.max(0.5 - 0.0004 * currentTimeMs, 0),
                sampleRate,
            }),
            mixSounds([
                generateSineWave({
                    sampleRate,
                    frequencyProvider: () => 440,
                    durationMs: 1000,
                }),
                generateTriangleWave({
                    sampleRate,
                    frequencyProvider: () => 600,
                    durationMs: 1500,
                }),
            ]),
            generateSawtoothWave({
                sampleRate,
                frequencyProvider: () => 238,
                durationMs: 1000,
            }),
            lowPassFilter({
                sound: generateSawtoothWave({
                    sampleRate,
                    frequencyProvider: () => 238,
                    durationMs: 1000,
                }),
                cutoffGenerator: () => 0.1,
                sampleRate,
            }),
            generateSquareWave({
                sampleRate,
                frequencyProvider: () => 60,
                durationMs: 1000,
            }),
            generateWhiteNoise({ sampleRate, durationMs: 1000 }),
            lowPassFilter({
                sound: generateWhiteNoise({ sampleRate, durationMs: 1000 }),
                sampleRate,
                cutoffGenerator: (currentTimeMs) =>
                    Math.max(0.5 - 0.0005 * currentTimeMs, 0),
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
