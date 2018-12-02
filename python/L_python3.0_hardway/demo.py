class Room(object):

    def __init__(self, name, description):
        self.name = name
        self.description = description
        self.paths = {}

    def go(self, direction):
        return self.paths.get(direction, None)

    def add_paths(self, paths):
        self.paths.update(paths)

def test_room():
    gold = Room("GoldRoom","""
        This room
        """)

def test_room_paths():
    center = Room("Center", "Test center")
    north = Room("North", "Test north")
    south = Room("South", "Test south")

    center.add_paths({'north':north, 'south': south})

    print(center.paths)
def test_map():
    start = Room("Start", 'You can start')
    west = Room("West", 'You can west')
    down = Room("Down", 'You can down')

    start.add_paths({'west':west, 'down': down})
    west.add_paths({'east':start})
    down.add_paths({'up':start})

    print(start.paths,start.go('west').go('up'))

test_room()
test_room_paths()
test_map()