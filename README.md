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

### create

```js
toast.create('Hello World');
```


### show

```js
toast.create('Hello World').show();
```

or

```js
var message = toast.create('Hello World').show();
message.show();
```


### hide

```js
var message = toast.create('Hello World').show();
message.show();

message.hide();
```

### delay: 0 (optional parameter)

`number`

If you wish to delay the hide animation