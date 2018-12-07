class AppNative extends HTMLElement {
  constructor() {

    super();

    // Create a shadow root
	var shadow = this.attachShadow({mode: 'open'});
	//content
    var info = document.createElement('section');
	info.setAttribute('class','info');
	info.textContent = this.getAttribute('text');

	var text = document.createElement('section');
	text.innerHTML = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,'
	//Style
	var style = document.createElement('style');
	style.textContent = '.info {' +
		'color: red;' +
		'font-size: 35px' +
	'}'

	// append
	shadow.appendChild(style);
	shadow.appendChild(info);
	shadow.appendChild(text);

  }
}

customElements.define('app-native', AppNative);