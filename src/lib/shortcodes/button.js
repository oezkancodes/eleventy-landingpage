module.exports = (slot, data) => {
	let colorClass = 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white';

	if (data) {
		if (data.white) colorClass = 'bg-white hover:bg-gray-100 active:bg-gray-200 text-blue-600';
	}

	return `
		<button class="${colorClass} h-12 px-8 text-lg font-medium rounded">
			${slot}
		</button>
  `;
};
