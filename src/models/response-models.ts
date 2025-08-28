import { PodcastModel } from "./podcast-model";

export interface ResponseModel {
    statusCode: number,
    body: PodcastModel[]
}