var pubsub = (function(){

	var subscribers = {};

	/*function broadcast(eventName){
		var _subscriptions = subscribers[eventName] || [];
		var args = Array.prototype.slice.call(arguments, 1);
		_subscriptions.forEach(function(subscriptionFn){
			subscriptionFn.apply(this, args);
		});
		return this;
	}*/
	function broadcast(eventName, ...args){
		var _subscriptions = subscribers[eventName] || [];
		_subscriptions.forEach(subscriptionFn => subscriptionFn(...args));
		return this;
	}
	function subscribe(eventName, fn){
		subscribers[eventName] = subscribers[eventName] || [];
		subscribers[eventName].push(fn);
		return this;
	}
	function unsubscribe(eventName, fn){
		var _subscriptions = subscribers[eventName] || [];
		for(var i=_subscriptions.length-1; i >= 0; i--)
			if (_subscriptions[i] === fn)
				_subscriptions.splice(i,1);
		return this;
	}
	return {
		broadcast : broadcast,
		subscribe : subscribe,
		unsubscribe : unsubscribe
	}
})();

pubsub.broadcast("myEvent", 10, 30, { id :100})

pubsub.subscribe("myEvent", function(n1, n2, obj))