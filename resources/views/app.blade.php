<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        @viteReactRefresh
        @vite(['resources/css/app.css','resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        <!-- As you can see, we will use vite with jsx syntax for React-->
        @inertiaHead
        <title>Propwire Coding Challenge</title>
    </head>
    <body class="bg-gray-100 text-gray-800">
        @inertia
    </body>
</html>
