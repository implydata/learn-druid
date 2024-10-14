#!/bin/bash

bash ./launch-test-environment.sh

skiplList=("notebooks/03-query/11-joins.ipynb"
"notebooks/03-query/07-functions-datetime.ipynb"
"notebooks/03-query/19-groupby-earliest.ipynb"
"notebooks/02-ingestion/12-spatial-dimensions.ipynb"
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
