function defer(){
   var deferred = {};
   var promise = new Promise(function(resolve, reject){
       deferred.reject = reject;
       deferred.resolve = resolve;
   });
   deferred.promise = promise;
   return deferred;
}

var pgm = (function(){
	function addSync(x,y){
		console.log('     [Service Provider] processing ', x , ' and ', y);
		var result = x + y;
		console.log('     [Service Provider] returning result');
		return result;
	}

	function addSyncClient(x,y){
		console.log('[Service Consumer] triggering addSync');
		var result = addSync(x,y);
		console.log('[Service Consumer] result = ', result);
	}

	function addAsyncCallback(x,y, onResult){
		console.log('     [Service Provider] processing ', x , ' and ', y);
		setTimeout(function(){
			var result = x + y;
			console.log('     [Service Provider] returning result');
			if (typeof onResult === 'function')
				onResult(result);
		}, 5000);
	}
	function addAsyncCallbackClient(x,y){
		console.log('[Service Consumer] triggering addAsyncCallback');
		addAsyncCallback(x,y, function(result){
			console.log('[Service Consumer] result = ', result);	
		});
	}

	var addAsyncEvents = (function(){
		var _subscriptions = [];
		
		function addAsyncEvents(x,y){
			console.log('     [Service Provider] processing ', x , ' and ', y);
			setTimeout(function(){
				var result = x + y;
				console.log('     [Service Provider] returning result');
				_subscriptions.forEach(function(subscriptionFn){
					subscriptionFn(result);
				})
			}, 5000);
		}
		addAsyncEvents.subscribe = function (subscriptionFn){
			_subscriptions.push(subscriptionFn);
		};
		return addAsyncEvents;
	})();

	function addAsyncPromise(x,y){
		console.log('     [Service Provider] processing ', x , ' and ', y);
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log('     [Service Provider] returning result');
				resolveFn(result);
			}, 5000);
		});
		return promise;
	}

	function addAsyncDeferred(x,y){
		console.log('     [Service Provider] processing ', x , ' and ', y);
		var deferred = defer();
		setTimeout(function(){
			var result = x + y;
			console.log('     [Service Provider] returning result');
			deferred.resolve(result);
		}, 5000);
		return deferred.promise;
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncCallbackClient : addAsyncCallbackClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise,
		addAsyncDeferred : addAsyncDeferred
	};
})();