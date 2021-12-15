var idList = ["CEU0000000001", "CEU0500000001", "CEU0600000001", "CEU0700000001", "CEU0800000001", "CEU1000000001", "CEU2000000001", 
  "CEU3000000001", "CEU3100000001", "CEU3200000001", "CEU4000000001",  "CEU4200000001", "CEU4300000001", 
  "CEU5000000001", "CEU5500000001", "CEU6000000001", "CEU6500000001", "CEU7000000001", "CEU8000000001", "CEU9000000001"]
  //"CES4100000001", "CES4400000001",
var token = "9db84f85f11e4ce9b89d212440122dd9"//"1102b2c7abea4e65adc51bcea5c87048"//"9f2956a7a4f246f58abf690ac5c2df7e"
var axis = []
for (let i=0;i<3;i++){
  for (let j=1;j<13;j++){
    if (i==2 && j==12){ break }
    axis.push (j + '/' + (2019+i))
  }
}

var value = []
var getData = false
for (let i=0;i<idList.length;i++){
  const xhr = new XMLHttpRequest()
  url = "https://api.bls.gov/publicAPI/v2/timeseries/data/"
    +idList[i]+"?registrationkey="+token+"&catalog=true"
  xhr.open("GET", url, false)
  xhr.onreadystatechange = function(){
    if (xhr.readyState === xhr.DONE) {
      let obj = JSON.parse(xhr.responseText).Results.series[0].data
      let tag = JSON.parse(xhr.responseText).Results.series[0].catalog.commerce_industry
      let temp = []
      //console.log(i+"*******\n"+tag+"*********\n"+temp)
      for (let i=obj.length-1;i>=0;i--){
        temp.push(Number(obj[i].value))
      }
      value.push({
        id: tag,
        data: temp
      })
      getData = true
    }
  }
  xhr.send()
}



//    console.log("labels");
//    console.log(labels);

// These are colors from chart.js utils
    const CHART_COLORS = {
      red: 'rgb(255, 99, 132)',
      orange: 'rgb(255, 159, 64)',
      yellow: 'rgb(255, 205, 86)',
      green: 'rgb(75, 192, 192)',
      blue: 'rgb(54, 162, 235)',
      purple: 'rgb(153, 102, 255)',
      grey: 'rgb(201, 203, 207)',
      brown: 'rgb(165, 42,42)',
      klein: 'rgb(0, 47, 167)',
      sand: 'rgb(204, 197, 143)',
      c1: 'rgb(0, 167, 47)',
      c2: 'rgb(47, 0, 167)',
      c3: 'rgb(47, 167, 0)',
      c4: 'rgb(167, 0, 47)',
      c5: 'rgb(167, 47, 0)',
      c6: 'rgb(153, 255, 102)',
      c7: 'rgb(102, 153, 255)',
      c8: 'rgb(102, 255, 153)',
      c9: 'rgb(255, 102, 153)',
      c10: 'rgb(255, 153, 102)',
      c11: 'rgb(125, 125, 125)'
    };
//    console.dir(CHART_COLORS);

    const CHART_COLORS_50_Percent = {
      red: 'rgba(255, 99, 132, 0.5)',
      orange: 'rgba(255, 159, 64, 0.5)',
      yellow: 'rgba(255, 205, 86, 0.5)',
      green: 'rgba(75, 192, 192, 0.5)',
      blue: 'rgba(54, 162, 235, 0.5)',
      purple: 'rgba(153, 102, 255, 0.5)',
      grey: 'rgba(201, 203, 207, 0.5)',
      brown: 'rgb(165, 42,42, 0.5)',
      klein: 'rgb(0, 47, 167, 0.5',
      sand: 'rgb(204,197,143, 0.5)',
      c1: 'rgb(0, 167, 47, 0.5)',
      c2: 'rgb(47, 0, 167, 0.5)',
      c3: 'rgb(47, 167, 0, 0.5)',
      c4: 'rgb(167, 0, 47, 0.5)',
      c5: 'rgb(167, 47, 0, 0.5)',
      c6: 'rgb(153, 255, 102, 0.5)',
      c7: 'rgb(102, 153, 255, 0.5)',
      c8: 'rgb(102, 255, 153, 0.5)',
      c9: 'rgb(255, 102, 153, 0.5)',
      c10: 'rgb(255, 153, 102, 0.5)',
      c11: 'rgb(125, 125, 125, 0.5)'
    };
