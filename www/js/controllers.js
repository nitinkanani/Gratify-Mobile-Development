angular.module('starter.controllers', [])

.controller('landCtrl', function($scope,ws,$cordovaInAppBrowser) {
	var options = {
      location: 'yes',
      clearcache: 'yes',
      toolbar: 'no'
    };
	
	var FEED = ' https://api.rss2json.com/v1/api.json?rss_url=' + encodeURIComponent('http://rss.nytimes.com/services/xml/rss/nyt/World.xml');
	ws.serviceCall(FEED).then(function(response){
		$scope.feeds = response.data.items;
	});
	
	$scope.openInExternalBrowser = function(url){
	 $cordovaInAppBrowser.open(url, '_system', options)
      .then(function(event) {
        // success
      })
      .catch(function(event) {
        // error
      }); 
	};
 
	$scope.openInAppBrowser = function(url){
	 // Open in app browser
	 window.open(url,'_blank'); 
	};
 
});
