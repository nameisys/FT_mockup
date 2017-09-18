/**
 * Resize function without multiple trigger
 * 
 * Usage:
 * $(window).smartresize(function(){  
 *     // code here
 * });
 */
(function($,sr){
    // debouncing function from John Hann
    // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
    var debounce = function (func, threshold, execAsap) {
      var timeout;

        return function debounced () {
            var obj = this, args = arguments;
            function delayed () {
                if (!execAsap)
                    func.apply(obj, args); 
                timeout = null; 
            }

            if (timeout)
                clearTimeout(timeout);
            else if (execAsap)
                func.apply(obj, args);

            timeout = setTimeout(delayed, threshold || 100); 
        };
    };

    // smartresize 
    jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

$(document).ready(function() {

  var theme = {
    color: [
      '#097A83', '#2AA876', '#FFD265', '#F19C65',
      '#CE4D45', '#FF6636', '#5F95C6', '#6FAE7F'
    ],

    title: {
      itemGap: 8,
      textStyle: {
        fontWeight: 'normal',
        color: '#408829'
      }
    },

    dataRange: {
      color: ['#1f610a', '#97b58d']
    },

    toolbox: {
      color: ['#408829', '#408829', '#408829', '#408829']
    },

    tooltip: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#408829',
          type: 'dashed'
        },
        crossStyle: {
          color: '#408829'
        },
        shadowStyle: {
          color: 'rgba(200,200,200,0.3)'
        }
      }
    },

    dataZoom: {
      dataBackgroundColor: '#eee',
      fillerColor: 'rgba(64,136,41,0.2)',
      handleColor: '#408829'
    },
    grid: {
      borderWidth: 0
    },

    categoryAxis: {
      axisLine: {
        lineStyle: {
          color: '#408829'
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#eee']
        }
      }
    },

    valueAxis: {
      axisLine: {
        lineStyle: {
          color: '#408829'
        }
      },
      splitArea: {
        show: true,
        areaStyle: {
          color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
        }
      },
      splitLine: {
        lineStyle: {
          color: ['#eee']
        }
      }
    },
    timeline: {
      lineStyle: {
        color: '#408829'
      },
      controlStyle: {
        normal: {color: '#408829'},
        emphasis: {color: '#408829'}
      }
    },

    k: {
      itemStyle: {
        normal: {
          color: '#68a54a',
          color0: '#a9cba2',
          lineStyle: {
            width: 1,
            color: '#408829',
            color0: '#86b379'
          }
        }
      }
    },
    map: {
      itemStyle: {
        normal: {
          areaStyle: {
            color: '#ddd'
          },
          label: {
            textStyle: {
              color: '#c12e34'
            }
          }
        },
        emphasis: {
          areaStyle: {
            color: '#99d2dd'
          },
          label: {
            textStyle: {
              color: '#c12e34'
            }
          }
        }
      }
    },
    force: {
      itemStyle: {
        normal: {
          linkStyle: {
            strokeColor: '#408829'
          }
        }
      }
    },
    chord: {
      padding: 4,
      itemStyle: {
        normal: {
          lineStyle: {
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)'
          },
          chordStyle: {
            lineStyle: {
              width: 1,
              color: 'rgba(128, 128, 128, 0.5)'
            }
          }
        },
        emphasis: {
          lineStyle: {
            width: 1,
            color: 'rgba(128, 128, 128, 0.5)'
          },
          chordStyle: {
            lineStyle: {
              width: 1,
              color: 'rgba(128, 128, 128, 0.5)'
            }
          }
        }
      }
    },
    gauge: {
      startAngle: 225,
      endAngle: -45,
      axisLine: {
        show: true,
        lineStyle: {
          color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
          width: 8
        }
      },
      axisTick: {
        splitNumber: 10,
        length: 12,
        lineStyle: {
          color: 'auto'
        }
      },
      axisLabel: {
        textStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        length: 18,
        lineStyle: {
          color: 'auto'
        }
      },
      pointer: {
        length: '90%',
        color: 'auto'
      },
      title: {
        textStyle: {
          color: '#333'
        }
      },
      detail: {
        textStyle: {
          color: 'auto'
        }
      }
    },
    textStyle: {
      fontFamily: 'Arial, Verdana, sans-serif'
    }
  };

  console.log('init_echarts');

  //echart Donut

  // 최고 매출 메뉴
  if ($('#echart_donut1').length ){

    var echartDonut1 = echarts.init(document.getElementById('echart_donut1'), theme);

    echartDonut1.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable: true,
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['국물떡볶이(R)', '닭볶이', '부대떡볶이(R)', '걸작순살치킨', '쿨피스(대)']
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {
            show: true,
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                x: '25%',
                width: '50%',
                funnelAlign: 'center',
                max: 1548
              }
            }
          },
          restore: {
            show: true,
            title: "Restore"
          },
          saveAsImage: {
            show: true,
            title: "Save Image"
          }
        }
      },
      series: [{
        type: 'pie',
        radius: ['35%', '55%'],
        itemStyle: {
          normal: {
            label: {
              show: true
            },
            labelLine: {
              show: true
            }
          },
          emphasis: {
            label: {
              show: true,
              position: 'center',
              textStyle: {
                fontSize: '14',
                fontWeight: 'normal'
              }
            }
          }
        },
        data: [{
          value: 832000,
          name: '국물떡볶이(R)'
        }, {
          value: 509400,
          name: '닭볶이'
        }, {
          value: 302000,
          name: '부대떡볶이(R)'
        }, {
          value: 398000,
          name: '걸작순살치킨'
        }, {
          value: 230500,
          name: '쿨피스(대)'
        }]
      }]
    });

  }

  // 최고 주문 건수 메뉴
  if ($('#echart_donut2').length ){

    var echartDonut2 = echarts.init(document.getElementById('echart_donut2'), theme);

    echartDonut2.setOption({
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      calculable: true,
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['국물떡볶이(R)', '닭볶이', '부대떡볶이(R)', '걸작순살치킨', '쿨피스(대)']
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {
            show: true,
            type: ['pie', 'funnel'],
            option: {
              funnel: {
                x: '25%',
                width: '50%',
                funnelAlign: 'center',
                max: 1548
              }
            }
          },
          restore: {
            show: true,
            title: "Restore"
          },
          saveAsImage: {
            show: true,
            title: "Save Image"
          }
        }
      },
      series: [{
        type: 'pie',
        radius: ['35%', '55%'],
        itemStyle: {
          normal: {
            label: {
              show: true
            },
            labelLine: {
              show: true
            }
          },
          emphasis: {
            label: {
              show: true,
              position: 'center',
              textStyle: {
                fontSize: '14',
                fontWeight: 'normal'
              }
            }
          }
        },
        data: [{
          value: 321,
          name: '국물떡볶이(R)'
        }, {
          value: 230,
          name: '닭볶이'
        }, {
          value: 198,
          name: '부대떡볶이(R)'
        }, {
          value: 201,
          name: '걸작순살치킨'
        }, {
          value: 157,
          name: '쿨피스(대)'
        }]
      }]
    });

  }

  // 시간대별 요일 평균 매출
  if ($('#echart_line1').length) {

    var echartLine1 = echarts.init(document.getElementById('echart_line1'), theme);

    echartLine1.setOption({
      color: [
        '#324D5C', '#46B29D', '#F0CA4D', '#E37B40', '#DE5B49'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['월요일','화요일','수요일','목요일','금요일','토요일','일요일'],
        orient: 'horizontal',
        bottom: '1%'
      },
      grid: {
        show: false,
        borderColor: '#000',
        left: '4%',
        right: '13%',
        bottom: '10%',
        containLabel: true
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {
            show: true,
            title: {
              line: 'Line',
              bar: 'Bar',
              stack: 'Stack',
              tiled: 'Tiled'
            },
            type: ['line', 'bar', 'stack', 'tiled']
          },
          restore: {
            show: true,
            title: "Restore"
          },
          saveAsImage: {
            show: true,
            title: "Save Image"
          }
        }
      },
      calculable: true,
      xAxis: {
        name: '시간',
        type: 'category',
        boundaryGap: false,
        data: [
          '00:00','02:00','04:00','06:00','08:00','10:00','12:00',
          '14:00','16:00','18:00','20:00','22:00','24:00'
        ]
      },
      yAxis: {
        name: '매출',
        type: 'value'
      },
      series: [
        {
          name:'월요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 38000, 123000,
            172500, 165000, 115000, 223000, 13500, 13000
          ]
        },
        {
          name:'화요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 25000, 53000,
            142500, 52000, 13500, 183000, 16500, 60500
          ]
        },
        {
          name:'수요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 20500, 162000,
            92000, 56000, 48000, 192500, 50000, 123000
          ]
        },
        {
          name:'목요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 135000, 48000,
            42000, 61500, 180000, 178000, 100500, 24000
          ]
        },
        {
          name:'금요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 20000, 21000,
            47500, 74000, 50500, 94000, 24000, 0
          ]
        },
        {
          name:'토요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 0, 24000,
            50500, 80000, 46000, 214000, 78000, 0
          ]
        },
        {
          name:'일요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 28000, 0,
            20000, 66000, 123000, 56000, 21500, 25000
          ]
        },
      ]
    });
  }

  // 시간대별 요일 평균 주문 건수
  if ($('#echart_line2').length) {

    var echartLine2 = echarts.init(document.getElementById('echart_line2'), theme);

    echartLine2.setOption({
      color: [
        '#324D5C', '#46B29D', '#F0CA4D', '#E37B40', '#DE5B49'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['월요일','화요일','수요일','목요일','금요일','토요일','일요일'],
        orient: 'horizontal',
        bottom: '1%'
      },
      grid: {
        show: false,
        left: '4%',
        right: '13%',
        bottom: '10%',
        containLabel: true
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {
            show: true,
            title: {
              line: 'Line',
              bar: 'Bar',
              stack: 'Stack',
              tiled: 'Tiled'
            },
            type: ['line', 'bar', 'stack', 'tiled']
          },
          restore: {
            show: true,
            title: "Restore"
          },
          saveAsImage: {
            show: true,
            title: "Save Image"
          }
        }
      },
      calculable: true,
      xAxis: {
        name: '시간',
        type: 'category',
        boundaryGap: false,
        data: [
          '00:00','02:00','04:00','06:00','08:00','10:00','12:00',
          '14:00','16:00','18:00','20:00','22:00','24:00'
        ]
      },
      yAxis: {
        name: '주문 건수',
        type: 'value'
      },
      series: [
        {
          name:'월요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 3, 5,
            5, 4, 3, 8, 5, 3
          ]
        },
        {
          name:'화요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 1, 2,
            3, 2, 3, 5, 4, 2
          ]
        },
        {
          name:'수요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 1, 6,
            3, 2, 2, 5, 2, 4
          ]
        },
        {
          name:'목요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 4, 2,
            2, 3, 5, 5, 3, 1
          ]
        },
        {
          name:'금요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 1, 1,
            2, 3, 2, 4, 2, 0
          ]
        },
        {
          name:'토요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 0, 1,
            2, 3, 2, 6, 3, 0
          ]
        },
        {
          name:'일요일',
          type:'line',
          smooth: true,
          data:[
            0, 0, 0, 0, 0, 1, 0,
            1, 3, 4, 2, 1, 1
          ]
        },
      ]
    });
  }

  // 요일별 Minimum/Maximum 매출
  if ($('#echart_bar_day1').length ){

    var echartBarDay1 = echarts.init(document.getElementById('echart_bar_day1'), theme);

    echartBarDay1.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Maximum', 'Minimum']
      },
      toolbox: {
        show: false
      },
      calculable: false,
      xAxis: [{
        name: '요일',
        type: 'category',
        splitNumber: 7,
        data: ['월', '화', '수', '목', '금', '토', '일']
      }],
      yAxis: [{
        name: '매출',
        type: 'value'
      }],
      series: [{
        name: '최대 매출',
        type: 'bar',
        data: [223000, 183000, 192500, 180000, 94000, 214000, 123000],
        markLine: {
          data: [{
            type: 'average',
            name: '???'
          }]
        }
      }, {
        name: '최소 매출',
        type: 'bar',
        data: [13000, 13500, 20500, 24000, 20000, 24000, 20000],
        markLine: {
          data: [{
            type: 'average',
            name: '???'
          }]
        }
      }]
    });

  }

  // 요일별 Minimum/Maximum 주문 건수
  if ($('#echart_bar_day2').length ){

    var echartBarDay2 = echarts.init(document.getElementById('echart_bar_day2'), theme);

    echartBarDay2.setOption({
      color: [
        '#FFD265', '#F19C65'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Maximum', 'Minimum']
      },
      toolbox: {
        show: false
      },
      calculable: false,
      xAxis: [{
        name: '요일',
        type: 'category',
        splitNumber: 7,
        data: ['월', '화', '수', '목', '금', '토', '일']
      }],
      yAxis: [{
        name: '주문 건수',
        type: 'value'
      }],
      series: [{
        name: '최대 매출',
        type: 'bar',
        data: [8, 5, 6, 5, 4, 6, 4],
        markLine: {
          data: [{
            type: 'average',
            name: '???'
          }]
        }
      }, {
        name: '최소 매출',
        type: 'bar',
        data: [3, 1, 1, 1, 1, 1, 1],
        markLine: {
          data: [{
            type: 'average',
            name: '???'
          }]
        }
      }]
    });

  }

  // 시간대별 Minimum/Maximum 매출
  if ($('#echart_bar_time1').length ){

    var echartBarTime1 = echarts.init(document.getElementById('echart_bar_time1'), theme);

    echartBarTime1.setOption({
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Maximum', 'Minimum']
      },
      toolbox: {
        show: false
      },
      calculable: false,
      xAxis: [{
        name: '요일',
        type: 'category',
        splitNumber: 7,
        data: ['월', '화', '수', '목', '금', '토', '일']
      }],
      yAxis: [{
        name: '매출',
        type: 'value'
      }],
      series: [{
        name: '최대 매출',
        type: 'bar',
        data: [223000, 183000, 192500, 180000, 94000, 214000, 123000],
        markLine: {
          data: [{
            type: 'average',
            name: '???'
          }]
        }
      }, {
        name: '최소 매출',
        type: 'bar',
        data: [13000, 13500, 20500, 24000, 20000, 24000, 20000],
        markLine: {
          data: [{
            type: 'average',
            name: '???'
          }]
        }
      }]
    });

  }

  // 시간대별 Minimum/Maximum 주문 건수
  if ($('#echart_bar_time2').length ){

    var echartBarTime2 = echarts.init(document.getElementById('echart_bar_time2'), theme);

    echartBarTime2.setOption({
      color: [
        '#FFD265', '#F19C65'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Maximum', 'Minimum']
      },
      toolbox: {
        show: false
      },
      calculable: false,
      xAxis: [{
        name: '요일',
        type: 'category',
        splitNumber: 7,
        data: ['월', '화', '수', '목', '금', '토', '일']
      }],
      yAxis: [{
        name: '주문 건수',
        type: 'value'
      }],
      series: [{
        name: '최대 매출',
        type: 'bar',
        data: [8, 5, 6, 5, 4, 6, 4],
        markLine: {
          data: [{
            type: 'average',
            name: '???'
          }]
        }
      }, {
        name: '최소 매출',
        type: 'bar',
        data: [3, 1, 1, 1, 1, 1, 1],
        markLine: {
          data: [{
            type: 'average',
            name: '???'
          }]
        }
      }]
    });

  }

  // 시간대별 총 주문 건수와 매출
  if ($('#echart_line_diff').length) {

    var echartLineDiff = echarts.init(document.getElementById('echart_line_diff'), theme);

    echartLineDiff.setOption({
      color: [
        '#417378', '#FFD265'
      ],
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['매출','주문 건수'],
        orient: 'vertical',
        right: '0%',
        bottom: '25%'
      },
      grid: {
        show: false,
        containLabel: true
      },
      toolbox: {
        show: true,
        feature: {
          magicType: {
            show: true,
            title: {
              line: 'Line',
              bar: 'Bar',
              stack: 'Stack',
              tiled: 'Tiled'
            },
            type: ['line', 'bar', 'stack', 'tiled']
          },
          restore: {
            show: true,
            title: "Restore"
          },
          saveAsImage: {
            show: true,
            title: "Save Image"
          }
        }
      },
      calculable: true,
      xAxis: {
        name: '시간',
        type: 'category',
        boundaryGap: false,
        data: [
          '00:00','02:00','04:00','06:00','08:00','10:00','12:00',
          '14:00','16:00','18:00','20:00','22:00','24:00'
        ]
      },
      yAxis: [
        {
          name: '매출',
          type: 'value'
        },
        {
          name: '주문 건수',
          type: 'value'
        }
      ],
      series: [
        {
          name:'매출',
          type:'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data:[
            0, 0, 0, 0, 0, 266500, 431000,
            567000, 554500, 576000, 1140500, 304000, 245500
          ]
        },
        {
          name:'주문 건수',
          yAxisIndex: 1,
          type:'line',
          smooth: true,
          itemStyle: {
            normal: {
              areaStyle: {
                type: 'default'
              }
            }
          },
          data:[
            0, 0, 0, 0, 0, 11, 17,
            18, 20, 21, 33, 20, 11
          ]
        }
      ]
    });
  }

  // 요일과 시간대에 따른 매출
  if ($('#echart_heatmap1').length) {

    var echartHeatmap1 = echarts.init(document.getElementById('echart_heatmap1'), theme);

    var hours = u_range(0, 25).reduce(function (memo, v) {
      if (v % 2 === 0) {
        memo.push(v + '시')
      }
      return memo
    }, [])
    var days = ['월', '화', '수', '목', '금', '토', '일'].reverse()

    var data = []
    hours.forEach(function (hour, hourI) {
      days.forEach(function (day, dayI) {
        data.push([
          hourI, dayI, u_random_int(0, 10000000)
        ])
      })
    })

    echartHeatmap1.setOption({
      color: [
        '#417378', '#A4CEBE'
      ],
      tooltip: {
        position: 'top',
        // Map: {a} for series name, {b} for area name, {c} for merging data, {d} for none;
        // formatter: '{b0}: {c0}<br />{b1}: {c1}'
        formatter: function (params, ticket, callback) {
          var data = params.data
          return [
            hours[data[0]],
            days[data[1]],
            data[2]
          ].join(' ')
        }
      },
      animation: false,
      grid: {
        height: '50%',
        y: '10%'
      },
      xAxis: {
        type: 'category',
        data: hours
      },
      yAxis: {
        type: 'category',
        data: days
      },
      visualMap: {
        min: 0,
        max: 10000000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        inRange: {
          color: ['#A4CEBE', '#417378']
        }
      },
      series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            color: '#417378',
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    });
  }

  // 요일과 시간대에 따른 주문 건수
  if ($('#echart_heatmap2').length) {

    var echartHeatmap2 = echarts.init(document.getElementById('echart_heatmap2'), theme);

    var hours = u_range(0, 25).reduce(function (memo, v) {
      if (v % 2 === 0) {
        memo.push(v + '시')
      }
      return memo
    }, [])
    var days = ['월', '화', '수', '목', '금', '토', '일'].reverse()

    var data = []
    hours.forEach(function (hour, hourI) {
      days.forEach(function (day, dayI) {
        data.push([
          hourI, dayI, u_random_int(0, 10000000)
        ])
      })
    })

    echartHeatmap2.setOption({
      tooltip: {
        position: 'top',
        // Map: {a} for series name, {b} for area name, {c} for merging data, {d} for none;
        // formatter: '{b0}: {c0}<br />{b1}: {c1}'
        formatter: function (params, ticket, callback) {
          var data = params.data
          return [
            hours[data[0]],
            days[data[1]],
            data[2]
          ].join(' ')
        }
      },
      animation: false,
      grid: {
        height: '50%',
        y: '10%'
      },
      xAxis: {
        type: 'category',
        data: hours
      },
      yAxis: {
        type: 'category',
        data: days
      },
      visualMap: {
        min: 0,
        max: 10000000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        bottom: '15%',
        inRange: {
          color: ['#F1E0BD', '#F19C65']
        }
      },
      series: [{
        name: 'Punch Card',
        type: 'heatmap',
        data: data,
        label: {
          normal: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }]
    });
  }

  $(window).on('resize', function(){
    if(echartDonut1 != null && echartDonut1 != undefined){
      echartDonut1.resize();
      echartDonut2.resize();
      echartLine1.resize();
      echartLine2.resize();
      echartBarDay1.resize();
      echartBarDay2.resize();
      echartBarTime1.resize();
      echartBarTime2.resize();
      echartLineDiff.resize();
      echartHeatmap1.resize();
      echartHeatmap2.resize();
    }
  });

});


