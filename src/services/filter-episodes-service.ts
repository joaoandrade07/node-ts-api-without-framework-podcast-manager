import { ResponseModel } from "../models/response-models";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (fullUrl: string | undefined):Promise<ResponseModel> => {
    let res: ResponseModel = {
        statusCode: 0,
        body:[]
    } 
    
    const queryString = fullUrl?.split("?p=")[1] || "";

    const data = await repositoryPodcast(queryString);

    res.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    res.body = data;

    return res;
}