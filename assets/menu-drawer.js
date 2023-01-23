class MenuDrawer extends HTMLElement {
  constructor() {
    super();
    this.drawerContent = this.querySelector("drawer-content");
    this.backDrop = this.querySelector("#back-drop");
    this.openBtn = this.querySelector("[data-menu-toggle='open']");
    this.closeBtn = this.querySelector("[data-menu-toggle='close']");
    this.openBtn.addEventListener("click", this.openMenu.bind(this));
    this.closeBtn.addEventListener("click", this.closeMenu.bind(this));
    this.backDrop.addEventListener("click", this.closeMenu.bind(this));
  }

  openMenu() {
    this.drawerContent.classList.remove("-translate-x-full");
    this.drawerContent.classList.add("translate-x-0");
    this.backDrop.classList.remove("opacity-0");
    this.backDrop.classList.add("z-40", "opacity-100");
  }

  closeMenu() {
    this.drawerContent.classList.remove("translate-x-0");
    this.drawerContent.classList.add("-translate-x-full");
    this.backDrop.classList.remove("z-40", "opacity-100");
    this.backDrop.classList.add("opacity-0");
  }
}

customElements.define("menu-drawer", MenuDrawer);
