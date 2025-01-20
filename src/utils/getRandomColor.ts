import { getRandomNumber } from "./getRandomNumber"

const randomColors = ["#F6AE2D", "#F26419", "#3D77A4", "#571C5E", "#BE6064", "#E576A0", "#6F1D1B", "#41D3BD"]
const getRandomColor = () => randomColors[getRandomNumber(0, randomColors.length - 1)]

export default getRandomColor