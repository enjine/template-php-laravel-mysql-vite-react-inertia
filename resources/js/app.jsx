import React from 'react'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import { hydrateRoot, createRoot } from 'react-dom/client'

import BaseLayout from './Layouts/BaseLayout'
import "./bootstrap";
import 'css/app.css'

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) => {
        return resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx', {eager: true}))
            .then((module) => {
                if (module?.default.layout === undefined) {
                    module.default.layout = BaseLayout;
                }
                return module
            });
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
        // this is for SSR, TODO: make this environment-dependent (ssr in prod only)
        //hydrateRoot(el, <App {...props} />)
    },
})

