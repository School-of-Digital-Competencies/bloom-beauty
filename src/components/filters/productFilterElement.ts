import './productFilterElement.css'

export const filterElement = (): string => {

    return `
    <div class="filters-container">
        <h1 class="filters-title">FILTERS</h1>
        
        <!-- Product Type Filter -->
        <div class="filter-group">
            <div class="filter-header">
                <h2 class="filter-title">Product Type</h2>
                <div class="arrow-ct-pg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path d="M10.9375 1L5.9375 6L0.9375 1" stroke="#B0A6BD" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        
        <div class="filter-group">
            <div class="filter-header">
                <h2 class="filter-title">Ingredient Type</h2>
                <div class="arrow-ct-pg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path d="M10.9375 1L5.9375 6L0.9375 1" stroke="#B0A6BD" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
        
        <div class="filter-group">
            <div class="filter-header">
                <h2 class="filter-title">Skin Type</h2>
                 <div class="arrow-ct-pg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path d="M10.9375 1L5.9375 6L0.9375 1" stroke="#B0A6BD" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="filter-content">
                <div class="checkbox-item">
                    <input type="checkbox" id="all">
                    <label for="all">All</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="combination">
                    <label for="combination">Combination/Oily</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="dry">
                    <label for="dry">Dry</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="normal">
                    <label for="normal">Normal</label>
                </div>
                <div class="checkbox-item">
                    <input type="checkbox" id="sensitive">
                    <label for="sensitive">Sensitive</label>
                </div>
            </div>
        </div>
        
        <!-- Price Range Filter -->
        <div class="filter-group">
            <div class="filter-header">
                <h2 class="filter-title">Price Range</h2>
                <div class="arrow-ct-pg">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7" fill="none">
                    <path d="M10.9375 1L5.9375 6L0.9375 1" stroke="#B0A6BD" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="filter-content">
                <div class="radio-item">
                    <input type="radio" name="price" id="under25">
                    <label for="under25">Under $25</label>
                </div>
                <div class="radio-item">
                    <input type="radio" name="price" id="25to50">
                    <label for="25to50">$25 - $50</label>
                </div>
                <div class="radio-item">
                    <input type="radio" name="price" id="50to100">
                    <label for="50to100">$50 - $100</label>
                </div>
                
                <div class="price-inputs">
                    <div class="price-dot"></div>
                    <div class="price-input">
                        <input type="text" placeholder=" $ Min">
                    </div>
                    <div class="price-input">

                        <input type="text" placeholder=" $ Max">
                    </div>
                </div>
            </div>
        </div>
        
        <button class="apply-button">Apply</button>
    </div>
    `
};

