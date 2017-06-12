(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Toast = factory();
  }
}(this, function () {
	let defaults = {
		ttl: 5000,
		containerClass: "toast-container",
		itemClass: "toast",
	}
	
	class ToastMessage {
		constructor(message, _parent) {		
			this._parent = _parent;
			this.html = document.createElement("div");
			this.html.className = this._parent.settings.itemClass;
			this.message = this.html.innerHTML = message;
			this.timer = null;
		}
		
		show() {
			this._parent.html.appendChild(this.html);
			this.html.addEventListener("click", () => this.hide());
			
			if ( this._parent.settings.ttl > -1 ) { 
				this.timer = setTimeout(() => this.hide(), this._parent.settings.ttl);
			}
			
			return this;
		}
		
		hide(delay = 0) {
			setTimeout(() => {
				this.html.addEventListener("animationend", event => { 
					if ( event.animationName === "hideToast") {
						this.html.parentNode.removeChild(this.html);
					}
				});
				this.html.classList.add("hide");
				this.timer = this.timer && clearTimeout(this.timer);
			}, delay);
		}
	}
	
	return class Toast {
		constructor(opts) {
			this.settings = Object.assign({}, defaults, opts);
			this.html = document.createElement("aside");
			this.html.className = this.settings.containerClass;
			document.body.appendChild(this.html);
		}
		
		create(message) {
			return new ToastMessage(message, this);
		}
		
	}
}));