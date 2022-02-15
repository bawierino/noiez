import fs from "fs";
import { join } from "path";
import WavEncoder from "wav-encoder";
import { pitches } from "./pitch";
import { generateSineWave } from "./sound_generators/pitched_sound_generators/generate_sine_wave";
import { adsr } from "./sound_manipulation/adsr";
import { concatSounds } from "./sound_manipulation/concat_sounds";

export const sampleRate = 44100;

const bubbub = Object.values(pitches).map((p) =>
    generateSineWave({
        amplitudeProvider: (currentTimeMs) =>
            adsr({
                currentTimeMs,
                attack: 5,
                decay: 25,
                sustain: 0.5,
                release: 10,
            }),
        durationMs: 50,
        frequencyProvider: () => p,
        sampleRate,
    })
);

const audioData = {
    sampleRate,
    channelData: [concatSounds(bubbub)],
};

WavEncoder.encode(audioData).then(async (buffer: ArrayBuffer) => {
    const rendersFolderPath = join(__dirname, "..", "renders");

    if (!fs.existsSync(rendersFolderPath)) {
        fs.mkdirSync(rendersFolderPath);
    }

    fs.writeFileSync(join(rendersFolderPath, "sound.wav"), Buffer.from(buffer));
});
