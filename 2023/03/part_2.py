# --- Part Two ---

# The engineer finds the missing part and installs it in the engine! As the engine springs to life, you jump in the closest gondola, finally ready to ascend to the water source.

# You don't seem to be going very fast, though. Maybe something is still wrong? Fortunately, the gondola has a phone labeled "help", so you pick it up and the engineer answers.

# Before you can explain the situation, she suggests that you look out the window. There stands the engineer, holding a phone in one hand and waving with the other. You're going so slowly that you haven't even left the station. You exit the gondola.

# The missing part wasn't the only issue - one of the gears in the engine is wrong. A gear is any * symbol that is adjacent to exactly two part numbers. Its gear ratio is the result of multiplying those two numbers together.

# This time, you need to find the gear ratio of every gear and add them all up so that the engineer can figure out which gear needs to be replaced.

# Consider the same engine schematic again:

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

# In this schematic, there are two gears. The first is in the top left; it has part numbers 467 and 35, so its gear ratio is 16345. The second gear is in the lower right; its gear ratio is 451490. (The * adjacent to 617 is not a gear because it is only adjacent to one part number.) Adding up all of the gear ratios produces 467835.

# What is the sum of all of the gear ratios in your engine schematic?


import re

gears_ratios = []


def schematic_row(line, y):
    number_matches = re.finditer(r"\d+", line)
    chars = [char for char in line]

    for number_match in number_matches:
        for i in range(number_match.start(), number_match.end()):
            num = {
                "id": f"{y}_{number_match.start()}",
                "value": int(number_match.group()),
            }
            chars[i] = num

    return chars


def gear_ratio(x, y):
    adjacent_parts = []
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
            adjacent_parts.append(schematic[posy][posx])

    adjacent_parts = list(
        {part["id"]: part["value"] for part in adjacent_parts}.values()
    )

    return adjacent_parts[0] * adjacent_parts[1] if len(adjacent_parts) == 2 else 0


with open("input.txt", "r") as data_file:
    schematic = [
        schematic_row(line.strip(), y) for (y, line) in enumerate(data_file.readlines())
    ]

for y, row in enumerate(schematic):
    for x, item in enumerate(row):
        if item == "*":
            gears_ratios.append(gear_ratio(x, y))

print(sum(gears_ratios))
