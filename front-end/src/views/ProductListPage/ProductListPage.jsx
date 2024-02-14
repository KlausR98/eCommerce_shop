import { Layout } from "../../components/Layout/Layout";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { ExpandableMenuSidebar } from "../../components/ExpandableMenuSidebar/ExpandableMenuSidebar";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { AllProductsContainer } from "../../components/AllProductsContainer/AllProductsContainer";
import { Pagination } from "../../components/Pagination/Pagination";

export function ProductListPage() {
    const products = [
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 29,
            "gender": "women",
            "category": "odziez",
            "subcategory": "spodnie",
            "productName": "Spodnie",
            "brand": "Shin-tzu",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-trousers-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 26,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki",
            "brand": "Test producent",
            "pricePLN": 49,
            "priceUSD": 10,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-1.jpg",
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 27,
            "gender": "women",
            "category": "obuwie",
            "subcategory": "eleganckie",
            "productName": "Szpilki 2",
            "brand": "Inny proucent",
            "pricePLN": 149,
            "priceUSD": 39,
            "photos": [
                "http://localhost:3000/product-photos/women-shoes-2.jpg",
                "http://localhost:3000/product-photos/women-shoes-3.jpg",
                "http://localhost:3000/product-photos/women-shoes-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },
        {
            "id": 28,
            "gender": "women",
            "category": "odziez",
            "subcategory": "koszulki",
            "productName": "Biały Sweter",
            "brand": "Sun zi",
            "pricePLN": 299,
            "priceUSD": 59,
            "photos": [
                "http://localhost:3000/product-photos/women-sweater-1.jpg",
                "http://localhost:3000/product-photos/women-trousers-2.jpg",
                "http://localhost:3000/product-photos/women-trousers-1.jpg"
            ],
            "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla facilis aperiam, magnam dolorum sit expedita nihil nostrum, voluptates temporibus voluptatum atque ullam molestiae provident dolore eligendi? Esse amet dolore illum.",
            "maintenanceInfo": "Nemo et nam quasi in suscipit earum odit laborum repellat quo dolore rem, sequi eaque sapiente quibu"
        },

    ];

    return (
        <Layout>
            <FlexContainer>
                <ExpandableMenuSidebar />
                <div className="flex flex-col">
                    <Breadcrumbs />
                    <AllProductsContainer
                        headTitle={'Swetry'.toUpperCase()}
                        products={products}
                    />
                    <Pagination numberOfPages={5} />
                </div>
            </FlexContainer>
        </Layout>
    );
}