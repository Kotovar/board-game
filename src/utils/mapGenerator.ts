import {Noise} from 'noisejs';

const noise = new Noise(Math.random());

export default function mapGenerator(size: number): number[][] {
	const map: number[][] = Array.from({length: size}, (_, x) =>
		Array.from({length: size}, (_, y) => {
			// Получаем значение шума Перлина для точки (x, y)
			const noiseValue = noise.simplex2(x / size, y / size);

			// Преобразуем значение шума в диапазон от 0 до 1
			const normalizedValue = (noiseValue + 1) / 2;
			// Преобразуем значение шума в диапазон от 0 до 9
			const scaledValue = Math.floor(normalizedValue * 10);
			return scaledValue % 10; // Используем оператор модуля для получения диапазона от 0 до 9
		}),
	);

	return map;
}
