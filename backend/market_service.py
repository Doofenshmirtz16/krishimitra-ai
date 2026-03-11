def get_market_price(crop):

    prices = {
        "tomato": 25,
        "wheat": 18,
        "rice": 22
    }

    return prices.get(crop, "No data available")