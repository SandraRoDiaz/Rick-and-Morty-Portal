import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useCharacter } from "../../contexts/CharacterProvider";
import {
  getCharacterById,
  getLastAppearance,
} from "../../services/api.service";
import Image from "next/image";
import { Character } from "../../interfaces/interfaces";
import BackButton from "../../components/BackButton";
import style from "./styles.module.css";
import Tag from "../../components/LifeStatus";
import LifeStatus from "../../components/LifeStatus";

export default function Character({}) {
  const router = useRouter();

  //   const {characterData} = useCharacter()
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    (async () => {
      if (!router.isReady) return;
      const characterID = Number(router.query.id);
      const characterData = await getCharacterById(characterID);
      console.log("los datos...", characterData);
      const lastEpisode =
        characterData?.episode[characterData?.episode?.length - 1];

      const lastEpisodeId = lastEpisode.substring(
        lastEpisode.lastIndexOf("/") + 1
      );
      const lastAppearance = await getLastAppearance(lastEpisodeId);
      setCharacter({ ...characterData, lastAppearance });
    })();
  }, [router.isReady]);

  console.log("character", character);

  return (
    <div className="flex flex-col h-[calc(100vh-68px)]  bg-lightGray dark:bg-darkBg">
      <BackButton url="/"></BackButton>
      <div className="relative rounded w-4/6 h-4/6 mx-auto my-16 bg-darkGreen  dark:bg-alive">
        <div className=" absolute rounded p-8  bg-lightFont w-full h-full left-2 bottom-2  dark:bg-card border-1 border-lime-500">
          <div className="flex justify-between ">
            <div className="flex flex-col gap-2 text-lg">
              <h1 className="text-4xl text-darkGreen  dark:text-alive">
                {character?.name}
              </h1>
              <LifeStatus status={character?.status} />
              <p className=" text-gray dark:text-lightFont">
                Residence: {character?.location?.name}
              </p>
              <p className=" text-gray dark:text-lightFont">
                Specie: {character?.species}
              </p>

              <p className=" text-gray dark:text-lightFont">
                Gender: {character?.gender}
              </p>
              <p className=" text-gray dark:text-lightFont mt-6 font-bold">
                Last Apperance
              </p>
              <p className=" text-gray dark:text-lightFont">
                {character?.lastAppearance?.name}
              </p>
            </div>
            <Image
              src={character?.image}
              alt="character-image"
              width={400}
              height={400}
            ></Image>
          </div>
        </div>
      </div>

      {/* {character && (
        <>
          <p>Name:{character.name}</p>
          <p>Gender:{character.gender}</p>

          <div
            className={`w-20 text-center px-2.5 py-0.5 rounded-full bg-${character.status}`}
          >
            {character.status}
          </div>
          <p>Specie:{character.species}</p>
          <Image
            src={character.image}
            alt="character-image"
            width={400}
            height={400}
          ></Image>
          <p> Location: {character.location.name}</p>
        </>
      )} */}
    </div>
  );
}
