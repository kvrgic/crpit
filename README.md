# crpit
Full-stack web aplikacija za objavljivanje i upravljanje blog postovima s fokusom na inovacije, tehnologiju i obrazovanje. Izgrađena korištenjem MERN okvira, s korisničkom autentifikacijom, administratorskim panelom i integracijom interaktivnog digitalnog magazina.

## Pokretanje projekta lokalno

Za pokretanje ovog MERN projekta na vašem računaru, pratite sljedeće korake:

- Kloniranje repozitorija
Otvorite terminal i pokrenite sljedeću naredbu:

``` git clone [URL_REPOZITORIJA] ```

+ Zatim uđite u direktorij projekta:

``` cd [ime-projekta] ```

* Otvorite projekat u Visual Studio Code editoru:

``` code . ```

## Pokretanje frontend dijela
- Prebacite se u frontend direktorij: ``` cd frontend ```

+ Instalirajte: ``` npm install ```

* Pokrenite razvojni server: ``` npm run dev ```

Frontend aplikacija će biti dostupna na adresi: http://localhost:5173/

## Pokretanje backend dijela
- Prebacite se u backend direktorij: ``` cd backend ```

+ Instalirajte: ``` npm install ```

* Pokrenite backend server u razvojnom režimu: ``` npm run start:dev ```

Backend će biti dostupan na: http://localhost:5000/ (ili na portu definisanom u .env fajlu)

## Konfiguracija okruženja (.env)
Za ispravno funkcionisanje aplikacije, potrebno je kreirati ***.env*** fajlove sa varijablama okruženja u oba dijela projekta — u backend i frontend direktoriju.

Koristite dostavljeni ***.env.example*** fajl kao šablon i unesite vlastite vrijednosti.

``` PORT=5000 ```  
``` MONGO_URI=mongodb://localhost:27017/ime-baze ```  
``` JWT_SECRET=neka_tajna_rijec ```

Primjer .env za frontend: ``` VITE_API_URL=http://localhost:5000/api ```

Nakon izmjena ***.env*** fajlova, obavezno restartujte serverske procese.

🔒 Napomena: ***.env*** fajlovi sadrže osjetljive podatke i ne treba ih slati ili postavljati na GitHub. Dodajte ih u ***.gitignore.***

## Pokretanje MongoDB baze podataka
Aplikacija koristi MongoDB kao bazu podataka.

*Opcija 1*: Lokalno pokretanje

- Ako želite koristiti lokalnu bazu, potrebno je da imate instaliran MongoDB Community Edition.

- Preuzmite i instalirajte MongoDB:
👉 https://www.mongodb.com/try/download/community

- Zatim pokrenite MongoDB server: ``` mongod ```

- Podrazumijevano će raditi na adresi: *mongodb://localhost:27017.*

- U ***.env*** fajlu unesite: ``` MONGO_URI=mongodb://localhost:27017/ime-baze ```

## ✅ Zaključak
Nakon što uspješno pokrenete frontend i backend dijelove aplikacije, spremni ste za korištenje sistema za objavljivanje blog postova.
Ukoliko dođe do problema prilikom pokretanja, provjerite:

* da su ***.env*** varijable ispravno postavljene,

* da MongoDB server radi (lokalno ili putem Atlasa),

* da su sve zavisnosti instalirane (*npm install*)
