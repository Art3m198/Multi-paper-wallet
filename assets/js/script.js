function refreshdiv() {
	$('#addr-container').load(document.URL +  ' #addr-container');
	$("#addr-container").show();
}

function printDiv() {    
  var printContents = document.getElementById('addr-container').innerHTML;
  var originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
  document.body.innerHTML = originalContents;
  }
  
function gen() {
  $("#qrcodeAddress").html("");
  $("#qrcodePrivate").html("");
  $("#pwd-container").show();
  $("#addr-container").show();
  $("#donate").show();
  var coins = document.getElementById("coins");
  var selection = coins.options[coins.selectedIndex].value;
  
  
if (selection == "Bitcoin") {
newbtc();
var namecoin="Bitcoin";
$("#namecoin").html(namecoin);
$("#icon").html('<img src="assets/image/btc.ico" width="60">');
function getConfig() {
	var networkConfigs = {
		'BTC': {
			'uri': 'BTC:',
			'title': 'Bitcoin Wallet',
			'name': 'Bitcoin',
			'ticker': 'BTC',
			'network': {
				'messagePrefix': '\x18BTC Signed Message:\n',
				'bip32': {
					'public': 0x0488b21e,
					'private': 0x0488ade4
				},
				'bech32': 'bc',
				'pubKeyHash': 0x00,
				'scriptHash': 0x05,
				'wif': 0x80
			}
		}
	}
	network=Object.keys(networkConfigs)[0]
	return networkConfigs[network]
}
function newbtc(){
	var keys = bitcoin.ECPair.makeRandom({'network': getConfig()['network']})
	var address = getAddress(keys)

	if (address != undefined) {
		var publicaddress = document.getElementById("public").innerHTML = address;
		var privateaddress = document.getElementById("private").innerHTML = keys.toWIF();
		var qrcodeAddress=new QRCode(document.getElementById("qrcodeAddress"),{width: 132, height: 132, text:publicaddress});
		var qrcodePrivate=new QRCode(document.getElementById("qrcodePrivate"),{width: 132, height: 132, text:privateaddress});
	}
}

function getAddress(keys) {
	var network = getConfig()['network']
	var address = undefined

	
	if (getAddressType() == 'bech32') {
		address = bitcoin.payments.p2wpkh({
			'pubkey': keys.publicKey,
			'network': network
		}).address
	} else if (getAddressType() == 'legacy') {
		address = bitcoin.payments.p2pkh({
			'pubkey': keys.publicKey,
			'network': getConfig()['network']
		}).address
	}

	return address
}

function getAddressType() {
	var type = 'legacy'
	return type
}
}
else if (selection == "Litecoin"){
newltc();
var namecoin="Litecoin";
$("#namecoin").html(namecoin);
$("#icon").html('<img src="assets/image/ltc.ico" width="60">');
function getConfig() {
	var networkConfigs = {
		'LTC': {
			'uri': 'LTC:',
			'title': 'Litecoin Wallet',
			'name': 'Litecoin',
			'ticker': 'LTC',
			'network': {
				'messagePrefix': '\x19Litecoin Signed Message:\n',
				'bip32': {
					'public': 0x0488b21e,
					'private': 0x0488ade4
				},
				'bech32': 'ltc',
				'pubKeyHash': 0x30,
				'scriptHash': 0x32,
				'wif': 0xb0
			}
		}
	}
	network=Object.keys(networkConfigs)[0]
	return networkConfigs[network]
}
function newltc(){
	var keys = bitcoin.ECPair.makeRandom({'network': getConfig()['network']})
	var address = getAddress(keys)

	if (address != undefined) {
		var publicaddress = document.getElementById("public").innerHTML = address;
		var privateaddress = document.getElementById("private").innerHTML = keys.toWIF();
		var qrcodeAddress=new QRCode(document.getElementById("qrcodeAddress"),{width: 132, height: 132, text:publicaddress});
		var qrcodePrivate=new QRCode(document.getElementById("qrcodePrivate"),{width: 132, height: 132, text:privateaddress});
	}
}

function getAddress(keys) {
	var network = getConfig()['network']
	var address = undefined

	
	if (getAddressType() == 'bech32') {
		address = bitcoin.payments.p2wpkh({
			'pubkey': keys.publicKey,
			'network': network
		}).address
	} else if (getAddressType() == 'legacy') {
		address = bitcoin.payments.p2pkh({
			'pubkey': keys.publicKey,
			'network': getConfig()['network']
		}).address
	}

	return address
}

function getAddressType() {
	var type = 'legacy'
	return type
}
}

else if (selection == "Dogecoin"){
newdoge();
var namecoin="Dogecoin";
$("#namecoin").html(namecoin);
$("#icon").html('<img src="assets/image/doge.png" width="60">');
function getConfig() {
	var networkConfigs = {
		'Doge': {
			'uri': 'Doge:',
			'title': 'Dogecoin Wallet',
			'name': 'Dogecoin',
			'ticker': 'Doge',
			'network': {
				'messagePrefix': '\x19Dogecoin Signed Message:\n',
				'bip32': {
					'public': 0x0488b21e,
					'private': 0x0488ade4
				},
				'pubKeyHash': 0x1e,
				'scriptHash': 0x16,
				'wif': 0x9E
			}
		}
	}
	network=Object.keys(networkConfigs)[0]
	return networkConfigs[network]
}
function newdoge(){
	var keys = bitcoin.ECPair.makeRandom({'network': getConfig()['network']})
	var address = getAddress(keys)

	if (address != undefined) {
		var publicaddress = document.getElementById("public").innerHTML = address;
		var privateaddress = document.getElementById("private").innerHTML = keys.toWIF();
		var qrcodeAddress=new QRCode(document.getElementById("qrcodeAddress"),{width: 132, height: 132, text:publicaddress});
		var qrcodePrivate=new QRCode(document.getElementById("qrcodePrivate"),{width: 132, height: 132, text:privateaddress});
	}
}

function getAddress(keys) {
	var network = getConfig()['network']
	var address = undefined

	
	if (getAddressType() == 'bech32') {
		address = bitcoin.payments.p2wpkh({
			'pubkey': keys.publicKey,
			'network': network
		}).address
	} else if (getAddressType() == 'legacy') {
		address = bitcoin.payments.p2pkh({
			'pubkey': keys.publicKey,
			'network': getConfig()['network']
		}).address
	}

	return address
}

function getAddressType() {
	var type = 'legacy'
	return type
}
}
else if (selection == "Raptoreum"){
newrtm();
var namecoin="Raptoreum";
$("#namecoin").html(namecoin);
$("#icon").html('<img src="assets/image/rtm.png" width="60">');
function getConfig() {
	var networkConfigs = {
		'RAPTOREUM': {
			'uri': 'RTM:',
			'title': 'Raptoreum Wallet',
			'name': 'RTM',
			'ticker': 'RTM',
			'network': {
				'messagePrefix': '\x19RTM Signed Message:\n',
				'bip32': {
					'public': 0x0488b21e,
					'private': 0x0488ade4
				},
				'pubKeyHash': 0x3c,
				'scriptHash': 0x10,
				'wif': 0x80
			}
		}
	}
	network=Object.keys(networkConfigs)[0]
	return networkConfigs[network]
}
function newrtm(){
	var keys = bitcoin.ECPair.makeRandom({'network': getConfig()['network']})
	var address = getAddress(keys)

	if (address != undefined) {
		var publicaddress = document.getElementById("public").innerHTML = address;
		var privateaddress = document.getElementById("private").innerHTML = keys.toWIF();
		var qrcodeAddress=new QRCode(document.getElementById("qrcodeAddress"),{width: 132, height: 132, text:publicaddress});
		var qrcodePrivate=new QRCode(document.getElementById("qrcodePrivate"),{width: 132, height: 132, text:privateaddress});
	}
}

function getAddress(keys) {
	var network = getConfig()['network']
	var address = undefined

	
	if (getAddressType() == 'bech32') {
		address = bitcoin.payments.p2wpkh({
			'pubkey': keys.publicKey,
			'network': network
		}).address
	} else if (getAddressType() == 'legacy') {
		address = bitcoin.payments.p2pkh({
			'pubkey': keys.publicKey,
			'network': getConfig()['network']
		}).address
	}

	return address
}

function getAddressType() {
	var type = 'legacy'
	return type
}
}
else if (selection == "Dash"){
newdash();
var namecoin="Dash";
$("#namecoin").html(namecoin);
$("#icon").html('<img src="assets/image/dash.ico" width="60">');
function getConfig() {
	var networkConfigs = {
		'Dash': {
			'uri': 'Dash:',
			'title': 'Dash Wallet',
			'name': 'Dash',
			'ticker': 'Dash',
			'network': {
				'messagePrefix': '\x19Dash Signed Message:\n',
				'bip32': {
					'public': 0x0488b21e,
					'private': 0x0488ade4
				},
				'pubKeyHash': 0x4c,
				'scriptHash': 0x10,
				'wif': 0xcc
			}
		}
	}
	network=Object.keys(networkConfigs)[0]
	return networkConfigs[network]
}
function newdash(){
	var keys = bitcoin.ECPair.makeRandom({'network': getConfig()['network']})
	var address = getAddress(keys)

	if (address != undefined) {
		var publicaddress = document.getElementById("public").innerHTML = address;
		var privateaddress = document.getElementById("private").innerHTML = keys.toWIF();
		var qrcodeAddress=new QRCode(document.getElementById("qrcodeAddress"),{width: 132, height: 132, text:publicaddress});
		var qrcodePrivate=new QRCode(document.getElementById("qrcodePrivate"),{width: 132, height: 132, text:privateaddress});
	}
}

function getAddress(keys) {
	var network = getConfig()['network']
	var address = undefined

	
	if (getAddressType() == 'bech32') {
		address = bitcoin.payments.p2wpkh({
			'pubkey': keys.publicKey,
			'network': network
		}).address
	} else if (getAddressType() == 'legacy') {
		address = bitcoin.payments.p2pkh({
			'pubkey': keys.publicKey,
			'network': getConfig()['network']
		}).address
	}

	return address
}

function getAddressType() {
	var type = 'legacy'
	return type
}
}

}


  
  
  
