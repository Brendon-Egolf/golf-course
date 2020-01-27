<!-- // https://codegolf.stackexchange.com/questions/198087 --!>

k = s =>
	[...s].map(b => (r = (((m=(p='[{}]')[3-(n=p.indexOf(b))]) ?
			n < 2 ?
				c.push(m) && r :
				(l = a =>
					c[0] ?
						((t=c.pop()) == b) ?
							a :
							l(a+t) :
						m+a)(r) :
			r) + b)) && console.log(`map called on char: ${b}\nr: ${r}\nc: ${c}`),
	r=c=[]) &&
	r+c.join('')

s=>
[...s].map(c=>
o+=(i=(S='[]{}').indexOf(c)^1)&1?(s=S[i]+s, c):i<0?c:(g=_=>
s?(C=s[s=s.slice(1), 0])==c?c:C+g():(p=S[i]+p, c))(), s=o=p='')&&p+o+s

(i=(S='[]{}').indexOf(c)^1)&1
(m=(p='[{}]')[3-(n=p.indexOf(b))])


