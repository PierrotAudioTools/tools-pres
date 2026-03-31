const tools = [
  {
    name: "Session Prep",
    category: "Pré-production",
    status: "Disponible",
    description:
      "Prépare rapidement une session audio: renommage de fichiers, rangement de stems, normalisation de structures et vérifications avant livraison.",
    formats: ["macOS", "Utility App", "Version 1.2"],
    primaryLabel: "Télécharger",
    primaryUrl: "https://github.com/PierrotAudioTools/tools-pres/releases",
    secondaryLabel: "Voir la release",
    secondaryUrl: "https://github.com/PierrotAudioTools/tools-pres/releases",
    note: "Pensé pour gagner du temps avant mix, mastering ou livraison client."
  },
  {
    name: "Loudness Snap",
    category: "Analyse",
    status: "Disponible",
    description:
      "Analyse rapidement des fichiers ou exports pour obtenir une lecture claire de niveau, cohérence et état global avant publication ou review.",
    formats: ["Cross-platform", "CLI", "Open Source"],
    primaryLabel: "Télécharger",
    primaryUrl: "https://github.com/PierrotAudioTools/tools-pres/releases",
    secondaryLabel: "Documentation",
    secondaryUrl: "https://github.com/PierrotAudioTools/tools-pres",
    note: "Utile pour vérifier vite un render, un stem pack ou un export final."
  },
  {
    name: "Stem Packager",
    category: "Delivery",
    status: "Disponible",
    description:
      "Assemble des stems, bounces et éléments de projet dans une structure propre, prête à archiver, partager ou envoyer à un collaborateur.",
    formats: ["Windows", "macOS", "ZIP"],
    primaryLabel: "Télécharger",
    primaryUrl: "https://github.com/PierrotAudioTools/tools-pres/releases",
    secondaryLabel: "Release notes",
    secondaryUrl: "https://github.com/PierrotAudioTools/tools-pres/releases",
    note: "Conçu pour les workflows de collaboration, de review et de livraison propre."
  }
];

const toolsGrid = document.getElementById("tools-grid");
const toolCount = document.getElementById("tool-count");

function createToolCard(tool) {
  const card = document.createElement("article");
  card.className = "tool-card";

  const metaItems = tool.formats
    .map((item) => `<span>${item}</span>`)
    .join("");

  card.innerHTML = `
    <div class="tool-topline">
      <span class="tool-tag">${tool.category}</span>
      <span class="tool-status">${tool.status}</span>
    </div>
    <div>
      <h3>${tool.name}</h3>
    </div>
    <p class="tool-description">${tool.description}</p>
    <div class="tool-meta" aria-label="Formats et disponibilité">${metaItems}</div>
    <div class="tool-links">
      <a class="primary-link" href="${tool.primaryUrl}" target="_blank" rel="noreferrer">${tool.primaryLabel}</a>
      <a class="secondary-link" href="${tool.secondaryUrl}" target="_blank" rel="noreferrer">${tool.secondaryLabel}</a>
    </div>
    <p class="tool-note">${tool.note}</p>
  `;

  return card;
}

function renderTools() {
  if (!toolsGrid) {
    return;
  }

  const fragment = document.createDocumentFragment();

  tools.forEach((tool) => {
    fragment.appendChild(createToolCard(tool));
  });

  toolsGrid.appendChild(fragment);

  if (toolCount) {
    toolCount.textContent = String(tools.length).padStart(2, "0");
  }
}

renderTools();
