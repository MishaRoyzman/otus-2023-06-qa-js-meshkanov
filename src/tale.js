function newYear(characterName) {
    if (characterName === 'Дед Мороз') {
      return `${characterName}! ${characterName}! ${characterName}!`
    } else if (characterName === 'Снегурочка') {
      return `${characterName}! ${characterName}! ${characterName}!`
    }
}
characterName = 'Дед Мороз'
message = newYear(characterName)
console.log(message)