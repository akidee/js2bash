var jb = require('../'),
	a = require('assert')

a.strictEqual(
	jb.toBash({
		'VAR1': true,
		'VAR2': 5,
		'VAR3': "Joey's Pizza",
		'VAR4': 1.2345
	}, 'PRE'),
	"PREVAR1=1\n\
PREVAR2=5\n\
PREVAR3=$'Joey\\'s Pizza'\n\
PREVAR4=1.2345"
)

console.log('Passed')