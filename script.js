const tools = [
  {
    group: "ADM-OSC",
    name: "ADM-OSC Panner",
    access: "Direct download",
    status: "Available",
    description:
      "VST/AU plugin for macOS Apple Silicon. Receive, transmit and record ADM-OSC messages from any compatible DAW. Designed for immersive audio workflows.",
    formats: ["macOS ARM", "VST3", "AU", "OSC"],
    screenshot: "./assets/ADM-OSC_Panner/ADM-OSC Panner_fullview.png",
    screenshotAlt: "ADM-OSC Panner plugin screenshot",
    primaryLabel: "Download",
    primaryUrl: "https://github.com/PierrotAudioTools/ADM-OSC-Panner/releases",
    secondaryLabel: "GitHub",
    secondaryUrl: "https://github.com/PierrotAudioTools/ADM-OSC-Panner"
  },
  {
    group: "Timecode",
    name: "LTC Reader",
    access: "Direct download",
    status: "Available",
    description:
      "VST/AU plugin for macOS Apple Silicon. Receive and decode LTC (Linear Timecode) from any audio input, with frame rate selection.",
    formats: ["macOS ARM", "VST3", "AU", "LTC"],
    screenshot: "./assets/LTC-Reader/LTC-Reader-working.png",
    screenshotAlt: "LTC Reader plugin screenshot",
    primaryLabel: "Download",
    primaryUrl: "https://github.com/PierrotAudioTools/LTC-Reader/releases",
    secondaryLabel: "GitHub",
    secondaryUrl: "https://github.com/PierrotAudioTools/LTC-Reader"
  }
];

const toolsGrid = document.getElementById("tools-grid");

function createCategoryHeader(label) {
  const header = document.createElement("div");
  header.className = "category-header";
  header.textContent = label;
  return header;
}

function createToolCard(tool, index) {
  const card = document.createElement("article");
  card.className = "tool-card";
  card.style.animationDelay = `${index * 90}ms`;

  const metaItems = tool.formats.map((item) => `<span>${item}</span>`).join("");

  const previewHtml = tool.screenshot
    ? `<div class="tool-preview">
        <img src="${tool.screenshot}" alt="${tool.screenshotAlt}" loading="lazy" />
      </div>`
    : "";

  card.innerHTML = `
    <div class="tool-info">
      <h3>${tool.name}</h3>
      <p class="tool-description">${tool.description}</p>
      <div class="tool-meta" aria-label="Info">${metaItems}</div>
      <div class="tool-links">
        <a class="primary-link" href="${tool.primaryUrl}" target="_blank" rel="noreferrer">${tool.primaryLabel}</a>
        <a class="secondary-link" href="${tool.secondaryUrl}" target="_blank" rel="noreferrer">${tool.secondaryLabel}</a>
      </div>
    </div>
    ${previewHtml}
  `;

  return card;
}

function renderTools() {
  if (!toolsGrid) return;

  const fragment = document.createDocumentFragment();
  let currentGroup = null;
  let cardIndex = 0;

  tools.forEach((tool) => {
    if (tool.group !== currentGroup) {
      currentGroup = tool.group;
      fragment.appendChild(createCategoryHeader(currentGroup));
    }
    fragment.appendChild(createToolCard(tool, cardIndex++));
  });

  toolsGrid.appendChild(fragment);
}

renderTools();
