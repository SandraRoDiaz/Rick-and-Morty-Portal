const API = "https://rickandmortyapi.com/api";

export interface CharacterFilter {
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}

type APIResponse = any;

const characterListCache = new Map();

export async function getCharacters(
  filter: CharacterFilter,
  page: number
): Promise<APIResponse> {
  const response = await fetch(
    `${API}/character/?page=${page}&name=${filter.name || ""}&gender=${
      filter.gender || ""
    }&status=${filter.status || ""}`
  );
  return response.json();
}

export async function getCharacterById(id: number): Promise<APIResponse> {
  const characterFromCache = characterListCache.get(id);
  // console.log(characterListCache.entries());

  if (characterFromCache) {
    return characterFromCache;
  }

  const response = await fetch(`${API}/character/${id}`);
  const newCharacter = response.json();
  //updating cache
  characterListCache.set(id, newCharacter);
  return newCharacter;
}

export async function getLastAppearance(id: number): Promise<APIResponse> {
  const response = await fetch(`${API}/episode/${id}`);
  const lastAppearance = response.json();
  return lastAppearance;
}
