import { URL, fileURLToPath } from 'url'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import extractorPug from '@unocss/extractor-pug'
import { extractorSplit } from '@unocss/core'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      extractors: [
        extractorPug(),
        extractorSplit,
      ],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
        'vitest',
      ],
      dts: true,
      resolvers: [ElementPlusResolver()],
    }),
    // https://github.com/antfu/vite-plugin-components
    Components({
      // custom resolvers
      resolvers: [
        ElementPlusResolver(),
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          componentPrefix: 'i',
          // enabledCollections: ['carbon']
        }),
      ],
      dts: true,
    }),

    // https://github.com/antfu/unplugin-icons
    Icons({
      autoInstall: true,
      scale: 1.2,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
