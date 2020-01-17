<!-- // https://codegolf.stackexchange.com/questions/198087 --!>

k = (s, c='', r='') =>
	([b,...s]=s, [t,...d]=c, m=(p='[{}]')[3-(n=p.indexOf(b))]) ?
		n<2 ?
			k(s, c+m, r+b) :
			k(s, t==b ? d : c, (t==b ? r : m+r)+b)

k(s,t==b?d:c,t==b?r+b:m+r+b)
k((p=t==b,s),p?d:c,(p?r:m+r)+b)

t==b?r+b:m+r+b
(t==b?r:m+r)+b


m=(p='[]{}')['1032'[n=p.indexOf(b)]]
m=(p='[{}]')[3-(n=p.indexOf(b))]

