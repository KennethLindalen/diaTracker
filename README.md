# Server
- [x] DB Oppsett
- [ ] Blodsukker route
	- [x] GET Alle
		- [ ] Må gjøres om til for hver enkel bruker når auth er implementert
	- [x] POST ny
	- [x] DELETE per _ID
	- [ ] UPDATE per _ID 
- [ ] Blodsukker Modell
  - [x] Blodsukker
  - [x] Insulin
  - [ ] Mat
  - [x] Dato og klokkeslett opprettet
  - [ ] Bruker _Id
- [ ] Auth
  - [ ] Bruker model (epost & passord)
  - [ ] Bruker Route
	- [ ] Logg inn
		- [ ] Sammenlignde token med server
	- [ ] Logg ut
	- [ ] Registrer deg
		- [ ] JWT generering
	- [ ] Bcrypt implementering
# Client
- [ ] Main info side
	- [ ] Logg inn
		- [ ] Modal component
	- [ ] Registrer
	- [x] Generell info om diaTracker
	- [x] BS? BS.
- [ ] Oversikt side
	- [ ] Gjennomsnitt per mnd og 3 mnd
	- [ ] Komponenter
		- [x] Blodsukkerliste
			- [ ] Graf (per. dag/mnd)
			- [x] Table (per. dag/mnd)
			- [x] Statisk data
			- [ ] Redux integrering
		- [ ] Graf for blodsukker
			- [ ] Statisk data
			- [ ] Redux integrering