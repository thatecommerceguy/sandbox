document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.querySelector('[data-menu-toggle="open"]');
  const closeButton = document.querySelector('[data-menu-toggle="close"]');
  const offCanvasMenu = document.getElementById("off-canvas");
  const offCanvasBackdrop = document.getElementById("back-drop");
  const tabs = document.querySelectorAll("[data-tab-id]");
  const panels = document.querySelectorAll("[data-panel-id]");

  function openOffCanvasMenu() {
    offCanvasBackdrop.classList.remove("opacity-0");
    offCanvasBackdrop.classList.add("z-40", "opacity-100");
    offCanvasMenu.classList.remove("-translate-x-full");
    offCanvasMenu.classList.add("translate-x-0");
  }

  function closeOffCanvasMenu() {
    offCanvasBackdrop.classList.remove("z-40", "opacity-100");
    offCanvasBackdrop.classList.add("opacity-0");
    offCanvasMenu.classList.remove("translate-x-0");
    offCanvasMenu.classList.add("-translate-x-full");
  }

  openButton.addEventListener("click", openOffCanvasMenu);
  closeButton.addEventListener("click", closeOffCanvasMenu);
  offCanvasBackdrop.addEventListener("click", closeOffCanvasMenu);

  function toggleTabPanel(event) {
    const tabId = event.target.getAttribute("data-tab-id");
    const currentPanel = document.querySelector(`[data-panel-id="${tabId}"]`);
    tabs.forEach((tab) => {
      tab.classList.remove("text-indigo-600", "border-indigo-600");
      tab.classList.add("text-gray-900", "border-transparent");
    });

    event.target.classList.remove("text-gray-900", "border-transparent");
    event.target.classList.add("text-indigo-600", "border-indigo-600");

    panels.forEach((panel) => panel.classList.add("hidden"));
    currentPanel.classList.remove("hidden");
  }

  tabs.forEach((tab) => tab.addEventListener("click", toggleTabPanel));
});
