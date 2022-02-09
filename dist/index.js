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
const concat_sounds_1 = require("./sound_data_manipulation/concat_sounds");
const low_pass_filter_1 = require("./sound_data_manipulation/low_pass_filter");
const mix_sounds_1 = require("./sound_data_manipulation/mix_sounds");
const generate_white_noise_1 = require("./sound_generators/noise_sound_generators/generate_white_noise");
const generate_sawtooth_wave_1 = require("./sound_generators/pitched_sound_generators/generate_sawtooth_wave");
const generate_sine_wave_1 = require("./sound_generators/pitched_sound_generators/generate_sine_wave");
const generate_square_wave_1 = require("./sound_generators/pitched_sound_generators/generate_square_wave");
const generate_triangle_wave_1 = require("./sound_generators/pitched_sound_generators/generate_triangle_wave");
exports.sampleRate = 44100;
const audioData = {
    sampleRate: exports.sampleRate,
    channelData: [
        (0, concat_sounds_1.concatSounds)([
            (0, low_pass_filter_1.lowPassFilter)({
                sound: (0, mix_sounds_1.mixSounds)([
                    (0, generate_sine_wave_1.generateSineWave)({
                        sampleRate: exports.sampleRate,
                        frequencyProvider: () => 440,
                        durationMs: 1000,
                    }),
                    (0, generate_triangle_wave_1.generateTriangleWave)({
                        sampleRate: exports.sampleRate,
                        frequencyProvider: () => 600,
                        durationMs: 1500,
                    }),
                ]),
                cutoffGenerator: (currentTimeMs) => Math.max(0.5 - 0.0004 * currentTimeMs, 0),
                sampleRate: exports.sampleRate,
            }),
            (0, mix_sounds_1.mixSounds)([
                (0, generate_sine_wave_1.generateSineWave)({
                    sampleRate: exports.sampleRate,
                    frequencyProvider: () => 440,
                    durationMs: 1000,
                }),
                (0, generate_triangle_wave_1.generateTriangleWave)({
                    sampleRate: exports.sampleRate,
                    frequencyProvider: () => 600,
                    durationMs: 1500,
                }),
            ]),
            (0, generate_sawtooth_wave_1.generateSawtoothWave)({
                sampleRate: exports.sampleRate,
                frequencyProvider: () => 238,
                durationMs: 1000,
            }),
            (0, low_pass_filter_1.lowPassFilter)({
                sound: (0, generate_sawtooth_wave_1.generateSawtoothWave)({
                    sampleRate: exports.sampleRate,
                    frequencyProvider: () => 238,
                    durationMs: 1000,
                }),
                cutoffGenerator: () => 0.1,
                sampleRate: exports.sampleRate,
            }),
            (0, generate_square_wave_1.generateSquareWave)({
                sampleRate: exports.sampleRate,
                frequencyProvider: () => 60,
                durationMs: 1000,
            }),
            (0, generate_white_noise_1.generateWhiteNoise)({ sampleRate: exports.sampleRate, durationMs: 1000 }),
            (0, low_pass_filter_1.lowPassFilter)({
                sound: (0, generate_white_noise_1.generateWhiteNoise)({ sampleRate: exports.sampleRate, durationMs: 1000 }),
                sampleRate: exports.sampleRate,
                cutoffGenerator: (currentTimeMs) => Math.max(0.5 - 0.0005 * currentTimeMs, 0),
            }),
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
