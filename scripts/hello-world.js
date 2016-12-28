angular.module('todoListApp')  // Leave out empty dependency, pulls already existant, defined module
.directive('helloWorld', function() {
	return {
		template: "This is the hello world directive!",
		restrict: "E", // restrict directive to use as Element only! (rather than an attribute as well)
	}
});