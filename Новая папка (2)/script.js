window.onload = function() {
    const tableContainer = document.querySelector('.table-container');
    tableContainer.style.opacity = 1;
    tableContainer.style.transform = 'translateY(0)';

    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((row, index) => {
        row.style.animationDelay = `${0.1 * index}s`;
        row.classList.add('animate__animated', 'animate__fadeIn');
    });


    function formatCurrency(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ' ₽';
    }

    const priceCells = document.querySelectorAll('.price-cell');
    priceCells.forEach(cell => {
      const priceValue = cell.querySelector('.price-value');
      const formattedPrice = formatCurrency(parseInt(priceValue.textContent,10));
       priceValue.textContent = formattedPrice;
      });
};