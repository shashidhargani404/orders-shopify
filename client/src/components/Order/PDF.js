import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

function genaratePDF() {
    const input = document.getElementById('pdfdiv')
    html2canvas(input)
        .then((canvas) => {
            var imgWidth = 170 
            var imgHeight = canvas.height * imgWidth / canvas.width
            const imgData = canvas.toDataURL()
            const pdf = new jsPDF('p', 'mm', 'a4')
            const position = 20
            pdf.addImage(imgData, 'JPEG', 20, position, imgWidth, imgHeight)
            pdf.save('shopify_orders.pdf')
        })
}

export default genaratePDF