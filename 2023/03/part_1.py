# --- Day 3: Gear Ratios ---

# You and the Elf eventually reach a gondola lift station; he says the gondola lift will take you up to the water source, but this is as far as he can bring you. You go inside.

# It doesn't take long to find the gondolas, but there seems to be a problem: they're not moving.

# "Aaah!"

# You turn around to see a slightly-greasy Elf with a wrench and a look of surprise. "Sorry, I wasn't expecting anyone! The gondola lift isn't working right now; it'll still be a while before I can fix it." You offer to help.

# The engineer explains that an engine part seems to be missing from the engine, but nobody can figure out which one. If you can add up all the part numbers in the engine schematic, it should be easy to work out which part is missing.

# The engine schematic (your puzzle input) consists of a visual representation of the engine. There are lots of numbers and symbols you don't really understand, but apparently any number adjacent to a symbol, even diagonally, is a "part number" and should be included in your sum. (Periods (.) do not count as a symbol.)

# Here is an example engine schematic:

# 467..114..
# ...*......
# ..35..633.
# ......#...
# 617*......
# .....+.58.
# ..592.....
# ......755.
# ...$.*....
# .664.598..

# In this schematic, two numbers are not part numbers because they are not adjacent to a symbol: 114 (top right) and 58 (middle right). Every other number is adjacent to a symbol and so is a part number; their sum is 4361.

# Of course, the actual engine schematic is much larger. What is the sum of all of the part numbers in the engine schematic?


import re


engine_parts = []


def schematic_row(line, y):
    number_matches = re.finditer(r"\d+", line)
    positions = [char for char in line]

    for number_match in number_matches:
        for i in range(number_match.start(), number_match.end()):
            num = {
                "id": f"{y}_{number_match.start()}",
                "value": int(number_match.group()),
            }
            positions[i] = num

    return positions


def find_adjacent_numbers(x, y):
    for posx in range(x - 1, x + 2):
        for posy in range(y - 1, y + 2):
            if (
                posy < 0
                or posx < 0
                or posy >= len(schematic)
                or posx >= len(schematic[posy])
                or isinstance(schematic[posy][posx], str)
            ):
                continue
            engine_parts.append(schematic[posy][posx])


with open("input.txt", "r") as data_file:
    schematic = [
        schematic_row(line.strip(), y) for (y, line) in enumerate(data_file.readlines())
    ]

for y, row in enumerate(schematic):
    for x, item in enumerate(row):
        if isinstance(item, str) and item != ".":
            find_adjacent_numbers(x, y)


engine_parts = list({part["id"]: part["value"] for part in engine_parts}.values())

print(sum(engine_parts))
