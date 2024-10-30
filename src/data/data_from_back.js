import suslik from "../images_test/suslik.jpg";
import chess from "../images_test/chess.jpg";

export const backData = [
  {
    id: 1,
    title: "first",
    image: suslik,
    date: "19.08.1999",
    description: "suslik",
  },
  {
    id: 2,
    title: "second",
    image: chess,
    date: "23.09.2022",
    description: "chess board",
  },
];

const getDataFromBack = async () => {
  try {
    const result = await fetch("django server").then((res) => {
      return res.json();
    });
    return result;
  } catch (error) {
    throw error;
  }
};
