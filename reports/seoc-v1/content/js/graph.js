/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 20960.0, "minX": 0.0, "maxY": 49972.0, "series": [{"data": [[0.0, 20960.0], [0.1, 20960.0], [0.2, 20960.0], [0.3, 20960.0], [0.4, 20960.0], [0.5, 20960.0], [0.6, 20960.0], [0.7, 20960.0], [0.8, 20960.0], [0.9, 20960.0], [1.0, 20960.0], [1.1, 20960.0], [1.2, 20960.0], [1.3, 20960.0], [1.4, 20960.0], [1.5, 20960.0], [1.6, 20960.0], [1.7, 21331.0], [1.8, 21331.0], [1.9, 21331.0], [2.0, 21331.0], [2.1, 21331.0], [2.2, 21331.0], [2.3, 21331.0], [2.4, 21331.0], [2.5, 21331.0], [2.6, 21331.0], [2.7, 21331.0], [2.8, 21331.0], [2.9, 21331.0], [3.0, 21331.0], [3.1, 21331.0], [3.2, 21331.0], [3.3, 21331.0], [3.4, 22781.0], [3.5, 22781.0], [3.6, 22781.0], [3.7, 22781.0], [3.8, 22781.0], [3.9, 22781.0], [4.0, 22781.0], [4.1, 22781.0], [4.2, 22781.0], [4.3, 22781.0], [4.4, 22781.0], [4.5, 22781.0], [4.6, 22781.0], [4.7, 22781.0], [4.8, 22781.0], [4.9, 22781.0], [5.0, 24902.0], [5.1, 24902.0], [5.2, 24902.0], [5.3, 24902.0], [5.4, 24902.0], [5.5, 24902.0], [5.6, 24902.0], [5.7, 24902.0], [5.8, 24902.0], [5.9, 24902.0], [6.0, 24902.0], [6.1, 24902.0], [6.2, 24902.0], [6.3, 24902.0], [6.4, 24902.0], [6.5, 24902.0], [6.6, 24902.0], [6.7, 29001.0], [6.8, 29001.0], [6.9, 29001.0], [7.0, 29001.0], [7.1, 29001.0], [7.2, 29001.0], [7.3, 29001.0], [7.4, 29001.0], [7.5, 29001.0], [7.6, 29001.0], [7.7, 29001.0], [7.8, 29001.0], [7.9, 29001.0], [8.0, 29001.0], [8.1, 29001.0], [8.2, 29001.0], [8.3, 29001.0], [8.4, 29918.0], [8.5, 29918.0], [8.6, 29918.0], [8.7, 29918.0], [8.8, 29918.0], [8.9, 29918.0], [9.0, 29918.0], [9.1, 29918.0], [9.2, 29918.0], [9.3, 29918.0], [9.4, 29918.0], [9.5, 29918.0], [9.6, 29918.0], [9.7, 29918.0], [9.8, 29918.0], [9.9, 29918.0], [10.0, 31645.0], [10.1, 31645.0], [10.2, 31645.0], [10.3, 31645.0], [10.4, 31645.0], [10.5, 31645.0], [10.6, 31645.0], [10.7, 31645.0], [10.8, 31645.0], [10.9, 31645.0], [11.0, 31645.0], [11.1, 31645.0], [11.2, 31645.0], [11.3, 31645.0], [11.4, 31645.0], [11.5, 31645.0], [11.6, 31645.0], [11.7, 33077.0], [11.8, 33077.0], [11.9, 33077.0], [12.0, 33077.0], [12.1, 33077.0], [12.2, 33077.0], [12.3, 33077.0], [12.4, 33077.0], [12.5, 33077.0], [12.6, 33077.0], [12.7, 33077.0], [12.8, 33077.0], [12.9, 33077.0], [13.0, 33077.0], [13.1, 33077.0], [13.2, 33077.0], [13.3, 33077.0], [13.4, 33975.0], [13.5, 33975.0], [13.6, 33975.0], [13.7, 33975.0], [13.8, 33975.0], [13.9, 33975.0], [14.0, 33975.0], [14.1, 33975.0], [14.2, 33975.0], [14.3, 33975.0], [14.4, 33975.0], [14.5, 33975.0], [14.6, 33975.0], [14.7, 33975.0], [14.8, 33975.0], [14.9, 33975.0], [15.0, 34253.0], [15.1, 34253.0], [15.2, 34253.0], [15.3, 34253.0], [15.4, 34253.0], [15.5, 34253.0], [15.6, 34253.0], [15.7, 34253.0], [15.8, 34253.0], [15.9, 34253.0], [16.0, 34253.0], [16.1, 34253.0], [16.2, 34253.0], [16.3, 34253.0], [16.4, 34253.0], [16.5, 34253.0], [16.6, 34253.0], [16.7, 34301.0], [16.8, 34301.0], [16.9, 34301.0], [17.0, 34301.0], [17.1, 34301.0], [17.2, 34301.0], [17.3, 34301.0], [17.4, 34301.0], [17.5, 34301.0], [17.6, 34301.0], [17.7, 34301.0], [17.8, 34301.0], [17.9, 34301.0], [18.0, 34301.0], [18.1, 34301.0], [18.2, 34301.0], [18.3, 34301.0], [18.4, 34341.0], [18.5, 34341.0], [18.6, 34341.0], [18.7, 34341.0], [18.8, 34341.0], [18.9, 34341.0], [19.0, 34341.0], [19.1, 34341.0], [19.2, 34341.0], [19.3, 34341.0], [19.4, 34341.0], [19.5, 34341.0], [19.6, 34341.0], [19.7, 34341.0], [19.8, 34341.0], [19.9, 34341.0], [20.0, 36684.0], [20.1, 36684.0], [20.2, 36684.0], [20.3, 36684.0], [20.4, 36684.0], [20.5, 36684.0], [20.6, 36684.0], [20.7, 36684.0], [20.8, 36684.0], [20.9, 36684.0], [21.0, 36684.0], [21.1, 36684.0], [21.2, 36684.0], [21.3, 36684.0], [21.4, 36684.0], [21.5, 36684.0], [21.6, 36684.0], [21.7, 37137.0], [21.8, 37137.0], [21.9, 37137.0], [22.0, 37137.0], [22.1, 37137.0], [22.2, 37137.0], [22.3, 37137.0], [22.4, 37137.0], [22.5, 37137.0], [22.6, 37137.0], [22.7, 37137.0], [22.8, 37137.0], [22.9, 37137.0], [23.0, 37137.0], [23.1, 37137.0], [23.2, 37137.0], [23.3, 37137.0], [23.4, 37267.0], [23.5, 37267.0], [23.6, 37267.0], [23.7, 37267.0], [23.8, 37267.0], [23.9, 37267.0], [24.0, 37267.0], [24.1, 37267.0], [24.2, 37267.0], [24.3, 37267.0], [24.4, 37267.0], [24.5, 37267.0], [24.6, 37267.0], [24.7, 37267.0], [24.8, 37267.0], [24.9, 37267.0], [25.0, 37267.0], [25.1, 37832.0], [25.2, 37832.0], [25.3, 37832.0], [25.4, 37832.0], [25.5, 37832.0], [25.6, 37832.0], [25.7, 37832.0], [25.8, 37832.0], [25.9, 37832.0], [26.0, 37832.0], [26.1, 37832.0], [26.2, 37832.0], [26.3, 37832.0], [26.4, 37832.0], [26.5, 37832.0], [26.6, 37832.0], [26.7, 38139.0], [26.8, 38139.0], [26.9, 38139.0], [27.0, 38139.0], [27.1, 38139.0], [27.2, 38139.0], [27.3, 38139.0], [27.4, 38139.0], [27.5, 38139.0], [27.6, 38139.0], [27.7, 38139.0], [27.8, 38139.0], [27.9, 38139.0], [28.0, 38139.0], [28.1, 38139.0], [28.2, 38139.0], [28.3, 38139.0], [28.4, 38689.0], [28.5, 38689.0], [28.6, 38689.0], [28.7, 38689.0], [28.8, 38689.0], [28.9, 38689.0], [29.0, 38689.0], [29.1, 38689.0], [29.2, 38689.0], [29.3, 38689.0], [29.4, 38689.0], [29.5, 38689.0], [29.6, 38689.0], [29.7, 38689.0], [29.8, 38689.0], [29.9, 38689.0], [30.0, 38689.0], [30.1, 38931.0], [30.2, 38931.0], [30.3, 38931.0], [30.4, 38931.0], [30.5, 38931.0], [30.6, 38931.0], [30.7, 38931.0], [30.8, 38931.0], [30.9, 38931.0], [31.0, 38931.0], [31.1, 38931.0], [31.2, 38931.0], [31.3, 38931.0], [31.4, 38931.0], [31.5, 38931.0], [31.6, 38931.0], [31.7, 38978.0], [31.8, 38978.0], [31.9, 38978.0], [32.0, 38978.0], [32.1, 38978.0], [32.2, 38978.0], [32.3, 38978.0], [32.4, 38978.0], [32.5, 38978.0], [32.6, 38978.0], [32.7, 38978.0], [32.8, 38978.0], [32.9, 38978.0], [33.0, 38978.0], [33.1, 38978.0], [33.2, 38978.0], [33.3, 38978.0], [33.4, 39561.0], [33.5, 39561.0], [33.6, 39561.0], [33.7, 39561.0], [33.8, 39561.0], [33.9, 39561.0], [34.0, 39561.0], [34.1, 39561.0], [34.2, 39561.0], [34.3, 39561.0], [34.4, 39561.0], [34.5, 39561.0], [34.6, 39561.0], [34.7, 39561.0], [34.8, 39561.0], [34.9, 39561.0], [35.0, 39561.0], [35.1, 39660.0], [35.2, 39660.0], [35.3, 39660.0], [35.4, 39660.0], [35.5, 39660.0], [35.6, 39660.0], [35.7, 39660.0], [35.8, 39660.0], [35.9, 39660.0], [36.0, 39660.0], [36.1, 39660.0], [36.2, 39660.0], [36.3, 39660.0], [36.4, 39660.0], [36.5, 39660.0], [36.6, 39660.0], [36.7, 39781.0], [36.8, 39781.0], [36.9, 39781.0], [37.0, 39781.0], [37.1, 39781.0], [37.2, 39781.0], [37.3, 39781.0], [37.4, 39781.0], [37.5, 39781.0], [37.6, 39781.0], [37.7, 39781.0], [37.8, 39781.0], [37.9, 39781.0], [38.0, 39781.0], [38.1, 39781.0], [38.2, 39781.0], [38.3, 39781.0], [38.4, 39798.0], [38.5, 39798.0], [38.6, 39798.0], [38.7, 39798.0], [38.8, 39798.0], [38.9, 39798.0], [39.0, 39798.0], [39.1, 39798.0], [39.2, 39798.0], [39.3, 39798.0], [39.4, 39798.0], [39.5, 39798.0], [39.6, 39798.0], [39.7, 39798.0], [39.8, 39798.0], [39.9, 39798.0], [40.0, 39841.0], [40.1, 39841.0], [40.2, 39841.0], [40.3, 39841.0], [40.4, 39841.0], [40.5, 39841.0], [40.6, 39841.0], [40.7, 39841.0], [40.8, 39841.0], [40.9, 39841.0], [41.0, 39841.0], [41.1, 39841.0], [41.2, 39841.0], [41.3, 39841.0], [41.4, 39841.0], [41.5, 39841.0], [41.6, 39841.0], [41.7, 40026.0], [41.8, 40026.0], [41.9, 40026.0], [42.0, 40026.0], [42.1, 40026.0], [42.2, 40026.0], [42.3, 40026.0], [42.4, 40026.0], [42.5, 40026.0], [42.6, 40026.0], [42.7, 40026.0], [42.8, 40026.0], [42.9, 40026.0], [43.0, 40026.0], [43.1, 40026.0], [43.2, 40026.0], [43.3, 40026.0], [43.4, 40198.0], [43.5, 40198.0], [43.6, 40198.0], [43.7, 40198.0], [43.8, 40198.0], [43.9, 40198.0], [44.0, 40198.0], [44.1, 40198.0], [44.2, 40198.0], [44.3, 40198.0], [44.4, 40198.0], [44.5, 40198.0], [44.6, 40198.0], [44.7, 40198.0], [44.8, 40198.0], [44.9, 40198.0], [45.0, 40234.0], [45.1, 40234.0], [45.2, 40234.0], [45.3, 40234.0], [45.4, 40234.0], [45.5, 40234.0], [45.6, 40234.0], [45.7, 40234.0], [45.8, 40234.0], [45.9, 40234.0], [46.0, 40234.0], [46.1, 40234.0], [46.2, 40234.0], [46.3, 40234.0], [46.4, 40234.0], [46.5, 40234.0], [46.6, 40234.0], [46.7, 40375.0], [46.8, 40375.0], [46.9, 40375.0], [47.0, 40375.0], [47.1, 40375.0], [47.2, 40375.0], [47.3, 40375.0], [47.4, 40375.0], [47.5, 40375.0], [47.6, 40375.0], [47.7, 40375.0], [47.8, 40375.0], [47.9, 40375.0], [48.0, 40375.0], [48.1, 40375.0], [48.2, 40375.0], [48.3, 40375.0], [48.4, 40704.0], [48.5, 40704.0], [48.6, 40704.0], [48.7, 40704.0], [48.8, 40704.0], [48.9, 40704.0], [49.0, 40704.0], [49.1, 40704.0], [49.2, 40704.0], [49.3, 40704.0], [49.4, 40704.0], [49.5, 40704.0], [49.6, 40704.0], [49.7, 40704.0], [49.8, 40704.0], [49.9, 40704.0], [50.0, 40990.0], [50.1, 40990.0], [50.2, 40990.0], [50.3, 40990.0], [50.4, 40990.0], [50.5, 40990.0], [50.6, 40990.0], [50.7, 40990.0], [50.8, 40990.0], [50.9, 40990.0], [51.0, 40990.0], [51.1, 40990.0], [51.2, 40990.0], [51.3, 40990.0], [51.4, 40990.0], [51.5, 40990.0], [51.6, 40990.0], [51.7, 41548.0], [51.8, 41548.0], [51.9, 41548.0], [52.0, 41548.0], [52.1, 41548.0], [52.2, 41548.0], [52.3, 41548.0], [52.4, 41548.0], [52.5, 41548.0], [52.6, 41548.0], [52.7, 41548.0], [52.8, 41548.0], [52.9, 41548.0], [53.0, 41548.0], [53.1, 41548.0], [53.2, 41548.0], [53.3, 41548.0], [53.4, 42189.0], [53.5, 42189.0], [53.6, 42189.0], [53.7, 42189.0], [53.8, 42189.0], [53.9, 42189.0], [54.0, 42189.0], [54.1, 42189.0], [54.2, 42189.0], [54.3, 42189.0], [54.4, 42189.0], [54.5, 42189.0], [54.6, 42189.0], [54.7, 42189.0], [54.8, 42189.0], [54.9, 42189.0], [55.0, 42817.0], [55.1, 42817.0], [55.2, 42817.0], [55.3, 42817.0], [55.4, 42817.0], [55.5, 42817.0], [55.6, 42817.0], [55.7, 42817.0], [55.8, 42817.0], [55.9, 42817.0], [56.0, 42817.0], [56.1, 42817.0], [56.2, 42817.0], [56.3, 42817.0], [56.4, 42817.0], [56.5, 42817.0], [56.6, 42817.0], [56.7, 43026.0], [56.8, 43026.0], [56.9, 43026.0], [57.0, 43026.0], [57.1, 43026.0], [57.2, 43026.0], [57.3, 43026.0], [57.4, 43026.0], [57.5, 43026.0], [57.6, 43026.0], [57.7, 43026.0], [57.8, 43026.0], [57.9, 43026.0], [58.0, 43026.0], [58.1, 43026.0], [58.2, 43026.0], [58.3, 43026.0], [58.4, 43280.0], [58.5, 43280.0], [58.6, 43280.0], [58.7, 43280.0], [58.8, 43280.0], [58.9, 43280.0], [59.0, 43280.0], [59.1, 43280.0], [59.2, 43280.0], [59.3, 43280.0], [59.4, 43280.0], [59.5, 43280.0], [59.6, 43280.0], [59.7, 43280.0], [59.8, 43280.0], [59.9, 43280.0], [60.0, 43446.0], [60.1, 43446.0], [60.2, 43446.0], [60.3, 43446.0], [60.4, 43446.0], [60.5, 43446.0], [60.6, 43446.0], [60.7, 43446.0], [60.8, 43446.0], [60.9, 43446.0], [61.0, 43446.0], [61.1, 43446.0], [61.2, 43446.0], [61.3, 43446.0], [61.4, 43446.0], [61.5, 43446.0], [61.6, 43446.0], [61.7, 43498.0], [61.8, 43498.0], [61.9, 43498.0], [62.0, 43498.0], [62.1, 43498.0], [62.2, 43498.0], [62.3, 43498.0], [62.4, 43498.0], [62.5, 43498.0], [62.6, 43498.0], [62.7, 43498.0], [62.8, 43498.0], [62.9, 43498.0], [63.0, 43498.0], [63.1, 43498.0], [63.2, 43498.0], [63.3, 43498.0], [63.4, 43667.0], [63.5, 43667.0], [63.6, 43667.0], [63.7, 43667.0], [63.8, 43667.0], [63.9, 43667.0], [64.0, 43667.0], [64.1, 43667.0], [64.2, 43667.0], [64.3, 43667.0], [64.4, 43667.0], [64.5, 43667.0], [64.6, 43667.0], [64.7, 43667.0], [64.8, 43667.0], [64.9, 43667.0], [65.0, 43777.0], [65.1, 43777.0], [65.2, 43777.0], [65.3, 43777.0], [65.4, 43777.0], [65.5, 43777.0], [65.6, 43777.0], [65.7, 43777.0], [65.8, 43777.0], [65.9, 43777.0], [66.0, 43777.0], [66.1, 43777.0], [66.2, 43777.0], [66.3, 43777.0], [66.4, 43777.0], [66.5, 43777.0], [66.6, 43777.0], [66.7, 43945.0], [66.8, 43945.0], [66.9, 43945.0], [67.0, 43945.0], [67.1, 43945.0], [67.2, 43945.0], [67.3, 43945.0], [67.4, 43945.0], [67.5, 43945.0], [67.6, 43945.0], [67.7, 43945.0], [67.8, 43945.0], [67.9, 43945.0], [68.0, 43945.0], [68.1, 43945.0], [68.2, 43945.0], [68.3, 43945.0], [68.4, 43994.0], [68.5, 43994.0], [68.6, 43994.0], [68.7, 43994.0], [68.8, 43994.0], [68.9, 43994.0], [69.0, 43994.0], [69.1, 43994.0], [69.2, 43994.0], [69.3, 43994.0], [69.4, 43994.0], [69.5, 43994.0], [69.6, 43994.0], [69.7, 43994.0], [69.8, 43994.0], [69.9, 43994.0], [70.0, 44178.0], [70.1, 44178.0], [70.2, 44178.0], [70.3, 44178.0], [70.4, 44178.0], [70.5, 44178.0], [70.6, 44178.0], [70.7, 44178.0], [70.8, 44178.0], [70.9, 44178.0], [71.0, 44178.0], [71.1, 44178.0], [71.2, 44178.0], [71.3, 44178.0], [71.4, 44178.0], [71.5, 44178.0], [71.6, 44178.0], [71.7, 44633.0], [71.8, 44633.0], [71.9, 44633.0], [72.0, 44633.0], [72.1, 44633.0], [72.2, 44633.0], [72.3, 44633.0], [72.4, 44633.0], [72.5, 44633.0], [72.6, 44633.0], [72.7, 44633.0], [72.8, 44633.0], [72.9, 44633.0], [73.0, 44633.0], [73.1, 44633.0], [73.2, 44633.0], [73.3, 44633.0], [73.4, 44973.0], [73.5, 44973.0], [73.6, 44973.0], [73.7, 44973.0], [73.8, 44973.0], [73.9, 44973.0], [74.0, 44973.0], [74.1, 44973.0], [74.2, 44973.0], [74.3, 44973.0], [74.4, 44973.0], [74.5, 44973.0], [74.6, 44973.0], [74.7, 44973.0], [74.8, 44973.0], [74.9, 44973.0], [75.0, 46024.0], [75.1, 46024.0], [75.2, 46024.0], [75.3, 46024.0], [75.4, 46024.0], [75.5, 46024.0], [75.6, 46024.0], [75.7, 46024.0], [75.8, 46024.0], [75.9, 46024.0], [76.0, 46024.0], [76.1, 46024.0], [76.2, 46024.0], [76.3, 46024.0], [76.4, 46024.0], [76.5, 46024.0], [76.6, 46024.0], [76.7, 46155.0], [76.8, 46155.0], [76.9, 46155.0], [77.0, 46155.0], [77.1, 46155.0], [77.2, 46155.0], [77.3, 46155.0], [77.4, 46155.0], [77.5, 46155.0], [77.6, 46155.0], [77.7, 46155.0], [77.8, 46155.0], [77.9, 46155.0], [78.0, 46155.0], [78.1, 46155.0], [78.2, 46155.0], [78.3, 46155.0], [78.4, 46227.0], [78.5, 46227.0], [78.6, 46227.0], [78.7, 46227.0], [78.8, 46227.0], [78.9, 46227.0], [79.0, 46227.0], [79.1, 46227.0], [79.2, 46227.0], [79.3, 46227.0], [79.4, 46227.0], [79.5, 46227.0], [79.6, 46227.0], [79.7, 46227.0], [79.8, 46227.0], [79.9, 46227.0], [80.0, 46227.0], [80.1, 46470.0], [80.2, 46470.0], [80.3, 46470.0], [80.4, 46470.0], [80.5, 46470.0], [80.6, 46470.0], [80.7, 46470.0], [80.8, 46470.0], [80.9, 46470.0], [81.0, 46470.0], [81.1, 46470.0], [81.2, 46470.0], [81.3, 46470.0], [81.4, 46470.0], [81.5, 46470.0], [81.6, 46470.0], [81.7, 46568.0], [81.8, 46568.0], [81.9, 46568.0], [82.0, 46568.0], [82.1, 46568.0], [82.2, 46568.0], [82.3, 46568.0], [82.4, 46568.0], [82.5, 46568.0], [82.6, 46568.0], [82.7, 46568.0], [82.8, 46568.0], [82.9, 46568.0], [83.0, 46568.0], [83.1, 46568.0], [83.2, 46568.0], [83.3, 46568.0], [83.4, 46598.0], [83.5, 46598.0], [83.6, 46598.0], [83.7, 46598.0], [83.8, 46598.0], [83.9, 46598.0], [84.0, 46598.0], [84.1, 46598.0], [84.2, 46598.0], [84.3, 46598.0], [84.4, 46598.0], [84.5, 46598.0], [84.6, 46598.0], [84.7, 46598.0], [84.8, 46598.0], [84.9, 46598.0], [85.0, 46598.0], [85.1, 46648.0], [85.2, 46648.0], [85.3, 46648.0], [85.4, 46648.0], [85.5, 46648.0], [85.6, 46648.0], [85.7, 46648.0], [85.8, 46648.0], [85.9, 46648.0], [86.0, 46648.0], [86.1, 46648.0], [86.2, 46648.0], [86.3, 46648.0], [86.4, 46648.0], [86.5, 46648.0], [86.6, 46648.0], [86.7, 47046.0], [86.8, 47046.0], [86.9, 47046.0], [87.0, 47046.0], [87.1, 47046.0], [87.2, 47046.0], [87.3, 47046.0], [87.4, 47046.0], [87.5, 47046.0], [87.6, 47046.0], [87.7, 47046.0], [87.8, 47046.0], [87.9, 47046.0], [88.0, 47046.0], [88.1, 47046.0], [88.2, 47046.0], [88.3, 47046.0], [88.4, 47304.0], [88.5, 47304.0], [88.6, 47304.0], [88.7, 47304.0], [88.8, 47304.0], [88.9, 47304.0], [89.0, 47304.0], [89.1, 47304.0], [89.2, 47304.0], [89.3, 47304.0], [89.4, 47304.0], [89.5, 47304.0], [89.6, 47304.0], [89.7, 47304.0], [89.8, 47304.0], [89.9, 47304.0], [90.0, 47304.0], [90.1, 47773.0], [90.2, 47773.0], [90.3, 47773.0], [90.4, 47773.0], [90.5, 47773.0], [90.6, 47773.0], [90.7, 47773.0], [90.8, 47773.0], [90.9, 47773.0], [91.0, 47773.0], [91.1, 47773.0], [91.2, 47773.0], [91.3, 47773.0], [91.4, 47773.0], [91.5, 47773.0], [91.6, 47773.0], [91.7, 47964.0], [91.8, 47964.0], [91.9, 47964.0], [92.0, 47964.0], [92.1, 47964.0], [92.2, 47964.0], [92.3, 47964.0], [92.4, 47964.0], [92.5, 47964.0], [92.6, 47964.0], [92.7, 47964.0], [92.8, 47964.0], [92.9, 47964.0], [93.0, 47964.0], [93.1, 47964.0], [93.2, 47964.0], [93.3, 47964.0], [93.4, 48852.0], [93.5, 48852.0], [93.6, 48852.0], [93.7, 48852.0], [93.8, 48852.0], [93.9, 48852.0], [94.0, 48852.0], [94.1, 48852.0], [94.2, 48852.0], [94.3, 48852.0], [94.4, 48852.0], [94.5, 48852.0], [94.6, 48852.0], [94.7, 48852.0], [94.8, 48852.0], [94.9, 48852.0], [95.0, 48852.0], [95.1, 49422.0], [95.2, 49422.0], [95.3, 49422.0], [95.4, 49422.0], [95.5, 49422.0], [95.6, 49422.0], [95.7, 49422.0], [95.8, 49422.0], [95.9, 49422.0], [96.0, 49422.0], [96.1, 49422.0], [96.2, 49422.0], [96.3, 49422.0], [96.4, 49422.0], [96.5, 49422.0], [96.6, 49422.0], [96.7, 49576.0], [96.8, 49576.0], [96.9, 49576.0], [97.0, 49576.0], [97.1, 49576.0], [97.2, 49576.0], [97.3, 49576.0], [97.4, 49576.0], [97.5, 49576.0], [97.6, 49576.0], [97.7, 49576.0], [97.8, 49576.0], [97.9, 49576.0], [98.0, 49576.0], [98.1, 49576.0], [98.2, 49576.0], [98.3, 49576.0], [98.4, 49972.0], [98.5, 49972.0], [98.6, 49972.0], [98.7, 49972.0], [98.8, 49972.0], [98.9, 49972.0], [99.0, 49972.0], [99.1, 49972.0], [99.2, 49972.0], [99.3, 49972.0], [99.4, 49972.0], [99.5, 49972.0], [99.6, 49972.0], [99.7, 49972.0], [99.8, 49972.0], [99.9, 49972.0], [100.0, 49972.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 20900.0, "maxY": 2.0, "series": [{"data": [[20900.0, 1.0], [21300.0, 1.0], [22700.0, 1.0], [24900.0, 1.0], [29000.0, 1.0], [29900.0, 1.0], [31600.0, 1.0], [34200.0, 1.0], [33000.0, 1.0], [33900.0, 1.0], [34300.0, 2.0], [36600.0, 1.0], [37100.0, 1.0], [38900.0, 2.0], [37800.0, 1.0], [38100.0, 1.0], [37200.0, 1.0], [38600.0, 1.0], [40700.0, 1.0], [40100.0, 1.0], [39700.0, 2.0], [40300.0, 1.0], [40200.0, 1.0], [39500.0, 1.0], [39800.0, 1.0], [40900.0, 1.0], [40000.0, 1.0], [39600.0, 1.0], [41500.0, 1.0], [42800.0, 1.0], [42100.0, 1.0], [43000.0, 1.0], [44600.0, 1.0], [44100.0, 1.0], [43900.0, 2.0], [44900.0, 1.0], [43400.0, 2.0], [43200.0, 1.0], [43600.0, 1.0], [43700.0, 1.0], [46100.0, 1.0], [46000.0, 1.0], [46600.0, 1.0], [46500.0, 2.0], [46400.0, 1.0], [47000.0, 1.0], [46200.0, 1.0], [47900.0, 1.0], [47300.0, 1.0], [47700.0, 1.0], [48800.0, 1.0], [49900.0, 1.0], [49500.0, 1.0], [49400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 49900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 60.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 60.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 60.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 7.5, "minX": 1.60873986E12, "maxY": 20.0, "series": [{"data": [[1.60873986E12, 20.0], [1.60873992E12, 19.230769230769234], [1.60873998E12, 7.5]], "isOverall": false, "label": "SEOC_V1 Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60873998E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 29001.0, "minX": 1.0, "maxY": 44200.0, "series": [{"data": [[8.0, 39660.0], [2.0, 43026.0], [9.0, 40990.0], [10.0, 39841.0], [11.0, 39561.0], [12.0, 34341.0], [3.0, 43446.0], [13.0, 34301.0], [14.0, 31645.0], [15.0, 29001.0], [16.0, 33975.0], [4.0, 36684.0], [1.0, 38689.0], [17.0, 44200.0], [18.0, 41326.5], [19.0, 37832.0], [20.0, 41215.46153846153], [5.0, 40026.0], [6.0, 37267.0], [7.0, 38139.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[16.750000000000007, 40281.33333333332]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 37.8, "minX": 1.60873986E12, "maxY": 4438792.45, "series": [{"data": [[1.60873986E12, 3414456.0], [1.60873992E12, 4438792.45], [1.60873998E12, 2390119.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60873986E12, 54.0], [1.60873992E12, 70.2], [1.60873998E12, 37.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60873998E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 37969.84615384615, "minX": 1.60873986E12, "maxY": 44602.40000000001, "series": [{"data": [[1.60873986E12, 44602.40000000001], [1.60873992E12, 37969.84615384615], [1.60873998E12, 38401.142857142855]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60873998E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 34259.76923076923, "minX": 1.60873986E12, "maxY": 38413.3, "series": [{"data": [[1.60873986E12, 38413.3], [1.60873992E12, 34259.76923076923], [1.60873998E12, 35294.78571428572]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60873998E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 58.92307692307693, "minX": 1.60873986E12, "maxY": 1491.5499999999997, "series": [{"data": [[1.60873986E12, 1491.5499999999997], [1.60873992E12, 58.92307692307693], [1.60873998E12, 275.3571428571429]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60873998E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 20960.0, "minX": 1.60873986E12, "maxY": 49972.0, "series": [{"data": [[1.60873986E12, 49972.0], [1.60873992E12, 49576.0], [1.60873998E12, 43446.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60873986E12, 48763.200000000004], [1.60873992E12, 47758.8], [1.60873998E12, 43236.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60873986E12, 49972.0], [1.60873992E12, 49576.0], [1.60873998E12, 43446.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60873986E12, 49916.0], [1.60873992E12, 49522.1], [1.60873998E12, 43446.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60873986E12, 37137.0], [1.60873992E12, 20960.0], [1.60873998E12, 31645.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60873986E12, 45498.5], [1.60873992E12, 40216.0], [1.60873998E12, 39125.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60873998E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 38689.0, "minX": 1.0, "maxY": 44973.0, "series": [{"data": [[1.0, 38689.0], [2.0, 43153.0], [5.0, 44973.0], [3.0, 42244.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 34459.0, "minX": 1.0, "maxY": 38888.0, "series": [{"data": [[1.0, 34459.0], [2.0, 38330.5], [5.0, 38888.0], [3.0, 38173.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.60873986E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.60873986E12, 0.6666666666666666], [1.60873992E12, 0.3333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60873992E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60873986E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.60873986E12, 0.3333333333333333], [1.60873992E12, 0.43333333333333335], [1.60873998E12, 0.23333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60873998E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60873986E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.60873986E12, 0.3333333333333333], [1.60873992E12, 0.43333333333333335], [1.60873998E12, 0.23333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60873998E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.23333333333333334, "minX": 1.60873986E12, "maxY": 0.43333333333333335, "series": [{"data": [[1.60873986E12, 0.3333333333333333], [1.60873992E12, 0.43333333333333335], [1.60873998E12, 0.23333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60873998E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

