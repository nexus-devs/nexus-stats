#!/bin/sh
DRONE_BRANCH='rc/2.1.0-0'
last_commit="$(git log --format=%B -n 1 HEAD)"
release_pattern="release: "
version_pattern="rc/"
version="$(echo ${DRONE_BRANCH//$version_pattern/} | cut -f1 -d "-")"
echo $version

if [[ $last_commit =~ $release_pattern ]]; then
  echo "* Found release commit, pushing ${version} to staging.."
  git add -A
  git commit -m "ci: Add production builds."
  git checkout production
  git reset --hard $DRONE_BRANCH
  git merge -m "ci: Merge ${DRONE_BRANCH} with production." -s ours origin/production
  git tag $version production
  git push 'https://nexus-ci:'$NEXUS_CI_TOKEN'@github.com/nexus-devs/NexusHub' production --tags 2>/dev/null
  echo '* Pushed to staging! Good luck out there brother.'
else
  echo '* No release commit found, not pushing to production.'
fi
