function createLocation(lugar, precio, estado, compania) {
  var quoteRequired =
    precio === null ||
    precio === undefined ||
    (typeof precio === "string" && /cotizar/i.test(precio));

  return {
    lugar: lugar,
    precio: quoteRequired ? null : Number(precio),
    quoteRequired: quoteRequired,
    estado: estado,
    compania: compania,
    isSublot: false,
  };
}

function createSublot(lugar, precio, estado, compania) {
  var location = createLocation(lugar, precio, estado, compania);
  location.isSublot = true;
  return location;
}

var LOCATIONS = [
  createLocation("Arizona (Copart/IAAI)", 275, "ARIZONA", "Copart/IAAI"),
  createLocation("Phoenix North (Copart)", 325, "ARIZONA", "Copart"),
  createLocation("Tucson (Copart/IAAI)", 400, "ARIZONA", "Copart/IAAI"),
  createLocation("Ace Carson (IAAI)", 150, "CALIFORNIA", "IAAI"),
  createLocation("Ace Perris (IAAI)", 300, "CALIFORNIA", "IAAI"),
  createLocation("Adelanto (Copart)", 300, "CALIFORNIA", "Copart"),
  createLocation("Anaheim (IAAI)", 175, "CALIFORNIA", "IAAI"),
  createLocation("Antelope (Copart)", 350, "CALIFORNIA", "Copart"),
  createLocation("Bakersfield (Copart)", 250, "CALIFORNIA", "Copart"),
  createLocation("Colton (IAAI)", 200, "CALIFORNIA", "IAAI"),
  createLocation("East Bay (IAAI)", 415, "CALIFORNIA", "IAAI"),
  createLocation("Fontana (IAAI)", 200, "CALIFORNIA", "IAAI"),
  createLocation("Fremont (IAAI)", 415, "CALIFORNIA", "IAAI"),
  createLocation("Fresno (Copart/IAAI)", 300, "CALIFORNIA", "Copart/IAAI"),
  createLocation("Hayward (Copart)", 415, "CALIFORNIA", "Copart"),
  createLocation("High Desert (IAAI)", 300, "CALIFORNIA", "IAAI"),
  createLocation("Long Beach (Copart)", 135, "CALIFORNIA", "Copart"),
  createLocation("Los Angeles (Copart/IAAI)", 150, "CALIFORNIA", "Copart/IAAI"),
  createLocation("Los Angeles South (IAAI)", 150, "CALIFORNIA", "IAAI"),
  createLocation("Martinez (Copart)", 385, "CALIFORNIA", "Copart"),
  createLocation("Mentone (Copart)", 325, "CALIFORNIA", "Copart"),
  createLocation("N. Hollywood (IAAI)", 225, "CALIFORNIA", "IAAI"),
  createLocation("Napa (Copart)", 450, "CALIFORNIA", "Copart"),
  createLocation("R.Cucamonga (Copart)", 200, "CALIFORNIA", "Copart"),
  createLocation("Redding (Copart)", 550, "CALIFORNIA", "Copart"),
  createLocation("Sacramento (Copart/IAAI)", 325, "CALIFORNIA", "Copart/IAAI"),
  createLocation("Sacramento West (IAAI)", 500, "CALIFORNIA", "IAAI"),
  createLocation("San Bernardino (Copart)", 200, "CALIFORNIA", "Copart"),
  createLocation("San Diego (Copart/IAAI)", 255, "CALIFORNIA", "Copart/IAAI"),
  createLocation("San Jose (Copart)", 415, "CALIFORNIA", "Copart"),
  createLocation("Santa Clarita (IAAI)", 300, "CALIFORNIA", "IAAI"),
  createLocation("So Sacramento (Copart)", 325, "CALIFORNIA", "Copart"),
  createLocation("Stockton (IAAI)", 450, "CALIFORNIA", "IAAI"),
  createLocation("Sun Valley (Copart)", 200, "CALIFORNIA", "Copart"),
  createLocation("Vallejo (Copart)", 385, "CALIFORNIA", "Copart"),
  createLocation("Van Nuys (Copart)", 175, "CALIFORNIA", "Copart"),
  createLocation("Colorado Springs (Copart)", 695, "COLORADO", "Copart"),
  createLocation("Denver (Copart/IAAI)", 695, "COLORADO", "Copart/IAAI"),
  createLocation("Denver Central (Copart)", 695, "COLORADO", "Copart"),
  createLocation("Denver East (Copart)", 695, "COLORADO", "Copart"),
  createLocation("Denver South (Copart)", 695, "COLORADO", "Copart"),
  createLocation("Western Colorado (IAAI)", 725, "COLORADO", "IAAI"),
  createLocation("Honolulu (Copart/IAAI)", "COTIZAR", "HAWAII", "Copart/IAAI"),
  createLocation("Boise (Copart/IAAI)", 775, "IDAHO", "Copart/IAAI"),
  createLocation("Billings (Copart/IAAI)", "Cotizar", "MONTANA", "Copart/IAAI"),
  createLocation("Helena (Copart)", "Cotizar", "MONTANA", "Copart"),
  createLocation("Missoula (IAAI)", "Cotizar", "MONTANA", "IAAI"),
  createLocation("Las Vegas (Copart/IAAI)", 325, "NEVADA", "Copart/IAAI"),
  createLocation("Reno (Copart/IAAI)", 525, "NEVADA", "Copart/IAAI"),
  createLocation("Albuquerque (Copart/IAAI)", 795, "NEW MEXICO", "Copart/IAAI"),
  createLocation("Eugene (Copart/IAAI)", 595, "OREGON", "Copart/IAAI"),
  createLocation("Portland (IAAI)", 595, "OREGON", "IAAI"),
  createLocation("Portland North (Copart)", 595, "OREGON", "Copart"),
  createLocation("Portland South (Copart)", 595, "OREGON", "Copart"),
  createLocation("Portland West (IAAI)", 595, "OREGON", "IAAI"),
  createLocation("Ogden (Copart)", 450, "UTAH", "Copart"),
  createLocation("Provo (IAAI)", 525, "UTAH", "IAAI"),
  createLocation("Salt Lake City (Copart/IAAI)", 450, "UTAH", "Copart/IAAI"),
  createLocation("Graham (Copart)", 695, "WASHINGTON", "Copart"),
  createLocation("North Seattle (Copart)", 750, "WASHINGTON", "Copart"),
  createLocation("Pasco (Copart)", 895, "WASHINGTON", "Copart"),
  createLocation("Puyallup (IAAI)", 695, "WASHINGTON", "IAAI"),
  createLocation("Seattle (IAAI)", 695, "WASHINGTON", "IAAI"),
  createLocation("Spokane (Copart/IAAI)", 900, "WASHINGTON", "Copart/IAAI"),
  createLocation("Phoenix", 300, "ARIZONA", "ADESA"),
  createLocation("Brashers / Rio Linda", 350, "CALIFORNIA", "ADESA"),
  createLocation("Golden Gate / Tracy", 400, "CALIFORNIA", "ADESA"),
  createLocation("Los Angeles / Mira Loma", 200, "CALIFORNIA", "ADESA"),
  createLocation("Sacramento", 400, "CALIFORNIA", "ADESA"),
  createLocation("San Diego", 275, "CALIFORNIA", "ADESA"),
  createLocation("Denver", 775, "COLORADO", "ADESA"),
  createLocation("Boise", 775, "IDAHO", "ADESA"),
  createLocation("Las Vegas", 325, "NEVADA", "ADESA"),
  createLocation("Reno", 525, "NEVADA", "ADESA"),
  createLocation("Portland", 600, "OREGON", "ADESA"),
  createLocation("Eugene", 600, "OREGON", "ADESA"),
  createLocation("Salt Lake", 475, "UTAH", "ADESA"),
  createLocation("Seattle", 750, "WASHINGTON", "ADESA"),
  createLocation("Phoenix", 325, "ARIZONA", "MANHEIM"),
  createLocation("Tucson", 425, "ARIZONA", "MANHEIM"),
  createLocation("Denver", 650, "COLORADO", "MANHEIM"),
  createLocation("Portland", 675, "OREGON", "MANHEIM"),
  createLocation("Honolulu", "Cotizar", "HAWAII", "MANHEIM"),
  createLocation("Utah", 600, "UTAH", "MANHEIM"),
  createLocation("California", 225, "CALIFORNIA", "MANHEIM"),
  createLocation("Central CA / Fresno", 350, "CALIFORNIA", "MANHEIM"),
  createLocation("Riverside", 225, "CALIFORNIA", "MANHEIM"),
  createLocation("San Diego / Oceanside", 275, "CALIFORNIA", "MANHEIM"),
  createLocation("San Francisco / Hayward", 400, "CALIFORNIA", "MANHEIM"),
  createLocation("Southern CA / Fontana", 250, "CALIFORNIA", "MANHEIM"),
  createLocation("Nevada (North Las Vegas)", 400, "NEVADA", "MANHEIM"),
  createLocation("Seattle", 900, "WASHINGTON", "MANHEIM"),
  createLocation("Manheim New Mexico", 825, "NEW MEXICO", "MANHEIM"),
  createLocation("Anaheim Consolidated (IAAI)*", "COTIZAR", "CALIFORNIA", "IAAI"),
  createLocation("Jurupa Valley (IAAI)*", 225, "CALIFORNIA", "IAAI"),
  createLocation("Lancaster (Copart)*", 300, "CALIFORNIA", "Copart"),
  createLocation("Modesto (Copart)*", 450, "CALIFORNIA", "Copart"),
  createLocation("Riverside (IAAI)*", 225, "CALIFORNIA", "IAAI"),
  createLocation("San Jose / San Martin (Copart)*", 415, "CALIFORNIA", "Copart"),
  createLocation("Santa Paula (Copart)*", 300, "CALIFORNIA", "Copart"),
  createLocation("Auction lane (Copart)*", 350, "NEVADA", "Copart"),
  createLocation("Apex Power (Copart)*", 400, "NEVADA", "Copart"),
  createLocation("Tooele (Copart)*", 550, "UTAH", "Copart"),
  createLocation("North Seattle Avenue northeast (Copart)*", 850, "WASHINGTON", "Copart"),
  createLocation("Spanaway (Copart)*", 725, "WASHINGTON", "Copart"),
  createLocation("Vancouver (IAAI)*", 650, "WASHINGTON", "IAAI"),

  // Florida — Grúas
  createLocation("Clearwater (IAAI)", 225, "FLORIDA", "IAAI"),
  createLocation("Fort. Myers (IAAI)", 220, "FLORIDA", "IAAI"),
  createLocation("Fort. Pierce (Copart/IAAI)", 150, "FLORIDA", "Copart/IAAI"),
  createLocation("Jacksonville (IAAI)", 250, "FLORIDA", "IAAI"),
  createLocation("Jacksonville North (Copart)", 250, "FLORIDA", "Copart"),
  createLocation("Miami Central (Copart)", 100, "FLORIDA", "Copart"),
  createLocation("Miami North (Copart/IAAI)", 100, "FLORIDA", "Copart/IAAI"),
  createLocation("Miami South (Copart)", 100, "FLORIDA", "Copart"),
  createLocation("Ocala (Copart)", 250, "FLORIDA", "Copart"),
  createLocation("Orlando (IAAI)", 185, "FLORIDA", "IAAI"),
  createLocation("Orlando North (Copart/IAAI)", 185, "FLORIDA", "Copart/IAAI"),
  createLocation("Orlando South (Copart)", 185, "FLORIDA", "Copart"),
  createLocation("Pensacola (IAAI)", 350, "FLORIDA", "IAAI"),
  createLocation("Punta Gorda (Copart)", 220, "FLORIDA", "Copart"),
  createLocation("Punta Gorda South (Copart)", 225, "FLORIDA", "Copart"),
  createLocation("Tallahassee (Copart)", 320, "FLORIDA", "Copart"),
  createLocation("Tampa (IAAI)", 225, "FLORIDA", "IAAI"),
  createLocation("Tampa North (IAAI)", 225, "FLORIDA", "IAAI"),
  createLocation("Tampa South (Copart)", 205, "FLORIDA", "Copart"),
  createLocation("West Palm Beach (Copart)", 120, "FLORIDA", "Copart"),
  createLocation("West Palm Beach (IAAI)", 145, "FLORIDA", "IAAI"),

  // Sub-lotes / offsite — Grúas
  createSublot("Birmingham Sub lote (Copart)*", 535, "ALABAMA", "Copart"),
  createSublot("Little Rock Sub lote (Copart)*", 800, "ARKANSAS", "Copart"),
  createSublot("Clewiston (Copart)*", 175, "FLORIDA", "Copart"),
  createSublot("Clewiston Fort Pierce (IAAI)*", 175, "FLORIDA", "IAAI"),
  createSublot("Defuniak spring (IAAI)*", "A cotizar", "FLORIDA", "IAAI"),
  createSublot("Mulberry Tampa South (Copart)*", 250, "FLORIDA", "Copart"),
  createSublot("Mulberry Orlando South Sublot (Copart)*", 250, "FLORIDA", "Copart"),
  createSublot("Okeechobee (Copart)*", 275, "FLORIDA", "Copart"),
  createSublot("Orlando Boggy Creek (IAAI)*", 225, "FLORIDA", "IAAI"),
  createSublot("Palmetto (IAAI)*", 275, "FLORIDA", "IAAI"),
  createSublot("Pembroke Pines (IAAI)*", 100, "FLORIDA", "IAAI"),
  createSublot("Thonotosassa (Copart)*", 250, "FLORIDA", "Copart"),
  createSublot("Vertia Augusta (Copart)*", 450, "GEORGIA", "Copart"),
  createSublot("Vertia Savannah (Copart)*", 450, "GEORGIA", "Copart"),
  createSublot("FT. Worth Sublot (Copart)*", 650, "TEXAS", "Copart"),
  createSublot("Aurora Offsite (IAAI)*", 775, "ILLINOIS", "IAAI"),
  createSublot("Centreville (IAAI)*", 725, "ILLINOIS", "IAAI"),
  createSublot("Chicago Heights (Copart)*", 800, "ILLINOIS", "Copart"),
  createSublot("Racehorse Drive Sublot (Copart)*", 725, "ILLINOIS", "Copart"),
  createSublot("Earlington Sublot (Copart)*", 850, "KENTUCKY", "Copart"),
  createSublot("Greenville Sublot (Copart)*", 725, "KENTUCKY", "Copart"),
  createSublot("Indy Minnesota Street 46241 (Copart)*", 725, "INDIANA", "Copart"),
  createSublot("Offsite-Indianapolis IN 47630 (IAAI)*", 725, "INDIANA", "IAAI"),
  createSublot("Davenport IA Sub Lot 169 (Copart)*", 975, "IOWA", "Copart"),
  createSublot("Metro Sublot (Copart)*", 975, "IOWA", "Copart"),
  createSublot("Gibbs Road Kansas City, Kansas 66111 (Copart)*", 725, "KANSAS", "Copart"),
  createSublot("Kansas City, KS, Sublote Yard 17 (Copart)*", 725, "KANSAS", "Copart"),
  createSublot("Elk river Minneapolis North (Copart)*", 850, "MINNESOTA", "Copart"),
  createSublot("Blame Minneapolis North (Copart)*", 850, "MINNESOTA", "Copart"),
  createSublot("Hamlake (Copart)*", 850, "MINNESOTA", "Copart"),
  createSublot("Fredley (Copart)*", 850, "MINNESOTA", "Copart"),
  createSublot("Rice (IAAI)*", 850, "MINNESOTA", "IAAI"),
  createSublot("St. Cloud Avon (Copart)*", 850, "MINNESOTA", "Copart"),
  createSublot("1619 S Golden Ave Springfield (Copart)*", 775, "MISSOURI", "Copart"),
  createSublot("Dunn Road Saint louis, MO 63138", 725, "MISSOURI", "Copart"),
  createSublot("Taussing Avenue Bridgeton (Copart)*", 725, "MISSOURI", "Copart"),
  createSublot("Mebane Sublot (Copart)*", 450, "NORTH CAROLINA", "Copart"),
  createSublot("Winston-Salem Sublote (Copart)*", "A cotizar", "NORTH CAROLINA", "Copart"),
  createSublot("Madera Blvd (Copart)*", 800, "OKLAHOMA", "Copart"),
  createSublot("Tulsa Sublot (Copart)*", 800, "OKLAHOMA", "Copart"),
  createSublot("Columbia Gaston (Copart)*", 400, "SOUTH CAROLINA", "Copart"),
  createSublot("Columbia Sha Liu (Copart)*", 400, "SOUTH CAROLINA", "Copart"),
  createSublot("Birmingham offsite (IAAI)*", 530, "TENNESSEE", "IAAI"),

  // Eastern states — Grúas
  createLocation("Grenada (IAAI)", 475, "MISSISSIPPI", "IAAI"),
  createLocation("Gulf Coast (IAAI)", 495, "MISSISSIPPI", "IAAI"),
  createLocation("Jackson (Copart/IAAI)", 475, "MISSISSIPPI", "Copart/IAAI"),
  createLocation("Columbia (Copart)", 750, "MISSOURI", "Copart"),
  createLocation("Kansas City East (IAAI)", 695, "MISSOURI", "IAAI"),
  createLocation("Sikeston (Copart)", "Cotizar", "MISSOURI", "Copart"),
  createLocation("Springfield (Copart/IAAI)", 725, "MISSOURI", "Copart/IAAI"),
  createLocation("St. Louis (Copart)", 675, "MISSOURI", "Copart"),
  createLocation("Asheville (IAAI)", 515, "NORTH CAROLINA", "IAAI"),
  createLocation("Charlotte (IAAI)", 415, "NORTH CAROLINA", "IAAI"),
  createLocation("China Grove (Copart)", 415, "NORTH CAROLINA", "Copart"),
  createLocation("Concord (Copart/IAAI)", 415, "NORTH CAROLINA", "Copart/IAAI"),
  createLocation("Gastonia (Copart)", 440, "NORTH CAROLINA", "Copart"),
  createLocation("Greensboro (IAAI)", 415, "NORTH CAROLINA", "IAAI"),
  createLocation("High Point", 465, "NORTH CAROLINA", "Copart/IAAI"),
  createLocation("Lumberton (Copart)", 400, "NORTH CAROLINA", "Copart"),
  createLocation("Mebane (Copart)", 415, "NORTH CAROLINA", "Copart"),
  createLocation("Mocksville (Copart)", 445, "NORTH CAROLINA", "Copart"),
  createLocation("Raleigh (Copart/IAAI)", 395, "NORTH CAROLINA", "Copart/IAAI"),
  createLocation("Raleigh North (Copart)", 395, "NORTH CAROLINA", "Copart"),
  createLocation("Wilmington (IAAI)", 515, "NORTH CAROLINA", "IAAI"),
  createLocation("Oklahoma City (Copart/IAAI)", 750, "OKLAHOMA", "Copart/IAAI"),
  createLocation("Tulsa (Copart/IAAI)", 750, "OKLAHOMA", "Copart/IAAI"),
  createLocation("Charleston (IAAI)", 350, "SOUTH CAROLINA", "IAAI"),
  createLocation("Columbia (Copart/IAAI)", 335, "SOUTH CAROLINA", "Copart/IAAI"),
  createLocation("Greenville (IAAI)", 365, "SOUTH CAROLINA", "IAAI"),
  createLocation("Lexington (IAAI)", 335, "SOUTH CAROLINA", "IAAI"),
  createLocation("North Charleston (Copart)", 335, "SOUTH CAROLINA", "Copart"),
  createLocation("Spartanburg (Copart)", 375, "SOUTH CAROLINA", "Copart"),
  createLocation("Chattanooga (IAAI)", 550, "TENNESSEE", "IAAI"),
  createLocation("Knoxville (Copart/IAAI)", 480, "TENNESSEE", "Copart/IAAI"),
  createLocation("Memphis (Copart/IAAI)", 480, "TENNESSEE", "Copart/IAAI"),
  createLocation("Nashville (Copart/IAAI)", 480, "TENNESSEE", "Copart/IAAI"),
  createLocation("Austin (Copart/IAAI)", 500, "TEXAS", "Copart/IAAI"),
  createLocation("Austin North (IAAI)", 550, "TEXAS", "IAAI"),
  createLocation("Dallas (IAAI)", 500, "TEXAS", "IAAI"),
  createLocation("Dallas / Ft Worth (IAAI)", 500, "TEXAS", "IAAI"),
  createLocation("Dallas South (Copart)", 500, "TEXAS", "Copart"),
  createLocation("Fort Worth North (IAAI)", 600, "TEXAS", "IAAI"),
  createLocation("Ft Worth (Copart)", 600, "TEXAS", "Copart"),
  createLocation("Houston (Copart/IAAI)", 565, "TEXAS", "Copart/IAAI"),
  createLocation("Houston East (Copart)", 565, "TEXAS", "Copart"),
  createLocation("Houston North (IAAI)", 565, "TEXAS", "IAAI"),
  createLocation("Houston South (IAAI)", 565, "TEXAS", "IAAI"),
  createLocation("San Antonio (Copart/IAAI)", 500, "TEXAS", "Copart/IAAI"),
  createLocation("San Antonio South (IAAI)", 500, "TEXAS", "IAAI"),

  // Southeast & Midwest — Grúas
  createLocation("Birmingham (Copart/IAAI)", 485, "ALABAMA", "Copart/IAAI"),
  createLocation("Dothan (Copart/IAAI)", 485, "ALABAMA", "Copart/IAAI"),
  createLocation("Huntsville (IAAI)", 485, "ALABAMA", "IAAI"),
  createLocation("Mobile (Copart)", 475, "ALABAMA", "Copart"),
  createLocation("Mobile South (Copart)", 495, "ALABAMA", "Copart"),
  createLocation("Montgomery (Copart)", 475, "ALABAMA", "Copart"),
  createLocation("Tanner (Copart)", 495, "ALABAMA", "Copart"),
  createLocation("Fayetteville (Copart/IAAI)", 725, "ARKANSAS", "Copart/IAAI"),
  createLocation("Little Rock (Copart/IAAI)", 750, "ARKANSAS", "Copart/IAAI"),
  createLocation("Atlanta (IAAI)", 345, "GEORGIA", "IAAI"),
  createLocation("Atlanta Crashedtoys", 345, "GEORGIA", "Crashedtoys"),
  createLocation("Atlanta East/ North/ South (Copart/IAAI)", 345, "GEORGIA", "Copart/IAAI"),
  createLocation("Atlanta West (Copart)", 345, "GEORGIA", "Copart"),
  createLocation("Augusta (Copart)", 395, "GEORGIA", "Copart"),
  createLocation("Cartersville (Copart)", 345, "GEORGIA", "Copart"),
  createLocation("Fairburn (Copart)", 345, "GEORGIA", "Copart"),
  createLocation("Macon (Copart/IAAI)", 345, "GEORGIA", "Copart/IAAI"),
  createLocation("Savannah (Copart/IAAI)", 345, "GEORGIA", "Copart/IAAI"),
  createLocation("Tifton (Copart/IAAI)", 345, "GEORGIA", "Copart/IAAI"),
  createLocation("Chicago North (Copart/IAAI)", 725, "ILLINOIS", "Copart/IAAI"),
  createLocation("Chicago South (Copart/IAAI)", 750, "ILLINOIS", "Copart/IAAI"),
  createLocation("Chicago West (IAAI)", 725, "ILLINOIS", "IAAI"),
  createLocation("Lincoln (IAAI)", 825, "ILLINOIS", "IAAI"),
  createLocation("Peoria (Copart)", 825, "ILLINOIS", "Copart"),
  createLocation("Southern Illinois (Copart)", 675, "ILLINOIS", "Copart"),
  createLocation("St. Louis (IAAI)", 675, "ILLINOIS", "IAAI"),
  createLocation("Wheeling (Copart)", 675, "ILLINOIS", "Copart"),
  createLocation("Cicero (Copart)", 700, "INDIANA", "Copart"),
  createLocation("Dyer (Copart)", 700, "INDIANA", "Copart"),
  createLocation("Fort Wayne (Copart)", 900, "INDIANA", "Copart"),
  createLocation("Hammond (Copart)", "Cotizar", "INDIANA", "Copart"),
  createLocation("Indianapolis (Copart/IAAI)", 670, "INDIANA", "Copart/IAAI"),
  createLocation("Indianapolis South (IAAI)", 670, "INDIANA", "IAAI"),
  createLocation("South Bend (IAAI)", 875, "INDIANA", "IAAI"),
  createLocation("Davenport (Copart/IAAI)", 950, "IOWA", "Copart/IAAI"),
  createLocation("Des Moines (Copart/IAAI)", 950, "IOWA", "Copart/IAAI"),
  createLocation("Kansas City (Copart/IAAI)", 675, "KANSAS", "Copart/IAAI"),
  createLocation("Wichita (Copart/IAAI)", 800, "KANSAS", "Copart/IAAI"),
  createLocation("Ashland (IAAI)", "Cotizar", "KENTUCKY", "IAAI"),
  createLocation("Bowling Green (IAAI)", 750, "KENTUCKY", "IAAI"),
  createLocation("Earlington (Copart)", 800, "KENTUCKY", "Copart"),
  createLocation("Lexington East/ West (Copart)", 675, "KENTUCKY", "Copart"),
  createLocation("Louisville (Copart/IAAI)", 675, "KENTUCKY", "Copart/IAAI"),
  createLocation("Louisville North (IAAI)", 675, "KENTUCKY", "IAAI"),
  createLocation("Paducah (IAAI)", 975, "KENTUCKY", "IAAI"),
  createLocation("Walton (Copart)", 625, "KENTUCKY", "Copart"),
  createLocation("Baton Rouge (Copart/IAAI)", 495, "LOUISIANA", "Copart/IAAI"),
  createLocation("Lafayette (IAAI)", 525, "LOUISIANA", "IAAI"),
  createLocation("New Orleans (Copart/IAAI)", 495, "LOUISIANA", "Copart/IAAI"),
  createLocation("New Orleans East (IAAI)", 495, "LOUISIANA", "IAAI"),
  createLocation("Shreveport (Copart/IAAI)", 675, "LOUISIANA", "Copart/IAAI"),
  createLocation("Minneapolis (Copart)", 795, "MINNESOTA", "Copart"),
  createLocation("Minneapolis North (Copart)", 795, "MINNESOTA", "Copart"),
  createLocation("Minneapolis/ St. Paul (IAAI)", 795, "MINNESOTA", "IAAI"),
  createLocation("St. Cloud (Copart)", 850, "MINNESOTA", "Copart"),

  // Northeast — Grúas (lote normal)
  createLocation("Hartford (Copart)", 335, "CONNECTICUT", "Copart"),
  createLocation("Hartford (IAAI)", 335, "CONNECTICUT", "IAAI"),
  createLocation("Hartford Springfield (Copart)", 350, "CONNECTICUT", "Copart"),
  createLocation("New Castle (IAAI)", 100, "DELAWARE", "IAAI"),
  createLocation("Seaford (Copart)", 200, "DELAWARE", "Copart"),
  createLocation("Lyman (Copart)", 575, "MAINE", "Copart"),
  createLocation("Portland Gorham (IAAI)", 575, "MAINE", "IAAI"),
  createLocation("Windham (Copart)", 625, "MAINE", "Copart"),
  createLocation("Baltimore (Copart/IAAI)", 185, "MARYLAND", "Copart/IAAI"),
  createLocation("Baltimore East (Copart)", 240, "MARYLAND", "Copart"),
  createLocation("Dundalk (IAAI)", 195, "MARYLAND", "IAAI"),
  createLocation("Metro DC (IAAI)", 195, "MARYLAND", "IAAI"),
  createLocation("Washington DC (Copart)", 200, "MARYLAND", "Copart"),
  createLocation("Elkton (IAAI)", 175, "MARYLAND", "IAAI"),
  createLocation("Boston North (Copart)", 495, "MASSACHUSETTS", "Copart"),
  createLocation("Boston-Shirley (IAAI)", 495, "MASSACHUSETTS", "IAAI"),
  createLocation("Boston South (Copart)", 480, "MASSACHUSETTS", "Copart"),
  createLocation("Freetown (Copart)", 425, "MASSACHUSETTS", "Copart"),
  createLocation("Taunton (IAAI)", 425, "MASSACHUSETTS", "IAAI"),
  createLocation("Templeton (IAAI)", 525, "MASSACHUSETTS", "IAAI"),
  createLocation("West Warren (Copart)", 495, "MASSACHUSETTS", "Copart"),
  createLocation("Detroit (Copart/IAAI)", 775, "MICHIGAN", "Copart/IAAI"),
  createLocation("Flint (Copart/IAAI)", 775, "MICHIGAN", "Copart/IAAI"),
  createLocation("Grand Rapids (IAAI)", 800, "MICHIGAN", "IAAI"),
  createLocation("Ionia (Copart)", "A cotizar", "MICHIGAN", "Copart"),
  createLocation("Kincheloe (Copart)", "A cotizar", "MICHIGAN", "Copart"),
  createLocation("Lansing (Copart)", 775, "MICHIGAN", "Copart"),
  createLocation("Wayland (Copart)", 775, "MICHIGAN", "Copart"),
  createLocation("Candia (Copart)", 500, "NEW HAMPSHIRE", "Copart"),
  createLocation("Manchester (IAAI)", 475, "NEW HAMPSHIRE", "IAAI"),

  // Mid-Atlantic — Grúas (lote normal)
  createLocation("Avenel (IAAI)", 170, "NEW JERSEY", "IAAI"),
  createLocation("Central New Jersey (IAAI)", 170, "NEW JERSEY", "IAAI"),
  createLocation("Englishtown (IAAI)", 180, "NEW JERSEY", "IAAI"),
  createLocation("Glassboro East/West (Copart)", 145, "NEW JERSEY", "Copart"),
  createLocation("Port Murray (IAAI)", 275, "NEW JERSEY", "IAAI"),
  createLocation("Sayreville (IAAI)", 235, "NEW JERSEY", "IAAI"),
  createLocation("Somerville (Copart)", 175, "NEW JERSEY", "Copart"),
  createLocation("Southern New Jersey (IAAI)", 160, "NEW JERSEY", "IAAI"),
  createLocation("Trenton (Copart)", 170, "NEW JERSEY", "Copart"),
  createLocation("Albany (Copart/IAAI)", 300, "NEW YORK", "Copart/IAAI"),
  createLocation("Buffalo (Copart)", 575, "NEW YORK", "Copart"),
  createLocation("Buffalo (IAAI)", 550, "NEW YORK", "IAAI"),
  createLocation("Long Island (Copart/IAAI)", 280, "NEW YORK", "Copart/IAAI"),
  createLocation("Newburgh (Copart/IAAI)", 260, "NEW YORK", "Copart/IAAI"),
  createLocation("Rochester (Copart/IAAI)", 415, "NEW YORK", "Copart/IAAI"),
  createLocation("Syracuse (IAAI/Copart)", 370, "NEW YORK", "Copart/IAAI"),
  createLocation("Akron-Canton (IAAI)", 575, "OHIO", "IAAI"),
  createLocation("Cincinnati (IAAI)", 575, "OHIO", "IAAI"),
  createLocation("Cincinnati South (IAAI)", 575, "OHIO", "IAAI"),
  createLocation("Cleveland (IAAI)", 575, "OHIO", "IAAI"),
  createLocation("Cleveland East/West (Copart)", 575, "OHIO", "Copart"),
  createLocation("Columbus (Copart/IAAI)", 575, "OHIO", "Copart/IAAI"),
  createLocation("Dayton (Copart/IAAI)", 575, "OHIO", "Copart/IAAI"),
  createLocation("Altoona (IAAI/Copart)", 330, "PENNSYLVANIA", "Copart/IAAI"),
  createLocation("Bridgeport (IAAI)", 120, "PENNSYLVANIA", "IAAI"),
  createLocation("Chambersburg (Copart)", 220, "PENNSYLVANIA", "Copart"),
  createLocation("Erie (IAAI)", 540, "PENNSYLVANIA", "IAAI"),
  createLocation("Harrisburg (Copart)", 170, "PENNSYLVANIA", "Copart"),
  createLocation("Philadelphia (Copart)", 145, "PENNSYLVANIA", "Copart"),
  createLocation("Philadelphia (IAAI)", 120, "PENNSYLVANIA", "IAAI"),
  createLocation("Philadelphia East (Copart)", 145, "PENNSYLVANIA", "Copart"),
  createLocation("Pittsburgh (IAAI)", 375, "PENNSYLVANIA", "IAAI"),
  createLocation("Pittsburgh East/South/West (Copart)", 375, "PENNSYLVANIA", "Copart"),
  createLocation("Pittsburgh-North (IAAI/Copart)", 375, "PENNSYLVANIA", "Copart/IAAI"),
  createLocation("Scranton (IAAI/Copart)", 190, "PENNSYLVANIA", "Copart/IAAI"),
  createLocation("York Haven (Copart)", 175, "PENNSYLVANIA", "Copart"),
  createLocation("York Springs (IAAI)", 190, "PENNSYLVANIA", "IAAI"),

  // Additional states — Grúas (lote normal)
  createLocation("Exeter (Copart)", 425, "RHODE ISLAND", "Copart"),
  createLocation("Providence (IAAI)", 400, "RHODE ISLAND", "IAAI"),
  createLocation("Burlington (IAAI)", 725, "VERMONT", "IAAI"),
  createLocation("Rutland (Copart)", 725, "VERMONT", "Copart"),
  createLocation("Culpeper (IAAI)", 300, "VIRGINIA", "IAAI"),
  createLocation("Danville (Copart)", 495, "VIRGINIA", "Copart"),
  createLocation("Fredericksburg (Copart)", 325, "VIRGINIA", "Copart"),
  createLocation("Hampton (Copart)", 395, "VIRGINIA", "Copart"),
  createLocation("Northern Virginia (IAAI)", 295, "VIRGINIA", "IAAI"),
  createLocation("Pulaski (IAAI)", 525, "VIRGINIA", "IAAI"),
  createLocation("Richmond (Copart/IAAI)", 320, "VIRGINIA", "Copart/IAAI"),
  createLocation("Richmond East (Copart)", 375, "VIRGINIA", "Copart"),
  createLocation("Roanoke (IAAI)", 525, "VIRGINIA", "IAAI"),
  createLocation("Suffolk (IAAI)", 450, "VIRGINIA", "IAAI"),
  createLocation("Tidewater (IAAI)", 395, "VIRGINIA", "IAAI"),
  createLocation("Appleton (IAAI)", 825, "WISCONSIN", "IAAI"),
  createLocation("Madison South (Copart)", 825, "WISCONSIN", "Copart"),
  createLocation("Milwaukee (IAAI)", 825, "WISCONSIN", "IAAI"),
  createLocation("Milwaukee South (Copart)", 800, "WISCONSIN", "Copart"),
  createLocation("Portage (IAAI)", 825, "WISCONSIN", "IAAI"),
  createLocation("Buckhannon (IAAI)", 550, "WEST VIRGINIA", "IAAI"),
  createLocation("Charleston (Copart)", 550, "WEST VIRGINIA", "Copart"),
  createLocation("Shady Spring (IAAI)", 550, "WEST VIRGINIA", "IAAI"),

  // Northeast — Sub-lotes / offsite
  createSublot("Hartford New Britain (Copart)*", 300, "CONNECTICUT", "Copart"),
  createSublot("Seaford Fruitland (Copart)*", 300, "DELAWARE", "Copart"),
  createSublot("Baltimore East Laurel (Copart)*", 230, "MARYLAND", "Copart"),
  createSublot("White Marsh (Copart)*", 250, "MARYLAND", "Copart"),
  createSublot("White Plaine Washington DC (Copart)*", 225, "MARYLAND", "Copart"),
  createSublot("Boston North Hudson (Copart)*", 525, "MASSACHUSETTS", "Copart"),
  createSublot("Taunton uxbridge (IAAI)*", 475, "MASSACHUSETTS", "IAAI"),
  createSublot("Detroit off site (IAAI)*", 825, "MICHIGAN", "IAAI"),
  createSublot("Chambersburg (Copart)*", 220, "NEW JERSEY", "Copart"),
  createSublot("Coplay (Copart)*", 225, "NEW JERSEY", "Copart"),
  createSublot("Jobstown (Copart)*", 225, "NEW JERSEY", "Copart"),
  createSublot("Somerville Sublot York Haven (Copart)*", 200, "NEW JERSEY", "Copart"),
  createSublot("Somerville Richlandtown (Copart)*", 225, "NEW JERSEY", "Copart"),
  createSublot("White Plaine (Copart)*", 250, "NEW JERSEY", "Copart"),
  createSublot("White Plaine Somerville (Copart)*", 250, "NEW JERSEY", "Copart"),
  createSublot("Albany Schenectady (IAAI)*", 350, "NEW YORK", "IAAI"),
  createSublot("Alden (Copart)*", 650, "NEW YORK", "Copart"),
  createSublot("Amsterdam (Copart)*", 425, "NEW YORK", "Copart"),
  createSublot("Brocton (Copart)*", "A cotizar", "NEW YORK", "Copart"),
  createSublot("Buffalo Vulcan (IAAI)*", 550, "NEW YORK", "IAAI"),
  createSublot("Medford (IAAI)*", 330, "NEW YORK", "IAAI"),
  createSublot("Monticello (IAAI)*", 325, "NEW YORK", "IAAI"),
  createSublot("Newburgh Route (Copart)*", 275, "NEW YORK", "Copart"),
  createSublot("Staten Island (IAAI)*", 325, "NEW YORK", "IAAI"),
  createSublot("Philadelphia East sub lot (Copart)*", 145, "PENNSYLVANIA", "Copart"),
  createSublot("Philadelphia East Malvern (Copart)*", 225, "PENNSYLVANIA", "Copart"),
  createSublot("Pittsburgh West Adamsburg (Copart)*", 425, "PENNSYLVANIA", "Copart"),
];

