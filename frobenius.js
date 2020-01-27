<!-- // https://codegolf.stackexchange.com/questions/57146 --!>

// f = (l, n=1, m=1) =>
// 	n < (Math.max(...l)-1)*(Math.min(...l)-1) ?
// 		m < 2**(k=l.length) ?
// 			(r=l.reduce((a, x, i) => a*x*m.toString(2).padStart(k,0)[i] || a, 0)) == n ?
// 				f(l, n+1) :
// 				f(l, n, m+1) :
// 			f(l, n+1) || n :
// 		0

f = l =>
	seq(((Math.max(...l)-1)*(Math.min(...l)-1))).reduce((a, n) =>
		p(seqq(l.length)).map(perm =>
			perm.reduce((a, x, i) => a+x*l[i], 0)).includes(n) ? a : n, 0)

p = xs =>
	xs.length ?
		xs.flatMap((xi, i) => p([...xs.slice(0,i), ...xs.slice(i+1)]).map(xsi => [xi, ...xsi])) :
		[[]]

let seq = n => [...Array(n).keys()]
let seqq = n =>
	seq(n)
		.reduce((a, m) => a.concat(seq(n)), [])

let pseqq = n =>
	p(seqq(n))
		.map(s => s.slice(0,n))
		.reduce((a, s) => a.concat(!a.find(t => !(t<s || t>s)) ? s : []), [])

let tests = [[[3, 7, 8], 5],
[[25, 10, 16], 79],
[[11, 12, 13, 14, 13, 14], 43],
[[101, 10], 899],
[[101, 10, 899], 889],
[[101, 10, 11], 89],
[[30, 105, 70, 42], 383],
[[2, 51, 6], 49]]

// tests.map(t => console.log(`f(${t[0]}) -> ${f(t[0])} == ${t[1]}`))

// {for(i=0;i<m;i++){t=i||t}return}
// [...Array(m).keys()].reduce((a,n)=>)
// [...''.padEnd(m,0)].reduce((a,_,n)=>)
