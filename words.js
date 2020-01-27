
let {corncob} = require('./corncob');
let f = (l, d) =>
	d.filter(w => ![...w].reduce((a, x, i) => a || !l.includes(x), false))

let jsWords = (_=>[]+_+-_+-~[]/[]+[[]+{}]+![]+!![])()
let jsLetters = [...jsWords.toLowerCase()]

let wtf = (w, _) =>
	[...w].map(l => (d = n => n ? '-~[]'.repeat(n) : '+[]',
		[
			[-_, '+[][[]]'],
			[_, '[][[]]'],
			[1/0, '-~[]/[]'],
			[{}, '[]+{}'],

		]
		~(i=`${[-_]}`.indexOf(l)) ?
			`[+[][[]]+[]][+[]][${d(i)}]` :
		~(i=`${_}`.indexOf(l)) ?
			`[[][[]]+[]][+[]][${d(i)}]` :
		~(i=`${1/0}`.indexOf(l)) ?
			`[-~[]/[]+[]][+[]][${d(i)}]` :
		~(i=`${{}}`.indexOf(l)) ?
			`[[]+{}][+[]][${d(i)}]` :
		~(i=`${!0}`.indexOf(l)) ?
			`[!![]+[]][+[]][${d(i)}]` :
		~(i=`${!1}`.indexOf(l)) ?
			`[![]+[]][+[]][${d(i)}]` :
		`'${l}'`)).join('+')

let uniq = l =>
		[...l].reduce((a, s) => a.concat(!a.includes(s) ? [s] : []), []).join('')

let test = _ => [
	'u',
	'a',
	't',
	'o',
	'l',
	'r',
	'defined',
	'aurora borealis',
	'code tennis',
	'js bad',
	'obfuscate'
].map(w => console.log(`f('${w}') -> ${wtf(w)}\n`))


