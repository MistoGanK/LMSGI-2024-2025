(: 3.1 Donat el documento XML adjunt, crea la base de dades a BaseX i fes les següents consultes emprant XPath :)
(: a) Selecciona tots els noms de productes (sense etiqueta). :)
(: /tienda/producto/nombre/text() :)
(: b) Selecciona la descripció del producte amb codi "3" sense emprar // i sense etiquetes. :)
(: /tienda/producto[@codigo=3]/descripcion/text() :)
(: c) Selecciona tots els productes amb un preu superior a $500 (dòlars). :)
(: /tienda/producto[detalle/precio/@moneda ='USD' and detalle/precio > 500] :)
(: d) Selecciona el codi de producte, el nom i la marca del primer producte. El resultat es mostrarà amb el següent format: :)
(: /tienda/producto/concat('codigo=','"',@codigo,'"','
',nombre,'
',detalle/marca,'
') :)
(: e) Selecciona el preu (etiqueta inclosa) dels auriculars sense fils Sony buscant només per la paraula "Auriculares" i filtrantper la marca “Sony”. :)
(: /tienda/producto[nombre[contains(text(),'Auriculares')] and detalle/marca = 'Sony']/detalle/precio :)
(: f) Selecciona les especificacions de l’Smartwatch Samsung Galaxy Watch 4 (sense etiqueta <especificaciones>, és a dir, el resultat serà :)
(: /tienda/producto[nombre='Smartwatch Samsung Galaxy Watch 4']/detalle/especificaciones/* :)
(: g) Selecciona tots els productes que tinguin bateria. :)
(: /tienda/producto[exists(detalle/especificaciones/bateria)] :)
(: 3.2 Donat el mateix XML, realitza les següents consultes emprant XQuery. :)
(: a) Selecciona el nom del producte i el preu en dòlars de tots els productes emprant where. La sortida ha de tenir aquest format (sense claudàtors): :)
(: for $productos in /tienda/producto
where $productos/detalle/precio/@moneda='USD'
return concat('Nom producte: ',$productos/nombre,', Preu: ',$productos/detalle/precio,'$') :)
(: b) Compta el nombre de productes els noms dels quals comencen per "Smart". El resultat ha d'estar en una etiqueta. :)
(: let $total := count(/tienda/producto[nombre[starts-with(text(),'Smart')]])
return <Total>{$total}</Total> :)
(: c) Llista totes les marques de productes que hi ha a la botiga sense repetició amb aquest format (la marca ha d'estar en majúscules). :)
(: <products>
{ 
for $marcas in (distinct-values(/tienda/producto/detalle/upper-case(marca)))
return <brand>{$marcas}</brand>  
}
</products> :)
(: d) Llista totes les especificacions del “Laptop HP Pavilion” amb aquest format (amb o sense l'última coma final). Has de suposar que no saps quantes especificacions hi ha. :)
(: for $hp in /tienda/producto[nombre ='Laptop HP Pavilion']
return ((<producto>{$hp/nombre}</producto>),(<especificaciones>{concat($hp/detalle/especificaciones,',')}</especificaciones>)) :)
(: e) Calcula el preu final amb un descompte del 15% per a tots els productes i retorna un nou document XML que contingui l'ID del producte, el preu original
i el preu amb descompte per a cadascun. Per a això és obligatori crear almenys aquestes variables: una amb el descompte a aplicar, una altra amb el preu original i una altra amb el preu amb descompte. Aquest ha de ser el format final: :)

  (: for $producto in /tienda/producto
  return (
<producte id='{$producto/@codigo}'>
{
  (<preuOriginal>{xs:decimal($producto/detalle/precio)}</preuOriginal>),
  (<preuAmbDesconte>{xs:decimal($producto/detalle/precio)-(xs:decimal($producto/detalle/precio)*0.15)}</preuAmbDesconte>)
}
</producte>
  ) :)
  
(: f) Calcula el preu mitjà de tots els productes de la botiga en euros i mostra una llista amb els noms d'aquests productes. A continuació tens el format de sortida: :)

(: <resultats>
{
  (<preuMitja>
  {
    let $preuMitja := avg((/tienda/producto[detalle/precio/@moneda = 'EURO']/detalle/xs:decimal(precio)))
    return $preuMitja
  }
  </preuMitja>),
  (<productes>
  {
      for $producte in /tienda/producto[detalle/precio/@moneda = 'EURO']
      return (
      <producte>
      {
        (<nom>{$producte/nombre/text()}</nom>),
        (<preu>{$producte/detalle/xs:decimal(precio)}</preu>)
      }
      </producte>
      )
  }
  </productes>)
}
</resultats> :)

(: g) Troba el preu mínim de tots els productes a la botiga que no tinguin “ram” i mostra com a resultat el preu mínim i el nom del producte que tingui aquest preu. :)

(: let $preuMinim := min(/tienda/producto[exists(detalle/especificaciones/ram)]/detalle/xs:decimal(precio))
  return (
    (<preuMimin>{$preuMinim}</preuMimin>),
    (<nom>{
      let $nom := /tienda/producto[detalle/precio = $preuMinim]/nombre
      return $nom/text()
    }</nom>)
  ) :)
  
(: h) Encuentra todos los productos que tienen un precio inferior al promedio de todos los productos en la tienda y que tienen una conexión Wi-Fi. (0,75p) :)

(: let $promedio := avg(/tienda/producto/detalle/xs:decimal(precio))
for $producto in /tienda/producto[detalle/xs:decimal(precio) > $promedio]
return $producto :)

