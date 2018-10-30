'use strict';

const energyLabelMapping = {
  'A++++': { index: -2, lower: -10000, upper: -1000, color: [60,  134, 126] }, // dummy value
  'A+++':  { index: -1, lower: -1000,  upper:     0, color: [60,  134, 126] },
  'A++':   { index:  0, lower:     0,  upper:   0.5, color: [60,  134, 126] },
  'A+':    { index:  1, lower:   0.5,  upper:   0.7, color: [60,  134, 126] },
  'A':     { index:  2, lower:   0.7,  upper:  1.05, color: [60,  134, 126] },
  'B':     { index:  3, lower:  1.05,  upper:   1.3, color: [64,  160, 128] },
  'C':     { index:  4, lower:   1.3,  upper:   1.6, color: [192, 192, 128] },
  'D':     { index:  5, lower:   1.6,  upper:   2.0, color: [255, 232, 0]   },
  'E':     { index:  6, lower:   2.0,  upper:   2.4, color: [251, 184, 60]  },
  'F':     { index:  7, lower:   2.4,  upper:   2.9, color: [240, 145, 78]  },
  'G':     { index:  8, lower:   2.9,  upper: 10000, color: [234, 75,  60]  },
};

function energyLabelDecisionTree(bouwjaar, oppvlak) {
  if (bouwjaar <= 1998.5) {
    if (bouwjaar <= 1979.5) {
      if (bouwjaar <= 1974.5) {
        if (bouwjaar <= 1964.5) {
          if (bouwjaar <= 1918.5) {
            if (oppvlak <= 107.5) {
              return { label: 5, probability: 0.2553495543604979 };
            } else { // if oppvlak > 107.5
              return { label: 6, probability: 0.19000070318543 };
            }
          } else { // if bouwjaar > 1918.5
            if (oppvlak <= 116.5) {
              return { label: 6, probability: 0.2690322471463264 };
            } else { // if oppvlak > 116.5
              return { label: 6, probability: 0.2140200087798341 };
            }
          }
        } else { // if bouwjaar > 1964.5
          if (oppvlak <= 93.5) {
            if (oppvlak <= 44.5) {
              return { label: 6, probability: 0.38415584415584414 };
            } else { // if oppvlak > 44.5
              return { label: 6, probability: 0.31856872846859485 };
            }
          } else { // if oppvlak > 93.5
            if (bouwjaar <= 1969.5) {
              return { label: 6, probability: 0.3007950869112244 };
            } else { // if bouwjaar > 1969.5
              return { label: 6, probability: 0.34286239764585463 };
            }
          }
        }
      } else { // if bouwjaar > 1974.5
        if (oppvlak <= 66.5) {
          if (bouwjaar <= 1977.5) {
            if (oppvlak <= 24.5) {
              return { label: 4, probability: 0.5870786516853933 };
            } else { // if oppvlak > 24.5
              return { label: 6, probability: 0.355353414852371 };
            }
          } else { // if bouwjaar > 1977.5
            if (oppvlak <= 58.5) {
              return { label: 6, probability: 0.4514851485148515 };
            } else { // if oppvlak > 58.5
              return { label: 6, probability: 0.43393939393939396 };
            }
          }
        } else { // if oppvlak > 66.5
          if (bouwjaar <= 1975.5) {
            if (oppvlak <= 124.5) {
              return { label: 5, probability: 0.34980876728449545 };
            } else { // if oppvlak > 124.5
              return { label: 6, probability: 0.41686555290373906 };
            }
          } else { // if bouwjaar > 1975.5
            if (oppvlak <= 325.5) {
              return { label: 5, probability: 0.43750387231880644 };
            } else { // if oppvlak > 325.5
              return { label: 4, probability: 0.2720070422535211 };
            }
          }
        }
      }
    } else { // if bouwjaar > 1979.5
      if (bouwjaar <= 1988.5) {
        if (bouwjaar <= 1983.5) {
          if (oppvlak <= 60.5) {
            if (oppvlak <= 37.5) {
              return { label: 6, probability: 0.42007768150582614 };
            } else { // if oppvlak > 37.5
              return { label: 5, probability: 0.44976046394351993 };
            }
          } else { // if oppvlak > 60.5
            if (bouwjaar <= 1981.5) {
              return { label: 5, probability: 0.5012361040619525 };
            } else { // if bouwjaar > 1981.5
              return { label: 5, probability: 0.5671160767040877 };
            }
          }
        } else { // if bouwjaar > 1983.5
          if (oppvlak <= 65.5) {
            if (oppvlak <= 51.5) {
              return { label: 5, probability: 0.44263518872766294 };
            } else { // if oppvlak > 51.5
              return { label: 5, probability: 0.5188020072413136 };
            }
          } else { // if oppvlak > 65.5
            if (oppvlak <= 222.5) {
              return { label: 5, probability: 0.6463891435332095 };
            } else { // if oppvlak > 222.5
              return { label: 5, probability: 0.2977296181630547 };
            }
          }
        }
      } else { // if bouwjaar > 1988.5
        if (bouwjaar <= 1991.5) {
          if (oppvlak <= 72.5) {
            if (oppvlak <= 48.5) {
              return { label: 4, probability: 0.37228420434527304 };
            } else { // if oppvlak > 48.5
              return { label: 5, probability: 0.4633514023096865 };
            }
          } else { // if oppvlak > 72.5
            if (oppvlak <= 216.5) {
              return { label: 5, probability: 0.5841266155870288 };
            } else { // if oppvlak > 216.5
              return { label: 4, probability: 0.3451561672842774 };
            }
          }
        } else { // if bouwjaar > 1991.5
          if (oppvlak <= 220.5) {
            if (oppvlak <= 62.5) {
              return { label: 4, probability: 0.43711967545638947 };
            } else { // if oppvlak > 62.5
              return { label: 4, probability: 0.46546457394198393 };
            }
          } else { // if oppvlak > 220.5
            if (bouwjaar <= 1996.5) {
              return { label: 4, probability: 0.3232521602513747 };
            } else { // if bouwjaar > 1996.5
              return { label: 3, probability: 0.35408245755860956 };
            }
          }
        }
      }
    }
  } else { // if bouwjaar > 1998.5
    if (bouwjaar <= 2009.5) {
      if (bouwjaar <= 2001.5) {
        if (oppvlak <= 146.5) {
          if (oppvlak <= 61.5) {
            if (oppvlak <= 26.5) {
              return { label: 4, probability: 0.5732838589981447 };
            } else { // if oppvlak > 26.5
              return { label: 4, probability: 0.39563606422396047 };
            }
          } else { // if oppvlak > 61.5
            if (bouwjaar <= 1999.5) {
              return { label: 4, probability: 0.5716945996275605 };
            } else { // if bouwjaar > 1999.5
              return { label: 4, probability: 0.6148104498133962 };
            }
          }
        } else { // if oppvlak > 146.5
          if (oppvlak <= 254.5) {
            if (oppvlak <= 148.5) {
              return { label: 3, probability: 0.6166666666666667 };
            } else { // if oppvlak > 148.5
              return { label: 4, probability: 0.5238455715367146 };
            }
          } else { // if oppvlak > 254.5
            if (oppvlak <= 4222.5) {
              return { label: 3, probability: 0.38504326328800986 };
            } else { // if oppvlak > 4222.5
              return { label: 4, probability: 0.46411483253588515 };
            }
          }
        }
      } else { // if bouwjaar > 2001.5
        if (bouwjaar <= 2007.5) {
          if (oppvlak <= 62.5) {
            if (bouwjaar <= 2005.5) {
              return { label: 4, probability: 0.3775453016999813 };
            } else { // if bouwjaar > 2005.5
              return { label: 3, probability: 0.45108421583459407 };
            }
          } else { // if oppvlak > 62.5
            if (oppvlak <= 145.5) {
              return { label: 4, probability: 0.5177499930228014 };
            } else { // if oppvlak > 145.5
              return { label: 3, probability: 0.48552048004174275 };
            }
          }
        } else { // if bouwjaar > 2007.5
          if (oppvlak <= 113.5) {
            if (oppvlak <= 35.5) {
              return { label: 3, probability: 0.40660736975857686 };
            } else { // if oppvlak > 35.5
              return { label: 3, probability: 0.4696748560771913 };
            }
          } else { // if oppvlak > 113.5
            if (oppvlak <= 138.5) {
              return { label: 3, probability: 0.5862122146822949 };
            } else { // if oppvlak > 138.5
              return { label: 3, probability: 0.6330210772833723 };
            }
          }
        }
      }
    } else { // if bouwjaar > 2009.5
      if (oppvlak <= 22.5) {
        if (oppvlak <= 17.5) {
          if (bouwjaar <= 2014.5) {
            if (bouwjaar <= 2011.5) {
              return { label: 3, probability: 0.9333333333333333 };
            } else { // if bouwjaar > 2011.5
              return { label: 3, probability: 0.5263157894736842 };
            }
          } else { // if bouwjaar > 2014.5
            if (bouwjaar <= 2015.5) {
              return { label: 1, probability: 0.2 };
            } else { // if bouwjaar > 2015.5
              return { label: 3, probability: 0.43209876543209874 };
            }
          }
        } else { // if oppvlak > 17.5
          if (bouwjaar <= 2015.5) {
            if (bouwjaar <= 2013.5) {
              return { label: 4, probability: 0.758485639686684 };
            } else { // if bouwjaar > 2013.5
              return { label: 4, probability: 0.9702020202020202 };
            }
          } else { // if bouwjaar > 2015.5
            if (oppvlak <= 19.0) {
              return { label: 7, probability: 0.9180327868852459 };
            } else { // if oppvlak > 19.0
              return { label: 4, probability: 0.6132404181184669 };
            }
          }
        }
      } else { // if oppvlak > 22.5
        if (bouwjaar <= 2011.5) {
          if (oppvlak <= 27.5) {
            if (oppvlak <= 23.5) {
              return { label: 4, probability: 0.8783783783783784 };
            } else { // if oppvlak > 23.5
              return { label: 4, probability: 0.9528795811518325 };
            }
          } else { // if oppvlak > 27.5
            if (oppvlak <= 106.5) {
              return { label: 3, probability: 0.5762567452428288 };
            } else { // if oppvlak > 106.5
              return { label: 3, probability: 0.6509557721139431 };
            }
          }
        } else { // if bouwjaar > 2011.5
          if (oppvlak <= 36.5) {
            if (bouwjaar <= 2014.5) {
              return { label: 3, probability: 0.5577290076335878 };
            } else { // if bouwjaar > 2014.5
              return { label: 3, probability: 0.5312716362797139 };
            }
          } else { // if oppvlak > 36.5
            if (bouwjaar <= 2014.5) {
              return { label: 3, probability: 0.6681395130205885 };
            } else { // if bouwjaar > 2014.5
              return { label: 3, probability: 0.7199713330148113 };
            }
          }
        }
      }
    }
  }
}
