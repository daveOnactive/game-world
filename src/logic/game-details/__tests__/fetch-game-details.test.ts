import mockAxios from "jest-mock-axios"; 
import { mockedGames } from '../../../mocks/games.mocks';
import { FetchGamesById } from "../game-details.logic";

describe('fetchGames', () => {

  afterEach(() => {
    mockAxios.reset();
  });

  test('should return single game', async () => {

    mockAxios.get.mockResolvedValue({ data: mockedGames[0] });

    const result = await FetchGamesById('1');

    expect(result).toBe(mockedGames[0]);
  });
});