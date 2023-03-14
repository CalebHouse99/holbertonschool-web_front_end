function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    function returnSeatNumber() {
      return seat;
    }
    return returnSeatNumber();
  }
  let students = [];
  for(let i = 1; i === numberOfStudents; i++) {
    students[i] = studentSeat(i);
  }
  return students;
}

let classRoom = createClassRoom(10);