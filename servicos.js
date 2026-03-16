const baseServicos = [
 {
   "ITEM": 1100202,
   "ESPEC": "AD EQ AGUA PERIODO NOTURNO",
   "NPRECO": 72000899,
   "UNID": "EQD",
   "PUNIT": "R$ 339,73"
 },
 {
   "ITEM": 1100203,
   "ESPEC": "AD EQ ESGOTO PERIODO NOTURNO",
   "NPRECO": 72000900,
   "UNID": "EQD",
   "PUNIT": "R$ 412,71"
 },
 {
   "ITEM": 2060406,
   "ESPEC": "ADC FURA CARGA ATE 400 INTERLIG",
   "NPRECO": 72000394,
   "UNID": "un",
   "PUNIT": "R$ 314,35"
 },
 {
   "ITEM": 2020603,
   "ESPEC": "ADC INCL LIG UMA MULT",
   "NPRECO": 72000221,
   "UNID": "un",
   "PUNIT": "R$ 17,28"
 },
 {
   "ITEM": 2080106,
   "ESPEC": "ADC INST CV SF",
   "NPRECO": 72000229,
   "UNID": "un",
   "PUNIT": "R$ 122,22"
 },
 {
   "ITEM": 2040108,
   "ESPEC": "ADC INST CX UMA",
   "NPRECO": 72000222,
   "UNID": "un",
   "PUNIT": "R$ 175,09"
 },
 {
   "ITEM": 2020605,
   "ESPEC": "ADC INST HD CV MULT",
   "NPRECO": 72000237,
   "UNID": "un",
   "PUNIT": "R$ 5,48"
 },
 {
   "ITEM": 2070308,
   "ESPEC": "ADC INST LUVA ELETR DE 110 A 125",
   "NPRECO": 72000425,
   "UNID": "un",
   "PUNIT": "R$ 59,96"
 },
 {
   "ITEM": 2070309,
   "ESPEC": "ADC INST LUVA ELETR DE 140 A 160",
   "NPRECO": 72000426,
   "UNID": "un",
   "PUNIT": "R$ 83,67"
 },
 {
   "ITEM": 2070310,
   "ESPEC": "ADC INST LUVA ELETR DE 180 A 315",
   "NPRECO": 72000427,
   "UNID": "un",
   "PUNIT": "R$ 101,45"
 },
 {
   "ITEM": 2070306,
   "ESPEC": "ADC INST LUVA ELETR DE 20 A 32",
   "NPRECO": 72000423,
   "UNID": "un",
   "PUNIT": "R$ 17,60"
 },
 {
   "ITEM": 2070307,
   "ESPEC": "ADC INST LUVA ELETR DE 40 A 90",
   "NPRECO": 72000424,
   "UNID": "un",
   "PUNIT": "R$ 36,90"
 },
 {
   "ITEM": 2070303,
   "ESPEC": "ADC INST SELAS ELETR DE 110 A 125",
   "NPRECO": 72000420,
   "UNID": "un",
   "PUNIT": "R$ 34,40"
 },
 {
   "ITEM": 2070304,
   "ESPEC": "ADC INST SELAS ELETR DE 140 A 160",
   "NPRECO": 72000421,
   "UNID": "un",
   "PUNIT": "R$ 54,14"
 },
 {
   "ITEM": 2070305,
   "ESPEC": "ADC INST SELAS ELETR DE 180 A 315",
   "NPRECO": 72000422,
   "UNID": "un",
   "PUNIT": "R$ 68,67"
 },
 {
   "ITEM": 2070302,
   "ESPEC": "ADC INST SELAS ELETR DE 40 A 90",
   "NPRECO": 72000419,
   "UNID": "un",
   "PUNIT": "R$ 28,60"
 },
 {
   "ITEM": 1030103,
   "ESPEC": "ADC REGCV SF",
   "NPRECO": 72000231,
   "UNID": "un",
   "PUNIT": "R$ 254,10"
 },
 {
   "ITEM": 2030307,
   "ESPEC": "ADC SUBST TMD AG SF",
   "NPRECO": 72000897,
   "UNID": "un",
   "PUNIT": "R$ 96,08"
 },
 {
   "ITEM": 1040104,
   "ESPEC": "ADC SUPR TMD AG S/REP",
   "NPRECO": 72000243,
   "UNID": "un",
   "PUNIT": "R$ 144,39"
 },
 {
   "ITEM": 2040111,
   "ESPEC": "ADC TCV SF",
   "NPRECO": 72000230,
   "UNID": "un",
   "PUNIT": "R$ 182,80"
 },
 {
   "ITEM": 2030306,
   "ESPEC": "ADC TRC PREV PE CV",
   "NPRECO": 72000225,
   "UNID": "un",
   "PUNIT": "R$ 111,22"
 },
 {
   "ITEM": 2190503,
   "ESPEC": "ADIC ADEQ COPA CAV DN 100",
   "NPRECO": 422451,
   "UNID": "un",
   "PUNIT": "R$ 807,61"
 },
 {
   "ITEM": 2190504,
   "ESPEC": "ADIC ADEQ COPA CAV DN 150",
   "NPRECO": 422452,
   "UNID": "un",
   "PUNIT": "R$ 1.062,33"
 },
 {
   "ITEM": 2190502,
   "ESPEC": "ADIC ADEQ COPA CAV DN 80",
   "NPRECO": 422450,
   "UNID": "un",
   "PUNIT": "R$ 468,65"
 },
 {
   "ITEM": 2190501,
   "ESPEC": "ADIC ADEQ COPA CAV DN ATÉ 50",
   "NPRECO": 422443,
   "UNID": "un",
   "PUNIT": "R$ 271,15"
 },
 {
   "ITEM": 2190605,
   "ESPEC": "ADIC FORN INST CAV DN 100",
   "NPRECO": 422417,
   "UNID": "un",
   "PUNIT": "R$ 3.387,99"
 },
 {
   "ITEM": 2190305,
   "ESPEC": "ADIC FORN INST CAV DN 150",
   "NPRECO": 422380,
   "UNID": "un",
   "PUNIT": "R$ 30.208,34"
 },
 {
   "ITEM": 2190301,
   "ESPEC": "ADIC FORN INST CAV DN 25",
   "NPRECO": 422368,
   "UNID": "un",
   "PUNIT": "R$ 2.506,44"
 },
 {
   "ITEM": 2190302,
   "ESPEC": "ADIC FORN INST CAV DN 40",
   "NPRECO": 422369,
   "UNID": "un",
   "PUNIT": "R$ 3.244,56"
 },
 {
   "ITEM": 2190603,
   "ESPEC": "ADIC FORN INST CAV DN 50",
   "NPRECO": 422415,
   "UNID": "un",
   "PUNIT": "R$ 1.117,92"
 },
 {
   "ITEM": 2190303,
   "ESPEC": "ADIC FORN INST CAV DN 50",
   "NPRECO": 422370,
   "UNID": "un",
   "PUNIT": "R$ 7.959,97"
 },
 {
   "ITEM": 2190304,
   "ESPEC": "ADIC FORN INST CAV DN 80",
   "NPRECO": 422371,
   "UNID": "un",
   "PUNIT": "R$ 18.135,26"
 },
 {
   "ITEM": 2190404,
   "ESPEC": "ADIC INT CAV INOX DN 100",
   "NPRECO": 422463,
   "UNID": "un",
   "PUNIT": "R$ 187,60"
 },
 {
   "ITEM": 2190405,
   "ESPEC": "ADIC INT CAV INOX DN 150",
   "NPRECO": 422464,
   "UNID": "un",
   "PUNIT": "R$ 247,57"
 },
 {
   "ITEM": 2190401,
   "ESPEC": "ADIC INT CAV INOX DN 40",
   "NPRECO": 422460,
   "UNID": "un",
   "PUNIT": "R$ 127,61"
 },
 {
   "ITEM": 2190402,
   "ESPEC": "ADIC INT CAV INOX DN 50",
   "NPRECO": 422461,
   "UNID": "un",
   "PUNIT": "R$ 167,60"
 },
 {
   "ITEM": 2190403,
   "ESPEC": "ADIC INT CAV INOX DN 80",
   "NPRECO": 422462,
   "UNID": "un",
   "PUNIT": "R$ 187,60"
 },
 {
   "ITEM": 2180313,
   "ESPEC": "ADIC MOB/DESMOB HDD 250 A 500 MM- > 50KM",
   "NPRECO": 510022,
   "UNID": "KM",
   "PUNIT": "R$ 179,84"
 },
 {
   "ITEM": 2180312,
   "ESPEC": "ADIC MOB/DESMOB HDD ATÉ 225 MM- > 50 KM",
   "NPRECO": 510021,
   "UNID": "KM",
   "PUNIT": "R$ 175,03"
 },
 {
   "ITEM": 1100201,
   "ESPEC": "ADIC NOTURNO DESOBST C HIDROJ ALTA PRESS",
   "NPRECO": 72000842,
   "UNID": "un",
   "PUNIT": "R$ 27,27"
 },
 {
   "ITEM": 2190703,
   "ESPEC": "ADIC TR INST FILTRO DN 100",
   "NPRECO": 422377,
   "UNID": "un",
   "PUNIT": "R$ 191,54"
 },
 {
   "ITEM": 2190704,
   "ESPEC": "ADIC TR INST FILTRO DN 150",
   "NPRECO": 422378,
   "UNID": "un",
   "PUNIT": "R$ 260,18"
 },
 {
   "ITEM": 2190705,
   "ESPEC": "ADIC TR INST FILTRO DN 200",
   "NPRECO": 422379,
   "UNID": "un",
   "PUNIT": "R$ 360,07"
 },
 {
   "ITEM": 2190701,
   "ESPEC": "ADIC TR INST FILTRO DN 50",
   "NPRECO": 422375,
   "UNID": "un",
   "PUNIT": "R$ 97,55"
 },
 {
   "ITEM": 2190702,
   "ESPEC": "ADIC TR INST FILTRO DN 80",
   "NPRECO": 422376,
   "UNID": "un",
   "PUNIT": "R$ 177,58"
 },
 {
   "ITEM": 2190805,
   "ESPEC": "ADIC TR REG CAV DN 100",
   "NPRECO": 422422,
   "UNID": "un",
   "PUNIT": "R$ 1.641,72"
 },
 {
   "ITEM": 2190801,
   "ESPEC": "ADIC TR REG CAV DN 25",
   "NPRECO": 422418,
   "UNID": "un",
   "PUNIT": "R$ 100,88"
 },
 {
   "ITEM": 2190802,
   "ESPEC": "ADIC TR REG CAV DN 40",
   "NPRECO": 422419,
   "UNID": "un",
   "PUNIT": "R$ 187,85"
 },
 {
   "ITEM": 2190803,
   "ESPEC": "ADIC TR REG CAV DN 50",
   "NPRECO": 422420,
   "UNID": "un",
   "PUNIT": "R$ 293,45"
 },
 {
   "ITEM": 2190804,
   "ESPEC": "ADIC TR REG CAV DN 80",
   "NPRECO": 422421,
   "UNID": "un",
   "PUNIT": "R$ 815,82"
 },
 {
   "ITEM": 2040107,
   "ESPEC": "ADIC TROCA PREVENT REGIST CAV DN 20MM",
   "NPRECO": 72000218,
   "UNID": "un",
   "PUNIT": "R$ 32,16"
 },
 {
   "ITEM": 2040113,
   "ESPEC": "ADIC TROCA PREVENT REGIST CAV DN 20MM SF",
   "NPRECO": 72001002,
   "UNID": "un",
   "PUNIT": "R$ 23,43"
 },
 {
   "ITEM": 1100105,
   "ESPEC": "ANCORAGEM DE SINGUL COM PERFIL METÁLICO",
   "NPRECO": 72000906,
   "UNID": "un",
   "PUNIT": "R$ 449,13"
 },
 {
   "ITEM": 1090112,
   "ESPEC": "APL BINDER SERV. AG",
   "NPRECO": 72000858,
   "UNID": "M3",
   "PUNIT": "R$ 3.127,39"
 },
 {
   "ITEM": 1090113,
   "ESPEC": "APL BINDER SERV. ESG",
   "NPRECO": 72000859,
   "UNID": "M3",
   "PUNIT": "R$ 3.127,39"
 },
 {
   "ITEM": 1080409,
   "ESPEC": "APLIC DESENGORD LAVAGEM REDES RAMAIS ESG",
   "NPRECO": 72000992,
   "UNID": "M",
   "PUNIT": "R$ 4,89"
 },
 {
   "ITEM": 1100104,
   "ESPEC": "APT IRREG LAG",
   "NPRECO": 72000903,
   "UNID": "un",
   "PUNIT": "R$ 44,06"
 },
 {
   "ITEM": 1060227,
   "ESPEC": "ARR DEFO/FC 150 A 250 C/ REP PASS SF",
   "NPRECO": 72000963,
   "UNID": "un",
   "PUNIT": "R$ 3.068,08"
 },
 {
   "ITEM": 1060217,
   "ESPEC": "ARR DEFO/FC 150 A 250 C/LPB LEITO PT SF",
   "NPRECO": 72000290,
   "UNID": "un",
   "PUNIT": "R$ 3.226,62"
 },
 {
   "ITEM": 1060204,
   "ESPEC": "ARR DEFO/FC 150 A 250 C/LPB LEITO SF",
   "NPRECO": 72000267,
   "UNID": "un",
   "PUNIT": "R$ 2.768,93"
 },
 {
   "ITEM": 1060218,
   "ESPEC": "ARR DEFO/FC 150 A 250 C/REP PASS PT SF",
   "NPRECO": 72000291,
   "UNID": "un",
   "PUNIT": "R$ 3.498,57"
 },
 {
   "ITEM": 1060226,
   "ESPEC": "ARR DEFO/FC 150 A 250 S/ REP SF",
   "NPRECO": 72000962,
   "UNID": "un",
   "PUNIT": "R$ 1.834,77"
 },
 {
   "ITEM": 1060216,
   "ESPEC": "ARR DEFO/FC 150 A 250 S/REP PT SF",
   "NPRECO": 72000289,
   "UNID": "un",
   "PUNIT": "R$ 2.278,15"
 },
 {
   "ITEM": 1060229,
   "ESPEC": "ARR DEFO/FC 300 A 400 C/ REP PASS SF",
   "NPRECO": 72000965,
   "UNID": "un",
   "PUNIT": "R$ 4.439,96"
 },
 {
   "ITEM": 1060220,
   "ESPEC": "ARR DEFO/FC 300 A 400 C/LPB LEITO PT SF",
   "NPRECO": 72000294,
   "UNID": "un",
   "PUNIT": "R$ 4.538,99"
 },
 {
   "ITEM": 1060205,
   "ESPEC": "ARR DEFO/FC 300 A 400 C/LPB LEITO SF",
   "NPRECO": 72000268,
   "UNID": "un",
   "PUNIT": "R$ 4.104,01"
 },
 {
   "ITEM": 1060221,
   "ESPEC": "ARR DEFO/FC 300 A 400 C/REP PASS PT SF",
   "NPRECO": 72000295,
   "UNID": "un",
   "PUNIT": "R$ 4.669,53"
 },
 {
   "ITEM": 1060228,
   "ESPEC": "ARR DEFO/FC 300 A 400 S/ REP SF",
   "NPRECO": 72000964,
   "UNID": "un",
   "PUNIT": "R$ 2.591,58"
 },
 {
   "ITEM": 1060219,
   "ESPEC": "ARR DEFO/FC 300 A 400 S/REP PT SF",
   "NPRECO": 72000293,
   "UNID": "un",
   "PUNIT": "R$ 3.076,61"
 },
 {
   "ITEM": 1060215,
   "ESPEC": "ARR FC 50 A 100 C/LPB LEITO PT SF",
   "NPRECO": 72000287,
   "UNID": "un",
   "PUNIT": "R$ 2.548,54"
 },
 {
   "ITEM": 1060201,
   "ESPEC": "ARR FC 50 A 100 C/LPB LEITO SF",
   "NPRECO": 72000260,
   "UNID": "un",
   "PUNIT": "R$ 2.177,29"
 },
 {
   "ITEM": 1060214,
   "ESPEC": "ARR FC 50 A 100 C/REP PASS PT SF",
   "NPRECO": 72000286,
   "UNID": "un",
   "PUNIT": "R$ 2.789,49"
 },
 {
   "ITEM": 1060203,
   "ESPEC": "ARR FC 50 A 100 C/REP PASS SF",
   "NPRECO": 72000266,
   "UNID": "un",
   "PUNIT": "R$ 2.433,62"
 },
 {
   "ITEM": 1060213,
   "ESPEC": "ARR FC 50 A 100 S/REP PT SF",
   "NPRECO": 72000285,
   "UNID": "un",
   "PUNIT": "R$ 1.720,26"
 },
 {
   "ITEM": 1060202,
   "ESPEC": "ARR FC 50 A 100 S/REP SF",
   "NPRECO": 72000265,
   "UNID": "un",
   "PUNIT": "R$ 1.463,32"
 },
 {
   "ITEM": 1060211,
   "ESPEC": "ARR FF 150 A 250 S/REP PT SF",
   "NPRECO": 72000283,
   "UNID": "un",
   "PUNIT": "R$ 1.298,63"
 },
 {
   "ITEM": 1060207,
   "ESPEC": "ARR FF 150 A 250 S/REP SF",
   "NPRECO": 72000270,
   "UNID": "un",
   "PUNIT": "R$ 955,88"
 },
 {
   "ITEM": 1060212,
   "ESPEC": "ARR FF 300 A 400 S/REP PT SF",
   "NPRECO": 72000284,
   "UNID": "un",
   "PUNIT": "R$ 2.095,80"
 },
 {
   "ITEM": 1060208,
   "ESPEC": "ARR FF 300 A 400 S/REP SF",
   "NPRECO": 72000271,
   "UNID": "un",
   "PUNIT": "R$ 1.727,35"
 },
 {
   "ITEM": 1060210,
   "ESPEC": "ARR FF 50 A 100 S/REP PT SF",
   "NPRECO": 72000282,
   "UNID": "un",
   "PUNIT": "R$ 1.003,95"
 },
 {
   "ITEM": 1060206,
   "ESPEC": "ARR FF 50 A 100 S/REP SF",
   "NPRECO": 72000269,
   "UNID": "un",
   "PUNIT": "R$ 720,94"
 },
 {
   "ITEM": 1060224,
   "ESPEC": "ARR PEAD 140 A 250 S/REP SF",
   "NPRECO": 72000303,
   "UNID": "un",
   "PUNIT": "R$ 1.239,86"
 },
 {
   "ITEM": 1060225,
   "ESPEC": "ARR PEAD 280 A 400 S/REP SF",
   "NPRECO": 72000304,
   "UNID": "un",
   "PUNIT": "R$ 2.088,29"
 },
 {
   "ITEM": 1060223,
   "ESPEC": "ARR PEAD 63 A 125 S/REP SF",
   "NPRECO": 72000302,
   "UNID": "un",
   "PUNIT": "R$ 917,31"
 },
 {
   "ITEM": 1060209,
   "ESPEC": "ARR PVC 50 A 100 S/REP PT SF",
   "NPRECO": 72000281,
   "UNID": "un",
   "PUNIT": "R$ 935,93"
 },
 {
   "ITEM": 1060222,
   "ESPEC": "ARR PVC 50 A 100 S/REP SF",
   "NPRECO": 72000300,
   "UNID": "un",
   "PUNIT": "R$ 661,88"
 },
 {
   "ITEM": 1090117,
   "ESPEC": "ASSENT GUIAS",
   "NPRECO": 72000863,
   "UNID": "M",
   "PUNIT": "R$ 65,99"
 },
 {
   "ITEM": 1090118,
   "ESPEC": "ASSENT PARALEL",
   "NPRECO": 72000864,
   "UNID": "M2",
   "PUNIT": "R$ 174,46"
 },
 {
   "ITEM": 2180303,
   "ESPEC": "ASSENT REDE HDD PEAD 110MM-SOLO COMUM",
   "NPRECO": 510011,
   "UNID": "M",
   "PUNIT": "R$ 111,84"
 },
 {
   "ITEM": 2180304,
   "ESPEC": "ASSENT REDE HDD PEAD 160MM-SOLO COMUM",
   "NPRECO": 510012,
   "UNID": "M",
   "PUNIT": "R$ 213,61"
 },
 {
   "ITEM": 2180305,
   "ESPEC": "ASSENT REDE HDD PEAD 200MM-SOLO COMUM",
   "NPRECO": 510013,
   "UNID": "M",
   "PUNIT": "R$ 298,54"
 },
 {
   "ITEM": 2180306,
   "ESPEC": "ASSENT REDE HDD PEAD 225MM-SOLO COMUM",
   "NPRECO": 510014,
   "UNID": "M",
   "PUNIT": "R$ 304,25"
 },
 {
   "ITEM": 2180307,
   "ESPEC": "ASSENT REDE HDD PEAD 250MM-SOLO COMUM",
   "NPRECO": 510015,
   "UNID": "M",
   "PUNIT": "R$ 406,29"
 },
 {
   "ITEM": 2180308,
   "ESPEC": "ASSENT REDE HDD PEAD 280MM-SOLO COMUM",
   "NPRECO": 510016,
   "UNID": "M",
   "PUNIT": "R$ 414,45"
 },
 {
   "ITEM": 2180309,
   "ESPEC": "ASSENT REDE HDD PEAD 315MM-SOLO COMUM",
   "NPRECO": 510017,
   "UNID": "M",
   "PUNIT": "R$ 505,99"
 },
 {
   "ITEM": 2180310,
   "ESPEC": "ASSENT REDE HDD PEAD 355MM-SOLO COMUM",
   "NPRECO": 510018,
   "UNID": "M",
   "PUNIT": "R$ 562,29"
 },
 {
   "ITEM": 2180311,
   "ESPEC": "ASSENT REDE HDD PEAD 400MM-SOLO COMUM",
   "NPRECO": 510019,
   "UNID": "M",
   "PUNIT": "R$ 712,39"
 },
 {
   "ITEM": 2180301,
   "ESPEC": "ASSENT REDE HDD PEAD 63MM-SOLO COMUM",
   "NPRECO": 510009,
   "UNID": "M",
   "PUNIT": "R$ 67,46"
 },
 {
   "ITEM": 2180302,
   "ESPEC": "ASSENT REDE HDD PEAD 90MM-SOLO COMUM",
   "NPRECO": 510010,
   "UNID": "M",
   "PUNIT": "R$ 71,12"
 },
 {
   "ITEM": 1090121,
   "ESPEC": "ASSENT SARJETA",
   "NPRECO": 72000867,
   "UNID": "M3",
   "PUNIT": "R$ 737,61"
 },
 {
   "ITEM": 1060321,
   "ESPEC": "CAPA ASF 150 A 250 ARR COMPX A",
   "NPRECO": 72001323,
   "UNID": "un",
   "PUNIT": "R$ 480,10"
 },
 {
   "ITEM": 1060320,
   "ESPEC": "CAPA ASF 150 A 250 ARR COMPX B",
   "NPRECO": 72001324,
   "UNID": "un",
   "PUNIT": "R$ 480,10"
 },
 {
   "ITEM": 1060319,
   "ESPEC": "CAPA ASF 150 A 250 ARR COMPX C",
   "NPRECO": 72001325,
   "UNID": "un",
   "PUNIT": "R$ 196,70"
 },
 {
   "ITEM": 2060521,
   "ESPEC": "CAPA ASF 150 A 250 INTERLIG COMPX A",
   "NPRECO": 72001302,
   "UNID": "un",
   "PUNIT": "R$ 1.925,09"
 },
 {
   "ITEM": 2060520,
   "ESPEC": "CAPA ASF 150 A 250 INTERLIG COMPX B",
   "NPRECO": 72001303,
   "UNID": "un",
   "PUNIT": "R$ 1.925,09"
 },
 {
   "ITEM": 2060519,
   "ESPEC": "CAPA ASF 150 A 250 INTERLIG COMPX C",
   "NPRECO": 72001304,
   "UNID": "un",
   "PUNIT": "R$ 752,62"
 },
 {
   "ITEM": 1060324,
   "ESPEC": "CAPA ASF 300 A 400 ARR COMPX A",
   "NPRECO": 72001326,
   "UNID": "un",
   "PUNIT": "R$ 1.530,82"
 },
 {
   "ITEM": 1060323,
   "ESPEC": "CAPA ASF 300 A 400 ARR COMPX B",
   "NPRECO": 72001327,
   "UNID": "un",
   "PUNIT": "R$ 1.530,82"
 },
 {
   "ITEM": 1060322,
   "ESPEC": "CAPA ASF 300 A 400 ARR COMPX C",
   "NPRECO": 72001328,
   "UNID": "un",
   "PUNIT": "R$ 601,38"
 },
 {
   "ITEM": 2060524,
   "ESPEC": "CAPA ASF 300 A 400 INTERLIG COMPX A",
   "NPRECO": 72001305,
   "UNID": "un",
   "PUNIT": "R$ 2.395,17"
 },
 {
   "ITEM": 2060523,
   "ESPEC": "CAPA ASF 300 A 400 INTERLIG COMPX B",
   "NPRECO": 72001306,
   "UNID": "un",
   "PUNIT": "R$ 2.395,17"
 },
 {
   "ITEM": 2060522,
   "ESPEC": "CAPA ASF 300 A 400 INTERLIG COMPX C",
   "NPRECO": 72001307,
   "UNID": "un",
   "PUNIT": "R$ 931,81"
 },
 {
   "ITEM": 1060318,
   "ESPEC": "CAPA ASF 50 A 100 ARR COMPX A",
   "NPRECO": 72001320,
   "UNID": "un",
   "PUNIT": "R$ 325,60"
 },
 {
   "ITEM": 1060317,
   "ESPEC": "CAPA ASF 50 A 100 ARR COMPX B",
   "NPRECO": 72001321,
   "UNID": "un",
   "PUNIT": "R$ 325,60"
 },
 {
   "ITEM": 1060316,
   "ESPEC": "CAPA ASF 50 A 100 ARR COMPX C",
   "NPRECO": 72001322,
   "UNID": "un",
   "PUNIT": "R$ 135,39"
 },
 {
   "ITEM": 2060518,
   "ESPEC": "CAPA ASF 50 A 100 INTERLIG COMPX A",
   "NPRECO": 72001299,
   "UNID": "un",
   "PUNIT": "R$ 884,04"
 },
 {
   "ITEM": 2060517,
   "ESPEC": "CAPA ASF 50 A 100 INTERLIG COMPX B",
   "NPRECO": 72001300,
   "UNID": "un",
   "PUNIT": "R$ 884,04"
 },
 {
   "ITEM": 2060516,
   "ESPEC": "CAPA ASF 50 A 100 INTERLIG COMPX C",
   "NPRECO": 72001301,
   "UNID": "un",
   "PUNIT": "R$ 352,88"
 },
 {
   "ITEM": 2140316,
   "ESPEC": "CAPA ASF ACIMA DE 2M PRE COMPX A",
   "NPRECO": 72001168,
   "UNID": "M",
   "PUNIT": "R$ 333,75"
 },
 {
   "ITEM": 2140315,
   "ESPEC": "CAPA ASF ACIMA DE 2M PRE COMPX B",
   "NPRECO": 72001169,
   "UNID": "M",
   "PUNIT": "R$ 333,75"
 },
 {
   "ITEM": 2140314,
   "ESPEC": "CAPA ASF ACIMA DE 2M PRE COMPX C",
   "NPRECO": 72001170,
   "UNID": "M",
   "PUNIT": "R$ 136,47"
 },
 {
   "ITEM": 2120328,
   "ESPEC": "CAPA ASF ATE 2M EX LESG COMPX A",
   "NPRECO": 72001160,
   "UNID": "un",
   "PUNIT": "R$ 1.252,97"
 },
 {
   "ITEM": 2120327,
   "ESPEC": "CAPA ASF ATE 2M EX LESG COMPX B",
   "NPRECO": 72001161,
   "UNID": "un",
   "PUNIT": "R$ 1.252,97"
 },
 {
   "ITEM": 2120326,
   "ESPEC": "CAPA ASF ATE 2M EX LESG COMPX C",
   "NPRECO": 72001262,
   "UNID": "un",
   "PUNIT": "R$ 514,16"
 },
 {
   "ITEM": 2130245,
   "ESPEC": "CAPA ASF ATE 2M EX TRE COMPX A",
   "NPRECO": 72001272,
   "UNID": "un",
   "PUNIT": "R$ 1.252,97"
 },
 {
   "ITEM": 2130244,
   "ESPEC": "CAPA ASF ATE 2M EX TRE COMPX B",
   "NPRECO": 72001273,
   "UNID": "un",
   "PUNIT": "R$ 1.252,97"
 },
 {
   "ITEM": 2130243,
   "ESPEC": "CAPA ASF ATE 2M EX TRE COMPX C",
   "NPRECO": 72001274,
   "UNID": "un",
   "PUNIT": "R$ 514,16"
 },
 {
   "ITEM": 2140313,
   "ESPEC": "CAPA ASF ATE 2M PRE COMPX A",
   "NPRECO": 72001165,
   "UNID": "M",
   "PUNIT": "R$ 294,45"
 },
 {
   "ITEM": 2140312,
   "ESPEC": "CAPA ASF ATE 2M PRE COMPX B",
   "NPRECO": 72001166,
   "UNID": "M",
   "PUNIT": "R$ 289,43"
 },
 {
   "ITEM": 2140311,
   "ESPEC": "CAPA ASF ATE 2M PRE COMPX C",
   "NPRECO": 72001167,
   "UNID": "M",
   "PUNIT": "R$ 121,30"
 },
 {
   "ITEM": 2120325,
   "ESPEC": "CAPA ASF ATE 2M TA LESG COMPX A",
   "NPRECO": 72001350,
   "UNID": "un",
   "PUNIT": "R$ 775,51"
 },
 {
   "ITEM": 2120324,
   "ESPEC": "CAPA ASF ATE 2M TA LESG COMPX B",
   "NPRECO": 72001351,
   "UNID": "un",
   "PUNIT": "R$ 775,51"
 },
 {
   "ITEM": 2120323,
   "ESPEC": "CAPA ASF ATE 2M TA LESG COMPX C",
   "NPRECO": 72001352,
   "UNID": "un",
   "PUNIT": "R$ 321,18"
 },
 {
   "ITEM": 2130236,
   "ESPEC": "CAPA ASF ATE 2M TA TRE COMPX A",
   "NPRECO": 72001362,
   "UNID": "un",
   "PUNIT": "R$ 775,51"
 },
 {
   "ITEM": 2130235,
   "ESPEC": "CAPA ASF ATE 2M TA TRE COMPX B",
   "NPRECO": 72001363,
   "UNID": "un",
   "PUNIT": "R$ 775,51"
 },
 {
   "ITEM": 2130234,
   "ESPEC": "CAPA ASF ATE 2M TA TRE COMPX C",
   "NPRECO": 72001364,
   "UNID": "un",
   "PUNIT": "R$ 321,18"
 },
 {
   "ITEM": 2120331,
   "ESPEC": "CAPA ASF ATE 2M TO LESG COMPX A",
   "NPRECO": 72001377,
   "UNID": "un",
   "PUNIT": "R$ 1.730,43"
 },
 {
   "ITEM": 2120330,
   "ESPEC": "CAPA ASF ATE 2M TO LESG COMPX B",
   "NPRECO": 72001378,
   "UNID": "un",
   "PUNIT": "R$ 1.730,43"
 },
 {
   "ITEM": 2120329,
   "ESPEC": "CAPA ASF ATE 2M TO LESG COMPX C",
   "NPRECO": 72001379,
   "UNID": "un",
   "PUNIT": "R$ 707,13"
 },
 {
   "ITEM": 2130254,
   "ESPEC": "CAPA ASF ATE 2M TO TRE COMPX A",
   "NPRECO": 72001389,
   "UNID": "un",
   "PUNIT": "R$ 1.730,43"
 },
 {
   "ITEM": 2130253,
   "ESPEC": "CAPA ASF ATE 2M TO TRE COMPX B",
   "NPRECO": 72001390,
   "UNID": "un",
   "PUNIT": "R$ 1.730,43"
 },
 {
   "ITEM": 2130252,
   "ESPEC": "CAPA ASF ATE 2M TO TRE COMPX C",
   "NPRECO": 72001391,
   "UNID": "un",
   "PUNIT": "R$ 707,13"
 },
 {
   "ITEM": 1080218,
   "ESPEC": "CAPA ASF CBUQ NPV COMPX A",
   "NPRECO": 72000835,
   "UNID": "un",
   "PUNIT": "R$ 287,85"
 },
 {
   "ITEM": 1080217,
   "ESPEC": "CAPA ASF CBUQ NPV COMPX B",
   "NPRECO": 72000834,
   "UNID": "un",
   "PUNIT": "R$ 287,85"
 },
 {
   "ITEM": 1080216,
   "ESPEC": "CAPA ASF CBUQ NPV COMPX C",
   "NPRECO": 72000833,
   "UNID": "un",
   "PUNIT": "R$ 287,85"
 },
 {
   "ITEM": 2140508,
   "ESPEC": "CAPA ASF CPV DIAM = 1,20M COMPX A",
   "NPRECO": 72001250,
   "UNID": "un",
   "PUNIT": "R$ 1.547,31"
 },
 {
   "ITEM": 2140507,
   "ESPEC": "CAPA ASF CPV DIAM = 1,20M COMPX B",
   "NPRECO": 72001251,
   "UNID": "un",
   "PUNIT": "R$ 1.257,39"
 },
 {
   "ITEM": 2140506,
   "ESPEC": "CAPA ASF CPV DIAM = 1,20M COMPX C",
   "NPRECO": 72001252,
   "UNID": "un",
   "PUNIT": "R$ 499,62"
 },
 {
   "ITEM": 1080308,
   "ESPEC": "CAPA ASF CPV/REC/SUBST PV/PI COMPX A",
   "NPRECO": 72001253,
   "UNID": "un",
   "PUNIT": "R$ 1.426,33"
 },
 {
   "ITEM": 1080307,
   "ESPEC": "CAPA ASF CPV/REC/SUBST PV/PI COMPX B",
   "NPRECO": 72001254,
   "UNID": "un",
   "PUNIT": "R$ 1.426,33"
 },
 {
   "ITEM": 1080306,
   "ESPEC": "CAPA ASF CPV/REC/SUBST PV/PI COMPX C",
   "NPRECO": 72001255,
   "UNID": "un",
   "PUNIT": "R$ 562,37"
 },
 {
   "ITEM": 2130248,
   "ESPEC": "CAPA ASF DE 2 A 3M EX TRE COMPX A",
   "NPRECO": 72001275,
   "UNID": "un",
   "PUNIT": "R$ 1.418,60"
 },
 {
   "ITEM": 2130247,
   "ESPEC": "CAPA ASF DE 2 A 3M EX TRE COMPX B",
   "NPRECO": 72001276,
   "UNID": "un",
   "PUNIT": "R$ 1.418,60"
 },
 {
   "ITEM": 2130246,
   "ESPEC": "CAPA ASF DE 2 A 3M EX TRE COMPX C",
   "NPRECO": 72001277,
   "UNID": "un",
   "PUNIT": "R$ 578,94"
 },
 {
   "ITEM": 2130239,
   "ESPEC": "CAPA ASF DE 2 A 3M TA TRE COMPX A",
   "NPRECO": 72001365,
   "UNID": "un",
   "PUNIT": "R$ 941,14"
 },
 {
   "ITEM": 2130238,
   "ESPEC": "CAPA ASF DE 2 A 3M TA TRE COMPX B",
   "NPRECO": 72001366,
   "UNID": "un",
   "PUNIT": "R$ 941,14"
 },
 {
   "ITEM": 2130237,
   "ESPEC": "CAPA ASF DE 2 A 3M TA TRE COMPX C",
   "NPRECO": 72001367,
   "UNID": "un",
   "PUNIT": "R$ 385,95"
 },
 {
   "ITEM": 2130257,
   "ESPEC": "CAPA ASF DE 2 A 3M TO TRE COMPX A",
   "NPRECO": 72001392,
   "UNID": "un",
   "PUNIT": "R$ 1.896,06"
 },
 {
   "ITEM": 2130256,
   "ESPEC": "CAPA ASF DE 2 A 3M TO TRE COMPX B",
   "NPRECO": 72001393,
   "UNID": "un",
   "PUNIT": "R$ 1.896,06"
 },
 {
   "ITEM": 2130255,
   "ESPEC": "CAPA ASF DE 2 A 3M TO TRE COMPX C",
   "NPRECO": 72001394,
   "UNID": "un",
   "PUNIT": "R$ 771,92"
 },
 {
   "ITEM": 2130251,
   "ESPEC": "CAPA ASF DE 3 A 4M EX TRE COMPX A",
   "NPRECO": 72001278,
   "UNID": "un",
   "PUNIT": "R$ 1.737,32"
 },
 {
   "ITEM": 2130250,
   "ESPEC": "CAPA ASF DE 3 A 4M EX TRE COMPX B",
   "NPRECO": 72001279,
   "UNID": "un",
   "PUNIT": "R$ 1.737,32"
 },
 {
   "ITEM": 2130249,
   "ESPEC": "CAPA ASF DE 3 A 4M EX TRE COMPX C",
   "NPRECO": 72001280,
   "UNID": "un",
   "PUNIT": "R$ 701,62"
 },
 {
   "ITEM": 2130242,
   "ESPEC": "CAPA ASF DE 3 A 4M TA TRE COMPX A",
   "NPRECO": 72001368,
   "UNID": "un",
   "PUNIT": "R$ 1.186,03"
 },
 {
   "ITEM": 2130241,
   "ESPEC": "CAPA ASF DE 3 A 4M TA TRE COMPX B",
   "NPRECO": 72001369,
   "UNID": "un",
   "PUNIT": "R$ 1.186,03"
 },
 {
   "ITEM": 2130240,
   "ESPEC": "CAPA ASF DE 3 A 4M TA TRE COMPX C",
   "NPRECO": 72001370,
   "UNID": "un",
   "PUNIT": "R$ 481,07"
 },
 {
   "ITEM": 2130260,
   "ESPEC": "CAPA ASF DE 3 A 4M TO TRE COMPX A",
   "NPRECO": 72001395,
   "UNID": "un",
   "PUNIT": "R$ 2.288,61"
 },
 {
   "ITEM": 2130259,
   "ESPEC": "CAPA ASF DE 3 A 4M TO TRE COMPX B",
   "NPRECO": 72001396,
   "UNID": "un",
   "PUNIT": "R$ 2.190,51"
 },
 {
   "ITEM": 2130258,
   "ESPEC": "CAPA ASF DE 3 A 4M TO TRE COMPX C",
   "NPRECO": 72001397,
   "UNID": "un",
   "PUNIT": "R$ 922,16"
 },
 {
   "ITEM": 2020317,
   "ESPEC": "CAPA ASF EX LAG AVUL COMPX A",
   "NPRECO": 72001259,
   "UNID": "un",
   "PUNIT": "R$ 733,18"
 },
 {
   "ITEM": 2020316,
   "ESPEC": "CAPA ASF EX LAG AVUL COMPX B",
   "NPRECO": 72001260,
   "UNID": "un",
   "PUNIT": "R$ 733,18"
 },
 {
   "ITEM": 2020315,
   "ESPEC": "CAPA ASF EX LAG AVUL COMPX C",
   "NPRECO": 72001261,
   "UNID": "un",
   "PUNIT": "R$ 315,66"
 },
 {
   "ITEM": 2080217,
   "ESPEC": "CAPA ASF EX LAG SUCES COMPX A",
   "NPRECO": 72001269,
   "UNID": "un",
   "PUNIT": "R$ 486,83"
 },
 {
   "ITEM": 2080216,
   "ESPEC": "CAPA ASF EX LAG SUCES COMPX B",
   "NPRECO": 72001270,
   "UNID": "un",
   "PUNIT": "R$ 486,83"
 },
 {
   "ITEM": 2080215,
   "ESPEC": "CAPA ASF EX LAG SUCES COMPX C",
   "NPRECO": 72001271,
   "UNID": "un",
   "PUNIT": "R$ 212,28"
 },
 {
   "ITEM": 2150217,
   "ESPEC": "CAPA ASF EX LESG SUCES COMPX A",
   "NPRECO": 72001266,
   "UNID": "un",
   "PUNIT": "R$ 883,42"
 },
 {
   "ITEM": 2150216,
   "ESPEC": "CAPA ASF EX LESG SUCES COMPX B",
   "NPRECO": 72001267,
   "UNID": "un",
   "PUNIT": "R$ 883,42"
 },
 {
   "ITEM": 2150215,
   "ESPEC": "CAPA ASF EX LESG SUCES COMPX C",
   "NPRECO": 72001268,
   "UNID": "un",
   "PUNIT": "R$ 361,84"
 },
 {
   "ITEM": 2030417,
   "ESPEC": "CAPA ASF EX TRA PREV COMPX A",
   "NPRECO": 72001281,
   "UNID": "un",
   "PUNIT": "R$ 860,68"
 },
 {
   "ITEM": 2030416,
   "ESPEC": "CAPA ASF EX TRA PREV COMPX B",
   "NPRECO": 72001282,
   "UNID": "un",
   "PUNIT": "R$ 860,68"
 },
 {
   "ITEM": 2030415,
   "ESPEC": "CAPA ASF EX TRA PREV COMPX C",
   "NPRECO": 72001283,
   "UNID": "un",
   "PUNIT": "R$ 417,66"
 },
 {
   "ITEM": 2070208,
   "ESPEC": "CAPA ASF INST VL COMPX A",
   "NPRECO": 72001296,
   "UNID": "un",
   "PUNIT": "R$ 574,68"
 },
 {
   "ITEM": 2070207,
   "ESPEC": "CAPA ASF INST VL COMPX B",
   "NPRECO": 72001297,
   "UNID": "un",
   "PUNIT": "R$ 574,68"
 },
 {
   "ITEM": 2070206,
   "ESPEC": "CAPA ASF INST VL COMPX C",
   "NPRECO": 72001298,
   "UNID": "un",
   "PUNIT": "R$ 232,95"
 },
 {
   "ITEM": 2120337,
   "ESPEC": "CAPA ASF MAIS DE 2M EX LESG COMPX A",
   "NPRECO": 72001263,
   "UNID": "un",
   "PUNIT": "R$ 1.252,97"
 },
 {
   "ITEM": 2120336,
   "ESPEC": "CAPA ASF MAIS DE 2M EX LESG COMPX B",
   "NPRECO": 72001264,
   "UNID": "un",
   "PUNIT": "R$ 1.252,97"
 },
 {
   "ITEM": 2120335,
   "ESPEC": "CAPA ASF MAIS DE 2M EX LESG COMPX C",
   "NPRECO": 72001265,
   "UNID": "un",
   "PUNIT": "R$ 514,16"
 },
 {
   "ITEM": 2120334,
   "ESPEC": "CAPA ASF MAIS DE 2M TA LESG COMPX A",
   "NPRECO": 72001353,
   "UNID": "un",
   "PUNIT": "R$ 775,51"
 },
 {
   "ITEM": 2120333,
   "ESPEC": "CAPA ASF MAIS DE 2M TA LESG COMPX B",
   "NPRECO": 72001354,
   "UNID": "un",
   "PUNIT": "R$ 775,51"
 },
 {
   "ITEM": 2120332,
   "ESPEC": "CAPA ASF MAIS DE 2M TA LESG COMPX C",
   "NPRECO": 72001355,
   "UNID": "un",
   "PUNIT": "R$ 321,18"
 },
 {
   "ITEM": 2120340,
   "ESPEC": "CAPA ASF MAIS DE 2M TO LESG COMPX A",
   "NPRECO": 72001380,
   "UNID": "un",
   "PUNIT": "R$ 1.730,43"
 },
 {
   "ITEM": 2120339,
   "ESPEC": "CAPA ASF MAIS DE 2M TO LESG COMPX B",
   "NPRECO": 72001381,
   "UNID": "un",
   "PUNIT": "R$ 1.730,43"
 },
 {
   "ITEM": 2120338,
   "ESPEC": "CAPA ASF MAIS DE 2M TO LESG COMPX C",
   "NPRECO": 72001382,
   "UNID": "un",
   "PUNIT": "R$ 707,13"
 },
 {
   "ITEM": 2020508,
   "ESPEC": "CAPA ASF MND LAG AVUL COMPX A",
   "NPRECO": 72001284,
   "UNID": "un",
   "PUNIT": "R$ 360,87"
 },
 {
   "ITEM": 2020507,
   "ESPEC": "CAPA ASF MND LAG AVUL COMPX B",
   "NPRECO": 72001285,
   "UNID": "un",
   "PUNIT": "R$ 360,87"
 },
 {
   "ITEM": 2020506,
   "ESPEC": "CAPA ASF MND LAG AVUL COMPX C",
   "NPRECO": 72001286,
   "UNID": "un",
   "PUNIT": "R$ 150,12"
 },
 {
   "ITEM": 2080408,
   "ESPEC": "CAPA ASF MND LAG SUCES COMPX A",
   "NPRECO": 72001287,
   "UNID": "un",
   "PUNIT": "R$ 360,87"
 },
 {
   "ITEM": 2080407,
   "ESPEC": "CAPA ASF MND LAG SUCES COMPX B",
   "NPRECO": 72001288,
   "UNID": "un",
   "PUNIT": "R$ 360,87"
 },
 {
   "ITEM": 2080406,
   "ESPEC": "CAPA ASF MND LAG SUCES COMPX C",
   "NPRECO": 72001289,
   "UNID": "un",
   "PUNIT": "R$ 150,12"
 },
 {
   "ITEM": 2030608,
   "ESPEC": "CAPA ASF MND TRA CORR COMPX A",
   "NPRECO": 72001290,
   "UNID": "un",
   "PUNIT": "R$ 362,19"
 },
 {
   "ITEM": 2030607,
   "ESPEC": "CAPA ASF MND TRA CORR COMPX B",
   "NPRECO": 72001291,
   "UNID": "un",
   "PUNIT": "R$ 362,19"
 },
 {
   "ITEM": 2030606,
   "ESPEC": "CAPA ASF MND TRA CORR COMPX C",
   "NPRECO": 72001292,
   "UNID": "un",
   "PUNIT": "R$ 150,62"
 },
 {
   "ITEM": 2030808,
   "ESPEC": "CAPA ASF MND TRA PREV COMPX A",
   "NPRECO": 72001293,
   "UNID": "un",
   "PUNIT": "R$ 360,87"
 },
 {
   "ITEM": 2030807,
   "ESPEC": "CAPA ASF MND TRA PREV COMPX B",
   "NPRECO": 72001294,
   "UNID": "un",
   "PUNIT": "R$ 360,87"
 },
 {
   "ITEM": 2030806,
   "ESPEC": "CAPA ASF MND TRA PREV COMPX C",
   "NPRECO": 72001295,
   "UNID": "un",
   "PUNIT": "R$ 150,12"
 },
 {
   "ITEM": 1060508,
   "ESPEC": "CAPA ASF NIV CX PARADA COMPX A",
   "NPRECO": 72001256,
   "UNID": "un",
   "PUNIT": "R$ 153,51"
 },
 {
   "ITEM": 1060507,
   "ESPEC": "CAPA ASF NIV CX PARADA COMPX B",
   "NPRECO": 72001257,
   "UNID": "un",
   "PUNIT": "R$ 153,51"
 },
 {
   "ITEM": 1060506,
   "ESPEC": "CAPA ASF NIV CX PARADA COMPX C",
   "NPRECO": 72001258,
   "UNID": "un",
   "PUNIT": "R$ 66,77"
 },
 {
   "ITEM": 2060321,
   "ESPEC": "CAPA ASF PRA 200 A 250 COMPX A",
   "NPRECO": 72001244,
   "UNID": "M",
   "PUNIT": "R$ 255,14"
 },
 {
   "ITEM": 2060320,
   "ESPEC": "CAPA ASF PRA 200 A 250 COMPX B",
   "NPRECO": 72001245,
   "UNID": "M",
   "PUNIT": "R$ 250,79"
 },
 {
   "ITEM": 2060319,
   "ESPEC": "CAPA ASF PRA 200 A 250 COMPX C",
   "NPRECO": 72001246,
   "UNID": "M",
   "PUNIT": "R$ 106,14"
 },
 {
   "ITEM": 2060324,
   "ESPEC": "CAPA ASF PRA 300 A 400 COMPX A",
   "NPRECO": 72001247,
   "UNID": "M",
   "PUNIT": "R$ 289,43"
 },
 {
   "ITEM": 2060323,
   "ESPEC": "CAPA ASF PRA 300 A 400 COMPX B",
   "NPRECO": 72001248,
   "UNID": "M",
   "PUNIT": "R$ 289,43"
 },
 {
   "ITEM": 2060322,
   "ESPEC": "CAPA ASF PRA 300 A 400 COMPX C",
   "NPRECO": 72001249,
   "UNID": "M",
   "PUNIT": "R$ 121,30"
 },
 {
   "ITEM": 2060318,
   "ESPEC": "CAPA ASF PRA 50 A 150 COMPX A",
   "NPRECO": 72001171,
   "UNID": "M",
   "PUNIT": "R$ 215,83"
 },
 {
   "ITEM": 2060317,
   "ESPEC": "CAPA ASF PRA 50 A 150 COMPX B",
   "NPRECO": 72001242,
   "UNID": "M",
   "PUNIT": "R$ 215,83"
 },
 {
   "ITEM": 2060316,
   "ESPEC": "CAPA ASF PRA 50 A 150 COMPX C",
   "NPRECO": 72001243,
   "UNID": "M",
   "PUNIT": "R$ 92,55"
 },
 {
   "ITEM": 1090115,
   "ESPEC": "CAPA ASF SERV. AG",
   "NPRECO": 72000861,
   "UNID": "M3",
   "PUNIT": "R$ 3.479,84"
 },
 {
   "ITEM": 1090116,
   "ESPEC": "CAPA ASF SERV. ESG",
   "NPRECO": 72000862,
   "UNID": "M3",
   "PUNIT": "R$ 3.479,84"
 },
 {
   "ITEM": 1040208,
   "ESPEC": "CAPA ASF SUPR RELIG AG COMPX A",
   "NPRECO": 72001344,
   "UNID": "un",
   "PUNIT": "R$ 267,06"
 },
 {
   "ITEM": 1040207,
   "ESPEC": "CAPA ASF SUPR RELIG AG COMPX B",
   "NPRECO": 72001345,
   "UNID": "un",
   "PUNIT": "R$ 262,51"
 },
 {
   "ITEM": 1040206,
   "ESPEC": "CAPA ASF SUPR RELIG AG COMPX C",
   "NPRECO": 72001346,
   "UNID": "un",
   "PUNIT": "R$ 110,37"
 },
 {
   "ITEM": 2020314,
   "ESPEC": "CAPA ASF TA LAG AVUL COMPX A",
   "NPRECO": 72001347,
   "UNID": "un",
   "PUNIT": "R$ 413,23"
 },
 {
   "ITEM": 2020313,
   "ESPEC": "CAPA ASF TA LAG AVUL COMPX B",
   "NPRECO": 72001348,
   "UNID": "un",
   "PUNIT": "R$ 413,23"
 },
 {
   "ITEM": 2020312,
   "ESPEC": "CAPA ASF TA LAG AVUL COMPX C",
   "NPRECO": 72001349,
   "UNID": "un",
   "PUNIT": "R$ 177,82"
 },
 {
   "ITEM": 2080214,
   "ESPEC": "CAPA ASF TA LAG SUCES COMPX A",
   "NPRECO": 72001239,
   "UNID": "un",
   "PUNIT": "R$ 166,88"
 },
 {
   "ITEM": 2080213,
   "ESPEC": "CAPA ASF TA LAG SUCES COMPX B",
   "NPRECO": 72001240,
   "UNID": "un",
   "PUNIT": "R$ 166,88"
 },
 {
   "ITEM": 2080212,
   "ESPEC": "CAPA ASF TA LAG SUCES COMPX C",
   "NPRECO": 72001241,
   "UNID": "un",
   "PUNIT": "R$ 74,44"
 },
 {
   "ITEM": 2150214,
   "ESPEC": "CAPA ASF TA LESG SUCES COMPX A",
   "NPRECO": 72001236,
   "UNID": "un",
   "PUNIT": "R$ 405,97"
 },
 {
   "ITEM": 2150213,
   "ESPEC": "CAPA ASF TA LESG SUCES COMPX B",
   "NPRECO": 72001237,
   "UNID": "un",
   "PUNIT": "R$ 405,97"
 },
 {
   "ITEM": 2150212,
   "ESPEC": "CAPA ASF TA LESG SUCES COMPX C",
   "NPRECO": 72001238,
   "UNID": "un",
   "PUNIT": "R$ 168,86"
 },
 {
   "ITEM": 2030414,
   "ESPEC": "CAPA ASF TA TRA PREV COMPX A",
   "NPRECO": 72001371,
   "UNID": "un",
   "PUNIT": "R$ 454,59"
 },
 {
   "ITEM": 2030413,
   "ESPEC": "CAPA ASF TA TRA PREV COMPX B",
   "NPRECO": 72001372,
   "UNID": "un",
   "PUNIT": "R$ 454,69"
 },
 {
   "ITEM": 2030412,
   "ESPEC": "CAPA ASF TA TRA PREV COMPX C",
   "NPRECO": 72001373,
   "UNID": "un",
   "PUNIT": "R$ 210,90"
 },
 {
   "ITEM": 2020320,
   "ESPEC": "CAPA ASF TO LAG AVUL COMPX A",
   "NPRECO": 72001374,
   "UNID": "un",
   "PUNIT": "R$ 1.053,13"
 },
 {
   "ITEM": 2020319,
   "ESPEC": "CAPA ASF TO LAG AVUL COMPX B",
   "NPRECO": 72001375,
   "UNID": "un",
   "PUNIT": "R$ 1.053,13"
 },
 {
   "ITEM": 2020318,
   "ESPEC": "CAPA ASF TO LAG AVUL COMPX C",
   "NPRECO": 72001376,
   "UNID": "un",
   "PUNIT": "R$ 453,50"
 },
 {
   "ITEM": 2080220,
   "ESPEC": "CAPA ASF TO LAG SUCES COMPX A",
   "NPRECO": 72001386,
   "UNID": "un",
   "PUNIT": "R$ 806,78"
 },
 {
   "ITEM": 2080219,
   "ESPEC": "CAPA ASF TO LAG SUCES COMPX B",
   "NPRECO": 72001387,
   "UNID": "un",
   "PUNIT": "R$ 806,78"
 },
 {
   "ITEM": 2080218,
   "ESPEC": "CAPA ASF TO LAG SUCES COMPX C",
   "NPRECO": 72001388,
   "UNID": "un",
   "PUNIT": "R$ 350,12"
 },
 {
   "ITEM": 2150220,
   "ESPEC": "CAPA ASF TO LESG SUCES COMPX A",
   "NPRECO": 72001383,
   "UNID": "un",
   "PUNIT": "R$ 1.360,88"
 },
 {
   "ITEM": 2150219,
   "ESPEC": "CAPA ASF TO LESG SUCES COMPX B",
   "NPRECO": 72001384,
   "UNID": "un",
   "PUNIT": "R$ 1.360,88"
 },
 {
   "ITEM": 2150218,
   "ESPEC": "CAPA ASF TO LESG SUCES COMPX C",
   "NPRECO": 72001385,
   "UNID": "un",
   "PUNIT": "R$ 554,81"
 },
 {
   "ITEM": 2030420,
   "ESPEC": "CAPA ASF TO TRA PREV COMPX A",
   "NPRECO": 72001398,
   "UNID": "un",
   "PUNIT": "R$ 1.266,78"
 },
 {
   "ITEM": 2030419,
   "ESPEC": "CAPA ASF TO TRA PREV COMPX B",
   "NPRECO": 72001399,
   "UNID": "un",
   "PUNIT": "R$ 1.266,78"
 },
 {
   "ITEM": 2030418,
   "ESPEC": "CAPA ASF TO TRA PREV COMPX C",
   "NPRECO": 72001400,
   "UNID": "un",
   "PUNIT": "R$ 624,42"
 },
 {
   "ITEM": 2030217,
   "ESPEC": "CAPA ASF  EX TRA CORR COMPX A",
   "NPRECO": 72000157,
   "UNID": "un",
   "PUNIT": "R$ 860,68"
 },
 {
   "ITEM": 2030216,
   "ESPEC": "CAPA ASF  EX TRA CORR COMPX B",
   "NPRECO": 72000156,
   "UNID": "un",
   "PUNIT": "R$ 860,68"
 },
 {
   "ITEM": 2030215,
   "ESPEC": "CAPA ASF  EX TRA CORR COMPX C",
   "NPRECO": 72000155,
   "UNID": "un",
   "PUNIT": "R$ 417,66"
 },
 {
   "ITEM": 2030214,
   "ESPEC": "CAPA ASF  TA TRA CORR COMPX A",
   "NPRECO": 72000154,
   "UNID": "un",
   "PUNIT": "R$ 454,59"
 },
 {
   "ITEM": 2030213,
   "ESPEC": "CAPA ASF  TA TRA CORR COMPX B",
   "NPRECO": 72000153,
   "UNID": "un",
   "PUNIT": "R$ 454,59"
 },
 {
   "ITEM": 2030212,
   "ESPEC": "CAPA ASF  TA TRA CORR COMPX C",
   "NPRECO": 72000152,
   "UNID": "un",
   "PUNIT": "R$ 210,90"
 },
 {
   "ITEM": 2030220,
   "ESPEC": "CAPA ASF  TO TRA CORR COMPX A",
   "NPRECO": 72000160,
   "UNID": "un",
   "PUNIT": "R$ 1.266,78"
 },
 {
   "ITEM": 2030219,
   "ESPEC": "CAPA ASF  TO TRA CORR COMPX B",
   "NPRECO": 72000159,
   "UNID": "un",
   "PUNIT": "R$ 1.266,78"
 },
 {
   "ITEM": 2030218,
   "ESPEC": "CAPA ASF  TO TRA CORR COMPX C",
   "NPRECO": 72000158,
   "UNID": "un",
   "PUNIT": "R$ 624,42"
 },
 {
   "ITEM": 2120201,
   "ESPEC": "CMPL CER/PVC LE AVUL 100/150 S/REP SF",
   "NPRECO": 72000477,
   "UNID": "un",
   "PUNIT": "R$ 399,45"
 },
 {
   "ITEM": 1060403,
   "ESPEC": "CMPL ESC CAVAS MAIS DE 2M SERV. AG",
   "NPRECO": 72000892,
   "UNID": "M3",
   "PUNIT": "R$ 352,81"
 },
 {
   "ITEM": 1080219,
   "ESPEC": "CMPL ESCAV DE 4 ATE 6M SERV. ESG",
   "NPRECO": 72000893,
   "UNID": "M3",
   "PUNIT": "R$ 310,62"
 },
 {
   "ITEM": 2070320,
   "ESPEC": "CONCRETO CONST. PECAS",
   "NPRECO": 72000896,
   "UNID": "M3",
   "PUNIT": "R$ 2.787,81"
 },
 {
   "ITEM": 1090119,
   "ESPEC": "CONCRETO FECH. DE VALAS SERV. AG",
   "NPRECO": 72000865,
   "UNID": "M3",
   "PUNIT": "R$ 644,25"
 },
 {
   "ITEM": 1090120,
   "ESPEC": "CONCRETO FECH. DE VALAS SERV. ESG",
   "NPRECO": 72000866,
   "UNID": "M3",
   "PUNIT": "R$ 644,25"
 },
 {
   "ITEM": 2070313,
   "ESPEC": "CONST CX ALVEN VOLUME ACIMA DE 10M3",
   "NPRECO": 72000452,
   "UNID": "M3",
   "PUNIT": "R$ 2.115,25"
 },
 {
   "ITEM": 2070311,
   "ESPEC": "CONST CX ALVEN VOLUME ATE 5M3",
   "NPRECO": 72000450,
   "UNID": "M3",
   "PUNIT": "R$ 3.469,28"
 },
 {
   "ITEM": 2070312,
   "ESPEC": "CONST CX ALVEN VOLUME DE 5 A 10M3",
   "NPRECO": 72000451,
   "UNID": "M3",
   "PUNIT": "R$ 2.600,82"
 },
 {
   "ITEM": 2070316,
   "ESPEC": "CONST CX CA VOLUME ACIMA DE 10M3",
   "NPRECO": 72000455,
   "UNID": "M3",
   "PUNIT": "R$ 2.493,71"
 },
 {
   "ITEM": 2070314,
   "ESPEC": "CONST CX CA VOLUME ATE 5M3",
   "NPRECO": 72000453,
   "UNID": "M3",
   "PUNIT": "R$ 4.007,20"
 },
 {
   "ITEM": 2070315,
   "ESPEC": "CONST CX CA VOLUME DE 5 A 10M3",
   "NPRECO": 72000454,
   "UNID": "M3",
   "PUNIT": "R$ 3.067,79"
 },
 {
   "ITEM": 2140409,
   "ESPEC": "CONST PI ATE 2M S/REP",
   "NPRECO": 72000759,
   "UNID": "un",
   "PUNIT": "R$ 3.931,01"
 },
 {
   "ITEM": 2140410,
   "ESPEC": "CONST PI DE 2 A 3M S/REP",
   "NPRECO": 72000760,
   "UNID": "un",
   "PUNIT": "R$ 4.972,38"
 },
 {
   "ITEM": 2140406,
   "ESPEC": "CPV DIAM = 1,20M - DE 2 A 3M - S/ REP",
   "NPRECO": 72000748,
   "UNID": "un",
   "PUNIT": "R$ 7.775,18"
 },
 {
   "ITEM": 2140407,
   "ESPEC": "CPV DIAM = 1,20M - DE 3 A 4M - S/ REP",
   "NPRECO": 72000749,
   "UNID": "un",
   "PUNIT": "R$ 9.292,93"
 },
 {
   "ITEM": 2140408,
   "ESPEC": "CPV DIAM = 1,20M - DE 4 A 5M - S/ REP",
   "NPRECO": 72000750,
   "UNID": "un",
   "PUNIT": "R$ 11.599,63"
 },
 {
   "ITEM": 2140405,
   "ESPEC": "CPV DIAM = 1,20M - PROF ATE 2M S/REP",
   "NPRECO": 72000747,
   "UNID": "un",
   "PUNIT": "R$ 5.656,52"
 },
 {
   "ITEM": 2140401,
   "ESPEC": "CPV DIAM = 1M - PROF ATE 2M S/REP",
   "NPRECO": 72000743,
   "UNID": "un",
   "PUNIT": "R$ 5.204,41"
 },
 {
   "ITEM": 2140402,
   "ESPEC": "CPV DIAM = 1M - PROF DE 2 A 3M S/REP",
   "NPRECO": 72000744,
   "UNID": "un",
   "PUNIT": "R$ 6.923,84"
 },
 {
   "ITEM": 2140403,
   "ESPEC": "CPV DIAM = 1M - PROF DE 3 A 4M S/REP",
   "NPRECO": 72000745,
   "UNID": "un",
   "PUNIT": "R$ 8.264,56"
 },
 {
   "ITEM": 2140404,
   "ESPEC": "CPV DIAM = 1M - PROF DE 4 A 5M S/REP",
   "NPRECO": 72000746,
   "UNID": "un",
   "PUNIT": "R$ 10.335,35"
 },
 {
   "ITEM": 1080503,
   "ESPEC": "DESASSOREAMENT LIMP POCOS CXS E TUB EEES",
   "NPRECO": 72000985,
   "UNID": "H",
   "PUNIT": "R$ 619,70"
 },
 {
   "ITEM": 1030105,
   "ESPEC": "DESINCL HIDRO",
   "NPRECO": 72000236,
   "UNID": "un",
   "PUNIT": "R$ 12,81"
 },
 {
   "ITEM": 2070319,
   "ESPEC": "DESMONT ROCHA A FRIO",
   "NPRECO": 72000895,
   "UNID": "M3",
   "PUNIT": "R$ 518,66"
 },
 {
   "ITEM": 1060402,
   "ESPEC": "DET CX DESC, NIV CX PARADA S/REP",
   "NPRECO": 72000339,
   "UNID": "un",
   "PUNIT": "R$ 646,22"
 },
 {
   "ITEM": 2110101,
   "ESPEC": "DIAGNÓST REDES COLET C/ ONDAS ACÚSTICAS",
   "NPRECO": 72000846,
   "UNID": "un",
   "PUNIT": "R$ 41,08"
 },
 {
   "ITEM": 1100111,
   "ESPEC": "EQUIPE DESMONTE DE ROCHA - À FRIO",
   "NPRECO": 72000913,
   "UNID": "EQD",
   "PUNIT": "R$ 6.916,09"
 },
 {
   "ITEM": 1100112,
   "ESPEC": "EQUIPE DESMONTE PAV RÍGIDO - À FRIO",
   "NPRECO": 72000914,
   "UNID": "EQD",
   "PUNIT": "R$ 4.702,77"
 },
 {
   "ITEM": 1100110,
   "ESPEC": "EQUIPE PARA SERVIÇOS DE TOPOGRAFIA",
   "NPRECO": 72000912,
   "UNID": "EQD",
   "PUNIT": "R$ 1.188,61"
 },
 {
   "ITEM": 1100108,
   "ESPEC": "EQUIPE SERV ESPECIAIS - E + A - Água",
   "NPRECO": 72000910,
   "UNID": "EQD",
   "PUNIT": "R$ 1.981,70"
 },
 {
   "ITEM": 1100113,
   "ESPEC": "EQUIPE SERV ESPECIAIS - EQUIPAMENTOS",
   "NPRECO": 72000915,
   "UNID": "EQD",
   "PUNIT": "R$ 2.678,42"
 },
 {
   "ITEM": 1100109,
   "ESPEC": "EQUIPE SERV ESPECIAIS- E+A+A - Esgoto",
   "NPRECO": 72000911,
   "UNID": "EQD",
   "PUNIT": "R$ 2.411,97"
 },
 {
   "ITEM": 1090123,
   "ESPEC": "EXEC PASS CIMENTADO",
   "NPRECO": 72000869,
   "UNID": "M2",
   "PUNIT": "R$ 120,57"
 },
 {
   "ITEM": 1090122,
   "ESPEC": "EXEC PASS ESPECIAL",
   "NPRECO": 72000868,
   "UNID": "M2",
   "PUNIT": "R$ 259,24"
 },
 {
   "ITEM": 2180202,
   "ESPEC": "EXP.MONIT.INTERF.DISTAN. 2 DN",
   "NPRECO": 421512,
   "UNID": "M3",
   "PUNIT": "R$ 724,93"
 },
 {
   "ITEM": 1090308,
   "ESPEC": "FORN ARDOSIA SERRADA",
   "NPRECO": 72000886,
   "UNID": "M2",
   "PUNIT": "R$ 33,28"
 },
 {
   "ITEM": 1090303,
   "ESPEC": "FORN BLOCOS DE CONCRETO",
   "NPRECO": 72000881,
   "UNID": "M2",
   "PUNIT": "R$ 93,57"
 },
 {
   "ITEM": 1090306,
   "ESPEC": "FORN CACO CERAMICO",
   "NPRECO": 72000884,
   "UNID": "M2",
   "PUNIT": "R$ 23,43"
 },
 {
   "ITEM": 1090307,
   "ESPEC": "FORN GRANITO - MIRACEMA",
   "NPRECO": 72000885,
   "UNID": "M2",
   "PUNIT": "R$ 53,38"
 },
 {
   "ITEM": 1090301,
   "ESPEC": "FORN GUIAS",
   "NPRECO": 72000879,
   "UNID": "M",
   "PUNIT": "R$ 49,61"
 },
 {
   "ITEM": 1090304,
   "ESPEC": "FORN LADRILHOS",
   "NPRECO": 72000882,
   "UNID": "M2",
   "PUNIT": "R$ 81,62"
 },
 {
   "ITEM": 1090310,
   "ESPEC": "FORN LAJOTAO",
   "NPRECO": 72000888,
   "UNID": "M2",
   "PUNIT": "R$ 90,00"
 },
 {
   "ITEM": 1090309,
   "ESPEC": "FORN LUMINARIA",
   "NPRECO": 72000887,
   "UNID": "M2",
   "PUNIT": "R$ 234,85"
 },
 {
   "ITEM": 1090305,
   "ESPEC": "FORN MOSAICOS",
   "NPRECO": 72000883,
   "UNID": "M2",
   "PUNIT": "R$ 116,78"
 },
 {
   "ITEM": 1090302,
   "ESPEC": "FORN PARALELEPIPEDO",
   "NPRECO": 72000880,
   "UNID": "M2",
   "PUNIT": "R$ 123,30"
 },
 {
   "ITEM": 2040112,
   "ESPEC": "FORNEC CAIXA UMAP",
   "NPRECO": 72000890,
   "UNID": "un",
   "PUNIT": "R$ 375,76"
 },
 {
   "ITEM": 1090202,
   "ESPEC": "FORNEC INS TACHA REFLET BIDIRECIONAL",
   "NPRECO": 72000442,
   "UNID": "un",
   "PUNIT": "R$ 31,75"
 },
 {
   "ITEM": 1090201,
   "ESPEC": "FORNEC INST TACHA REFLET MONODIRECIONAL",
   "NPRECO": 72000441,
   "UNID": "un",
   "PUNIT": "R$ 26,59"
 },
 {
   "ITEM": 1090204,
   "ESPEC": "FORNEC INST TACHAO REFLET BIDIRECIONAL",
   "NPRECO": 72000444,
   "UNID": "un",
   "PUNIT": "R$ 100,14"
 },
 {
   "ITEM": 1090203,
   "ESPEC": "FORNEC INST TACHAO REFLET MONODIRECIONAL",
   "NPRECO": 72000443,
   "UNID": "un",
   "PUNIT": "R$ 98,33"
 },
 {
   "ITEM": 1100101,
   "ESPEC": "FORNEC LAJE C/ TAMPÃO ART 600MM ou 900MM",
   "NPRECO": 72000891,
   "UNID": "un",
   "PUNIT": "R$ 1.285,67"
 },
 {
   "ITEM": 1090311,
   "ESPEC": "FORNEC SELAGEM BASE",
   "NPRECO": 72000889,
   "UNID": "TON",
   "PUNIT": "R$ 2.128,00"
 },
 {
   "ITEM": 1090125,
   "ESPEC": "FRESA ASF E RECAP CBUQ - ACIMA DE 100M2",
   "NPRECO": 72000871,
   "UNID": "M2",
   "PUNIT": "R$ 150,16"
 },
 {
   "ITEM": 1090124,
   "ESPEC": "FRESA ASF E RECAP CBUQ - ATE 100M2",
   "NPRECO": 72000870,
   "UNID": "M2",
   "PUNIT": "R$ 248,68"
 },
 {
   "ITEM": 1100103,
   "ESPEC": "GEOR EQUIPE CADGEO",
   "NPRECO": 72000901,
   "UNID": "EQD",
   "PUNIT": "R$ 1.441,85"
 },
 {
   "ITEM": 2020601,
   "ESPEC": "INCL LIG EM CV MULT",
   "NPRECO": 72000210,
   "UNID": "un",
   "PUNIT": "R$ 263,56"
 },
 {
   "ITEM": 2020602,
   "ESPEC": "INCL LIG EM UMA MULT",
   "NPRECO": 72000211,
   "UNID": "un",
   "PUNIT": "R$ 54,21"
 },
 {
   "ITEM": 1100107,
   "ESPEC": "INSPEÇÃO DE FALTA DE ÁGUA LOCAL",
   "NPRECO": 72000909,
   "UNID": "un",
   "PUNIT": "R$ 40,37"
 },
 {
   "ITEM": 2110104,
   "ESPEC": "INSPECAO DE PVS E GAPS",
   "NPRECO": 72000977,
   "UNID": "un",
   "PUNIT": "R$ 145,66"
 },
 {
   "ITEM": 2110103,
   "ESPEC": "INSPECAO EM LIGACAO DE ESGOTO AVULSA",
   "NPRECO": 72000976,
   "UNID": "un",
   "PUNIT": "R$ 80,95"
 },
 {
   "ITEM": 2110102,
   "ESPEC": "INSPECAO EM LIGACAO ESGOTO VARREDURA",
   "NPRECO": 72000975,
   "UNID": "un",
   "PUNIT": "R$ 64,62"
 },
 {
   "ITEM": 2110105,
   "ESPEC": "INSPECAO REDE COLETORA",
   "NPRECO": 72000978,
   "UNID": "KM",
   "PUNIT": "R$ 992,97"
 },
 {
   "ITEM": 2040103,
   "ESPEC": "INST CX UMA",
   "NPRECO": 72000213,
   "UNID": "un",
   "PUNIT": "R$ 263,39"
 },
 {
   "ITEM": 2040102,
   "ESPEC": "INST CX UMA COM CONSTRUCAO DE MURETA",
   "NPRECO": 72000212,
   "UNID": "un",
   "PUNIT": "R$ 695,34"
 },
 {
   "ITEM": 2170107,
   "ESPEC": "INST DE CXA DE INSPEÇÃO ESG 45x45x60 CM",
   "NPRECO": 72000907,
   "UNID": "un",
   "PUNIT": "R$ 642,26"
 },
 {
   "ITEM": 2180102,
   "ESPEC": "INST E ABAST PROV ATRAVÉS DE BY-PASS",
   "NPRECO": 421510,
   "UNID": "M",
   "PUNIT": "R$ 18,76"
 },
 {
   "ITEM": 2180104,
   "ESPEC": "INST VÁLV FF FL DN 80MM A 150MM (SFMH)",
   "NPRECO": 421541,
   "UNID": "un",
   "PUNIT": "R$ 428,49"
 },
 {
   "ITEM": 2040109,
   "ESPEC": "INSTAL CAIXA PARA UMAP",
   "NPRECO": 72000223,
   "UNID": "un",
   "PUNIT": "R$ 215,49"
 },
 {
   "ITEM": 2040106,
   "ESPEC": "INSTAL CAIXA PARA UMAP",
   "NPRECO": 72000216,
   "UNID": "un",
   "PUNIT": "R$ 253,25"
 },
 {
   "ITEM": 2070105,
   "ESPEC": "INSTVL FC 50 A 100 S/REP SF",
   "NPRECO": 72000432,
   "UNID": "un",
   "PUNIT": "R$ 1.169,10"
 },
 {
   "ITEM": 2070103,
   "ESPEC": "INSTVL FF 150 A 250 S/REP SF",
   "NPRECO": 72000430,
   "UNID": "un",
   "PUNIT": "R$ 891,63"
 },
 {
   "ITEM": 2070104,
   "ESPEC": "INSTVL FF 300 A 400 S/REP SF",
   "NPRECO": 72000431,
   "UNID": "un",
   "PUNIT": "R$ 1.334,15"
 },
 {
   "ITEM": 2070102,
   "ESPEC": "INSTVL FF 50 A 100 S/REP SF",
   "NPRECO": 72000429,
   "UNID": "un",
   "PUNIT": "R$ 679,52"
 },
 {
   "ITEM": 2070101,
   "ESPEC": "INSTVL PVC 50 A 100 S/REP SF",
   "NPRECO": 72000428,
   "UNID": "un",
   "PUNIT": "R$ 630,40"
 },
 {
   "ITEM": 2180105,
   "ESPEC": "INT RD EXIST CON FL DN 80 A 150MM (SFMH)",
   "NPRECO": 421542,
   "UNID": "un",
   "PUNIT": "R$ 1.086,40"
 },
 {
   "ITEM": 2060405,
   "ESPEC": "INTL 200 A 400 FLANG SF",
   "NPRECO": 72000393,
   "UNID": "un",
   "PUNIT": "R$ 3.032,56"
 },
 {
   "ITEM": 2060404,
   "ESPEC": "INTL 80 A 150 FLANG SF",
   "NPRECO": 72000392,
   "UNID": "un",
   "PUNIT": "R$ 1.399,57"
 },
 {
   "ITEM": 2060402,
   "ESPEC": "INTL PVC/PEAD/FF/FC 150 A 250 S/REP SF",
   "NPRECO": 72000390,
   "UNID": "un",
   "PUNIT": "R$ 2.562,35"
 },
 {
   "ITEM": 2060403,
   "ESPEC": "INTL PVC/PEAD/FF/FC 300 A 400 S/REP SF",
   "NPRECO": 72000391,
   "UNID": "un",
   "PUNIT": "R$ 3.274,18"
 },
 {
   "ITEM": 2060401,
   "ESPEC": "INTL PVC/PEAD/FF/FC 50 A 100 S/REP SF",
   "NPRECO": 72000389,
   "UNID": "un",
   "PUNIT": "R$ 1.513,80"
 },
 {
   "ITEM": 2180101,
   "ESPEC": "INV NÃO INV DE SUBSOLO - GPR GEORADAR",
   "NPRECO": 421501,
   "UNID": "EQD",
   "PUNIT": "R$ 4.803,49"
 },
 {
   "ITEM": 1030104,
   "ESPEC": "LACRACAO HIDROMETRO",
   "NPRECO": 72000235,
   "UNID": "un",
   "PUNIT": "R$ 11,52"
 },
 {
   "ITEM": 2020103,
   "ESPEC": "LAG ATE 32MM EX AVUL S/REP SF",
   "NPRECO": 72000054,
   "UNID": "un",
   "PUNIT": "R$ 639,99"
 },
 {
   "ITEM": 2020401,
   "ESPEC": "LAG ATE 32MM MND AVUL S/REP SF",
   "NPRECO": 72000048,
   "UNID": "un",
   "PUNIT": "R$ 829,54"
 },
 {
   "ITEM": 2020101,
   "ESPEC": "LAG ATE 32MM PA AVUL S/REP SF",
   "NPRECO": 72000052,
   "UNID": "un",
   "PUNIT": "R$ 353,87"
 },
 {
   "ITEM": 2020105,
   "ESPEC": "LAG ATE 32MM PO AVUL S/REP SF",
   "NPRECO": 72000056,
   "UNID": "un",
   "PUNIT": "R$ 951,44"
 },
 {
   "ITEM": 2020102,
   "ESPEC": "LAG ATE 32MM TA AVUL S/REP SF",
   "NPRECO": 72000053,
   "UNID": "un",
   "PUNIT": "R$ 519,30"
 },
 {
   "ITEM": 2020104,
   "ESPEC": "LAG ATE 32MM TO AVUL S/REP SF",
   "NPRECO": 72000055,
   "UNID": "un",
   "PUNIT": "R$ 838,70"
 },
 {
   "ITEM": 2020204,
   "ESPEC": "LAG DN100 HD1800 SF",
   "NPRECO": 72000079,
   "UNID": "un",
   "PUNIT": "R$ 3.172,88"
 },
 {
   "ITEM": 2020201,
   "ESPEC": "LAG DN50 HD30 SF",
   "NPRECO": 72000076,
   "UNID": "un",
   "PUNIT": "R$ 1.832,57"
 },
 {
   "ITEM": 2020202,
   "ESPEC": "LAG DN50 HD300 SF",
   "NPRECO": 72000077,
   "UNID": "un",
   "PUNIT": "R$ 2.254,00"
 },
 {
   "ITEM": 2020203,
   "ESPEC": "LAG DN80 HD1100 SF",
   "NPRECO": 72000078,
   "UNID": "un",
   "PUNIT": "R$ 3.027,09"
 },
 {
   "ITEM": 2080103,
   "ESPEC": "LAG EX SUCES S/REP SF",
   "NPRECO": 72000035,
   "UNID": "un",
   "PUNIT": "R$ 410,84"
 },
 {
   "ITEM": 2080301,
   "ESPEC": "LAG MND SUCES S/REP SF",
   "NPRECO": 72000049,
   "UNID": "un",
   "PUNIT": "R$ 634,87"
 },
 {
   "ITEM": 2080101,
   "ESPEC": "LAG PA SUCES S/REP SF",
   "NPRECO": 72000033,
   "UNID": "un",
   "PUNIT": "R$ 123,71"
 },
 {
   "ITEM": 2080105,
   "ESPEC": "LAG PO SUCES S/REP SF",
   "NPRECO": 72000037,
   "UNID": "un",
   "PUNIT": "R$ 687,98"
 },
 {
   "ITEM": 2080102,
   "ESPEC": "LAG TA SUCES S/REP SF",
   "NPRECO": 72000034,
   "UNID": "un",
   "PUNIT": "R$ 308,16"
 },
 {
   "ITEM": 2080104,
   "ESPEC": "LAG TO SUCES S/REP SF",
   "NPRECO": 72000036,
   "UNID": "un",
   "PUNIT": "R$ 573,81"
 },
 {
   "ITEM": 1080404,
   "ESPEC": "LAVAGEM HID ALTA PRES C SUCÇÃO À VÁC NOT",
   "NPRECO": 72000844,
   "UNID": "M",
   "PUNIT": "R$ 19,54"
 },
 {
   "ITEM": 1080405,
   "ESPEC": "LAVAGEM HIDROJ ALTA PRESS",
   "NPRECO": 72000972,
   "UNID": "M",
   "PUNIT": "R$ 7,84"
 },
 {
   "ITEM": 1080403,
   "ESPEC": "LAVAGEM HIDROJ ALTA PRESS C SUCÇÃO À VÁC",
   "NPRECO": 72000843,
   "UNID": "M",
   "PUNIT": "R$ 18,59"
 },
 {
   "ITEM": 1080406,
   "ESPEC": "LAVAGEM HIDROJ ALTA PRESS NOTURNO",
   "NPRECO": 72000973,
   "UNID": "M",
   "PUNIT": "R$ 8,28"
 },
 {
   "ITEM": 2120103,
   "ESPEC": "LESG CER/PVC ATE 2M EX AVUL S/REP SF",
   "NPRECO": 72000469,
   "UNID": "un",
   "PUNIT": "R$ 1.701,79"
 },
 {
   "ITEM": 2120101,
   "ESPEC": "LESG CER/PVC ATE 2M PA AVUL S/REP SF",
   "NPRECO": 72000005,
   "UNID": "un",
   "PUNIT": "R$ 971,91"
 },
 {
   "ITEM": 2120105,
   "ESPEC": "LESG CER/PVC ATE 2M PO AVUL S/REP SF",
   "NPRECO": 72000471,
   "UNID": "un",
   "PUNIT": "R$ 2.481,93"
 },
 {
   "ITEM": 2120102,
   "ESPEC": "LESG CER/PVC ATE 2M TA AVUL S/REP SF",
   "NPRECO": 72000468,
   "UNID": "un",
   "PUNIT": "R$ 1.460,13"
 },
 {
   "ITEM": 2120104,
   "ESPEC": "LESG CER/PVC ATE 2M TO AVUL S/REP SF",
   "NPRECO": 72000470,
   "UNID": "un",
   "PUNIT": "R$ 2.096,62"
 },
 {
   "ITEM": 2120108,
   "ESPEC": "LESG CER/PVC DE 2 A 4M EX AVUL S/REP SF",
   "NPRECO": 72000474,
   "UNID": "un",
   "PUNIT": "R$ 2.472,66"
 },
 {
   "ITEM": 2120106,
   "ESPEC": "LESG CER/PVC DE 2 A 4M PA AVUL S/REP SF",
   "NPRECO": 72000472,
   "UNID": "un",
   "PUNIT": "R$ 1.559,57"
 },
 {
   "ITEM": 2120110,
   "ESPEC": "LESG CER/PVC DE 2 A 4M PO AVUL S/REP SF",
   "NPRECO": 72000476,
   "UNID": "un",
   "PUNIT": "R$ 3.686,44"
 },
 {
   "ITEM": 2120107,
   "ESPEC": "LESG CER/PVC DE 2 A 4M TA AVUL S/REP SF",
   "NPRECO": 72000473,
   "UNID": "un",
   "PUNIT": "R$ 2.006,87"
 },
 {
   "ITEM": 2120109,
   "ESPEC": "LESG CER/PVC DE 2 A 4M TO AVUL S/REP SF",
   "NPRECO": 72000475,
   "UNID": "un",
   "PUNIT": "R$ 3.127,90"
 },
 {
   "ITEM": 2150103,
   "ESPEC": "LESG CER/PVC EX SUCES S/REP SF",
   "NPRECO": 72000481,
   "UNID": "un",
   "PUNIT": "R$ 906,76"
 },
 {
   "ITEM": 2150101,
   "ESPEC": "LESG CER/PVC PA SUCES S/REP SF",
   "NPRECO": 72000479,
   "UNID": "un",
   "PUNIT": "R$ 329,95"
 },
 {
   "ITEM": 2150105,
   "ESPEC": "LESG CER/PVC PO SUCES S/REP SF",
   "NPRECO": 72000483,
   "UNID": "un",
   "PUNIT": "R$ 1.485,19"
 },
 {
   "ITEM": 2150102,
   "ESPEC": "LESG CER/PVC TA SUCES S/REP SF",
   "NPRECO": 72000480,
   "UNID": "un",
   "PUNIT": "R$ 692,19"
 },
 {
   "ITEM": 2150104,
   "ESPEC": "LESG CER/PVC TO SUCES S/REP SF",
   "NPRECO": 72000482,
   "UNID": "un",
   "PUNIT": "R$ 1.149,72"
 },
 {
   "ITEM": 1090103,
   "ESPEC": "LEV ASF SERVICOS SERV. AG",
   "NPRECO": 72000849,
   "UNID": "M2",
   "PUNIT": "R$ 29,34"
 },
 {
   "ITEM": 1090104,
   "ESPEC": "LEV ASF SERVICOS SERV. ESG",
   "NPRECO": 72000850,
   "UNID": "M2",
   "PUNIT": "R$ 29,00"
 },
 {
   "ITEM": 1080502,
   "ESPEC": "LIMPEZA DESOB MANUAL PV E PI - RET MAT",
   "NPRECO": 72000984,
   "UNID": "un",
   "PUNIT": "R$ 553,67"
 },
 {
   "ITEM": 1060312,
   "ESPEC": "LPB 150 A 250 ARR COMPX A",
   "NPRECO": 72001139,
   "UNID": "un",
   "PUNIT": "R$ 504,69"
 },
 {
   "ITEM": 1060311,
   "ESPEC": "LPB 150 A 250 ARR COMPX B",
   "NPRECO": 72001140,
   "UNID": "un",
   "PUNIT": "R$ 450,19"
 },
 {
   "ITEM": 1060310,
   "ESPEC": "LPB 150 A 250 ARR COMPX C",
   "NPRECO": 72001141,
   "UNID": "un",
   "PUNIT": "R$ 413,13"
 },
 {
   "ITEM": 2060512,
   "ESPEC": "LPB 150 A 250 INTERLIG COMPX A",
   "NPRECO": 72001118,
   "UNID": "un",
   "PUNIT": "R$ 1.464,57"
 },
 {
   "ITEM": 2060511,
   "ESPEC": "LPB 150 A 250 INTERLIG COMPX B",
   "NPRECO": 72001119,
   "UNID": "un",
   "PUNIT": "R$ 1.201,40"
 },
 {
   "ITEM": 2060510,
   "ESPEC": "LPB 150 A 250 INTERLIG COMPX C",
   "NPRECO": 72001120,
   "UNID": "un",
   "PUNIT": "R$ 963,82"
 },
 {
   "ITEM": 1060315,
   "ESPEC": "LPB 300 A 400 ARR COMPX A",
   "NPRECO": 72001142,
   "UNID": "un",
   "PUNIT": "R$ 1.869,80"
 },
 {
   "ITEM": 1060314,
   "ESPEC": "LPB 300 A 400 ARR COMPX B",
   "NPRECO": 72001143,
   "UNID": "un",
   "PUNIT": "R$ 1.714,07"
 },
 {
   "ITEM": 1060313,
   "ESPEC": "LPB 300 A 400 ARR COMPX C",
   "NPRECO": 72001144,
   "UNID": "un",
   "PUNIT": "R$ 1.616,74"
 },
 {
   "ITEM": 2060515,
   "ESPEC": "LPB 300 A 400 INTERLIG COMPX A",
   "NPRECO": 72001121,
   "UNID": "un",
   "PUNIT": "R$ 1.824,68"
 },
 {
   "ITEM": 2060514,
   "ESPEC": "LPB 300 A 400 INTERLIG COMPX B",
   "NPRECO": 72001122,
   "UNID": "un",
   "PUNIT": "R$ 1.498,50"
 },
 {
   "ITEM": 2060513,
   "ESPEC": "LPB 300 A 400 INTERLIG COMPX C",
   "NPRECO": 72001123,
   "UNID": "un",
   "PUNIT": "R$ 1.204,30"
 },
 {
   "ITEM": 1060309,
   "ESPEC": "LPB 50 A 100 ARR COMPX A",
   "NPRECO": 72001136,
   "UNID": "un",
   "PUNIT": "R$ 312,65"
 },
 {
   "ITEM": 1060308,
   "ESPEC": "LPB 50 A 100 ARR COMPX B",
   "NPRECO": 72001137,
   "UNID": "un",
   "PUNIT": "R$ 293,02"
 },
 {
   "ITEM": 1060307,
   "ESPEC": "LPB 50 A 100 ARR COMPX C",
   "NPRECO": 72001138,
   "UNID": "un",
   "PUNIT": "R$ 264,58"
 },
 {
   "ITEM": 2060509,
   "ESPEC": "LPB 50 A 100 INTERLIG COMPX A",
   "NPRECO": 72001115,
   "UNID": "un",
   "PUNIT": "R$ 672,47"
 },
 {
   "ITEM": 2060508,
   "ESPEC": "LPB 50 A 100 INTERLIG COMPX B",
   "NPRECO": 72001116,
   "UNID": "un",
   "PUNIT": "R$ 547,89"
 },
 {
   "ITEM": 2060507,
   "ESPEC": "LPB 50 A 100 INTERLIG COMPX C",
   "NPRECO": 72001117,
   "UNID": "un",
   "PUNIT": "R$ 434,82"
 },
 {
   "ITEM": 2020308,
   "ESPEC": "LPB ASF EX LAG AVUL COMPX A",
   "NPRECO": 72001069,
   "UNID": "un",
   "PUNIT": "R$ 598,68"
 },
 {
   "ITEM": 2120316,
   "ESPEC": "LPB ASF MAIS DE 2M TA LESG COMPX A",
   "NPRECO": 72001172,
   "UNID": "un",
   "PUNIT": "R$ 556,87"
 },
 {
   "ITEM": 2030404,
   "ESPEC": "LPB ASF TA TRA PREV COMPX B",
   "NPRECO": 72001194,
   "UNID": "un",
   "PUNIT": "R$ 250,81"
 },
 {
   "ITEM": 2120310,
   "ESPEC": "LPB ATE 2M EX LESG COMPX A",
   "NPRECO": 72001039,
   "UNID": "un",
   "PUNIT": "R$ 895,67"
 },
 {
   "ITEM": 2120309,
   "ESPEC": "LPB ATE 2M EX LESG COMPX B",
   "NPRECO": 72001040,
   "UNID": "un",
   "PUNIT": "R$ 720,86"
 },
 {
   "ITEM": 2120308,
   "ESPEC": "LPB ATE 2M EX LESG COMPX C",
   "NPRECO": 72001041,
   "UNID": "un",
   "PUNIT": "R$ 586,04"
 },
 {
   "ITEM": 2130218,
   "ESPEC": "LPB ATE 2M EX TRE COMPX A",
   "NPRECO": 72001086,
   "UNID": "un",
   "PUNIT": "R$ 1.795,76"
 },
 {
   "ITEM": 2130217,
   "ESPEC": "LPB ATE 2M EX TRE COMPX B",
   "NPRECO": 72001087,
   "UNID": "un",
   "PUNIT": "R$ 1.702,69"
 },
 {
   "ITEM": 2130216,
   "ESPEC": "LPB ATE 2M EX TRE COMPX C",
   "NPRECO": 72001088,
   "UNID": "un",
   "PUNIT": "R$ 1.708,55"
 },
 {
   "ITEM": 2120307,
   "ESPEC": "LPB ATE 2M TA LESG COMPX A",
   "NPRECO": 72001080,
   "UNID": "un",
   "PUNIT": "R$ 556,87"
 },
 {
   "ITEM": 2120306,
   "ESPEC": "LPB ATE 2M TA LESG COMPX B",
   "NPRECO": 72001081,
   "UNID": "un",
   "PUNIT": "R$ 445,38"
 },
 {
   "ITEM": 2120305,
   "ESPEC": "LPB ATE 2M TA LESG COMPX C",
   "NPRECO": 72001162,
   "UNID": "un",
   "PUNIT": "R$ 358,73"
 },
 {
   "ITEM": 2130209,
   "ESPEC": "LPB ATE 2M TA TRE COMPX A",
   "NPRECO": 72001184,
   "UNID": "un",
   "PUNIT": "R$ 1.160,15"
 },
 {
   "ITEM": 2130208,
   "ESPEC": "LPB ATE 2M TA TRE COMPX B",
   "NPRECO": 72001185,
   "UNID": "un",
   "PUNIT": "R$ 1.098,78"
 },
 {
   "ITEM": 2130207,
   "ESPEC": "LPB ATE 2M TA TRE COMPX C",
   "NPRECO": 72001186,
   "UNID": "un",
   "PUNIT": "R$ 1.098,03"
 },
 {
   "ITEM": 2120313,
   "ESPEC": "LPB ATE 2M TO LESG COMPX A",
   "NPRECO": 72001199,
   "UNID": "un",
   "PUNIT": "R$ 1.421,94"
 },
 {
   "ITEM": 2120312,
   "ESPEC": "LPB ATE 2M TO LESG COMPX B",
   "NPRECO": 72001200,
   "UNID": "un",
   "PUNIT": "R$ 996,32"
 },
 {
   "ITEM": 2120311,
   "ESPEC": "LPB ATE 2M TO LESG COMPX C",
   "NPRECO": 72001201,
   "UNID": "un",
   "PUNIT": "R$ 813,35"
 },
 {
   "ITEM": 2130227,
   "ESPEC": "LPB ATE 2M TO TRE COMPX A",
   "NPRECO": 72001214,
   "UNID": "un",
   "PUNIT": "R$ 2.431,43"
 },
 {
   "ITEM": 2130226,
   "ESPEC": "LPB ATE 2M TO TRE COMPX B",
   "NPRECO": 72001215,
   "UNID": "un",
   "PUNIT": "R$ 2.306,65"
 },
 {
   "ITEM": 2130225,
   "ESPEC": "LPB ATE 2M TO TRE COMPX C",
   "NPRECO": 72001216,
   "UNID": "un",
   "PUNIT": "R$ 2.319,11"
 },
 {
   "ITEM": 1080305,
   "ESPEC": "LPB CPV / REC / SUBST PV/PI COMPX A",
   "NPRECO": 72001063,
   "UNID": "un",
   "PUNIT": "R$ 1.108,04"
 },
 {
   "ITEM": 1080304,
   "ESPEC": "LPB CPV / REC / SUBST PV/PI COMPX B",
   "NPRECO": 72001064,
   "UNID": "un",
   "PUNIT": "R$ 890,91"
 },
 {
   "ITEM": 1080303,
   "ESPEC": "LPB CPV / REC / SUBST PV/PI COMPX C",
   "NPRECO": 72001065,
   "UNID": "un",
   "PUNIT": "R$ 785,44"
 },
 {
   "ITEM": 2140505,
   "ESPEC": "LPB CPV DIAM = 1,20M COMPX A",
   "NPRECO": 72001060,
   "UNID": "un",
   "PUNIT": "R$ 1.077,89"
 },
 {
   "ITEM": 2140504,
   "ESPEC": "LPB CPV DIAM = 1,20M COMPX B",
   "NPRECO": 72001061,
   "UNID": "un",
   "PUNIT": "R$ 875,18"
 },
 {
   "ITEM": 2140503,
   "ESPEC": "LPB CPV DIAM = 1,20M COMPX C",
   "NPRECO": 72001062,
   "UNID": "un",
   "PUNIT": "R$ 602,66"
 },
 {
   "ITEM": 2130221,
   "ESPEC": "LPB DE 2 A 3M EX TRE COMPX A",
   "NPRECO": 72001089,
   "UNID": "un",
   "PUNIT": "R$ 2.695,89"
 },
 {
   "ITEM": 2130220,
   "ESPEC": "LPB DE 2 A 3M EX TRE COMPX B",
   "NPRECO": 72001090,
   "UNID": "un",
   "PUNIT": "R$ 2.591,46"
 },
 {
   "ITEM": 2130219,
   "ESPEC": "LPB DE 2 A 3M EX TRE COMPX C",
   "NPRECO": 72001091,
   "UNID": "un",
   "PUNIT": "R$ 2.599,61"
 },
 {
   "ITEM": 2130212,
   "ESPEC": "LPB DE 2 A 3M TA TRE COMPX A",
   "NPRECO": 72001187,
   "UNID": "un",
   "PUNIT": "R$ 2.060,25"
 },
 {
   "ITEM": 2130211,
   "ESPEC": "LPB DE 2 A 3M TA TRE COMPX B",
   "NPRECO": 72001188,
   "UNID": "un",
   "PUNIT": "R$ 1.987,51"
 },
 {
   "ITEM": 2130210,
   "ESPEC": "LPB DE 2 A 3M TA TRE COMPX C",
   "NPRECO": 72001189,
   "UNID": "un",
   "PUNIT": "R$ 1.989,09"
 },
 {
   "ITEM": 2130230,
   "ESPEC": "LPB DE 2 A 3M TO TRE COMPX A",
   "NPRECO": 72001217,
   "UNID": "un",
   "PUNIT": "R$ 3.331,53"
 },
 {
   "ITEM": 2130229,
   "ESPEC": "LPB DE 2 A 3M TO TRE COMPX B",
   "NPRECO": 72001218,
   "UNID": "un",
   "PUNIT": "R$ 3.195,42"
 },
 {
   "ITEM": 2130228,
   "ESPEC": "LPB DE 2 A 3M TO TRE COMPX C",
   "NPRECO": 72001219,
   "UNID": "un",
   "PUNIT": "R$ 3.210,17"
 },
 {
   "ITEM": 2130224,
   "ESPEC": "LPB DE 3 A 4M EX TRE COMPX A",
   "NPRECO": 72001092,
   "UNID": "un",
   "PUNIT": "R$ 4.243,48"
 },
 {
   "ITEM": 2130223,
   "ESPEC": "LPB DE 3 A 4M EX TRE COMPX B",
   "NPRECO": 72001093,
   "UNID": "un",
   "PUNIT": "R$ 4.116,86"
 },
 {
   "ITEM": 2130222,
   "ESPEC": "LPB DE 3 A 4M EX TRE COMPX C",
   "NPRECO": 72001094,
   "UNID": "un",
   "PUNIT": "R$ 4.129,67"
 },
 {
   "ITEM": 2130215,
   "ESPEC": "LPB DE 3 A 4M TA TRE COMPX A",
   "NPRECO": 72001190,
   "UNID": "un",
   "PUNIT": "R$ 3.501,91"
 },
 {
   "ITEM": 2130214,
   "ESPEC": "LPB DE 3 A 4M TA TRE COMPX B",
   "NPRECO": 72001191,
   "UNID": "un",
   "PUNIT": "R$ 3.412,28"
 },
 {
   "ITEM": 2130213,
   "ESPEC": "LPB DE 3 A 4M TA TRE COMPX C",
   "NPRECO": 72001192,
   "UNID": "un",
   "PUNIT": "R$ 3.417,38"
 },
 {
   "ITEM": 2130233,
   "ESPEC": "LPB DE 3 A 4M TO TRE COMPX A",
   "NPRECO": 72001220,
   "UNID": "un",
   "PUNIT": "R$ 4.985,09"
 },
 {
   "ITEM": 2130232,
   "ESPEC": "LPB DE 3 A 4M TO TRE COMPX B",
   "NPRECO": 72001221,
   "UNID": "un",
   "PUNIT": "R$ 4.821,49"
 },
 {
   "ITEM": 2130231,
   "ESPEC": "LPB DE 3 A 4M TO TRE COMPX C",
   "NPRECO": 72001222,
   "UNID": "un",
   "PUNIT": "R$ 4.841,95"
 },
 {
   "ITEM": 2020307,
   "ESPEC": "LPB EX LAG AVUL COMPX B",
   "NPRECO": 72001070,
   "UNID": "un",
   "PUNIT": "R$ 478,43"
 },
 {
   "ITEM": 2020306,
   "ESPEC": "LPB EX LAG AVUL COMPX C",
   "NPRECO": 72001071,
   "UNID": "un",
   "PUNIT": "R$ 382,90"
 },
 {
   "ITEM": 2080208,
   "ESPEC": "LPB EX LAG SUCES COMPX A",
   "NPRECO": 72001078,
   "UNID": "un",
   "PUNIT": "R$ 280,39"
 },
 {
   "ITEM": 2080207,
   "ESPEC": "LPB EX LAG SUCES COMPX B",
   "NPRECO": 72001079,
   "UNID": "un",
   "PUNIT": "R$ 242,50"
 },
 {
   "ITEM": 2080206,
   "ESPEC": "LPB EX LAG SUCES COMPX C",
   "NPRECO": 72001082,
   "UNID": "un",
   "PUNIT": "R$ 194,97"
 },
 {
   "ITEM": 2150208,
   "ESPEC": "LPB EX LESG SUCES COMPX A",
   "NPRECO": 72001075,
   "UNID": "un",
   "PUNIT": "R$ 642,71"
 },
 {
   "ITEM": 2150207,
   "ESPEC": "LPB EX LESG SUCES COMPX B",
   "NPRECO": 72001076,
   "UNID": "un",
   "PUNIT": "R$ 515,94"
 },
 {
   "ITEM": 2150206,
   "ESPEC": "LPB EX LESG SUCES COMPX C",
   "NPRECO": 72001077,
   "UNID": "un",
   "PUNIT": "R$ 416,84"
 },
 {
   "ITEM": 2030208,
   "ESPEC": "LPB EX TRA CORR COMPX A",
   "NPRECO": 72001083,
   "UNID": "un",
   "PUNIT": "R$ 640,56"
 },
 {
   "ITEM": 2030207,
   "ESPEC": "LPB EX TRA CORR COMPX B",
   "NPRECO": 72001084,
   "UNID": "un",
   "PUNIT": "R$ 566,47"
 },
 {
   "ITEM": 2030206,
   "ESPEC": "LPB EX TRA CORR COMPX C",
   "NPRECO": 72001085,
   "UNID": "un",
   "PUNIT": "R$ 512,71"
 },
 {
   "ITEM": 2030408,
   "ESPEC": "LPB EX TRA PREV COMPX A",
   "NPRECO": 72001095,
   "UNID": "un",
   "PUNIT": "R$ 545,39"
 },
 {
   "ITEM": 2030407,
   "ESPEC": "LPB EX TRA PREV COMPX B",
   "NPRECO": 72001096,
   "UNID": "un",
   "PUNIT": "R$ 447,49"
 },
 {
   "ITEM": 2030406,
   "ESPEC": "LPB EX TRA PREV COMPX C",
   "NPRECO": 72001097,
   "UNID": "un",
   "PUNIT": "R$ 353,32"
 },
 {
   "ITEM": 2070205,
   "ESPEC": "LPB INST VL COMPX A",
   "NPRECO": 72001112,
   "UNID": "un",
   "PUNIT": "R$ 439,13"
 },
 {
   "ITEM": 2070204,
   "ESPEC": "LPB INST VL COMPX B",
   "NPRECO": 72001113,
   "UNID": "un",
   "PUNIT": "R$ 355,35"
 },
 {
   "ITEM": 2070203,
   "ESPEC": "LPB INST VL COMPX C",
   "NPRECO": 72001114,
   "UNID": "un",
   "PUNIT": "R$ 278,98"
 },
 {
   "ITEM": 2120319,
   "ESPEC": "LPB MAIS DE 2M EX LESG COMPX A",
   "NPRECO": 72001072,
   "UNID": "un",
   "PUNIT": "R$ 895,67"
 },
 {
   "ITEM": 2120318,
   "ESPEC": "LPB MAIS DE 2M EX LESG COMPX B",
   "NPRECO": 72001073,
   "UNID": "un",
   "PUNIT": "R$ 720,86"
 },
 {
   "ITEM": 2120317,
   "ESPEC": "LPB MAIS DE 2M EX LESG COMPX C",
   "NPRECO": 72001074,
   "UNID": "un",
   "PUNIT": "R$ 586,04"
 },
 {
   "ITEM": 2120315,
   "ESPEC": "LPB MAIS DE 2M TA LESG COMPX B",
   "NPRECO": 72001173,
   "UNID": "un",
   "PUNIT": "R$ 445,38"
 },
 {
   "ITEM": 2120314,
   "ESPEC": "LPB MAIS DE 2M TA LESG COMPX C",
   "NPRECO": 72001174,
   "UNID": "un",
   "PUNIT": "R$ 358,73"
 },
 {
   "ITEM": 2120322,
   "ESPEC": "LPB MAIS DE 2M TO LESG COMPX A",
   "NPRECO": 72001202,
   "UNID": "un",
   "PUNIT": "R$ 1.234,51"
 },
 {
   "ITEM": 2120321,
   "ESPEC": "LPB MAIS DE 2M TO LESG COMPX B",
   "NPRECO": 72001203,
   "UNID": "un",
   "PUNIT": "R$ 996,32"
 },
 {
   "ITEM": 2120320,
   "ESPEC": "LPB MAIS DE 2M TO LESG COMPX C",
   "NPRECO": 72001204,
   "UNID": "un",
   "PUNIT": "R$ 813,35"
 },
 {
   "ITEM": 2020505,
   "ESPEC": "LPB MND LAG AVUL COMPX A",
   "NPRECO": 72001098,
   "UNID": "un",
   "PUNIT": "R$ 299,88"
 },
 {
   "ITEM": 2020504,
   "ESPEC": "LPB MND LAG AVUL COMPX B",
   "NPRECO": 72001099,
   "UNID": "un",
   "PUNIT": "R$ 315,15"
 },
 {
   "ITEM": 2020503,
   "ESPEC": "LPB MND LAG AVUL COMPX C",
   "NPRECO": 72001102,
   "UNID": "un",
   "PUNIT": "R$ 257,91"
 },
 {
   "ITEM": 2080405,
   "ESPEC": "LPB MND LAG SUCES COMPX A",
   "NPRECO": 72001103,
   "UNID": "un",
   "PUNIT": "R$ 294,32"
 },
 {
   "ITEM": 2080404,
   "ESPEC": "LPB MND LAG SUCES COMPX B",
   "NPRECO": 72001104,
   "UNID": "un",
   "PUNIT": "R$ 261,75"
 },
 {
   "ITEM": 2080403,
   "ESPEC": "LPB MND LAG SUCES COMPX C",
   "NPRECO": 72001105,
   "UNID": "un",
   "PUNIT": "R$ 189,85"
 },
 {
   "ITEM": 2030605,
   "ESPEC": "LPB MND TRA CORR COMPX A",
   "NPRECO": 72001106,
   "UNID": "un",
   "PUNIT": "R$ 281,81"
 },
 {
   "ITEM": 2030604,
   "ESPEC": "LPB MND TRA CORR COMPX B",
   "NPRECO": 72001107,
   "UNID": "un",
   "PUNIT": "R$ 226,81"
 },
 {
   "ITEM": 2030603,
   "ESPEC": "LPB MND TRA CORR COMPX C",
   "NPRECO": 72001108,
   "UNID": "un",
   "PUNIT": "R$ 189,87"
 },
 {
   "ITEM": 2030805,
   "ESPEC": "LPB MND TRA PREV COMPX A",
   "NPRECO": 72001109,
   "UNID": "un",
   "PUNIT": "R$ 232,71"
 },
 {
   "ITEM": 2030804,
   "ESPEC": "LPB MND TRA PREV COMPX B",
   "NPRECO": 72001110,
   "UNID": "un",
   "PUNIT": "R$ 224,82"
 },
 {
   "ITEM": 2030803,
   "ESPEC": "LPB MND TRA PREV COMPX C",
   "NPRECO": 72001111,
   "UNID": "un",
   "PUNIT": "R$ 171,73"
 },
 {
   "ITEM": 1060505,
   "ESPEC": "LPB NIV CX PARADA COMPX A",
   "NPRECO": 72001066,
   "UNID": "un",
   "PUNIT": "R$ 107,72"
 },
 {
   "ITEM": 1060504,
   "ESPEC": "LPB NIV CX PARADA COMPX B",
   "NPRECO": 72001067,
   "UNID": "un",
   "PUNIT": "R$ 97,55"
 },
 {
   "ITEM": 1060503,
   "ESPEC": "LPB NIV CX PARADA COMPX C",
   "NPRECO": 72001068,
   "UNID": "un",
   "PUNIT": "R$ 70,42"
 },
 {
   "ITEM": 2060312,
   "ESPEC": "LPB PRA 200 A 250 COMPX A",
   "NPRECO": 72001054,
   "UNID": "M",
   "PUNIT": "R$ 199,09"
 },
 {
   "ITEM": 2060311,
   "ESPEC": "LPB PRA 200 A 250 COMPX B",
   "NPRECO": 72001055,
   "UNID": "M",
   "PUNIT": "R$ 155,73"
 },
 {
   "ITEM": 2060310,
   "ESPEC": "LPB PRA 200 A 250 COMPX C",
   "NPRECO": 72001056,
   "UNID": "M",
   "PUNIT": "R$ 117,41"
 },
 {
   "ITEM": 2060315,
   "ESPEC": "LPB PRA 300 A 400 COMPX A",
   "NPRECO": 72001057,
   "UNID": "M",
   "PUNIT": "R$ 225,99"
 },
 {
   "ITEM": 2060314,
   "ESPEC": "LPB PRA 300 A 400 COMPX B",
   "NPRECO": 72001058,
   "UNID": "M",
   "PUNIT": "R$ 179,52"
 },
 {
   "ITEM": 2060313,
   "ESPEC": "LPB PRA 300 A 400 COMPX C",
   "NPRECO": 72001059,
   "UNID": "M",
   "PUNIT": "R$ 136,64"
 },
 {
   "ITEM": 2060309,
   "ESPEC": "LPB PRA 50 A 150 COMPX A",
   "NPRECO": 72001051,
   "UNID": "M",
   "PUNIT": "R$ 168,38"
 },
 {
   "ITEM": 2060308,
   "ESPEC": "LPB PRA 50 A 150 COMPX B",
   "NPRECO": 72001052,
   "UNID": "M",
   "PUNIT": "R$ 134,26"
 },
 {
   "ITEM": 2060307,
   "ESPEC": "LPB PRA 50 A 150 COMPX C",
   "NPRECO": 72001053,
   "UNID": "M",
   "PUNIT": "R$ 99,86"
 },
 {
   "ITEM": 2140310,
   "ESPEC": "LPB PROF ACIMA DE 2M PRE COMPX A",
   "NPRECO": 72001048,
   "UNID": "M",
   "PUNIT": "R$ 251,35"
 },
 {
   "ITEM": 2140309,
   "ESPEC": "LPB PROF ACIMA DE 2M PRE COMPX B",
   "NPRECO": 72001049,
   "UNID": "M",
   "PUNIT": "R$ 196,98"
 },
 {
   "ITEM": 2140308,
   "ESPEC": "LPB PROF ACIMA DE 2M PRE COMPX C",
   "NPRECO": 72001050,
   "UNID": "M",
   "PUNIT": "R$ 150,98"
 },
 {
   "ITEM": 2140307,
   "ESPEC": "LPB PROF ATE 2M PRE COMPX A",
   "NPRECO": 72001045,
   "UNID": "M",
   "PUNIT": "R$ 223,04"
 },
 {
   "ITEM": 2140306,
   "ESPEC": "LPB PROF ATE 2M PRE COMPX B",
   "NPRECO": 72001046,
   "UNID": "M",
   "PUNIT": "R$ 171,10"
 },
 {
   "ITEM": 2140305,
   "ESPEC": "LPB PROF ATE 2M PRE COMPX C",
   "NPRECO": 72001047,
   "UNID": "M",
   "PUNIT": "R$ 132,38"
 },
 {
   "ITEM": 1040205,
   "ESPEC": "LPB SUPR RELIG AG COMPX A",
   "NPRECO": 72001154,
   "UNID": "un",
   "PUNIT": "R$ 206,28"
 },
 {
   "ITEM": 1040204,
   "ESPEC": "LPB SUPR RELIG AG COMPX B",
   "NPRECO": 72001155,
   "UNID": "un",
   "PUNIT": "R$ 163,33"
 },
 {
   "ITEM": 1040203,
   "ESPEC": "LPB SUPR RELIG AG COMPX C",
   "NPRECO": 72001156,
   "UNID": "un",
   "PUNIT": "R$ 123,64"
 },
 {
   "ITEM": 2020305,
   "ESPEC": "LPB TA LAG AVUL COMPX A",
   "NPRECO": 72001157,
   "UNID": "un",
   "PUNIT": "R$ 376,73"
 },
 {
   "ITEM": 2020304,
   "ESPEC": "LPB TA LAG AVUL COMPX B",
   "NPRECO": 72001158,
   "UNID": "un",
   "PUNIT": "R$ 305,51"
 },
 {
   "ITEM": 2020303,
   "ESPEC": "LPB TA LAG AVUL COMPX C",
   "NPRECO": 72001159,
   "UNID": "un",
   "PUNIT": "R$ 233,89"
 },
 {
   "ITEM": 2080205,
   "ESPEC": "LPB TA LAG SUCES COMPX A",
   "NPRECO": 72001178,
   "UNID": "un",
   "PUNIT": "R$ 140,45"
 },
 {
   "ITEM": 2080204,
   "ESPEC": "LPB TA LAG SUCES COMPX B",
   "NPRECO": 72001179,
   "UNID": "un",
   "PUNIT": "R$ 119,81"
 },
 {
   "ITEM": 2080203,
   "ESPEC": "LPB TA LAG SUCES COMPX C",
   "NPRECO": 72001180,
   "UNID": "un",
   "PUNIT": "R$ 104,75"
 },
 {
   "ITEM": 2150205,
   "ESPEC": "LPB TA LESG SUCES COMPX A",
   "NPRECO": 72001175,
   "UNID": "un",
   "PUNIT": "R$ 303,89"
 },
 {
   "ITEM": 2150204,
   "ESPEC": "LPB TA LESG SUCES COMPX B",
   "NPRECO": 72001176,
   "UNID": "un",
   "PUNIT": "R$ 240,45"
 },
 {
   "ITEM": 2150203,
   "ESPEC": "LPB TA LESG SUCES COMPX C",
   "NPRECO": 72001177,
   "UNID": "un",
   "PUNIT": "R$ 189,51"
 },
 {
   "ITEM": 2030205,
   "ESPEC": "LPB TA TRA CORR COMPX A",
   "NPRECO": 72001181,
   "UNID": "un",
   "PUNIT": "R$ 388,33"
 },
 {
   "ITEM": 2030204,
   "ESPEC": "LPB TA TRA CORR COMPX B",
   "NPRECO": 72001182,
   "UNID": "un",
   "PUNIT": "R$ 341,69"
 },
 {
   "ITEM": 2030203,
   "ESPEC": "LPB TA TRA CORR COMPX C",
   "NPRECO": 72001183,
   "UNID": "un",
   "PUNIT": "R$ 307,78"
 },
 {
   "ITEM": 2030405,
   "ESPEC": "LPB TA TRA PREV COMPX A",
   "NPRECO": 72001193,
   "UNID": "un",
   "PUNIT": "R$ 311,56"
 },
 {
   "ITEM": 2030403,
   "ESPEC": "LPB TA TRA PREV COMPX C",
   "NPRECO": 72001195,
   "UNID": "un",
   "PUNIT": "R$ 194,82"
 },
 {
   "ITEM": 2020311,
   "ESPEC": "LPB TO LAG AVUL COMPX A",
   "NPRECO": 72001196,
   "UNID": "un",
   "PUNIT": "R$ 820,65"
 },
 {
   "ITEM": 2020310,
   "ESPEC": "LPB TO LAG AVUL COMPX B",
   "NPRECO": 72001197,
   "UNID": "un",
   "PUNIT": "R$ 662,64"
 },
 {
   "ITEM": 2020309,
   "ESPEC": "LPB TO LAG AVUL COMPX C",
   "NPRECO": 72001198,
   "UNID": "un",
   "PUNIT": "R$ 531,91"
 },
 {
   "ITEM": 2080211,
   "ESPEC": "LPB TO LAG SUCES COMPX A",
   "NPRECO": 72001208,
   "UNID": "un",
   "PUNIT": "R$ 408,42"
 },
 {
   "ITEM": 2080210,
   "ESPEC": "LPB TO LAG SUCES COMPX B",
   "NPRECO": 72001209,
   "UNID": "un",
   "PUNIT": "R$ 360,71"
 },
 {
   "ITEM": 2080209,
   "ESPEC": "LPB TO LAG SUCES COMPX C",
   "NPRECO": 72001210,
   "UNID": "un",
   "PUNIT": "R$ 285,21"
 },
 {
   "ITEM": 2150211,
   "ESPEC": "LPB TO LESG SUCES COMPX A",
   "NPRECO": 72001205,
   "UNID": "un",
   "PUNIT": "R$ 981,55"
 },
 {
   "ITEM": 2150210,
   "ESPEC": "LPB TO LESG SUCES COMPX B",
   "NPRECO": 72001206,
   "UNID": "un",
   "PUNIT": "R$ 791,42"
 },
 {
   "ITEM": 2150209,
   "ESPEC": "LPB TO LESG SUCES COMPX C",
   "NPRECO": 72001207,
   "UNID": "un",
   "PUNIT": "R$ 644,13"
 },
 {
   "ITEM": 2030211,
   "ESPEC": "LPB TO TRA CORR COMPX A",
   "NPRECO": 72001211,
   "UNID": "un",
   "PUNIT": "R$ 892,87"
 },
 {
   "ITEM": 2030210,
   "ESPEC": "LPB TO TRA CORR COMPX B",
   "NPRECO": 72001212,
   "UNID": "un",
   "PUNIT": "R$ 791,34"
 },
 {
   "ITEM": 2030209,
   "ESPEC": "LPB TO TRA CORR COMPX C",
   "NPRECO": 72001213,
   "UNID": "un",
   "PUNIT": "R$ 717,66"
 },
 {
   "ITEM": 2030411,
   "ESPEC": "LPB TO TRA PREV COMPX A",
   "NPRECO": 72001223,
   "UNID": "un",
   "PUNIT": "R$ 777,23"
 },
 {
   "ITEM": 2030410,
   "ESPEC": "LPB TO TRA PREV COMPX B",
   "NPRECO": 72001224,
   "UNID": "un",
   "PUNIT": "R$ 643,55"
 },
 {
   "ITEM": 2030409,
   "ESPEC": "LPB TO TRA PREV COMPX C",
   "NPRECO": 72001225,
   "UNID": "un",
   "PUNIT": "R$ 511,80"
 },
 {
   "ITEM": 1060302,
   "ESPEC": "LRP CIM 150 A 250 ARR",
   "NPRECO": 72000306,
   "UNID": "un",
   "PUNIT": "R$ 422,63"
 },
 {
   "ITEM": 2060502,
   "ESPEC": "LRP CIM 150 A 250 INTERLIG",
   "NPRECO": 72000396,
   "UNID": "un",
   "PUNIT": "R$ 624,35"
 },
 {
   "ITEM": 2060302,
   "ESPEC": "LRP CIM 200 A 250 PRA",
   "NPRECO": 72000366,
   "UNID": "M",
   "PUNIT": "R$ 87,69"
 },
 {
   "ITEM": 1060303,
   "ESPEC": "LRP CIM 300 A 400 ARR",
   "NPRECO": 72000307,
   "UNID": "un",
   "PUNIT": "R$ 1.652,98"
 },
 {
   "ITEM": 2060503,
   "ESPEC": "LRP CIM 300 A 400 INTERLIG",
   "NPRECO": 72000397,
   "UNID": "un",
   "PUNIT": "R$ 780,42"
 },
 {
   "ITEM": 2060303,
   "ESPEC": "LRP CIM 300 A 400 PRA",
   "NPRECO": 72000367,
   "UNID": "M",
   "PUNIT": "R$ 98,31"
 },
 {
   "ITEM": 1060301,
   "ESPEC": "LRP CIM 50 A 100 ARR",
   "NPRECO": 72000305,
   "UNID": "un",
   "PUNIT": "R$ 270,27"
 },
 {
   "ITEM": 2060501,
   "ESPEC": "LRP CIM 50 A 100 INTERLIG",
   "NPRECO": 72000395,
   "UNID": "un",
   "PUNIT": "R$ 280,97"
 },
 {
   "ITEM": 2060301,
   "ESPEC": "LRP CIM 50 A 150 PRA",
   "NPRECO": 72000365,
   "UNID": "M",
   "PUNIT": "R$ 80,12"
 },
 {
   "ITEM": 2120301,
   "ESPEC": "LRP CIM ATE 2M LESG",
   "NPRECO": 72000531,
   "UNID": "un",
   "PUNIT": "R$ 173,18"
 },
 {
   "ITEM": 2130201,
   "ESPEC": "LRP CIM ATE 2M TRE",
   "NPRECO": 72000591,
   "UNID": "un",
   "PUNIT": "R$ 852,38"
 },
 {
   "ITEM": 1080301,
   "ESPEC": "LRP CIM CPV / REC / SUBST PV/PI",
   "NPRECO": 72001229,
   "UNID": "un",
   "PUNIT": "R$ 522,60"
 },
 {
   "ITEM": 2140501,
   "ESPEC": "LRP CIM CPV DIAM = 1,20M",
   "NPRECO": 72001228,
   "UNID": "un",
   "PUNIT": "R$ 455,07"
 },
 {
   "ITEM": 2130202,
   "ESPEC": "LRP CIM DE 2 A 3M TRE",
   "NPRECO": 72000592,
   "UNID": "un",
   "PUNIT": "R$ 1.786,41"
 },
 {
   "ITEM": 2130203,
   "ESPEC": "LRP CIM DE 3 A 4M TRE",
   "NPRECO": 72000593,
   "UNID": "un",
   "PUNIT": "R$ 3.200,37"
 },
 {
   "ITEM": 2070201,
   "ESPEC": "LRP CIM INST VL",
   "NPRECO": 72000433,
   "UNID": "un",
   "PUNIT": "R$ 187,41"
 },
 {
   "ITEM": 2020301,
   "ESPEC": "LRP CIM LAG AVUL",
   "NPRECO": 72000081,
   "UNID": "un",
   "PUNIT": "R$ 80,06"
 },
 {
   "ITEM": 2080201,
   "ESPEC": "LRP CIM LAG SUCES",
   "NPRECO": 72000101,
   "UNID": "un",
   "PUNIT": "R$ 29,30"
 },
 {
   "ITEM": 2150201,
   "ESPEC": "LRP CIM LESG SUCES",
   "NPRECO": 72000571,
   "UNID": "un",
   "PUNIT": "R$ 48,80"
 },
 {
   "ITEM": 2120302,
   "ESPEC": "LRP CIM MAIS DE 2M LESG",
   "NPRECO": 72000532,
   "UNID": "un",
   "PUNIT": "R$ 159,45"
 },
 {
   "ITEM": 2020501,
   "ESPEC": "LRP CIM MND LAG AVUL",
   "NPRECO": 72000161,
   "UNID": "un",
   "PUNIT": "R$ 106,06"
 },
 {
   "ITEM": 2080401,
   "ESPEC": "LRP CIM MND LAG SUCES",
   "NPRECO": 72000169,
   "UNID": "un",
   "PUNIT": "R$ 101,84"
 },
 {
   "ITEM": 2030601,
   "ESPEC": "LRP CIM MND TRA CORR",
   "NPRECO": 72000185,
   "UNID": "un",
   "PUNIT": "R$ 85,87"
 },
 {
   "ITEM": 2030801,
   "ESPEC": "LRP CIM MND TRA PREV",
   "NPRECO": 72000177,
   "UNID": "un",
   "PUNIT": "R$ 86,80"
 },
 {
   "ITEM": 1060501,
   "ESPEC": "LRP CIM NIV CX PARADA",
   "NPRECO": 72000340,
   "UNID": "un",
   "PUNIT": "R$ 61,51"
 },
 {
   "ITEM": 2140302,
   "ESPEC": "LRP CIM PROF ACIMA DE 2M PRE",
   "NPRECO": 72001227,
   "UNID": "M",
   "PUNIT": "R$ 104,36"
 },
 {
   "ITEM": 2140301,
   "ESPEC": "LRP CIM PROF ATE 2M PRE",
   "NPRECO": 72001226,
   "UNID": "M",
   "PUNIT": "R$ 91,31"
 },
 {
   "ITEM": 1040201,
   "ESPEC": "LRP CIM SUPR RELIGACAO DE LIGACAO",
   "NPRECO": 72001230,
   "UNID": "un",
   "PUNIT": "R$ 27,46"
 },
 {
   "ITEM": 2030201,
   "ESPEC": "LRP CIM TRA CORR",
   "NPRECO": 72000141,
   "UNID": "un",
   "PUNIT": "R$ 181,23"
 },
 {
   "ITEM": 2030401,
   "ESPEC": "LRP CIM TRA PREV",
   "NPRECO": 72000121,
   "UNID": "un",
   "PUNIT": "R$ 87,39"
 },
 {
   "ITEM": 1060305,
   "ESPEC": "LRP ESP 150 A 250 ARR",
   "NPRECO": 72000309,
   "UNID": "un",
   "PUNIT": "R$ 602,65"
 },
 {
   "ITEM": 2060505,
   "ESPEC": "LRP ESP 150 A 250 INTERLIG",
   "NPRECO": 72000399,
   "UNID": "un",
   "PUNIT": "R$ 1.380,87"
 },
 {
   "ITEM": 2060305,
   "ESPEC": "LRP ESP 200 A 250 PRA",
   "NPRECO": 72000369,
   "UNID": "M",
   "PUNIT": "R$ 178,46"
 },
 {
   "ITEM": 1060306,
   "ESPEC": "LRP ESP 300 A 400 ARR",
   "NPRECO": 72000310,
   "UNID": "un",
   "PUNIT": "R$ 2.251,78"
 },
 {
   "ITEM": 2060506,
   "ESPEC": "LRP ESP 300 A 400 INTERLIG",
   "NPRECO": 72000400,
   "UNID": "un",
   "PUNIT": "R$ 1.726,07"
 },
 {
   "ITEM": 2060306,
   "ESPEC": "LRP ESP 300 A 400 PRA",
   "NPRECO": 72000370,
   "UNID": "M",
   "PUNIT": "R$ 204,21"
 },
 {
   "ITEM": 1060304,
   "ESPEC": "LRP ESP 50 A 100 ARR",
   "NPRECO": 72000308,
   "UNID": "un",
   "PUNIT": "R$ 390,46"
 },
 {
   "ITEM": 2060504,
   "ESPEC": "LRP ESP 50 A 100 INTERLIG",
   "NPRECO": 72000398,
   "UNID": "un",
   "PUNIT": "R$ 621,40"
 },
 {
   "ITEM": 2060304,
   "ESPEC": "LRP ESP 50 A 150 PRA",
   "NPRECO": 72000368,
   "UNID": "M",
   "PUNIT": "R$ 154,41"
 },
 {
   "ITEM": 2120303,
   "ESPEC": "LRP ESP ATE 2M LESG",
   "NPRECO": 72000533,
   "UNID": "un",
   "PUNIT": "R$ 376,00"
 },
 {
   "ITEM": 2130204,
   "ESPEC": "LRP ESP ATE 2M TRE",
   "NPRECO": 72000594,
   "UNID": "un",
   "PUNIT": "R$ 1.034,56"
 },
 {
   "ITEM": 1080302,
   "ESPEC": "LRP ESP CPV / REC / SUBST PV/PI",
   "NPRECO": 72001234,
   "UNID": "un",
   "PUNIT": "R$ 1.074,84"
 },
 {
   "ITEM": 2140502,
   "ESPEC": "LRP ESP CPV DIAM = 1,20M",
   "NPRECO": 72001233,
   "UNID": "un",
   "PUNIT": "R$ 1.060,27"
 },
 {
   "ITEM": 2130205,
   "ESPEC": "LRP ESP DE 2 A 3M TRE",
   "NPRECO": 72000595,
   "UNID": "un",
   "PUNIT": "R$ 2.057,24"
 },
 {
   "ITEM": 2130206,
   "ESPEC": "LRP ESP DE 3 A 4M TRE",
   "NPRECO": 72000596,
   "UNID": "un",
   "PUNIT": "R$ 3.554,42"
 },
 {
   "ITEM": 2070202,
   "ESPEC": "LRP ESP INST VL",
   "NPRECO": 72000434,
   "UNID": "un",
   "PUNIT": "R$ 405,28"
 },
 {
   "ITEM": 2020302,
   "ESPEC": "LRP ESP LAG AVUL",
   "NPRECO": 72000082,
   "UNID": "un",
   "PUNIT": "R$ 114,55"
 },
 {
   "ITEM": 2080202,
   "ESPEC": "LRP ESP LAG SUCES",
   "NPRECO": 72000102,
   "UNID": "un",
   "PUNIT": "R$ 63,34"
 },
 {
   "ITEM": 2150202,
   "ESPEC": "LRP ESP LESG SUCES",
   "NPRECO": 72000572,
   "UNID": "un",
   "PUNIT": "R$ 107,80"
 },
 {
   "ITEM": 2120304,
   "ESPEC": "LRP ESP MAIS DE 2M LESG",
   "NPRECO": 72000534,
   "UNID": "un",
   "PUNIT": "R$ 365,23"
 },
 {
   "ITEM": 2020502,
   "ESPEC": "LRP ESP MND LAG AVUL",
   "NPRECO": 72000162,
   "UNID": "un",
   "PUNIT": "R$ 223,59"
 },
 {
   "ITEM": 2080402,
   "ESPEC": "LRP ESP MND LAG SUCES",
   "NPRECO": 72000170,
   "UNID": "un",
   "PUNIT": "R$ 222,88"
 },
 {
   "ITEM": 2030602,
   "ESPEC": "LRP ESP MND TRA CORR",
   "NPRECO": 72000186,
   "UNID": "un",
   "PUNIT": "R$ 177,20"
 },
 {
   "ITEM": 2030802,
   "ESPEC": "LRP ESP MND TRA PREV",
   "NPRECO": 72000178,
   "UNID": "un",
   "PUNIT": "R$ 186,65"
 },
 {
   "ITEM": 1060502,
   "ESPEC": "LRP ESP NIV CX PARADA",
   "NPRECO": 72000341,
   "UNID": "un",
   "PUNIT": "R$ 115,31"
 },
 {
   "ITEM": 2140304,
   "ESPEC": "LRP ESP PROF ACIMA DE 2M PRE",
   "NPRECO": 72001232,
   "UNID": "M",
   "PUNIT": "R$ 225,40"
 },
 {
   "ITEM": 2140303,
   "ESPEC": "LRP ESP PROF ATE 2M PRE",
   "NPRECO": 72001231,
   "UNID": "M",
   "PUNIT": "R$ 197,22"
 },
 {
   "ITEM": 1040202,
   "ESPEC": "LRP ESP SUPR RELIGACAO DE LIGACAO",
   "NPRECO": 72001235,
   "UNID": "un",
   "PUNIT": "R$ 63,35"
 },
 {
   "ITEM": 2030202,
   "ESPEC": "LRP ESP TRA CORR",
   "NPRECO": 72000142,
   "UNID": "un",
   "PUNIT": "R$ 284,05"
 },
 {
   "ITEM": 2030402,
   "ESPEC": "LRP ESP TRA PREV",
   "NPRECO": 72000122,
   "UNID": "un",
   "PUNIT": "R$ 193,30"
 },
 {
   "ITEM": 1100106,
   "ESPEC": "MANOBRA P/ INTERVENÇÕES REDES DE ÁGUA",
   "NPRECO": 72000908,
   "UNID": "un",
   "PUNIT": "R$ 1.238,57"
 },
 {
   "ITEM": 1090126,
   "ESPEC": "MANUT AREAS VERDES - PLANTIO GRAMA",
   "NPRECO": 72000894,
   "UNID": "M2",
   "PUNIT": "R$ 29,61"
 },
 {
   "ITEM": 6010102,
   "ESPEC": "MANUT. CANTEIRO SERVIÇOS - BRA CAPEX",
   "NPRECO": 500012,
   "UNID": "MES",
   "PUNIT": "R$ 5.942,29"
 },
 {
   "ITEM": 5010102,
   "ESPEC": "MANUT. CANTEIRO SERVIÇOS - BRA OPEX",
   "NPRECO": 500010,
   "UNID": "MES",
   "PUNIT": "R$ 2.746,11"
 },
 {
   "ITEM": 4010102,
   "ESPEC": "MANUT. CANTEIRO SERVIÇOS - CAC CAPEX",
   "NPRECO": 500008,
   "UNID": "MES",
   "PUNIT": "R$ 24.363,82"
 },
 {
   "ITEM": 3010102,
   "ESPEC": "MANUT. CANTEIRO SERVIÇOS - CAC OPEX",
   "NPRECO": 500006,
   "UNID": "MES",
   "PUNIT": "R$ 6.080,95"
 },
 {
   "ITEM": 2010102,
   "ESPEC": "MANUT. CANTEIRO SERVIÇOS - SJC CAPEX",
   "NPRECO": 500004,
   "UNID": "MES",
   "PUNIT": "R$ 96.593,46"
 },
 {
   "ITEM": 1010102,
   "ESPEC": "MANUT. CANTEIRO SERVIÇOS - SJC OPEX",
   "NPRECO": 500002,
   "UNID": "MES",
   "PUNIT": "R$ 30.131,95"
 },
 {
   "ITEM": 2180106,
   "ESPEC": "MAPEAMENTO DE INTERFERÊNCIAS PARA MND",
   "NPRECO": 510023,
   "UNID": "M",
   "PUNIT": "R$ 101,92"
 },
 {
   "ITEM": 1100301,
   "ESPEC": "MOB EQ - EQUIP EXEC LIMP DESINF IMOVEIS",
   "NPRECO": 349030,
   "UNID": "un",
   "PUNIT": "R$ 3,63"
 },
 {
   "ITEM": 2180315,
   "ESPEC": "MOB/DESMOB P/ HDD 250 A 500 MM ATÉ 50 KM",
   "NPRECO": 510025,
   "UNID": "un",
   "PUNIT": "R$ 7.193,07"
 },
 {
   "ITEM": 2180314,
   "ESPEC": "MOB/DESMOB P/ HDD-ATÉ 225MM ATÉ 50 KM",
   "NPRECO": 510024,
   "UNID": "un",
   "PUNIT": "R$ 7.000,58"
 },
 {
   "ITEM": 1090205,
   "ESPEC": "MOBIL PINTURA HORIZONTAL",
   "NPRECO": 72000445,
   "UNID": "un",
   "PUNIT": "R$ 69,57"
 },
 {
   "ITEM": 1060401,
   "ESPEC": "NIV CX REGISTRO DE PARADA S/REP",
   "NPRECO": 72000338,
   "UNID": "un",
   "PUNIT": "R$ 249,42"
 },
 {
   "ITEM": 1080213,
   "ESPEC": "NPV C/LPB LEITO COMPX A",
   "NPRECO": 72000827,
   "UNID": "un",
   "PUNIT": "R$ 972,86"
 },
 {
   "ITEM": 1080212,
   "ESPEC": "NPV C/LPB LEITO COMPX B",
   "NPRECO": 72000826,
   "UNID": "un",
   "PUNIT": "R$ 927,94"
 },
 {
   "ITEM": 1080201,
   "ESPEC": "NPV C/LPB LEITO COMPX C",
   "NPRECO": 72000006,
   "UNID": "un",
   "PUNIT": "R$ 858,87"
 },
 {
   "ITEM": 1080215,
   "ESPEC": "NPV C/REP PASS",
   "NPRECO": 72000829,
   "UNID": "un",
   "PUNIT": "R$ 820,33"
 },
 {
   "ITEM": 1080214,
   "ESPEC": "NPV PASS S/REP",
   "NPRECO": 72000828,
   "UNID": "un",
   "PUNIT": "R$ 614,36"
 },
 {
   "ITEM": 1090127,
   "ESPEC": "PAV ASF BASE BGS TRAF LEVE",
   "NPRECO": 72000952,
   "UNID": "M2",
   "PUNIT": "R$ 286,22"
 },
 {
   "ITEM": 1090128,
   "ESPEC": "PAV ASF BASE BGS TRAF MEDIO",
   "NPRECO": 72000953,
   "UNID": "M2",
   "PUNIT": "R$ 562,56"
 },
 {
   "ITEM": 1090129,
   "ESPEC": "PAV ASF BASE BGS TRAF PESADO",
   "NPRECO": 72000954,
   "UNID": "M2",
   "PUNIT": "R$ 577,67"
 },
 {
   "ITEM": 2180107,
   "ESPEC": "PLANO DE FURO PARA HDD",
   "NPRECO": 510026,
   "UNID": "M",
   "PUNIT": "R$ 117,57"
 },
 {
   "ITEM": 2060107,
   "ESPEC": "PRA FF DE 200 A 250 S/ REP SF",
   "NPRECO": 72000360,
   "UNID": "M",
   "PUNIT": "R$ 128,87"
 },
 {
   "ITEM": 2060108,
   "ESPEC": "PRA FF DE 300 A 400 S/ REP SF",
   "NPRECO": 72000361,
   "UNID": "M",
   "PUNIT": "R$ 247,57"
 },
 {
   "ITEM": 2060106,
   "ESPEC": "PRA FF DE 80 A 150 S/ REP SF",
   "NPRECO": 72000359,
   "UNID": "M",
   "PUNIT": "R$ 94,70"
 },
 {
   "ITEM": 2060101,
   "ESPEC": "PRA PEAD 32MM S/REP SF",
   "NPRECO": 72000349,
   "UNID": "M",
   "PUNIT": "R$ 50,58"
 },
 {
   "ITEM": 2060103,
   "ESPEC": "PRA PEAD DE 140 A 250 S/REP SF",
   "NPRECO": 72000352,
   "UNID": "M",
   "PUNIT": "R$ 139,02"
 },
 {
   "ITEM": 2060104,
   "ESPEC": "PRA PEAD DE 280 A 400 S/REP SF",
   "NPRECO": 72000353,
   "UNID": "M",
   "PUNIT": "R$ 182,01"
 },
 {
   "ITEM": 2060102,
   "ESPEC": "PRA PEAD DE 63 A 125 S/REP SF",
   "NPRECO": 72000351,
   "UNID": "M",
   "PUNIT": "R$ 93,17"
 },
 {
   "ITEM": 2060105,
   "ESPEC": "PRA PVC DE 50 A 100 S/ REP SF",
   "NPRECO": 72000357,
   "UNID": "M",
   "PUNIT": "R$ 108,52"
 },
 {
   "ITEM": 2140103,
   "ESPEC": "PRE CER/PVC 150 ATE 1,5M S/REP SF",
   "NPRECO": 72000686,
   "UNID": "M",
   "PUNIT": "R$ 265,36"
 },
 {
   "ITEM": 2140105,
   "ESPEC": "PRE CER/PVC 150 ATE 2,7M S/REP SF",
   "NPRECO": 72000688,
   "UNID": "M",
   "PUNIT": "R$ 735,37"
 },
 {
   "ITEM": 2140104,
   "ESPEC": "PRE CER/PVC 150 ATE 2M S/REP SF",
   "NPRECO": 72000687,
   "UNID": "M",
   "PUNIT": "R$ 412,62"
 },
 {
   "ITEM": 2140106,
   "ESPEC": "PRE CER/PVC 150 ATE 3,5M S/REP SF",
   "NPRECO": 72000689,
   "UNID": "M",
   "PUNIT": "R$ 1.474,97"
 },
 {
   "ITEM": 2140107,
   "ESPEC": "PRE CER/PVC 200 ATE 1,5M S/REP SF",
   "NPRECO": 72000690,
   "UNID": "M",
   "PUNIT": "R$ 306,56"
 },
 {
   "ITEM": 2140109,
   "ESPEC": "PRE CER/PVC 200 ATE 2,7M S/REP SF",
   "NPRECO": 72000692,
   "UNID": "M",
   "PUNIT": "R$ 830,69"
 },
 {
   "ITEM": 2140108,
   "ESPEC": "PRE CER/PVC 200 ATE 2M S/REP SF",
   "NPRECO": 72000691,
   "UNID": "M",
   "PUNIT": "R$ 486,40"
 },
 {
   "ITEM": 2140110,
   "ESPEC": "PRE CER/PVC 200 ATE 3,5M S/REP SF",
   "NPRECO": 72000693,
   "UNID": "M",
   "PUNIT": "R$ 1.655,87"
 },
 {
   "ITEM": 2140111,
   "ESPEC": "PRE CER/PVC 300 ATE 1,5M S/REP SF",
   "NPRECO": 72000694,
   "UNID": "M",
   "PUNIT": "R$ 365,61"
 },
 {
   "ITEM": 2140113,
   "ESPEC": "PRE CER/PVC 300 ATE 2,7M S/REP SF",
   "NPRECO": 72000696,
   "UNID": "M",
   "PUNIT": "R$ 944,14"
 },
 {
   "ITEM": 2140112,
   "ESPEC": "PRE CER/PVC 300 ATE 2M S/REP SF",
   "NPRECO": 72000695,
   "UNID": "M",
   "PUNIT": "R$ 588,35"
 },
 {
   "ITEM": 2140114,
   "ESPEC": "PRE CER/PVC 300 ATE 3,5M S/REP SF",
   "NPRECO": 72000697,
   "UNID": "M",
   "PUNIT": "R$ 1.841,30"
 },
 {
   "ITEM": 2140102,
   "ESPEC": "PRE FF 200 ATE 250MM S/REP SFMH",
   "NPRECO": 72000685,
   "UNID": "M",
   "PUNIT": "R$ 135,49"
 },
 {
   "ITEM": 2140101,
   "ESPEC": "PRE FF 80 ATE 150MM S/REP SFMH",
   "NPRECO": 72000684,
   "UNID": "M",
   "PUNIT": "R$ 100,55"
 },
 {
   "ITEM": 2140121,
   "ESPEC": "PRE PEAD ESGOTO 110MM S/ REP PAV",
   "NPRECO": 72001032,
   "UNID": "M",
   "PUNIT": "R$ 118,98"
 },
 {
   "ITEM": 2140122,
   "ESPEC": "PRE PEAD ESGOTO 160MM S/ REP PAV",
   "NPRECO": 72001033,
   "UNID": "M",
   "PUNIT": "R$ 158,71"
 },
 {
   "ITEM": 2140123,
   "ESPEC": "PRE PEAD ESGOTO 200MM S/ REP PAV",
   "NPRECO": 72001034,
   "UNID": "M",
   "PUNIT": "R$ 164,67"
 },
 {
   "ITEM": 2140124,
   "ESPEC": "PRE PEAD ESGOTO 250MM S/ REP PAV",
   "NPRECO": 72001035,
   "UNID": "M",
   "PUNIT": "R$ 164,23"
 },
 {
   "ITEM": 2140125,
   "ESPEC": "PRE PEAD ESGOTO 315MM S/ REP PAV",
   "NPRECO": 72001036,
   "UNID": "M",
   "PUNIT": "R$ 199,49"
 },
 {
   "ITEM": 2140126,
   "ESPEC": "PRE PEAD ESGOTO 355MM S/ REP PAV",
   "NPRECO": 72001037,
   "UNID": "M",
   "PUNIT": "R$ 198,35"
 },
 {
   "ITEM": 2140127,
   "ESPEC": "PRE PEAD ESGOTO 400MM S/ REP PAV",
   "NPRECO": 72001038,
   "UNID": "M",
   "PUNIT": "R$ 195,56"
 },
 {
   "ITEM": 2140119,
   "ESPEC": "PRE PEAD ESGOTO 63MM S/ REP PAV",
   "NPRECO": 72001042,
   "UNID": "M",
   "PUNIT": "R$ 112,27"
 },
 {
   "ITEM": 2140120,
   "ESPEC": "PRE PEAD ESGOTO 90MM S/ REP PAV",
   "NPRECO": 72001043,
   "UNID": "M",
   "PUNIT": "R$ 116,26"
 },
 {
   "ITEM": 2140115,
   "ESPEC": "PRE PVC 400 ATE 1,5M S/REP SF",
   "NPRECO": 72000698,
   "UNID": "M",
   "PUNIT": "R$ 369,57"
 },
 {
   "ITEM": 2140117,
   "ESPEC": "PRE PVC 400 ATE 2,7M S/REP SF",
   "NPRECO": 72000700,
   "UNID": "M",
   "PUNIT": "R$ 936,13"
 },
 {
   "ITEM": 2140116,
   "ESPEC": "PRE PVC 400 ATE 2M S/REP SF",
   "NPRECO": 72000699,
   "UNID": "M",
   "PUNIT": "R$ 565,18"
 },
 {
   "ITEM": 2140118,
   "ESPEC": "PRE PVC 400 ATE 3,5M S/REP SF",
   "NPRECO": 72000701,
   "UNID": "M",
   "PUNIT": "R$ 1.930,87"
 },
 {
   "ITEM": 1090108,
   "ESPEC": "PREPARO DE CX SERV. AG",
   "NPRECO": 72000854,
   "UNID": "M2",
   "PUNIT": "R$ 16,01"
 },
 {
   "ITEM": 1090109,
   "ESPEC": "PREPARO DE CX SERV. ESG",
   "NPRECO": 72000855,
   "UNID": "M2",
   "PUNIT": "R$ 15,82"
 },
 {
   "ITEM": 2070317,
   "ESPEC": "PRESERV INTERF SERV. AG",
   "NPRECO": 72000456,
   "UNID": "un",
   "PUNIT": "R$ 267,91"
 },
 {
   "ITEM": 2170101,
   "ESPEC": "PRESERV INTERF SERV. ESG",
   "NPRECO": 72000836,
   "UNID": "un",
   "PUNIT": "R$ 421,14"
 },
 {
   "ITEM": 2020205,
   "ESPEC": "RAMAL DN 50 A 100 S/REP SF",
   "NPRECO": 72000080,
   "UNID": "M",
   "PUNIT": "R$ 61,62"
 },
 {
   "ITEM": 1080408,
   "ESPEC": "REAB CAM TANQUE 10 M3",
   "NPRECO": 72000983,
   "UNID": "EQD",
   "PUNIT": "R$ 2.232,34"
 },
 {
   "ITEM": 1090102,
   "ESPEC": "REATERRO DE VALA",
   "NPRECO": 72000848,
   "UNID": "M3",
   "PUNIT": "R$ 147,23"
 },
 {
   "ITEM": 1080202,
   "ESPEC": "REC PI ATE 2 M S/REP",
   "NPRECO": 72000761,
   "UNID": "un",
   "PUNIT": "R$ 5.146,64"
 },
 {
   "ITEM": 1080203,
   "ESPEC": "REC PI DE 2 A 3 M S/REP",
   "NPRECO": 72000762,
   "UNID": "un",
   "PUNIT": "R$ 7.010,74"
 },
 {
   "ITEM": 1080204,
   "ESPEC": "REC PV ATE 2 M S/REP",
   "NPRECO": 72000763,
   "UNID": "un",
   "PUNIT": "R$ 6.502,82"
 },
 {
   "ITEM": 1080205,
   "ESPEC": "REC PV DE 2 A 3 M S/REP",
   "NPRECO": 72000764,
   "UNID": "un",
   "PUNIT": "R$ 8.811,72"
 },
 {
   "ITEM": 1080206,
   "ESPEC": "REC PV DE 3 A 4 M S/REP",
   "NPRECO": 72000765,
   "UNID": "un",
   "PUNIT": "R$ 10.757,86"
 },
 {
   "ITEM": 1080207,
   "ESPEC": "REC PV DE 4 A 5M S/REP",
   "NPRECO": 72000766,
   "UNID": "un",
   "PUNIT": "R$ 15.185,21"
 },
 {
   "ITEM": 1090207,
   "ESPEC": "RECOMP SINALIZ HORIZ BASE ACRILICA",
   "NPRECO": 72000447,
   "UNID": "M2",
   "PUNIT": "R$ 116,58"
 },
 {
   "ITEM": 1090206,
   "ESPEC": "RECOMP SINALIZ HORIZ BASE AGUA",
   "NPRECO": 72000446,
   "UNID": "M2",
   "PUNIT": "R$ 93,35"
 },
 {
   "ITEM": 1030102,
   "ESPEC": "REGCV SF",
   "NPRECO": 72000227,
   "UNID": "un",
   "PUNIT": "R$ 288,05"
 },
 {
   "ITEM": 2110110,
   "ESPEC": "RELATORIO DE DIAGNOSTICO E PROGNOSTICO",
   "NPRECO": 72000986,
   "UNID": "KM",
   "PUNIT": "R$ 725,90"
 },
 {
   "ITEM": 1040105,
   "ESPEC": "RELIG CV AG",
   "NPRECO": 72000245,
   "UNID": "un",
   "PUNIT": "R$ 44,69"
 },
 {
   "ITEM": 1040108,
   "ESPEC": "RELIG CV AG PT",
   "NPRECO": 72000251,
   "UNID": "un",
   "PUNIT": "R$ 59,20"
 },
 {
   "ITEM": 1040106,
   "ESPEC": "RELIG RAMAL AG PT S/REP SF",
   "NPRECO": 72000249,
   "UNID": "un",
   "PUNIT": "R$ 120,72"
 },
 {
   "ITEM": 1040107,
   "ESPEC": "RELIG TMD AG PT S/REP SF",
   "NPRECO": 72000250,
   "UNID": "un",
   "PUNIT": "R$ 477,04"
 },
 {
   "ITEM": 5070401,
   "ESPEC": "REM.BASE BRA - DESOBSTRUÇÃO",
   "NPRECO": 500306,
   "UNID": "MES",
   "PUNIT": "R$ 4.832,33"
 },
 {
   "ITEM": 5060101,
   "ESPEC": "REM.BASE BRA - MANT. LIG. DOMIC. ESGOTO",
   "NPRECO": 500304,
   "UNID": "MES",
   "PUNIT": "R$ 3.814,86"
 },
 {
   "ITEM": 5020101,
   "ESPEC": "REM.BASE BRA - MANUT. LIG. DOM.ÁGUA",
   "NPRECO": 500301,
   "UNID": "MES",
   "PUNIT": "R$ 661,72"
 },
 {
   "ITEM": 5050101,
   "ESPEC": "REM.BASE BRA - MANUT. REDES DE ÁGUA",
   "NPRECO": 500303,
   "UNID": "MES",
   "PUNIT": "R$ 4.140,69"
 },
 {
   "ITEM": 5070101,
   "ESPEC": "REM.BASE BRA - MANUT. REDES DE ESGOTO",
   "NPRECO": 500305,
   "UNID": "MES",
   "PUNIT": "R$ 21.389,96"
 },
 {
   "ITEM": 5030101,
   "ESPEC": "REM.BASE BRA - SERV. GERAIS EM CAVALETE",
   "NPRECO": 500302,
   "UNID": "MES",
   "PUNIT": "R$ 3.855,39"
 },
 {
   "ITEM": 3070401,
   "ESPEC": "REM.BASE CAC - DESOBSTRUÇÃO",
   "NPRECO": 500206,
   "UNID": "MES",
   "PUNIT": "R$ 52.483,19"
 },
 {
   "ITEM": 3060101,
   "ESPEC": "REM.BASE CAC - MANT. LIG. DOMIC. ESGOTO",
   "NPRECO": 500204,
   "UNID": "MES",
   "PUNIT": "R$ 28.755,29"
 },
 {
   "ITEM": 3020101,
   "ESPEC": "REM.BASE CAC - MANUT. LIG. DOM.ÁGUA",
   "NPRECO": 500201,
   "UNID": "MES",
   "PUNIT": "R$ 7.886,55"
 },
 {
   "ITEM": 3050101,
   "ESPEC": "REM.BASE CAC - MANUT. REDES DE ÁGUA",
   "NPRECO": 500203,
   "UNID": "MES",
   "PUNIT": "R$ 14.904,70"
 },
 {
   "ITEM": 3070101,
   "ESPEC": "REM.BASE CAC - MANUT. REDES DE ESGOTO",
   "NPRECO": 500205,
   "UNID": "MES",
   "PUNIT": "R$ 28.627,51"
 },
 {
   "ITEM": 3030101,
   "ESPEC": "REM.BASE CAC - SERV. GERAIS EM CAVALETE",
   "NPRECO": 500202,
   "UNID": "MES",
   "PUNIT": "R$ 23.022,22"
 },
 {
   "ITEM": 7060401,
   "ESPEC": "REM.BASE IGA - DESOBSTRUÇÃO",
   "NPRECO": 500406,
   "UNID": "MES",
   "PUNIT": "R$ 1.894,94"
 },
 {
   "ITEM": 7050101,
   "ESPEC": "REM.BASE IGA - MANT. LIG. DOMIC. ESGOTO",
   "NPRECO": 500404,
   "UNID": "MES",
   "PUNIT": "R$ 205,10"
 },
 {
   "ITEM": 7010101,
   "ESPEC": "REM.BASE IGA - MANUT. LIG. DOM.ÁGUA",
   "NPRECO": 500401,
   "UNID": "MES",
   "PUNIT": "R$ 710,68"
 },
 {
   "ITEM": 7040101,
   "ESPEC": "REM.BASE IGA - MANUT. REDES DE ÁGUA",
   "NPRECO": 500403,
   "UNID": "MES",
   "PUNIT": "R$ 2.201,17"
 },
 {
   "ITEM": 7060101,
   "ESPEC": "REM.BASE IGA - MANUT. REDES DE ESGOTO",
   "NPRECO": 500405,
   "UNID": "MES",
   "PUNIT": "R$ 587,79"
 },
 {
   "ITEM": 7020101,
   "ESPEC": "REM.BASE IGA - SERV. GERAIS EM CAVALETE",
   "NPRECO": 500402,
   "UNID": "MES",
   "PUNIT": "R$ 1.057,29"
 },
 {
   "ITEM": 9060401,
   "ESPEC": "REM.BASE JAM - DESOBSTRUÇÃO",
   "NPRECO": 500506,
   "UNID": "MES",
   "PUNIT": "R$ 526,93"
 },
 {
   "ITEM": 9050101,
   "ESPEC": "REM.BASE JAM - MANT. LIG. DOMIC. ESGOTO",
   "NPRECO": 500504,
   "UNID": "MES",
   "PUNIT": "R$ 731,88"
 },
 {
   "ITEM": 9010101,
   "ESPEC": "REM.BASE JAM - MANUT. LIG. DOM.ÁGUA",
   "NPRECO": 500501,
   "UNID": "MES",
   "PUNIT": "R$ 150,85"
 },
 {
   "ITEM": 9040101,
   "ESPEC": "REM.BASE JAM - MANUT. REDES DE ÁGUA",
   "NPRECO": 500503,
   "UNID": "MES",
   "PUNIT": "R$ 369,61"
 },
 {
   "ITEM": 9060101,
   "ESPEC": "REM.BASE JAM - MANUT. REDES DE ESGOTO",
   "NPRECO": 500505,
   "UNID": "MES",
   "PUNIT": "R$ 531,07"
 },
 {
   "ITEM": 9020101,
   "ESPEC": "REM.BASE JAM - SERV. GERAIS EM CAVALETE",
   "NPRECO": 500502,
   "UNID": "MES",
   "PUNIT": "R$ 196,36"
 },
 {
   "ITEM": 11060401,
   "ESPEC": "REM.BASE MLO - DESOBSTRUÇÃO",
   "NPRECO": 500606,
   "UNID": "MES",
   "PUNIT": "R$ 1.614,09"
 },
 {
   "ITEM": 11050101,
   "ESPEC": "REM.BASE MLO - MANT. LIG. DOMIC. ESGOTO",
   "NPRECO": 500604,
   "UNID": "MES",
   "PUNIT": "R$ 339,86"
 },
 {
   "ITEM": 11010101,
   "ESPEC": "REM.BASE MLO - MANUT. LIG. DOM.ÁGUA",
   "NPRECO": 500601,
   "UNID": "MES",
   "PUNIT": "R$ 291,76"
 },
 {
   "ITEM": 11040101,
   "ESPEC": "REM.BASE MLO - MANUT. REDES DE ÁGUA",
   "NPRECO": 500603,
   "UNID": "MES",
   "PUNIT": "R$ 594,79"
 },
 {
   "ITEM": 11060101,
   "ESPEC": "REM.BASE MLO - MANUT. REDES DE ESGOTO",
   "NPRECO": 500605,
   "UNID": "MES",
   "PUNIT": "R$ 1.118,33"
 },
 {
   "ITEM": 11020101,
   "ESPEC": "REM.BASE MLO - SERV. GERAIS EM CAVALETE",
   "NPRECO": 500602,
   "UNID": "MES",
   "PUNIT": "R$ 321,95"
 },
 {
   "ITEM": 1080401,
   "ESPEC": "REM.BASE SJC - DESOBSTRUÇÃO",
   "NPRECO": 500106,
   "UNID": "MES",
   "PUNIT": "R$ 305.687,48"
 },
 {
   "ITEM": 1070101,
   "ESPEC": "REM.BASE SJC - MANT. LIG. DOMIC. ESGOTO",
   "NPRECO": 500104,
   "UNID": "MES",
   "PUNIT": "R$ 168.016,42"
 },
 {
   "ITEM": 1020101,
   "ESPEC": "REM.BASE SJC - MANUT. LIG. DOM.ÁGUA",
   "NPRECO": 500101,
   "UNID": "MES",
   "PUNIT": "R$ 49.504,55"
 },
 {
   "ITEM": 1060101,
   "ESPEC": "REM.BASE SJC - MANUT. REDES DE ÁGUA",
   "NPRECO": 500103,
   "UNID": "MES",
   "PUNIT": "R$ 71.060,96"
 },
 {
   "ITEM": 1080101,
   "ESPEC": "REM.BASE SJC - MANUT. REDES DE ESGOTO",
   "NPRECO": 500105,
   "UNID": "MES",
   "PUNIT": "R$ 193.268,69"
 },
 {
   "ITEM": 1030101,
   "ESPEC": "REM.BASE SJC - SERV. GERAIS EM CAVALETE",
   "NPRECO": 500102,
   "UNID": "MES",
   "PUNIT": "R$ 117.317,13"
 },
 {
   "ITEM": 2180203,
   "ESPEC": "REMOÇÃO SINGUL./VÁLV./REP.TUBO",
   "NPRECO": 421513,
   "UNID": "un",
   "PUNIT": "R$ 786,54"
 },
 {
   "ITEM": 1090114,
   "ESPEC": "REPOS CAPA CBUQ",
   "NPRECO": 72000860,
   "UNID": "M2",
   "PUNIT": "R$ 175,29"
 },
 {
   "ITEM": 1050101,
   "ESPEC": "RET HIDR DN 25 - 7,0 E 10,0 M3/H",
   "NPRECO": 422433,
   "UNID": "un",
   "PUNIT": "R$ 60,16"
 },
 {
   "ITEM": 1050102,
   "ESPEC": "RET HIDR DN 40 - 20,0 M3/H",
   "NPRECO": 422434,
   "UNID": "un",
   "PUNIT": "R$ 64,11"
 },
 {
   "ITEM": 1050103,
   "ESPEC": "RET HIDR DN 50 - 30,0 M3/H",
   "NPRECO": 422435,
   "UNID": "un",
   "PUNIT": "R$ 72,01"
 },
 {
   "ITEM": 1050106,
   "ESPEC": "RET HIDR E FILTRO DN 100 - 1.800 M3/DIA",
   "NPRECO": 422438,
   "UNID": "un",
   "PUNIT": "R$ 107,59"
 },
 {
   "ITEM": 1050107,
   "ESPEC": "RET HIDR E FILTRO DN 150 - 4.000 M3/DIA",
   "NPRECO": 422439,
   "UNID": "un",
   "PUNIT": "R$ 119,43"
 },
 {
   "ITEM": 1050108,
   "ESPEC": "RET HIDR E FILTRO DN 200 - 6.500 M3/DIA",
   "NPRECO": 422440,
   "UNID": "un",
   "PUNIT": "R$ 143,15"
 },
 {
   "ITEM": 1050104,
   "ESPEC": "RET HIDR E FILTRO DN 50 - 300 M3/DIA",
   "NPRECO": 422436,
   "UNID": "un",
   "PUNIT": "R$ 83,89"
 },
 {
   "ITEM": 1050105,
   "ESPEC": "RET HIDR E FILTRO DN 80 - 1.100 M3/DIA",
   "NPRECO": 422437,
   "UNID": "un",
   "PUNIT": "R$ 95,74"
 },
 {
   "ITEM": 1080501,
   "ESPEC": "RETIR E TRANSP DETRIT ACUM CESTO DE EEE",
   "NPRECO": 72000905,
   "UNID": "un",
   "PUNIT": "R$ 351,82"
 },
 {
   "ITEM": 1090101,
   "ESPEC": "RETIRA ENTULHO SERV. MOP",
   "NPRECO": 72000847,
   "UNID": "M3",
   "PUNIT": "R$ 247,94"
 },
 {
   "ITEM": 1090110,
   "ESPEC": "SELAGEM BASE BGS SERV. AG",
   "NPRECO": 72000856,
   "UNID": "M2",
   "PUNIT": "R$ 26,59"
 },
 {
   "ITEM": 1090111,
   "ESPEC": "SELAGEM BASE BGS SERV. ESG",
   "NPRECO": 72000857,
   "UNID": "M2",
   "PUNIT": "R$ 29,05"
 },
 {
   "ITEM": 1100302,
   "ESPEC": "SERV LAV LIMP DESINF EMERG IMOVEIS",
   "NPRECO": 349031,
   "UNID": "M2",
   "PUNIT": "R$ 17,17"
 },
 {
   "ITEM": 1090208,
   "ESPEC": "SINAL HORIZ VI A QUENTE ASPERSAO E=1,5MM",
   "NPRECO": 72000448,
   "UNID": "M2",
   "PUNIT": "R$ 75,34"
 },
 {
   "ITEM": 1090209,
   "ESPEC": "SINAL HORIZ VI A QUENTE EXTRUSAO E=3,0MM",
   "NPRECO": 72000449,
   "UNID": "M2",
   "PUNIT": "R$ 122,84"
 },
 {
   "ITEM": 2070301,
   "ESPEC": "SOND LOCALIZADAS S/REP",
   "NPRECO": 72000019,
   "UNID": "un",
   "PUNIT": "R$ 556,49"
 },
 {
   "ITEM": 1090106,
   "ESPEC": "SUB BASE BGS SERV. AG",
   "NPRECO": 72000852,
   "UNID": "M3",
   "PUNIT": "R$ 261,35"
 },
 {
   "ITEM": 1090107,
   "ESPEC": "SUB BASE BGS SERV. ESG",
   "NPRECO": 72000853,
   "UNID": "M3",
   "PUNIT": "R$ 253,94"
 },
 {
   "ITEM": 1090105,
   "ESPEC": "SUB BASE EM RACHÃO",
   "NPRECO": 72000851,
   "UNID": "M3",
   "PUNIT": "R$ 161,46"
 },
 {
   "ITEM": 2180205,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 110MM (SFMH)",
   "NPRECO": 421551,
   "UNID": "M",
   "PUNIT": "R$ 85,46"
 },
 {
   "ITEM": 2180206,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 160MM (SFMH)",
   "NPRECO": 421552,
   "UNID": "M",
   "PUNIT": "R$ 129,94"
 },
 {
   "ITEM": 2180207,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 200MM (SFMH)",
   "NPRECO": 421553,
   "UNID": "M",
   "PUNIT": "R$ 139,79"
 },
 {
   "ITEM": 2180208,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 225MM (SFMH)",
   "NPRECO": 421556,
   "UNID": "M",
   "PUNIT": "R$ 140,31"
 },
 {
   "ITEM": 2180209,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 250MM (SFMH)",
   "NPRECO": 421559,
   "UNID": "M",
   "PUNIT": "R$ 153,28"
 },
 {
   "ITEM": 2180210,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 280MM (SFMH)",
   "NPRECO": 421557,
   "UNID": "M",
   "PUNIT": "R$ 167,03"
 },
 {
   "ITEM": 2180211,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 315MM (SFMH)",
   "NPRECO": 421555,
   "UNID": "M",
   "PUNIT": "R$ 167,03"
 },
 {
   "ITEM": 2180212,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 400MM (SFMH)",
   "NPRECO": 421558,
   "UNID": "M",
   "PUNIT": "R$ 210,15"
 },
 {
   "ITEM": 2180204,
   "ESPEC": "SUB.TUB.EXT.ARR EST PEAD DE 90MM (SFMH)",
   "NPRECO": 421550,
   "UNID": "M",
   "PUNIT": "R$ 85,46"
 },
 {
   "ITEM": 2040105,
   "ESPEC": "SUBST CV POR UMA C/REP PASS",
   "NPRECO": 72000215,
   "UNID": "un",
   "PUNIT": "R$ 102,36"
 },
 {
   "ITEM": 2040104,
   "ESPEC": "SUBST CV POR UMA S/REP",
   "NPRECO": 72000214,
   "UNID": "un",
   "PUNIT": "R$ 78,90"
 },
 {
   "ITEM": 1080208,
   "ESPEC": "SUBST PI POR PLAST ATE 2M S/REP",
   "NPRECO": 72000767,
   "UNID": "un",
   "PUNIT": "R$ 9.594,67"
 },
 {
   "ITEM": 1080209,
   "ESPEC": "SUBST PV POR PLAST ATE 2M S/REP",
   "NPRECO": 72000768,
   "UNID": "un",
   "PUNIT": "R$ 12.488,83"
 },
 {
   "ITEM": 1080210,
   "ESPEC": "SUBST PV POR PLAST DE 2 A 3M S/REP",
   "NPRECO": 72000769,
   "UNID": "un",
   "PUNIT": "R$ 20.488,62"
 },
 {
   "ITEM": 1080211,
   "ESPEC": "SUBST PV POR PLAST DE 3 A 4M S/REP",
   "NPRECO": 72000770,
   "UNID": "un",
   "PUNIT": "R$ 27.970,10"
 },
 {
   "ITEM": 1080402,
   "ESPEC": "SUCÇÃO A ALTO VÁCUO EM REDE COLETORA",
   "NPRECO": 72000840,
   "UNID": "un",
   "PUNIT": "R$ 501,56"
 },
 {
   "ITEM": 1080407,
   "ESPEC": "SUCCAO A BAIXO VACUO EM REDE COLETORA",
   "NPRECO": 72000974,
   "UNID": "un",
   "PUNIT": "R$ 365,04"
 },
 {
   "ITEM": 1040103,
   "ESPEC": "SUPR CV",
   "NPRECO": 72000240,
   "UNID": "un",
   "PUNIT": "R$ 27,70"
 },
 {
   "ITEM": 1040102,
   "ESPEC": "SUPR RAMAL AG S/REP SF",
   "NPRECO": 72000239,
   "UNID": "un",
   "PUNIT": "R$ 117,41"
 },
 {
   "ITEM": 1040101,
   "ESPEC": "SUPR TMD AG S/REP SF",
   "NPRECO": 72000238,
   "UNID": "un",
   "PUNIT": "R$ 404,96"
 },
 {
   "ITEM": 2040110,
   "ESPEC": "TCV SF",
   "NPRECO": 72000226,
   "UNID": "un",
   "PUNIT": "R$ 226,20"
 },
 {
   "ITEM": 1100114,
   "ESPEC": "TECNICO DE SEGURANCA DO TRABALHO",
   "NPRECO": 74000068,
   "UNID": "H",
   "PUNIT": "R$ 89,31"
 },
 {
   "ITEM": 2110106,
   "ESPEC": "TELEV DE RAMAL DE ESGOTO VARRED",
   "NPRECO": 72000979,
   "UNID": "un",
   "PUNIT": "R$ 174,51"
 },
 {
   "ITEM": 2110108,
   "ESPEC": "TELEVISIONAMENTO INTERCEPTORES",
   "NPRECO": 72000981,
   "UNID": "M",
   "PUNIT": "R$ 35,21"
 },
 {
   "ITEM": 2110107,
   "ESPEC": "TELEVISIONAMENTO RCE",
   "NPRECO": 72000980,
   "UNID": "M",
   "PUNIT": "R$ 21,66"
 },
 {
   "ITEM": 2110109,
   "ESPEC": "TESTE FUMACA EM ESGOTO EQP BR",
   "NPRECO": 72000982,
   "UNID": "M",
   "PUNIT": "R$ 6,09"
 },
 {
   "ITEM": 2050101,
   "ESPEC": "THD ATE 10M3/H CORR",
   "NPRECO": 72000233,
   "UNID": "un",
   "PUNIT": "R$ 64,29"
 },
 {
   "ITEM": 2050201,
   "ESPEC": "THD ATE 10M3/H PREV",
   "NPRECO": 72000232,
   "UNID": "un",
   "PUNIT": "R$ 56,72"
 },
 {
   "ITEM": 2030103,
   "ESPEC": "TRA ATE 32MM CORR EX S/REP SF",
   "NPRECO": 72000045,
   "UNID": "un",
   "PUNIT": "R$ 935,95"
 },
 {
   "ITEM": 2030501,
   "ESPEC": "TRA ATE 32MM CORR MND S/REP SF",
   "NPRECO": 72000051,
   "UNID": "un",
   "PUNIT": "R$ 1.084,51"
 },
 {
   "ITEM": 2030101,
   "ESPEC": "TRA ATE 32MM CORR PA S/REP SF",
   "NPRECO": 72000043,
   "UNID": "un",
   "PUNIT": "R$ 583,70"
 },
 {
   "ITEM": 2030105,
   "ESPEC": "TRA ATE 32MM CORR PO S/REP SF",
   "NPRECO": 72000047,
   "UNID": "un",
   "PUNIT": "R$ 1.313,58"
 },
 {
   "ITEM": 2030102,
   "ESPEC": "TRA ATE 32MM CORR TA S/REP SF",
   "NPRECO": 72000044,
   "UNID": "un",
   "PUNIT": "R$ 793,99"
 },
 {
   "ITEM": 2030104,
   "ESPEC": "TRA ATE 32MM CORR TO S/REP SF",
   "NPRECO": 72000046,
   "UNID": "un",
   "PUNIT": "R$ 1.160,47"
 },
 {
   "ITEM": 2030303,
   "ESPEC": "TRA ATE 32MM PREV EX S/REP SF",
   "NPRECO": 72000040,
   "UNID": "un",
   "PUNIT": "R$ 659,25"
 },
 {
   "ITEM": 2030701,
   "ESPEC": "TRA ATE 32MM PREV MND S/REP SF",
   "NPRECO": 72000050,
   "UNID": "un",
   "PUNIT": "R$ 818,24"
 },
 {
   "ITEM": 2030301,
   "ESPEC": "TRA ATE 32MM PREV PA S/REP SF",
   "NPRECO": 72000038,
   "UNID": "un",
   "PUNIT": "R$ 397,17"
 },
 {
   "ITEM": 2030305,
   "ESPEC": "TRA ATE 32MM PREV PO S/REP SF",
   "NPRECO": 72000042,
   "UNID": "un",
   "PUNIT": "R$ 1.138,08"
 },
 {
   "ITEM": 2030302,
   "ESPEC": "TRA ATE 32MM PREV TA S/REP SF",
   "NPRECO": 72000039,
   "UNID": "un",
   "PUNIT": "R$ 551,06"
 },
 {
   "ITEM": 2030304,
   "ESPEC": "TRA ATE 32MM PREV TO S/REP SF",
   "NPRECO": 72000041,
   "UNID": "un",
   "PUNIT": "R$ 839,36"
 },
 {
   "ITEM": 2020604,
   "ESPEC": "TRANSF CV SIMPLES P/ MULT. 2HD SF",
   "NPRECO": 72000228,
   "UNID": "un",
   "PUNIT": "R$ 105,08"
 },
 {
   "ITEM": 2050301,
   "ESPEC": "TRANSP HD P/ AFERICAO",
   "NPRECO": 72000234,
   "UNID": "KM",
   "PUNIT": "R$ 3,61"
 },
 {
   "ITEM": 2130103,
   "ESPEC": "TRE CER/PVC ATE 2M CORR EX S/REP SF",
   "NPRECO": 72000486,
   "UNID": "un",
   "PUNIT": "R$ 1.970,86"
 },
 {
   "ITEM": 2130101,
   "ESPEC": "TRE CER/PVC ATE 2M CORR PA S/REP SF",
   "NPRECO": 72000484,
   "UNID": "un",
   "PUNIT": "R$ 1.114,90"
 },
 {
   "ITEM": 2130105,
   "ESPEC": "TRE CER/PVC ATE 2M CORR PO S/REP SF",
   "NPRECO": 72000488,
   "UNID": "un",
   "PUNIT": "R$ 3.296,28"
 },
 {
   "ITEM": 2130102,
   "ESPEC": "TRE CER/PVC ATE 2M CORR TA S/REP SF",
   "NPRECO": 72000485,
   "UNID": "un",
   "PUNIT": "R$ 1.776,00"
 },
 {
   "ITEM": 2130104,
   "ESPEC": "TRE CER/PVC ATE 2M CORR TO S/REP SF",
   "NPRECO": 72000487,
   "UNID": "un",
   "PUNIT": "R$ 2.725,32"
 },
 {
   "ITEM": 2130108,
   "ESPEC": "TRE CER/PVC DE 2 A 3M CORR EX S/REP SF",
   "NPRECO": 72000491,
   "UNID": "un",
   "PUNIT": "R$ 3.011,20"
 },
 {
   "ITEM": 2130106,
   "ESPEC": "TRE CER/PVC DE 2 A 3M CORR PA S/REP SF",
   "NPRECO": 72000489,
   "UNID": "un",
   "PUNIT": "R$ 1.763,93"
 },
 {
   "ITEM": 2130110,
   "ESPEC": "TRE CER/PVC DE 2 A 3M CORR PO S/REP SF",
   "NPRECO": 72000493,
   "UNID": "un",
   "PUNIT": "R$ 4.345,15"
 },
 {
   "ITEM": 2130107,
   "ESPEC": "TRE CER/PVC DE 2 A 3M CORR TA S/REP SF",
   "NPRECO": 72000490,
   "UNID": "un",
   "PUNIT": "R$ 2.483,29"
 },
 {
   "ITEM": 2130109,
   "ESPEC": "TRE CER/PVC DE 2 A 3M CORR TO S/REP SF",
   "NPRECO": 72000492,
   "UNID": "un",
   "PUNIT": "R$ 3.667,58"
 },
 {
   "ITEM": 2130113,
   "ESPEC": "TRE CER/PVC DE 3 A 4M CORR EX S/REP SF",
   "NPRECO": 72000496,
   "UNID": "un",
   "PUNIT": "R$ 4.469,02"
 },
 {
   "ITEM": 2130111,
   "ESPEC": "TRE CER/PVC DE 3 A 4M CORR PA S/REP SF",
   "NPRECO": 72000494,
   "UNID": "un",
   "PUNIT": "R$ 2.885,68"
 },
 {
   "ITEM": 2130112,
   "ESPEC": "TRE CER/PVC DE 3 A 4M CORR TA S/REP SF",
   "NPRECO": 72000495,
   "UNID": "un",
   "PUNIT": "R$ 3.806,65"
 },
 {
   "ITEM": 2130114,
   "ESPEC": "TRE CER/PVC DE 3 A 4M CORR TO S/REP SF",
   "NPRECO": 72000497,
   "UNID": "un",
   "PUNIT": "R$ 5.320,83"
 },
 {
   "ITEM": 2130115,
   "ESPEC": "TRE CER/PVC DE 3 A 4M CORR TO S/REP SF",
   "NPRECO": 72000498,
   "UNID": "un",
   "PUNIT": "R$ 6.158,66"
 },
 {
   "ITEM": 2190205,
   "ESPEC": "TROCA DE REGISTRO EM CAVALETE DN 100MM",
   "NPRECO": 422469,
   "UNID": "un",
   "PUNIT": "R$ 1.690,58"
 },
 {
   "ITEM": 2190201,
   "ESPEC": "TROCA DE REGISTRO EM CAVALETE DN 25MM",
   "NPRECO": 422465,
   "UNID": "un",
   "PUNIT": "R$ 149,74"
 },
 {
   "ITEM": 2190202,
   "ESPEC": "TROCA DE REGISTRO EM CAVALETE DN 40MM",
   "NPRECO": 422466,
   "UNID": "un",
   "PUNIT": "R$ 236,71"
 },
 {
   "ITEM": 2190203,
   "ESPEC": "TROCA DE REGISTRO EM CAVALETE DN 50MM",
   "NPRECO": 422467,
   "UNID": "un",
   "PUNIT": "R$ 342,31"
 },
 {
   "ITEM": 2190204,
   "ESPEC": "TROCA DE REGISTRO EM CAVALETE DN 80MM",
   "NPRECO": 422468,
   "UNID": "un",
   "PUNIT": "R$ 864,68"
 },
 {
   "ITEM": 2190105,
   "ESPEC": "TROCA HIDR DN 100 - 1.800 M3/DIA",
   "NPRECO": 422364,
   "UNID": "un",
   "PUNIT": "R$ 356,07"
 },
 {
   "ITEM": 2190106,
   "ESPEC": "TROCA HIDR DN 150 - 4.000 M3/DIA",
   "NPRECO": 422365,
   "UNID": "un",
   "PUNIT": "R$ 448,42"
 },
 {
   "ITEM": 2190107,
   "ESPEC": "TROCA HIDR DN 200 - 6.500 M3/DIA",
   "NPRECO": 422366,
   "UNID": "un",
   "PUNIT": "R$ 608,33"
 },
 {
   "ITEM": 2190101,
   "ESPEC": "TROCA HIDR DN 40 - 20,0 M3/H",
   "NPRECO": 422360,
   "UNID": "un",
   "PUNIT": "R$ 113,14"
 },
 {
   "ITEM": 2190102,
   "ESPEC": "TROCA HIDR DN 50 - 30,0 M3/H",
   "NPRECO": 422361,
   "UNID": "un",
   "PUNIT": "R$ 199,70"
 },
 {
   "ITEM": 2190103,
   "ESPEC": "TROCA HIDR DN 50 - 300 M3/DIA",
   "NPRECO": 422362,
   "UNID": "un",
   "PUNIT": "R$ 262,62"
 },
 {
   "ITEM": 2190104,
   "ESPEC": "TROCA HIDR DN 80 - 1.100 M3/DIA",
   "NPRECO": 422363,
   "UNID": "un",
   "PUNIT": "R$ 328,78"
 },
 {
   "ITEM": 2040101,
   "ESPEC": "TROCA PREVENT REGISTRO CAVALET DN 20MM",
   "NPRECO": 72000205,
   "UNID": "un",
   "PUNIT": "R$ 47,03"
 },
 {
   "ITEM": 2180201,
   "ESPEC": "VALA DE EMBOQUE OU DESEMBOQUE",
   "NPRECO": 421511,
   "UNID": "un",
   "PUNIT": "R$ 4.645,68"
 },
 {
   "ITEM": 2180103,
   "ESPEC": "VERIF DA ESTANQ REDES E ADUT DE ÁGUA",
   "NPRECO": 421540,
   "UNID": "EQD",
   "PUNIT": "R$ 3.385,75"
 }
];
