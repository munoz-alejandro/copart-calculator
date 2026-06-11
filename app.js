const GATE_FEE = 95;
const ENVIRONMENTAL_FEE = 15;
const TITLE_PICKUP_FEE = 20;

const BUYER_FEE_TIERS = [
  { start: 0, end: 49.99, nonClean: 25, clean: 25 },
  { start: 50, end: 99.99, nonClean: 45, clean: 45 },
  { start: 100, end: 199.99, nonClean: 80, clean: 80 },
  { start: 200, end: 299.99, nonClean: 130, clean: 120 },
  { start: 300, end: 349.99, nonClean: 137.5, clean: 120 },
  { start: 350, end: 399.99, nonClean: 145, clean: 120 },
  { start: 400, end: 449.99, nonClean: 175, clean: 160 },
  { start: 450, end: 499.99, nonClean: 185, clean: 160 },
  { start: 500, end: 549.99, nonClean: 205, clean: 185 },
  { start: 550, end: 599.99, nonClean: 210, clean: 185 },
  { start: 600, end: 699.99, nonClean: 240, clean: 210 },
  { start: 700, end: 799.99, nonClean: 270, clean: 230 },
  { start: 800, end: 899.99, nonClean: 295, clean: 250 },
  { start: 900, end: 999.99, nonClean: 320, clean: 275 },
  { start: 1000, end: 1199.99, nonClean: 375, clean: 325 },
  { start: 1200, end: 1299.99, nonClean: 395, clean: 350 },
  { start: 1300, end: 1399.99, nonClean: 410, clean: 365 },
  { start: 1400, end: 1499.99, nonClean: 430, clean: 380 },
  { start: 1500, end: 1599.99, nonClean: 445, clean: 390 },
  { start: 1600, end: 1699.99, nonClean: 465, clean: 410 },
  { start: 1700, end: 1799.99, nonClean: 485, clean: 420 },
  { start: 1800, end: 1999.99, nonClean: 510, clean: 440 },
  { start: 2000, end: 2399.99, nonClean: 535, clean: 470 },
  { start: 2400, end: 2499.99, nonClean: 570, clean: 480 },
  { start: 2500, end: 2999.99, nonClean: 610, clean: 500 },
  { start: 3000, end: 3499.99, nonClean: 655, clean: 600 },
  { start: 3500, end: 3999.99, nonClean: 705, clean: 675 },
  { start: 4000, end: 4499.99, nonClean: 725, clean: 710 },
  { start: 4500, end: 4999.99, nonClean: 750, clean: 750 },
  { start: 5000, end: 5499.99, nonClean: 775, clean: 750 },
  { start: 5500, end: 5999.99, nonClean: 800, clean: 750 },
  { start: 6000, end: 6499.99, nonClean: 825, clean: 800 },
  { start: 6500, end: 6999.99, nonClean: 845, clean: 800 },
  { start: 7000, end: 7499.99, nonClean: 880, clean: 800 },
  { start: 7500, end: 7999.99, nonClean: 900, clean: 815 },
  { start: 8000, end: 8499.99, nonClean: 925, clean: 840 },
  { start: 8500, end: 8999.99, nonClean: 945, clean: 840 },
  { start: 9000, end: 9999.99, nonClean: 945, clean: 840 },
  { start: 10000, end: 10499.99, nonClean: 1000, clean: 850 },
  { start: 10500, end: 10999.99, nonClean: 1000, clean: 850 },
  { start: 11000, end: 11499.99, nonClean: 1000, clean: 850 },
  { start: 11500, end: 11999.99, nonClean: 1000, clean: 850 },
  { start: 12000, end: 12499.99, nonClean: 1000, clean: 850 },
  { start: 12500, end: 14999.99, nonClean: 1000, clean: 850 },
  { start: 15000, end: Infinity, nonCleanRate: 0.075, cleanRate: 0.0725 },
];

