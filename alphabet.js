// https://codegolf.stackexchange.com/questions/196192/pointlessly-make-your-way-down-the-alphabet

f = s =>
	s.map(p = c =>
		(c |= (b = Buffer)(c)[0]) > 96 ? b([c]) + p(c-1) : '')
