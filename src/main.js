function toggleContent() {
  const content = document.getElementById("collapsibleContent");
  if (content.style.maxHeight) {
    content.style.maxHeight = null; // Kapat
  } else {
    content.style.maxHeight = content.scrollHeight + "px"; // Aç
  }
}