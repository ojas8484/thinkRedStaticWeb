
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ojas@thinkred.tech',
        pass: 'mlza cgki uaad slyz'
    }
});
  
  app.post('/send-email', async (req, res) => {
    try {
        const result = await transporter.sendMail({
            from: 'ojas@thinkred.tech',
            to: 'ojas@thinkred.tech',
            subject: 'Test run for node mailer ',
            text:'Hey,' + 'ojas' +' We have recieved mail.',
        });
  
      res.json({ message: 'Email sent successfully', result });
    } catch (error) {
      res.status(500).json({ message: 'Failed to send email', error });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
// export async function get(){
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'ojas@thinkred.tech',
//             pass: 'mlza cgki uaad slyz'
//         }
//     });
//     try {
//         // const data = await Astro.request.formData();
//         // const emailAddress = data.get("email");
//         // const clientName = data.get("name");
//         // console.log(JSON.stringify(emailAddress,null,4));
//         // console.log(JSON.stringify(clientName,null,4));
    
//         const result = await transporter.sendMail({
//             from: 'ojas@thinkred.tech',
//             to: 'ojas@thinkred.tech',
//             subject: 'Test run for node mailer ',
//             text:'Hey,' + 'ojas' +' We have recieved mail.',
//         });
    
//         // console.log(JSON.stringify(result, null, 4));
//         return new Response (JSON.stringify({message: result}),{
//             status :200 ,
//             headers : {"content-type" : "application/json"},
//         });
//       } catch (error) {
//         return new Response (JSON.stringify({message: error}),{
//             status :200 ,
//             headers : {"content-type" : "application/json"},
//         });
//       }
// }