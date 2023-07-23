function getScore(scores) {
    let sum = 0
    for (let key in scores) {
      sum += scores[key]
    }
    console.log(sum)
  }
  
  const scores = {
    Dima: 0,
    Vasya: 2,
    Kolya: 3,
    Misha: 4,
    Putin: 100
  }
  
  getScore(scores)