function u_range(i, max) {
  i = i || 0
  max = max || 0
  var rs = []
  for(; i < max; ++i) {
    rs.push(i)
  }
  return rs
}

function u_random_int(min, max) {
  return  Math.floor(Math.random() * (max - min + 1) + min);
}
/* DATERANGEPICKER */

function init_daterangepicker() {

  if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
  console.log('init_daterangepicker');

  var cb = function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
    $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  };

  var optionSet1 = {
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    minDate: '01/01/2012',
    maxDate: '12/31/2015',
    dateLimit: {
      days: 60
    },
    showDropdowns: true,
    showWeekNumbers: true,
    timePicker: false,
    timePickerIncrement: 1,
    timePicker12Hour: true,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    opens: 'left',
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-small btn-primary',
    cancelClass: 'btn-small',
    format: 'MM/DD/YYYY',
    separator: ' to ',
    locale: {
      applyLabel: 'Submit',
      cancelLabel: 'Clear',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      firstDay: 1
    }
  };

  $('#reportrange span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));
  $('#reportrange').daterangepicker(optionSet1, cb);
  $('#reportrange').on('show.daterangepicker', function() {
    console.log("show event fired");
  });
  $('#reportrange').on('hide.daterangepicker', function() {
    console.log("hide event fired");
  });
  $('#reportrange').on('apply.daterangepicker', function(ev, picker) {
    console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
  });
  $('#reportrange').on('cancel.daterangepicker', function(ev, picker) {
    console.log("cancel event fired");
  });
  $('#options1').click(function() {
    $('#reportrange').data('daterangepicker').setOptions(optionSet1, cb);
  });
  $('#options2').click(function() {
    $('#reportrange').data('daterangepicker').setOptions(optionSet2, cb);
  });
  $('#destroy').click(function() {
    $('#reportrange').data('daterangepicker').remove();
  });

}

