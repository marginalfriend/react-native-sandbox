export function formatToRupiah(number: number): string {
	// Format number to Rupiah currency
	return number.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR'
	});
}