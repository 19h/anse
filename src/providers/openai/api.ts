import fs from 'fs';

export interface OpenAIFetchPayload {
    apiKey: string;
    baseUrl: string;
    body: Record<string, any>;
    signal?: AbortSignal;
}

export const fetchChatCompletion = async (payload: OpenAIFetchPayload) => {
    const res = await fetch('https://api.github.com/copilot_internal/v2/token', {
        'method': 'GET',
        'headers': {
            'Authorization': 'token ' + process.env.GH_TOKEN,
            'User-Agent': 'GithubCopilot/1.86.92',
        },
    });

    const json = await res.json();

    const cat_token = json.token;

    payload.body.model = 'copilot-chat';

    return fetch(
        'https://copilot-proxy.githubusercontent.com/v1/chat/completions',
        {
            'method': 'POST',
            'headers': {
                'Authorization': `Bearer ${cat_token}`,
                'Content-Type': 'application/json',
            },
            'body': JSON.stringify(payload.body),
            signal: payload.signal,
        },
    );
};

export const fetchImageGeneration = async (payload: OpenAIFetchPayload) => {
    const initOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${payload.apiKey}`,
        },
        method: 'POST',
        body: JSON.stringify(payload.body),
        signal: payload.signal,
    };
    return fetch(`${payload.baseUrl}/v1/images/generations`, initOptions);
};
