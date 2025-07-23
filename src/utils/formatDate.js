// Reformat the date
export default function formatDate(dateString) {
	const date = new Date(dateString);
	const formatted = date.toLocaleDateString("en-GB");
	return formatted;
};
