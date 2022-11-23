import { describe, test, expect } from "@jest/globals";
import React from "react";
import renderer from "react-test-renderer";
import PokemonStats from "../../src/components/PokemonStats";

const stats = {
  hp: 1,
  attack: 2,
  defense: 3,
  speed: 4,
};

describe("<PokemonStats />", () => {
  test("has 4 children", () => {
    const tree = renderer.create(<PokemonStats stats={stats} />).toJSON();
    expect(tree.children.length).toBe(4);
    expect(tree.children[0].children.length).toBe(2);
  });

  test("correct HP stat", () => {
    const tree = renderer.create(<PokemonStats stats={stats} />).toJSON();
    expect(tree.children[0].children.length).toBe(2);
    expect(tree.children[0].children[0].children[0]).toBe("Hp");
    expect(tree.children[0].children[1].children[0]).toBe("1");
  });

  test("correct Attack stat", () => {
    const tree = renderer.create(<PokemonStats stats={stats} />).toJSON();
    expect(tree.children[1].children.length).toBe(2);
    expect(tree.children[1].children[0].children[0]).toBe("Atk");
    expect(tree.children[1].children[1].children[0]).toBe("2");
  });

  test("correct Defense stat", () => {
    const tree = renderer.create(<PokemonStats stats={stats} />).toJSON();
    expect(tree.children[2].children.length).toBe(2);
    expect(tree.children[2].children[0].children[0]).toBe("Def");
    expect(tree.children[2].children[1].children[0]).toBe("3");
  });

  test("correct Speed stat", () => {
    const tree = renderer.create(<PokemonStats stats={stats} />).toJSON();
    expect(tree.children[3].children.length).toBe(2);
    expect(tree.children[3].children[0].children[0]).toBe("Spd");
    expect(tree.children[3].children[1].children[0]).toBe("4");
  });
});
