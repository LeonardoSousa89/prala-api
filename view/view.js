"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = template;
function template(payload) {
    return `
   <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pra Lá Email</title>
        <style>
          body {
            font-family: "Roboto", sans-serif;
            color: #202022;
            background: #fff;
            margin: 0;
            padding: 0;
          }

          .container {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            padding: 10px;
            border: solid 1px rgba(8, 3, 165, 0.1);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 6px;
          }
      
          #companyOrName, #email, #phoneNumber {
            margin-right: 5px;
          }
      
          .card {
            padding: 10px;
            margin: 10px 0;
          }

          .title h1 {
            font-size: 1rem;
            margin: 0;
          }

          .content span {
            display: flex;
            flex-direction: column;
            margin: 1px 0;
            padding: 10px;
          }

          .content span strong {
            margin-bottom: 5px;
            font-weight: 500;
          }

          img {
            width: 400px;
            height: 400px;
          }

          .contact {
            width: 90%;
            padding: 1rem;
          }

          .contact div {
            margin: 10px 0;
          }

          .copy {
            font-size: 0.75rem;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container card">
          
          <div>
            <b>
            <i>informações do cliente</i>
            </b>
          </div>

          <div class="content">
            <span class="card">
              <strong id="companyOrName">${payload.companyOrName}, </strong>
              <strong id="email"> ${payload.email} | </strong>
              <strong id="phoneNumber"> ${payload.phoneNumber}</strong>
            </span>
            <span class="message card">
              <strong id="message"> ${payload.message}</strong>
            </span>
          </div>
          
          <img
            src="https://firebasestorage.googleapis.com/v0/b/template-sites-755c6.appspot.com/o/general%20images%2Flogo%2Flogo-icon.jpeg?alt=media&token=8047ed64-cb2d-4c57-bdc0-cbb5f5a5601f"
            alt="Pra Lá Logo"
          />

          <div class="copy card">
            &copy; 2024 Pra Lá Logística possui todos os seus direitos reservados.
          </div>
        </div>
      </body>
    </html>
  `;
}
