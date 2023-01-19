import {
  // createGridLayout,
  createGridRail,
} from "./gridLayout";
import { TGridRailSpec } from "./types2";

describe("createGridRail", () => {
  it(`only 'pixel' specs: works with zero padding and gap`, () => {
    const railSpec: TGridRailSpec = [
      { type: "pixel", value: 10, name: "first" },
      { type: "pixel", value: 20, name: "second" },
    ];

    const result = createGridRail({
      spec: railSpec,
      gap: 0,
      padding: 0,
      size: 100,
    });

    const expected = [
      {
        type: "pixel",
        value: 10,
        name: "first",
        position: 0,
        start: 0,
        end: 10,
      },
      {
        type: "pixel",
        value: 20,
        name: "second",
        position: 1,
        start: 10,
        end: 30,
      },
    ];

    expect(result).toEqual(expected);
  });

  //   it(`only 'pixel' specs: works with padding and gap`, () => {
  //     const railSpec = [
  //       { type: "pixel", name: "first", value: 10 },
  //       { type: "pixel", name: "second", value: 20 },
  //     ];

  //     const result = createGridRail({
  //       spec: railSpec,
  //       gap: 10,
  //       padding: 20,
  //       size: 100,
  //     });

  //     const expected = [
  //       {
  //         type: "pixel",
  //         value: 10,
  //         name: "first",
  //         position: 0,
  //         start: 20,
  //         end: 30,
  //       },
  //       {
  //         type: "pixel",
  //         value: 20,
  //         name: "second",
  //         position: 1,
  //         start: 40,
  //         end: 60,
  //       },
  //     ];

  //     expect(result).toEqual(expected);
  //   });

  //   it(`specs with 'fr': works with no padding and gap`, () => {
  //     const railSpec = [
  //       { type: "pixel", name: "first", value: 10 },
  //       { type: "pixel", name: "second", value: 20 },
  //       { type: "fr", name: "third", value: 1 },
  //     ];

  //     const result = createGridRail({
  //       spec: railSpec,
  //       gap: 0,
  //       padding: 0,
  //       size: 100,
  //     });

  //     const expected = [
  //       {
  //         type: "pixel",
  //         value: 10,
  //         name: "first",
  //         position: 0,
  //         start: 0,
  //         end: 10,
  //       },
  //       {
  //         type: "pixel",
  //         value: 20,
  //         name: "second",
  //         position: 1,
  //         start: 10,
  //         end: 30,
  //       },
  //       { type: "fr", value: 1, name: "third", position: 2, start: 30, end: 100 },
  //     ];

  //     expect(result).toEqual(expected);
  //   });

  //   it(`specs with only 'fr': works with no padding and gap`, () => {
  //     const railSpec = [
  //       { type: "fr", name: "first", value: 1 },
  //       { type: "fr", name: "second", value: 2 },
  //       { type: "fr", name: "third", value: 3 },
  //     ];

  //     const result = createGridRail({
  //       spec: railSpec,
  //       gap: 0,
  //       padding: 0,
  //       size: 60,
  //     });

  //     const expected = [
  //       { type: "fr", value: 1, name: "first", position: 0, start: 0, end: 10 },
  //       { type: "fr", value: 2, name: "second", position: 1, start: 10, end: 30 },
  //       { type: "fr", value: 3, name: "third", position: 2, start: 30, end: 60 },
  //     ];

  //     expect(result).toEqual(expected);
  //   });

  //   it(`specs with mixed 'pixel' and 'fr': works with padding and gap`, () => {
  //     const railSpec = [
  //       { type: "pixel", name: "first", value: 10 },
  //       { type: "fr", name: "second", value: 1 },
  //       { type: "fr", name: "third", value: 1 },
  //     ];

  //     const result = createGridRail({
  //       spec: railSpec,
  //       gap: 10,
  //       padding: 20,
  //       size: 100,
  //     });

  //     const expected = [
  //       {
  //         type: "pixel",
  //         value: 10,
  //         name: "first",
  //         position: 0,
  //         start: 20,
  //         end: 30,
  //       },
  //       { type: "fr", value: 1, name: "second", position: 1, start: 40, end: 55 },
  //       { type: "fr", value: 1, name: "third", position: 2, start: 65, end: 80 },
  //     ];

  //     expect(result).toEqual(expected);
  //   });
});

