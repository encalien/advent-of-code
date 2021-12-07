data_file = open('data.txt', 'r')
hydrothermal_vent_lines = [[[int(position.split(',')[0]), int(position.split(
    ',')[1])] for position in line.strip().split(' -> ')] for line in data_file.readlines()]

hydrothermal_vents_positions = []


def get_line_vent_positions(line):
    positions = []
    x_fixed = line[0][0] == line[1][0]
    y_fixed = line[0][1] == line[1][1]
    diagonal = abs(line[0][0] - line[1][0]) == abs(line[0][1] - line[1][1])
    x_decreasing = line[0][0] > line[1][0]
    y_decreasing = line[0][1] > line[1][1]

    if not(x_fixed or y_fixed or diagonal):
        return

    x_range_end = line[1][0] + (-1 if x_decreasing else 1)
    x_range = range(line[0][0], x_range_end, -1 if x_decreasing else 1)
    y_range_end = line[1][1] + (-1 if y_decreasing else 1)
    y_range = range(line[0][1], y_range_end, -1 if y_decreasing else 1)

    new_position = None
    if x_fixed:
        for pos in y_range:
            new_position = f'{line[0][0]},{pos}'
            positions.append(new_position)
    if y_fixed:
        for pos in x_range:
            new_position = f'{pos},{line[0][1]}'
            positions.append(new_position)
    if diagonal:
        for x_ind, x_pos in enumerate([*x_range]):
            for y_ind, y_pos in enumerate([*y_range]):
                if y_ind == x_ind:
                    new_position = f'{x_pos},{y_range[x_ind]}'
                    positions.append(new_position)
    return positions


hydrothermal_vents_positions_frequency = {}

for line in hydrothermal_vent_lines:
    for pos in get_line_vent_positions(line):
        if pos in hydrothermal_vents_positions_frequency:
            hydrothermal_vents_positions_frequency[pos] += 1
        else:
            hydrothermal_vents_positions_frequency[pos] = 1

multiple_vents_positions = []
for pos in hydrothermal_vents_positions_frequency:
    if hydrothermal_vents_positions_frequency[pos] > 1:
        multiple_vents_positions.append(pos)

print(len(multiple_vents_positions))
