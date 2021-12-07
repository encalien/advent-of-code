# sample data
# crab_positions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]

data_file = open('data.txt', 'r')
crab_positions = [int(num) for num in data_file.readline().strip().split(',')]

consumed_fuel = 0
sum_of_crab_positions = 0

for crab_pos in crab_positions:
    sum_of_crab_positions += crab_pos
mean_position = sum_of_crab_positions // len(crab_positions)


def series(num):
    steps_count = abs(num - mean_position)
    num_sum = (steps_count + 1) * ((steps_count) // 2)
    num_sum += (steps_count + 1) // 2 if steps_count % 2 == 1 else 0
    return num_sum


consumed_fuel = 0
for crab_pos in crab_positions:
    consumed_fuel += series(crab_pos)

print(consumed_fuel)
