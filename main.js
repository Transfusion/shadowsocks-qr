window.onload = function(){
	qrcode = new QRCode("qrcode");
	generatecode = document.getElementById("generatecode");
	generatecode.addEventListener('click', function(event) {
		generateqr();
	});
}

var generateqr = function(){
    var configvalue = document.getElementById("config").value;
    configvalue = configvalue.replace(/(\r\n|\n|\r)/gm,"");
    var parse = JSON.parse(configvalue);
    //console.log("ss://"+parse.method+":"+parse.password+"@"+parse.server+":"+parse.server_port);
    if(parse.hasOwnProperty('method') && parse.hasOwnProperty('password') && parse.hasOwnProperty('server') && parse.hasOwnProperty('server_port')){
        qrcode.makeCode("ss://"+btoa(parse.method+":"+parse.password+"@"+parse.server+":"+parse.server_port));
    }
}
