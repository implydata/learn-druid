# Contributing

You may want to update the Jupyter image to access new or updated tutorial notebooks,
include new Python packages, or update configuration files.

To build the custom Jupyter image locally:

1. Clone the Druid repo if you haven't already.
2. Navigate to `examples/quickstart/jupyter-notebooks` in your Druid source repo.
3. Edit the image definition in `Dockerfile`.
4. Navigate to the `docker-jupyter` directory.
5. Generate the new build using the following command:

   ```shell
   DRUID_VERSION=27.0.0 docker compose --profile all-services -f docker-compose-local.yaml up -d --build
   ```

   You can change the value of `DRUID_VERSION` or the profile used from the Docker Compose file.
6. To test all notebooks,
   make sure that docker compose is down and all volumes have been deleted, then start tests with: 
   ```shell
   cd tests
   ./test-notebooks.sh
   ``` 
7. To test single notebook:
   ```shell
   cd tests
   ./test-notebooks.sh ../notebooks/<path to test notebook>
   ```
