
### 思路

切分为一个个小table来同步

### 实现

```bash
#!/usr/bin/env bash

DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=123456
DB_NAME=test

BACK_DB_HOST=127.0.0.1
BACK_DB_USER=root
BACK_DB_PASSWORD=123456
BACK_DB_NAME=ll
TMP_DIR=/mnt/data

mkdir -p ${TMP_DIR}

for table in $(mysql -h${DB_HOST} -u${DB_USER} -p${DB_PASSWORD} "${DB_NAME}" -e "show tables" | grep -v 'Tables_in'); do
  TIME=$(date "+%Y-%m-%d %H:%M:%S")
  echo "${TIME} ${DB_NAME}.${table} dump table"
  TMP_SQL_FILE=${TMP_DIR}/"${table}".sql
  mysqldump -h${DB_HOST} -u${DB_USER} -p${DB_PASSWORD} "${DB_NAME}" "${table}" > "${TMP_SQL_FILE}"
  TIME=$(date "+%Y-%m-%d %H:%M:%S")
  echo "${TIME} ${DB_NAME}.${table} start sync"
  mysql -h${BACK_DB_HOST} -u${BACK_DB_USER} -p${BACK_DB_PASSWORD} "${BACK_DB_NAME}" < "${TMP_SQL_FILE}"
  TIME=$(date "+%Y-%m-%d %H:%M:%S")
  echo "${TIME} ${DB_NAME}.${table} sync success"
  rm -rf "${TMP_SQL_FILE}"
done

echo 'done'
```