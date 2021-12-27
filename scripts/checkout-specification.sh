git clone https://github.com/ODOT-PTS/GTFS-ride
rm specification/index.md specification/change-process.md || true
cp GTFS-ride/spec/en/reference.md specification/index.md
cp GTFS-ride/CHANGES.md specification/change-process.md
rm -rf GTFS-ride