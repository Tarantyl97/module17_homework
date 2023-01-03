import { reverseStringMy } from "../reverseStringMy.js";
import { getMonth } from "../reverseStringMy.js";
import { repeatWord } from "../reverseStringMy.js";
import { getPercents } from "../reverseStringMy.js";


describe("test reverseStringMy", () => {
    it("reverseString and return", () => {
      expect(reverseStringMy("hello world")).toBe("dlrow olleh");
    })
  });

  describe("test getMonth", () => {
    it("if number 1-12, show name months", () => {
      expect(getMonth(10)).toBe('октябрь');
    }),

    it("if number 0, show error", () => {
      expect(getMonth(0)).toBe('0 не может быть месяцем');
    }),

    it("if number > 12, show error", () => {
      expect(getMonth(13)).toBe('неизвестно');
    })
  });

  let word = "hi";
  let num = 3;

  describe("test repeatWord", () => {
    it("if 1 argument = string, 2 argument = number", () => {
      expect(repeatWord(word, num)).toBe('hi1, hi2, hi3, ');
    }),
    
    it("if we have only 1 argument", () => {
      expect(repeatWord(num)).toBe('');
    }),

    it("if we have only 2 argument", () => {
      expect(repeatWord(word)).toBe('');
    })
  });

  let percent = 30;
  let number = 200;

  describe("test getPercents", () => {
    it("if 1 argument = number(percents), 2 argument = number(num)", () => {
      expect(getPercents(percent, number)).toBe(60);
    }),

    it("if we have only 1 argument", () => {
      expect(getPercents(number)).toBe(NaN);
    }),

    it("if we have only 1 argument", () => {
      expect(getPercents(number, percent)).toBe(60);
    })
  })

  
