const zipCodeRegex = /^\d{5}$/;
const carBrands = [
    "Toyota",
    "Honda",
    "Nissan",
    "Ford",
    "Chevrolet",
    "Volkswagen",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Hyundai",
];

export function validateZipCode(zipCode) {
    if (!zipCode) {
        return "Postal code is required";
    }
    if (!zipCodeRegex.test(zipCode)) {
        return "The zip code must be 5 numeric digits long.";
    }
    return "";
}

export function validateCarBrand(carBrand) {
    if (!carBrand) {
        return "Branding is mandatory";
    }
    if (!carBrands.includes(carBrand)) {
        return "The mark is not valid";
    }
    return "";
}
