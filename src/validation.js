export const required = value => (value ? undefined : 'Required');
export const number = value =>
	value && typeof value === 'number' ? undefined : 'Please enter a number';
export const minNum = value =>
	value && value < 1 ? 'Number must be at least 1' : undefined;
export const maxNum = value =>
	value && value > 11 ? 'Number must be less than 10' : undefined;
export const url = value =>
	value &&
	value.match(
		/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
	)
		? undefined
		: 'Must be a valid URL';
