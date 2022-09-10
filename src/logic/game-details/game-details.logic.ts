import { AxiosResponse } from "axios";
import { GameModel } from "../../models/game.model";
import { Api } from "../../services/api";
import { ApiUrl } from "../../services/api-url";

export async function FetchGamesById(id?: string): Promise<AxiosResponse<GameModel>> {
  const response = await Api.get(ApiUrl.getSingleGame(id));
  return response.data;
}