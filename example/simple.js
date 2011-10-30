var prefix = 'PROJECT_',
	config = {
		CONFIG1: true,
		LANG: 'en_US',
		CONNECTIONS: 50
	}
console.log(require('js2bash').toBash(config, prefix))