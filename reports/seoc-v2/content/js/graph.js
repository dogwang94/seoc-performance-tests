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
        data: {"result": {"minY": 9845.0, "minX": 0.0, "maxY": 21472.0, "series": [{"data": [[0.0, 9845.0], [0.1, 9845.0], [0.2, 9845.0], [0.3, 9845.0], [0.4, 9845.0], [0.5, 9845.0], [0.6, 9845.0], [0.7, 9845.0], [0.8, 9845.0], [0.9, 9845.0], [1.0, 9845.0], [1.1, 9845.0], [1.2, 9845.0], [1.3, 9845.0], [1.4, 9845.0], [1.5, 9845.0], [1.6, 9845.0], [1.7, 10408.0], [1.8, 10408.0], [1.9, 10408.0], [2.0, 10408.0], [2.1, 10408.0], [2.2, 10408.0], [2.3, 10408.0], [2.4, 10408.0], [2.5, 10408.0], [2.6, 10408.0], [2.7, 10408.0], [2.8, 10408.0], [2.9, 10408.0], [3.0, 10408.0], [3.1, 10408.0], [3.2, 10408.0], [3.3, 10408.0], [3.4, 10606.0], [3.5, 10606.0], [3.6, 10606.0], [3.7, 10606.0], [3.8, 10606.0], [3.9, 10606.0], [4.0, 10606.0], [4.1, 10606.0], [4.2, 10606.0], [4.3, 10606.0], [4.4, 10606.0], [4.5, 10606.0], [4.6, 10606.0], [4.7, 10606.0], [4.8, 10606.0], [4.9, 10606.0], [5.0, 10609.0], [5.1, 10609.0], [5.2, 10609.0], [5.3, 10609.0], [5.4, 10609.0], [5.5, 10609.0], [5.6, 10609.0], [5.7, 10609.0], [5.8, 10609.0], [5.9, 10609.0], [6.0, 10609.0], [6.1, 10609.0], [6.2, 10609.0], [6.3, 10609.0], [6.4, 10609.0], [6.5, 10609.0], [6.6, 10609.0], [6.7, 10833.0], [6.8, 10833.0], [6.9, 10833.0], [7.0, 10833.0], [7.1, 10833.0], [7.2, 10833.0], [7.3, 10833.0], [7.4, 10833.0], [7.5, 10833.0], [7.6, 10833.0], [7.7, 10833.0], [7.8, 10833.0], [7.9, 10833.0], [8.0, 10833.0], [8.1, 10833.0], [8.2, 10833.0], [8.3, 10833.0], [8.4, 11772.0], [8.5, 11772.0], [8.6, 11772.0], [8.7, 11772.0], [8.8, 11772.0], [8.9, 11772.0], [9.0, 11772.0], [9.1, 11772.0], [9.2, 11772.0], [9.3, 11772.0], [9.4, 11772.0], [9.5, 11772.0], [9.6, 11772.0], [9.7, 11772.0], [9.8, 11772.0], [9.9, 11772.0], [10.0, 11906.0], [10.1, 11906.0], [10.2, 11906.0], [10.3, 11906.0], [10.4, 11906.0], [10.5, 11906.0], [10.6, 11906.0], [10.7, 11906.0], [10.8, 11906.0], [10.9, 11906.0], [11.0, 11906.0], [11.1, 11906.0], [11.2, 11906.0], [11.3, 11906.0], [11.4, 11906.0], [11.5, 11906.0], [11.6, 11906.0], [11.7, 11966.0], [11.8, 11966.0], [11.9, 11966.0], [12.0, 11966.0], [12.1, 11966.0], [12.2, 11966.0], [12.3, 11966.0], [12.4, 11966.0], [12.5, 11966.0], [12.6, 11966.0], [12.7, 11966.0], [12.8, 11966.0], [12.9, 11966.0], [13.0, 11966.0], [13.1, 11966.0], [13.2, 11966.0], [13.3, 11966.0], [13.4, 11973.0], [13.5, 11973.0], [13.6, 11973.0], [13.7, 11973.0], [13.8, 11973.0], [13.9, 11973.0], [14.0, 11973.0], [14.1, 11973.0], [14.2, 11973.0], [14.3, 11973.0], [14.4, 11973.0], [14.5, 11973.0], [14.6, 11973.0], [14.7, 11973.0], [14.8, 11973.0], [14.9, 11973.0], [15.0, 12137.0], [15.1, 12137.0], [15.2, 12137.0], [15.3, 12137.0], [15.4, 12137.0], [15.5, 12137.0], [15.6, 12137.0], [15.7, 12137.0], [15.8, 12137.0], [15.9, 12137.0], [16.0, 12137.0], [16.1, 12137.0], [16.2, 12137.0], [16.3, 12137.0], [16.4, 12137.0], [16.5, 12137.0], [16.6, 12137.0], [16.7, 12145.0], [16.8, 12145.0], [16.9, 12145.0], [17.0, 12145.0], [17.1, 12145.0], [17.2, 12145.0], [17.3, 12145.0], [17.4, 12145.0], [17.5, 12145.0], [17.6, 12145.0], [17.7, 12145.0], [17.8, 12145.0], [17.9, 12145.0], [18.0, 12145.0], [18.1, 12145.0], [18.2, 12145.0], [18.3, 12145.0], [18.4, 12279.0], [18.5, 12279.0], [18.6, 12279.0], [18.7, 12279.0], [18.8, 12279.0], [18.9, 12279.0], [19.0, 12279.0], [19.1, 12279.0], [19.2, 12279.0], [19.3, 12279.0], [19.4, 12279.0], [19.5, 12279.0], [19.6, 12279.0], [19.7, 12279.0], [19.8, 12279.0], [19.9, 12279.0], [20.0, 12319.0], [20.1, 12319.0], [20.2, 12319.0], [20.3, 12319.0], [20.4, 12319.0], [20.5, 12319.0], [20.6, 12319.0], [20.7, 12319.0], [20.8, 12319.0], [20.9, 12319.0], [21.0, 12319.0], [21.1, 12319.0], [21.2, 12319.0], [21.3, 12319.0], [21.4, 12319.0], [21.5, 12319.0], [21.6, 12319.0], [21.7, 13152.0], [21.8, 13152.0], [21.9, 13152.0], [22.0, 13152.0], [22.1, 13152.0], [22.2, 13152.0], [22.3, 13152.0], [22.4, 13152.0], [22.5, 13152.0], [22.6, 13152.0], [22.7, 13152.0], [22.8, 13152.0], [22.9, 13152.0], [23.0, 13152.0], [23.1, 13152.0], [23.2, 13152.0], [23.3, 13152.0], [23.4, 13509.0], [23.5, 13509.0], [23.6, 13509.0], [23.7, 13509.0], [23.8, 13509.0], [23.9, 13509.0], [24.0, 13509.0], [24.1, 13509.0], [24.2, 13509.0], [24.3, 13509.0], [24.4, 13509.0], [24.5, 13509.0], [24.6, 13509.0], [24.7, 13509.0], [24.8, 13509.0], [24.9, 13509.0], [25.0, 13509.0], [25.1, 13690.0], [25.2, 13690.0], [25.3, 13690.0], [25.4, 13690.0], [25.5, 13690.0], [25.6, 13690.0], [25.7, 13690.0], [25.8, 13690.0], [25.9, 13690.0], [26.0, 13690.0], [26.1, 13690.0], [26.2, 13690.0], [26.3, 13690.0], [26.4, 13690.0], [26.5, 13690.0], [26.6, 13690.0], [26.7, 13808.0], [26.8, 13808.0], [26.9, 13808.0], [27.0, 13808.0], [27.1, 13808.0], [27.2, 13808.0], [27.3, 13808.0], [27.4, 13808.0], [27.5, 13808.0], [27.6, 13808.0], [27.7, 13808.0], [27.8, 13808.0], [27.9, 13808.0], [28.0, 13808.0], [28.1, 13808.0], [28.2, 13808.0], [28.3, 13808.0], [28.4, 13900.0], [28.5, 13900.0], [28.6, 13900.0], [28.7, 13900.0], [28.8, 13900.0], [28.9, 13900.0], [29.0, 13900.0], [29.1, 13900.0], [29.2, 13900.0], [29.3, 13900.0], [29.4, 13900.0], [29.5, 13900.0], [29.6, 13900.0], [29.7, 13900.0], [29.8, 13900.0], [29.9, 13900.0], [30.0, 13900.0], [30.1, 13943.0], [30.2, 13943.0], [30.3, 13943.0], [30.4, 13943.0], [30.5, 13943.0], [30.6, 13943.0], [30.7, 13943.0], [30.8, 13943.0], [30.9, 13943.0], [31.0, 13943.0], [31.1, 13943.0], [31.2, 13943.0], [31.3, 13943.0], [31.4, 13943.0], [31.5, 13943.0], [31.6, 13943.0], [31.7, 14184.0], [31.8, 14184.0], [31.9, 14184.0], [32.0, 14184.0], [32.1, 14184.0], [32.2, 14184.0], [32.3, 14184.0], [32.4, 14184.0], [32.5, 14184.0], [32.6, 14184.0], [32.7, 14184.0], [32.8, 14184.0], [32.9, 14184.0], [33.0, 14184.0], [33.1, 14184.0], [33.2, 14184.0], [33.3, 14184.0], [33.4, 14227.0], [33.5, 14227.0], [33.6, 14227.0], [33.7, 14227.0], [33.8, 14227.0], [33.9, 14227.0], [34.0, 14227.0], [34.1, 14227.0], [34.2, 14227.0], [34.3, 14227.0], [34.4, 14227.0], [34.5, 14227.0], [34.6, 14227.0], [34.7, 14227.0], [34.8, 14227.0], [34.9, 14227.0], [35.0, 14227.0], [35.1, 14306.0], [35.2, 14306.0], [35.3, 14306.0], [35.4, 14306.0], [35.5, 14306.0], [35.6, 14306.0], [35.7, 14306.0], [35.8, 14306.0], [35.9, 14306.0], [36.0, 14306.0], [36.1, 14306.0], [36.2, 14306.0], [36.3, 14306.0], [36.4, 14306.0], [36.5, 14306.0], [36.6, 14306.0], [36.7, 14346.0], [36.8, 14346.0], [36.9, 14346.0], [37.0, 14346.0], [37.1, 14346.0], [37.2, 14346.0], [37.3, 14346.0], [37.4, 14346.0], [37.5, 14346.0], [37.6, 14346.0], [37.7, 14346.0], [37.8, 14346.0], [37.9, 14346.0], [38.0, 14346.0], [38.1, 14346.0], [38.2, 14346.0], [38.3, 14346.0], [38.4, 14603.0], [38.5, 14603.0], [38.6, 14603.0], [38.7, 14603.0], [38.8, 14603.0], [38.9, 14603.0], [39.0, 14603.0], [39.1, 14603.0], [39.2, 14603.0], [39.3, 14603.0], [39.4, 14603.0], [39.5, 14603.0], [39.6, 14603.0], [39.7, 14603.0], [39.8, 14603.0], [39.9, 14603.0], [40.0, 14635.0], [40.1, 14635.0], [40.2, 14635.0], [40.3, 14635.0], [40.4, 14635.0], [40.5, 14635.0], [40.6, 14635.0], [40.7, 14635.0], [40.8, 14635.0], [40.9, 14635.0], [41.0, 14635.0], [41.1, 14635.0], [41.2, 14635.0], [41.3, 14635.0], [41.4, 14635.0], [41.5, 14635.0], [41.6, 14635.0], [41.7, 14690.0], [41.8, 14690.0], [41.9, 14690.0], [42.0, 14690.0], [42.1, 14690.0], [42.2, 14690.0], [42.3, 14690.0], [42.4, 14690.0], [42.5, 14690.0], [42.6, 14690.0], [42.7, 14690.0], [42.8, 14690.0], [42.9, 14690.0], [43.0, 14690.0], [43.1, 14690.0], [43.2, 14690.0], [43.3, 14690.0], [43.4, 16124.0], [43.5, 16124.0], [43.6, 16124.0], [43.7, 16124.0], [43.8, 16124.0], [43.9, 16124.0], [44.0, 16124.0], [44.1, 16124.0], [44.2, 16124.0], [44.3, 16124.0], [44.4, 16124.0], [44.5, 16124.0], [44.6, 16124.0], [44.7, 16124.0], [44.8, 16124.0], [44.9, 16124.0], [45.0, 16500.0], [45.1, 16500.0], [45.2, 16500.0], [45.3, 16500.0], [45.4, 16500.0], [45.5, 16500.0], [45.6, 16500.0], [45.7, 16500.0], [45.8, 16500.0], [45.9, 16500.0], [46.0, 16500.0], [46.1, 16500.0], [46.2, 16500.0], [46.3, 16500.0], [46.4, 16500.0], [46.5, 16500.0], [46.6, 16500.0], [46.7, 16524.0], [46.8, 16524.0], [46.9, 16524.0], [47.0, 16524.0], [47.1, 16524.0], [47.2, 16524.0], [47.3, 16524.0], [47.4, 16524.0], [47.5, 16524.0], [47.6, 16524.0], [47.7, 16524.0], [47.8, 16524.0], [47.9, 16524.0], [48.0, 16524.0], [48.1, 16524.0], [48.2, 16524.0], [48.3, 16524.0], [48.4, 16664.0], [48.5, 16664.0], [48.6, 16664.0], [48.7, 16664.0], [48.8, 16664.0], [48.9, 16664.0], [49.0, 16664.0], [49.1, 16664.0], [49.2, 16664.0], [49.3, 16664.0], [49.4, 16664.0], [49.5, 16664.0], [49.6, 16664.0], [49.7, 16664.0], [49.8, 16664.0], [49.9, 16664.0], [50.0, 16756.0], [50.1, 16756.0], [50.2, 16756.0], [50.3, 16756.0], [50.4, 16756.0], [50.5, 16756.0], [50.6, 16756.0], [50.7, 16756.0], [50.8, 16756.0], [50.9, 16756.0], [51.0, 16756.0], [51.1, 16756.0], [51.2, 16756.0], [51.3, 16756.0], [51.4, 16756.0], [51.5, 16756.0], [51.6, 16756.0], [51.7, 16953.0], [51.8, 16953.0], [51.9, 16953.0], [52.0, 16953.0], [52.1, 16953.0], [52.2, 16953.0], [52.3, 16953.0], [52.4, 16953.0], [52.5, 16953.0], [52.6, 16953.0], [52.7, 16953.0], [52.8, 16953.0], [52.9, 16953.0], [53.0, 16953.0], [53.1, 16953.0], [53.2, 16953.0], [53.3, 16953.0], [53.4, 17100.0], [53.5, 17100.0], [53.6, 17100.0], [53.7, 17100.0], [53.8, 17100.0], [53.9, 17100.0], [54.0, 17100.0], [54.1, 17100.0], [54.2, 17100.0], [54.3, 17100.0], [54.4, 17100.0], [54.5, 17100.0], [54.6, 17100.0], [54.7, 17100.0], [54.8, 17100.0], [54.9, 17100.0], [55.0, 17110.0], [55.1, 17110.0], [55.2, 17110.0], [55.3, 17110.0], [55.4, 17110.0], [55.5, 17110.0], [55.6, 17110.0], [55.7, 17110.0], [55.8, 17110.0], [55.9, 17110.0], [56.0, 17110.0], [56.1, 17110.0], [56.2, 17110.0], [56.3, 17110.0], [56.4, 17110.0], [56.5, 17110.0], [56.6, 17110.0], [56.7, 17253.0], [56.8, 17253.0], [56.9, 17253.0], [57.0, 17253.0], [57.1, 17253.0], [57.2, 17253.0], [57.3, 17253.0], [57.4, 17253.0], [57.5, 17253.0], [57.6, 17253.0], [57.7, 17253.0], [57.8, 17253.0], [57.9, 17253.0], [58.0, 17253.0], [58.1, 17253.0], [58.2, 17253.0], [58.3, 17253.0], [58.4, 17356.0], [58.5, 17356.0], [58.6, 17356.0], [58.7, 17356.0], [58.8, 17356.0], [58.9, 17356.0], [59.0, 17356.0], [59.1, 17356.0], [59.2, 17356.0], [59.3, 17356.0], [59.4, 17356.0], [59.5, 17356.0], [59.6, 17356.0], [59.7, 17356.0], [59.8, 17356.0], [59.9, 17356.0], [60.0, 17499.0], [60.1, 17499.0], [60.2, 17499.0], [60.3, 17499.0], [60.4, 17499.0], [60.5, 17499.0], [60.6, 17499.0], [60.7, 17499.0], [60.8, 17499.0], [60.9, 17499.0], [61.0, 17499.0], [61.1, 17499.0], [61.2, 17499.0], [61.3, 17499.0], [61.4, 17499.0], [61.5, 17499.0], [61.6, 17499.0], [61.7, 17697.0], [61.8, 17697.0], [61.9, 17697.0], [62.0, 17697.0], [62.1, 17697.0], [62.2, 17697.0], [62.3, 17697.0], [62.4, 17697.0], [62.5, 17697.0], [62.6, 17697.0], [62.7, 17697.0], [62.8, 17697.0], [62.9, 17697.0], [63.0, 17697.0], [63.1, 17697.0], [63.2, 17697.0], [63.3, 17697.0], [63.4, 17865.0], [63.5, 17865.0], [63.6, 17865.0], [63.7, 17865.0], [63.8, 17865.0], [63.9, 17865.0], [64.0, 17865.0], [64.1, 17865.0], [64.2, 17865.0], [64.3, 17865.0], [64.4, 17865.0], [64.5, 17865.0], [64.6, 17865.0], [64.7, 17865.0], [64.8, 17865.0], [64.9, 17865.0], [65.0, 17967.0], [65.1, 17967.0], [65.2, 17967.0], [65.3, 17967.0], [65.4, 17967.0], [65.5, 17967.0], [65.6, 17967.0], [65.7, 17967.0], [65.8, 17967.0], [65.9, 17967.0], [66.0, 17967.0], [66.1, 17967.0], [66.2, 17967.0], [66.3, 17967.0], [66.4, 17967.0], [66.5, 17967.0], [66.6, 17967.0], [66.7, 18041.0], [66.8, 18041.0], [66.9, 18041.0], [67.0, 18041.0], [67.1, 18041.0], [67.2, 18041.0], [67.3, 18041.0], [67.4, 18041.0], [67.5, 18041.0], [67.6, 18041.0], [67.7, 18041.0], [67.8, 18041.0], [67.9, 18041.0], [68.0, 18041.0], [68.1, 18041.0], [68.2, 18041.0], [68.3, 18041.0], [68.4, 18141.0], [68.5, 18141.0], [68.6, 18141.0], [68.7, 18141.0], [68.8, 18141.0], [68.9, 18141.0], [69.0, 18141.0], [69.1, 18141.0], [69.2, 18141.0], [69.3, 18141.0], [69.4, 18141.0], [69.5, 18141.0], [69.6, 18141.0], [69.7, 18141.0], [69.8, 18141.0], [69.9, 18141.0], [70.0, 18292.0], [70.1, 18292.0], [70.2, 18292.0], [70.3, 18292.0], [70.4, 18292.0], [70.5, 18292.0], [70.6, 18292.0], [70.7, 18292.0], [70.8, 18292.0], [70.9, 18292.0], [71.0, 18292.0], [71.1, 18292.0], [71.2, 18292.0], [71.3, 18292.0], [71.4, 18292.0], [71.5, 18292.0], [71.6, 18292.0], [71.7, 18434.0], [71.8, 18434.0], [71.9, 18434.0], [72.0, 18434.0], [72.1, 18434.0], [72.2, 18434.0], [72.3, 18434.0], [72.4, 18434.0], [72.5, 18434.0], [72.6, 18434.0], [72.7, 18434.0], [72.8, 18434.0], [72.9, 18434.0], [73.0, 18434.0], [73.1, 18434.0], [73.2, 18434.0], [73.3, 18434.0], [73.4, 18448.0], [73.5, 18448.0], [73.6, 18448.0], [73.7, 18448.0], [73.8, 18448.0], [73.9, 18448.0], [74.0, 18448.0], [74.1, 18448.0], [74.2, 18448.0], [74.3, 18448.0], [74.4, 18448.0], [74.5, 18448.0], [74.6, 18448.0], [74.7, 18448.0], [74.8, 18448.0], [74.9, 18448.0], [75.0, 18550.0], [75.1, 18550.0], [75.2, 18550.0], [75.3, 18550.0], [75.4, 18550.0], [75.5, 18550.0], [75.6, 18550.0], [75.7, 18550.0], [75.8, 18550.0], [75.9, 18550.0], [76.0, 18550.0], [76.1, 18550.0], [76.2, 18550.0], [76.3, 18550.0], [76.4, 18550.0], [76.5, 18550.0], [76.6, 18550.0], [76.7, 18556.0], [76.8, 18556.0], [76.9, 18556.0], [77.0, 18556.0], [77.1, 18556.0], [77.2, 18556.0], [77.3, 18556.0], [77.4, 18556.0], [77.5, 18556.0], [77.6, 18556.0], [77.7, 18556.0], [77.8, 18556.0], [77.9, 18556.0], [78.0, 18556.0], [78.1, 18556.0], [78.2, 18556.0], [78.3, 18556.0], [78.4, 18656.0], [78.5, 18656.0], [78.6, 18656.0], [78.7, 18656.0], [78.8, 18656.0], [78.9, 18656.0], [79.0, 18656.0], [79.1, 18656.0], [79.2, 18656.0], [79.3, 18656.0], [79.4, 18656.0], [79.5, 18656.0], [79.6, 18656.0], [79.7, 18656.0], [79.8, 18656.0], [79.9, 18656.0], [80.0, 18656.0], [80.1, 18786.0], [80.2, 18786.0], [80.3, 18786.0], [80.4, 18786.0], [80.5, 18786.0], [80.6, 18786.0], [80.7, 18786.0], [80.8, 18786.0], [80.9, 18786.0], [81.0, 18786.0], [81.1, 18786.0], [81.2, 18786.0], [81.3, 18786.0], [81.4, 18786.0], [81.5, 18786.0], [81.6, 18786.0], [81.7, 19094.0], [81.8, 19094.0], [81.9, 19094.0], [82.0, 19094.0], [82.1, 19094.0], [82.2, 19094.0], [82.3, 19094.0], [82.4, 19094.0], [82.5, 19094.0], [82.6, 19094.0], [82.7, 19094.0], [82.8, 19094.0], [82.9, 19094.0], [83.0, 19094.0], [83.1, 19094.0], [83.2, 19094.0], [83.3, 19094.0], [83.4, 19163.0], [83.5, 19163.0], [83.6, 19163.0], [83.7, 19163.0], [83.8, 19163.0], [83.9, 19163.0], [84.0, 19163.0], [84.1, 19163.0], [84.2, 19163.0], [84.3, 19163.0], [84.4, 19163.0], [84.5, 19163.0], [84.6, 19163.0], [84.7, 19163.0], [84.8, 19163.0], [84.9, 19163.0], [85.0, 19163.0], [85.1, 19214.0], [85.2, 19214.0], [85.3, 19214.0], [85.4, 19214.0], [85.5, 19214.0], [85.6, 19214.0], [85.7, 19214.0], [85.8, 19214.0], [85.9, 19214.0], [86.0, 19214.0], [86.1, 19214.0], [86.2, 19214.0], [86.3, 19214.0], [86.4, 19214.0], [86.5, 19214.0], [86.6, 19214.0], [86.7, 19234.0], [86.8, 19234.0], [86.9, 19234.0], [87.0, 19234.0], [87.1, 19234.0], [87.2, 19234.0], [87.3, 19234.0], [87.4, 19234.0], [87.5, 19234.0], [87.6, 19234.0], [87.7, 19234.0], [87.8, 19234.0], [87.9, 19234.0], [88.0, 19234.0], [88.1, 19234.0], [88.2, 19234.0], [88.3, 19234.0], [88.4, 19327.0], [88.5, 19327.0], [88.6, 19327.0], [88.7, 19327.0], [88.8, 19327.0], [88.9, 19327.0], [89.0, 19327.0], [89.1, 19327.0], [89.2, 19327.0], [89.3, 19327.0], [89.4, 19327.0], [89.5, 19327.0], [89.6, 19327.0], [89.7, 19327.0], [89.8, 19327.0], [89.9, 19327.0], [90.0, 19327.0], [90.1, 19470.0], [90.2, 19470.0], [90.3, 19470.0], [90.4, 19470.0], [90.5, 19470.0], [90.6, 19470.0], [90.7, 19470.0], [90.8, 19470.0], [90.9, 19470.0], [91.0, 19470.0], [91.1, 19470.0], [91.2, 19470.0], [91.3, 19470.0], [91.4, 19470.0], [91.5, 19470.0], [91.6, 19470.0], [91.7, 19700.0], [91.8, 19700.0], [91.9, 19700.0], [92.0, 19700.0], [92.1, 19700.0], [92.2, 19700.0], [92.3, 19700.0], [92.4, 19700.0], [92.5, 19700.0], [92.6, 19700.0], [92.7, 19700.0], [92.8, 19700.0], [92.9, 19700.0], [93.0, 19700.0], [93.1, 19700.0], [93.2, 19700.0], [93.3, 19700.0], [93.4, 19747.0], [93.5, 19747.0], [93.6, 19747.0], [93.7, 19747.0], [93.8, 19747.0], [93.9, 19747.0], [94.0, 19747.0], [94.1, 19747.0], [94.2, 19747.0], [94.3, 19747.0], [94.4, 19747.0], [94.5, 19747.0], [94.6, 19747.0], [94.7, 19747.0], [94.8, 19747.0], [94.9, 19747.0], [95.0, 19747.0], [95.1, 19762.0], [95.2, 19762.0], [95.3, 19762.0], [95.4, 19762.0], [95.5, 19762.0], [95.6, 19762.0], [95.7, 19762.0], [95.8, 19762.0], [95.9, 19762.0], [96.0, 19762.0], [96.1, 19762.0], [96.2, 19762.0], [96.3, 19762.0], [96.4, 19762.0], [96.5, 19762.0], [96.6, 19762.0], [96.7, 20005.0], [96.8, 20005.0], [96.9, 20005.0], [97.0, 20005.0], [97.1, 20005.0], [97.2, 20005.0], [97.3, 20005.0], [97.4, 20005.0], [97.5, 20005.0], [97.6, 20005.0], [97.7, 20005.0], [97.8, 20005.0], [97.9, 20005.0], [98.0, 20005.0], [98.1, 20005.0], [98.2, 20005.0], [98.3, 20005.0], [98.4, 21472.0], [98.5, 21472.0], [98.6, 21472.0], [98.7, 21472.0], [98.8, 21472.0], [98.9, 21472.0], [99.0, 21472.0], [99.1, 21472.0], [99.2, 21472.0], [99.3, 21472.0], [99.4, 21472.0], [99.5, 21472.0], [99.6, 21472.0], [99.7, 21472.0], [99.8, 21472.0], [99.9, 21472.0], [100.0, 21472.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 9800.0, "maxY": 3.0, "series": [{"data": [[9800.0, 1.0], [10600.0, 2.0], [10400.0, 1.0], [10800.0, 1.0], [11700.0, 1.0], [12200.0, 1.0], [12100.0, 2.0], [11900.0, 3.0], [12300.0, 1.0], [13100.0, 1.0], [13800.0, 1.0], [13600.0, 1.0], [13500.0, 1.0], [13900.0, 2.0], [14300.0, 2.0], [14100.0, 1.0], [14200.0, 1.0], [14600.0, 3.0], [16100.0, 1.0], [16600.0, 1.0], [17100.0, 2.0], [17300.0, 1.0], [16500.0, 2.0], [16900.0, 1.0], [16700.0, 1.0], [17400.0, 1.0], [17200.0, 1.0], [17900.0, 1.0], [18200.0, 1.0], [17600.0, 1.0], [18100.0, 1.0], [17800.0, 1.0], [18400.0, 2.0], [18000.0, 1.0], [18500.0, 2.0], [19100.0, 1.0], [19200.0, 2.0], [18700.0, 1.0], [19000.0, 1.0], [19400.0, 1.0], [18600.0, 1.0], [19300.0, 1.0], [19700.0, 3.0], [20000.0, 1.0], [21400.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 21400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 16.783333333333335, "minX": 1.60874046E12, "maxY": 16.783333333333335, "series": [{"data": [[1.60874046E12, 16.783333333333335]], "isOverall": false, "label": "SEOC_V2 Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60874046E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 10408.0, "minX": 1.0, "maxY": 17371.774999999994, "series": [{"data": [[8.0, 13690.0], [2.0, 14346.0], [9.0, 11906.0], [10.0, 11966.0], [11.0, 11973.0], [12.0, 12145.0], [3.0, 13509.0], [13.0, 12319.0], [14.0, 12137.0], [15.0, 10609.0], [16.0, 10408.0], [4.0, 13943.0], [1.0, 13152.0], [17.0, 13549.0], [18.0, 14690.0], [19.0, 11772.0], [20.0, 17371.774999999994], [5.0, 14227.0], [6.0, 14184.0], [7.0, 14306.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[16.783333333333335, 15887.516666666661]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 20.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 162.0, "minX": 1.60874046E12, "maxY": 3734406.3333333335, "series": [{"data": [[1.60874046E12, 3734406.3333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60874046E12, 162.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60874046E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 15887.516666666661, "minX": 1.60874046E12, "maxY": 15887.516666666661, "series": [{"data": [[1.60874046E12, 15887.516666666661]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60874046E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 13679.31666666666, "minX": 1.60874046E12, "maxY": 13679.31666666666, "series": [{"data": [[1.60874046E12, 13679.31666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60874046E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 468.1166666666666, "minX": 1.60874046E12, "maxY": 468.1166666666666, "series": [{"data": [[1.60874046E12, 468.1166666666666]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60874046E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 9845.0, "minX": 1.60874046E12, "maxY": 21472.0, "series": [{"data": [[1.60874046E12, 21472.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60874046E12, 19455.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60874046E12, 21472.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60874046E12, 19761.25]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60874046E12, 9845.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60874046E12, 16710.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60874046E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 11969.5, "minX": 1.0, "maxY": 19470.0, "series": [{"data": [[2.0, 11969.5], [1.0, 14490.5], [4.0, 17105.0], [5.0, 19470.0], [6.0, 17409.0], [3.0, 14063.5], [7.0, 19163.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 10691.5, "minX": 1.0, "maxY": 16325.0, "series": [{"data": [[2.0, 10691.5], [1.0, 11890.5], [4.0, 15150.5], [5.0, 16257.0], [6.0, 15539.5], [3.0, 12389.0], [7.0, 16325.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 7.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 0.3333333333333333, "minX": 1.6087404E12, "maxY": 0.6666666666666666, "series": [{"data": [[1.6087404E12, 0.3333333333333333], [1.60874046E12, 0.6666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60874046E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60874046E12, "maxY": 1.0, "series": [{"data": [[1.60874046E12, 1.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.60874046E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60874046E12, "maxY": 1.0, "series": [{"data": [[1.60874046E12, 1.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60874046E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.0, "minX": 1.60874046E12, "maxY": 1.0, "series": [{"data": [[1.60874046E12, 1.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.60874046E12, "title": "Total Transactions Per Second"}},
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

