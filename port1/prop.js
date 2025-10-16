        // Property data - 50+ properties in Port Harcourt
        const properties = [
            {
                id: 1,
                title: "Luxury 5-Bedroom Duplex",
                address: "12 Aba Road, GRA Phase 1",
                price: "₦85,000,000",
                type: "house",
                status: "sale",
                bedrooms: 5,
                bathrooms: 4,
                area: "3500 sqft",
                location: "grac",
                image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 2,
                title: "Modern 3-Bedroom Flat",
                address: "45 Rumuola Road, Rumuola",
                price: "₦45,000,000",
                type: "apartment",
                status: "sale",
                bedrooms: 3,
                bathrooms: 2,
                area: "1800 sqft",
                location: "rumuola",
                image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 3,
                title: "Executive 4-Bedroom Terrace",
                address: "8 Nzimiro Street, Old GRA",
                price: "₦65,000,000",
                type: "house",
                status: "sale",
                bedrooms: 4,
                bathrooms: 3,
                area: "2800 sqft",
                location: "grac",
                image: "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 4,
                title: "Spacious 2-Bedroom Apartment",
                address: "22 Okporo Road, Rumuodomaya",
                price: "₦1,200,000/yr",
                type: "apartment",
                status: "rent",
                bedrooms: 2,
                bathrooms: 2,
                area: "1200 sqft",
                location: "rumuodomaya",
                image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 5,
                title: "Vacant Land for Commercial Use",
                address: "Plot 5 Trans-Amadi Layout",
                price: "₦120,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "2000 sqm",
                location: "transamadi",
                image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 6,
                title: "3-Bedroom Bungalow",
                address: "14 Rumuibekwe Road",
                price: "₦950,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 3,
                bathrooms: 2,
                area: "1600 sqft",
                location: "rumuibekwe",
                image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 7,
                title: "Luxury 6-Bedroom Mansion",
                address: "1 Chief Williams Close, GRA Phase 2",
                price: "₦150,000,000",
                type: "house",
                status: "sale",
                bedrooms: 6,
                bathrooms: 5,
                area: "5000 sqft",
                location: "gra2",
                image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 8,
                title: "Commercial Office Space",
                address: "15 Aba Road, Elekahia",
                price: "₦3,500,000/yr",
                type: "commercial",
                status: "rent",
                bedrooms: 0,
                bathrooms: 2,
                area: "2500 sqft",
                location: "elelenwo",
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 9,
                title: "2-Bedroom Flat",
                address: "7 Rumuokwuta Road",
                price: "₦900,000/yr",
                type: "apartment",
                status: "rent",
                bedrooms: 2,
                bathrooms: 1,
                area: "1100 sqft",
                location: "rumuokwuta",
                image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 10,
                title: "Residential Land",
                address: "Plot 12 Woji Layout",
                price: "₦25,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "1000 sqm",
                location: "woji",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 11,
                title: "4-Bedroom Detached House",
                address: "32 Rumuomasi Road",
                price: "₦75,000,000",
                type: "house",
                status: "sale",
                bedrooms: 4,
                bathrooms: 3,
                area: "3000 sqft",
                location: "rumuomasi",
                image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 12,
                title: "3-Bedroom Penthouse",
                address: "Tower 2, Emerald Estate, GRA Phase 3",
                price: "₦2,800,000/yr",
                type: "apartment",
                status: "rent",
                bedrooms: 3,
                bathrooms: 3,
                area: "2200 sqft",
                location: "gra3",
                image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 13,
                title: "Commercial Land",
                address: "Plot 8 Trans-Amadi Industrial Layout",
                price: "₦180,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "3000 sqm",
                location: "transamadi",
                image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 14,
                title: "5-Bedroom Executive Duplex",
                address: "5 Rumuogba Estate",
                price: "₦95,000,000",
                type: "house",
                status: "sale",
                bedrooms: 5,
                bathrooms: 4,
                area: "3800 sqft",
                location: "rumuola",
                image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 15,
                title: "1-Bedroom Serviced Apartment",
                address: "22 Rumuokoro Street",
                price: "₦600,000/yr",
                type: "apartment",
                status: "rent",
                bedrooms: 1,
                bathrooms: 1,
                area: "800 sqft",
                location: "rumuokoro",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 16,
                title: "3-Bedroom Terrace",
                address: "14 Rumuigbo Road",
                price: "₦55,000,000",
                type: "house",
                status: "sale",
                bedrooms: 3,
                bathrooms: 2,
                area: "2000 sqft",
                location: "rumuigbo",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 17,
                title: "4-Bedroom Duplex",
                address: "8 Rumuodara Road",
                price: "₦1,800,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 4,
                bathrooms: 3,
                area: "3200 sqft",
                location: "rumuodomaya",
                image: "https://images.unsplash.com/photo-1600566752227-8f3b9a6f9813?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 18,
                title: "Residential Plot",
                address: "Plot 15 Woji Housing Estate",
                price: "₦18,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "800 sqm",
                location: "woji",
                image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 19,
                title: "2-Bedroom Flat",
                address: "12 Elelenwo Road",
                price: "₦42,000,000",
                type: "apartment",
                status: "sale",
                bedrooms: 2,
                bathrooms: 2,
                area: "1300 sqft",
                location: "elelenwo",
                image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 20,
                title: "5-Bedroom Mansion",
                address: "3 Rumuibekwe Close",
                price: "₦2,500,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 5,
                bathrooms: 4,
                area: "4000 sqft",
                location: "rumuibekwe",
                image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 21,
                title: "3-Bedroom Semi-Detached",
                address: "7 Rumuokwuta Street",
                price: "₦48,000,000",
                type: "house",
                status: "sale",
                bedrooms: 3,
                bathrooms: 2,
                area: "1900 sqft",
                location: "rumuokwuta",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 22,
                title: "Commercial Space",
                address: "Shop 5 Rumuola Shopping Complex",
                price: "₦1,200,000/yr",
                type: "commercial",
                status: "rent",
                bedrooms: 0,
                bathrooms: 1,
                area: "1500 sqft",
                location: "rumuola",
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 23,
                title: "4-Bedroom Detached",
                address: "9 Rumuomasi Close",
                price: "₦68,000,000",
                type: "house",
                status: "sale",
                bedrooms: 4,
                bathrooms: 3,
                area: "2800 sqft",
                location: "rumuomasi",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 24,
                title: "1-Bedroom Flat",
                address: "22 Rumuokoro Road",
                price: "₦500,000/yr",
                type: "apartment",
                status: "rent",
                bedrooms: 1,
                bathrooms: 1,
                area: "700 sqft",
                location: "rumuokoro",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 25,
                title: "Residential Land",
                address: "Plot 10 Rumuodomaya Layout",
                price: "₦15,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "750 sqm",
                location: "rumuodomaya",
                image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 26,
                title: "3-Bedroom Bungalow",
                address: "14 Rumuigbo Avenue",
                price: "₦1,100,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 3,
                bathrooms: 2,
                area: "1700 sqft",
                location: "rumuigbo",
                image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 27,
                title: "Luxury 6-Bedroom Villa",
                address: "5 Chief Amadi Close, GRA Phase 2",
                price: "₦135,000,000",
                type: "house",
                status: "sale",
                bedrooms: 6,
                bathrooms: 5,
                area: "4800 sqft",
                location: "gra2",
                image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 28,
                title: "2-Bedroom Flat",
                address: "Block 3, Elelenwo Estate",
                price: "₦38,000,000",
                type: "apartment",
                status: "sale",
                bedrooms: 2,
                bathrooms: 2,
                area: "1250 sqft",
                location: "elelenwo",
                image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 29,
                title: "Commercial Plot",
                address: "Plot 7 Trans-Amadi Layout",
                price: "₦200,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "3500 sqm",
                location: "transamadi",
                image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 30,
                title: "4-Bedroom Duplex",
                address: "12 Rumuola Road",
                price: "₦1,700,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 4,
                bathrooms: 3,
                area: "3000 sqft",
                location: "rumuola",
                image: "https://images.unsplash.com/photo-1600566752227-8f3b9a6f9813?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 31,
                title: "3-Bedroom Terrace",
                address: "8 Rumuokwuta Close",
                price: "₦52,000,000",
                type: "house",
                status: "sale",
                bedrooms: 3,
                bathrooms: 2,
                area: "2100 sqft",
                location: "rumuokwuta",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 32,
                title: "Office Space",
                address: "Suite 5 Woji Plaza",
                price: "₦2,500,000/yr",
                type: "commercial",
                status: "rent",
                bedrooms: 0,
                bathrooms: 2,
                area: "2000 sqft",
                location: "woji",
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 33,
                title: "5-Bedroom Detached",
                address: "4 Rumuomasi Avenue",
                price: "₦78,000,000",
                type: "house",
                status: "sale",
                bedrooms: 5,
                bathrooms: 4,
                area: "3500 sqft",
                location: "rumuomasi",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 34,
                title: "Studio Apartment",
                address: "22 Rumuokoro Street",
                price: "₦400,000/yr",
                type: "apartment",
                status: "rent",
                bedrooms: 1,
                bathrooms: 1,
                area: "600 sqft",
                location: "rumuokoro",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 35,
                title: "Residential Plot",
                address: "Plot 8 Rumuodomaya Layout",
                price: "₦16,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "850 sqm",
                location: "rumuodomaya",
                image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 36,
                title: "3-Bedroom Bungalow",
                address: "16 Rumuigbo Road",
                price: "₦1,000,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 3,
                bathrooms: 2,
                area: "1600 sqft",
                location: "rumuigbo",
                image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 37,
                title: "Luxury 5-Bedroom Villa",
                address: "7 Chief Amadi Close, GRA Phase 2",
                price: "₦125,000,000",
                type: "house",
                status: "sale",
                bedrooms: 5,
                bathrooms: 4,
                area: "4200 sqft",
                location: "gra2",
                image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 38,
                title: "2-Bedroom Flat",
                address: "Block 5, Elelenwo Estate",
                price: "₦35,000,000",
                type: "apartment",
                status: "sale",
                bedrooms: 2,
                bathrooms: 2,
                area: "1200 sqft",
                location: "elelenwo",
                image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 39,
                title: "Commercial Plot",
                address: "Plot 9 Trans-Amadi Layout",
                price: "₦190,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "3200 sqm",
                location: "transamadi",
                image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 40,
                title: "4-Bedroom Duplex",
                address: "15 Rumuola Road",
                price: "₦1,600,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 4,
                bathrooms: 3,
                area: "2900 sqft",
                location: "rumuola",
                image: "https://images.unsplash.com/photo-1600566752227-8f3b9a6f9813?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 41,
                title: "3-Bedroom Terrace",
                address: "6 Rumuokwuta Close",
                price: "₦50,000,000",
                type: "house",
                status: "sale",
                bedrooms: 3,
                bathrooms: 2,
                area: "2000 sqft",
                location: "rumuokwuta",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 42,
                title: "Office Space",
                address: "Suite 3 Woji Plaza",
                price: "₦2,200,000/yr",
                type: "commercial",
                status: "rent",
                bedrooms: 0,
                bathrooms: 2,
                area: "1800 sqft",
                location: "woji",
                image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 43,
                title: "5-Bedroom Detached",
                address: "3 Rumuomasi Avenue",
                price: "₦75,000,000",
                type: "house",
                status: "sale",
                bedrooms: 5,
                bathrooms: 4,
                area: "3400 sqft",
                location: "rumuomasi",
                image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 44,
                title: "Studio Apartment",
                address: "20 Rumuokoro Street",
                price: "₦380,000/yr",
                type: "apartment",
                status: "rent",
                bedrooms: 1,
                bathrooms: 1,
                area: "550 sqft",
                location: "rumuokoro",
                image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 45,
                title: "Residential Plot",
                address: "Plot 6 Rumuodomaya Layout",
                price: "₦15,500,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "800 sqm",
                location: "rumuodomaya",
                image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 46,
                title: "3-Bedroom Bungalow",
                address: "14 Rumuigbo Road",
                price: "₦950,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 3,
                bathrooms: 2,
                area: "1500 sqft",
                location: "rumuigbo",
                image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 47,
                title: "Luxury 4-Bedroom Villa",
                address: "9 Chief Amadi Close, GRA Phase 2",
                price: "₦115,000,000",
                type: "house",
                status: "sale",
                bedrooms: 4,
                bathrooms: 3,
                area: "3800 sqft",
                location: "gra2",
                image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 48,
                title: "2-Bedroom Flat",
                address: "Block 7, Elelenwo Estate",
                price: "₦32,000,000",
                type: "apartment",
                status: "sale",
                bedrooms: 2,
                bathrooms: 2,
                area: "1150 sqft",
                location: "elelenwo",
                image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 49,
                title: "Commercial Plot",
                address: "Plot 11 Trans-Amadi Layout",
                price: "₦210,000,000",
                type: "land",
                status: "sale",
                bedrooms: 0,
                bathrooms: 0,
                area: "3800 sqm",
                location: "transamadi",
                image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 50,
                title: "4-Bedroom Duplex",
                address: "18 Rumuola Road",
                price: "₦1,500,000/yr",
                type: "house",
                status: "rent",
                bedrooms: 4,
                bathrooms: 3,
                area: "2800 sqft",
                location: "rumuola",
                image: "https://images.unsplash.com/photo-1600566752227-8f3b9a6f9813?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            },
            {
                id: 51,
                title: "3-Bedroom Terrace",
                address: "4 Rumuokwuta Close",
                price: "₦48,000,000",
                type: "house",
                status: "sale",
                bedrooms: 3,
                bathrooms: 2,
                area: "1900 sqft",
                location: "rumuokwuta",
                image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            }
        ];

        // Function to render properties
        function renderProperties(propertiesToRender) {
            const container = document.getElementById('properties-container');
            container.innerHTML = '';
            
            propertiesToRender.forEach(property => {
                const propertyCard = document.createElement('div');
                propertyCard.className = 'property-card';
                
                // Determine status class
                let statusClass = '';
                let statusText = '';
                if (property.status === 'sale') {
                    statusClass = 'status-for-sale';
                    statusText = 'For Sale';
                } else if (property.status === 'rent') {
                    statusClass = 'status-for-rent';
                    statusText = 'For Rent';
                } else if (property.type === 'land') {
                    statusClass = 'status-land';
                    statusText = 'Land';
                }
                
                propertyCard.innerHTML = `
                    <div class="property-img">
                        <img src="${property.image}" alt="${property.title}">
                    </div>
                    <div class="property-details">
                        <span class="property-status ${statusClass}">${statusText}</span>
                        <div class="property-price">${property.price}</div>
                        <h3 class="property-title">${property.title}</h3>
                        <div class="property-address">
                            <i class="fas fa-map-marker-alt"></i>
                            ${property.address}
                        </div>
                        <div class="property-features">
                            ${property.bedrooms > 0 ? `<div class="feature">
                                <i class="fas fa-bed"></i>
                                <div>${property.bedrooms} Beds</div>
                            </div>` : ''}
                            ${property.bathrooms > 0 ? `<div class="feature">
                                <i class="fas fa-bath"></i>
                                <div>${property.bathrooms} Baths</div>
                            </div>` : ''}
                            <div class="feature">
                                <i class="fas fa-ruler-combined"></i>
                                <div>${property.area}</div>
                            </div>
                        </div>
                    </div>
                `;
                
                container.appendChild(propertyCard);
            });
            
            // Add click event to property cards
            document.querySelectorAll('.property-card').forEach(card => {
                card.addEventListener('click', function() {
                    // You can implement a modal or redirect to property detail page
                    alert('Property detail view would open here');
                });
            });
        }
        
        // Initial render
        renderProperties(properties);
        
        // Filter functionality
        document.querySelector('.cta-button').addEventListener('click', function() {
            const typeFilter = document.getElementById('property-type').value;
            const statusFilter = document.getElementById('property-status').value;
            const bedroomsFilter = document.getElementById('bedrooms').value;
            const priceFilter = document.getElementById('price-range').value;
            const locationFilter = document.getElementById('location').value;
            
            const filteredProperties = properties.filter(property => {
                // Type filter
                if (typeFilter !== 'all' && property.type !== typeFilter) return false;
                
                // Status filter
                if (statusFilter !== 'all' && property.status !== statusFilter) return false;
                
                // Bedrooms filter
                if (bedroomsFilter !== 'any' && property.bedrooms < parseInt(bedroomsFilter)) return false;
                
                // Location filter
                if (locationFilter !== 'all' && property.location !== locationFilter) return false;
                
                // Price filter (simplified for demo)
                if (priceFilter !== 'any') {
                    const priceNum = parseInt(property.price.replace(/[^\d]/g, ''));
                    
                    switch(priceFilter) {
                        case '1':
                            if (priceNum > 5000000) return false;
                            break;
                        case '2':
                            if (priceNum < 5000000 || priceNum > 10000000) return false;
                            break;
                        case '3':
                            if (priceNum < 10000000 || priceNum > 20000000) return false;
                            break;
                        case '4':
                            if (priceNum < 20000000 || priceNum > 50000000) return false;
                            break;
                        case '5':
                            if (priceNum < 50000000) return false;
                            break;
                    }
                }
                
                return true;
            });
            
            renderProperties(filteredProperties);
        });
        
        // Reset filters
        document.querySelector('.filter-reset').addEventListener('click', function() {
            document.getElementById('property-type').value = 'all';
            document.getElementById('property-status').value = 'all';
            document.getElementById('bedrooms').value = 'any';
            document.getElementById('price-range').value = 'any';
            document.getElementById('location').value = 'all';
            
            renderProperties(properties);
        });
        
        // Simple animation for elements when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        // Observe property cards
        document.querySelectorAll('.property-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });
   