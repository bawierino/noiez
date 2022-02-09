import { getMsForSampleIndex } from "../../../utils/get_ms_for_sample";
import { FrequencyProvider } from "../../models/pitched_sound_generation_model";

export function callFrequencyProvider(model: {
    frequencyProvider: FrequencyProvider;
    sampleIndex: number;
    sampleRate: number;
}): number {
    const { frequencyProvider, sampleIndex, sampleRate } = model;

    return frequencyProvider(
        getMsForSampleIndex({
            sampleRate,
            sampleIndex,
        })
    );
}
