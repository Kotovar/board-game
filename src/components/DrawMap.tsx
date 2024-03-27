interface DrawMapProps {
	map: number[][];
}

const DrawMap: React.FC<DrawMapProps> = ({map}) => {
	const getColor = (value: number) => {
		switch (value) {
			case 0:
				return '#00008B'; // Глубокая вода
			case 1:
				return '#0000FF'; // Мелкая вода
			case 2:
				return '#F4A460'; // Пляж
			case 3:
				return '#008000'; // Равнина
			case 4:
				return '#90EE90'; // Луг
			case 5:
				return '#006400'; // Лес
			case 6:
				return '#808080'; // Горы
			case 7:
				return '#A9A9A9'; // Высокие горы
			case 8:
				return '#FFFFFF'; // Снег
			case 9:
				return '#AFEEEE'; // Ледник
			default:
				return '#FFFFFF'; // Значение по умолчанию
		}
	};

	return (
		<div className="container">
			{map.map((raw, rowIndex) => (
				<div key={rowIndex} className="raw">
					{raw.map((el, columnIndex) => (
						<div
							key={columnIndex}
							className={`column column-${el}`}
							style={{backgroundColor: getColor(el)}}
						>
							{''}
						</div>
					))}
				</div>
			))}
		</div>
	);
};

export default DrawMap;