const VIRTUAL_BID_FEE_TIERS = [
  { start: 0, end: 99.99, fee: 0 },
  { start: 100, end: 499.99, fee: 50 },
  { start: 500, end: 999.99, fee: 65 },
  { start: 1000, end: 1499.99, fee: 85 },
  { start: 1500, end: 1999.99, fee: 95 },
  { start: 2000, end: 3999.99, fee: 110 },
  { start: 4000, end: 5999.99, fee: 125 },
  { start: 6000, end: 7999.99, fee: 145 },
  { start: 8000, end: Infinity, fee: 160 },
];

const SHIPPING_DESTINATIONS = {
  california: [{ value: "coalsa", label: "Coalsa / Centralsa" }],
  florida: [
    { value: "coalsa", label: "Coalsa / Centralsa" },
    { value: "santo-tomas-aldegua", label: "Santo Tomás y Aldegua" },
    { value: "puerto-barrios", label: "Puerto Barrios" },
  ],
  philadelphia: [
    { value: "santo-tomas-castilla", label: "Santo Tomás de Castilla" },
    { value: "aldegua", label: "Aldegua" },
    { value: "coalsa", label: "Coalsa / Centralsa" },
  ],
};

const SEA_FREIGHT_RATES = {
  small: {
    "california-coalsa": 1270,
    "florida-coalsa": 1170,
    "florida-santo-tomas-aldegua": 970,
    "florida-puerto-barrios": 1002,
    "philadelphia-santo-tomas-castilla": 950,
    "philadelphia-aldegua": 950,
    "philadelphia-coalsa": 1270,
  },
  special: {
    "california-coalsa": 1420,
    "florida-coalsa": 1240,
    "florida-santo-tomas-aldegua": 1025,
    "florida-puerto-barrios": 1057,
    "philadelphia-santo-tomas-castilla": 1025,
    "philadelphia-aldegua": 1025,
    "philadelphia-coalsa": 1420,
  },
  medium: {
    "california-coalsa": 1420,
    "florida-coalsa": 1240,
    "florida-santo-tomas-aldegua": 1025,
    "florida-puerto-barrios": 1057,
    "philadelphia-santo-tomas-castilla": 1125,
    "philadelphia-aldegua": 1125,
    "philadelphia-coalsa": 1420,
  },
  large: {
    "california-coalsa": 1470,
    "florida-coalsa": 1390,
    "florida-santo-tomas-aldegua": 1270,
    "florida-puerto-barrios": 1302,
    "philadelphia-santo-tomas-castilla": 1275,
    "philadelphia-aldegua": 1275,
    "philadelphia-coalsa": 1470,
  },
  xlarge: {
    "california-coalsa": 1670,
    "florida-coalsa": 1570,
    "florida-santo-tomas-aldegua": 1425,
    "florida-puerto-barrios": 1457,
    "philadelphia-santo-tomas-castilla": 1425,
    "philadelphia-aldegua": 1425,
    "philadelphia-coalsa": 1770,
  },
  motorcycle: {
    "california-coalsa": 325,
    "florida-coalsa": 325,
    "florida-santo-tomas-aldegua": 325,
    "florida-puerto-barrios": 325,
    "philadelphia-santo-tomas-castilla": 325,
    "philadelphia-aldegua": 325,
    "philadelphia-coalsa": 325,
  },
};

function findTier(tiers, salePrice) {
  return tiers.find((tier) => salePrice >= tier.start && salePrice <= tier.end);
}

function getBuyerFee(salePrice, titleType) {
  const tier = findTier(BUYER_FEE_TIERS, salePrice);
  if (!tier) {
    throw new Error("No buyer fee tier found for sale price " + salePrice);
  }

  if (tier.nonCleanRate != null) {
    const rate = titleType === "clean" ? tier.cleanRate : tier.nonCleanRate;
    return salePrice * rate;
  }

  return titleType === "clean" ? tier.clean : tier.nonClean;
}