// describe("createGrid", () => {
//   it(`can create a grid from gridSpec and gridSize`, () => {
//     const railSpec = [
//       { type: "pixel", value: 25, name: "first" },
//       { type: "fr", value: 1, name: "second" },
//     ];

//     const result = createGridLayout(
//       {
//         rows: railSpec,
//         columns: railSpec,
//         padding: 0,
//         columnGap: 0,
//         rowGap: 0,
//         areas: {
//           topLeft: [
//             { position: 0 },
//             { position: 0 },
//             { position: 0 },
//             { position: 0 },
//           ],
//           bottomRight: [
//             { position: 1 },
//             { position: 1 },
//             { position: 1 },
//             { position: 1 },
//           ],
//         },
//       },
//       { width: 1000, height: 1000 }
//     );

//     const expected = {
//       width: 1000,
//       height: 1000,
//       columns: [
//         {
//           type: "pixel",
//           value: 25,
//           name: "first",
//           position: 0,
//           start: 0,
//           end: 25,
//         },
//         {
//           type: "fr",
//           value: 1,
//           name: "second",
//           position: 1,
//           start: 25,
//           end: 1000,
//         },
//       ],
//       rows: [
//         {
//           type: "pixel",
//           value: 25,
//           name: "first",
//           position: 0,
//           start: 0,
//           end: 25,
//         },
//         {
//           type: "fr",
//           value: 1,
//           name: "second",
//           position: 1,
//           start: 25,
//           end: 1000,
//         },
//       ],
//       areas: {
//         topLeft: { x1: 0, x2: 25, y1: 0, y2: 25, height: 25, width: 25 },
//         bottomRight: {
//           x1: 25,
//           x2: 1000,
//           y1: 25,
//           y2: 1000,
//           height: 975,
//           width: 975,
//         },
//       },
//     };

//     expect(result).toEqual(expected);
//   });

//   it(`when there are no 'fr' rows, the grid height will be the sum of fixed sized content`, () => {
//     const railSpec = [
//       { type: "pixel", value: 50, name: "first" },
//       { type: "pixel", value: 50, name: "second" },
//     ];

//     const result = createGridLayout(
//       {
//         rows: railSpec,
//         columns: railSpec,
//         padding: 0,
//         columnGap: 0,
//         rowGap: 0,
//         areas: {
//           topLeft: [
//             { position: 0 },
//             { position: 0 },
//             { position: 0 },
//             { position: 0 },
//           ],
//           bottomRight: [
//             { position: 1 },
//             { position: 1 },
//             { position: 1 },
//             { position: 1 },
//           ],
//         },
//       },
//       { width: 9000, height: 9000 }
//     );

//     const expected = {
//       width: 100,
//       height: 100,
//       columns: [
//         {
//           type: "pixel",
//           value: 50,
//           name: "first",
//           position: 0,
//           start: 0,
//           end: 50,
//         },
//         {
//           type: "pixel",
//           value: 50,
//           name: "second",
//           position: 1,
//           start: 50,
//           end: 100,
//         },
//       ],
//       rows: [
//         {
//           type: "pixel",
//           value: 50,
//           name: "first",
//           position: 0,
//           start: 0,
//           end: 50,
//         },
//         {
//           type: "pixel",
//           value: 50,
//           name: "second",
//           position: 1,
//           start: 50,
//           end: 100,
//         },
//       ],

//       areas: {
//         topLeft: { y1: 0, y2: 50, x1: 0, x2: 50, height: 50, width: 50 },
//         bottomRight: {
//           y1: 50,
//           y2: 100,
//           x1: 50,
//           x2: 100,
//           height: 50,
//           width: 50,
//         },
//       },
//     };

//     expect(result).toEqual(expected);
//   });
// });
