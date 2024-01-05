import { useState, useRef } from "react";
import CharacterCard from "./CharacterCard";
import { Character } from "../interfaces/interfaces";
import Paginator from "./Paginator";
import { getCharacters } from "../services/api.service";
import CustomButton from "./CustomButton";
import Loader from "./Loader";
import { useRouter } from "next/router";
import { ParsedUrlQueryInput } from "querystring";

const FILTER_DELAY = 500;
const NAME_FILTER_PARAM = "name";
const PAGE_FILTER_PARAM = "page";

export default function Form() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const [lastPage, setLastPage] = useState<number>(1);
  const [totalCharacters, setTotalCharacters] = useState<number | null>(null);

  const { query, isReady, replace, asPath } = useRouter();

  const {
    [NAME_FILTER_PARAM]: nameParam = "",
    [PAGE_FILTER_PARAM]: pageParam = 1,
  } = isReady ? query : {};

  const name = Array.isArray(nameParam) ? nameParam[0] : nameParam;
  const page = Number(Array.isArray(pageParam) ? pageParam[0] : pageParam);

  const updateQueryParams = (query: string | ParsedUrlQueryInput | null) => {
    const pathname = asPath.split(/[?#]/)[0];

    replace(
      {
        pathname,
        query,
      },
      undefined, //alias
      { shallow: true }
    );
  };

  const getPageData = async (page: number) => {
    setIsLoading(true);
    try {
      const name = inputRef.current?.value || "";

      const params: Partial<Record<string, string | string[] | number>> = {
        ...query,
        [NAME_FILTER_PARAM]: name,
        [PAGE_FILTER_PARAM]: page,
      };
      !name && delete params[NAME_FILTER_PARAM];
      updateQueryParams(params);

      const character = await getCharacters({ name }, page);

      console.log("el personaje...", character);
      setCharacters(character.results);
      setLastPage(character.info.pages);
      setTotalCharacters(character.info.count);
    } catch (error: any) {
      console.log("ha ocurrido un error");
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    const params = {
      ...query,
    };
    delete params[NAME_FILTER_PARAM];
    delete params[PAGE_FILTER_PARAM];
    updateQueryParams(params);

    setCharacters([]);

    setLastPage(1);
  };

  const showNextPage = (): void => {
    if (page === lastPage) {
      return;
    }
    const nextPage = page + 1;

    getPageData(nextPage);
  };

  const showPreviousPage = (): void => {
    if (page <= 1) {
      return;
    }
    const previousPage = page - 1;

    getPageData(previousPage);
  };

  return (
    <div className="w-full min-h-screen bg-lightGray dark:bg-darkBg">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-xl  dark:text-lightFont">
          Find your favorite
          <span className=" text-darkGreen dark:text-alive"> characters</span>
        </h2>
        <div className="flex gap-3">
          <input
            key={name}
            defaultValue={name}
            ref={inputRef}
            name="name"
            className="flex-col border border-gray-300 bg-gray-100 rounded"
          ></input>

          <CustomButton text="Reset" handleClick={reset}></CustomButton>
          <CustomButton
            text="Search"
            handleClick={() => getPageData(1)}
          ></CustomButton>
        </div>
      </div>

      {isLoading && <Loader />}

      {!isLoading && Array.isArray(characters) && characters.length > 0 ? (
        <div className="p-4 text-sm">
          {totalCharacters && (
            <p className="flex px-36 justify-start opacity-80 dark:text-lightFont">
              Found {totalCharacters} results
            </p>
          )}
          <div className="flex flex-row flex-wrap justify-center items-center py-4 gap-10">
            {characters?.map((character) => (
              <div key={character.id}>
                <CharacterCard character={character}></CharacterCard>
              </div>
            ))}
          </div>
          {characters && characters.length > 0 && (
            <Paginator
              // currentPage={currentPage}
              currentPage={page}
              lastPage={lastPage}
              onNextPage={showNextPage}
              onPrevPage={showPreviousPage}
            ></Paginator>
          )}
        </div>
      ) : (
        <div className="h-80 flex flex-col justify-center items-center text-lg">
          {!characters && (
            <p className="dark:text-lightFont">
              No cosmic matches found. Try searching in another dimension,
              maybe?
            </p>
          )}
        </div>
      )}
    </div>
  );
}
