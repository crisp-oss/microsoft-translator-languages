ABSPATH=$(cd "$(dirname "$0")"; pwd)
BASE_DIR="$ABSPATH/../"

pushd "$BASE_DIR" > /dev/null
  VER=`node -p "require('./package.json').version"`

  git config --local user.email "action@github.com"
  git config --local user.name "GitHub Action"
  git commit -a -m "Auto Release v${VER}"
  git tag "v${VER}" HEAD

  rc=$?
popd > /dev/null

exit $rc