function getVirtualBidFee(salePrice) {
  const tier = findTier(VIRTUAL_BID_FEE_TIERS, salePrice);
  if (!tier) {
    throw new Error("No virtual bid fee tier found for sale price " + salePrice);
  }

  return tier.fee;
}

function getSeaFreight(vehicleSize, origin, destination) {
  if (vehicleSize === "xxlarge") {
    return { amount: null, quoteRequired: true };
  }

  const routeKey = origin + "-" + destination;
  const rates = SEA_FREIGHT_RATES[vehicleSize];
  const amount = rates ? rates[routeKey] : null;

  if (amount == null) {
    return { amount: null, quoteRequired: true };
  }

  return { amount, quoteRequired: false };
}

function calculateCarFees(salePrice, titleType, vehicleSize, origin, destination, location) {
  const buyerFee = getBuyerFee(salePrice, titleType);
  const virtualBidFee = getVirtualBidFee(salePrice);
  const totalAuctionFees = buyerFee + GATE_FEE + ENVIRONMENTAL_FEE + TITLE_PICKUP_FEE + virtualBidFee;
  const seaFreight = getSeaFreight(vehicleSize, origin, destination);
  const lugarFee = location.quoteRequired ? 0 : location.precio;
  const seaFreightAmount = seaFreight.amount || 0;

  const shippingSubtotal = lugarFee + seaFreightAmount;

  return {
    salePrice,
    buyerFee,
    gateFee: GATE_FEE,
    environmentalFee: ENVIRONMENTAL_FEE,
    titlePickupFee: TITLE_PICKUP_FEE,
    virtualBidFee,
    totalAuctionFees,
    auctionSubtotal: salePrice + totalAuctionFees,
    lugarFee: location.quoteRequired ? null : location.precio,
    lugarQuoteRequired: location.quoteRequired,
    lugarLabel: formatLocationLabel(location),
    seaFreight: seaFreight.amount,
    seaFreightQuoteRequired: seaFreight.quoteRequired,
    shippingSubtotal,
    totalCost: salePrice + totalAuctionFees + shippingSubtotal,
  };
}

const form = document.getElementById("calculator-form");
const resultsEmpty = document.getElementById("results-empty");
const resultsContent = document.getElementById("results-content");
const shippingOrigin = document.getElementById("shipping-origin");
const shippingDestination = document.getElementById("shipping-destination");
const lugarSearch = document.getElementById("lugar-search");
const lugarOptions = document.getElementById("lugar-options");
const lugarSelected = document.getElementById("lugar-selected");
const lugarError = document.getElementById("lugar-error");

let selectedLocation = null;

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function setResult(id, value) {
  document.getElementById(id).textContent = currency.format(value);
}

function setResultText(id, text) {
  document.getElementById(id).textContent = text;
}

function populateDestinations(origin) {
  const destinations = SHIPPING_DESTINATIONS[origin];
  shippingDestination.innerHTML = destinations
    .map(function (dest) {
      return '<option value="' + dest.value + '">' + dest.label + "</option>";
    })
    .join("");
}

function applyShippingOriginForLocation(location) {
  const origin = getShippingOriginForState(location.estado);
  if (!origin) {
    return null;
  }

  const previousDestination = shippingDestination.value;
  shippingOrigin.value = origin;
  populateDestinations(origin);

  const destinations = SHIPPING_DESTINATIONS[origin];
  const destinationStillValid = destinations.some(function (dest) {
    return dest.value === previousDestination;
  });

  if (destinationStillValid) {
    shippingDestination.value = previousDestination;
  }

  return origin;
}

shippingOrigin.addEventListener("change", function () {
  populateDestinations(shippingOrigin.value);
});

populateDestinations(shippingOrigin.value);

