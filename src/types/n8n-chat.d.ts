declare module '@n8n/chat' {
  export interface ChatOptions {
    webhookUrl: string;
    mode?: 'window' | 'fullscreen';
    target?: string;
    showWelcomeScreen?: boolean;
    initialMessages?: string[];
    [key: string]: any;
  }

  export function createChat(options: ChatOptions): any;
}
