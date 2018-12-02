from nose.tools import *
from ex47.game import Room

def test_room():
    gold = Room("GoldRoom","""
        This room
        """)
    assert_equal(gold.name, "GoldRoom")
    assert_equal(gold.paths, {})

def test_room_paths():
    center = Room("Center", "Test center")
    north = Room("North", "Test north")
    south = Room("South", "Test south")

    center.add_paths({'north':north, 'south': south})
    assert_equal(center.go('north'), north)
    assert_equal(center.go('south'), south)

def test_map():
    start = Room("Start", 'You can start')
    west = Room("West", 'You can west')
    down = Room("Down", 'You can down')

    start.add_paths({'west':west, 'down': down})
    west.add_paths({'east':start})
    down.add_paths({'up':start})

    assert_equal(start.go('west'), west)
    assert_equal(start.go('west').go('east'), start)
    assert_equal(start.go('down').go('up'), start)

