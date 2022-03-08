import React from 'react'
import Helmet from 'react-helmet'

function SEO({ title, desc, url, author, siteName }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="author" content={author} />
            <meta name="description" content={desc} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={desc} />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content={siteName} />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
    )
}

export default SEO