# Climate Change Visualization Tool

Tämä projekti on Oulun ammattikorkeakoulun toisen vuoden ohjelmistokehityksen opiskelijoiden toteuttama web-sovellus. Ideana oli suunnitella ja toteuttaa ilmastonmuutokseen liittyvän tiedon visualisointityökalu (kuva 1). 

![v1](https://user-images.githubusercontent.com/101468709/207816797-26e077fa-766c-4340-8ddc-b613f9339c29.PNG)
Kuva 1.

Teknologiat
Sovelluksen käyttöliittymä on toteutettu ReactJS-sovelluskehystä käyttäen. Käyttöliittymä kommunikoi Java Spring Bootilla toteutetun REST-rajapinnan kanssa (kuva 2), joka on yhteydessä SQL-tietokantaan. Projektissa versionhallintana on käytetty Gitiä ja GitHubia.

![register](https://user-images.githubusercontent.com/101468709/207817234-3f3b92d7-2ee5-4efe-8e8a-f12d7d24c7d4.PNG)
Kuva 2.



## Sovelluksen arkkitehtuuri

![Blank_diagram](https://user-images.githubusercontent.com/101468709/207817807-ce30c9df-5c3b-4d8d-b6f1-8430cf97e75e.png)
Kuva 3.



## Ominaisuudet
-	Mahdollisuus luoda ja poistaa käyttäjä. 
-	Käyttäjä voi luoda omia visualisointinäkymiä ja valita niihin asettelun sekä haluamansa visualisoinnit. Käyttäjä voi myös halutessaan poistaa luomiaan näkymiä.
-	Käyttäjien luomia näkymiä voi katsella ilman kirjautumista niiden uniikilla URL-osoitteella.


![register2](https://user-images.githubusercontent.com/101468709/207817591-6dbd0029-f759-4bd8-837c-92294062d519.PNG)
Kuva 4.

## Tekijät ja roolit

Jere Nissinen
- Tietokannan suunnittelu ja luonti. Visualisointien luominen tietokantadatasta.

Jonne Mustajärvi
- Käyttäjän rekisteröinti. Visualisointi luominen tietokantadatasta.

Aaro Putto
- React-komponenttien reititykset. Käyttäjän poistaminen.

Saku Suorajärvi
- Käyttäjän kirjautuminen ja autentikointi. Visualisointien luominen tietokantadatasta.



## Käyttöönotto paikallisesti

Aja climatedb.sql tiedosto esimerkiksi XAMPP tai MySQL Workbench työkalussa, jotta saat tietokannan paikallisesti käyttöön. Avaa Java sekä React kansiot Visual Studio Codessa. Aja React projektissa npm install. Tietokannan ollessa päällä, käynnistä ensin Java palvelin, jonka jälkeen käynnistä React sovellus npm start komennolla.



## Linkit

[Demovideo](https://www.youtube.com/watch?v=6bCDioJYuSM)


