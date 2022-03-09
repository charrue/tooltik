/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
import {
  last,
  findRight,
  findIndexRight,
  contains,
  isEmpty,
  clear,
  insert,
  insertAt,
  insertBefore,
  remove,
  removeAt,
  toArray,
} from "../src/array";

describe("Array", () => {
  it("last", () => {
    expect(last([
      1,
      2,
      3,
    ])).toBe(3);
    expect(last([1])).toBe(1);
    expect(last([])).toBe(undefined);
  });

  it("findRight", () => {
    const arr = [
      0,
      1,
      2,
      3,
    ];
    const obj = findRight(arr, (value, index, array) => {
      expect(array).toBe(arr);
      expect(typeof index).toBe("number");
      return value > 1;
    });

    expect(obj).toBe(3);

    const obj2 = findRight(arr, (val) => val > 100);

    expect(obj2).toBeUndefined();

    const mockFunc = jest.fn();
    findRight([], mockFunc);
    expect(mockFunc).not.toHaveBeenCalled();
  });

  it("findIndexRight", () => {
    const arr = [
      0,
      1,
      2,
      3,
    ];
    const obj = findIndexRight(arr, (value, index, array) => {
      expect(array).toBe(arr);
      expect(typeof index).toBe("number");
      return value > 1;
    });

    expect(obj).toBe(3);

    const obj2 = findIndexRight(arr, (val) => val > 100);

    expect(obj2).toBe(-1);

    const mockFunc = jest.fn();
    findIndexRight([], mockFunc);
    expect(mockFunc).not.toHaveBeenCalled();
  });
  it("contains", () => {
    expect(contains([
      1,
      2,
      3,
    ], 2)).toBeTruthy();
    expect(contains([
      1,
      2,
      3,
    ], 4)).toBeFalsy();
  });
  it("isEmpty", () => {
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty([
      1,
      2,
      3,
    ])).toBeFalsy();
  });
  it("clear", () => {
    const arr = [
      1,
      2,
      3,
    ];
    clear(arr);
    expect(arr.length).toBe(0);
  });
  // insert
  it("insert", () => {
    expect(insert([
      1,
      2,
      3,
    ], 4)).toEqual([
      1,
      2,
      3,
      4,
    ]);
    expect(insert([
      1,
      2,
      3,
    ], 1)).toEqual([
      1,
      2,
      3,
    ]);
  });

  it("insertAt", () => {
    expect(insertAt<string | number>([
      "1",
      "2",
      "3",
    ], 0, 4)).toEqual([
      4,
      "1",
      "2",
      "3",
    ]);
    expect(insertAt([], 2, 4)).toEqual([4]);
    expect(insertAt([], -2, 4)).toEqual([4]);
    expect(insertAt<string | number>([
      "1",
      "2",
      "3",
    ], 1, 4)).toEqual([
      "1",
      4,
      "2",
      "3",
    ]);
    expect(insertAt<string | number>([
      "1",
      "2",
      "3",
    ], -1, 4)).toEqual([
      "1",
      "2",
      4,
      "3",
    ]);

    expect(insertAt<string | number>([
      "1",
      "2",
      "3",
    ], 0, 4, "5")).toEqual([
      4,
      "5",
      "1",
      "2",
      "3",
    ]);
    expect(insertAt<number>([], 2, 4, 5)).toEqual([4, 5]);
    expect(insertAt<number | string>([], -2, 4, "5")).toEqual([4, "5"]);
    expect(insertAt<string | number>([
      "1",
      "2",
      "3",
    ], 1, 4, "5")).toEqual([
      "1",
      4,
      "5",
      "2",
      "3",
    ]);
    expect(insertAt<string | number>([
      "1",
      "2",
      "3",
    ], -1, 4, "5")).toEqual([
      "1",
      "2",
      4,
      "5",
      "3",
    ]);
  });

  it("insertBefore", () => {
    expect(insertBefore([
      1,
      2,
      3,
    ], 1, 4)).toEqual([
      4,
      1,
      2,
      3,
    ]);
    expect(insertBefore([
      1,
      2,
      3,
    ], 5, 4)).toEqual([
      1,
      2,
      3,
      4,
    ]);

    expect(insertBefore([
      1,
      2,
      3,
    ], 1, 4, 5)).toEqual([
      4,
      5,
      1,
      2,
      3,
    ]);
    expect(insertBefore([
      1,
      2,
      3,
    ], 5, 4, 5)).toEqual([
      1,
      2,
      3,
      4,
      5,
    ]);
  });

  it("removeAt", () => {
    const arr = [
      1,
      2,
      3,
    ];
    expect(removeAt(arr, 0)).toBeTruthy();
    expect(arr).toEqual([2, 3]);
    const arr2 = [
      1,
      2,
      3,
    ];
    expect(removeAt(arr2, 2)).toBeTruthy();
    expect(arr2).toEqual([1, 2]);
    const arr3 = [
      1,
      2,
      3,
    ];
    expect(removeAt(arr3, -2)).toBeTruthy();
    expect(arr3).toEqual([1, 3]);
    expect(removeAt([
      1,
      2,
      3,
    ], 4)).toBeFalsy();
  });

  it("remove", () => {
    expect(remove([
      1,
      2,
      3,
    ], 0)).toBe(-1);
    expect(remove([
      1,
      2,
      3,
      1,
    ], 1)).toEqual(0);
  });

  it("toArray", () => {
    expect(toArray([
      1,
      2,
      3,
    ])).toEqual([
      1,
      2,
      3,
    ]);
    expect(toArray("123")).toEqual([
      "1",
      "2",
      "3",
    ]);
    const obj = {
      length: 2,
    };
    expect(toArray(obj)).toEqual([undefined, undefined]);
    const obj2 = {
      0: "1",
      1: 2,
      length: 2,
    };
    expect(toArray(obj2)).toEqual(["1", 2]);
  });
});
