import React from 'react'
import {createInertiaApp } from '@inertiajs/inertia-react'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers'
import { hydrateRoot } from 'react-dom/client'
import "./bootstrap";
import 'css/app.css'

createInertiaApp({
    // Below you can see that we are going to get all React components from resources/js/Pages folder
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`,import.meta.glob('./Pages/**/*.jsx', {eager: true})),
    setup({ el, App, props }) {
        hydrateRoot(el, <App {...props} />)
    },
})

