# sample data
# diagnostic_report = ["00100", "11110", "10110", "10111", "10101",
#                      "01111", "00111", "11100", "10000", "11001", "00010", "01010"]

data_file = open('data.txt', 'r')
diagnostic_report = [line.strip() for line in data_file.readlines()]


def find_parameter(entries, common):
    for i in range(0, len(diagnostic_report[0])):
        counter_0 = 0
        counter_1 = 0
        for entry in entries:
            if entry[i] == "0":
                counter_0 += 1
            else:
                counter_1 += 1
        if common:
            value_to_keep = "0" if counter_0 > counter_1 else "1"
        else:
            value_to_keep = "0" if counter_1 >= counter_0 else "1"
        entries = [entry for entry in entries if entry[i] == value_to_keep]
        if len(entries) == 1:
            return entries[0]


o2_generation_rate = find_parameter(diagnostic_report, True)
co2_scrubbing_rate = find_parameter(diagnostic_report, False)
life_support_rating = int(o2_generation_rate, 2) * int(co2_scrubbing_rate, 2)

print(life_support_rating)
