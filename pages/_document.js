import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

    const description = "";
    const keywords = "";
    return (
        <Html lang='en'>
            <Head>
                <meta name='keywords' content={keywords} />
                <meta name='description' content={description} />
                <link rel='icon' href='/logo.png' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
Document.defaultProps = {};