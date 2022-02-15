"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleRate = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const wav_encoder_1 = __importDefault(require("wav-encoder"));
const note_durations_1 = require("./note_durations");
const generate_kick_1 = require("./sound_generators/percussive_sound_generators/generate_kick");
const generate_snare_1 = require("./sound_generators/percussive_sound_generators/generate_snare");
const concat_sounds_1 = require("./sound_manipulation/concat_sounds");
const mix_sounds_1 = require("./sound_manipulation/mix_sounds");
exports.sampleRate = 44100;
const kick = (0, generate_kick_1.generateKick)({
    amplitudeProvider: () => 1,
    durationMs: (0, note_durations_1.getNoteDuration)({
        bpm: 120,
        noteDivision: note_durations_1.NoteDivision.SIXTEENTH,
    }),
    sampleRate: exports.sampleRate,
});
const snare = (0, generate_snare_1.generateSnare)({
    amplitudeProvider: () => 1,
    durationMs: (0, note_durations_1.getNoteDuration)({
        bpm: 120,
        noteDivision: note_durations_1.NoteDivision.QUARTER,
    }),
    sampleRate: exports.sampleRate,
});
const audioData = {
    sampleRate: exports.sampleRate,
    channelData: [
        (0, concat_sounds_1.concatSounds)([
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
            (0, mix_sounds_1.mixSounds)([(0, concat_sounds_1.concatSounds)([kick, kick, kick, kick]), snare]),
        ]),
    ],
};
wav_encoder_1.default.encode(audioData).then((buffer) => __awaiter(void 0, void 0, void 0, function* () {
    const rendersFolderPath = (0, path_1.join)(__dirname, "..", "renders");
    if (!fs_1.default.existsSync(rendersFolderPath)) {
        fs_1.default.mkdirSync(rendersFolderPath);
    }
    fs_1.default.writeFileSync((0, path_1.join)(rendersFolderPath, "sound.wav"), Buffer.from(buffer));
}));
