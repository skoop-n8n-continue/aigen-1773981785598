document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
  {
    "name": "PUFFY",
    "items": [
      {
        "name": "PINK TAFFY 7G PREMIUM INDOOR FLOWER",
        "brand": "PUFFY",
        "thc": "26.22%",
        "price": "$45",
        "weight": "7g",
        "typeClass": "border-hybrid"
      },
      {
        "name": "BLUE DREAM 7G PREMIUM INDOOR FLOWER",
        "brand": "PUFFY",
        "thc": "33.15%",
        "price": "$45",
        "weight": "7g",
        "typeClass": "border-sativa"
      },
      {
        "name": "DIRTY SOUTH GUMBO 7G PREMIUM INDOOR FLOWER",
        "brand": "PUFFY",
        "thc": "36.59%",
        "price": "$45",
        "weight": "7g",
        "typeClass": "border-indica"
      },
      {
        "name": "DIRTY ZPRITE 7G PREMIUM INDOOR FLOWER",
        "brand": "PUFFY",
        "thc": "33.9%",
        "price": "$45",
        "weight": "7g",
        "typeClass": "border-sativa"
      },
      {
        "name": "EXOTICS JAMAICAN GELATO 7G PREMIUM INDOOR FLOWER",
        "brand": "PUFFY",
        "thc": "31.81%",
        "price": "$45",
        "weight": "7g",
        "typeClass": "border-hybrid"
      },
      {
        "name": "GASTRO POP 7G PREMIUM INDOOR FLOWER",
        "brand": "PUFFY",
        "thc": "31.26%",
        "price": "$45",
        "weight": "7g",
        "typeClass": "border-indica"
      },
      {
        "name": "GELATO 33 7G PREMIUM INDOOR FLOWER",
        "brand": "PUFFY",
        "thc": "31.17%",
        "price": "$45",
        "weight": "7g",
        "typeClass": "border-hybrid"
      },
      {
        "name": "GUAVA HAZE 7G PREMIUM INDOOR FLOWER",
        "brand": "PUFFY",
        "thc": "30.88%",
        "price": "$45",
        "weight": "7g",
        "typeClass": "border-sativa"
      }
    ]
  },
  {
    "name": "GRRIFTERS",
    "items": [
      {
        "name": "BIG LEAGUE CHOO 7G PREMIUM INDOOR FLOWER",
        "brand": "GRIFTERS",
        "thc": "30.63%",
        "price": "$49",
        "weight": "7g",
        "typeClass": "border-hybrid"
      },
      {
        "name": "BUBBLEGUM OG 7G PREMIUM INDOOR FLOWER",
        "brand": "GRIFTERS",
        "thc": "31.52%",
        "price": "$49",
        "weight": "7g",
        "typeClass": "border-indica"
      },
      {
        "name": "LEMON CHERRY GELATO 7G PREMIUM INDOOR FLOWER",
        "brand": "GRIFTERS",
        "thc": "30.71%",
        "price": "$49",
        "weight": "7g",
        "typeClass": "border-hybrid"
      },
      {
        "name": "SLAP CITY GAS 7G PREMIUM INDOOR FLOWER",
        "brand": "GRIFTERS",
        "thc": "32.09%",
        "price": "$49",
        "weight": "7g",
        "typeClass": "border-indica"
      }
    ]
  }
];

    const scrollContent = document.getElementById('scroll-content');

    function renderMenu() {
        let html = '';
        menuData.forEach(category => {
            html += `
                <div class="category">
                    <div class="category-header">
                        <span class="category-name">${category.name}</span>
                        <span class="header-thc">THC</span>
                        <span class="header-price">Price</span>
                    </div>
                    <div class="category-items">
            `;

            category.items.forEach(item => {
                html += `
                        <div class="item-row ${item.typeClass}">
                            <div class="item-name-container">
                                <span class="item-name">${item.name}</span>
                                ${item.brand ? `<span class="item-brand">${item.brand}</span>` : ''}
                            </div>
                            <div class="item-thc">${item.thc}</div>
                            <div class="item-price-container">
                                <span class="item-price">${item.price}</span>
                                <span class="item-weight">${item.weight}</span>
                            </div>
                        </div>
                `;
            });

            html += `
                    </div>
                </div>
            `;
        });

        scrollContent.innerHTML = html;
    }

    renderMenu();

    // Auto-scrolling logic
    setTimeout(() => {
        const container = document.getElementById('menu-container');
        const containerHeight = container.clientHeight;
        const contentHeight = scrollContent.clientHeight;

        if (contentHeight > containerHeight) {
            // Clone content for seamless looping
            scrollContent.innerHTML += scrollContent.innerHTML;

            let yPos = 0;
            const scrollSpeed = 0.5; // pixels per frame

            function animate() {
                yPos -= scrollSpeed;

                if (Math.abs(yPos) >= contentHeight) {
                    yPos = 0;
                }

                scrollContent.style.transform = `translateY(${yPos}px)`;
                requestAnimationFrame(animate);
            }

            setTimeout(() => {
                requestAnimationFrame(animate);
            }, 3000);
        }
    }, 500);
});