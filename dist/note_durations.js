"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNoteDuration = exports.NoteDivision = void 0;
const noteDurationModifiers = {
    dotted: 3 / 2,
    triplet: 2 / 3,
    quintuplet: 4 / 5,
    septuplet: 4 / 7,
    nonuplet: 8 / 9,
};
var NoteDivision;
(function (NoteDivision) {
    NoteDivision["FULL"] = "FULL";
    NoteDivision["HALF"] = "HALF";
    NoteDivision["QUARTER"] = "QUARTER";
    NoteDivision["EIGHTH"] = "EIGHTH";
    NoteDivision["SIXTEENTH"] = "SIXTEENTH";
    NoteDivision["THIRTYSECOND"] = "THIRTYSECOND";
    NoteDivision["SIXTYFOURTH"] = "SIXTYFOURTH";
    NoteDivision["ONEHUNDERDANDTWENTYEIGHTH"] = "ONEHUNDERDANDTWENTYEIGHTH";
})(NoteDivision = exports.NoteDivision || (exports.NoteDivision = {}));
function getNoteDuration(model) {
    const { bpm, noteDivision, dotted = false, nTupletValue = undefined, } = model;
    const noteDivisionRatio = getNoteDivisionRatio(noteDivision);
    const nTupletRatio = nTupletValue ? getNTupletRatio(nTupletValue) : 1;
    const dottedRatio = dotted ? noteDurationModifiers.dotted : 1;
    const durationOfOneMeasure = (60 * 1000 * 4) / bpm;
    return (durationOfOneMeasure * noteDivisionRatio * nTupletRatio * dottedRatio);
}
exports.getNoteDuration = getNoteDuration;
function getNoteDivisionRatio(noteDivision) {
    switch (noteDivision) {
        case NoteDivision.FULL:
            return 1;
        case NoteDivision.HALF:
            return 1 / 2;
        case NoteDivision.QUARTER:
            return 1 / 4;
        case NoteDivision.EIGHTH:
            return 1 / 8;
        case NoteDivision.SIXTEENTH:
            return 1 / 16;
        case NoteDivision.THIRTYSECOND:
            return 1 / 32;
        case NoteDivision.SIXTYFOURTH:
            return 1 / 64;
        case NoteDivision.ONEHUNDERDANDTWENTYEIGHTH:
            return 1 / 128;
        default:
            throw new Error(`Unknown note division ${noteDivision}`);
    }
}
function getNTupletRatio(nTupletValue) {
    switch (nTupletValue) {
        case 3:
            return noteDurationModifiers.triplet;
        case 5:
            return noteDurationModifiers.quintuplet;
        case 7:
            return noteDurationModifiers.septuplet;
        case 9:
            return noteDurationModifiers.nonuplet;
        default:
            throw new Error(`Unknown nTupletValue ${nTupletValue}`);
    }
}
