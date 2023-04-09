// const { Configuration, OpenAIApi } = require('openai');
import { Configuration, OpenAIApi } from 'openai';
class ChatService {
    rolePlayIntro = '';
    async generateCompletion (prompt) {
        const config = new Configuration({
            apiKey: process.env.REACT_APP_API_KEY
        });
        const openai = new OpenAIApi(config);
        const fullPrompt = this.rolePlayIntro + '\n\n';
        const completion = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt,
            temperature: 0.7,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        });
        return completion.data.choices[0].text.replace(/^\s+|\s+$/g, '');
    }
}

const client = new ChatService();
export default client;
// export default example;
