import fs from "fs";
import { join } from "path";
import WavEncoder from "wav-encoder";
import { getNoteDuration, NoteDivision } from "./note_durations";
import { generateKick } from "./sound_generators/percussive_sound_generators/generate_kick";
import { generateSnare } from "./sound_generators/percussive_sound_generators/generate_snare";
import { concatSounds } from "./sound_manipulation/concat_sounds";
import { mixSounds } from "./sound_manipulation/mix_sounds";

export const sampleRate = 44100;

const kick = generateKick({
    amplitudeProvider: () => 1,
    durationMs: getNoteDuration({
        bpm: 120,
        noteDivision: NoteDivision.SIXTEENTH,
    }),
    sampleRate,
});

const snare = generateSnare({
    amplitudeProvider: () => 1,
    durationMs: getNoteDuration({
        bpm: 120,
        noteDivision: NoteDivision.QUARTER,
    }),
    sampleRate,
});

const audioData = {
    sampleRate,
    channelData: [
        concatSounds([
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
            mixSounds([concatSounds([kick, kick, kick, kick]), snare]),
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