function setComboboxOpen(isOpen) {
  lugarSearch.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function renderLocationOptions(query) {
  const matches = filterLocations(query);
  lugarOptions.innerHTML = matches
    .map(function (location) {
      const price = location.quoteRequired ? "Cotizar" : currency.format(location.precio);
      const sublotTag = location.isSublot ? "Sub-lote · " : "";
      return (
        '<li role="option" data-id="' +
        location.id +
        '">' +
        '<span class="option-main">' +
        location.lugar +
        "</span>" +
        '<span class="option-meta">' +
        sublotTag +
        location.estado +
        " · " +
        location.compania +
        " · " +
        price +
        "</span>" +
        "</li>"
      );
    })
    .join("");

  lugarOptions.classList.toggle("hidden", matches.length === 0);
  setComboboxOpen(matches.length > 0);
}

function selectLocation(location) {
  selectedLocation = location;
  lugarSearch.value = location.lugar;
  lugarError.classList.add("hidden");
  lugarOptions.classList.add("hidden");
  setComboboxOpen(false);

  const autoOrigin = applyShippingOriginForLocation(location);
  let selectedText = formatLocationLabel(location);

  if (autoOrigin) {
    selectedText +=
      " · Puerto de salida: " + getShippingOriginLabel(autoOrigin) + " (automático)";
  }

  lugarSelected.textContent = selectedText;
  lugarSelected.classList.remove("hidden");
}

lugarSearch.addEventListener("input", function () {
  selectedLocation = null;
  lugarSelected.classList.add("hidden");
  lugarError.classList.add("hidden");
  renderLocationOptions(lugarSearch.value);
});

lugarSearch.addEventListener("focus", function () {
  renderLocationOptions(lugarSearch.value);
});

lugarOptions.addEventListener("mousedown", function (event) {
  const option = event.target.closest("[data-id]");
  if (!option) {
    return;
  }

  event.preventDefault();
  const location = findLocationById(option.getAttribute("data-id"));
  if (location) {
    selectLocation(location);
  }
});

document.addEventListener("click", function (event) {
  if (!document.getElementById("lugar-combobox").contains(event.target)) {
    lugarOptions.classList.add("hidden");
    setComboboxOpen(false);
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!selectedLocation) {
    lugarError.classList.remove("hidden");
    lugarSearch.focus();
    return;
  }

  const salePrice = parseFloat(document.getElementById("sale-price").value);
  const titleType = document.getElementById("title-type").value;
  const vehicleSize = document.getElementById("vehicle-size").value;
  const origin = shippingOrigin.value;
  const destination = shippingDestination.value;

  const breakdown = calculateCarFees(
    salePrice,
    titleType,
    vehicleSize,
    origin,
    destination,
    selectedLocation
  );
  const note = document.getElementById("quote-note");
  const notes = [];

  setResult("sale-price-result", breakdown.salePrice);
  setResult("buyer-fee", breakdown.buyerFee);
  setResult("gate-fee", breakdown.gateFee);
  setResult("environmental-fee", breakdown.environmentalFee);
  setResult("title-pickup-fee", breakdown.titlePickupFee);
  setResult("virtual-bid-fee", breakdown.virtualBidFee);
  setResult("total-fees", breakdown.totalAuctionFees);
  setResult("auction-subtotal", breakdown.auctionSubtotal);

  if (breakdown.lugarQuoteRequired) {
    setResultText("lugar-fee", "A cotizar");
    notes.push("El cargo de grúa para " + breakdown.lugarLabel + " requiere cotización.");
  } else {
    setResult("lugar-fee", breakdown.lugarFee);
  }

  if (breakdown.seaFreightQuoteRequired) {
    setResultText("sea-freight", "A cotizar");
    notes.push("El flete marítimo para vehículos de más de 18 pies requiere cotización.");
  } else {
    setResult("sea-freight", breakdown.seaFreight);
  }

  setResult("shipping-subtotal", breakdown.shippingSubtotal);

  if (notes.length) {
    note.textContent = notes.join(" ") + " Los subtotales y el total no incluyen partidas a cotizar.";
    note.classList.remove("hidden");
  } else {
    note.classList.add("hidden");
  }

  setResult("total-cost", breakdown.totalCost);

  resultsEmpty.classList.add("hidden");
  resultsContent.classList.remove("hidden");
});
