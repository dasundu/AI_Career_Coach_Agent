import { inngest } from "./client";
import { createAgent, anthropic, openai, gemini } from '@inngest/agent-kit';

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);


export const AiCareerChatAgent = createAgent({
    name:'AiCareerChatAgent',
    description: 'An Ai Agent that answer career related questions',
    system:`You are a helpful, professional AI Career Coach Agent. Your role is to guide users with questions related to careers, 
    including job search advice, interview preparation, resume improvement, skill development, career transitions, and industry trends. 
    Always respond with clarity, encouragement, and actionable advice tailored to the user's needs. If the user asks something unrelated to careers 
    (e.g., topics like health, relationships, coding help, or general trivia), gently inform them that you are a career coach and suggest relevant career-focused questions instead`,
    model:gemini({
        model:"gemini-2.5-flash",
        apiKey:process.env.GEMINI_API_KEY
    })

})

export const AiCareerAgent = inngest.createFunction(
    { id: 'AiCareerAgent' },
    { event: 'AiCareerAgent'},
    async ({ event, step }) => {
        const {userInput} =  await event?.data;
        const result = await AiCareerChatAgent.run(userInput);
        return result;
    }    

)