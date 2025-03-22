import { HumanMessage } from '@langchain/core/messages';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { ChatOpenAI } from '@langchain/openai';
import path from 'path';
import { readFileSync } from 'fs';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get('file');
    console.log(searchParams);

    console.log(file);
    console.log('test');

    const req = request;
    const llm = new ChatOpenAI({
        model: 'gpt-4o',
        apiKey: process.env.OPENAI_API_KEY,
    });

    const imagePath = path.join(process.cwd(), '/public', `${file}`);
    const imageBuffer = await readFileSync(imagePath);
    const imgBase64 = imageBuffer.toString('base64');

    const message = {
        role: 'user',
        content: [
            { type: 'text', text: 'Describe the content of this image.' },
            {
                type: 'image_url',
                image_url: { url: `data:image/jpeg;base64,${imgBase64}` },
            },
        ],
    };

    const output = await llm.invoke([message]);

    return Response.json({ message: output.content });
}
