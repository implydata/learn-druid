#!/bin/bash
#
# This script run notebook execution tests.
# Usage:
#   test_notebooks.sh <notebook_path>
#   Parameters:
#     <notebook_path> (optional): path to notebook(s) to test
#
# The script will:
#  - use docker-compose-local.yaml config to build jupyter-img and bring up the full stack,
#  - Wait for services to report status
#  - Run all notebooks found recursively within the specified <notebook path>,
#    if no path is specified, it will use the current path and any notebooks in any subfolders
#



retry() {
  local action="$1" # action to run
  local retries="${2:-10}" # max retries
  local sleep_seconds="${3:-2}" # wait between tries

  exit_code=999

  while [[ "$exit_code" -ne "0" && "$retries" -gt 0 ]]; do
    #run action and consume output, no need to show it
    echo " trying...[${action[@]}]"
    output=`${action[@]}`
    local exit_code=$?
    echo "  output: [${output}]"
    echo "  exit code:${exit_code}"
    retries=$(($retries - 1))
    if [[ $exit_code -ne 0 ]]; then
      sleep $sleep_seconds
    fi
  done
}




docker compose --profile all-services up -d
docker exec -it jupyter pip install nbmake

if [ $# -ge 1 ];
    then TEST_PATH=$1
else
     TEST_PATH=../notebooks/
fi

# check that druid is running
echo "Waiting for Druid readiness..."
retry 'curl http://localhost:8081/status' 50 2
retry 'curl http://localhost:8082/status' 50 2
retry 'curl http://localhost:8083/status' 50 2
retry 'curl http://localhost:8091/status' 50 2
retry 'curl http://localhost:8888/status' 50 2
#echo "Waiting for Data Generator readiness..."
retry 'curl http://localhost:9999/jobs' 50 2

docker exec -it jupyter pytest --nbmake $TEST_PATH --nbmake-timeout=1200
# run it a second time to test re-runnability of the notebooks
docker exec -it jupyter pytest --nbmake $TEST_PATH --nbmake-timeout=1200
docker compose --profile all-services down -v
