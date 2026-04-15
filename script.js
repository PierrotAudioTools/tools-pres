const tools = [
  {
    name: "ADM-OSC Panner",
    category: "OSC",
    access: "Téléchargement direct",
    status: "Disponible",
    description:
      "Plugin VST/AU pour macOS Apple Silicon. Reçoit, transmet et enregistre des messages OSC depuis n'importe quel DAW compatible. Idéal pour le positionnement audio immersif via le protocole ADM-OSC.",
    formats: ["macOS ARM", "VST3", "AU", "OSC"],
    screenshot: "./assets/ADM-OSC_Panner/ADM-OSC Panner_fullview.png",
    screenshotAlt: "Capture d'écran du plugin ADM-OSC Panner",
    primaryLabel: "Télécharger",
    primaryUrl: "https://github.com/PierrotAudioTools/ADM-OSC-Panner/releases",
    secondaryLabel: "GitHub",
    secondaryUrl: "https://github.com/PierrotAudioTools/ADM-OSC-Panner"
  },
  {
    name: "LTC Reader",
    category: "Timecode",
    access: "Téléchargement direct",
    status: "Disponible",
    description:
      "Plugin VST/AU pour macOS Apple Silicon. Reçoit et décode du timecode au format LTC (Linear Timecode) avec sélection du frame rate. Compatible avec tous les DAW supportant les entrées audio.",
    formats: ["macOS ARM", "VST3", "AU", "LTC"],
    screenshot: "./assets/LTC-Reader/LTC-Reader-working.png",
    screenshotAlt: "Capture d'écran du plugin LTC Reader",
    primaryLabel: "Télécharger",
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
    <div class="tool-meta" aria-label="Informations">${metaItems}</div>
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
