import * as http from "http";
import { HttpMethods } from "./utils/http-methods";
import { Routes } from "./routes/routes";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";

export const app = async (req:http.IncomingMessage, res:http.ServerResponse) => {

    const baseUrl = req.url?.split("?")[0] || "";

    if(req.method === HttpMethods.GET && baseUrl === Routes.LIST){
        await getListEpisodes(req, res);
    }else if(req.method === HttpMethods.GET && baseUrl === Routes.FILTER){
        await getFilterEpisodes(req, res);
    }

};