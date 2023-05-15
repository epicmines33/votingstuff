var modes = ["goldquest", "cryptohack"]
    var votes = [0, 0]
    new Chart(document.getElementById('pie-chart'), {
      type : 'pie',
      data : {
        labels : modes,
        datasets : [{
          backgroundColor : [ "#e63946", "#254BDD", "#ffbe0b", "#1d3557", "#326998" ],
          data : votes
        }]
      },
      options : {
        responsive : true
      }
    });
