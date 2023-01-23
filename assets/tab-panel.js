class TabPanelElement extends HTMLElement {
  constructor() {
    super();
    this.tabButtons = this.querySelectorAll("[data-tab-id]");
    this.panels = this.querySelectorAll("[data-panel-id]");
    this.tabButtons.forEach((tabBtn) => {
      tabBtn.addEventListener("click", this.onTabClick.bind(this));
    });
  }

  onTabClick(event) {
    const selectedTab = event.currentTarget;
    this.tabButtons.forEach((tabBtn) => {
      tabBtn.classList.remove("text-indigo-600", "border-indigo-600");
      tabBtn.classList.add("text-gray-900", "border-transparent");
    });
    selectedTab.classList.remove("text-gray-900", "border-transparent");
    selectedTab.classList.add("text-indigo-600", "border-indigo-600");
    const tabId = selectedTab.getAttribute("data-tab-id");
    this.panels.forEach((panel) => {
      if (panel.getAttribute("data-panel-id") === tabId) {
        panel.classList.remove("hidden");
      } else {
        panel.classList.add("hidden");
      }
    });
  }
}

customElements.define("tab-panel", TabPanelElement);
