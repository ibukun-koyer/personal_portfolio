const resumeBtn = document.querySelector(".resumeDownload");

resumeBtn.addEventListener("click", () => {
  var anchor = document.createElement("a");
  anchor.href = "./september resume one line extra curriculum.pdf";
  anchor.target = "_blank";
  anchor.download = "Ibukun's resume";
  anchor.click();
});
