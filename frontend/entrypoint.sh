#!/bin/sh

sed -i "s|RAILWAY_BACKEND_URL_PLACEHOLDER|${BACKEND_URL}|g" /usr/share/nginx/html/config.js

exec nginx -g "daemon off;"