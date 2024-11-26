#!/bin/sh

log_file=/var/www/docker/crontab/last.log

echo "$(date "+%Y-%m-%d %H:%M:%S")" > $log_file
curl "http://127.0.0.1:20000/crontab" >> $log_file
echo "\n" >> $log_file
/usr/local/bin/php /var/www/artisan schedule:run 2>&1 >> $log_file
echo "\n$(date "+%Y-%m-%d %H:%M:%S")" >> $log_file
