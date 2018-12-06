class AppNative extends HTMLElement {
  constructor() {

    super();

    // Create a shadow root
	var shadow = this.attachShadow({mode: 'open'});
	//content
    var info = document.createElement('span');
	info.setAttribute('class','info');
	info.textContent = this.getAttribute('text');
	//Style
	var style = document.createElement('style');
	style.textContent = '.info {' +
		'color: red;' +
		'font-size: 35px' +
	'}'

	// append
	shadow.appendChild(style);
	shadow.appendChild(info);

  }
}

customElements.define('app-native', AppNative);