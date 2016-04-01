function Counter() {
	return {
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ some.count }}</div>',
			'</div>'
		].join(''),
		controller: function () {
			this.count = 0;
		},
		controllerAs: 'some',
		link: function(scope, element, attrs, ctrl) {
			element.on('click', function(){
				ctrl.count++;

				scope.$apply();
			});

			element.on('$destroy', function(){
				element.off();
			});
		}
	};
}

angular
	.module('app')
	.directive('counter', Counter);