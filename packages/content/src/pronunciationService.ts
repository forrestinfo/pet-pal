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
  speak(
    text: string, 
    language?: string, 
    rate?: number, 
    pitch?: number, 
    volume?: number
  ): Promise<void>;
  
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
export class WebSpeechPronunciationService implements PronunciationService {
  private synth: SpeechSynthesis;
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private preferredVoice: SpeechSynthesisVoice | null = null;
  
  constructor() {
    this.synth = window.speechSynthesis;
    this.loadVoices();
  }
  
  private loadVoices() {
    // Voices might be loaded asynchronously
    if (this.synth.getVoices().length > 0) {
      this.setDefaultVoice();
    } else {
      this.synth.onvoiceschanged = () => {
        this.setDefaultVoice();
        this.synth.onvoiceschanged = null;
      };
    }
  }
  
  private setDefaultVoice() {
    const voices = this.synth.getVoices();
    // Prefer English voices
    const englishVoices = voices.filter(voice => 
      voice.lang.startsWith('en-')
    );
    
    if (englishVoices.length > 0) {
      // Prefer female voices for better clarity
      const femaleVoice = englishVoices.find(voice => 
        voice.name.toLowerCase().includes('female') || 
        voice.name.toLowerCase().includes('samantha') ||
        voice.name.toLowerCase().includes('zira')
      );
      
      this.preferredVoice = femaleVoice || englishVoices[0] || null;
    } else if (voices.length > 0) {
      this.preferredVoice = voices[0] || null;
    }
  }
  
  async speak(
    text: string, 
    language: string = 'en-US',
    rate: number = 1,
    pitch: number = 1,
    volume: number = 1
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // Stop any current speech
        this.stop();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language;
        utterance.rate = Math.max(0.1, Math.min(10, rate));
        utterance.pitch = Math.max(0, Math.min(2, pitch));
        utterance.volume = Math.max(0, Math.min(1, volume));
        
        if (this.preferredVoice) {
          utterance.voice = this.preferredVoice;
        }
        
        utterance.onend = () => {
          this.currentUtterance = null;
          resolve();
        };
        
        utterance.onerror = (event) => {
          this.currentUtterance = null;
          reject(new Error(`Speech synthesis error: ${event.error}`));
        };
        
        this.currentUtterance = utterance;
        this.synth.speak(utterance);
      } catch (error) {
        reject(error);
      }
    });
  }
  
  stop(): void {
    if (this.synth.speaking) {
      this.synth.cancel();
    }
    this.currentUtterance = null;
  }
  
  pause(): void {
    if (this.synth.speaking) {
      this.synth.pause();
    }
  }
  
  resume(): void {
    if (this.synth.paused) {
      this.synth.resume();
    }
  }
  
  isSupported(): boolean {
    return 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  }
  
  getVoices(): SpeechSynthesisVoice[] {
    return this.synth.getVoices();
  }
  
  setVoice(voice: SpeechSynthesisVoice | null): void {
    this.preferredVoice = voice;
  }
  
  /**
   * Get phonetic pronunciation for a word
   * This is a simple implementation - in production, you might use a dictionary API
   */
  getPhonetic(word: string): string {
    // Simple phonetic approximations
    // In a real app, you would use a proper dictionary API
    const phoneticMap: Record<string, string> = {
      'accept': '/əkˈsɛpt/',
      'borrow': '/ˈbɒr.əʊ/',
      'decide': '/dɪˈsaɪd/',
      'improve': '/ɪmˈpruːv/',
      'polite': '/pəˈlaɪt/',
      'promise': '/ˈprɒm.ɪs/',
      'attend': '/əˈtend/',
      'environment': '/ɪnˈvaɪ.rən.mənt/',
      'foreign': '/ˈfɒr.ən/',
      'healthy': '/ˈhel.θi/',
      'information': '/ˌɪn.fəˈmeɪ.ʃən/',
      'journey': '/ˈdʒɜː.ni/',
      'knowledge': '/ˈnɒl.ɪdʒ/',
      'language': '/ˈlæŋ.ɡwɪdʒ/',
      'natural': '/ˈnætʃ.ər.əl/',
      'opinion': '/əˈpɪn.jən/',
      'popular': '/ˈpɒp.jə.lər/',
      'recent': '/ˈriː.sənt/',
      'similar': '/ˈsɪm.ɪ.lər/',
      'traditional': '/trəˈdɪʃ.ən.əl/',
    };
    
    return phoneticMap[word.toLowerCase()] || `/${word.toLowerCase()}/`;
  }
  
  /**
   * Get pronunciation guide for a sentence
   * Breaks down sentence into phonetic chunks
   */
  getSentencePronunciation(sentence: string): string[] {
    // Simple implementation - breaks sentence into words
    const words = sentence.toLowerCase().replace(/[.,!?]/g, '').split(' ');
    return words.map(word => this.getPhonetic(word));
  }
}

/**
 * Pronunciation service factory
 */
export function createPronunciationService(): PronunciationService {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    return new WebSpeechPronunciationService();
  }
  
  // Fallback to a mock service if Web Speech API is not available
  return {
    speak: async () => console.warn('Speech synthesis not supported'),
    stop: () => {},
    pause: () => {},
    resume: () => {},
    isSupported: () => false,
    getVoices: () => [],
    setVoice: () => {}
  };
}

/**
 * Global pronunciation service instance
 */
let globalPronunciationService: PronunciationService | null = null;

export function getPronunciationService(): PronunciationService {
  if (!globalPronunciationService) {
    globalPronunciationService = createPronunciationService();
  }
  return globalPronunciationService;
}