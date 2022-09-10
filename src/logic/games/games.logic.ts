import { AxiosResponse } from 'axios';
import { GameModel } from '../../models/game.model';
import { Api } from '../../services/api';
import { ApiUrl } from '../../services/api-url';

export async function fetchGames(): Promise<AxiosResponse<GameModel[]>> {
  const response = await Api.get(ApiUrl.getGames());
  return response.data;
};

export async function fetchGamesByFilterParams(params?: string): Promise<AxiosResponse<GameModel[]>> {
  const response = await Api.get(ApiUrl.getGamesByFilterParams(params));
  return response.data;
};