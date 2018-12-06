class AppNative extends HTMLElement {
  constructor() {

    super();

    // Create a shadow root
	var shadow = this.attachShadow({mode: 'open'});

    var info = document.createElement('span');
	info.setAttribute('class','info');

	var text = this.getAttribute('text');
	info.textContent = text;

	var style = document.createElement('style');

	style.textContent = '.info {' +
		'color: red;' +
		'font-size: 35px' +
	'}'

	shadow.appendChild(style);
	shadow.appendChild(info);

  }
}

customElements.define('app-native', AppNative);