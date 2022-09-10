import { ApiUrl } from '../api-url';

describe('apiUrl', () => {
  test('should return games api', () => {
    expect(ApiUrl.getGames()).toBe('/games');
  })

  test('should return single game api', () => {
    expect(ApiUrl.getSingleGame('1')).toBe('/game?id=1');
  })

  test('should filter games api', () => {
    const url = 'category=mmo&&sort=alphabetical';
    expect(ApiUrl.getGamesByFilterParams(url)).toBe(`/games?${url}`);
  })
})