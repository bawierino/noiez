export function mixSounds(sounds: Float32Array[]): Float32Array {
    const result = new Float32Array(Math.max(...sounds.map((a) => a.length)));

    result.forEach((x, i, result) => {
        const sum = sounds.map((a) => a?.[i] ?? 0).reduce((p, c) => p + c, 0);

        result[i] = sum;
    });

    return result;
}
