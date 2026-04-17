/**
 * Pronunciation Service for PET Pal
 * Provides text-to-speech functionality for words and sentences
 */
/**
 * Pronunciation service interface
 */
export interface PronunciationService {
    /**
     * Speak the given text
     * @param text Text to speak
     * @param language Language code (e.g., 'en-US', 'en-GB')
     * @param rate Speaking rate (0.1 to 10, default 1)
     * @param pitch Speaking pitch (0 to 2, default 1)
     * @param volume Volume (0 to 1, default 1)
     */
    speak(text: string, language?: string, rate?: number, pitch?: number, volume?: number): Promise<void>;
    /**
     * Stop current speech
     */
    stop(): void;
    /**
     * Pause current speech
     */
    pause(): void;
    /**
     * Resume paused speech
     */
    resume(): void;
    /**
     * Check if speech synthesis is supported
     */
    isSupported(): boolean;
    /**
     * Get available voices
     */
    getVoices(): SpeechSynthesisVoice[];
    /**
     * Set preferred voice
     */
    setVoice(voice: SpeechSynthesisVoice | null): void;
}
/**
 * Web Speech API implementation
 */
export declare class WebSpeechPronunciationService implements PronunciationService {
    private synth;
    private currentUtterance;
    private preferredVoice;
    constructor();
    private loadVoices;
    private setDefaultVoice;
    speak(text: string, language?: string, rate?: number, pitch?: number, volume?: number): Promise<void>;
    stop(): void;
    pause(): void;
    resume(): void;
    isSupported(): boolean;
    getVoices(): SpeechSynthesisVoice[];
    setVoice(voice: SpeechSynthesisVoice | null): void;
    /**
     * Get phonetic pronunciation for a word
     * This is a simple implementation - in production, you might use a dictionary API
     */
    getPhonetic(word: string): string;
    /**
     * Get pronunciation guide for a sentence
     * Breaks down sentence into phonetic chunks
     */
    getSentencePronunciation(sentence: string): string[];
}
/**
 * Pronunciation service factory
 */
export declare function createPronunciationService(): PronunciationService;
export declare function getPronunciationService(): PronunciationService;
//# sourceMappingURL=pronunciationService.d.ts.map