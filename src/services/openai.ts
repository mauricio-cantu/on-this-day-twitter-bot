import { OpenAIApi, Configuration } from 'openai';

enum GptModel {
  'Gpt-3.5' = 'gpt-3.5-turbo',
}

const openAiApi = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  }),
);

export const requestToGpt = async (prompt: string) => {
  const completion = await openAiApi.createChatCompletion({
    model: GptModel['Gpt-3.5'],
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  });

  return completion.data.choices[0].message?.content;
};
