
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, date, message } = await request.json()
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "powrsofficial@gmail.com",
        pass: "mrnb eptw copm wuce", // Replace with your Gmail app password
      },
    })

    const mailOption = {
      from: "powrsofficial@gmail.com",
      to: `contact@chanakyatse.com, ${email}`,
      subject: "New Contact Form Submission",
      html: `
      <!DOCTYPE html>
<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
 <meta charset="UTF-8" />
 <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
 <!--[if !mso]><!-- -->
 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
 <!--<![endif]-->
 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
 <meta name="format-detection" content="telephone=no" />
 <meta name="format-detection" content="date=no" />
 <meta name="format-detection" content="address=no" />
 <meta name="format-detection" content="email=no" />
 <meta name="x-apple-disable-message-reformatting" />
 <link href="https://fonts.googleapis.com/css?family=Public+Sans:ital,wght@0,400;0,400;0,600" rel="stylesheet" />
 <title>Cognitive</title>
 <!-- Made with Postcards Email Builder by Designmodo -->
 <style>
 html,
         body {
             margin: 0 !important;
             padding: 0 !important;
             min-height: 100% !important;
             width: 100% !important;
             -webkit-font-smoothing: antialiased;
         }
 
         * {
             -ms-text-size-adjust: 100%;
         }
 
         #outlook a {
             padding: 0;
         }
 
         .ReadMsgBody,
         .ExternalClass {
             width: 100%;
         }
 
         .ExternalClass,
         .ExternalClass p,
         .ExternalClass td,
         .ExternalClass div,
         .ExternalClass span,
         .ExternalClass font {
             line-height: 100%;
         }
 
         table,
         td,
         th {
             mso-table-lspace: 0 !important;
             mso-table-rspace: 0 !important;
             border-collapse: collapse;
         }
 
         u + .body table, u + .body td, u + .body th {
             will-change: transform;
         }
 
         body, td, th, p, div, li, a, span {
             -webkit-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             mso-line-height-rule: exactly;
         }
 
         img {
             border: 0;
             outline: 0;
             line-height: 100%;
             text-decoration: none;
             -ms-interpolation-mode: bicubic;
         }
 
         a[x-apple-data-detectors] {
             color: inherit !important;
             text-decoration: none !important;
         }
                 
         .body .pc-project-body {
             background-color: transparent !important;
         }
 
         @media (min-width: 621px) {
             .pc-lg-hide {
                 display: none;
             } 
 
             .pc-lg-bg-img-hide {
                 background-image: none !important;
             }
         }
 </style>
 <style>
 @media (max-width: 620px) {
 .pc-project-body {min-width: 0px !important;}
 .pc-project-container {width: 100% !important;}
 .pc-sm-hide, .pc-w620-gridCollapsed-1 > tbody > tr > .pc-sm-hide {display: none !important;}
 .pc-sm-bg-img-hide {background-image: none !important;}
 .pc-w620-padding-0-0-0-0 {padding: 0px 0px 0px 0px !important;}
 table.pc-w620-spacing-0-0-32-0 {margin: 0px 0px 32px 0px !important;}
 td.pc-w620-spacing-0-0-32-0,th.pc-w620-spacing-0-0-32-0{margin: 0 !important;padding: 0px 0px 32px 0px !important;}
 .pc-w620-width-367 {width: 367px !important;}
 
 img.pc-w620-width-367-min {min-width: 367px !important;}
 .pc-w620-height-81 {height: 81px !important;}
 .pc-w620-radius-10-10-10-10 {border-radius: 10px 10px 10px 10px !important;}
 .pc-w620-padding-20-16-32-16 {padding: 20px 16px 32px 16px !important;}
 .pc-w620-text-align-center {text-align: center !important;text-align-last: center !important;}
 .pc-w620-font-size-17px {font-size: 17px !important;}
 .pc-w620-padding-20-16-0-16 {padding: 20px 16px 0px 16px !important;}
 table.pc-w620-spacing-0-0-0-0 {margin: 0px 0px 0px 0px !important;}
 td.pc-w620-spacing-0-0-0-0,th.pc-w620-spacing-0-0-0-0{margin: 0 !important;padding: 0px 0px 0px 0px !important;}
 .pc-w620-itemsSpacings-0-20 {padding-left: 0px !important;padding-right: 0px !important;padding-top: 10px !important;padding-bottom: 10px !important;}
 .pc-w620-valign-top {vertical-align: top !important;}
 td.pc-w620-halign-center,th.pc-w620-halign-center {text-align: center !important;}
 table.pc-w620-halign-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-halign-center {margin-right: auto !important;margin-left: auto !important;}
 
 .pc-w620-width-hug {width: auto !important;}
 div.pc-w620-align-center,th.pc-w620-align-center,a.pc-w620-align-center,td.pc-w620-align-center {text-align: center !important;text-align-last: center !important;}
 table.pc-w620-align-center {float: none !important;margin-right: auto !important;margin-left: auto !important;}
 img.pc-w620-align-center {margin-right: auto !important;margin-left: auto !important;}
 table.pc-w620-spacing-0-0-22-0 {margin: 0px 0px 22px 0px !important;}
 td.pc-w620-spacing-0-0-22-0,th.pc-w620-spacing-0-0-22-0{margin: 0 !important;padding: 0px 0px 22px 0px !important;}
 table.pc-w620-spacing-20-0-20-0 {margin: 20px 0px 20px 0px !important;}
 td.pc-w620-spacing-20-0-20-0,th.pc-w620-spacing-20-0-20-0{margin: 0 !important;padding: 20px 0px 20px 0px !important;}
 .pc-w620-padding-20-20-20-20 {padding: 20px 20px 20px 20px !important;}
 
 .pc-w620-gridCollapsed-1 > tbody,.pc-w620-gridCollapsed-1 > tbody > tr,.pc-w620-gridCollapsed-1 > tr {display: inline-block !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > tr > td,.pc-w620-gridCollapsed-1 > tr > td {display: block !important;width: auto !important;padding-left: 0 !important;padding-right: 0 !important;margin-left: 0 !important;}
 .pc-w620-gridCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-gridCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-first > .pc-grid-td-first,pc-w620-gridCollapsed-1 > .pc-grid-tr-first > .pc-grid-td-first {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-1 > tbody > .pc-grid-tr-last > .pc-grid-td-last,pc-w620-gridCollapsed-1 > .pc-grid-tr-last > .pc-grid-td-last {padding-bottom: 0 !important;}
 
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-first > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-first > td {padding-top: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > .pc-grid-tr-last > td,.pc-w620-gridCollapsed-0 > .pc-grid-tr-last > td {padding-bottom: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-first,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-first {padding-left: 0 !important;}
 .pc-w620-gridCollapsed-0 > tbody > tr > .pc-grid-td-last,.pc-w620-gridCollapsed-0 > tr > .pc-grid-td-last {padding-right: 0 !important;}
 
 .pc-w620-tableCollapsed-1 > tbody,.pc-w620-tableCollapsed-1 > tbody > tr,.pc-w620-tableCollapsed-1 > tr {display: block !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr {width: 100% !important;}
 .pc-w620-tableCollapsed-1 > tbody > tr > td,.pc-w620-tableCollapsed-1 > tr > td {display: block !important;width: auto !important;}
 .pc-w620-tableCollapsed-1.pc-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 .pc-w620-tableCollapsed-1.pc-w620-width-fill > tbody > tr > td,.pc-w620-tableCollapsed-1.pc-w620-width-fill > tr > td {width: 100% !important;box-sizing: border-box !important;}
 }
 </style>
 <!--[if !mso]><!-- -->
 <style>
 @font-face { font-family: 'Public Sans'; font-style: normal; font-weight: 400; src: url('https://fonts.gstatic.com/s/publicsans/v18/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuFpmJygcu.woff') format('woff'), url('https://fonts.gstatic.com/s/publicsans/v18/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuFpmJygco.woff2') format('woff2'); } @font-face { font-family: 'Public Sans'; font-style: normal; font-weight: 600; src: url('https://fonts.gstatic.com/s/publicsans/v18/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuyJ6Jygcu.woff') format('woff'), url('https://fonts.gstatic.com/s/publicsans/v18/ijwGs572Xtc6ZYQws9YVwllKVG8qX1oyOymuyJ6Jygco.woff2') format('woff2'); }
 </style>
 <!--<![endif]-->
 <!--[if mso]>
    <style type="text/css">
        .pc-font-alt {
            font-family: Arial, Helvetica, sans-serif !important;
        }
    </style>
    <![endif]-->
 <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
</head>

<body class="body pc-font-alt" style="width: 100% !important; min-height: 100% !important; margin: 0 !important; padding: 0 !important; line-height: 1.5; color: #2D3A41; mso-line-height-rule: exactly; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; font-variant-ligatures: normal; text-rendering: optimizeLegibility; -moz-osx-font-smoothing: grayscale; background-color: #5581e0;" bgcolor="#5581e0">
 <table class="pc-project-body" style="table-layout: fixed; min-width: 600px; background-color: #5581e0;" bgcolor="#5581e0" width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
  <tr>
   <td align="center" valign="top">
    <table class="pc-project-container" align="center" width="600" style="width: 600px; max-width: 600px;" border="0" cellpadding="0" cellspacing="0" role="presentation">
     <tr>
      <td class="pc-w620-padding-0-0-0-0" style="padding: 20px 0px 20px 0px;" align="left" valign="top">
       <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width: 100%;">
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Header -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <!--[if !gte mso 9]><!-- -->
               <td valign="top" class="pc-w620-padding-20-16-0-16" style="background-image: url('https://cloudfilesdm.com/postcards/image-17379223060763.png'); background-size: cover; background-position: center; background-repeat: no-repeat; padding: 40px 18px 0px 20px; height: unset; background-color: #ffffff;" bgcolor="#ffffff" background="https://cloudfilesdm.com/postcards/image-17379223060763.png">
                <!--<![endif]-->
                <!--[if gte mso 9]>
                <td valign="top" align="center" style="background-image: url('https://cloudfilesdm.com/postcards/image-17379223060763.png'); background-size: cover; background-position: center; background-repeat: no-repeat; background-color: #ffffff;" bgcolor="#ffffff" background="https://cloudfilesdm.com/postcards/image-17379223060763.png">
            <![endif]-->
                <!--[if gte mso 9]>
                <v:rect xmlns:v="urn:schemas-microsoft-com:vml" fill="true" stroke="false" style="width: 600px;">
                    <v:fill src="https://cloudfilesdm.com/postcards/image-17379223060763.png" color="#ffffff" type="frame" size="1,1" aspect="atleast" origin="0,0" position="0,0"/>
                    <v:textbox style="mso-fit-shape-to-text: true;" inset="0,0,0,0">
                        <div style="font-size: 0; line-height: 0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                                <tr>
                                    <td style="font-size: 14px; line-height: 1.5;" valign="top">
                                        <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                            <tr>
                                                <td colspan="3" height="40" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td width="18" valign="top" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                                <td valign="top" align="left">
                <![endif]-->
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-32-0" align="center" valign="top" style="padding: 0px 0px 40px 0px;">
                   <a class="pc-font-alt" href="https://postcards.email/" target="_blank" style="text-decoration: none;">
                    <img src="https://cloudfilesdm.com/postcards/image-1737922738332.jpeg" class="pc-w620-radius-10-10-10-10 pc-w620-width-367 pc-w620-height-81" width="203" height="114" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 203px; height: 114px; border-radius: 10px 10px 10px 10px; border: 0;" />
                   </a>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td align="left" valign="top" style="padding: 0px 0px 8px 0px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="left" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="left">
                      <div class="pc-font-alt" style="text-decoration: none;">
                       <div style="font-size: 44px;line-height: 54px;text-align:center;text-align-last:center;color:#ffffff;letter-spacing:0px;font-weight:600;font-style:normal;font-variant-ligatures:normal;">
                        <div><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 44px; line-height: 54px; text-decoration: none; text-transform: none;"> Your Appointment</span>
                        </div>
                        <div><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 44px; line-height: 54px; text-decoration: none; text-transform: none;">has been scheduled on ${formattedDate}</span>
                        </div>
                        <div style="line-height:54px;font-size:44px;">
                         <br>
                        </div>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-0" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last" align="center" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table style="border-collapse: separate; border-spacing: 0;" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td align="left" valign="top">
                         <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td align="left" valign="top">
                               <img src="https://cloudfilesdm.com/postcards/image-17379223052561.png" width="562" height="auto" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 100%; height: auto; border: 0;" />
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td>
                   <table class="pc-width-fill pc-w620-gridCollapsed-0" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last" align="center" valign="top" style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-padding-20-16-32-16" align="center" valign="middle" style="padding: 0px 40px 56px 40px; mso-padding-left-alt: 0; margin-left:40px; background-color: #ffffff;">
                         <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td align="center" valign="top">
                            <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td valign="top">
                               <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="left" style="border-collapse: separate; border-spacing: 0;">
                                <tr>
                                 <td valign="top" align="left">
                                  <div class="pc-font-alt" style="text-decoration: none;">
                                   <div style="font-size: 17px;line-height: 30px;text-align:left;text-align-last:left;color:#1a1c21;letter-spacing:0px;font-weight:400;font-style:normal;font-variant-ligatures:normal;">
                                    <div style="margin-bottom:10px;" class="pc-w620-text-align-center"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px; text-decoration: none; text-transform: none;" class="pc-w620-font-size-17px">Hi ${name} 👋,</span>
                                    </div>
                                    <div style="margin-bottom:10px;"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px; text-decoration: none; text-transform: none;">Thank you for scheduling a consultation with us. We are committed to providing you with a focused, high-value session that addresses your unique concerns in depth.</span>
                                    </div>
                                    <div style="margin-bottom:10px;line-height:30px;font-size:20px;">
                                     <br>
                                    </div>
                                    </div>
                                    <div style="margin-bottom:10px;"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px; text-decoration: none; text-transform: none;">Name :
                                    ${name}</span>
                                    </div>
                                    <div style="margin-bottom:10px;"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px; text-decoration: none; text-transform: none;">Email : ${email}</span>
                                    </div>
                                    <div style="margin-bottom:10px;"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px; text-decoration: none; text-transform: none;">Phone Number : ${phone}</span>
                                    </div>
                                    <div style="margin-bottom:10px;"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px; text-decoration: none; text-transform: none;">Subject :  ${subject} </span>
                                    </div>
                                    <div style="margin-bottom:10px;"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px; text-decoration: none; text-transform: none;">Preferred Date : ${formattedDate} </span>
                                    </div>
                                    <div style="margin-bottom:0px;"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 20px; line-height: 30px; text-decoration: none; text-transform: none;">Message  : ${message} </span>
                                    </div>
                                   </div>
                                  </div>
                                 </td>
                                </tr>
                               </table>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <!--[if gte mso 9]>
                                                </td>
                                                <td width="20" style="line-height: 1px; font-size: 1px;" valign="top">&nbsp;</td>
                                            </tr>
                                            <tr>
                                                <td colspan="3" height="0" style="line-height: 1px; font-size: 1px;">&nbsp;</td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <p style="margin:0;mso-hide:all"><o:p xmlns:o="urn:schemas-microsoft-com:office:office">&nbsp;</o:p></p>
                    </v:textbox>
                </v:rect>
                <![endif]-->
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Header -->
         </td>
        </tr>
        <tr>
         <td valign="top">
          <!-- BEGIN MODULE: Footer -->
          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
           <tr>
            <td class="pc-w620-spacing-0-0-0-0" style="padding: 0px 0px 0px 0px;">
             <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
              <tr>
               <td valign="top" class="pc-w620-padding-20-20-20-20" style="padding: 40px 40px 40px 40px; height: unset; border-radius: 0px; background-color: #f0f2f8;" bgcolor="#f0f2f8">
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-valign-top pc-w620-halign-center" align="center">
                   <table class="pc-width-fill pc-w620-gridCollapsed-1 pc-w620-width-hug pc-w620-halign-center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr class="pc-grid-tr-first pc-grid-tr-last">
                     <td class="pc-grid-td-first pc-grid-td-last pc-w620-itemsSpacings-0-20" align="left" valign="middle" style="width: 50%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;">
                      <table class="pc-w620-halign-center" style="border-collapse: separate; border-spacing: 0; width: 100%;" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                       <tr>
                        <td class="pc-w620-halign-center pc-w620-valign-top" align="left" valign="middle">
                         <table class="pc-w620-halign-center" align="left" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                          <tr>
                           <td class="pc-w620-halign-center" align="left" valign="top">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                             <tr>
                              <td class="pc-w620-spacing-0-0-22-0 pc-w620-halign-center" align="center" valign="top" style="padding: 0px 0px 45px 0px;">
                               <a class="pc-font-alt" href="https://postcards.email/" target="_blank" style="text-decoration: none;">
                                <img src="https://cloudfilesdm.com/postcards/image-1737923119454.jpeg" class="pc-w620-align-center" width="146" height="81" alt="" style="display: block; outline: 0; line-height: 100%; -ms-interpolation-mode: bicubic; width: 146px; height: auto; max-width: 100%; border: 0;" />
                               </a>
                              </td>
                             </tr>
                            </table>
                           </td>
                          </tr>
                         </table>
                        </td>
                       </tr>
                      </table>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width: 100%;">
                 <tr>
                  <td class="pc-w620-spacing-20-0-20-0" valign="top" style="padding: 32px 0px 32px 0px;">
                   <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                     <!--[if gte mso 9]>
                    <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e9e9e9;">&nbsp;</td>
                <![endif]-->
                     <!--[if !gte mso 9]><!-- -->
                     <td height="1" valign="top" style="line-height: 1px; font-size: 1px; border-bottom: 1px solid #e9e9e9;">&nbsp;</td>
                     <!--<![endif]-->
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
                <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
                 <tr>
                  <td class="pc-w620-spacing-0-0-0-0" align="left" valign="top" style="padding: 0px 60px 0px 60px;">
                   <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%" align="left" style="border-collapse: separate; border-spacing: 0; margin-right: auto; margin-left: auto;">
                    <tr>
                     <td valign="top" align="left">
                      <div class="pc-font-alt" style="text-decoration: none;">
                       <div style="font-size: 12px;line-height: 20px;text-align:center;text-align-last:center;color:#1a1c21;font-style:normal;font-weight:600;letter-spacing:0px;font-variant-ligatures:normal;">
                        <div><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 20px; text-decoration: underline; text-transform: none;">Should you have any questions regarding the consultation or fee structure, please do not hesitate to reach out at</span><a href="mailto:contact@chanakyatse.com?subject=Inquiry&amp;body=Hello, I have a question about..." target="_blank" rel="noreferrer" style="text-decoration:none;color:inherit;color: rgb(26, 28, 33);"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 20px; text-decoration: underline; text-transform: none;"> email</span></a><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 20px; text-decoration: underline; text-transform: none;"> on contact@chanakyatse.com and </span><a href="tel:+971544778569" target="_blank" rel="noreferrer" style="text-decoration:none;color:inherit;color: rgb(26, 28, 33);"><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 20px; text-decoration: underline; text-transform: none;">call </span></a><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 20px; text-decoration: underline; text-transform: none;">us on </span>
                        </div>
                        <div><span style="font-family: 'Public Sans', Arial, Helvetica, sans-serif; font-size: 12px; line-height: 20px; text-decoration: underline; text-transform: none;">+971 54 477 8569</span>
                        </div>
                       </div>
                      </div>
                     </td>
                    </tr>
                   </table>
                  </td>
                 </tr>
                </table>
               </td>
              </tr>
             </table>
            </td>
           </tr>
          </table>
          <!-- END MODULE: Footer -->
         </td>
        </tr>
        <tr>
         <td>
          <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
           <tr>
          
           </tr>
          </table>
         </td>
        </tr>
       </table>
      </td>
     </tr>
    </table>
   </td>
  </tr>
 </table>
</body>

</html>

      `,
    }

    await transporter.sendMail(mailOption)

    return new Response(JSON.stringify({ message: "Email Sent Successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        Location: "/success",
      },
    })
  } catch (error) {
    console.error("Error sending email:", error)
    return new Response(JSON.stringify({ message: "Failed to Send Email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}

