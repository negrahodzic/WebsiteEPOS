function potvrda_confirm()
  {
  var p=confirm("Da li ste sigurni da zelite da posaljete poruku?")
  if (p==true) {
    document.write("Poruka je poslata! Javicemo Vam se uskoro! :)")
    }  else  {
    document.write("Odustali ste od slanja! :(")
    }
  }
