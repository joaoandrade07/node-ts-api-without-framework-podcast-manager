import { ResponseModel } from "../models/response-models";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";


export const serviceListEpisodes = async (): Promise<ResponseModel> => {

    let res: ResponseModel = {
        statusCode: 0,
        body:[]
    }

    const data = await repositoryPodcast();

    res.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;
    res.body = data;

    return res;
}