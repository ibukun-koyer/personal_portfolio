const resumeBtn = document.querySelector(".resumeDownload");

resumeBtn.addEventListener("click", () => {
  var anchor = document.createElement("a");
  anchor.href = "./afolabi's resume.pdf";
  anchor.target = "_blank";
  anchor.download = "Ibukun's resume";
  anchor.click();
});
