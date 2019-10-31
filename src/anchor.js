class Anchor {
  constructor(container, alignment) {
    const svgNS = 'http://www.w3.org/2000/svg';

    this.name = 'Anchor';

    // set member vars
    this.container = container;
    this.alignment = alignment;
    this.dimensions = {
      width: this.container.clientWidth,
      height: this.container.clientHeight,
    };

    // set initial position
    switch (this.alignment) {
      case 'top':
        this.dimensions.initialX = this.dimensions.width / 2;
        this.dimensions.initialY = 0;
        break;

      case 'right':
        this.dimensions.initialX = this.dimensions.width;
        this.dimensions.initialY = this.dimensions.height / 2;
        break;

      case 'bottom':
        this.dimensions.initialX = this.dimensions.width / 2;
        this.dimensions.initialY = this.dimensions.height;
        break;

      case 'left':
        this.dimensions.initialX = 0;
        this.dimensions.initialY = this.dimensions.height / 2;
        break;
    }

    // create svg
    this.svg = document.createElementNS(svgNS, 'svg');
    this.svg.classList.add('anchor');

    // test rect
    let rect = document.createElementNS(svgNS, 'rect');

    rect.setAttributeNS(null, 'x', this.dimensions.initialX);
    rect.setAttributeNS(null, 'y', this.dimensions.initialY);

    rect.setAttributeNS(null, 'height', '4');
    rect.setAttributeNS(null, 'width', '4');
    rect.setAttributeNS(null, 'fill', '#ff0000');

    this.svg.appendChild(rect);

    this.container.appendChild(this.svg);
  }
}
