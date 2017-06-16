Toast
=========

Easy Toast messages

Usage
------

```js
import Toast from './toast'
```

or

```html
<script type="text/javascript" src="toast.js"></script>
```

then

```js
var toast = new Toast();

document.querySelector("#show-toast").addEventListener("click", function() {
	toast.create('Hello World ' + window.performance.now()).show();
});	


var anotherToast = new Toast(),
	message = anotherToast.create('Hello World ' + window.performance.now());
	
document.querySelector("#show-toast").addEventListener("click", function() {
	anotherToast.show();
});

```


Methods
-------

#### create

```js
toast.create('Hello World');
```


#### show

```js
toast.create('Hello World').show();
```

or

```js
var message = toast.create('Hello World').show();
message.show();
```


#### hide

```js
var message = toast.create('Hello World').show();
message.show();

message.hide();
```


Options
-------

Options are set when initializing the Toast object.


#### containerClass: "toast-container" (optional parameter)

`string`


```js
var toast = new Toast({containerClass: "toast-wrapper"});
```


#### hideOnClick: true (optional parameter)

`boolean`


```js
var toast = new Toast({hideOnClick: false});
```


#### itemClass: "toast" (optional parameter)

`string`


```js
var toast = new Toast({itemClass: "message"});
```


#### ttl: 5000 (optional parameter)

`number`


```js
var toast = new Toast({ttl: 10000});
```