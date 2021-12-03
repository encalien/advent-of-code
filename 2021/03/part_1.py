# sample data
# diagnostic_report = ["00100", "11110", "10110", "10111", "10101",
#  "01111", "00111", "11100", "10000", "11001", "00010", "01010"]

data_file = open('data.txt', 'r')
diagnostic_report = [line.strip() for line in data_file.readlines()]

gamma_rate = ""
epsilon_rate = ""

for i in range(0, len(diagnostic_report[0])):
    counter_0 = 0
    counter_1 = 0
    for entry in diagnostic_report:
        if entry[i] == "0":
            counter_0 += 1
        else:
            counter_1 += 1
    gamma_rate += "0" if counter_0 > counter_1 else "1"
    epsilon_rate += "0" if counter_1 > counter_0 else "1"

power_consumption = int(gamma_rate, 2) * int(epsilon_rate, 2)
print(power_consumption)
