export function formatToRupiah(number: number): string {
	// Format number to Rupiah currency
	return number.toLocaleString('id-ID', {
		style: 'currency',
		currency: 'IDR',
		compactDisplay: 'short',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	});
}

export function formatToUSD(number: number): string {
	// Format number to Rupiah currency
	return number.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		compactDisplay: 'short',
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
	});
}