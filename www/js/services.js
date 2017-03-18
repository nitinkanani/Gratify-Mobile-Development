angular.module('starter.services', [])
.factory('ws', function($http) {
	return {
		serviceCall: function(serviceURL) {
			return $http({	
				url: serviceURL,				
				dataType: "jsonp"
			});
		}
	}
});