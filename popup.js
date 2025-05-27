function parseFile() {
  const file = document.getElementById("fileInput").files[0];
  if (!file) {
    alert("Please select a file.");
    return;
  }
  const reader = new FileReader();
  reader.onload = (e) => {
    const workbook = XLSX.read(e.target.result, { type: "binary" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = XLSX.utils.sheet_to_json(sheet);
    localStorage.setItem("whatsblitz_data", JSON.stringify(data));
    document.getElementById("dataPreview").textContent = JSON.stringify(
      data,
      null,
      2
    );
  };
  reader.readAsBinaryString(file);
}
