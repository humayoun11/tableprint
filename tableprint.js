// alert('hellow')
function start() {
  var tablenumber = document.getElementById('tablenumber').value
  var startnumber = document.getElementById('startnumber').value
  var endnumber = document.getElementById('endnumber').value

  if (startnumber < endnumber) {
    alert('increase')
    for (let i = startnumber; i <= endnumber; i++) {
      document.write('<br>')
      document.write(tablenumber + 'x' + i + '=' + tablenumber * i)
      console.log(tablenumber + 'x' + i + '=' + tablenumber * i)
    }
  }
  if (startnumber > endnumber) {
    alert('decrease')
    for (let a = startnumber; a > endnumber; a--) {
      console.log(a)
      document.write('<br>')
      document.write(tablenumber + 'x' + a + '=' + tablenumber * a)
      console.log(tablenumber + 'x' + a + '=' + tablenumber * a)
    }
  }
  if (startnumber == endnumber) {
    alert('equal')
    document.write(
      tablenumber + 'x' + startnumber + '=' + tablenumber * startnumber,
    )
  }
}
