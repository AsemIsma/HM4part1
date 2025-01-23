function nameUser (name) {
  if (name === 'Жасмин') {
    console.log('Сегодня твой счастливый день! получи свой приз');
  } else if (name === 'Aidana') {
    console.log('Сегодня и твой счастливый день! получи свою скидку');
  } else {
    console.log('Добро пожаловать, ' + name);
  }
}

nameUser('Aidana')
nameUser('Asem')
nameUser('Жасмин')