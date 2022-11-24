import { fetchPokemonData } from "../../src/api/pokeApi";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        abilities: [
          {
            ability: {
              name: "static",
              url: "https://pokeapi.co/api/v2/ability/9/",
            },
            is_hidden: false,
            slot: 1,
          },
          {
            ability: {
              name: "lightning-rod",
              url: "https://pokeapi.co/api/v2/ability/31/",
            },
            is_hidden: true,
            slot: 3,
          },
        ],
        height: 4,
        id: 25,
        name: "pikachu",
        sprites: {
          versions: {
            "generation-v": {
              "black-white": {
                animated: {
                  back_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/25.gif",
                  back_female:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/female/25.gif",
                  back_shiny:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/25.gif",
                  back_shiny_female:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/female/25.gif",
                  front_default:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif",
                  front_female:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/female/25.gif",
                  front_shiny:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/25.gif",
                  front_shiny_female:
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/female/25.gif",
                },
                back_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/25.png",
                back_female:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/female/25.png",
                back_shiny:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/25.png",
                back_shiny_female:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/female/25.png",
                front_default:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/25.png",
                front_female:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/female/25.png",
                front_shiny:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/25.png",
                front_shiny_female:
                  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/female/25.png",
              },
            },
          },
        },
        stats: [
          {
            base_stat: 35,
            effort: 0,
            stat: {
              name: "hp",
              url: "https://pokeapi.co/api/v2/stat/1/",
            },
          },
          {
            base_stat: 55,
            effort: 0,
            stat: {
              name: "attack",
              url: "https://pokeapi.co/api/v2/stat/2/",
            },
          },
          {
            base_stat: 40,
            effort: 0,
            stat: {
              name: "defense",
              url: "https://pokeapi.co/api/v2/stat/3/",
            },
          },
          {
            base_stat: 50,
            effort: 0,
            stat: {
              name: "special-attack",
              url: "https://pokeapi.co/api/v2/stat/4/",
            },
          },
          {
            base_stat: 50,
            effort: 0,
            stat: {
              name: "special-defense",
              url: "https://pokeapi.co/api/v2/stat/5/",
            },
          },
          {
            base_stat: 90,
            effort: 2,
            stat: {
              name: "speed",
              url: "https://pokeapi.co/api/v2/stat/6/",
            },
          },
        ],
        types: [
          {
            slot: 1,
            type: {
              name: "electric",
              url: "https://pokeapi.co/api/v2/type/13/",
            },
          },
        ],
        weight: 60,
      }),
  })
);

describe("Poke API", () => {
  test("fetchPokemonData returns correct data", async () => {
    const data = await fetchPokemonData("https://pokeapi.co/api/v2/pokemon/25");

    expect(data.id).toBe(25);
    expect(data.name).toBe("pikachu");
    expect(data.url).toBe("https://pokeapi.co/api/v2/pokemon/25");
    expect(data.height).toBe(4);
    expect(data.weight).toBe(60);
    expect(data.imageUrl).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/25.png"
    );
    expect(data.gifUrl).toBe(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif"
    );
    expect(data.types).toStrictEqual(["electric"]);
    expect(data.abilities).toStrictEqual(["static", "lightning-rod"]);
  });
});
