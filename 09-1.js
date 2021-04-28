const input = [48, 1, 4, 32, 17, 19, 35, 6, 8, 49, 29, 33, 50, 5, 38, 41, 36, 28, 23, 31, 44, 20, 45, 21, 9, 10, 7, 11, 39, 15, 17, 40, 47, 12, 14, 16, 64, 26, 19, 27, 71, 18, 111, 22, 23, 24, 25, 125, 20, 62, 58, 54, 28, 29, 30, 173, 31, 32, 45, 55, 51, 42, 38, 74, 44, 43, 40, 49, 47, 48, 57, 65, 50, 52, 105, 82, 58, 68, 61, 84, 101, 116, 70, 125, 78, 81, 199, 83, 100, 87, 88, 170, 169, 108, 140, 107, 193, 139, 168, 229, 161, 119, 178, 131, 157, 248, 148, 188, 165, 159, 181, 171, 175, 187, 294, 196, 267, 226, 300, 238, 246, 309, 250, 279, 403, 288, 306, 290, 296, 305, 307, 313, 324, 330, 493, 682, 346, 362, 383, 422, 434, 464, 551, 484, 553, 601, 529, 538, 578, 1004, 1311, 643, 707, 603, 612, 747, 735, 654, 846, 708, 796, 768, 847, 805, 856, 898, 948, 1013, 1062, 1207, 2158, 1325, 1380, 1552, 1602, 1503, 1745, 1215, 1257, 1510, 1642, 1582, 2835, 1794, 1476, 1564, 2538, 2438, 1661, 1754, 2328, 2228, 2075, 2464, 2422, 2907, 2472, 2595, 2691, 2817, 2718, 2725, 2839, 3303, 3318, 5045, 3040, 4002, 5782, 9085, 4960, 3415, 3829, 3736, 3982, 4403, 4766, 11803, 4886, 5746, 5067, 5163, 7777, 6461, 9161, 6547, 6043, 5879, 6343, 6358, 6455, 6776, 7151, 7244, 7397, 9049, 7565, 8803, 7718, 8385, 9169, 10645, 13791, 11522, 10230, 15808, 11939, 11922, 12222, 12813, 22567, 13606, 17474, 12701, 19033, 17434, 13927, 16320, 22452, 14962, 19030, 41600, 25859, 22169, 22152, 25489, 20875, 21752, 24735, 22931, 24623, 41199, 30175, 25514, 26307, 26628, 27663, 35350, 28889, 31282, 35679, 30247, 33992, 35837, 57519, 61209, 47658, 42627, 43027, 47666, 48420, 45610, 44683, 47554, 65854, 50137, 66012, 51821, 64726, 69671, 54291, 56552, 59136, 91047, 61529, 110537, 88283, 96086, 78464, 142574, 85654, 87310, 87710, 110336, 90293, 187133, 92237, 94820, 97691, 116547, 178576, 106112, 108373, 131200, 110843, 162664, 205357, 120665, 148839, 177603, 273507, 164118, 422346, 168757, 182130, 288912, 193822, 185113, 356486, 182530, 187057, 205663, 208534, 387793, 216955, 259682, 305778, 219216, 339881, 274961, 269504, 409577, 326328, 312957, 332875, 351287, 471042, 350887, 353870, 457091, 367643, 369587, 427750, 388193, 422618, 578121, 723457, 425489, 529912, 436171, 478898, 757780, 628793, 737230, 544465, 595832, 645832, 639285, 663844, 683762, 935989, 781620, 704757, 918105, 755836, 790261, 792205, 813682, 1032003, 848107, 1089333, 1267922, 1881538, 915069, 980636, 1023363, 1420992, 1140297, 1569518, 1786129, 1235117, 1563937, 1419680, 1347606, 1388519, 1460593, 2213197, 1640312, 1546097, 1736472, 1903015, 1661789, 1763176, 1828743, 3521850, 1895705, 2291285, 2809492, 3184168, 2003999, 2258480, 3043312, 2654797, 3030111, 3874986, 2582723, 3724448, 3673790, 3374840, 3971242, 3197065, 5638162, 4154185, 3207886, 5703729, 5079873, 4872055, 4549765, 4550502, 3899704, 4186990, 4262479, 5779788, 5862683, 7986927, 6929815, 7001353, 5790609, 5612834, 7346082, 6307171, 10188664, 7757651, 6404951, 7096769, 8069120, 7107590, 10125162, 7758388, 8086694, 8162183, 8449469, 8450206, 8737492, 9512538, 9799824, 11403443, 11392622, 11475517, 11920005, 15451559, 12195560, 14528101, 12709603, 12712122, 17782688, 14567134, 19151010, 14474071, 14204359, 22614795, 14865978, 16612389, 15845082, 16248877, 16611652, 16899675, 17187698, 20915981, 19312362, 24113046, 23671077, 22868139, 25679876, 24629608, 25421725, 24905163, 26913962, 28554685, 26916481, 35763399, 43780618, 29340049, 49350953, 33224041, 30711060, 39771141, 32093959, 26796446, 40055837, 67857358, 34087373, 40228343, 43425408, 43941970, 46539216, 48289864, 49534771, 50051333, 58716981, 59265745, 74956496, 70766897, 56256530, 93476741, 56136495, 58890405, 129657302, 62805019, 60020487, 79999484, 60883819, 73335662, 66852283, 74143210, 92977778, 89763114, 94829080, 119874878, 90481186, 96073987, 97824635, 112339790, 118156150, 149613236, 127736102, 115026900, 117020314, 174828564, 119774224, 116156982, 118910892, 153335146, 120904306, 175047387, 183872597, 237067042, 140187945, 191163524, 189170110, 180244300, 184592194, 202820976, 206638168, 186555173, 193898622, 235067874, 227366690, 238685116, 329857536, 232047214, 434868190, 235931206, 428966496, 377868363, 256344927, 376119151, 366210911, 412291514, 320432245, 324060542, 561904750, 324780139, 383068732, 463297896, 364836494, 391230362, 380453795, 523756158, 559848013, 421265312, 462434564, 600767700, 467978420, 556363451, 856133502, 576777172, 492276133, 580405469, 581125066, 622555838, 644492787, 648840681, 1054180883, 645212384, 704514337, 792758559, 689616633, 745290289, 756066856, 1315914869, 771684157, 801719107, 883699876, 1052124146, 889243732, 954710697, 1157131151, 960254553, 1690962839, 1069053305, 1441599240, 1582810391, 1226337450, 1337191922, 1389783076, 1450559788, 1294053065, 1334829017, 1849498285, 1394130970, 1644327330, 1434906922, 2339803520, 2621182442, 1573403264, 3958374364, 1685418983, 2640129680, 1843954429, 3143551350, 2181048147, 2226184456, 2616120526, 2295390755, 2363106370, 3529373412, 4847366898, 3745950543, 2628882082, 2824689998, 3023963052, 2688184035, 2728959987, 5269011762, 4265509772, 4991988452, 4855066538, 3258822247, 6367132985, 3417357693, 3866467130, 3911603439, 4544154517, 4025002576, 5972134999, 4407232603, 4521575211, 7471187064, 6849692574, 5051290405, 7125289377, 5317066117, 5417144022, 9076292981, 5512874033, 10124078300, 7780397458, 6595427117, 8928807814, 6676179940, 8721533668, 11256925177, 7170425686, 7283824823, 7442360269, 7778070569, 11805400034, 8432235179, 8546577787, 10034449244, 11691057426, 9572865616, 13197541480, 10368356522, 10468434427, 10734210139, 15981308460, 10930018055, 12108301150, 12683299719, 18708088624, 13271607057, 30399146050, 14118540209, 13846605626, 17204874930, 14454250509, 14726185092, 20481366303, 21624676195, 16210305748, 16978812966, 19362253234, 20836790949, 19941222138, 21298374577, 20041300043, 21102566661, 23639963579, 26801839928, 24201625112, 27118212683, 23038319205, 30825418592, 32554694250, 27390147266, 27725857566, 35207551395, 27965145835, 37312872409, 29180435601, 30664556257, 44742530240, 33189118714, 53853068827, 35572558982, 36341066200, 56870933559, 39982522181, 44140885866, 43681263622, 50705856300, 61735129851, 46678282784, 58245870600, 47239944317, 50156531888, 87822149488, 55355293101, 55116004832, 63853674971, 99061226366, 110531957755, 57145581436, 59844991858, 90359546406, 70647078438, 68761677696, 80481952066, 104385525753, 71913625182, 126002371539, 131187808366, 83663785803, 90819168650, 132615352667, 105511824989, 127160234850, 119208968072, 108402402488, 115200284959, 110471297933, 120999256407, 112261586268, 123698666829, 134500753409, 237000878420, 171301120716, 116990573294, 130492070296, 201481208473, 161466247088, 140675302878, 252187064773, 155577410985, 162732793832, 174482954453, 189175610792, 198864070762, 196330993639, 213914227477, 215983122922, 218873700421, 220663988756, 222732884201, 357058619458, 227461871227, 395195064401, 286744540721, 398762991943, 247482643590, 334033914548, 257665876172, 271167373174, 293224864128, 302141549966, 354589530355, 354441481747, 344753021777, 570424604669, 337215748285, 363658565245, 470031443936, 410245221116, 415204694060, 434578216233, 509477424922, 439537689177, 626224863170, 450194755428, 485127747399, 474944514817, 518650016764, 505148519762, 528833249346, 549624193556, 550890740300, 559807426138, 564392237302, 656883429373, 639357298251, 1131373382932, 904065675303, 1069540757064, 773903786361, 778863259305, 798236781478, 825449915176, 849782910293, 854742383237, 1629348183202, 984421939739, 889732444605, 955343275190, 925139270245, 1003777764163, 980093034579, 1023798536526, 1054772713318, 1078457442902, 1100514933856, 1110698166438, 1874154384344, 1296240727624, 1413261084612, 2396755661480, 1552767045666, 1572140567839, 1577100040783, 1933199826139, 1810085658427, 1715182359781, 1675232825469, 1704525293530, 1744474827842, 1814871714850, 1845075719795, 1869825479184, 1880482545435, 1928917034408, 2913292860718, 2034865747897, 3803071418752, 3585007838965, 2178972376758, 2974669318200, 2406938894062, 2709501812236, 2868381295463, 2966028130278, 3124907613505, 3252332866252, 3459657187623, 3714901198979, 3879941467692, 3379758118999, 3390415185250, 3419707653311, 3559346542692, 3963782782305, 3725558265230, 4585911270820, 3750308024619, 3809399579843, 5594212290589, 7773184667347, 4213838124655, 4888474188994, 5153641694958, 5047353672221, 5116440706298, 7115973450480, 6345786249277, 5993288908968, 6934307193348, 6504665732504, 6632090985251, 6799465772310, 8606700214913, 6810122838561, 6770173304249, 8903949719577, 11822781382342, 7284904807922, 7475866289849, 7559707604462, 8963041274801, 11523492691966, 12332258480143, 9102312313649, 9261191796876, 9330278830953, 10042115883952, 11040642581189, 15606978046153, 11109729615266, 12339075158245, 12497954641472, 18622247154652, 13136756717755, 13274839036753, 13431556757561, 16247946082723, 14095027646483, 13580296142810, 20991264362023, 14760771097771, 22891882854075, 14844612412384, 15035573894311, 22397948514631, 28341067240581, 24837029799717, 18363504110525, 28192327855332, 20370921412142, 19372394714905, 21082758465141, 30367749143924, 23448804773511, 23607684256738, 25475831876000, 25772793678225, 29130601540794, 28424908555194, 26706395794314, 27011852900371, 27675323789293, 28615870037121, 29605383510155, 29796344992082, 29880186306695, 33208116522909, 47988264752026, 35406495306453, 37735898825430, 38734425522667, 58980910201134, 39446262575666, 40455153180046, 39743316127047, 42821199488416, 57040778592315, 47056489030249, 88111511741928, 51283008046031, 51248625554225, 64022365343574, 80557098313846, 64442294619744, 53718248694685, 54687176689664, 56291193826414, 67616085132125, 63088302829604, 59676531298777, 68614611829362, 70944015348339, 77182161401096, 73142394131883, 134222939993411, 78180688098333, 79189578702713, 79901415755712, 96746347006460, 82564515615463, 89877688518665, 98305114584474, 103347682856663];

function isSum(index) {
  let num = input[index];
  for (let i = index - 25; i < index; i++) {
    for (let j = i + 1; j < index; j++) {
      if (i !== j) {
        let sum = input[i] + input[j];
        if (sum == num) return true;
      }
    }
  }
  return false;
}

for (let n = 25; n < input.length; n++) {
  if (!isSum(n)) {
    console.log(input[n]);
    break;
  }
}
