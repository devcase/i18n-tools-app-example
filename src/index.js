
// import { loadBundle } from 'i18n-tools'

// loadBundle(['pt-BR', 'en-US'])

const locale = "pt-BR"
if(locale === "pt-BR") {
    import(/* webpackChunkName: 'App-pt-BR' */  'i18n-tools/dist/webpack-i18n-loader?{"locale": "pt-BR"}!./App')
} else if(locale === "en-US") {
    import(/* webpackChunkName: 'App-en-US' */ 'i18n-tools/dist/webpack-i18n-loader?{"locale": "en-US"}!./App')
} else {
    import('./App')
}
