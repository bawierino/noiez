import fs from "fs";
import { join } from "path";
import WavEncoder from "wav-encoder";
import { concatSounds } from "./sound_manipulation/concat_sounds";
import { lowPassFilter } from "./sound_manipulation/low_pass_filter";
import { mixSounds } from "./sound_manipulation/mix_sounds";
import { generateWhiteNoise } from "./sound_generators/noise_sound_generators/generate_white_noise";
import { generateSawtoothWave } from "./sound_generators/pitched_sound_generators/generate_sawtooth_wave";
import { generateSineWave } from "./sound_generators/pitched_sound_generators/generate_sine_wave";
import { generateSquareWave } from "./sound_generators/pitched_sound_generators/generate_square_wave";
import { generateTriangleWave } from "./sound_generators/pitched_sound_generators/generate_triangle_wave";
import { adsr } from "./sound_manipulation/adsr";

export const sampleRate = 44100;

const audioData = {
    sampleRate,
    channelData: [
        concatSounds([
            mixSounds([
                generateSineWave({
                    sampleRate,
                    frequencyProvider: () => 440,
                    durationMs: 3000,
                    amplitudeProvider: (currentTimeMs) =>
                        adsr({
                            currentTimeMs,
                            attack: 500,
                            decay: 1500,
                            sustain: 0.6,
                            release: 300,
                        }),
                }),
                generateTriangleWave({
                    sampleRate,
                    frequencyProvider: () => 440,
                    durationMs: 3000,
                    amplitudeProvider: (currentTimeMs) =>
                        adsr({
                            currentTimeMs,
                            attack: 500,
                            decay: 1500,
                            sustain: 0.6,
                            release: 300,
                        }),
                }),
            ]),
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
            generateWhiteNoise({
                sampleRate,
                durationMs: 1000,
                amplitudeProvider: () => 1,
            }),
            lowPassFilter({
                sound: generateWhiteNoise({
                    sampleRate,
                    durationMs: 1000,
                    amplitudeProvider: () => 1,
                }),
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