function init_daterangepicker_right() {

  if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
  console.log('init_daterangepicker_right');

  var cb = function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
    $('#reportrange_right span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  };

  var optionSet1 = {
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    minDate: '01/01/2012',
    maxDate: '12/31/2020',
    dateLimit: {
      days: 60
    },
    showDropdowns: true,
    showWeekNumbers: true,
    timePicker: false,
    timePickerIncrement: 1,
    timePicker12Hour: true,
    ranges: {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    opens: 'right',
    buttonClasses: ['btn btn-default'],
    applyClass: 'btn-small btn-primary',
    cancelClass: 'btn-small',
    format: 'MM/DD/YYYY',
    separator: ' to ',
    locale: {
      applyLabel: 'Submit',
      cancelLabel: 'Clear',
      fromLabel: 'From',
      toLabel: 'To',
      customRangeLabel: 'Custom',
      daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      firstDay: 1
    }
  };

  $('#reportrange_right span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

  $('#reportrange_right').daterangepicker(optionSet1, cb);

  $('#reportrange_right').on('show.daterangepicker', function() {
    console.log("show event fired");
  });
  $('#reportrange_right').on('hide.daterangepicker', function() {
    console.log("hide event fired");
  });
  $('#reportrange_right').on('apply.daterangepicker', function(ev, picker) {
    console.log("apply event fired, start/end dates are " + picker.startDate.format('MMMM D, YYYY') + " to " + picker.endDate.format('MMMM D, YYYY'));
  });
  $('#reportrange_right').on('cancel.daterangepicker', function(ev, picker) {
    console.log("cancel event fired");
  });

  $('#options1').click(function() {
    $('#reportrange_right').data('daterangepicker').setOptions(optionSet1, cb);
  });

  $('#options2').click(function() {
    $('#reportrange_right').data('daterangepicker').setOptions(optionSet2, cb);
  });

  $('#destroy').click(function() {
    $('#reportrange_right').data('daterangepicker').remove();
  });

}

function init_daterangepicker_single_call() {

  if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
  console.log('init_daterangepicker_single_call');

  $('#single_cal1').daterangepicker({
    singleDatePicker: true,
    singleClasses: "picker_1"
  }, function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
  });
  $('#single_cal2').daterangepicker({
    singleDatePicker: true,
    singleClasses: "picker_2"
  }, function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
  });
  $('#single_cal3').daterangepicker({
    singleDatePicker: true,
    singleClasses: "picker_3"
  }, function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
  });
  $('#single_cal4').daterangepicker({
    singleDatePicker: true,
    singleClasses: "picker_4"
  }, function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
  });


}


