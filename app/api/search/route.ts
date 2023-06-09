import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const POST = async(request: Request) => {
    const {searchText} = await request.json();
    console.log("In Post",searchText);
    try{
       await connectToDB();
       const regex = new RegExp(searchText, 'i') // i for case insensitive
       const prompts:String[] = await Prompt.find({
        prompt:{$regex: regex}}, {'prompt':1, '_id':0}
       );
       return new Response(JSON.stringify(prompts), {status:200});
    }catch(error){
        console.log(error);
        return new Response(JSON.stringify(error), {status:500});
    }
}