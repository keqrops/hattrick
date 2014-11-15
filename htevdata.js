var first = 45,
 var names = {"29947":"North Kilttown","72248":"ND Huskies FC","72384":"Thoroughbreds","72480":"GKS Vancouver","72539":"Tombola","72578":"Sam Steele FC","72635":"City of Kings Football Club","106944":"Bovine United","106959":"The Downies","106972":"Fins","107238":"Steveston Storm","107552":"Beavers FC","107607":"Abbotsford F.C.","107630":"F.C. Rostock CA","107668":"Calgary Slackers","107715":"Eperviers","107773":"Wolfville Wanderers","107992":"Burlington Burninators","108223":"Amsterdam Galactics","108247":"Kingston Pen. FC","108462":"Murray Harbour Bruins","108619":"Canadian Blizzards Rostock","1670977":"Toronto White Star","1672534":"Solitary Men","1678692":"AC Toronto FC"};
var seasons = [[null,[29947,29,25.6,3.4,35,26,17,10,6,3,1,0],[72539,29,24.5,4.5,27,24,19,13,8,5,2,0],[72384,27,23.9,3.1,23,23,20,14,10,6,3,1],[108247,22,18.8,3.2,4,8,12,17,19,19,15,6],[107992,16,19.6,-3.6,6,10,14,19,18,16,12,5],[106972,14,15.5,-1.5,1,2,5,9,15,21,29,17],[107552,11,18.4,-7.4,3,7,12,16,19,20,16,7],[107715,11,10.9,0.1,0,0,1,2,4,9,20,64]],[null,[29947,28,26.3,1.7,42,25,15,9,4,2,1,1],[72384,28,24.2,3.8,25,26,21,14,7,5,3,1],[107992,22,23.6,-1.6,21,23,21,15,9,5,3,1],[1670977,18,16.4,1.6,1,4,7,12,17,18,20,19],[72539,16,20.4,-4.4,7,13,18,20,17,12,9,5],[108247,15,16.3,-1.3,2,4,7,12,16,19,20,20],[106972,15,16.2,-1.2,1,3,6,11,16,20,21,22],[107238,11,14.7,-3.7,1,2,4,8,13,19,24,31]],[null,[107992,31,22.9,8.1,17,26,19,14,10,7,5,2],[29947,22,28.2,-6.2,62,21,9,4,2,1,0,0],[72384,20,20.6,-0.6,7,16,19,18,15,13,9,4],[107773,19,18.8,0.2,4,11,14,15,16,16,15,9],[107552,17,18.8,-1.8,4,11,14,16,16,16,14,8],[1670977,17,18.3,-1.3,3,9,12,15,17,18,16,10],[108247,15,17.7,-2.7,2,7,11,14,17,18,19,12],[108619,13,12.5,0.5,0,1,2,4,7,11,22,54]],[null,[29947,33,31.5,1.5,61,33,4,1,0,0,0,0],[107992,26,29.4,-3.4,37,51,8,2,1,0,0,0],[72384,22,18.5,3.5,1,4,22,21,18,15,11,7],[107773,21,18.7,2.3,1,5,23,22,18,14,10,6],[108462,20,17.2,2.8,0,3,16,18,19,18,15,10],[72248,16,14.3,1.7,0,1,6,10,14,18,23,28],[106972,15,13.3,1.7,0,0,4,8,11,16,23,37],[1670977,12,17,-5,0,2,15,18,18,18,16,12]],[null,[106944,33,26.4,6.6,28,28,24,12,5,2,1,0],[29947,28,27.1,0.9,35,28,21,9,4,2,0,0],[107992,24,26.6,-2.6,31,28,23,11,5,2,1,0],[107773,20,17.5,2.5,1,3,8,17,24,24,15,8],[72384,19,19.9,-0.9,3,8,15,26,23,16,7,2],[108462,17,18,-1,1,4,9,20,24,24,13,5],[72635,9,12.9,-3.9,0,0,1,4,10,20,37,28],[107238,4,10.6,-6.6,0,0,0,2,4,11,26,57]],[null,[107992,32,28.6,3.4,53,25,13,6,3,1,0,0],[29947,29,26.1,2.9,28,31,20,12,6,3,1,0],[106944,26,21.9,4.1,8,16,22,21,17,11,5,1],[108462,19,16.5,2.5,1,2,6,12,19,27,25,7],[72384,19,22,-3,8,16,22,22,17,10,5,1],[1672534,13,9,4,0,0,0,1,2,6,18,74],[72539,12,14.6,-2.6,0,1,3,7,14,24,36,14],[107773,10,19.4,-9.4,3,8,14,20,23,19,11,3]],[null,[107992,32,28,4,57,23,11,5,2,1,1,0],[106959,28,15.9,12.1,1,3,7,11,14,18,21,24],[29947,26,24.7,1.3,25,32,19,11,7,4,2,1],[72384,21,18,3,3,7,12,16,17,17,16,12],[106944,17,21.7,-4.7,10,19,23,18,13,9,6,3],[1678692,15,18.8,-3.8,3,9,14,17,18,17,13,9],[108462,13,17,-4,2,5,9,14,17,18,19,17],[108619,8,14.5,-6.5,0,2,4,7,12,17,24,34]],[null,[107992,31,27.3,3.7,40,28,16,9,4,2,1,0],[106944,30,26.6,3.4,35,27,18,11,6,3,1,0],[1678692,24,20.7,3.3,6,11,17,20,20,15,8,2],[106959,22,20.5,1.5,5,10,16,21,22,16,8,2],[29947,17,23.2,-6.2,13,19,23,20,14,8,3,1],[72384,16,13.6,2.4,0,1,2,5,10,20,37,25],[107773,14,17.3,-3.3,1,4,8,13,20,27,19,8],[72480,6,10,-4,0,0,0,1,3,8,24,63]],[null,[106944,33,31.1,1.9,60,26,10,3,0,0,0,0],[29947,31,25.7,5.3,12,28,34,20,5,1,0,0],[107992,31,27.7,3.3,24,35,26,12,2,1,0,0],[72578,22,15.5,6.5,0,1,3,12,29,25,18,12],[106959,18,21.8,-3.8,3,10,22,37,16,7,3,1],[1678692,12,13.1,-1.1,0,0,1,6,17,23,26,26],[108619,12,13.4,-1.4,0,0,1,6,19,24,26,23],[72384,5,11.9,-6.9,0,0,1,4,12,19,27,38]],[null,[29947,26,24.5,1.5,33,23,16,11,7,5,3,1],[72635,26,22.1,3.9,18,18,17,15,12,9,7,4],[107992,26,22.9,3.1,23,20,17,13,11,8,5,3],[106959,25,18.9,6.1,6,9,12,14,15,16,15,12],[106944,16,20.1,-4.1,10,12,14,15,15,14,12,8],[1678692,16,16.7,-0.7,3,5,7,10,13,16,21,25],[107607,15,15.6,-0.6,2,3,5,8,11,16,22,32],[72578,13,18.7,-5.7,6,9,11,14,15,16,15,14]],[null,[107992,29,28.4,0.6,52,22,13,7,4,2,1,0],[29947,26,23.7,2.3,12,20,22,19,14,9,4,0],[72635,26,24.5,1.5,18,23,19,16,12,8,4,0],[106959,23,18.9,4.1,3,7,9,13,18,23,26,1],[107630,19,22.7,-3.7,10,17,18,19,16,12,8,0],[1678692,16,19,-3,3,6,10,14,18,23,25,1],[72539,16,18.5,-2.5,2,6,8,12,18,23,29,1],[72384,6,4.8,1.2,0,0,0,0,0,0,3,97]],[null,[107992,34,28.4,5.6,54,24,12,6,3,1,0,0],[72635,27,24.5,2.5,18,26,22,16,10,5,2,0],[29947,24,24.2,-0.2,17,25,23,17,11,6,2,1],[106959,20,19.1,0.9,3,7,13,18,21,20,13,6],[107630,17,20.8,-3.8,6,12,17,21,19,14,9,3],[107607,17,15.1,1.9,1,2,4,8,14,22,30,20],[107668,16,17.4,-1.4,2,5,8,13,19,22,20,11],[108223,6,11,-5,0,0,1,2,4,10,24,59]]];