function init_daterangepicker_reservation() {

  if( typeof ($.fn.daterangepicker) === 'undefined'){ return; }
  console.log('init_daterangepicker_reservation');

  $('#reservation').daterangepicker(null, function(start, end, label) {
    console.log(start.toISOString(), end.toISOString(), label);
  });

  $('#reservation').daterangepicker({
    startDate: moment().subtract(29, 'days'),
    endDate: moment(),
    locale: {
      format: "YYYY/MM/DD",
      separator: " - ",
      applyLabel: "적용",
      cancelLabel: "취소",
      fromLabel: "에서",
      toLabel: "까지",
      customRangeLabel: "직접 선택",
      weekLabel: "W",
      daysOfWeek: [
        "일",
        "월",
        "화",
        "수",
        "목",
        "금",
        "토"
      ],
      monthNames: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월"
      ],
      firstDay: 1
    },
    alwaysShowCalendars: true,
    ranges: {
      '오늘': [moment(), moment()],
      '어제': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      '지난 7일': [moment().subtract(6, 'days'), moment()],
      '지난 30일': [moment().subtract(29, 'days'), moment()],
      '이번 달': [moment().startOf('month'), moment().endOf('month')],
      '저번 달': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
  });

}

$(document).ready(function() {

  init_daterangepicker();
  init_daterangepicker_right();
  init_daterangepicker_single_call();
  init_daterangepicker_reservation();

});
//
// dummy data
//

