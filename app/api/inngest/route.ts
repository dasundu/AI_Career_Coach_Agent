import { serve } from "inngest/next";
import { inngest } from "../../../inngest/client";
import { AiCareerAgent, AiResumeAgent, AIRoadmapAgent } from "@/inngest/functions";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    AiCareerAgent,
    AiResumeAgent,
    AIRoadmapAgent
    /* your functions will be passed here later! */
  ],
});
