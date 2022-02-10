export function concatSounds(soundData: Float32Array[]): Float32Array {
    let length = 0;
    soundData.forEach((a) => (length += a.length));

    const result = new Float32Array(length);
    let previous = 0;
    soundData.forEach((a) => {
        result.set(a, previous);
        previous += a.length;
    });

    return result;
}