// 데이터는 그냥하드코딩
var mb_group_data = [
    { name: '1인세트'},
    { name: '패밀리세트'},
    { name: '음료'}
]
var mb_menu_data_list = [
    [
        { name: '1인세트_메뉴1', price: '10000', color: 'red'},
        { name: '1인세트_메뉴2', price: '10000' },
        {},
        { name: '1인세트_메뉴3', price: '10000' },
        { name: '1인세트_메뉴4', price: '10000' }
    ],
    [
        { name: '패밀리세트1', price: '10000' },
        { name: '패밀리세트1', price: '10000' },
        { name: '패밀리세트1', price: '10000' },
        { name: '패밀리세트1', price: '10000' },
    ],
    [
        { name: '음료1', price: '10000' },
        { name: '음료2', price: '10000' },
        { name: '음료3', price: '10000' },
        { name: '음료4', price: '10000' },
        { name: '음료5', price: '10000' },
        { name: '음료6', price: '10000' },
        { name: '음료7', price: '10000' },
        { name: '음료8', price: '10000' },
        { name: '음료9', price: '10000' },
    ]
]

// 추가데이터
u_range(0, 10).forEach(function (v, i) {
    mb_group_data.push({ name: 'othergroup' + i})
})
mb_group_data.forEach(function (group_data, i) {
    if (i < 3) return
    
    var data = u_range(0, 10).map(function (v, i) {
        return { name: group_data.name + 'menu' + v, price: '10000' }
    })
    mb_menu_data_list.push(data)
})

