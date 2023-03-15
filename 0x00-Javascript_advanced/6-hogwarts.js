const studentHogwarts = (function() {
  let name = null;

  return function() {
    let privateScore = 0;

    function changeScoreBy(points) {
      privateScore += points;
    }

    return {
      setName: function(newName) {
        name = newName;
      },
      rewardStudent: function() {
        changeScoreBy(1);
      },
      penalizeStudent: function() {
        changeScoreBy(-1);
      },
      getScore: function() {
        return `${name}: ${privateScore}`;
      }
    };
  };
})();

const harry = new studentHogwarts();
harry.setName("Harry");
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
console.log(harry.getScore()); // Output: Harry: 4

const draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();
console.log(draco.getScore()); // Output: Draco: -2
