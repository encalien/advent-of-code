# sample data
# crab_positions = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14]

data_file = open('data.txt', 'r')
crab_positions = [int(num) for num in data_file.readline().strip().split(',')]

crab_positions.sort()
median_position = crab_positions[len(crab_positions)//2]

consumed_fuel = 0
for crab_pos in crab_positions:
    consumed_fuel += abs(crab_pos - median_position)

print(consumed_fuel)
