import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const generatePDF = async (certificateId) => {
  const input = document.getElementById(certificateId);

  if (!input) return;

  const canvas = await html2canvas(input, {
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("landscape", "mm", "a4");

  const width = pdf.internal.pageSize.getWidth();

  const height =
    (canvas.height * width) / canvas.width;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    width,
    height
  );

  pdf.save("Certificate.pdf");
};

export default generatePDF;