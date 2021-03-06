
//function checkForKey() {
//	$.get('/account').done(function(data, textStatus, jqXHR) { 
//		var apiKey = findKey();
//		window.webkit.messageHandlers.notification.postMessage(apiKey)
//	});
//}

$.get('/account').done(function(data, textStatus, jqXHR) {
      var apiKey = findKeyInData(data);
      window.webkit.messageHandlers.notification.postMessage(apiKey)
});

function findKeyInData(data)  {
	var apiKey = $(data).find('#api-button').parent().find('input').attr('value');
	if (apiKey == 'ca358d49c7acc5bc1a19dfd899c25fa6') {
		apiKey = 'no';
	}
	return apiKey;
}

function findKey()  {
  var apiKey = $('#api-button').parent().find('input').attr('value');
  if (apiKey == 'ca358d49c7acc5bc1a19dfd899c25fa6') {
    apiKey = 'no';
  }
  return apiKey;
}

function openSettings() {
	window.location.href = '/account';
}

function generateNewKey() {
	setTimeout(function() {
		$('#api-button').click();
	}, 1000);
}