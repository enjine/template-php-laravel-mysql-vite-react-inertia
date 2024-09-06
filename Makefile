laravel_start:
	php artisan serve --host=0.0.0.0 --port=8000

laravel_db_migrate:
	php artisan migrate

mysql_start:
	docker compose up -d

mysql_stop:
	docker compose down

vite_start:
	npm run dev

inertia_start:
	php artisan inertia:start-ssr

test_php:
	php artisan test

test_js:
	npm run test

mysql_client:
	mysql -D example_app
