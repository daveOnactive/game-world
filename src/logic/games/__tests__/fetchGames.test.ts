import { fetchGames, fetchGamesByFilterParams } from '../games.logic';
import mockAxios from "jest-mock-axios";import { mockedGames } from '../../../mocks/games.mocks';

describe('fetchGames', () => {

  afterEach(() => {
    mockAxios.reset();
  });

  test('should return games list', async () => {

    mockAxios.get.mockResolvedValue({data: mockedGames});

    const result = await fetchGames();

    expect(result).toEqual(mockedGames);
  });

  test('should return filtered games', async () => {
    mockAxios.get.mockResolvedValue({
      data: mockedGames
    });

    const result = await fetchGamesByFilterParams('genre=MMOARPG');

    expect(result).toEqual(mockedGames);
  });
});