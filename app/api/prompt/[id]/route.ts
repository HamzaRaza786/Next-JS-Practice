import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const GET = async (req: Request, { params }: any) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    return new Response(JSON.stringify(prompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to fetch prompt", { status: 500 });
  }
};

export const PATCH = async (req: Request, { params }: any) => {
  const { prompt, tag } = await req.json();
  try {
    await connectToDB();
    const existingPrompt = await Prompt.findById(params.id);
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    existingPrompt.prompt = prompt;
    await existingPrompt.save();
    return new Response(JSON.stringify(prompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to update prompt", { status: 500 });
  }
};

export const DELETE = async (req: Request, { params }: any) => {
  try {
    await connectToDB();
    const prompt = await Prompt.findByIdAndRemove(params.id);
    if (!prompt) return new Response("Prompt not found", { status: 404 });
    return new Response("Prompt deleted successfully", { status: 201 });
  } catch (error) {
    return new Response("Failed to delete prompt", { status: 500 });
  }
};
