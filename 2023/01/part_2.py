# --- Part Two ---

# Your calculation isn't quite right. It looks like some of the digits are actually spelled out with letters: one, two, three, four, five, six, seven, eight, and nine also count as valid "digits".

# Equipped with this new information, you now need to find the real first and last digit on each line. For example:

# two1nine
# eightwothree
# abcone2threexyz
# xtwone3four
# 4nineeightseven2
# zoneight234
# 7pqrstsixteen

# In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

# What is the sum of all of the calibration values?


import re


spelled_numbers = {
    "one": "1",
    "two": "2",
    "three": "3",
    "four": "4",
    "five": "5",
    "six": "6",
    "seven": "7",
    "eight": "8",
    "nine": "9",
}


def merge_number(string: str):
    matched_numbers = re.findall(
        r"(?=(\d|one|two|three|four|five|six|seven|eight|nine))", string
    )

    digits = list(
        map(
            lambda n: spelled_numbers[n] if n in spelled_numbers else n, matched_numbers
        )
    )

    return int(f"{digits[0]}{digits[-1]}") if digits else 0


data_file = open("input.txt", "r")
data = [merge_number(line.strip()) for line in data_file.readlines()]
data_file.close()

result = sum(calibration_values)

print(result)
