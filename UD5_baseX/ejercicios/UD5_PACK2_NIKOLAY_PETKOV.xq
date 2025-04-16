 (: 2.1 Resol els següents problemes emprant expressions XPath: :)

(: a) Autors el cognom dels quals sigui DATE. :)
(: llibres/llibre[autor/llinatges = 'DATE']/autor/concat("Llinatges: ",llinatges," Nom:",nom) :)

(: b) Llibres amb més d'un autor. :)
(: llibres/llibre[count(autor) > 1] :)

(: c) Tots els autors. :)
(: distinct-values(llibres/llibre/autor/concat("llinatges: ",llinatges," 
nom: ",nom)) :)

(: d) Llibres editats el 1998 i el 2005. :)
(: /llibres/llibre[any = 1998 or any = 2005] :)

(: e) Tots els valors de l'atribut id. :)
(: distinct-values(/llibres/llibre/@id) :)

(: f) Llibre que ocupa la tercera posició. :)
(: /llibres/llibre[position()=3] :)

(: g) Penúltim autor del tercer llibre. :)
(: /llibres/llibre[3]/autor[last()-1] :)

(: h) Els dos primers autors del tercer llibre. :)
(: /llibres/llibre[3]/autor[position()<3] :)

(: i) Llibres que tenen un atribut id major que 2. :)
(: /llibres/llibre[@id > 2] :)

(: j) Llibres editats entre 1998 i 2005. :)
(: /llibres/llibre[any >= 1998 and 2005 <= any] :)

(: 2.2 Donat el document XML de l’anterior activitat, fes els següents apartats en XQuery: :)

(: a) Obtenir la llista d'autors de cada llibre. :)

(: for $llibres in /llibres/llibre
return distinct-values($llibres/autor) :)

(: b) Obtenir els títols de llibre dels quals consti més d'un autor. :)

(: for $llibres in /llibres/llibre
where $llibres/count(autor) > 1
return $llibres :)

(: c) Obtenir els títols de llibre publicats amb posterioritat a 2004. :)

(: for $llibres in /llibres/llibre 
where $llibres/any < 2004
return $llibres :)

(: d) Obtenir per cada llibre quants autors l’han publicat. :)

(: for $llibres in /llibres/llibre
return concat("Autors: ",distinct-values(count($llibres/autor))) :)

(: e) Obtenir per cada llibre, el seu títol i quants autors l'han publicat. :)

(: for $llibres in /llibres/llibre
return concat("Titol: ",$llibres/titol," - Autors: ",count(distinct-values($llibres/autor))) :)

(: f) Obtenir per cada llibre, el seu id, títol i quants autors l’han publicat. :)

(: for $llibres in /llibres/llibre
return concat("id: ",$llibres/@id," - titol: ",$llibres/titol," - Autors: ",$llibres/count(distinct-values($llibres/autor))) :)

(: g) Obtenir per cada llibre el seu títol i autors, tenint en compte que si el llibre té més d'un autor figurarà el primer autor i el text “et. Al”. :)

(: for $llibres in /llibres/llibre
return 
if (count($llibres/autor)> 1) 
then
concat("Titol: ",$llibres/titol,"- Autoros: ", $llibres/autor[position()=1]," et. Al") 
else
concat("Ttiol: ",$llibres/titol, "- Autors: ",$llibres/autor) :)

(: h) Obtenir el títol d'aquells llibres en els quals tots els seus autors tinguin el cognom Alarcon i el nom P. :)

(: for $llibres in /llibres/llibre
where $llibres/autor[nom = 'P.' and llinatges = 'Alarcon']
return $llibres/titol/string() :)

(: i) Obtenir el títol d'aquells llibres en els quals tots els seus autors tinguin el cognom DATE i el nom C.J. :)

(: for $llibres in /llibres/llibre
where $llibres/autor[llinatges = 'DATE' and nom = 'C.J.']
return $llibres/titol/string() :)

(: j) Per a aquells llibres que es titulin “Bases de dades”, obtenir tots els seus atributs i elements, excepte el d'autor. :)

(: for $llibres in /llibres/llibre
where $llibres[titol = 'Bases de Datos']
return $llibres/*[not(self::autor)] :)

(: k) Obtenir aquells llibres que figurin sense editorial. :)

(: --Todos los libros tienen editorial -- :)

(: for $llibre in /llibres/llibre
where empty($llibre/editorial)
return $llibre :)

(: l) Obtenir aquells llibres que figurin amb editorial. :)

(: for $llibre in /llibres/llibre
where not(empty($llibre/editorial))
return $llibre :)

(: m) Obtenir els llibres publicats per l'editorial Addison-Wesley després de 2005. :)

(: for $llibre in /llibres/llibre
where $llibre[editorial = 'Addison-Wesley' and any > 2005]
return $llibre :)

(: n) Obtenir el títol del llibre i l’editorial per a aquells llibres que tinguin un preu superior a 50€. :)

(: for $llibre in /llibres/llibre 
where $llibre[preu > 50]
return ($llibre/editorial,$llibre/titol) :)

(: o) Generar dades HTML amb la llista de títols dels llibres. :)

(: <llibres>
{
  for $llibre in /llibres/llibre
  return <titol>{$llibre/titol}</titol>
}
</llibres> :)
