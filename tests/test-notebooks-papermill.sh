#!/bin/bash

bash ./launch-test-environment.sh

skiplList=("notebooks/03-query/11-joins.ipynb" #Hangs forever on users data generation, even when run manually, just broken?
"notebooks/03-query/19-groupby-earliest.ipynb" #Queries for session length column which has already been filtered out at ingestion?
"notebooks/99-contributing/notebook-template.ipynb")

ALL_CHANGED_FILES=$(find notebooks -type f -name '*.ipynb' | awk '!/\/\./')
for file in ${ALL_CHANGED_FILES}; do
	echo "$file"
	if [[ ! " ${skiplList[*]} " =~ [[:space:]]${file}[[:space:]] ]]; then
		docker exec jupyter papermill ../$file output.ipynb --log-level ERROR
	else
		echo "Skipped"
	fi
done

docker compose --profile all-services down -v
