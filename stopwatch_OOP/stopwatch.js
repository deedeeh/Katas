function Stopwatch() {
  let startTime, endTime, running;
  let duration = 0;
  
  this.start = function() {
    if(running) {
      throw new Error('Stopwatch has already started.');
    }
    running = true;
    startTime = new Date();
  };

  this.end = function() {
    if(!running) {
      throw new Error('Stopwatch is not started.');
    }
    running = false;
    endTime = new Date();
    const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
    duration += seconds;
  }

  this.reset = function() {
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  }

  Object.defineProperty(this, 'duration', {
    get: function() {return duration}
  });
}

const stopwatch = new Stopwatch();