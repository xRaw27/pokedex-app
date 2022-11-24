import React from "react";
import renderer from "react-test-renderer";
import PokemonTypes from "../../src/components/PokemonTypes";

const types = ["flying", "poison", "ground"];

const tree = renderer.create(<PokemonTypes types={types} />).toJSON();

describe("<PokemonTypes />", () => {
  test("has 3 children", () => {
    expect(tree.children.length).toBe(3);
  });

  test("renders correct types", () => {
    expect(tree.children[0].children[0].children[0]).toBe("flying");
    expect(tree.children[1].children[0].children[0]).toBe("poison");
    expect(tree.children[2].children[0].children[0]).toBe("ground");
  });
});
