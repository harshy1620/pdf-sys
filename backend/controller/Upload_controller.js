const Pdf = require("../model/pdf");
// const pdfParse = require('pdf-parse');
const fs = require('fs');


module.exports.Upload = function (req, res) {
  res.send("hello");
};

// Creating a PDF in the database
module.exports.createPdf = async (req, res) => {
  try {
    const pdf = new Pdf({ pdf: req.body.pdf });
    await pdf.save();

    const pdfId = pdf._id;
    const pdfData = await Pdf.findById(pdfId);
    console.log(pdfData);

    // if (!pdfData) {
    //   return res.status(404).json({ message: 'PDF not found' });
    // } else{
    //   const pdfBuffer = Buffer.from(pdfData.pdf, 'base64');
    //   try{
    //   const data = await pdfParse(pdfBuffer);
    //   console.log(data,'data');
    //   const text = data.text;
    //   console.log(text,'textdata');
    //   }catch(parseError) { 
    //     console.error('Error parsing the PDF:', parseError);
    //     return res.status(500).json({ message: 'Error parsing the PDF' });
    //   }
    // }


    return res.status(200).json({ message: 'Saved' });
  } catch (err) {
    return res.status(400).json({ message: 'Error', error: err.message });
  }
};
