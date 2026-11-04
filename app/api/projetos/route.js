import { projetos } from "../../dados";

export async function GET(){
    return Response.json(projetos);
}