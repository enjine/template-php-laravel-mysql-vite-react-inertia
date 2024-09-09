import React from 'react'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import { hydrateRoot } from 'react-dom/client'
import BaseLayout from './Layouts/BaseLayout'
import "./bootstrap";
import 'css/app.css'

const appName = "Laravel"

createInertiaApp({
    title: title => `${title} - ${appName}`,
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
        hydrateRoot(el, <App {...props} />)
    },
    progress: {
        color: '#F87415'
    }
})
