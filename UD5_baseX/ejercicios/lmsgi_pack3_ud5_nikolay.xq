(: 2.1 Resol els següents problemes emprant expressions XPath: :)
(: a) Autors el cognom dels quals sigui DATE. :)
(: /llibres/llibre[autor/llinatges[contains(text(),'DATE')]] :)
(: b) Llibres amb més d'un autor. :)
(: /llibres/llibre[count(autor)>1] :)
(: c) Tots els autors. :)
(: distinct-values(/llibres/llibre/autor/concat('Llinatges: ',llinatges,'
nom: ',nom)) :)
(: d) Llibres editats el 1998 i el 2005. :)
(: /llibres/llibre[any > 1998 and any < 2005] :)
(: e) Tots els valors de l'atribut id. :)
(: distinct-values(/llibres/llibre/@id) :)
(: f) Llibre que ocupa la tercera posició. :)
(: /llibres/llibre[position()=3] :)
(: /llibres/llibre[position()=3]/autor[last()-1] :)
(: h) Els dos primers autors del tercer llibre. :)
(: /llibres/llibre[position()=3]/autor[position()= 1 or 2] :)
(: i) Llibres que tenen un atribut id major que 2. :)
(: /llibres/llibre[@id > 2] :)
(: j) Llibres editats entre 1998 i 2005. :)
(: /llibres/llibre[any >= 1998 and any <= 2005] :)
(: 2.2 Donat el document XML de l’anterior activitat, fes elssegüents apartats en XQuery: :)
(: a) Obtenir la llista d'autors de cada llibre. :)
(: let $autors := distinct-values(/llibres/llibre/autor/concat('Llinatges: ',llinatges,' Nom:',nom))
return $autors :)
(: b) Obtenir els títols de llibre dels quals consti més d'un autor. :)
(: let $titols := /llibres/llibre[count(autor)>1]/titol
return $titols/text() :)
(: c) Obtenir els títols de llibre publicats amb posterioritat a 2004. :)
(: let $titols := /llibres/llibre[any < 2004]/titol
return $titols/text() :)
(: d) Obtenir per cada llibre quants autors l’han publicat. :)
(: let $autors := /llibres/llibre/concat('Llibre: ',titol,' - Nºautors: ',count(autor))
return $autors :)
(: e) Obtenir per cada llibre, el seu títol i quants autors l'han publicat. :)
(: let $autors := /llibres/llibre/concat('Llibre: ',titol,' - Nºautors: ',count(autor))
return $autors :)
(: f) Obtenir per cada llibre, el seu id, títol i quants autors l’han publicat. :)
(: let $llibre :=/llibres/llibre/concat('id: ',@id,'
titol: ',titol,'
nºautors: ',count(autor),"
")
return $llibre :)
(: g) Obtenir per cada llibre el seu títol i autors, tenint en compte que si el llibre té més d'un autor figurarà el primer autor i el text “et.  l . :)
(: let $llibre := /llibres/llibre/concat('titol: ',titol,'
autors: ',if (count(autor)>1) then concat(autor[position()=1],' 
et. l.
') else concat(autor,'
') )
return $llibre :)
(: h) Obtenir el títol d'aquells llibres en els quals tots els seus autors tinguin el cognom Alarcon i el nom P. :)
(: let $titols := /llibres/llibre[autor/llinatges ='Alarcon' and autor/nom ='P.']
return $titols/titol/text() :)
(: i) Obtenir el títol d'aquells llibres en els quals tots els seus autors tinguin el cognom DATE i el nom C.J. :)
(: let $titols := /llibres/llibre[autor/llinatges = 'DATE' and autor/nom ='C.J.']
return $titols/titol/text() :)
(: j) Per a aquells llibres que es titulin “Bases de dades”, obtenir tots els seus atributs i elements, excepte el d'autor. :)
(: let $llibre := llibres/llibre[titol = 'Bases de Datos']
return $llibre/*[not(self::autor)] :)
(: k) Obtenir aquells llibres que figurin sense editorial. :)
(: let $llibre := /llibres/llibre[not(editorial)]
return $llibre :)
(: l) Obtenir aquells llibres que figurin amb editorial. :)
(: let $llibre := /llibres/llibre[exists(editorial)]
return $llibre :)
(: m) Obtenir els llibres publicats per l'editorial Addison Wesley després de 2005. :)
(: let $llibres := /llibres/llibre[editorial = 'Addison-Wesley' and any > 2005]
return $llibres :)
(: n) Obtenir el títol del llibre i l’editorial per a aquells llibres que tinguin un preu superior a 50€. :)
(: let $titols := /llibres/llibre[preu > 50]
return $titols/concat('Editorial: ',editorial,' 
Titol: ',titol) :)
(: o) Generar dades HTML amb la llista de títols dels llibres. :)
(: for $titols in distinct-values(llibres/llibre/titol)
return <titol>{data($titols)}</titol> :)