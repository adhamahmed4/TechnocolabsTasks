const apiKey = 'S1IVzaNf_Yh1CusEs1UyfeZXR-2w-ZJtnmXBzkv-knhwN8i9Uwkgt00Z2-554xbmt9f977dH2GldE6bf4URXXSYAvR70FudTv2g5WMwS7PEGVm598RDjd2CiZ-GvYnYx';

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            }
        }).then(response => {
            return response.json();
        }
        ).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                }
                );
            }
        }
        ).catch(e => {
            console.log(e);
        }
        );
    }
}




























export default Yelp;