//
// groupItem
//

// create
// ---

function mb_create_groupItem(id, data, index) {
    // NOTE: <button 앞에 공백 들어가면 parseHTML 결과로 name, button 이런형태가됨
    var $el = $($.parseHTML([
        '<button class="btn btn-default" type="button">',
        data.name,
        '</button>'
    ].join(''))[0])

    var inst = {
        id: id,
        data: data,
        $el: $el,

        index: index
    }

    // bind listeners
    mb_groupitem_bind_listeners(inst)

    //
    //
    //
    return inst
}

// listeners
// ---

function mb_groupitem_bind_listeners(inst) {
    var $el = inst.$el
    var index = inst.index

    // event
    $el.on('click', function () {
        // 효과간단히
        $('#mb-groupview > .btn').removeClass('active')
        $(this).addClass('active')

        // 클릭한 그룹의 메뉴를 그려줌
        var data = mb_menu_data_list[index]
        if (data) {
            var menuItems = mb_create_menuItems(data)
            var m_$els = menuItems.map(function(item) {
                return item.$el
            })

            $('#mb-menuview').empty().append(m_$els)

            // 후처리
            mb_menuitem_append_emptyitem_if_last_is_not_emptyitem()
        }
    });
}

// TODO LIST:
// 0. ui수정인데
// 1. update, add 검색창..
// 2. 메뉴를 page단위 분리?
// 
// 
//
// TODO 실제사용안함(sortablejs때문)
// global state
//
var STATE = {}
function init_state() {
    STATE.dragged = null
}


//
// create lists
//
function mb_create_groupItems() {
    return mb_group_data.map(function (v, i) {
        var id = 'groupbutton-' + i
        var item = mb_create_groupItem(id, v, i)
        return item
    })
}

function mb_create_menuItems(data) {
    return data.map(function (v, i) {
        var id = 'menubutton-' + i
        var item = mb_create_menuItem(id, v, i)
        return item
    })
}



//
// init
// 
function mb_init() {
    console.log('mb_init')
    var $mb_groupview = $('#mb-groupview')
    var $mb_menuview = $('#mb-menuview')

    // init
    // ---

    // state
    init_state()

    // element
    $mb_groupview.empty()
    $mb_menuview.empty()

    // group
    var groupItems = mb_create_groupItems()
    var $groupEls = groupItems.map(function(item) {
        return item.$el
    })
    $mb_groupview.append($groupEls)


    // init action
    // ---

    // 첫번째 그룹 클릭해서 메뉴만듬
    $groupEls[0].trigger('click')
    
}
setTimeout(function() {
    if ( !u_is_menubutton() ) return;

    mb_init();
}, 500)
// $(document).ready(function() {
    // if ( !u_is_menubutton() ) return;

    // mb_init();
// });

//
// menu element
//

function mb_create_$menu(id, data) {
    data = data || {}

    var $menu_wrap = $('#dummy-menu').children().first().clone()

    mb_menuitem_update_text($menu_wrap, data)
    if (data.color) {
        mb_menuitem_update_color($menu_wrap, data.color)
    }

    return $menu_wrap
}

function mb_create_empty$menu(id, data) {
    data = data || {}

    var $menu_wrap = $('#dummy-menu').children().last().clone()

    if (data.color) {
        mb_menuitem_update_color($menu_wrap, data.color)
    }

    return $menu_wrap
}

function mb_menuitem_update_color($el, color) {
    var $color_target = $el.find('.caption')
    $color_target.css('background-color', color)
}

function mb_menuitem_update_text($el, data) {
    var $lines = $el.find('.caption p')

    if (data.name) {
        var $name_span = $lines.first().find('span')
        $name_span.text(data.name)
    }

    if (data.price) {
        var $price_span = $lines.last().find('span')
        $price_span.text(data.price)
    }
}

//
// menuItemList
//

// create
// ---

// TODO id 의미없음
function mb_create_menuItem(id, data, index) {
    var $menu = data.name ? mb_create_$menu(id, data) : mb_create_empty$menu(id, data)

    var inst = {
        id: id,
        data: data,
        $el: $menu,

        index: index,
    }

    // bind listeners
    mb_menuitem_bind_listeners(inst)

    //
    //
    //
    return inst
}

// 
// ---

// 마지막것이 emptyitem이 아니면 생성해줌
function mb_menuitem_append_emptyitem_if_last_is_not_emptyitem() {
    console.log('ww')
    var $mb_menuview = $('#mb-menuview')
    var $menuitems = $mb_menuview.children()

    if ( $menuitems.last().data('type') !== 'empty' ) {
        var index = $menuitems.length
        var item = mb_create_menuItem('', {}, index)
        $mb_menuview.append(item.$el)
    }
}

// listeners
// ---


function mb_menuitem_bind_listeners(inst) {

    mb_submenu(inst)

    mb_menuitem_bind_mobile_draganddrop_listener(inst)
}

