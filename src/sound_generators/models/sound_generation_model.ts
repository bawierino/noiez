export type AmplitudeProvider = (currentTimeMs: number) => number;

export interface SoundGenerationModel {
    sampleRate: number;
    durationMs: number;
    amplitudeProvider: AmplitudeProvider;
}
