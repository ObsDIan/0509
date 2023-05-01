//JS引用套件OpenAI


function $embedding(key, text) {
    openai.api_key = key;
    openai.api_base = "https://api.openai.com/";
    openai.api_type = 'openai';
    openai.api_version = '2020-04-01';

    const embedding = 'text-embedding-ada-002';

    response = openai.createEmbedding(input = text, engine = embedding);
    embeddings = response['data'][0]['embedding'];

    return embeddings;
}

//導出函數
export { $embedding };

