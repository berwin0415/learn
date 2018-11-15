from sys import argv

script, filename = argv

print(f"We're going to erase {filename}")
print("If you don't want that, hit CTRL-C (^C).")
print("If you do want that, hit RETURN")

input("?")

print("Opening the file...")
target = open(filename, "w")

print("Truncating the file. Goodbye!")
target.truncate()

print("Now i'm going tp ask you for three lines.")

line1 = input("Line 1: ")
line2 = input("Line 2: ")
line3 = input("Line 3: ")

print("I'm going to write these to the file.")

# target.write("line1")
# target.write("\n")
# target.write(line2)
# target.write("\n")
# target.write(line3)
# target.write("\n")

target.write(f"{line1}\n{line2}\n{line3}")


print("And finalluy, we close it.")
target.close()