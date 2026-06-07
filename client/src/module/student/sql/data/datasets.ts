export const datasets: Record<string, string> = {
  world: `
CREATE TABLE world (
  name TEXT,
  continent TEXT,
  area INTEGER,
  population INTEGER,
  gdp BIGINT,
  capital TEXT
);

INSERT INTO world VALUES ('Afghanistan', 'Asia', 652230, 41128771, 14270000000, 'Kabul');
INSERT INTO world VALUES ('Albania', 'Europe', 28748, 2877797, 18260000000, 'Tirana');
INSERT INTO world VALUES ('Algeria', 'Africa', 2381741, 44903225, 191913000000, 'Algiers');
INSERT INTO world VALUES ('Andorra', 'Europe', 468, 77265, 3391000000, 'Andorra la Vella');
INSERT INTO world VALUES ('Angola', 'Africa', 1246700, 35588987, 74493000000, 'Luanda');
INSERT INTO world VALUES ('Argentina', 'South America', 2780400, 46654581, 632770000000, 'Buenos Aires');
INSERT INTO world VALUES ('Armenia', 'Europe', 29743, 2963243, 19504000000, 'Yerevan');
INSERT INTO world VALUES ('Australia', 'Oceania', 7692024, 26439111, 1687713000000, 'Canberra');
INSERT INTO world VALUES ('Austria', 'Europe', 83871, 9104772, 515199000000, 'Vienna');
INSERT INTO world VALUES ('Azerbaijan', 'Asia', 86600, 10412651, 72356000000, 'Baku');
INSERT INTO world VALUES ('Bahrain', 'Asia', 765, 1485509, 44390000000, 'Manama');
INSERT INTO world VALUES ('Bangladesh', 'Asia', 147570, 172954319, 460201000000, 'Dhaka');
INSERT INTO world VALUES ('Belarus', 'Europe', 207600, 9498238, 72829000000, 'Minsk');
INSERT INTO world VALUES ('Belgium', 'Europe', 30528, 11686140, 624248000000, 'Brussels');
INSERT INTO world VALUES ('Belize', 'North America', 22966, 410825, 3218000000, 'Belmopan');
INSERT INTO world VALUES ('Bolivia', 'South America', 1098581, 12388571, 44009000000, 'Sucre');
INSERT INTO world VALUES ('Brazil', 'South America', 8515767, 216422446, 2126809000000, 'Brasilia');
INSERT INTO world VALUES ('Brunei', 'Asia', 5765, 449002, 15128000000, 'Bandar Seri Begawan');
INSERT INTO world VALUES ('Bulgaria', 'Europe', 110879, 6687717, 100635000000, 'Sofia');
INSERT INTO world VALUES ('Cambodia', 'Asia', 181035, 16944826, 29956000000, 'Phnom Penh');
INSERT INTO world VALUES ('Cameroon', 'Africa', 475442, 28647293, 44335000000, 'Yaounde');
INSERT INTO world VALUES ('Canada', 'North America', 9984670, 40097761, 2117805000000, 'Ottawa');
INSERT INTO world VALUES ('Chile', 'South America', 756102, 19603733, 335533000000, 'Santiago');
INSERT INTO world VALUES ('China', 'Asia', 9596961, 1425671352, 17963171000000, 'Beijing');
INSERT INTO world VALUES ('Colombia', 'South America', 1141748, 52085168, 363835000000, 'Bogota');
INSERT INTO world VALUES ('Congo, Democratic Republic of', 'Africa', 2344858, 102262808, 65822000000, 'Kinshasa');
INSERT INTO world VALUES ('Costa Rica', 'North America', 51100, 5212173, 68379000000, 'San Jose');
INSERT INTO world VALUES ('Croatia', 'Europe', 56594, 3855600, 78909000000, 'Zagreb');
INSERT INTO world VALUES ('Cuba', 'North America', 109884, 11194449, 107352000000, 'Havana');
INSERT INTO world VALUES ('Czech Republic', 'Europe', 78867, 10827529, 330860000000, 'Prague');
INSERT INTO world VALUES ('Denmark', 'Europe', 43094, 5910913, 404199000000, 'Copenhagen');
INSERT INTO world VALUES ('Ecuador', 'South America', 283561, 18190484, 118845000000, 'Quito');
INSERT INTO world VALUES ('Egypt', 'Africa', 1001449, 112716598, 395926000000, 'Cairo');
INSERT INTO world VALUES ('Estonia', 'Europe', 45228, 1322765, 40745000000, 'Tallinn');
INSERT INTO world VALUES ('Ethiopia', 'Africa', 1104300, 126527060, 155803000000, 'Addis Ababa');
INSERT INTO world VALUES ('Fiji', 'Oceania', 18274, 936375, 5316000000, 'Suva');
INSERT INTO world VALUES ('Finland', 'Europe', 338424, 5545475, 305689000000, 'Helsinki');
INSERT INTO world VALUES ('France', 'Europe', 640679, 67848156, 3049016000000, 'Paris');
INSERT INTO world VALUES ('Germany', 'Europe', 357114, 83294633, 4430172000000, 'Berlin');
INSERT INTO world VALUES ('Ghana', 'Africa', 238533, 33475870, 72843000000, 'Accra');
INSERT INTO world VALUES ('Greece', 'Europe', 131957, 10341277, 239300000000, 'Athens');
INSERT INTO world VALUES ('Guatemala', 'North America', 108889, 17602431, 102765000000, 'Guatemala City');
INSERT INTO world VALUES ('Hungary', 'Europe', 93028, 9597085, 203828000000, 'Budapest');
INSERT INTO world VALUES ('Iceland', 'Europe', 103000, 375318, 31020000000, 'Reykjavik');
INSERT INTO world VALUES ('India', 'Asia', 3287263, 1428627663, 3732224000000, 'New Delhi');
INSERT INTO world VALUES ('Indonesia', 'Asia', 1904569, 277534122, 1417387000000, 'Jakarta');
INSERT INTO world VALUES ('Iran', 'Asia', 1648195, 88550922, 367970000000, 'Tehran');
INSERT INTO world VALUES ('Iraq', 'Asia', 438317, 44496122, 254990000000, 'Baghdad');
INSERT INTO world VALUES ('Ireland', 'Europe', 70273, 5056935, 545629000000, 'Dublin');
INSERT INTO world VALUES ('Israel', 'Asia', 20770, 9174520, 525004000000, 'Jerusalem');
INSERT INTO world VALUES ('Italy', 'Europe', 301336, 58761146, 2186082000000, 'Rome');
INSERT INTO world VALUES ('Jamaica', 'North America', 10991, 2825544, 17094000000, 'Kingston');
INSERT INTO world VALUES ('Japan', 'Asia', 377975, 123294513, 4230862000000, 'Tokyo');
INSERT INTO world VALUES ('Jordan', 'Asia', 89342, 11337052, 49435000000, 'Amman');
INSERT INTO world VALUES ('Kazakhstan', 'Asia', 2724900, 19621000, 259292000000, 'Astana');
INSERT INTO world VALUES ('Kenya', 'Africa', 580367, 55100586, 113420000000, 'Nairobi');
INSERT INTO world VALUES ('Kuwait', 'Asia', 17818, 4310108, 161773000000, 'Kuwait City');
INSERT INTO world VALUES ('Latvia', 'Europe', 64559, 1830211, 41091000000, 'Riga');
INSERT INTO world VALUES ('Lebanon', 'Asia', 10400, 5489739, 17940000000, 'Beirut');
INSERT INTO world VALUES ('Libya', 'Africa', 1759540, 6888388, 50492000000, 'Tripoli');
INSERT INTO world VALUES ('Lithuania', 'Europe', 65300, 2718352, 75547000000, 'Vilnius');
INSERT INTO world VALUES ('Luxembourg', 'Europe', 2586, 654768, 87266000000, 'Luxembourg');
INSERT INTO world VALUES ('Madagascar', 'Africa', 587041, 30325732, 14472000000, 'Antananarivo');
INSERT INTO world VALUES ('Malaysia', 'Asia', 329847, 33938221, 399649000000, 'Kuala Lumpur');
INSERT INTO world VALUES ('Mali', 'Africa', 1240192, 23293698, 18827000000, 'Bamako');
INSERT INTO world VALUES ('Mexico', 'North America', 1964375, 128455567, 1414187000000, 'Mexico City');
INSERT INTO world VALUES ('Mongolia', 'Asia', 1564110, 3447157, 18101000000, 'Ulaanbaatar');
INSERT INTO world VALUES ('Morocco', 'Africa', 446550, 37457971, 141109000000, 'Rabat');
INSERT INTO world VALUES ('Mozambique', 'Africa', 801590, 33897354, 17877000000, 'Maputo');
INSERT INTO world VALUES ('Myanmar', 'Asia', 676578, 54179306, 59451000000, 'Naypyidaw');
INSERT INTO world VALUES ('Namibia', 'Africa', 825615, 2604172, 12355000000, 'Windhoek');
INSERT INTO world VALUES ('Nepal', 'Asia', 147181, 30896590, 40828000000, 'Kathmandu');
INSERT INTO world VALUES ('Netherlands', 'Europe', 41543, 17618299, 1092748000000, 'Amsterdam');
INSERT INTO world VALUES ('New Zealand', 'Oceania', 268838, 5228100, 249886000000, 'Wellington');
INSERT INTO world VALUES ('Nigeria', 'Africa', 923768, 223804632, 472620000000, 'Abuja');
INSERT INTO world VALUES ('North Korea', 'Asia', 120538, 26160821, 18000000000, 'Pyongyang');
INSERT INTO world VALUES ('Norway', 'Europe', 323802, 5474360, 546768000000, 'Oslo');
INSERT INTO world VALUES ('Oman', 'Asia', 309500, 4644384, 104902000000, 'Muscat');
INSERT INTO world VALUES ('Pakistan', 'Asia', 881913, 240485658, 338237000000, 'Islamabad');
INSERT INTO world VALUES ('Panama', 'North America', 75417, 4468087, 76522000000, 'Panama City');
INSERT INTO world VALUES ('Papua New Guinea', 'Oceania', 462840, 10329931, 30606000000, 'Port Moresby');
INSERT INTO world VALUES ('Paraguay', 'South America', 406752, 6861524, 43989000000, 'Asuncion');
INSERT INTO world VALUES ('Peru', 'South America', 1285216, 34352719, 268236000000, 'Lima');
INSERT INTO world VALUES ('Philippines', 'Asia', 300000, 117337368, 435675000000, 'Manila');
INSERT INTO world VALUES ('Poland', 'Europe', 312696, 36753736, 811229000000, 'Warsaw');
INSERT INTO world VALUES ('Portugal', 'Europe', 92212, 10247605, 287080000000, 'Lisbon');
INSERT INTO world VALUES ('Qatar', 'Asia', 11586, 2716391, 219570000000, 'Doha');
INSERT INTO world VALUES ('Romania', 'Europe', 238391, 19051562, 350414000000, 'Bucharest');
INSERT INTO world VALUES ('Russia', 'Europe', 17098242, 144236933, 1862470000000, 'Moscow');
INSERT INTO world VALUES ('Rwanda', 'Africa', 26338, 14094683, 13312000000, 'Kigali');
INSERT INTO world VALUES ('Saudi Arabia', 'Asia', 2149690, 36947025, 1061902000000, 'Riyadh');
INSERT INTO world VALUES ('Senegal', 'Africa', 196722, 17763163, 27624000000, 'Dakar');
INSERT INTO world VALUES ('Serbia', 'Europe', 77474, 6736515, 75175000000, 'Belgrade');
INSERT INTO world VALUES ('Singapore', 'Asia', 728, 5917648, 497344000000, 'Singapore');
INSERT INTO world VALUES ('Slovakia', 'Europe', 49037, 5428792, 127533000000, 'Bratislava');
INSERT INTO world VALUES ('Slovenia', 'Europe', 20273, 2119675, 68217000000, 'Ljubljana');
INSERT INTO world VALUES ('Somalia', 'Africa', 637657, 18143378, 8128000000, 'Mogadishu');
INSERT INTO world VALUES ('South Africa', 'Africa', 1219090, 60414495, 377782000000, 'Pretoria');
INSERT INTO world VALUES ('South Korea', 'Asia', 100210, 51784059, 1709232000000, 'Seoul');
INSERT INTO world VALUES ('South Sudan', 'Africa', 619745, 11088796, 4458000000, 'Juba');
INSERT INTO world VALUES ('Spain', 'Europe', 505992, 47519628, 1580694000000, 'Madrid');
INSERT INTO world VALUES ('Sri Lanka', 'Asia', 65610, 22037000, 84519000000, 'Colombo');
INSERT INTO world VALUES ('Sudan', 'Africa', 1861484, 48109006, 34326000000, 'Khartoum');
INSERT INTO world VALUES ('Sweden', 'Europe', 450295, 10612086, 597110000000, 'Stockholm');
INSERT INTO world VALUES ('Switzerland', 'Europe', 41284, 8796669, 905684000000, 'Bern');
INSERT INTO world VALUES ('Syria', 'Asia', 185180, 22933531, 11000000000, 'Damascus');
INSERT INTO world VALUES ('Taiwan', 'Asia', 36193, 23923276, 790728000000, 'Taipei');
INSERT INTO world VALUES ('Tanzania', 'Africa', 945087, 65497748, 79158000000, 'Dodoma');
INSERT INTO world VALUES ('Thailand', 'Asia', 513120, 71801279, 574231000000, 'Bangkok');
INSERT INTO world VALUES ('Tunisia', 'Africa', 163610, 12458223, 46417000000, 'Tunis');
INSERT INTO world VALUES ('Turkey', 'Asia', 783562, 85279553, 1108027000000, 'Ankara');
INSERT INTO world VALUES ('Uganda', 'Africa', 241550, 48582334, 49271000000, 'Kampala');
INSERT INTO world VALUES ('Ukraine', 'Europe', 603500, 36744634, 178757000000, 'Kyiv');
INSERT INTO world VALUES ('United Arab Emirates', 'Asia', 83600, 9516871, 507535000000, 'Abu Dhabi');
INSERT INTO world VALUES ('United Kingdom', 'Europe', 242495, 67736802, 3332059000000, 'London');
INSERT INTO world VALUES ('United States', 'North America', 9833520, 339996563, 27360935000000, 'Washington D.C.');
INSERT INTO world VALUES ('Uruguay', 'South America', 176215, 3423108, 77241000000, 'Montevideo');
INSERT INTO world VALUES ('Uzbekistan', 'Asia', 447400, 35163944, 90891000000, 'Tashkent');
INSERT INTO world VALUES ('Venezuela', 'South America', 912050, 28838499, 98714000000, 'Caracas');
INSERT INTO world VALUES ('Vietnam', 'Asia', 331212, 99462000, 449090000000, 'Hanoi');
INSERT INTO world VALUES ('Yemen', 'Asia', 527968, 34449825, 21606000000, 'Sanaa');
INSERT INTO world VALUES ('Zambia', 'Africa', 752612, 20569737, 28538000000, 'Lusaka');
INSERT INTO world VALUES ('Zimbabwe', 'Africa', 390757, 16665409, 22297000000, 'Harare');
`,

  nobel: `
CREATE TABLE nobel (
  yr INTEGER,
  subject TEXT,
  winner TEXT
);

INSERT INTO nobel VALUES (1901, 'Physics', 'Wilhelm Conrad Rontgen');
INSERT INTO nobel VALUES (1901, 'Chemistry', 'Jacobus Henricus van ''t Hoff');
INSERT INTO nobel VALUES (1901, 'Medicine', 'Emil von Behring');
INSERT INTO nobel VALUES (1901, 'Literature', 'Sully Prudhomme');
INSERT INTO nobel VALUES (1901, 'Peace', 'Henry Dunant');
INSERT INTO nobel VALUES (1901, 'Peace', 'Frederic Passy');
INSERT INTO nobel VALUES (1902, 'Physics', 'Hendrik Antoon Lorentz');
INSERT INTO nobel VALUES (1902, 'Physics', 'Pieter Zeeman');
INSERT INTO nobel VALUES (1902, 'Chemistry', 'Hermann Emil Fischer');
INSERT INTO nobel VALUES (1902, 'Medicine', 'Ronald Ross');
INSERT INTO nobel VALUES (1902, 'Literature', 'Theodor Mommsen');
INSERT INTO nobel VALUES (1902, 'Peace', 'Elie Ducommun');
INSERT INTO nobel VALUES (1902, 'Peace', 'Charles Albert Gobat');
INSERT INTO nobel VALUES (1903, 'Physics', 'Henri Becquerel');
INSERT INTO nobel VALUES (1903, 'Physics', 'Pierre Curie');
INSERT INTO nobel VALUES (1903, 'Physics', 'Marie Curie');
INSERT INTO nobel VALUES (1903, 'Chemistry', 'Svante Arrhenius');
INSERT INTO nobel VALUES (1903, 'Medicine', 'Niels Ryberg Finsen');
INSERT INTO nobel VALUES (1903, 'Literature', 'Bjornstjerne Bjornson');
INSERT INTO nobel VALUES (1903, 'Peace', 'Randal Cremer');
INSERT INTO nobel VALUES (1905, 'Physics', 'Philipp Lenard');
INSERT INTO nobel VALUES (1905, 'Peace', 'Bertha von Suttner');
INSERT INTO nobel VALUES (1906, 'Physics', 'J.J. Thomson');
INSERT INTO nobel VALUES (1906, 'Peace', 'Theodore Roosevelt');
INSERT INTO nobel VALUES (1908, 'Physics', 'Gabriel Lippmann');
INSERT INTO nobel VALUES (1908, 'Chemistry', 'Ernest Rutherford');
INSERT INTO nobel VALUES (1910, 'Literature', 'Paul Heyse');
INSERT INTO nobel VALUES (1911, 'Chemistry', 'Marie Curie');
INSERT INTO nobel VALUES (1911, 'Peace', 'Tobias Asser');
INSERT INTO nobel VALUES (1911, 'Peace', 'Alfred Hermann Fried');
INSERT INTO nobel VALUES (1913, 'Literature', 'Rabindranath Tagore');
INSERT INTO nobel VALUES (1918, 'Physics', 'Max Planck');
INSERT INTO nobel VALUES (1919, 'Physics', 'Johannes Stark');
INSERT INTO nobel VALUES (1921, 'Physics', 'Albert Einstein');
INSERT INTO nobel VALUES (1921, 'Chemistry', 'Frederick Soddy');
INSERT INTO nobel VALUES (1922, 'Physics', 'Niels Bohr');
INSERT INTO nobel VALUES (1922, 'Literature', 'Jacinto Benavente');
INSERT INTO nobel VALUES (1923, 'Physics', 'Robert Andrews Millikan');
INSERT INTO nobel VALUES (1925, 'Literature', 'George Bernard Shaw');
INSERT INTO nobel VALUES (1926, 'Physics', 'Jean Baptiste Perrin');
INSERT INTO nobel VALUES (1927, 'Physics', 'Arthur Holly Compton');
INSERT INTO nobel VALUES (1929, 'Physics', 'Louis de Broglie');
INSERT INTO nobel VALUES (1929, 'Literature', 'Thomas Mann');
INSERT INTO nobel VALUES (1930, 'Physics', 'Sir Chandrasekhara Venkata Raman');
INSERT INTO nobel VALUES (1932, 'Physics', 'Werner Heisenberg');
INSERT INTO nobel VALUES (1933, 'Physics', 'Erwin Schrodinger');
INSERT INTO nobel VALUES (1933, 'Physics', 'Paul Dirac');
INSERT INTO nobel VALUES (1935, 'Chemistry', 'Frederic Joliot');
INSERT INTO nobel VALUES (1935, 'Chemistry', 'Irene Joliot-Curie');
INSERT INTO nobel VALUES (1935, 'Peace', 'Carl von Ossietzky');
INSERT INTO nobel VALUES (1936, 'Physics', 'Victor Franz Hess');
INSERT INTO nobel VALUES (1938, 'Physics', 'Enrico Fermi');
INSERT INTO nobel VALUES (1938, 'Literature', 'Pearl Buck');
INSERT INTO nobel VALUES (1945, 'Medicine', 'Alexander Fleming');
INSERT INTO nobel VALUES (1945, 'Medicine', 'Ernst Boris Chain');
INSERT INTO nobel VALUES (1945, 'Medicine', 'Sir Howard Florey');
INSERT INTO nobel VALUES (1948, 'Literature', 'T.S. Eliot');
INSERT INTO nobel VALUES (1949, 'Physics', 'Hideki Yukawa');
INSERT INTO nobel VALUES (1950, 'Literature', 'Bertrand Russell');
INSERT INTO nobel VALUES (1952, 'Peace', 'Albert Schweitzer');
INSERT INTO nobel VALUES (1953, 'Medicine', 'Hans Krebs');
INSERT INTO nobel VALUES (1953, 'Literature', 'Winston Churchill');
INSERT INTO nobel VALUES (1954, 'Physics', 'Max Born');
INSERT INTO nobel VALUES (1954, 'Peace', 'Office of the United Nations High Commissioner for Refugees');
INSERT INTO nobel VALUES (1957, 'Literature', 'Albert Camus');
INSERT INTO nobel VALUES (1958, 'Medicine', 'Joshua Lederberg');
INSERT INTO nobel VALUES (1960, 'Medicine', 'Sir Frank Macfarlane Burnet');
INSERT INTO nobel VALUES (1960, 'Medicine', 'Peter Medawar');
INSERT INTO nobel VALUES (1962, 'Physics', 'Lev Landau');
INSERT INTO nobel VALUES (1962, 'Medicine', 'Francis Crick');
INSERT INTO nobel VALUES (1962, 'Medicine', 'James Watson');
INSERT INTO nobel VALUES (1962, 'Medicine', 'Maurice Wilkins');
INSERT INTO nobel VALUES (1962, 'Literature', 'John Steinbeck');
INSERT INTO nobel VALUES (1964, 'Peace', 'Martin Luther King Jr.');
INSERT INTO nobel VALUES (1965, 'Physics', 'Richard Feynman');
INSERT INTO nobel VALUES (1965, 'Physics', 'Sin-Itiro Tomonaga');
INSERT INTO nobel VALUES (1968, 'Peace', 'Rene Cassin');
INSERT INTO nobel VALUES (1969, 'Economics', 'Ragnar Frisch');
INSERT INTO nobel VALUES (1969, 'Economics', 'Jan Tinbergen');
INSERT INTO nobel VALUES (1969, 'Literature', 'Samuel Beckett');
INSERT INTO nobel VALUES (1970, 'Economics', 'Paul Samuelson');
INSERT INTO nobel VALUES (1970, 'Literature', 'Aleksandr Solzhenitsyn');
INSERT INTO nobel VALUES (1973, 'Economics', 'Wassily Leontief');
INSERT INTO nobel VALUES (1973, 'Peace', 'Henry Kissinger');
INSERT INTO nobel VALUES (1973, 'Peace', 'Le Duc Tho');
INSERT INTO nobel VALUES (1975, 'Economics', 'Leonid Kantorovich');
INSERT INTO nobel VALUES (1976, 'Economics', 'Milton Friedman');
INSERT INTO nobel VALUES (1978, 'Economics', 'Herbert A. Simon');
INSERT INTO nobel VALUES (1978, 'Peace', 'Anwar al-Sadat');
INSERT INTO nobel VALUES (1978, 'Peace', 'Menachem Begin');
INSERT INTO nobel VALUES (1979, 'Peace', 'Mother Teresa');
INSERT INTO nobel VALUES (1979, 'Physics', 'Sheldon Glashow');
INSERT INTO nobel VALUES (1979, 'Physics', 'Abdus Salam');
INSERT INTO nobel VALUES (1979, 'Physics', 'Steven Weinberg');
INSERT INTO nobel VALUES (1980, 'Literature', 'Czeslaw Milosz');
INSERT INTO nobel VALUES (1982, 'Literature', 'Gabriel Garcia Marquez');
INSERT INTO nobel VALUES (1983, 'Economics', 'Gerard Debreu');
INSERT INTO nobel VALUES (1984, 'Peace', 'Desmond Tutu');
INSERT INTO nobel VALUES (1986, 'Literature', 'Wole Soyinka');
INSERT INTO nobel VALUES (1986, 'Peace', 'Elie Wiesel');
INSERT INTO nobel VALUES (1988, 'Peace', 'United Nations Peacekeeping Forces');
INSERT INTO nobel VALUES (1989, 'Peace', 'The 14th Dalai Lama');
INSERT INTO nobel VALUES (1990, 'Peace', 'Mikhail Gorbachev');
INSERT INTO nobel VALUES (1991, 'Peace', 'Aung San Suu Kyi');
INSERT INTO nobel VALUES (1993, 'Peace', 'Nelson Mandela');
INSERT INTO nobel VALUES (1993, 'Peace', 'F.W. de Klerk');
INSERT INTO nobel VALUES (1993, 'Literature', 'Toni Morrison');
INSERT INTO nobel VALUES (1994, 'Economics', 'John Nash');
INSERT INTO nobel VALUES (1994, 'Peace', 'Yasser Arafat');
INSERT INTO nobel VALUES (1994, 'Peace', 'Shimon Peres');
INSERT INTO nobel VALUES (1994, 'Peace', 'Yitzhak Rabin');
INSERT INTO nobel VALUES (1999, 'Chemistry', 'Ahmed Zewail');
INSERT INTO nobel VALUES (1999, 'Economics', 'Robert Mundell');
INSERT INTO nobel VALUES (2000, 'Literature', 'Gao Xingjian');
INSERT INTO nobel VALUES (2001, 'Economics', 'Joseph Stiglitz');
INSERT INTO nobel VALUES (2001, 'Peace', 'United Nations');
INSERT INTO nobel VALUES (2001, 'Peace', 'Kofi Annan');
INSERT INTO nobel VALUES (2002, 'Economics', 'Daniel Kahneman');
INSERT INTO nobel VALUES (2004, 'Literature', 'Elfriede Jelinek');
INSERT INTO nobel VALUES (2005, 'Literature', 'Harold Pinter');
INSERT INTO nobel VALUES (2005, 'Peace', 'International Atomic Energy Agency');
INSERT INTO nobel VALUES (2005, 'Peace', 'Mohamed ElBaradei');
INSERT INTO nobel VALUES (2006, 'Peace', 'Muhammad Yunus');
INSERT INTO nobel VALUES (2006, 'Literature', 'Orhan Pamuk');
INSERT INTO nobel VALUES (2007, 'Peace', 'Al Gore');
INSERT INTO nobel VALUES (2007, 'Peace', 'Intergovernmental Panel on Climate Change');
INSERT INTO nobel VALUES (2008, 'Economics', 'Paul Krugman');
INSERT INTO nobel VALUES (2009, 'Peace', 'Barack Obama');
INSERT INTO nobel VALUES (2010, 'Literature', 'Mario Vargas Llosa');
INSERT INTO nobel VALUES (2010, 'Peace', 'Liu Xiaobo');
INSERT INTO nobel VALUES (2012, 'Medicine', 'Sir John B. Gurdon');
INSERT INTO nobel VALUES (2012, 'Medicine', 'Shinya Yamanaka');
INSERT INTO nobel VALUES (2012, 'Peace', 'European Union');
INSERT INTO nobel VALUES (2013, 'Physics', 'Peter Higgs');
INSERT INTO nobel VALUES (2013, 'Physics', 'Francois Englert');
INSERT INTO nobel VALUES (2013, 'Peace', 'Organisation for the Prohibition of Chemical Weapons');
INSERT INTO nobel VALUES (2014, 'Peace', 'Kailash Satyarthi');
INSERT INTO nobel VALUES (2014, 'Peace', 'Malala Yousafzai');
INSERT INTO nobel VALUES (2016, 'Literature', 'Bob Dylan');
INSERT INTO nobel VALUES (2017, 'Literature', 'Kazuo Ishiguro');
INSERT INTO nobel VALUES (2017, 'Peace', 'International Campaign to Abolish Nuclear Weapons');
INSERT INTO nobel VALUES (2017, 'Economics', 'Richard Thaler');
INSERT INTO nobel VALUES (2018, 'Peace', 'Denis Mukwege');
INSERT INTO nobel VALUES (2018, 'Peace', 'Nadia Murad');
INSERT INTO nobel VALUES (2018, 'Economics', 'William Nordhaus');
INSERT INTO nobel VALUES (2018, 'Economics', 'Paul Romer');
INSERT INTO nobel VALUES (2019, 'Economics', 'Abhijit Banerjee');
INSERT INTO nobel VALUES (2019, 'Economics', 'Esther Duflo');
INSERT INTO nobel VALUES (2019, 'Economics', 'Michael Kremer');
INSERT INTO nobel VALUES (2019, 'Chemistry', 'John B. Goodenough');
INSERT INTO nobel VALUES (2019, 'Chemistry', 'M. Stanley Whittingham');
INSERT INTO nobel VALUES (2019, 'Chemistry', 'Akira Yoshino');
INSERT INTO nobel VALUES (2020, 'Physics', 'Roger Penrose');
INSERT INTO nobel VALUES (2020, 'Physics', 'Reinhard Genzel');
INSERT INTO nobel VALUES (2020, 'Physics', 'Andrea Ghez');
INSERT INTO nobel VALUES (2020, 'Chemistry', 'Emmanuelle Charpentier');
INSERT INTO nobel VALUES (2020, 'Chemistry', 'Jennifer Doudna');
INSERT INTO nobel VALUES (2020, 'Peace', 'World Food Programme');
INSERT INTO nobel VALUES (2021, 'Physics', 'Syukuro Manabe');
INSERT INTO nobel VALUES (2021, 'Physics', 'Klaus Hasselmann');
INSERT INTO nobel VALUES (2021, 'Peace', 'Maria Ressa');
INSERT INTO nobel VALUES (2021, 'Peace', 'Dmitry Muratov');
INSERT INTO nobel VALUES (2021, 'Economics', 'David Card');
INSERT INTO nobel VALUES (2022, 'Physics', 'Alain Aspect');
INSERT INTO nobel VALUES (2022, 'Physics', 'John F. Clauser');
INSERT INTO nobel VALUES (2022, 'Physics', 'Anton Zeilinger');
INSERT INTO nobel VALUES (2022, 'Peace', 'Ales Bialiatski');
INSERT INTO nobel VALUES (2022, 'Peace', 'Memorial');
INSERT INTO nobel VALUES (2022, 'Peace', 'Center for Civil Liberties');
INSERT INTO nobel VALUES (2022, 'Economics', 'Ben Bernanke');
INSERT INTO nobel VALUES (2023, 'Physics', 'Pierre Agostini');
INSERT INTO nobel VALUES (2023, 'Physics', 'Ferenc Krausz');
INSERT INTO nobel VALUES (2023, 'Physics', 'Anne L''Huillier');
INSERT INTO nobel VALUES (2023, 'Chemistry', 'Moungi Bawendi');
INSERT INTO nobel VALUES (2023, 'Chemistry', 'Louis Brus');
INSERT INTO nobel VALUES (2023, 'Chemistry', 'Alexei Ekimov');
INSERT INTO nobel VALUES (2023, 'Medicine', 'Katalin Kariko');
INSERT INTO nobel VALUES (2023, 'Medicine', 'Drew Weissman');
INSERT INTO nobel VALUES (2023, 'Peace', 'Narges Mohammadi');
INSERT INTO nobel VALUES (2023, 'Economics', 'Claudia Goldin');
INSERT INTO nobel VALUES (2023, 'Literature', 'Jon Fosse');
`,

  football: `
CREATE TABLE eteam (
  id TEXT PRIMARY KEY,
  teamname TEXT,
  coach TEXT
);

CREATE TABLE game (
  id INTEGER PRIMARY KEY,
  mdate TEXT,
  stadium TEXT,
  team1 TEXT,
  team2 TEXT
);

CREATE TABLE goal (
  matchid INTEGER,
  teamid TEXT,
  player TEXT,
  gtime INTEGER
);

INSERT INTO eteam VALUES ('POL', 'Poland', 'Franciszek Smuda');
INSERT INTO eteam VALUES ('GRE', 'Greece', 'Fernando Santos');
INSERT INTO eteam VALUES ('RUS', 'Russia', 'Dick Advocaat');
INSERT INTO eteam VALUES ('CZE', 'Czech Republic', 'Michal Bilek');
INSERT INTO eteam VALUES ('NED', 'Netherlands', 'Bert van Marwijk');
INSERT INTO eteam VALUES ('DEN', 'Denmark', 'Morten Olsen');
INSERT INTO eteam VALUES ('GER', 'Germany', 'Joachim Low');
INSERT INTO eteam VALUES ('POR', 'Portugal', 'Paulo Bento');
INSERT INTO eteam VALUES ('ESP', 'Spain', 'Vicente del Bosque');
INSERT INTO eteam VALUES ('ITA', 'Italy', 'Cesare Prandelli');
INSERT INTO eteam VALUES ('IRL', 'Republic of Ireland', 'Giovanni Trapattoni');
INSERT INTO eteam VALUES ('CRO', 'Croatia', 'Slaven Bilic');
INSERT INTO eteam VALUES ('UKR', 'Ukraine', 'Oleh Blokhin');
INSERT INTO eteam VALUES ('SWE', 'Sweden', 'Erik Hamren');
INSERT INTO eteam VALUES ('FRA', 'France', 'Laurent Blanc');
INSERT INTO eteam VALUES ('ENG', 'England', 'Roy Hodgson');

INSERT INTO game VALUES (1001, '8 June 2012', 'National Stadium, Warsaw', 'POL', 'GRE');
INSERT INTO game VALUES (1002, '8 June 2012', 'Stadion Miejski (Wroclaw)', 'RUS', 'CZE');
INSERT INTO game VALUES (1003, '12 June 2012', 'Stadion Miejski (Wroclaw)', 'GRE', 'CZE');
INSERT INTO game VALUES (1004, '12 June 2012', 'National Stadium, Warsaw', 'POL', 'RUS');
INSERT INTO game VALUES (1005, '16 June 2012', 'Stadion Miejski (Wroclaw)', 'CZE', 'POL');
INSERT INTO game VALUES (1006, '16 June 2012', 'National Stadium, Warsaw', 'GRE', 'RUS');
INSERT INTO game VALUES (1007, '9 June 2012', 'Metalist Stadium', 'NED', 'DEN');
INSERT INTO game VALUES (1008, '9 June 2012', 'Arena Lviv', 'GER', 'POR');
INSERT INTO game VALUES (1009, '13 June 2012', 'Arena Lviv', 'DEN', 'POR');
INSERT INTO game VALUES (1010, '13 June 2012', 'Metalist Stadium', 'NED', 'GER');
INSERT INTO game VALUES (1011, '17 June 2012', 'Metalist Stadium', 'POR', 'NED');
INSERT INTO game VALUES (1012, '17 June 2012', 'Arena Lviv', 'DEN', 'GER');
INSERT INTO game VALUES (1013, '10 June 2012', 'PGE Arena Gdansk', 'ESP', 'ITA');
INSERT INTO game VALUES (1014, '10 June 2012', 'Municipal Stadium (Poznan)', 'IRL', 'CRO');
INSERT INTO game VALUES (1015, '14 June 2012', 'PGE Arena Gdansk', 'ESP', 'IRL');
INSERT INTO game VALUES (1016, '14 June 2012', 'Municipal Stadium (Poznan)', 'ITA', 'CRO');
INSERT INTO game VALUES (1017, '18 June 2012', 'PGE Arena Gdansk', 'CRO', 'ESP');
INSERT INTO game VALUES (1018, '18 June 2012', 'Municipal Stadium (Poznan)', 'ITA', 'IRL');
INSERT INTO game VALUES (1019, '11 June 2012', 'Donbass Arena', 'FRA', 'ENG');
INSERT INTO game VALUES (1020, '11 June 2012', 'Olympic Stadium (Kyiv)', 'UKR', 'SWE');
INSERT INTO game VALUES (1021, '15 June 2012', 'Donbass Arena', 'UKR', 'FRA');
INSERT INTO game VALUES (1022, '15 June 2012', 'Olympic Stadium (Kyiv)', 'SWE', 'ENG');
INSERT INTO game VALUES (1023, '19 June 2012', 'Donbass Arena', 'ENG', 'UKR');
INSERT INTO game VALUES (1024, '19 June 2012', 'Olympic Stadium (Kyiv)', 'SWE', 'FRA');

INSERT INTO goal VALUES (1001, 'POL', 'Robert Lewandowski', 17);
INSERT INTO goal VALUES (1001, 'GRE', 'Dimitris Salpingidis', 51);
INSERT INTO goal VALUES (1002, 'RUS', 'Alan Dzagoev', 15);
INSERT INTO goal VALUES (1002, 'RUS', 'Alan Dzagoev', 79);
INSERT INTO goal VALUES (1002, 'RUS', 'Roman Shirokov', 24);
INSERT INTO goal VALUES (1002, 'RUS', 'Roman Pavlyuchenko', 82);
INSERT INTO goal VALUES (1002, 'CZE', 'Vaclav Pilar', 52);
INSERT INTO goal VALUES (1003, 'GRE', 'Theofanis Gekas', 53);
INSERT INTO goal VALUES (1003, 'CZE', 'Petr Jiracek', 3);
INSERT INTO goal VALUES (1003, 'CZE', 'Vaclav Pilar', 6);
INSERT INTO goal VALUES (1004, 'POL', 'Jakub Blaszczykowski', 57);
INSERT INTO goal VALUES (1004, 'RUS', 'Alan Dzagoev', 37);
INSERT INTO goal VALUES (1005, 'CZE', 'Petr Jiracek', 72);
INSERT INTO goal VALUES (1006, 'GRE', 'Giorgos Karagounis', 45);
INSERT INTO goal VALUES (1007, 'DEN', 'Michael Krohn-Dehli', 24);
INSERT INTO goal VALUES (1008, 'GER', 'Mario Gomez', 72);
INSERT INTO goal VALUES (1009, 'POR', 'Pepe', 24);
INSERT INTO goal VALUES (1009, 'POR', 'Helder Postiga', 36);
INSERT INTO goal VALUES (1009, 'POR', 'Silvestre Varela', 87);
INSERT INTO goal VALUES (1009, 'DEN', 'Michael Krohn-Dehli', 41);
INSERT INTO goal VALUES (1009, 'DEN', 'Nicklas Bendtner', 80);
INSERT INTO goal VALUES (1010, 'NED', 'Robin van Persie', 73);
INSERT INTO goal VALUES (1010, 'GER', 'Mario Gomez', 24);
INSERT INTO goal VALUES (1010, 'GER', 'Mario Gomez', 38);
INSERT INTO goal VALUES (1011, 'POR', 'Cristiano Ronaldo', 28);
INSERT INTO goal VALUES (1011, 'POR', 'Cristiano Ronaldo', 74);
INSERT INTO goal VALUES (1012, 'DEN', 'Michael Krohn-Dehli', 24);
INSERT INTO goal VALUES (1012, 'GER', 'Lukas Podolski', 19);
INSERT INTO goal VALUES (1012, 'GER', 'Lars Bender', 80);
INSERT INTO goal VALUES (1013, 'ESP', 'Cesc Fabregas', 64);
INSERT INTO goal VALUES (1013, 'ITA', 'Antonio Di Natale', 61);
INSERT INTO goal VALUES (1013, 'ESP', 'David Silva', 42);
INSERT INTO goal VALUES (1013, 'ITA', 'Andrea Pirlo', 69);
INSERT INTO goal VALUES (1014, 'CRO', 'Mario Mandzukic', 3);
INSERT INTO goal VALUES (1014, 'IRL', 'Sean St Ledger', 19);
INSERT INTO goal VALUES (1014, 'CRO', 'Mario Mandzukic', 49);
INSERT INTO goal VALUES (1014, 'CRO', 'Nikica Jelavic', 43);
INSERT INTO goal VALUES (1015, 'ESP', 'Fernando Torres', 4);
INSERT INTO goal VALUES (1015, 'ESP', 'David Silva', 49);
INSERT INTO goal VALUES (1015, 'ESP', 'Fernando Torres', 70);
INSERT INTO goal VALUES (1015, 'ESP', 'Cesc Fabregas', 83);
INSERT INTO goal VALUES (1016, 'ITA', 'Andrea Pirlo', 39);
INSERT INTO goal VALUES (1016, 'CRO', 'Mario Mandzukic', 72);
INSERT INTO goal VALUES (1016, 'ITA', 'Mario Balotelli', 85);
INSERT INTO goal VALUES (1017, 'ESP', 'Jesus Navas', 88);
INSERT INTO goal VALUES (1018, 'ITA', 'Antonio Cassano', 35);
INSERT INTO goal VALUES (1018, 'ITA', 'Mario Balotelli', 90);
INSERT INTO goal VALUES (1019, 'FRA', 'Samir Nasri', 39);
INSERT INTO goal VALUES (1019, 'ENG', 'Joleon Lescott', 30);
INSERT INTO goal VALUES (1020, 'UKR', 'Andriy Shevchenko', 55);
INSERT INTO goal VALUES (1020, 'UKR', 'Andriy Shevchenko', 62);
INSERT INTO goal VALUES (1020, 'SWE', 'Zlatan Ibrahimovic', 52);
INSERT INTO goal VALUES (1021, 'UKR', 'Yevhen Khacheridi', 55);
INSERT INTO goal VALUES (1021, 'FRA', 'Jeremy Menez', 53);
INSERT INTO goal VALUES (1022, 'SWE', 'Glen Johnson', 49);
INSERT INTO goal VALUES (1022, 'ENG', 'Andy Carroll', 23);
INSERT INTO goal VALUES (1022, 'ENG', 'Theo Walcott', 64);
INSERT INTO goal VALUES (1022, 'SWE', 'Olof Mellberg', 59);
INSERT INTO goal VALUES (1022, 'SWE', 'Olof Mellberg', 72);
INSERT INTO goal VALUES (1022, 'ENG', 'Danny Welbeck', 78);
INSERT INTO goal VALUES (1023, 'ENG', 'Wayne Rooney', 48);
INSERT INTO goal VALUES (1024, 'SWE', 'Zlatan Ibrahimovic', 54);
INSERT INTO goal VALUES (1024, 'FRA', 'Jeremy Menez', 16);
INSERT INTO goal VALUES (1024, 'SWE', 'Sebastian Larsson', 19);
INSERT INTO goal VALUES (1024, 'FRA', 'Olivier Giroud', 59);
`,

  movie: `
CREATE TABLE actor (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE movie (
  id INTEGER PRIMARY KEY,
  title TEXT,
  yr INTEGER,
  director INTEGER,
  budget REAL,
  gross REAL
);

CREATE TABLE casting (
  movieid INTEGER,
  actorid INTEGER,
  ord INTEGER
);

INSERT INTO actor VALUES (1, 'Orson Welles');
INSERT INTO actor VALUES (2, 'Joseph Cotten');
INSERT INTO actor VALUES (3, 'Humphrey Bogart');
INSERT INTO actor VALUES (4, 'Ingrid Bergman');
INSERT INTO actor VALUES (5, 'Paul Henreid');
INSERT INTO actor VALUES (6, 'Claude Rains');
INSERT INTO actor VALUES (7, 'William Shatner');
INSERT INTO actor VALUES (8, 'Leonard Nimoy');
INSERT INTO actor VALUES (9, 'DeForest Kelley');
INSERT INTO actor VALUES (10, 'Sigourney Weaver');
INSERT INTO actor VALUES (11, 'Tom Skerritt');
INSERT INTO actor VALUES (12, 'Harrison Ford');
INSERT INTO actor VALUES (13, 'Mark Hamill');
INSERT INTO actor VALUES (14, 'Carrie Fisher');
INSERT INTO actor VALUES (15, 'Julie Andrews');
INSERT INTO actor VALUES (16, 'Christopher Plummer');
INSERT INTO actor VALUES (17, 'Dick Van Dyke');
INSERT INTO actor VALUES (18, 'Art Garfunkel');
INSERT INTO actor VALUES (19, 'Jack Nicholson');
INSERT INTO actor VALUES (20, 'Ann-Margret');
INSERT INTO actor VALUES (21, 'Rock Hudson');
INSERT INTO actor VALUES (22, 'Doris Day');
INSERT INTO actor VALUES (23, 'Tony Randall');
INSERT INTO actor VALUES (24, 'James Stewart');
INSERT INTO actor VALUES (25, 'Grace Kelly');
INSERT INTO actor VALUES (26, 'Al Pacino');
INSERT INTO actor VALUES (27, 'Marlon Brando');
INSERT INTO actor VALUES (28, 'James Caan');
INSERT INTO actor VALUES (29, 'Robert Duvall');
INSERT INTO actor VALUES (30, 'Diane Keaton');
INSERT INTO actor VALUES (31, 'Robert De Niro');
INSERT INTO actor VALUES (32, 'Sean Connery');
INSERT INTO actor VALUES (33, 'Ursula Andress');
INSERT INTO actor VALUES (34, 'Roger Moore');
INSERT INTO actor VALUES (35, 'Tim Robbins');
INSERT INTO actor VALUES (36, 'Morgan Freeman');
INSERT INTO actor VALUES (37, 'Tom Hanks');
INSERT INTO actor VALUES (38, 'Robin Wright');
INSERT INTO actor VALUES (39, 'Gary Sinise');
INSERT INTO actor VALUES (40, 'Keanu Reeves');
INSERT INTO actor VALUES (41, 'Laurence Fishburne');
INSERT INTO actor VALUES (42, 'Carrie-Anne Moss');
INSERT INTO actor VALUES (43, 'Liam Neeson');
INSERT INTO actor VALUES (44, 'Ben Kingsley');
INSERT INTO actor VALUES (45, 'Ralph Fiennes');
INSERT INTO actor VALUES (46, 'John Travolta');
INSERT INTO actor VALUES (47, 'Samuel L. Jackson');
INSERT INTO actor VALUES (48, 'Uma Thurman');
INSERT INTO actor VALUES (49, 'Heath Ledger');
INSERT INTO actor VALUES (50, 'Christian Bale');
INSERT INTO actor VALUES (51, 'Leonardo DiCaprio');
INSERT INTO actor VALUES (52, 'Kate Winslet');
INSERT INTO actor VALUES (53, 'Billy Zane');
INSERT INTO actor VALUES (54, 'Vivien Leigh');
INSERT INTO actor VALUES (55, 'Clark Gable');
INSERT INTO actor VALUES (56, 'Olivia de Havilland');
INSERT INTO actor VALUES (57, 'Gregory Peck');
INSERT INTO actor VALUES (58, 'Mary Badham');
INSERT INTO actor VALUES (59, 'Judy Garland');
INSERT INTO actor VALUES (60, 'Frank Morgan');
INSERT INTO actor VALUES (61, 'Sean Astin');
INSERT INTO actor VALUES (62, 'Elijah Wood');
INSERT INTO actor VALUES (63, 'Ian McKellen');
INSERT INTO actor VALUES (64, 'Russell Crowe');
INSERT INTO actor VALUES (65, 'Joaquin Phoenix');
INSERT INTO actor VALUES (66, 'Connie Nielsen');
INSERT INTO actor VALUES (67, 'Patrick Stewart');
INSERT INTO actor VALUES (68, 'Nichelle Nichols');
INSERT INTO actor VALUES (69, 'Walter Koenig');
INSERT INTO actor VALUES (70, 'George Takei');
INSERT INTO actor VALUES (71, 'James Doohan');
INSERT INTO actor VALUES (72, 'Ricardo Montalban');
INSERT INTO actor VALUES (73, 'Kirstie Alley');
INSERT INTO actor VALUES (74, 'Chris Pine');
INSERT INTO actor VALUES (75, 'Zachary Quinto');
INSERT INTO actor VALUES (76, 'Benedict Cumberbatch');
INSERT INTO actor VALUES (77, 'Karen Gillan');
INSERT INTO actor VALUES (78, 'Michael Biehn');
INSERT INTO actor VALUES (79, 'Linda Hamilton');
INSERT INTO actor VALUES (80, 'Arnold Schwarzenegger');
INSERT INTO actor VALUES (81, 'Dorothy McGuire');
INSERT INTO actor VALUES (82, 'Teresa Wright');

INSERT INTO movie VALUES (1001, 'Citizen Kane', 1941, 1, 839727, 1585634);
INSERT INTO movie VALUES (1002, 'Casablanca', 1942, 101, 1039000, 10462500);
INSERT INTO movie VALUES (1003, 'Star Wars: Episode IV - A New Hope', 1977, 102, 11000000, 775398007);
INSERT INTO movie VALUES (1004, 'The Empire Strikes Back', 1980, 103, 18000000, 538375067);
INSERT INTO movie VALUES (1005, 'Return of the Jedi', 1983, 104, 32500000, 475106177);
INSERT INTO movie VALUES (1006, 'Star Trek: The Motion Picture', 1979, 105, 46000000, 139000000);
INSERT INTO movie VALUES (1007, 'Star Trek II: The Wrath of Khan', 1982, 106, 12000000, 97000000);
INSERT INTO movie VALUES (1008, 'Star Trek III: The Search for Spock', 1984, 107, 16000000, 87000000);
INSERT INTO movie VALUES (1009, 'Star Trek IV: The Voyage Home', 1986, 107, 21000000, 133000000);
INSERT INTO movie VALUES (1010, 'Star Trek V: The Final Frontier', 1989, 7, 33000000, 63000000);
INSERT INTO movie VALUES (1011, 'Star Trek VI: The Undiscovered Country', 1991, 106, 27000000, 97000000);
INSERT INTO movie VALUES (1012, 'Alien', 1979, 108, 11000000, 203630630);
INSERT INTO movie VALUES (1013, 'Aliens', 1986, 109, 18500000, 131060248);
INSERT INTO movie VALUES (1014, 'The Sound of Music', 1965, 105, 8200000, 286214076);
INSERT INTO movie VALUES (1015, 'Mary Poppins', 1964, 110, 5200000, 102272727);
INSERT INTO movie VALUES (1016, 'Carnal Knowledge', 1971, 111, 6300000, 14576534);
INSERT INTO movie VALUES (1017, 'Catch-22', 1970, 111, 18000000, 24911670);
INSERT INTO movie VALUES (1018, 'Pillow Talk', 1959, 112, 2025000, 18750000);
INSERT INTO movie VALUES (1019, 'Lover Come Back', 1961, 113, 1800000, 17000000);
INSERT INTO movie VALUES (1020, 'Send Me No Flowers', 1964, 114, 1700000, 11000000);
INSERT INTO movie VALUES (1021, 'Rear Window', 1954, 115, 1000000, 36764313);
INSERT INTO movie VALUES (1022, 'The Godfather', 1972, 116, 6000000, 245066411);
INSERT INTO movie VALUES (1023, 'The Godfather Part II', 1974, 116, 13000000, 57300000);
INSERT INTO movie VALUES (1024, 'Goodfellas', 1990, 117, 25000000, 46836394);
INSERT INTO movie VALUES (1025, 'Dr. No', 1962, 118, 1100000, 59567035);
INSERT INTO movie VALUES (1026, 'The Spy Who Loved Me', 1977, 119, 13500000, 185400000);
INSERT INTO movie VALUES (1027, 'The Shawshank Redemption', 1994, 120, 25000000, 58300000);
INSERT INTO movie VALUES (1028, 'Forrest Gump', 1994, 121, 55000000, 678226133);
INSERT INTO movie VALUES (1029, 'The Matrix', 1999, 122, 63000000, 467222728);
INSERT INTO movie VALUES (1030, 'Schindler''s List', 1993, 123, 22000000, 322161245);
INSERT INTO movie VALUES (1031, 'Pulp Fiction', 1994, 124, 8000000, 213928762);
INSERT INTO movie VALUES (1032, 'The Dark Knight', 2008, 125, 185000000, 1004558444);
INSERT INTO movie VALUES (1033, 'Titanic', 1997, 109, 200000000, 2264162353);
INSERT INTO movie VALUES (1034, 'Gone with the Wind', 1939, 126, 3900000, 402352579);
INSERT INTO movie VALUES (1035, 'To Kill a Mockingbird', 1962, 127, 2000000, 13129846);
INSERT INTO movie VALUES (1036, 'The Wizard of Oz', 1939, 128, 2777000, 23219000);
INSERT INTO movie VALUES (1037, 'The Lord of the Rings: The Return of the King', 2003, 129, 94000000, 1146030912);
INSERT INTO movie VALUES (1038, 'Gladiator', 2000, 108, 103000000, 460583960);
INSERT INTO movie VALUES (1039, 'Star Trek', 2009, 130, 150000000, 385680446);
INSERT INTO movie VALUES (1040, 'Star Trek Into Darkness', 2013, 130, 190000000, 467365246);
INSERT INTO movie VALUES (1041, 'Star Trek Beyond', 2016, 131, 185000000, 343471816);
INSERT INTO movie VALUES (1042, 'Raiders of the Lost Ark', 1981, 123, 20000000, 389925971);
INSERT INTO movie VALUES (1043, 'Indiana Jones and the Temple of Doom', 1984, 123, 28000000, 333107271);
INSERT INTO movie VALUES (1044, 'Indiana Jones and the Last Crusade', 1989, 123, 48000000, 474171806);
INSERT INTO movie VALUES (1045, 'Blade Runner', 1982, 108, 28000000, 41492542);
INSERT INTO movie VALUES (1046, 'The Terminator', 1984, 109, 6400000, 78371200);
INSERT INTO movie VALUES (1047, 'Terminator 2: Judgment Day', 1991, 109, 102000000, 520881154);
INSERT INTO movie VALUES (1048, 'Inception', 2010, 125, 160000000, 836836967);
INSERT INTO movie VALUES (1049, 'The Departed', 2006, 117, 90000000, 291465034);
INSERT INTO movie VALUES (1050, 'Gentleman''s Agreement', 1947, 132, 2000000, 7000000);

INSERT INTO casting VALUES (1001, 1, 1);
INSERT INTO casting VALUES (1001, 2, 2);
INSERT INTO casting VALUES (1002, 3, 1);
INSERT INTO casting VALUES (1002, 4, 2);
INSERT INTO casting VALUES (1002, 5, 3);
INSERT INTO casting VALUES (1002, 6, 4);
INSERT INTO casting VALUES (1003, 12, 1);
INSERT INTO casting VALUES (1003, 13, 2);
INSERT INTO casting VALUES (1003, 14, 3);
INSERT INTO casting VALUES (1004, 12, 1);
INSERT INTO casting VALUES (1004, 13, 2);
INSERT INTO casting VALUES (1004, 14, 3);
INSERT INTO casting VALUES (1005, 12, 1);
INSERT INTO casting VALUES (1005, 13, 2);
INSERT INTO casting VALUES (1005, 14, 3);
INSERT INTO casting VALUES (1006, 7, 1);
INSERT INTO casting VALUES (1006, 8, 2);
INSERT INTO casting VALUES (1006, 9, 3);
INSERT INTO casting VALUES (1006, 68, 4);
INSERT INTO casting VALUES (1006, 70, 5);
INSERT INTO casting VALUES (1006, 71, 6);
INSERT INTO casting VALUES (1006, 69, 7);
INSERT INTO casting VALUES (1007, 7, 1);
INSERT INTO casting VALUES (1007, 8, 2);
INSERT INTO casting VALUES (1007, 9, 3);
INSERT INTO casting VALUES (1007, 72, 4);
INSERT INTO casting VALUES (1007, 73, 5);
INSERT INTO casting VALUES (1008, 7, 1);
INSERT INTO casting VALUES (1008, 8, 2);
INSERT INTO casting VALUES (1008, 9, 3);
INSERT INTO casting VALUES (1008, 71, 4);
INSERT INTO casting VALUES (1009, 7, 1);
INSERT INTO casting VALUES (1009, 8, 2);
INSERT INTO casting VALUES (1009, 9, 3);
INSERT INTO casting VALUES (1009, 70, 4);
INSERT INTO casting VALUES (1010, 7, 1);
INSERT INTO casting VALUES (1010, 8, 2);
INSERT INTO casting VALUES (1010, 9, 3);
INSERT INTO casting VALUES (1011, 7, 1);
INSERT INTO casting VALUES (1011, 8, 2);
INSERT INTO casting VALUES (1011, 9, 3);
INSERT INTO casting VALUES (1012, 10, 1);
INSERT INTO casting VALUES (1012, 11, 2);
INSERT INTO casting VALUES (1012, 12, 3);
INSERT INTO casting VALUES (1013, 10, 1);
INSERT INTO casting VALUES (1013, 78, 2);
INSERT INTO casting VALUES (1014, 15, 1);
INSERT INTO casting VALUES (1014, 16, 2);
INSERT INTO casting VALUES (1015, 15, 1);
INSERT INTO casting VALUES (1015, 17, 2);
INSERT INTO casting VALUES (1016, 19, 1);
INSERT INTO casting VALUES (1016, 20, 2);
INSERT INTO casting VALUES (1016, 18, 3);
INSERT INTO casting VALUES (1017, 19, 7);
INSERT INTO casting VALUES (1017, 18, 5);
INSERT INTO casting VALUES (1017, 1, 6);
INSERT INTO casting VALUES (1018, 21, 1);
INSERT INTO casting VALUES (1018, 22, 2);
INSERT INTO casting VALUES (1018, 23, 3);
INSERT INTO casting VALUES (1019, 21, 1);
INSERT INTO casting VALUES (1019, 22, 2);
INSERT INTO casting VALUES (1019, 23, 3);
INSERT INTO casting VALUES (1020, 21, 1);
INSERT INTO casting VALUES (1020, 22, 2);
INSERT INTO casting VALUES (1020, 23, 3);
INSERT INTO casting VALUES (1021, 24, 1);
INSERT INTO casting VALUES (1021, 25, 2);
INSERT INTO casting VALUES (1022, 27, 1);
INSERT INTO casting VALUES (1022, 26, 2);
INSERT INTO casting VALUES (1022, 28, 3);
INSERT INTO casting VALUES (1022, 29, 4);
INSERT INTO casting VALUES (1022, 30, 5);
INSERT INTO casting VALUES (1023, 26, 1);
INSERT INTO casting VALUES (1023, 31, 2);
INSERT INTO casting VALUES (1023, 29, 3);
INSERT INTO casting VALUES (1023, 30, 4);
INSERT INTO casting VALUES (1024, 31, 1);
INSERT INTO casting VALUES (1024, 26, 9);
INSERT INTO casting VALUES (1025, 32, 1);
INSERT INTO casting VALUES (1025, 33, 2);
INSERT INTO casting VALUES (1026, 34, 1);
INSERT INTO casting VALUES (1027, 35, 1);
INSERT INTO casting VALUES (1027, 36, 2);
INSERT INTO casting VALUES (1028, 37, 1);
INSERT INTO casting VALUES (1028, 38, 2);
INSERT INTO casting VALUES (1028, 39, 3);
INSERT INTO casting VALUES (1029, 40, 1);
INSERT INTO casting VALUES (1029, 41, 2);
INSERT INTO casting VALUES (1029, 42, 3);
INSERT INTO casting VALUES (1030, 43, 1);
INSERT INTO casting VALUES (1030, 44, 2);
INSERT INTO casting VALUES (1030, 45, 3);
INSERT INTO casting VALUES (1031, 46, 1);
INSERT INTO casting VALUES (1031, 47, 2);
INSERT INTO casting VALUES (1031, 48, 3);
INSERT INTO casting VALUES (1032, 50, 1);
INSERT INTO casting VALUES (1032, 49, 2);
INSERT INTO casting VALUES (1032, 36, 3);
INSERT INTO casting VALUES (1033, 51, 1);
INSERT INTO casting VALUES (1033, 52, 2);
INSERT INTO casting VALUES (1033, 53, 3);
INSERT INTO casting VALUES (1034, 54, 1);
INSERT INTO casting VALUES (1034, 55, 2);
INSERT INTO casting VALUES (1034, 56, 3);
INSERT INTO casting VALUES (1035, 57, 1);
INSERT INTO casting VALUES (1035, 58, 2);
INSERT INTO casting VALUES (1036, 59, 1);
INSERT INTO casting VALUES (1036, 60, 2);
INSERT INTO casting VALUES (1037, 62, 1);
INSERT INTO casting VALUES (1037, 63, 2);
INSERT INTO casting VALUES (1037, 61, 3);
INSERT INTO casting VALUES (1038, 64, 1);
INSERT INTO casting VALUES (1038, 65, 2);
INSERT INTO casting VALUES (1038, 66, 3);
INSERT INTO casting VALUES (1039, 74, 1);
INSERT INTO casting VALUES (1039, 75, 2);
INSERT INTO casting VALUES (1039, 8, 3);
INSERT INTO casting VALUES (1040, 74, 1);
INSERT INTO casting VALUES (1040, 75, 2);
INSERT INTO casting VALUES (1040, 76, 3);
INSERT INTO casting VALUES (1041, 74, 1);
INSERT INTO casting VALUES (1041, 75, 2);
INSERT INTO casting VALUES (1041, 77, 3);
INSERT INTO casting VALUES (1042, 12, 1);
INSERT INTO casting VALUES (1042, 77, 9);
INSERT INTO casting VALUES (1043, 12, 1);
INSERT INTO casting VALUES (1044, 12, 1);
INSERT INTO casting VALUES (1044, 32, 2);
INSERT INTO casting VALUES (1045, 12, 1);
INSERT INTO casting VALUES (1046, 80, 1);
INSERT INTO casting VALUES (1046, 79, 2);
INSERT INTO casting VALUES (1046, 78, 3);
INSERT INTO casting VALUES (1047, 80, 1);
INSERT INTO casting VALUES (1047, 79, 2);
INSERT INTO casting VALUES (1048, 51, 1);
INSERT INTO casting VALUES (1049, 51, 1);
INSERT INTO casting VALUES (1049, 19, 2);
INSERT INTO casting VALUES (1050, 57, 1);
INSERT INTO casting VALUES (1050, 81, 2);
INSERT INTO casting VALUES (1050, 82, 4);

INSERT INTO casting VALUES (1012, 78, 7);
INSERT INTO casting VALUES (1003, 24, 9);
INSERT INTO casting VALUES (1003, 1, 10);
INSERT INTO casting VALUES (1028, 47, 9);
INSERT INTO casting VALUES (1038, 29, 7);
INSERT INTO casting VALUES (1044, 12, 1);
INSERT INTO casting VALUES (1022, 12, 8);
INSERT INTO casting VALUES (1032, 47, 7);
INSERT INTO casting VALUES (1024, 47, 7);
`,

  school: `
CREATE TABLE dept (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE teacher (
  id INTEGER PRIMARY KEY,
  dept INTEGER,
  name TEXT,
  phone TEXT,
  mobile TEXT
);

INSERT INTO dept VALUES (1, 'Computing');
INSERT INTO dept VALUES (2, 'Design');
INSERT INTO dept VALUES (3, 'Engineering');

INSERT INTO teacher VALUES (101, 1, 'Shrivell', '2753', '07986 555 1234');
INSERT INTO teacher VALUES (102, 1, 'Throd', '2754', '07122 555 1920');
INSERT INTO teacher VALUES (103, 1, 'Splint', '2293', NULL);
INSERT INTO teacher VALUES (104, NULL, 'Spiregrain', '3287', NULL);
INSERT INTO teacher VALUES (105, 2, 'Cutflower', '3212', '07996 555 6574');
INSERT INTO teacher VALUES (106, NULL, 'Deadyawn', '3345', NULL);
INSERT INTO teacher VALUES (107, 3, 'Paddle', '4478', '07846 555 8823');
INSERT INTO teacher VALUES (108, 2, 'Bitterdew', '3141', '07743 555 4578');
`,

  transport: `
CREATE TABLE stops (
  id INTEGER PRIMARY KEY,
  name TEXT
);

CREATE TABLE route (
  num TEXT,
  company TEXT,
  pos INTEGER,
  stop INTEGER
);

INSERT INTO stops VALUES (1, 'Haymarket');
INSERT INTO stops VALUES (2, 'Princes Street');
INSERT INTO stops VALUES (3, 'Leith Walk');
INSERT INTO stops VALUES (4, 'London Road');
INSERT INTO stops VALUES (5, 'Lochend');
INSERT INTO stops VALUES (6, 'Craiglockhart');
INSERT INTO stops VALUES (7, 'Tollcross');
INSERT INTO stops VALUES (8, 'Morningside');
INSERT INTO stops VALUES (9, 'Fairmilehead');
INSERT INTO stops VALUES (10, 'Colinton');
INSERT INTO stops VALUES (11, 'Oxgangs');
INSERT INTO stops VALUES (12, 'Bruntsfield');
INSERT INTO stops VALUES (13, 'Shandwick Place');
INSERT INTO stops VALUES (14, 'Canonmills');
INSERT INTO stops VALUES (15, 'Granton');
INSERT INTO stops VALUES (16, 'Newhaven');
INSERT INTO stops VALUES (17, 'Stockbridge');
INSERT INTO stops VALUES (18, 'Comely Bank');
INSERT INTO stops VALUES (19, 'Ravelston');
INSERT INTO stops VALUES (20, 'Corstorphine');
INSERT INTO stops VALUES (21, 'Murrayfield');
INSERT INTO stops VALUES (22, 'Dalry');
INSERT INTO stops VALUES (23, 'Gorgie');
INSERT INTO stops VALUES (24, 'Saughton');
INSERT INTO stops VALUES (25, 'Balgreen');
INSERT INTO stops VALUES (26, 'Easter Road');
INSERT INTO stops VALUES (27, 'Abbeyhill');
INSERT INTO stops VALUES (28, 'Meadowbank');
INSERT INTO stops VALUES (29, 'Jock''s Lodge');
INSERT INTO stops VALUES (30, 'Willowbrae');

INSERT INTO route VALUES ('4', 'LRT', 1, 6);
INSERT INTO route VALUES ('4', 'LRT', 2, 7);
INSERT INTO route VALUES ('4', 'LRT', 3, 12);
INSERT INTO route VALUES ('4', 'LRT', 4, 13);
INSERT INTO route VALUES ('4', 'LRT', 5, 1);
INSERT INTO route VALUES ('4', 'LRT', 6, 2);
INSERT INTO route VALUES ('4', 'LRT', 7, 3);
INSERT INTO route VALUES ('4', 'LRT', 8, 4);
INSERT INTO route VALUES ('4', 'LRT', 9, 5);

INSERT INTO route VALUES ('45', 'LRT', 1, 6);
INSERT INTO route VALUES ('45', 'LRT', 2, 7);
INSERT INTO route VALUES ('45', 'LRT', 3, 12);
INSERT INTO route VALUES ('45', 'LRT', 4, 2);
INSERT INTO route VALUES ('45', 'LRT', 5, 27);
INSERT INTO route VALUES ('45', 'LRT', 6, 28);
INSERT INTO route VALUES ('45', 'LRT', 7, 29);
INSERT INTO route VALUES ('45', 'LRT', 8, 30);

INSERT INTO route VALUES ('5', 'LRT', 1, 10);
INSERT INTO route VALUES ('5', 'LRT', 2, 11);
INSERT INTO route VALUES ('5', 'LRT', 3, 8);
INSERT INTO route VALUES ('5', 'LRT', 4, 7);
INSERT INTO route VALUES ('5', 'LRT', 5, 13);
INSERT INTO route VALUES ('5', 'LRT', 6, 1);
INSERT INTO route VALUES ('5', 'LRT', 7, 2);
INSERT INTO route VALUES ('5', 'LRT', 8, 14);
INSERT INTO route VALUES ('5', 'LRT', 9, 15);
INSERT INTO route VALUES ('5', 'LRT', 10, 16);

INSERT INTO route VALUES ('10', 'LRT', 1, 20);
INSERT INTO route VALUES ('10', 'LRT', 2, 21);
INSERT INTO route VALUES ('10', 'LRT', 3, 22);
INSERT INTO route VALUES ('10', 'LRT', 4, 1);
INSERT INTO route VALUES ('10', 'LRT', 5, 2);
INSERT INTO route VALUES ('10', 'LRT', 6, 3);
INSERT INTO route VALUES ('10', 'LRT', 7, 26);
INSERT INTO route VALUES ('10', 'LRT', 8, 4);
INSERT INTO route VALUES ('10', 'LRT', 9, 5);

INSERT INTO route VALUES ('15', 'LRT', 1, 9);
INSERT INTO route VALUES ('15', 'LRT', 2, 8);
INSERT INTO route VALUES ('15', 'LRT', 3, 7);
INSERT INTO route VALUES ('15', 'LRT', 4, 6);
INSERT INTO route VALUES ('15', 'LRT', 5, 13);
INSERT INTO route VALUES ('15', 'LRT', 6, 1);
INSERT INTO route VALUES ('15', 'LRT', 7, 17);
INSERT INTO route VALUES ('15', 'LRT', 8, 18);
INSERT INTO route VALUES ('15', 'LRT', 9, 19);

INSERT INTO route VALUES ('25', 'LRT', 1, 23);
INSERT INTO route VALUES ('25', 'LRT', 2, 24);
INSERT INTO route VALUES ('25', 'LRT', 3, 25);
INSERT INTO route VALUES ('25', 'LRT', 4, 20);
INSERT INTO route VALUES ('25', 'LRT', 5, 21);
INSERT INTO route VALUES ('25', 'LRT', 6, 1);
INSERT INTO route VALUES ('25', 'LRT', 7, 2);
INSERT INTO route VALUES ('25', 'LRT', 8, 14);

INSERT INTO route VALUES ('47', 'LRT', 1, 9);
INSERT INTO route VALUES ('47', 'LRT', 2, 8);
INSERT INTO route VALUES ('47', 'LRT', 3, 12);
INSERT INTO route VALUES ('47', 'LRT', 4, 7);
INSERT INTO route VALUES ('47', 'LRT', 5, 22);
INSERT INTO route VALUES ('47', 'LRT', 6, 23);
INSERT INTO route VALUES ('47', 'LRT', 7, 24);
INSERT INTO route VALUES ('47', 'LRT', 8, 25);
`,

  election: `
CREATE TABLE ge (
  yr INTEGER,
  firstName TEXT,
  lastName TEXT,
  constituency TEXT,
  party TEXT,
  votes INTEGER
);

INSERT INTO ge VALUES (2015, 'Tommy', 'Sheppard', 'S14000021', 'SNP', 21459);
INSERT INTO ge VALUES (2015, 'Sheila', 'Gilmore', 'S14000021', 'LAB', 11672);
INSERT INTO ge VALUES (2015, 'Stephanie', 'Smith', 'S14000021', 'CON', 4916);
INSERT INTO ge VALUES (2015, 'Phyl', 'Meyer', 'S14000021', 'LD', 1978);
INSERT INTO ge VALUES (2015, 'Peter', 'Howden', 'S14000021', 'UKIP', 1081);
INSERT INTO ge VALUES (2015, 'Isla', 'O''Reilly', 'S14000021', 'Green', 1062);

INSERT INTO ge VALUES (2015, 'Joanna', 'Cherry', 'S14000022', 'SNP', 23899);
INSERT INTO ge VALUES (2015, 'Jim', 'Murphy', 'S14000022', 'LAB', 15304);
INSERT INTO ge VALUES (2015, 'Miles', 'Mayall', 'S14000022', 'CON', 5765);
INSERT INTO ge VALUES (2015, 'Pramod', 'Subbaraman', 'S14000022', 'LD', 2013);
INSERT INTO ge VALUES (2015, 'Sarah', 'Beattie-Smith', 'S14000022', 'Green', 891);
INSERT INTO ge VALUES (2015, 'Paul', 'Marshall', 'S14000022', 'UKIP', 601);

INSERT INTO ge VALUES (2015, 'Deidre', 'Brock', 'S14000023', 'SNP', 18509);
INSERT INTO ge VALUES (2015, 'Mark', 'Lazarowicz', 'S14000023', 'LAB', 12196);
INSERT INTO ge VALUES (2015, 'Iain', 'McGill', 'S14000023', 'CON', 5851);
INSERT INTO ge VALUES (2015, 'Fraser', 'Sherring', 'S14000023', 'LD', 2903);
INSERT INTO ge VALUES (2015, 'Sarah', 'Masson', 'S14000023', 'Green', 1070);
INSERT INTO ge VALUES (2015, 'Vincent', 'Waters', 'S14000023', 'UKIP', 509);

INSERT INTO ge VALUES (2015, 'Michelle', 'Thomson', 'S14000024', 'SNP', 19746);
INSERT INTO ge VALUES (2015, 'Alex', 'Cole-Hamilton', 'S14000024', 'LD', 9387);
INSERT INTO ge VALUES (2015, 'Mike', 'Crockart', 'S14000024', 'CON', 5376);
INSERT INTO ge VALUES (2015, 'Cammy', 'Day', 'S14000024', 'LAB', 5072);
INSERT INTO ge VALUES (2015, 'Nigel', 'Bagshaw', 'S14000024', 'Green', 1047);
INSERT INTO ge VALUES (2015, 'Donald', 'Cameron', 'S14000024', 'UKIP', 440);

INSERT INTO ge VALUES (2015, 'Neil', 'Hay', 'S14000025', 'SNP', 20635);
INSERT INTO ge VALUES (2015, 'Ian', 'Murray', 'S14000025', 'LAB', 19293);
INSERT INTO ge VALUES (2015, 'James', 'Rust', 'S14000025', 'CON', 4148);
INSERT INTO ge VALUES (2015, 'Alan', 'Beal', 'S14000025', 'LD', 1851);
INSERT INTO ge VALUES (2015, 'Phyl', 'Meyer', 'S14000025', 'Green', 1155);
INSERT INTO ge VALUES (2015, 'Robert', 'Sobel', 'S14000025', 'UKIP', 633);

INSERT INTO ge VALUES (2015, 'Calum', 'Kerr', 'S14000026', 'SNP', 24025);
INSERT INTO ge VALUES (2015, 'John', 'Lamont', 'S14000026', 'CON', 14894);
INSERT INTO ge VALUES (2015, 'Michael', 'Moore', 'S14000026', 'LD', 8302);
INSERT INTO ge VALUES (2015, 'Kenneth', 'McFadden', 'S14000026', 'LAB', 4535);
INSERT INTO ge VALUES (2015, 'Stuart', 'Sherring', 'S14000026', 'UKIP', 1006);
INSERT INTO ge VALUES (2015, 'Sarah', 'Beattie-Smith', 'S14000026', 'Green', 966);

INSERT INTO ge VALUES (2017, 'Tommy', 'Sheppard', 'S14000021', 'SNP', 17150);
INSERT INTO ge VALUES (2017, 'Patsy', 'King', 'S14000021', 'LAB', 14218);
INSERT INTO ge VALUES (2017, 'Eleanor', 'Price', 'S14000021', 'CON', 9428);
INSERT INTO ge VALUES (2017, 'John', 'Smart', 'S14000021', 'LD', 2579);
INSERT INTO ge VALUES (2017, 'Isla', 'O''Reilly', 'S14000021', 'Green', 872);

INSERT INTO ge VALUES (2017, 'Joanna', 'Cherry', 'S14000022', 'SNP', 17575);
INSERT INTO ge VALUES (2017, 'Lesley', 'Hinds', 'S14000022', 'LAB', 14797);
INSERT INTO ge VALUES (2017, 'Nick', 'Cook', 'S14000022', 'CON', 9821);
INSERT INTO ge VALUES (2017, 'Martin', 'Sheraton', 'S14000022', 'LD', 2124);
INSERT INTO ge VALUES (2017, 'Steve', 'Burgess', 'S14000022', 'Green', 681);

INSERT INTO ge VALUES (2017, 'Deidre', 'Brock', 'S14000023', 'SNP', 15120);
INSERT INTO ge VALUES (2017, 'Will', 'Garrett', 'S14000023', 'LAB', 12458);
INSERT INTO ge VALUES (2017, 'Iain', 'McGill', 'S14000023', 'CON', 11559);
INSERT INTO ge VALUES (2017, 'Mark', 'Brown', 'S14000023', 'LD', 3796);
INSERT INTO ge VALUES (2017, 'Elaine', 'Motion', 'S14000023', 'Green', 677);

INSERT INTO ge VALUES (2017, 'Christine', 'Jardine', 'S14000024', 'LD', 18108);
INSERT INTO ge VALUES (2017, 'Toni', 'Giugliano', 'S14000024', 'SNP', 15120);
INSERT INTO ge VALUES (2017, 'Callum', 'Laidlaw', 'S14000024', 'CON', 6930);
INSERT INTO ge VALUES (2017, 'Cammy', 'Day', 'S14000024', 'LAB', 4135);
INSERT INTO ge VALUES (2017, 'Nigel', 'Bagshaw', 'S14000024', 'Green', 604);

INSERT INTO ge VALUES (2017, 'Ian', 'Murray', 'S14000025', 'LAB', 26269);
INSERT INTO ge VALUES (2017, 'Jim', 'Eadie', 'S14000025', 'SNP', 15632);
INSERT INTO ge VALUES (2017, 'Stephanie', 'Smith', 'S14000025', 'CON', 5765);
INSERT INTO ge VALUES (2017, 'Alan', 'Beal', 'S14000025', 'LD', 2124);
INSERT INTO ge VALUES (2017, 'Phyl', 'Meyer', 'S14000025', 'Green', 811);

INSERT INTO ge VALUES (2017, 'John', 'Lamont', 'S14000026', 'CON', 24231);
INSERT INTO ge VALUES (2017, 'Calum', 'Kerr', 'S14000026', 'SNP', 19571);
INSERT INTO ge VALUES (2017, 'Ian', 'Davidson', 'S14000026', 'LAB', 4519);
INSERT INTO ge VALUES (2017, 'Catriona', 'Bhatia', 'S14000026', 'LD', 4042);
INSERT INTO ge VALUES (2017, 'Sarah', 'Beattie-Smith', 'S14000026', 'Green', 843);
`,
};
