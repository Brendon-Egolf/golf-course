
wtf = (w, _) =>
	[...w].map(l => (d = n => n ? '-~[]'.repeat(n) : '+[]',
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
		'')).join('+')

// (m=[-_]+_+1/0+{}+!0+!1)
