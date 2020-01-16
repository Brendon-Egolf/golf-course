//<!-- https://codegolf.stackexchange.com/questions/92414 --!>

g = s =>
	[[0],...s].reduce((x, v, i) =>
		v > '<' ?
			[...x.map(v => v + 1), 0] :
			[...x, i])
		.reduce((x, v, i) => x + s[i-1] + v)
