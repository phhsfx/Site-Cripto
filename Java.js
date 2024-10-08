
const cryptoTableBody = document.getElementById('crypto-table-body');


async function fetchCryptoData() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false');
        const data = await response.json();
        displayCryptoData(data);
    } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
    }
}


function displayCryptoData(cryptos) {
    cryptos.forEach(crypto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${crypto.name}</td>
            <td>${crypto.symbol.toUpperCase()}</td>
            <td>R$ ${crypto.current_price.toFixed(2)}</td>
            <td>${crypto.price_change_percentage_24h.toFixed(2)}%</td>
        `;
        cryptoTableBody.appendChild(row);
    });
}


fetchCryptoData();
