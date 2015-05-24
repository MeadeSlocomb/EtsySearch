$(document).ready( function () {


  var totalResults = whiskeySearch.count;
  $("#totalResults").html("(" + totalResults + " Results)");


  returnedListings = whiskeySearch.results.map(function(item) {
      return {
        "picture": item.Images[0].url_170x135,
        "title": item.title,
        "price": item.currency_code + item.price,
        "maker": item.Shop.shop_name
      };
  });

  var picture, title, maker, price;

  returnedListings.forEach (function (item) {
    picture = '<img class="listingPic" src="' + item.picture + '"></img>';
    title = '<span class="listingTitle">' + item.title + '</span>';
    maker = '<span class="listingShop">' + item.maker + '</span>';
    price = '<span class="listingPrice">' + item.price + '</span>';
    $('#searchResults').append('<div class="listing">' + picture + '<div class="listingText">' + title + maker + price + '</div></div>');
  });
});
