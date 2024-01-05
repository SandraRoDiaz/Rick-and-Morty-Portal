import Link from "next/link";
import Image from "next/image";
import { Character } from "../interfaces/interfaces";

interface CharacterCardProps {
  character: Character;
}
export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Link href={`/character/${character.id}`}>
      <div className="relative cursor-pointer hover:scale-105">
        <Image
          className="cursor-pointer rounded-2xl"
          src={character.image}
          alt={character.name}
          width={250}
          height={250}
        ></Image>
        <div className="absolute rounded-2xl top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray opacity-40"></div>
        <div className="absolute top-0 left-0 w-full h-full flex items-end justify-center">
          <p className="text-white text-xl font-semibold bottom-0 p-2">
            {character.name}
          </p>
        </div>
      </div>
    </Link>
  );
}
