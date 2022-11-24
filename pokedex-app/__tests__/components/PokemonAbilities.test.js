import React from "react";
import renderer from "react-test-renderer";
import PokemonAbilities from "../../src/components/PokemonAbilities";

const abilities = ["static", "lightning-rod"];

const tree = renderer
  .create(<PokemonAbilities abilities={abilities} />)
  .toJSON();

describe("<PokemonAbilities />", () => {
  test("has 2 children", () => {
    expect(tree.children.length).toBe(2);
  });

  test("renders correct abilities", () => {
    expect(tree.children[0].children[0].children[0]).toBe("Static");
    expect(tree.children[1].children[0].children[0]).toBe("Lightning-rod");
  });
});
