# --- Part Two ---

# The Elf says they've stopped producing snow because they aren't getting any water! He isn't sure why the water stopped; however, he can show you how to get to the water source to check it out for yourself. It's just up ahead!

# As you continue your walk, the Elf poses a second question: in each game you played, what is the fewest number of cubes of each color that could have been in the bag to make the game possible?

# Again consider the example games from earlier:

# Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
# Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
# Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
# Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
# Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green

#     In game 1, the game could have been played with as few as 4 red, 2 green, and 6 blue cubes. If any color had even one fewer cube, the game would have been impossible.
#     Game 2 could have been played with a minimum of 1 red, 3 green, and 4 blue cubes.
#     Game 3 must have been played with at least 20 red, 13 green, and 6 blue cubes.
#     Game 4 required at least 14 red, 3 green, and 15 blue cubes.
#     Game 5 needed no fewer than 6 red, 3 green, and 2 blue cubes in the bag.

# The power of a set of cubes is equal to the numbers of red, green, and blue cubes multiplied together. The power of the minimum set of cubes in game 1 is 48. In games 2-5 it was 12, 1560, 630, and 36, respectively. Adding up these five powers produces the sum 2286.

# For each game, find the minimum set of cubes that must have been present. What is the sum of the power of these sets?


import re


class Game:
    MAX_RED = 12
    MAX_GREEN = 13
    MAX_BLUE = 14

    def __init__(self, id, draws):
        self.id = id
        self.draws = draws

    def __str__(self):
        return f"Game {self.id}: {' | '.join(str(draw) for draw in self.draws)}"

    def all_draws_possible(self):
        for draw in self.draws:
            if (
                draw.red > self.MAX_RED
                or draw.green > self.MAX_GREEN
                or draw.blue > self.MAX_BLUE
            ):
                return False
        return True

    def power(self):
        min_red = max([draw.red for draw in self.draws])
        min_green = max([draw.green for draw in self.draws])
        min_blue = max([draw.blue for draw in self.draws])

        return min_red * min_green * min_blue


class Draw:
    def __init__(self, draw):
        self.red = 0
        self.green = 0
        self.blue = 0

        for cube_set in draw:
            cube_count = int(re.search(r"\d+", cube_set).group())
            self.__setattr__(cube_set.split(" ")[1], cube_count)

    def __str__(self):
        return f"red: {self.red}, green: {self.green}, blue: {self.blue}"


def new_game(data):
    game_id = int(re.search(r"\d+", data).group())
    raw_draws = data.split(": ")[1].split("; ")
    draws = list(map(lambda raw_draw: Draw(raw_draw.split(", ")), raw_draws))
    return Game(game_id, draws)


with open("input.txt", "r") as data_file:
    games = [new_game(line.strip()) for line in data_file.readlines()]

games_powers = [game.power() for game in games]

print(sum(games_powers))
