<!-- // https://codegolf.stackexchange.com/questions/198121 --!>

f = (n, m=[0]) =>
	(n+m) ** .5 % 1 ?
		f(n, [++m]) :
		+m
