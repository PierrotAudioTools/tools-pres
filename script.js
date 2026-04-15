const tools = [
  {
    name: "ADM-OSC Panner",
    category: "OSC",
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
    name: "LTC Reader",
    category: "Timecode",
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

function createToolCard(tool, index) {
  const card = document.createElement("article");
  card.className = "tool-card";
  card.style.animationDelay = `${index * 90}ms`;

  const metaItems = tool.formats
    .map((item) => `<span>${item}</span>`)
    .join("");

  const screenshotHtml = tool.screenshot
    ? `<div class="tool-screenshot">
        <img src="${tool.screenshot}" alt="${tool.screenshotAlt}" loading="lazy" />
      </div>`
    : "";

  card.innerHTML = `
    <div class="tool-topline">
      <span class="tool-tag">${tool.category}</span>
      <span class="tool-status">${tool.status}</span>
    </div>
    <div>
      <h3>${tool.name}</h3>
    </div>
    <p class="tool-description">${tool.description}</p>
    <div class="tool-meta" aria-label="Info">${metaItems}</div>
    ${screenshotHtml}
    <div class="tool-access-row">
      <span class="tool-access">${tool.access}</span>
    </div>
    <div class="tool-links">
      <a class="primary-link" href="${tool.primaryUrl}" target="_blank" rel="noreferrer">${tool.primaryLabel}</a>
      <a class="secondary-link" href="${tool.secondaryUrl}" target="_blank" rel="noreferrer">${tool.secondaryLabel}</a>
    </div>
  `;

  return card;
}

function renderTools() {
  if (!toolsGrid) return;

  const fragment = document.createDocumentFragment();
  tools.forEach((tool, index) => {
    fragment.appendChild(createToolCard(tool, index));
  });
  toolsGrid.appendChild(fragment);
}

renderTools();
