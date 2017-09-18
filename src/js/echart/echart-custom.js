
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
        color: [
            '#097A83', '#2AA876', '#FFD265', '#F19C65',
            '#CE4D45', '#999999'
        ],
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}원 ({d}%)"
      },
      calculable: true,
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['국물떡볶이(R)', '닭볶이', '부대떡볶이(R)', '걸작순살치킨', '쿨피스(대)', '기타']
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
        }, {
          value: 500000,
          name: '기타'
        }]
      }]
    });

  }

  // 최고 주문 건수 메뉴
  if ($('#echart_donut2').length ){

    var echartDonut2 = echarts.init(document.getElementById('echart_donut2'), theme);

    echartDonut2.setOption({
        color: [
            '#097A83', '#2AA876', '#FFD265', '#F19C65',
            '#CE4D45', '#999999'
        ],
      tooltip: {
        trigger: 'item',
        formatter: "{b} : {c}건 ({d}%)"
      },
      calculable: true,
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['국물떡볶이(R)', '닭볶이', '부대떡볶이(R)', '걸작순살치킨', '쿨피스(대)', '기타']
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
        }, {
          value: 400,
          name: '기타'
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
        type: 'value',
        axisLabel: {
            formatter: '{value}원'
        }
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
        type: 'value',
        axisLabel: {
            formatter: '{value}건'
        }
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
        type: 'value',
        axisLabel: {
            formatter: '{value}원'
        }
      }],
      series: [{
        name: '최대 매출',
        type: 'bar',
        data: [223000, 183000, 192500, 180000, 94000, 214000, 123000]
      }, {
        name: '최소 매출',
        type: 'bar',
        data: [13000, 13500, 20500, 24000, 20000, 24000, 20000]
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
        type: 'value',
        axisLabel: {
            formatter: '{value}건'
        }
      }],
      series: [{
        name: '최대 매출',
        type: 'bar',
        data: [8, 5, 6, 5, 4, 6, 4]
      }, {
        name: '최소 매출',
        type: 'bar',
        data: [3, 1, 1, 1, 1, 1, 1]
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
      xAxis: {
        name: '시간',
        type: 'category',
        boundaryGap: true,
        data: [
          '00:00','02:00','04:00','06:00','08:00','10:00','12:00',
          '14:00','16:00','18:00','20:00','22:00','24:00'
        ]
      },
      yAxis: [{
        name: '매출',
        type: 'value',
        axisLabel: {
            formatter: '{value}원'
        }
      }],
      series: [{
        name: '최대 매출',
        type: 'bar',
        data: [
            223000, 183000, 192500, 180000, 94000, 214000,
            223000, 183000, 192500, 180000, 94000, 214000
        ]
      }, {
        name: '최소 매출',
        type: 'bar',
        data: [
            13000, 13500, 20500, 24000, 20000, 24000,
            13000, 13500, 20500, 24000, 20000, 24000
        ]
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
      xAxis: {
        name: '시간',
        type: 'category',
        boundaryGap: true,
        data: [
          '00:00','02:00','04:00','06:00','08:00','10:00','12:00',
          '14:00','16:00','18:00','20:00','22:00','24:00'
        ]
      },
      yAxis: [{
        name: '주문 건수',
        type: 'value',
        axisLabel: {
            formatter: '{value}건'
        }
      }],
      series: [{
        name: '최대 매출',
        type: 'bar',
        data: [8, 5, 6, 5, 4, 6, 8, 5, 6, 5, 4, 6]
      }, {
        name: '최소 매출',
        type: 'bar',
        data: [3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 2 ]
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
        name: '',
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
            type: 'value',
            axisLabel: {
                formatter: '{value}원'
            }
        },
        {
          name: '주문 건수',
          type: 'value',
            axisLabel: {
                formatter: '{value}건'
            }
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
            567000, 554500, 576000, 1140500, 304000
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
            18, 20, 21, 33, 20
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
            data[2] + '원'
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
          hourI, dayI, u_random_int(0, 10000)
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
            data[2] + '건'
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
        max: 10000,
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
