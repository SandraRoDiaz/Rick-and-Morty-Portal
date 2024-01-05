import { ReactNode, SetStateAction, useContext, useState } from "react";

import { createContext } from "react";

export interface CharacterContextValue {
  characterData: object;
  setCharacterData: (character: any) => void;
}

const initialValue = {
  characterData: {},
  setCharacterData: (character: any) => void 0,
};

const CharacterContext = createContext<CharacterContextValue>(initialValue);

function CharacterProvider({ children }: { children: ReactNode }) {
  const [characterData, setCharacterData] = useState<
    CharacterContextValue["characterData"]
  >({});

  const updateCharacter = (character: any) => setCharacterData(character);
  return (
    <CharacterContext.Provider
      value={{ characterData, setCharacterData: updateCharacter }}
    >
      {children}
    </CharacterContext.Provider>
  );
}

export const useCharacter = () => useContext(CharacterContext);

export default CharacterProvider;
