

const NAME = "malvestida",
DOMAIN =  `https://${NAME}.com`,
SITE =  `${DOMAIN}/wp-json`,
API_WP = `${SITE}/wp/v2`,
main =  `${API_WP}/main?_embed`,
POST =  `${API_WP}/main`,
CATEGORIES =  `${API_WP}/categories`,
SEARCH =  `${API_WP}/search?_embed&search=`;

export default {
    NAME, 
    DOMAIN,
    SITE, 
    API_WP,
    main,
    POST,
    CATEGORIES,
    SEARCH
}