k=(e, i='', c='') =>
	([b, ...l]=e, d=i.slice(1), (m=(p='[{}]')[3-(n=p.indexOf(b))]) ?
		n<2 ?
			k(l, m+i, c+b) :
			k(...[[l, , m+c+b], [e, d, c+i[0]], [l, d, c+b]][!!i+(i[0]==b)]) :
			b ?
				k(l, i, c+b) :
				c+i)
