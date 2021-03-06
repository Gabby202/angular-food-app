"use strict";
var Restaurant = (function () {
    function Restaurant(id, name, category, price, address, openingHours, contact, city, county, score, image) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.address = address;
        this.openingHours = openingHours;
        this.contact = contact;
        this.city = city;
        this.county = county;
        this.score = score;
        this.image = image;
    }
    return Restaurant;
}());
exports.Restaurant = Restaurant;
var RestaurantService = (function () {
    function RestaurantService() {
    }
    RestaurantService.prototype.getRestaurants = function () {
        var restaurants = [
            new Restaurant(0, "Time Restaurant at Carlton Hotel Blanchardstown", "A La Carte", "Average", "Church Road, Tyrrelstown , Blanchardstown, Dublin", "Sun 08:00 AM-09:00 PM", "01 8275600", "Blanchardstown", "Dublin", 4.5, "image0.jpg"),
            new Restaurant(1, "Aqua Restaurant", "Seafood", "Expensive", "1 West Pier, Howth, Dublin", "Mon-Sun 01:00 PM-10:00 PM", "01 832 0690", "Howth", "Dublin", 4.5, "image1.jpg"),
            new Restaurant(2, "Abbey Tavern Loft Bar and Grill", "Grill", "Average", "Abbey Street, Dublin", "Mon-Sat 2:00 PM-11:00 PM", "01 8390307", "Howth", "Dublin", 4.5, "image2.jpg"),
            new Restaurant(3, "Cibo Bar and Grill", "Grill", "Expensive", "4 East Pier, Howth, Dublin", "Wed-Sun 1:00 PM-10:00 PM", "01 8396344", "Howth", "Dublin", 4, "image3.jpg"),
            new Restaurant(4, "La Banca Ristorante", "Italian", "Cheap", "Main Street, Lucan Village, Lucan, Dublin", "Mon-Sat 5:00 PM-12:00 AM", "01 6282400", "Lucan", "Dublin", 3.2, "image4.jpg"),
            new Restaurant(5, "The Foxhunter", "European", "Cheap", "Ballydowd Lucan, Lucan, Dublin", "Tues-Sun 2:00 PM-11:00 PM", "01 6262599", "Lucan", "Dublin", 4, "image5.jpg"),
            new Restaurant(6, "Khans Spices Trim", "Indian", "Cheap", "Emmet Street Trim, Meath", "Mon-Sun 2:00 PM-1:00 AM", "046 9437696", "Trim", "Meath", 5, "image6.jpg"),
            new Restaurant(7, "La Scala", "Italian", "Average", "Emmet House, Finnegans Way, Trim, Meath", "Mon-Fri 12:00 AM-11:00 PM", "046 948323", "Trim", "Meath", 4.2, "image7.jpg"),
            new Restaurant(8, "Lees Oriental Restaurant", "Chinese", "cheap", "The Coachyard, Enfield, Meath", "Mon-Sun 4:00 PM-12:00 AM", "046 9549500", "Enfield", "Meath", 4, "image8.jpg"),
            new Restaurant(9, "Street Side Cafe", "Cafe", "cheap", "Main Street, Enfield, Meath", "Mon-Sun 8:00 AM- 6:00 PM", "046 954750", "Enfield", "Meath", 3.7, "image9.jpg"),
            new Restaurant(10, "The Bridge House", "European", "average", "Main Street, Enfield, Meath", "Mon-Sat 11:00 AM-8:30 PM", "046 9541127", "Enfield", "Meath", 3.1, "image10.jpg"),
            new Restaurant(11, "Ocean Palace Chinese", "Chinese", "cheap", "Unit 8A Blackcastle SC, Navan, Meath", "Mon-Fri 17:00 PM-1:00 AM", "046 9027690", "Navan", "Meath", 3.8, "image11.jpg"),
            new Restaurant(12, "Valley Cafe", "Cafe", "cheap", "43 Watergate Street Navan", "Mon-Fri 11:00 AM- 7:00 PM", "046 9021322", "Navan", "Meath", 4.3, "image12.jpg"),
        ];
        return restaurants;
    };
    return RestaurantService;
}());
exports.RestaurantService = RestaurantService;
//# sourceMappingURL=restaurant-service.js.map