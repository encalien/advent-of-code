# sample data
# measurements = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263]

data_file = open('data.txt', 'r')
measurements = [int(line.strip()) for line in data_file.readlines()]

counter = 0

group_measurements = [measurement + measurements[i+1] + measurements[i+2]
                      for i, measurement in enumerate(measurements[:-2])]

for i, value in enumerate(group_measurements):
    if i == 0:
        continue
    if value > group_measurements[i-1]:
        counter += 1

print(counter)
