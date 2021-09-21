ABSPATH=$(cd "$(dirname "$0")"; pwd)
BASE_DIR="$ABSPATH/../"

pushd "$BASE_DIR" > /dev/null
  node ./scripts/update.js
  rc=$?
popd > /dev/null

exit $rc
