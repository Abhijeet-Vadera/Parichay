import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export const downloadAsPDF = async () => {
  const element = document.getElementById('biodata-preview');
  const canvas = await html2canvas(element, {
    scale: 5,
    useCORS: true,
    logging: false,
    allowTaint: true
  });
  const imgData = canvas.toDataURL('image/png');

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const imgWidth = canvas.width;
  const imgHeight = canvas.height;
  const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

  const imgX = (pdfWidth - imgWidth * ratio) / 2;
  const imgY = 0;

  pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
  pdf.save('marriage-biodata.pdf');
};

export const downloadAsImage = async () => {
  const element = document.getElementById('biodata-preview');
  const canvas = await html2canvas(element, {
    scale: 5,
    useCORS: true,
    logging: false,
    allowTaint: true
  });
  const link = document.createElement('a');
  link.download = 'marriage-biodata.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
};