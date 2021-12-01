# sample data
# measurements = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

data_file = open('data.txt', 'r')
measurements = [int(line.strip()) for line in data_file.readlines()]

counter = 0

for i, value in enumerate(measurements):
    if i == 0:
        continue
    if value > measurements[i-1]:
        counter += 1

print(counter)
