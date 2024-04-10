export const WORDPRESS_PUBLIC_API_BASE_URL = `https://public-api.wordpress.com/wp/v2/sites`

// use .env to generate WordPress API base url
export const WORDPRESS_SITE_API = `${WORDPRESS_PUBLIC_API_BASE_URL}/${process.env.REACT_APP_WORDPRESS_URL}`

export const ATTOM_API_BASE_URL = "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property"