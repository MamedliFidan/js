const data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

const tbody = document.querySelector("tbody");

for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = data[i].name;

    const tdTicker = document.createElement("td");
    tdTicker.textContent = data[i].ticker;

    const tdValue = document.createElement("td");
    tdValue.textContent = data[i].value;

    const tdChange = document.createElement("td");
    tdChange.textContent = data[i].change;

    tr.appendChild(tdName);
    tr.appendChild(tdTicker);
    tr.appendChild(tdValue);
    tr.appendChild(tdChange);

    tbody.appendChild(tr);

    
}
const rows = document.querySelectorAll("tbody tr"); // берём только тело таблицы

rows.forEach(row => {
    const changeTd = row.children[3]; // 4-я колонка (change)
    if (changeTd.textContent.startsWith("-")) {
        changeTd.style.color = "red"; // красим отрицательные
    } else  {
        changeTd.style.color = "green"; // можно положительные сделать зелёными
    }
});