for (var i = 0; i < LOCATIONS.length; i++) {
  LOCATIONS[i].id = String(i);
}

function formatLocationLabel(location) {
  var price = location.quoteRequired ? "Cotizar" : "$" + location.precio.toFixed(2);
  return location.lugar + " — " + location.estado + " — " + location.compania + " — " + price;
}

function getLocationSearchText(location) {
  var text =
    location.lugar +
    " " +
    location.estado +
    " " +
    location.compania +
    " " +
    (location.quoteRequired ? "cotizar" : String(location.precio));

  if (location.isSublot) {
    text += " sublot sub-lote sub lote offsite";
  }

  return text.toLowerCase();
}

function findLocationById(id) {
  for (var i = 0; i < LOCATIONS.length; i++) {
    if (LOCATIONS[i].id === id) {
      return LOCATIONS[i];
    }
  }
  return null;
}

function filterLocations(query) {
  var normalized = query.trim().toLowerCase();
  if (!normalized) {
    return LOCATIONS.slice(0, 30);
  }

  var matches = LOCATIONS.filter(function (location) {
    return getLocationSearchText(location).indexOf(normalized) !== -1;
  });

  if (/sublot|sub-lote|sub lote|offsite/.test(normalized)) {
    matches = matches.filter(function (location) {
      return location.isSublot;
    });
  }

  return matches.slice(0, 30);
}

