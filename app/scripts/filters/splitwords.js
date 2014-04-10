'use strict';

angular.module('angularAppApp')
	.filter('splitWords', function() {
		return function(input, splitChar) {
			// do some bounds checking here to ensure it has that index
			var splittedArray = [];
			if (input) {
				splittedArray = input.split(splitChar);
			}
			console.log('splitWords filter called with ' + input + ' returning ' + splittedArray);
			return splittedArray;
		};
	});