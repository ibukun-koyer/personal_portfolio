const resumeBtn = document.querySelector(".resumeDownload");

resumeBtn.addEventListener("click", () => {
  var anchor = document.createElement("a");
  anchor.href = "./october resume - skill, extracurriculum and spacing.pdf";
  anchor.target = "_blank";
  anchor.download = "Ibukun's resume";
  anchor.click();
});
