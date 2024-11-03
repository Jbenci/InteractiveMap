// Country Boundaries Data
const countryBoundaries = {
    'Afghanistan': { latMin: 29.3772, latMax: 38.4911, lonMin: 60.517, lonMax: 74.8899 },
    'Albania': { latMin: 39.625, latMax: 42.6611, lonMin: 19.2706, lonMax: 21.0573 },
    'Algeria': { latMin: 18.96, latMax: 37.09, lonMin: -8.67, lonMax: 11.97 },
    'Andorra': { latMin: 42.4285, latMax: 42.6560, lonMin: 1.4084, lonMax: 1.7869 },
    'Angola': { latMin: -18.038, latMax: -4.39, lonMin: 11.6401, lonMax: 24.0845 },
    'Argentina': { latMin: -55.05, latMax: -21.78, lonMin: -73.57, lonMax: -53.66 },
    'Armenia': { latMin: 38.83, latMax: 41.3, lonMin: 43.44, lonMax: 46.64 },
    'Australia': { latMin: -43.65, latMax: -10.67, lonMin: 113.34, lonMax: 153.57 },
    'Austria': { latMin: 46.3786, latMax: 49.0206, lonMin: 9.5308, lonMax: 17.1603 },
    'Azerbaijan': { latMin: 38.4, latMax: 41.9, lonMin: 44.8, lonMax: 50.4 },
    'Bahrain': { latMin: 25.796, latMax: 26.283, lonMin: 50.45, lonMax: 50.65 },
    'Bangladesh': { latMin: 20.7433, latMax: 26.6233, lonMin: 88.03, lonMax: 92.6736 },
    'Belarus': { latMin: 51.26, latMax: 56.1658, lonMin: 23.1783, lonMax: 32.7733 },
    'Belgium': { latMin: 49.4969, latMax: 51.505, lonMin: 2.5422, lonMax: 6.4081 },
    'Benin': { latMin: 6.1422, latMax: 12.4092, lonMin: 0.7738, lonMax: 3.8517 },
    'Bhutan': { latMin: 26.7073, latMax: 28.2465, lonMin: 88.7465, lonMax: 92.1252 },
    'Bolivia': { latMin: -22.8973, latMax: -9.6806, lonMin: -69.666, lonMax: -57.498 },
    'BosniaAndHerzegovina': { latMin: 42.55, latMax: 45.28, lonMin: 15.74, lonMax: 19.62 },
    'Botswana': { latMin: -26.9, latMax: -17.78, lonMin: 19.99, lonMax: 29.36 },
    'Brazil': { latMin: -33.7423, latMax: 5.2649, lonMin: -73.9855, lonMax: -34.7932 },
    'Bulgaria': { latMin: 41.2354, latMax: 44.2268, lonMin: 22.357, lonMax: 28.6036 },
    'BurkinaFaso': { latMin: 9.4021, latMax: 15.0842, lonMin: -5.5189, lonMax: 2.4085 },
    'Burundi': { latMin: -4.4693, latMax: -2.3097, lonMin: 29.0009, lonMax: 30.8477 },
    'Cambodia': { latMin: 10.4157, latMax: 14.7046, lonMin: 102.348, lonMax: 107.627 },
    'Cameroon': { latMin: 1.6541, latMax: 13.083, lonMin: 8.4989, lonMax: 16.197 },
    'Canada': { latMin: 41.6766, latMax: 83.1139, lonMin: -141.002, lonMax: -52.6194 },
    'CentralAfricanRepublic': { latMin: 2.2205, latMax: 11.0076, lonMin: 14.4155, lonMax: 27.4634 },
    'Chad': { latMin: 7.4412, latMax: 23.4975, lonMin: 13.4735, lonMax: 24.0027 },
    'Chile': { latMin: -55.98, latMax: -17.51, lonMin: -75.65, lonMax: -66.42 },
    'China': { latMin: 18.1587, latMax: 53.5609, lonMin: 73.4994, lonMax: 135.085 },
    'Colombia': { latMin: -4.23, latMax: 12.47, lonMin: -79.04, lonMax: -66.87 },
    'Comoros': { latMin: -12.4877, latMax: -11.3649, lonMin: 43.2158, lonMax: 44.5399 },
    'Congo': { latMin: -5.0379, latMax: 3.7031, lonMin: 11.1274, lonMax: 18.6498 },
    'CostaRica': { latMin: 8.04, latMax: 11.22, lonMin: -85.95, lonMax: -82.55 },
    'Croatia': { latMin: 42.3383, latMax: 46.535, lonMin: 13.4932, lonMax: 19.4274 },
    'Cuba': { latMin: 19.8281, latMax: 23.2658, lonMin: -84.9574, lonMax: -74.1318 },
    'Cyprus': { latMin: 34.6332, latMax: 35.7015, lonMin: 32.2731, lonMax: 34.5978 },
    'CzechRepublic': { latMin: 48.5519, latMax: 51.0557, lonMin: 12.0905, lonMax: 18.8592 },
    'DemocraticRepublicOfTheCongo': { latMin: -13.4556, latMax: 5.3858, lonMin: 12.2041, lonMax: 31.3057 },
    'Denmark': { latMin: 54.4517, latMax: 57.9524, lonMin: 8.0756, lonMax: 12.6916 },
    'Djibouti': { latMin: 10.9146, latMax: 12.7136, lonMin: 41.7597, lonMax: 43.4175 },
    'DominicanRepublic': { latMin: 17.598, latMax: 19.935, lonMin: -72.004, lonMax: -68.32 },
    'Ecuador': { latMin: -5.016, latMax: 1.4637, lonMin: -81.0836, lonMax: -75.1846 },
    'Egypt': { latMin: 22.0, latMax: 31.917, lonMin: 24.7, lonMax: 35.0 },
    'ElSalvador': { latMin: 13.1489, latMax: 14.4451, lonMin: -90.1286, lonMax: -87.6922 },
    'EquatorialGuinea': { latMin: 0.9209, latMax: 2.3469, lonMin: 9.3056, lonMax: 11.3353 },
    'Eritrea': { latMin: 12.3595, latMax: 18.0204, lonMin: 36.4385, lonMax: 43.1376 },
    'Estonia': { latMin: 57.5093, latMax: 59.6764, lonMin: 21.8379, lonMax: 28.1961 },
    'Ethiopia': { latMin: 3.4041, latMax: 14.8937, lonMin: 32.9999, lonMax: 47.9861 },
    'Finland': { latMin: 59.8, latMax: 70.0923, lonMin: 19.0917, lonMax: 31.5875 },
    'France': { latMin: 41.342, latMax: 51.124, lonMin: -5.14, lonMax: 9.56 },
    'Gabon': { latMin: -3.9788, latMax: 2.3229, lonMin: 8.6995, lonMax: 14.5023 },
    'Gambia': { latMin: 13.0643, latMax: 13.8253, lonMin: -16.8184, lonMax: -13.7915 },
    'Georgia': { latMin: 41.0532, latMax: 43.5711, lonMin: 40.0099, lonMax: 46.7363 },
    'Germany': { latMin: 47.27, latMax: 55.06, lonMin: 5.87, lonMax: 15.04 },
    'Ghana': { latMin: 4.7369, latMax: 11.1731, lonMin: -3.2549, lonMax: 1.1987 },
    'Greece': { latMin: 34.8, latMax: 41.748, lonMin: 19.373, lonMax: 28.246 },
    'Guatemala': { latMin: 13.7373, latMax: 17.8152, lonMin: -92.2413, lonMax: -88.2232 },
    'Guinea': { latMin: 7.1906, latMax: 12.6789, lonMin: -15.0765, lonMax: -7.6411 },
    'GuineaBissau': { latMin: 10.9242, latMax: 12.6862, lonMin: -16.7172, lonMax: -13.6348 },
    'Haiti': { latMin: 18.0219, latMax: 20.0879, lonMin: -74.4788, lonMax: -71.6134 },
    'Honduras': { latMin: 12.9824, latMax: 16.0102, lonMin: -89.3508, lonMax: -83.1554 },
    'Hungary': { latMin: 45.7595, latMax: 48.5852, lonMin: 16.1123, lonMax: 22.8986 },
    'Iceland': { latMin: 63.4, latMax: 66.566, lonMin: -24.54, lonMax: -13.5 },
    'India': { latMin: 6.5546, latMax: 35.6745, lonMin: 68.1112, lonMax: 97.3954 },
    'Indonesia': { latMin: -10.05, latMax: 5.9, lonMin: 95.0, lonMax: 141.0 },
    'Iran': { latMin: 25.0639, latMax: 39.7773, lonMin: 44.0473, lonMax: 63.3173 },
    'Iraq': { latMin: 29.0693, latMax: 37.3856, lonMin: 38.7958, lonMax: 48.5756 },
    'Ireland': { latMin: 51.43, latMax: 55.43, lonMin: -10.56, lonMax: -5.43 },
    'Israel': { latMin: 29.4966, latMax: 33.3401, lonMin: 34.2674, lonMax: 35.8961 },
    'Italy': { latMin: 35.49, latMax: 47.09, lonMin: 6.63, lonMax: 18.51 },
    'IvoryCoast': { latMin: 4.3618, latMax: 10.7369, lonMin: -8.5993, lonMax: -2.4949 },
    'Jamaica': { latMin: 17.7036, latMax: 18.5265, lonMin: -78.3669, lonMax: -76.1804 },
    'Japan': { latMin: 24.396, latMax: 45.5515, lonMin: 122.9346, lonMax: 153.9866 },
    'Jordan': { latMin: 29.1859, latMax: 33.3679, lonMin: 34.9594, lonMax: 39.3012 },
    'Kazakhstan': { latMin: 40.5563, latMax: 55.4213, lonMin: 46.4932, lonMax: 87.3156 },
    'Kenya': { latMin: -4.6731, latMax: 4.62, lonMin: 33.9099, lonMax: 41.8995 },
    'Kuwait': { latMin: 28.5246, latMax: 30.0956, lonMin: 46.5556, lonMax: 48.4314 },
    'Latvia': { latMin: 55.6747, latMax: 58.0855, lonMin: 20.9744, lonMax: 28.2416 },
    'Lebanon': { latMin: 33.0479, latMax: 34.6923, lonMin: 35.1026, lonMax: 36.6389 },
    'Lesotho': { latMin: -30.6772, latMax: -28.5708, lonMin: 27.0291, lonMax: 29.4557 },
    'Liberia': { latMin: 4.3530, latMax: 8.5518, lonMin: -11.4920, lonMax: -7.3651 },
    'Libya': { latMin: 19.5083, latMax: 33.1654, lonMin: 9.3911, lonMax: 25.1466 },
    'Lithuania': { latMin: 53.8967, latMax: 56.4469, lonMin: 20.931, lonMax: 26.8355 },
    'Luxembourg': { latMin: 49.4479, latMax: 50.182, lonMin: 5.7357, lonMax: 6.5309 },
    'Madagascar': { latMin: -25.6071, latMax: -11.9519, lonMin: 43.2203, lonMax: 50.4862 },
    'Malawi': { latMin: -17.1251, latMax: -9.3684, lonMin: 32.6739, lonMax: 35.9168 },
    'Mali': { latMin: 10.1595, latMax: 25.0000, lonMin: -12.2402, lonMax: 4.2441 },
    'Malaysia': { latMin: 0.8538, latMax: 7.3633, lonMin: 99.6434, lonMax: 119.2673 },
    'Malta': { latMin: 35.8061, latMax: 36.0822, lonMin: 14.1834, lonMax: 14.5765 },
    'Mauritania': { latMin: 14.7155, latMax: 27.2980, lonMin: -17.0665, lonMax: -4.8279 },
    'Mexico': { latMin: 14.55, latMax: 32.718, lonMin: -118.5, lonMax: -86.71 },
    'Moldova': { latMin: 45.4882, latMax: 48.4902, lonMin: 26.6187, lonMax: 30.1354 },
    'Mongolia': { latMin: 41.5803, latMax: 52.1495, lonMin: 87.7499, lonMax: 119.9219 },
    'Montenegro': { latMin: 41.8521, latMax: 43.5585, lonMin: 18.4337, lonMax: 20.358 },
    'Morocco': { latMin: 27.6666, latMax: 35.9224, lonMin: -13.1686, lonMax: -0.9986 },
    'Mozambique': { latMin: -26.8687, latMax: -10.4712, lonMin: 30.2172, lonMax: 40.8475 },
    'Myanmar': { latMin: 9.7846, latMax: 28.5479, lonMin: 92.1889, lonMax: 101.1701 },
    'Namibia': { latMin: -28.9714, latMax: -16.9634, lonMin: 11.7149, lonMax: 25.2567 },
    'Nepal': { latMin: 26.3566, latMax: 30.4469, lonMin: 80.0564, lonMax: 88.1993 },
    'Netherlands': { latMin: 50.75, latMax: 53.51, lonMin: 3.36, lonMax: 7.23 },
    'NewZealand': { latMin: -47.29, latMax: -34.39, lonMin: 166.37, lonMax: 178.53 },
    'Nicaragua': { latMin: 10.7075, latMax: 15.0259, lonMin: -87.6903, lonMax: -82.7383 },
    'Niger': { latMin: 11.6969, latMax: 23.5250, lonMin: 0.1662, lonMax: 15.9956 },
    'Nigeria': { latMin: 4.2771, latMax: 13.8922, lonMin: 2.6684, lonMax: 14.6799 },
    'NorthKorea': { latMin: 37.6733, latMax: 43.0119, lonMin: 124.1849, lonMax: 130.6741 },
    'NorthMacedonia': { latMin: 40.8562, latMax: 42.3609, lonMin: 20.4642, lonMax: 23.0341 },
    'Norway': { latMin: 57.9779, latMax: 71.1854, lonMin: 4.6506, lonMax: 31.0669 },
    'Oman': { latMin: 16.6459, latMax: 26.3876, lonMin: 51.9824, lonMax: 59.8392 },
    'Pakistan': { latMin: 23.6919, latMax: 37.0841, lonMin: 60.8783, lonMax: 77.8409 },
    'Panama': { latMin: 7.1979, latMax: 9.6376, lonMin: -83.0513, lonMax: -77.1741 },
    'Paraguay': { latMin: -27.6087, latMax: -19.2941, lonMin: -62.6475, lonMax: -54.2594 },
    'Peru': { latMin: -18.3497, latMax: -0.0392, lonMin: -81.3267, lonMax: -68.6782 },
    'Philippines': { latMin: 4.6064, latMax: 21.1217, lonMin: 116.9283, lonMax: 126.6043 },
    'Poland': { latMin: 49.006, latMax: 54.837, lonMin: 14.123, lonMax: 24.145 },
    'Portugal': { latMin: 36.837, latMax: 42.154, lonMin: -9.5267, lonMax: -6.1892 },
    'Qatar': { latMin: 24.4756, latMax: 26.1557, lonMin: 50.7503, lonMax: 51.6133 },
    'Romania': { latMin: 43.6186, latMax: 48.2653, lonMin: 20.2619, lonMax: 29.7151 },
    'Russia': { latMin: 41.185, latMax: 81.86, lonMin: 19.6389, lonMax: 180.0 },
    'Rwanda': { latMin: -2.8406, latMax: -1.0474, lonMin: 28.8568, lonMax: 30.8990 },
    'SaudiArabia': { latMin: 16.3478, latMax: 32.1543, lonMin: 34.5957, lonMax: 55.6666 },
    'Senegal': { latMin: 12.3073, latMax: 16.6916, lonMin: -17.5352, lonMax: -11.3428 },
    'Serbia': { latMin: 42.2324, latMax: 46.1901, lonMin: 18.8171, lonMax: 23.0062 },
    'SierraLeone': { latMin: 6.9288, latMax: 9.9997, lonMin: -13.3076, lonMax: -10.2658 },
    'Slovakia': { latMin: 47.7314, latMax: 49.6138, lonMin: 16.8334, lonMax: 22.5704 },
    'Slovenia': { latMin: 45.4214, latMax: 46.8766, lonMin: 13.3754, lonMax: 16.5967 },
    'Somalia': { latMin: -1.6793, latMax: 11.9792, lonMin: 40.9866, lonMax: 51.4126 },
    'SouthAfrica': { latMin: -34.819, latMax: -22.125, lonMin: 16.45, lonMax: 32.89 },
    'SouthKorea': { latMin: 33.1084, latMax: 38.6126, lonMin: 125.8871, lonMax: 129.5846 },
    'SouthSudan': { latMin: 3.4897, latMax: 12.2194, lonMin: 23.4401, lonMax: 35.2905 },
    'Spain': { latMin: 27.63, latMax: 43.79, lonMin: -18.18, lonMax: 4.32 },
    'Sudan': { latMin: 8.6858, latMax: 22.2322, lonMin: 21.8145, lonMax: 38.6075 },
    'Sweden': { latMin: 55.3371, latMax: 69.0605, lonMin: 11.1187, lonMax: 24.1568 },
    'Switzerland': { latMin: 45.8179, latMax: 47.8084, lonMin: 5.9559, lonMax: 10.4922 },
    'Syria': { latMin: 32.3107, latMax: 37.3191, lonMin: 35.7272, lonMax: 42.3850 },
    'Taiwan': { latMin: 21.9018, latMax: 25.3002, lonMin: 119.9258, lonMax: 122.0067 },
    'Tajikistan': { latMin: 36.6711, latMax: 41.0421, lonMin: 67.3422, lonMax: 75.1372 },
    'Tanzania': { latMin: -11.7457, latMax: -0.9862, lonMin: 29.3272, lonMax: 40.4432 },
    'Thailand': { latMin: 5.6130, latMax: 20.4648, lonMin: 97.3456, lonMax: 105.6390 },
    'Togo': { latMin: 6.1095, latMax: 11.1389, lonMin: -0.1448, lonMax: 1.8067 },
    'Tunisia': { latMin: 30.2308, latMax: 37.5439, lonMin: 7.5244, lonMax: 11.5982 },
    'Turkey': { latMin: 35.8153, latMax: 42.1063, lonMin: 25.6685, lonMax: 44.8178 },
    'Turkmenistan': { latMin: 35.1411, latMax: 42.7956, lonMin: 52.4414, lonMax: 66.6843 },
    'Uganda': { latMin: -1.4821, latMax: 4.2143, lonMin: 29.5732, lonMax: 35.0360 },
    'Ukraine': { latMin: 44.3864, latMax: 52.3791, lonMin: 22.1289, lonMax: 40.2275 },
    'UnitedArabEmirates': { latMin: 22.6336, latMax: 26.0842, lonMin: 51.5795, lonMax: 56.3816 },
    'UnitedKingdom': { latMin: 49.9599, latMax: 58.635, lonMin: -8.6494, lonMax: 1.7633 },
    'UnitedStatesOfAmerica': { latMin: 24.3963, latMax: 49.3844, lonMin: -125.0, lonMax: -66.9346 },
    'Uruguay': { latMin: -34.9812, latMax: -30.0822, lonMin: -58.4428, lonMax: -53.0739 },
    'Uzbekistan': { latMin: 37.1844, latMax: 45.5894, lonMin: 56.0024, lonMax: 73.1323 },
    'Venezuela': { latMin: 0.6475, latMax: 12.2019, lonMin: -73.3541, lonMax: -59.8038 },
    'Vietnam': { latMin: 8.5592, latMax: 23.3889, lonMin: 102.1440, lonMax: 109.4644 },
    'Yemen': { latMin: 12.1110, latMax: 19.0024, lonMin: 41.8140, lonMax: 54.5305 },
    'Zambia': { latMin: -18.0792, latMax: -8.2709, lonMin: 21.9994, lonMax: 33.7057 },
    'Zimbabwe': { latMin: -22.4177, latMax: -15.6088, lonMin: 25.2373, lonMax: 33.0563 }
};

window.countryBoundaries = countryBoundaries;