 
(: for $obres in //obra
where $obres/@any < "1800"
order by $obres/@pais
return $obres :)

(: distinct-values((for $obra in //obra
let $visible:= $obra/museu/@visible
where $visible = "true"
return data($obra/@pais))
) :)

(: distinct-values((for $obra in //obra
let $visible:= $obra/museu/@visible
where $visible = "true"
order by $obra/@pais
return data($obra/@pais))
) :)

(: for $pais in distinct-values(
(for $obra in //obra
let $visible:= $obra/museu/@visible
where $visible = "true"
return data($obra/@pais))
)
order by $pais
return $pais :)

(: <ul>
{
for $pais in distinct-values(
(for $obra in //obra
let $visible:= $obra/museu/@visible
where $visible = "true"
return data($obra/@pais))
)
order by $pais
return <li>{$pais}</li>
}
</ul> :)

(: <table>
{
  for $obra in //obra
  order by $obra/autor
  return if($obra/@pais="França")
  then
  <tr>
    <td>{$obra/titol/text()}</td>
    <td>{$obra/autor/text()}</td>
  </tr>
   else ()
}
</table> :)

(: for $obra in //obra
order by $obra/autor
return
  concat("Titol: ",$obra/titol/text(),
  " - Autor: ",$obra/autor/text()
) :)

<ul>
 {
   for $obra in //obra
   let $visible:= $obra/museu/@visible
   return
     <li>
       {
         concat(
          $obra/titol,
          "(",$obra/@any, ") - ",
          if($visible = "true")
          then concat("Exposat al ",$obra/museu)
          else  "No exposat al museu"
         )
       }
     </li>
 }
</ul>
