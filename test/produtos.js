var http = require('http');

describe('ProdutoController',function(){
	it('listagem json',function(){
		var configuracoes = {
			hostname: 'localhost',
			port:3000,
			path:'/produtos',
			headers: {
				'Accept':'application/json'
			}
		};

		http.get(configuracoes,function(res){
			if(res.statusCode == 200){
				console.log('Status ta ok');			
			}
			if(res.headers['content-type'] == 'application/json;chartset=utf-8'){
				console.log('Content type ok');
			}	
		});
			

	});
});