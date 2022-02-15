"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pitch = void 0;
var Pitch;
(function (Pitch) {
    Pitch[Pitch["C0"] = 16.35] = "C0";
    Pitch[Pitch["Db0"] = 17.32] = "Db0";
    Pitch[Pitch["D0"] = 18.35] = "D0";
    Pitch[Pitch["Eb0"] = 19.45] = "Eb0";
    Pitch[Pitch["E0"] = 20.6] = "E0";
    Pitch[Pitch["F0"] = 21.83] = "F0";
    Pitch[Pitch["Gb0"] = 23.12] = "Gb0";
    Pitch[Pitch["G0"] = 24.5] = "G0";
    Pitch[Pitch["Ab0"] = 25.96] = "Ab0";
    Pitch[Pitch["A0"] = 27.5] = "A0";
    Pitch[Pitch["Bb0"] = 29.14] = "Bb0";
    Pitch[Pitch["B0"] = 30.87] = "B0";
    Pitch[Pitch["C1"] = 32.7] = "C1";
    Pitch[Pitch["Db1"] = 34.65] = "Db1";
    Pitch[Pitch["D1"] = 36.71] = "D1";
    Pitch[Pitch["Eb1"] = 38.89] = "Eb1";
    Pitch[Pitch["E1"] = 41.2] = "E1";
    Pitch[Pitch["F1"] = 43.65] = "F1";
    Pitch[Pitch["Gb1"] = 46.25] = "Gb1";
    Pitch[Pitch["G1"] = 49] = "G1";
    Pitch[Pitch["Ab1"] = 51.91] = "Ab1";
    Pitch[Pitch["A1"] = 55] = "A1";
    Pitch[Pitch["Bb1"] = 58.27] = "Bb1";
    Pitch[Pitch["B1"] = 61.74] = "B1";
    Pitch[Pitch["C2"] = 65.41] = "C2";
    Pitch[Pitch["Db2"] = 69.3] = "Db2";
    Pitch[Pitch["D2"] = 73.42] = "D2";
    Pitch[Pitch["Eb2"] = 77.78] = "Eb2";
    Pitch[Pitch["E2"] = 82.41] = "E2";
    Pitch[Pitch["F2"] = 87.31] = "F2";
    Pitch[Pitch["Gb2"] = 92.5] = "Gb2";
    Pitch[Pitch["G2"] = 98] = "G2";
    Pitch[Pitch["Ab2"] = 103.83] = "Ab2";
    Pitch[Pitch["A2"] = 110] = "A2";
    Pitch[Pitch["Bb2"] = 116.54] = "Bb2";
    Pitch[Pitch["B2"] = 123.47] = "B2";
    Pitch[Pitch["C3"] = 130.81] = "C3";
    Pitch[Pitch["Db3"] = 138.59] = "Db3";
    Pitch[Pitch["D3"] = 146.83] = "D3";
    Pitch[Pitch["Eb3"] = 155.56] = "Eb3";
    Pitch[Pitch["E3"] = 164.81] = "E3";
    Pitch[Pitch["F3"] = 174.61] = "F3";
    Pitch[Pitch["Gb3"] = 185] = "Gb3";
    Pitch[Pitch["G3"] = 196] = "G3";
    Pitch[Pitch["Ab3"] = 207.65] = "Ab3";
    Pitch[Pitch["A3"] = 220] = "A3";
    Pitch[Pitch["Bb3"] = 233.08] = "Bb3";
    Pitch[Pitch["B3"] = 246.94] = "B3";
    Pitch[Pitch["C4"] = 261.63] = "C4";
    Pitch[Pitch["Db4"] = 277.18] = "Db4";
    Pitch[Pitch["D4"] = 293.66] = "D4";
    Pitch[Pitch["Eb4"] = 311.13] = "Eb4";
    Pitch[Pitch["E4"] = 329.63] = "E4";
    Pitch[Pitch["F4"] = 349.23] = "F4";
    Pitch[Pitch["Gb4"] = 369.99] = "Gb4";
    Pitch[Pitch["G4"] = 392] = "G4";
    Pitch[Pitch["Ab4"] = 415.3] = "Ab4";
    Pitch[Pitch["A4"] = 440] = "A4";
    Pitch[Pitch["Bb4"] = 466.16] = "Bb4";
    Pitch[Pitch["B4"] = 493.88] = "B4";
    Pitch[Pitch["C5"] = 523.25] = "C5";
    Pitch[Pitch["Db5"] = 554.37] = "Db5";
    Pitch[Pitch["D5"] = 587.33] = "D5";
    Pitch[Pitch["Eb5"] = 622.25] = "Eb5";
    Pitch[Pitch["E5"] = 659.25] = "E5";
    Pitch[Pitch["F5"] = 698.46] = "F5";
    Pitch[Pitch["Gb5"] = 739.99] = "Gb5";
    Pitch[Pitch["G5"] = 783.99] = "G5";
    Pitch[Pitch["Ab5"] = 830.61] = "Ab5";
    Pitch[Pitch["A5"] = 880] = "A5";
    Pitch[Pitch["Bb5"] = 932.33] = "Bb5";
    Pitch[Pitch["B5"] = 987.77] = "B5";
    Pitch[Pitch["C6"] = 1046.5] = "C6";
    Pitch[Pitch["Db6"] = 1108.73] = "Db6";
    Pitch[Pitch["D6"] = 1174.66] = "D6";
    Pitch[Pitch["Eb6"] = 1244.51] = "Eb6";
    Pitch[Pitch["E6"] = 1318.51] = "E6";
    Pitch[Pitch["F6"] = 1396.91] = "F6";
    Pitch[Pitch["Gb6"] = 1479.98] = "Gb6";
    Pitch[Pitch["G6"] = 1567.98] = "G6";
    Pitch[Pitch["Ab6"] = 1661.22] = "Ab6";
    Pitch[Pitch["A6"] = 1760] = "A6";
    Pitch[Pitch["Bb6"] = 1864.66] = "Bb6";
    Pitch[Pitch["B6"] = 1975.53] = "B6";
    Pitch[Pitch["C7"] = 2093] = "C7";
    Pitch[Pitch["Db7"] = 2217.46] = "Db7";
    Pitch[Pitch["D7"] = 2349.32] = "D7";
    Pitch[Pitch["Eb7"] = 2489.02] = "Eb7";
    Pitch[Pitch["E7"] = 2637.02] = "E7";
    Pitch[Pitch["F7"] = 2793.83] = "F7";
    Pitch[Pitch["Gb7"] = 2959.96] = "Gb7";
    Pitch[Pitch["G7"] = 3135.96] = "G7";
    Pitch[Pitch["Ab7"] = 3322.44] = "Ab7";
    Pitch[Pitch["A7"] = 3520] = "A7";
    Pitch[Pitch["Bb7"] = 3792.31] = "Bb7";
    Pitch[Pitch["B7"] = 3951.07] = "B7";
    Pitch[Pitch["C8"] = 4186.01] = "C8";
    Pitch[Pitch["Db8"] = 4434.92] = "Db8";
    Pitch[Pitch["D8"] = 4698.63] = "D8";
    Pitch[Pitch["Eb8"] = 4978.03] = "Eb8";
    Pitch[Pitch["E8"] = 5274.04] = "E8";
    Pitch[Pitch["F8"] = 5587.65] = "F8";
    Pitch[Pitch["Gb8"] = 5919.91] = "Gb8";
    Pitch[Pitch["G8"] = 6271.93] = "G8";
    Pitch[Pitch["Ab8"] = 6644.88] = "Ab8";
    Pitch[Pitch["A8"] = 7040] = "A8";
    Pitch[Pitch["Bb8"] = 7458.62] = "Bb8";
    Pitch[Pitch["B8"] = 7902.13] = "B8";
})(Pitch = exports.Pitch || (exports.Pitch = {}));
