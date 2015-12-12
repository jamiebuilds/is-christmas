import test from 'ava';
import isChristmas from './';

function overrideDate(month, day) {
	const originalDate = global.Date;

	global.Date = () => {
		return {
			getMonth() { return month - 1; },
			getDate() { return day; }
		};
	};

	return () => {
		global.Date = originalDate;
	};
}

test('should return true on christmas', t => {
	const restore = overrideDate(12, 25);
	t.is(isChristmas(), true);
	restore();
	t.end();
});

test('should return false on other days', t => {
	const restore = overrideDate(5, 14);
	t.is(isChristmas(), false);
	restore();
	t.end();
});
