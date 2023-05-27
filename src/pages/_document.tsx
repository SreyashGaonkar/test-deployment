import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Nexa-Black.otf"
                        as="font"
                        crossOrigin="anonymous"
                    ></link>
                    <link
                        rel="preload"
                        href="/fonts/Nexa-Bold.otf"
                        as="font"
                        crossOrigin="anonymous"
                    ></link>
                    <link
                        rel="preload"
                        href="/fonts/Nexa-Book.otf"
                        as="font"
                        crossOrigin="anonymous"
                    ></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

}

export default MyDocument
