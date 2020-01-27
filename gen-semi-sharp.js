<!-- // https://codegolf.stackexchange.com/questions/122139 --!>

g = ([c, ...s]) => c && ';'.repeat(Buffer(c)[0])+'#'+g(s)

f = s => [...s].map(c => ';'.repeat(Buffer(c)[0])+'#')
