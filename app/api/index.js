export const localRestaurants = [
    {
        name: "Beachside Cafe",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Restaurant"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
        transactions: ["delivery"],
        location: "usa"
    },
    {
        name: "USA Cafe",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Restaurant"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
        transactions: ["pickup"],
        location: "usa"
    },
    {
        name: "Singapore Cafe",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
        transactions: ["delivery", "pickup"],
        location:"singapore"
    },
    {
        name: "India's Grill",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
        transactions: ["pickup"],
        location:"india"
    },
    {
        name: "Nepal's Grill",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Nepal", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
        transactions: ["pickup"],
        location: "nepal"
    },
    {
        name: "Toledo's Place",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 4.5,
        transactions: ["delivery"],
        location: "philippines"
    },
    {
        name: "The Great Chef",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1244,
        rating: 3.7,
        transactions: ["delivery"],
        location: "korea"
    },
    {
        name: "Philippine's Grill",
        image_url:
            "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
        categories: ["Indian", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
        transactions: ["pickup"],
        location:"philippines"

    },
    {
        name: "Italian's Delight",
        image_url:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        categories: ["Nepal", "Bar"],
        price: "$$",
        reviews: 700,
        rating: 4.9,
        transactions: ["delivery", "pickup"],
        location:"italy"
    },
];


// API in YELP API
export const YELP_API_KEY =
    "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";
    

const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`

    const apiOptions = {
        headers: {
            Authorization: `Bearer ${YELP_API_KEY}`
        }
    }

    return fetch(yelpUrl, apiOptions)
        .then((res) => res.json)
        .then(json => setRestaurantData(json.businesses))
}

// API in Rapid Api
async function fetchData(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'yelp-com.p.rapidapi.com',
            'X-RapidAPI-Key': '013f606c71msh841ed8c079609c2p17668ejsnecd77a90188a'
        }
    };
  return  fetch('https://yelp-com.p.rapidapi.com/search/nearby/37.788719679657554/-122.40057774847898?radius=5&term=Restaurants&offset=0', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}