const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 6.5;
        break;
      case 'tuesday':
        return 7;
        break;
      case 'wednesday':
        return 6;
        break;
      case 'thursday':
        return 5;
        break;
      case 'friday':
        return 6.5;
        break;
      case 'saturday':
        return 7;
        break;
      case 'sunday':
        return 7;
        break;
    }
  };
  
  // test the function
  console.log(getSleepHours('friday'));
  
  // total sleep hours
  const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  };
  
  // test the function for adding all together
  console.log(getActualSleepHours());
  
  // function for ideal sleep hours
  const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
  };
  
  // test the ideal sleep hours function
  console.log(getIdealSleepHours());
  
  // calculate the sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep time than needed!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than You needed this week. You should get some rest!');
    }
  };
  
  console.log(calculateSleepDebt());