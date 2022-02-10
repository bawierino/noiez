import { getMsForSampleIndex } from "../../utils/get_ms_for_sample";
import { AmplitudeProvider } from "../models/sound_generation_model";

export function callAmplitudeProvider(model: {
    amplitudeProvider: AmplitudeProvider;
    sampleIndex: number;
    sampleRate: number;
}): number {
    const { amplitudeProvider, sampleIndex, sampleRate } = model;

    return amplitudeProvider(
        getMsForSampleIndex({
            sampleRate,
            sampleIndex,
        })
    );
}
