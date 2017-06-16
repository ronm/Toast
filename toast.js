(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
	    "function"!=typeof Object.assign&&(Object.assign=function(n,t){"use strict";if(null==n)throw new TypeError("Cannot convert undefined or null to object");for(var r=Object(n),e=1;e<arguments.length;e++){var o=arguments[e];if(null!=o)for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(r[a]=o[a])}return r});

        root.Toast = factory();
  }
}(this, function () {
	let defaults = {
		containerClass: "toast-container",
		hideOnClick: true,	
		itemClass: "toast",
		ttl: 5000,
	}

	class ToastMessage {
		constructor(message, _parent) {		
			this._parent = _parent;
			this.node = document.createElement("div");
			this.node.className = this._parent.settings.itemClass;
			this.message = this.node.innerHTML = message;
			this.timer = null;
			
			if (this._parent.settings.hideOnClick) {
				this.node.addEventListener("click", () => this.hide());
			}
		}

		show() {
			this._parent.node.appendChild(this.node);
			
			if ( this._parent.settings.ttl > 0 ) { 
				this.timer = setTimeout(() => this.hide(), this._parent.settings.ttl);
			}

			return this;
		}

		hide(delay = 0) {
			setTimeout(() => {
				this.node.addEventListener("animationend", event => { 
					if ( event.animationName === "hideToast") {
						this.node.parentNode.removeChild(this.node);
					}
				});
				this.node.classList.add("hide");
				this.timer = this.timer && clearTimeout(this.timer);
			}, delay);
		}
	}

	return class Toast {
		constructor(opts) {
			this.settings = Object.assign({}, defaults, opts);
			this.node = document.createElement("aside");
			this.node.className = this.settings.containerClass;
			document.body.appendChild(this.node);
		}
		
		create(message) {
			return new ToastMessage(message, this);
		}
	}
}));