//    console.log(CHART_COLORS_50_Percent);
//    end utils

    const data = {
      labels: axis,
      datasets: [
        {
          label: value[0].id,
          data: value[0].data,
          borderColor: CHART_COLORS.red,
          backgroundColor: CHART_COLORS_50_Percent.red,
          hidden: true
        },
        {
          label: value[1].id,
          data: value[1].data,
          borderColor: CHART_COLORS.blue,
          backgroundColor: CHART_COLORS_50_Percent.blue,
          hidden: true
        },
        {
          label: value[2].id,
          data: value[2].data,
          borderColor: CHART_COLORS.orange,
          backgroundColor: CHART_COLORS_50_Percent.orange,
          hidden: true
        },
        {
          label: value[3].id,
          data: value[3].data,
          borderColor: CHART_COLORS.yellow,
          backgroundColor: CHART_COLORS_50_Percent.yellow,
          hidden: true
        },
        {
          label: value[4].id,
          data: value[4].data,
          borderColor: CHART_COLORS.green,
          backgroundColor: CHART_COLORS_50_Percent.green,
          hidden: true
        },
        {
          label: value[5].id,
          data: value[5].data,
          borderColor: CHART_COLORS.grey,
          backgroundColor: CHART_COLORS_50_Percent.grey,
          hidden: true
        },
        {
          label: value[6].id,
          data: value[6].data,
          borderColor: CHART_COLORS.purple,
          backgroundColor: CHART_COLORS_50_Percent.purple,
          hidden: true
        },
        {
          label: value[7].id,
          data: value[7].data,
          borderColor: CHART_COLORS.brown,
          backgroundColor: CHART_COLORS_50_Percent.brown,
          hidden: true
        },
        {
          label: value[8].id,
          data: value[8].data,
          borderColor: CHART_COLORS.klein,
          backgroundColor: CHART_COLORS_50_Percent.klein,
          hidden: true
        },
        {
          label: value[9].id,
          data: value[9].data,
          borderColor: CHART_COLORS.sand,
          backgroundColor: CHART_COLORS_50_Percent.sand,
          hidden: true
        },
        {
          label: value[10].id,
          data: value[10].data,
          borderColor: CHART_COLORS.c1,
          backgroundColor: CHART_COLORS_50_Percent.c1,
          hidden: true
        },
        {
          label: value[11].id,
          data: value[11].data,
          borderColor: CHART_COLORS.c2,
          backgroundColor: CHART_COLORS_50_Percent.c2,
          hidden: true
        },
        {
          label: value[12].id,
          data: value[12].data,
          borderColor: CHART_COLORS.c3,
          backgroundColor: CHART_COLORS_50_Percent.c3,
          hidden: true
        },
        {
          label: value[13].id,
          data: value[13].data,
          borderColor: CHART_COLORS.c4,
          backgroundColor: CHART_COLORS_50_Percent.c4,
          hidden: true
        },
        {
          label: value[14].id,
          data: value[14].data,
          borderColor: CHART_COLORS.c5,
          backgroundColor: CHART_COLORS_50_Percent.c5,
          hidden: true
        },

        {
          label: value[15].id,
          data: value[15].data,
          borderColor: CHART_COLORS.c6,
          backgroundColor: CHART_COLORS_50_Percent.c6,
          hidden: true
        },
        {
          label: value[16].id,
          data: value[16].data,
          borderColor: CHART_COLORS.c7,
          backgroundColor: CHART_COLORS_50_Percent.c7,
          hidden: true
        },
        {
          label: value[17].id,
          data: value[17].data,
          borderColor: CHART_COLORS.c8,
          backgroundColor: CHART_COLORS_50_Percent.c8,
          hidden: true
        },

        {
          label: value[18].id,
          data: value[18].data,
          borderColor: CHART_COLORS.c9,
          backgroundColor: CHART_COLORS_50_Percent.c9,
          hidden: true
        },
        
        {
          label: value[19].id,
          data: value[19].data,
          borderColor: CHART_COLORS.c10,
          backgroundColor: CHART_COLORS_50_Percent.c10,
          hidden: true
        },
        /*
        {
          label: value[20].id,
          data: value[20].data,
          borderColor: CHART_COLORS.c11,
          backgroundColor: CHART_COLORS_50_Percent.c11,
          hidden: true
        },
        */

      ]
    };
  //  console.dir(data);

    const config = {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Number of Employees in Thousands'
          }
        }
      }
    };
//    console.log(config);

    const myChart = new Chart(
      document.getElementById('myChart'),
        config);
//    console.dir(myChart);
//    console.log("Ending");
