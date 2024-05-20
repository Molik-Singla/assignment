export function generateBarColor(value = 6, maxValue = 12) {
	const colors = ["rgba(255, 99, 132, 0.8)", "rgba(255, 205, 86, 0.8)", "rgba(75, 192, 192, 0.8)"];

	if (value < maxValue / 2) return colors[0];
	else if (value < maxValue / 1.3) return colors[1];
	else return colors[2];
}
