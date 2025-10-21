export interface AIModelConfig {
  version: string;
  enabled: boolean;
  endpoint: string;
  maxTokens: number;
}

export const AI_MODELS = {
  claudeSonnet: {
    version: '3.5',
    enabled: true,
    endpoint: 'https://api.anthropic.com/v1/claude-sonnet',
    maxTokens: 2048
  }
};

export const getAIModel = (modelName: keyof typeof AI_MODELS) => {
  return AI_MODELS[modelName];
};
