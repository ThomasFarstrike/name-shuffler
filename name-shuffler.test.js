// name-shuffler.test.js

const { generateRandomName } = require("./name-shuffler");

describe("generateRandomName", () => {
  it("should generate a random name with default options", () => {
    const name = generateRandomName();
    expect(name.split(" ").length).toBe(2); // Two words by default
  });

  it("should respect the number of words option", () => {
    const name = generateRandomName({ numWords: 3 });
    expect(name.split(" ").length).toBe(3);
  });

  it("should choose a random name from a provided list", () => {
    const nameList = ["Alice", "Bob", "Charlie"];
    const randomName = generateRandomName({ nameList });
    expect(nameList.includes(randomName)).toBeTruthy();
  });

  it("should generate random words with varying lengths", () => {
    const names = [];
    for (let i = 0; i < 10; i++) {
      names.push(generateRandomName());
    }

    const wordCounts = names.map(name => name.split(" ").length);
    expect(wordCounts.some(count => count > 1 && count < 4)).toBeTruthy();
  });

  it("should add prefix and suffix if provided", () => {
    const name = generateRandomName({ prefix: "Dr.", suffix: "PhD" });
    expect(name.startsWith("Dr. ")).toBeTruthy();
    expect(name.endsWith(" PhD")).toBeTruthy();
  });
});

