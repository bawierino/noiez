"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slowVibrato = void 0;
function slowVibrato(model) {
    const { currentTimeMs, pitch } = model;
    return pitch + 0.1 * Math.sin(currentTimeMs / 100);
}
exports.slowVibrato = slowVibrato;
