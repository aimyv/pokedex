import { renderHook } from "@testing-library/react";
import useFetchPokemon from "../useFetchPokemon";

global.fetch = jest.fn();

describe("useFetchedPokemon", () => {
  test("should return the initial values for sortedPokemonData, isError and isLoading", async () => {
    const { result } = renderHook(() => useFetchPokemon());
    const { sortedPokemonData, isError, isFetching } = result.current;

    expect(sortedPokemonData).toBe(null);
    expect(isError).toBe(null);
    expect(isFetching).toBe(true);
  });
});