import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import BaseLayout from './Layouts/BaseLayout'

import '../css/app.css'

createServer(page =>
  createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
        resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx', {eager: true}))
            .then((module) => {
                if (module.default.layout === undefined) {
                    module.default.layout = BaseLayout;
                }
            });
        return page;
    },
    setup({ App, props, plugin }) {
        return createSSRApp({
            render: () => h(App, props),
        }).use(plugin)
    },
  }),
)
