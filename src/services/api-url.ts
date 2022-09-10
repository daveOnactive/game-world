function getApiUrl() {
  
  function getGames() {
    return '/games';
  }

  function getSingleGame(id?: string) {
    return `/game?id=${id}`;
  }

  function getGamesByFilterParams(filterParams?: string) {
    return `/games?${filterParams}`;
  }

  return {
    getGames,
    getSingleGame,
    getGamesByFilterParams,
  }
}

export const ApiUrl = getApiUrl();