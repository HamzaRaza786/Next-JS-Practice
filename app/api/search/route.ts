import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (request: Request) => {
  const { searchText } = await request.json();
  try {
    await connectToDB();
    const regex = new RegExp(searchText, "i"); // i for case insensitive
    const prompts = await Prompt.find({
      prompt: { $regex: regex }
    }).populate("creator");
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
