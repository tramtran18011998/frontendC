import Document, { Head, Main, NextScript } from 'next/document'
import classes from './app.css';

export default class MyDocument extends Document {
 static async getInitialProps(ctx) {
   const initialProps = await Document.getInitialProps(ctx)
   return { ...initialProps }
 }

 render() {
   return (
     <html>
       <Head>
           <link rel="stylesheet" href="/_next/static/custom.docsPage.css" />
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
   )
 }
}