function mb_submenu(inst) {
    var $color_btn = inst.$el.find('.tools').find('> a').first()
    var $color_dropdown = $color_btn.next('ul')

    var $cmd_btn = inst.$el.find('.tools').find('> a').last()
    var $cmd_dropdown = $cmd_btn.next('ul')

    // show dropdown 
    $color_btn.on('click', function (e) {
        e.preventDefault()

        $cmd_dropdown.hide()
        $color_dropdown.toggle()
    })
    $cmd_btn.on('click', function (e) {
        e.preventDefault()

        $color_dropdown.hide()
        $cmd_dropdown.toggle()
    })


    // change color
    $color_dropdown.find('li').on('click', function (e) {
        e.preventDefault()

        var color_str = $(this).find('a').text()
        mb_menuitem_update_color(inst.$el, color_str)

        // 후처리
        $color_dropdown.hide()
    })

    // delete
    $cmd_dropdown.find('li[data-type="delete"]').on('click', function (e) {
        e.preventDefault()

        inst.$el.remove()

        // 후처리
        $cmd_dropdown.hide()
        mb_menuitem_append_emptyitem_if_last_is_not_emptyitem()
    })

    // update
    $cmd_dropdown.find('li[data-type="update"]').on('click', function (e) {
        e.preventDefault()

        // TODO popup
        var data = {
            name: 'updatename',
            price: 'updaetprice'
        }
        mb_menuitem_update_text(inst.$el, data)

        // 후처리
        $cmd_dropdown.hide()
    })

    // add
    $cmd_dropdown.find('li[data-type="add"]').on('click', function (e) {
        e.preventDefault()

        // TODO popup
        var data = {
            name: 'addname',
            price: 'addprice',
            color: inst.data.color
        }
        var item = mb_create_menuItem(inst.id, data, inst.index)
        inst.$el.replaceWith(item.$el)

        // 후처리
        $cmd_dropdown.hide()
        mb_menuitem_append_emptyitem_if_last_is_not_emptyitem()
    })
}

function mb_menuitem_bind_mobile_draganddrop_listener(inst) {
    var el = document.getElementById('mb-menuview');
    Sortable.create(el, {
        sort: true,  // sorting inside list

        onEnd: mb_menuitem_append_emptyitem_if_last_is_not_emptyitem
    })
}


//
// TODO sortablejs 덕분에, 사용하지않을것같다.
// 만약 사용한다면 아래로변경
// <div class="thumbnail draganddrop" draggable="true">
//
function mb_menuitem_bind_pc_draganddrop_listener(inst) {
    var $menu = inst.$el.children().first()

    $menu.bind('dragstart', function (e) {
        var event = e.originalEvent
        event.dataTransfer.setData("Text", null);
        // make it half transparent
        event.target.style.opacity = .5;

        STATE.dragged = event.target;

        // NOTE: draganddrop의 자식 이벤트 무시위해 css줘야함  .draganddrop * {pointer-events: none;}
        $('.draganddrop').addClass('draganddrop-active')
    })
    $menu.bind('dragend', function (e) {
        var event = e.originalEvent
        event.target.style.opacity = ""

        STATE.dragged = null;

        $('.draganddrop').removeClass('draganddrop-active')
    })

    /* events fired on the drop targets */
    $menu.bind('dragover', function (e) {
        e.preventDefault()
    })

    $menu.bind('dragenter', function (e) {
        var event = e.originalEvent
        if ( event.target.className && event.target.className.indexOf("draganddrop") != -1 ) {
            event.target.style.background = "purple";
        }
    })

    $menu.bind('dragleave', function (e) {
        var event = e.originalEvent
        if ( event.target.className && event.target.className.indexOf("draganddrop") != -1 ) {
            event.target.style.background = "";
        }
    })

    $menu.bind('drop', function (e) {
        var event = e.originalEvent
        // prevent default action (open as link for some elements)
        e.preventDefault();

        // move dragged elem to the selected drop target
        if ( event.target.className && event.target.className.indexOf("draganddrop") != -1 ) {
            event.target.style.background = "";

            if (STATE.dragged) {
                // swap
                var target = event.target.parentElement
                var source = STATE.dragged.parentElement
                u_swapNodes(target, source)

                //
                STATE.dragged = null;
            }
        }
    })

}

//
// util_element
//

// https://stackoverflow.com/questions/698301/is-there-a-native-jquery-function-to-switch-elements/698440#698440
function u_swapNodes(a, b) {
    var aparent = a.parentNode;
    var asibling = a.nextSibling === b ? a : a.nextSibling;
    b.parentNode.insertBefore(a, b);
    aparent.insertBefore(b, asibling);
}

