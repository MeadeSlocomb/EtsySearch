$(document).ready( function () {


  var totalResults = whiskeySearch.count;
  $("#totalResults").html("(" + totalResults + " Results)");


  returnedListings = whiskeySearch.results.map(function(item) {
      return {
        "picture": item.Images[0].url_170x135,
        "title": item.title,
        "price": '$' + item.price + " " + item.currency_code,
        "maker": item.Shop.shop_name
      };
  });

  var picture, title, maker, price;

  returnedListings.forEach (function (item) {
    picture = '<img class="listingPic" src="' + item.picture + '"></img>';
    title = '<span class="listingTitle">' + item.title + '</span>';
    maker = '<span class="listingShop">' + item.maker + '</span>';
    price = '<span class="listingPrice">' + item.price + '</span>';
    $('#searchResults').append('<div class="listing">' + picture + '<div class="listingText">' + '<img class="hoverIcon hover" src="images/heart.png"></img><img class="hoverIconR hover" src="images/hamburger.png"></img>' + title + maker + price + '</div></div>');
  });
});
