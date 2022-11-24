import React from "react";
import renderer from "react-test-renderer";
import PokemonStats from "../../src/components/PokemonStats";

const stats = {
  hp: 1,
  attack: 2,
  defense: 3,
  speed: 4,
};

const tree = renderer.create(<PokemonStats stats={stats} />).toJSON();

describe("<PokemonStats />", () => {
  test("has 4 children", () => {
    expect(tree.children.length).toBe(4);
  });

  test("renders correct HP stat", () => {
    expect(tree.children[0].children.length).toBe(2);
    expect(tree.children[0].children[0].children[0]).toBe("Hp");
    expect(tree.children[0].children[1].children[0]).toBe("1");
  });

  test("renders correct Attack stat", () => {
    expect(tree.children[1].children.length).toBe(2);
    expect(tree.children[1].children[0].children[0]).toBe("Atk");
    expect(tree.children[1].children[1].children[0]).toBe("2");
  });

  test("renders correct Defense stat", () => {
    expect(tree.children[2].children.length).toBe(2);
    expect(tree.children[2].children[0].children[0]).toBe("Def");
    expect(tree.children[2].children[1].children[0]).toBe("3");
  });

  test("renders correct Speed stat", () => {
    expect(tree.children[3].children.length).toBe(2);
    expect(tree.children[3].children[0].children[0]).toBe("Spd");
    expect(tree.children[3].children[1].children[0]).toBe("4");
  });
});
