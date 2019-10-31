class AnchorContainer {
  constructor(id) {
    this.name = 'AnchorContainer';

    this.id = id;
    this.element = document.getElementById(id);

    this.topAnchor = new Anchor(this.element, 'top');
    this.rightAnchor = new Anchor(this.element, 'right');
    this.bottomAnchor = new Anchor(this.element, 'bottom');
    this.leftAnchor = new Anchor(this.element, 'left');
  }
}
