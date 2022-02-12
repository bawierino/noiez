import { SoundGenerationModel } from "../sound_generation_model";

export type FrequencyProvider = (currentTimeMs: number) => number;

export interface PitchedSoundGenerationModel extends SoundGenerationModel {
    frequencyProvider: FrequencyProvider;
}
