import type { Provider } from '@/types/provider';
import {
    handlePrompt,
    handleRapidPrompt,
} from './handler';

const providerOpenAI = () => {
    const provider: Provider = {
        id: 'provider-openai',
        icon: 'i-carbon-accessibility', // @unocss-include
        name: 'EvilCorp SecondPilot',
        globalSettings: [
            //{
            //    key: 'apiKey',
            //    name: 'API Key',
            //    type: 'api-key',
            //},
            //{
            //    key: 'baseUrl',
            //    name: 'Base URL',
            //    description: 'Custom base url for OpenAI API.',
            //    type: 'input',
            //    default: 'https://api.openai.com',
            //},
            //{
            //    key: 'model',
            //    name: 'OpenAI model',
            //    description: 'Custom gpt model for OpenAI API.',
            //    type: 'select',
            //    options: [
            //        { value: 'copilot-chat', label: 'copilot-chat' },
            //        { value: 'gpt-3.5-turbo', label: 'gpt-3.5-turbo' },
            //        //{ value: 'claude-v1.3-100k', label: 'claude-v1.3-100k' },
            //        //{ value: 'claude-instant-v1-100k', label: 'claude-instant-v1-100k' },
            //        { value: 'claude-instant-v1-100k', label: 'claude-instant-v1-100k' },
            //        { value: 'airoboros-65b', label: 'airoboros-65b' },
            //    ],
            //    default: 'copilot-chat',
            //},
            {
                key: 'maxTokens',
                name: 'Max Tokens',
                description: 'The maximum number of tokens to generate in the completion.',
                type: 'slider',
                min: 0,
                max: 32768,
                default: 8100,
                step: 1,
            },
            {
                key: 'messageHistorySize',
                name: 'Max History Message Size',
                description: 'The number of retained historical messages will be truncated if the length of the message exceeds the MaxToken parameter.',
                type: 'slider',
                min: 1,
                max: 24,
                default: 5,
                step: 1,
            },
            {
                key: 'temperature',
                name: 'Temperature',
                type: 'slider',
                description: 'What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.',
                min: 0,
                max: 2,
                default: 0.7,
                step: 0.01,
            },
            {
                key: 'top_p',
                name: 'Top P',
                description: 'An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.',
                type: 'slider',
                min: 0,
                max: 1,
                default: 1,
                step: 0.01,
            },
        ],
        bots: [
            {
                id: 'chat_continuous',
                type: 'chat_continuous',
                name: 'Continuous Chat',
                settings: [],
            },
            {
                id: 'chat_single',
                type: 'chat_single',
                name: 'Single Chat',
                settings: [],
            },
            //{
            //    id: 'image_generation',
            //    type: 'image_generation',
            //    name: 'DALL·E',
            //    settings: [],
            //},
        ],
        handlePrompt,
        handleRapidPrompt,
    };
    return provider;
};

export default providerOpenAI;
