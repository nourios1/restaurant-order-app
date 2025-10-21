import { AI_MODELS } from '../config/aiModels';

export class AIService {
  private static instance: AIService;

  private constructor() {}

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async processWithClaudeSonnet(input: string): Promise<string> {
    const model = AI_MODELS.claudeSonnet;
    if (!model.enabled) {
      throw new Error('Claude Sonnet is not enabled');
    }
    
    // Implement API call to Claude Sonnet here
    return 'AI processed result';
  }
}
