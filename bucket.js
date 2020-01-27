<!-- // https://codegolf.stackexchange.com/questions/198406/bucket-and-minimize --!>

b = (l, n) =>
	(f = (l, s=l.length) =>
		l+'' ?
			[l.slice(0, (v=~~(s/n))+!!(m=s%n)), ...f(l.slice(v+!!m), s-!!m)] :
			[])(l).flatMap(c => c.fill(Math.min(...c)))
