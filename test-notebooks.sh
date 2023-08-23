#!/bin/bash



retry() {
  local action="$1" # action to run
  local retries="${2:-10}" # max retries
  local sleep_seconds="${3:-2}" # wait between tries

  exit_code=999
 
  while [[ $exit_code -ne 0 && $retries -gt 0 ]]; do
    #run action and consume output, no need to show it
    output=$action
    local exit_code=$?
    retries=$(($retries - 1)) 
    if [[ $exit_code -ne 0 ]]; then
      sleep $sleep_seconds
    fi
  done
}




docker compose -f docker-compose-local.yaml --profile all-services up -d --build
docker exec -it jupyter pip install nbmake

if [ $# -ge 1 ];
    then TEST_PATH=$1
else
     TEST_PATH=./
fi 

# check that druid is running
echo "Waiting for Druid readiness..."
retry 'curl http://localhost:8888/status' 50 2
retry 'curl http://localhost:8081/status' 50 2
retry 'curl http://localhost:8082/status' 50 2
retry 'curl http://localhost:8083/status' 50 2
retry 'curl http://localhost:8091/status' 50 2
echo "Waiting for Data Generator readiness..."
retry 'curl http://localhost:9999/jobs' 50 2

docker exec -it jupyter pytest --nbmake $TEST_PATH
# run it a second time to test re-runnability of the notebooks
docker exec -it jupyter pytest --nbmake $TEST_PATH
docker compose -f docker-compose-local.yaml --profile all-services down -v
