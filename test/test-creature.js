const Creature = artifacts.require("Creature");

contract("Creature", accounts => {
  it("should have totalSupply of 0", () =>
  { 
    return Creature.deployed()
        .then( instance => instance.totalSupply())
        .then(supply => {
            assert.equal(
            supply.valueOf(),
            0,
            "total supply is not zero"
            );
        });
    });
    it("should have name as Creature", () =>
    { 
      return Creature.deployed()
          .then( instance => instance.name())
          .then(name => {
              assert.equal(
              name,
              "Creature",
              "name is not creature"
              );
          });
      });
});
