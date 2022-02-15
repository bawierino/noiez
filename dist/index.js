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
const pitches_1 = require("./pitches");
const generate_sine_wave_1 = require("./sound_generators/pitched_sound_generators/generate_sine_wave");
const adsr_1 = require("./sound_manipulation/adsr");
const concat_sounds_1 = require("./sound_manipulation/concat_sounds");
exports.sampleRate = 44100;
const bubbub = Object.values(pitches_1.pitches).map((p) => (0, generate_sine_wave_1.generateSineWave)({
    amplitudeProvider: (currentTimeMs) => (0, adsr_1.adsr)({
        currentTimeMs,
        attack: 5,
        decay: 25,
        sustain: 0.5,
        release: 10,
    }),
    durationMs: (0, note_durations_1.getNoteDuration)({
        bpm: 150,
        noteDivision: note_durations_1.NoteDivision.EIGHTH,
        nTupletValue: 3,
    }),
    frequencyProvider: () => p,
    sampleRate: exports.sampleRate,
}));
const audioData = {
    sampleRate: exports.sampleRate,
    channelData: [(0, concat_sounds_1.concatSounds)(bubbub)],
};
wav_encoder_1.default.encode(audioData).then((buffer) => __awaiter(void 0, void 0, void 0, function* () {
    const rendersFolderPath = (0, path_1.join)(__dirname, "..", "renders");
    if (!fs_1.default.existsSync(rendersFolderPath)) {
        fs_1.default.mkdirSync(rendersFolderPath);
    }
    fs_1.default.writeFileSync((0, path_1.join)(rendersFolderPath, "sound.wav"), Buffer.from(buffer));
}));