var CALIFORNIA_DEPARTURE_STATES = {
  ARIZONA: true,
  CALIFORNIA: true,
  COLORADO: true,
  HAWAII: true,
  IDAHO: true,
  MONTANA: true,
  NEVADA: true,
  "NEW MEXICO": true,
  OREGON: true,
  UTAH: true,
  WASHINGTON: true,
  WASHINTONG: true,
};

var FLORIDA_DEPARTURE_STATES = {
  ALABAMA: true,
  ARKANSAS: true,
  FLORIDA: true,
  GEORGIA: true,
  ILLINOIS: true,
  INDIANA: true,
  IOWA: true,
  KANSAS: true,
  KENTUCKY: true,
  LOUISIANA: true,
  MINNESOTA: true,
  MINESSOTA: true,
  MISSISSIPPI: true,
  MISSISSIPI: true,
  MISSOURI: true,
  "NORTH CAROLINA": true,
  OKLAHOMA: true,
  "SOUTH CAROLINA": true,
  TENNESSEE: true,
  TEXAS: true,
};

var PHILADELPHIA_DEPARTURE_STATES = {
  CONNECTICUT: true,
  DELAWARE: true,
  MAINE: true,
  MARYLAND: true,
  MASSACHUSETTS: true,
  MASSACHUSETT: true,
  MICHIGAN: true,
  "NEW HAMPSHIRE": true,
  "NEW JERSEY": true,
  "NEW YORK": true,
  OHIO: true,
  PENNSYLVANIA: true,
  "RHODE ISLAND": true,
  VERMONT: true,
  VIRGINIA: true,
  WISCONSIN: true,
  "WEST VIRGINIA": true,
};

function getShippingOriginForState(estado) {
  if (CALIFORNIA_DEPARTURE_STATES[estado]) {
    return "california";
  }
  if (FLORIDA_DEPARTURE_STATES[estado]) {
    return "florida";
  }
  if (PHILADELPHIA_DEPARTURE_STATES[estado]) {
    return "philadelphia";
  }
  return null;
}

function getShippingOriginLabel(origin) {
  if (origin === "california") {
    return "California";
  }
  if (origin === "florida") {
    return "Florida";
  }
  if (origin === "philadelphia") {
    return "Philadelphia";
  }
  return origin;
}
