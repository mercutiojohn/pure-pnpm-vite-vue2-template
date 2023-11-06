import Vue from 'vue'
import VueI18n from 'vue-i18n'
import util from '@/libs/util'

Vue.use(VueI18n)

// function loadLocaleMessages () {
//   const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
//   const messages = {}
//   for (const key of locales.keys()) {
//     const matched = key.match(/([A-Za-z0-9-_]+)\./i)
//     if (matched && matched.length > 1) {
//       const locale = matched[1]
//       const localeElementUI = require(`element-ui/lib/locale/lang/${locales(key)._element}`)
//       messages[locale] = {
//         ...locales(key),
//         ...localeElementUI ? localeElementUI.default : {}
//       }
//     }
//   }
//   return messages
// }

async function loadLocaleMessages() {
  const messages = {};
  const localeFiles = import.meta.globEager('./locales/*.json');

  for (const path in localeFiles) {
    const matched = path.match(/\/locales\/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      const localeMessages = localeFiles[path].default;

      // Importing Element UI locale data asynchronously
      let localeElementUI;
      try {
        localeElementUI = (await import(/* @vite-ignore */`element-ui/lib/locale/lang/${localeMessages._element}`)).default;
      } catch (e) {
        console.error(`Failed to load Element UI locale for ${locale}`, e);
      }

      messages[locale] = {
        ...localeMessages,
        ...localeElementUI
      };
    }
  }
  return messages;
}

const messages = loadLocaleMessages()

Vue.prototype.$languages = Object.keys(messages).map(langlage => ({
  label: messages[langlage]._name,
  value: langlage
}))

const i18n = new VueI18n({
  locale: util.cookies.get('lang') || process.env.VUE_APP_I18N_LOCALE,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE,
  messages
})

export default i18n
