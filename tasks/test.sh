ABSPATH=$(cd "$(dirname "$0")"; pwd)
BASE_DIR="$ABSPATH/../"

pushd "$BASE_DIR" > /dev/null
  nodeunit --reporter=minimal ./test/index.js
  rc=$?
popd > /dev/null

exit $rc