/**
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var CURRENT_URL = window.location.href.split('#')[0].split('?')[0],
    $BODY = $('body'),
    $MENU_TOGGLE = $('#menu_toggle'),
    $SIDEBAR_MENU = $('#sidebar-menu'),
    $SIDEBAR_FOOTER = $('.sidebar-footer'),
    $LEFT_COL = $('.left_col'),
    $RIGHT_COL = $('.right_col'),
    $NAV_MENU = $('.nav_menu'),
    $FOOTER = $('footer');

// Sidebar
$(document).ready(function() {
    // TODO: This is some kind of easy fix, maybe we can improve this
    var setContentHeight = function () {
        // reset height
        $RIGHT_COL.css('min-height', $(window).height());

        var bodyHeight = $BODY.outerHeight(),
            footerHeight = $BODY.hasClass('footer_fixed') ? -10 : $FOOTER.height(),
            leftColHeight = $LEFT_COL.eq(1).height() + $SIDEBAR_FOOTER.height(),
            contentHeight = bodyHeight < leftColHeight ? leftColHeight : bodyHeight;

        // normalize content
        contentHeight -= $NAV_MENU.height() + footerHeight;

        $RIGHT_COL.css('min-height', contentHeight);
    };

    $SIDEBAR_MENU.find('a').on('click', function(ev) {
        var $li = $(this).parent();

        if ($li.is('.active')) {
            $li.removeClass('active active-sm');
            $('ul:first', $li).slideUp(function() {
                setContentHeight();
            });
        } else {
            // prevent closing menu if we are on child menu
            if (!$li.parent().is('.child_menu')) {
                $SIDEBAR_MENU.find('li').removeClass('active active-sm');
                $SIDEBAR_MENU.find('li ul').slideUp();
            }

            $li.addClass('active');

            $('ul:first', $li).slideDown(function() {
                setContentHeight();
            });
        }
    });

    // toggle small or large menu
    $MENU_TOGGLE.on('click', function() {
        if ($BODY.hasClass('nav-md')) {
            $SIDEBAR_MENU.find('li.active ul').hide();
            $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
            $SIDEBAR_MENU.find('li.active-sm ul').show();
            $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $BODY.toggleClass('nav-md nav-sm');

        setContentHeight();

        $('.dataTable').each ( function () { $(this).dataTable().fnDraw(); });
    });

    // check active menu
    $SIDEBAR_MENU.find('a[href="' + CURRENT_URL + '"]').parent('li').addClass('current-page');

    $SIDEBAR_MENU.find('a').filter(function () {
        return this.href == CURRENT_URL;
    }).parent('li').addClass('current-page').parents('ul').slideDown(function() {
        setContentHeight();
    }).parent().addClass('active');

    // recompute content when resizing
    $(window).smartresize(function(){
        setContentHeight();
    });

    setContentHeight();

    // fixed sidebar
    if ($.fn.mCustomScrollbar) {
        $('.menu_fixed').mCustomScrollbar({
            autoHideScrollbar: true,
            theme: 'minimal',
            mouseWheel:{ preventDefault: true }
        });
    }
});
// /Sidebar

// Panel toolbox
$(document).ready(function() {
    $('.collapse-link').on('click', function() {
        var $BOX_PANEL = $(this).closest('.x_panel'),
            $ICON = $(this).find('i'),
            $BOX_CONTENT = $BOX_PANEL.find('.x_content');

        // fix for some div with hardcoded fix class
        if ($BOX_PANEL.attr('style')) {
            $BOX_CONTENT.slideToggle(200, function(){
                $BOX_PANEL.removeAttr('style');
            });
        } else {
            $BOX_CONTENT.slideToggle(200);
            $BOX_PANEL.css('height', 'auto');
        }

        $ICON.toggleClass('fa-chevron-up fa-chevron-down');
    });

    $('.close-link').click(function () {
        var $BOX_PANEL = $(this).closest('.x_panel');

        $BOX_PANEL.remove();
    });
});
// /Panel toolbox

// Tooltip
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        container: 'body'
    });
});
// /Tooltip

// Progressbar
$(document).ready(function() {
	if ($(".progress .progress-bar")[0]) {
	    $('.progress .progress-bar').progressbar();
	}
});
// /Progressbar

// Switchery
$(document).ready(function() {
    if ($(".js-switch")[0]) {
        var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
        elems.forEach(function (html) {
            var switchery = new Switchery(html, {
                color: '#26B99A'
            });
        });
    }
});
// /Switchery

// iCheck
$(document).ready(function() {
    if ($("input.flat")[0]) {
        $(document).ready(function () {
            $('input.flat').iCheck({
                checkboxClass: 'icheckbox_flat-green',
                radioClass: 'iradio_flat-green'
            });
        });
    }
});
// /iCheck

// Table
$('table input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('table input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});

var checkState = '';

$('.bulk_action input').on('ifChecked', function () {
    checkState = '';
    $(this).parent().parent().parent().addClass('selected');
    countChecked();
});
$('.bulk_action input').on('ifUnchecked', function () {
    checkState = '';
    $(this).parent().parent().parent().removeClass('selected');
    countChecked();
});
$('.bulk_action input#check-all').on('ifChecked', function () {
    checkState = 'all';
    countChecked();
});
$('.bulk_action input#check-all').on('ifUnchecked', function () {
    checkState = 'none';
    countChecked();
});

function countChecked() {
    if (checkState === 'all') {
        $(".bulk_action input[name='table_records']").iCheck('check');
    }
    if (checkState === 'none') {
        $(".bulk_action input[name='table_records']").iCheck('uncheck');
    }

    var checkCount = $(".bulk_action input[name='table_records']:checked").length;

    if (checkCount) {
        $('.column-title').hide();
        $('.bulk-actions').show();
        $('.action-cnt').html(checkCount + ' Records Selected');
    } else {
        $('.column-title').show();
        $('.bulk-actions').hide();
    }
}

// Accordion
$(document).ready(function() {
    $(".expand").on("click", function () {
        $(this).next().slideToggle(200);
        $expand = $(this).find(">:first-child");

        if ($expand.text() == "+") {
            $expand.text("-");
        } else {
            $expand.text("+");
        }
    });
});

// NProgress
if (typeof NProgress != 'undefined') {
    $(document).ready(function () {
        NProgress.start();
    });

    $(window).on('load', function() {
        NProgress.done();
    });
}









function u_range(i, max) {
    i = i || 0
    max = max || 0
    var rs = []
    for(; i < max; ++i) {
        rs.push(i)
    }
    return rs
}
function u_random_int(min, max) {
    return  Math.floor(Math.random() * (max - min + 1) + min);
}

function u_is_chart() {
    return /index.html/.test(document.location.href)
}

function u_is_menubutton() {
    return /menubutton.html/.test(document.location.href)
}
