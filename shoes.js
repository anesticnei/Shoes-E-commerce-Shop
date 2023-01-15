const shoes = [
    {
        id: 0,
        name: "Nike Romaleos 4",
        category: "Training Shoes",
        subtext: "Training Shoes",
        price: 659.99,
        sale: true,
        saleAmount: 200,
        bio: "Nike training shoes are designed to provide support and stability during a variety of exercises and activities, such as weightlifting, cardio, and agility training. Some popular models include the Nike Metcon, Nike Free, and Nike React Infinity.",
        // pictures_1: "./pictures/shoes/Nike Romaleos 4/Nike_Romaleos_1.jpeg",
        pictures_1: "./pictures/shoes/Nike Romaleos 4/romaleos_4_png/Nike_Romaleos_1.png",
        pictures_2: "./pictures/shoes/Nike Romaleos 4/Nike_Romaleos_2.jpeg",
        pictures_3: "./pictures/shoes/Nike Romaleos 4/Nike_Romaleos_3.jpeg",
        pictures_4: "./pictures/shoes/Nike Romaleos 4/Nike_Romaleos_4.jpeg",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,

        size_41_out_of_stock: false,
        size_41: 41,
    },
    {
        id: 1,
        name: "Nike Metcon 8",
        category: "Training Shoes",
        subtext: "Training Shoes",
        price: 699.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike Metcon is a versatile training shoe that is built for high-intensity workouts. It features a durable design with a stable heel and a sticky rubber outsole for traction during lifts. The shoe also has a flat, stable platform for weightlifting and a flexible forefoot for running and other high-impact activities.",
        pictures_1: "/pictures/shoes/Nike Metcon 8/Nike_Metcon_1.png",
        pictures_2: "/pictures/shoes/Nike Metcon 8/Nike_Metcon_2.png",
        pictures_3: "/pictures/shoes/Nike Metcon 8/Nike_Metcon_3.png",
        pictures_4: "/pictures/shoes/Nike Metcon 8/Nike_Metcon_4.png",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,
        
        size_41_out_of_stock: false,
        size_41: 41,
    
    },
    {
        id: 2,
        name: "Nike Free",
        category: "Training Shoes",
        subtext: "Training Shoes",
        price: 499.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike Free is a lightweight, minimalist shoe that is designed to mimic the feeling of barefoot training. It has a flexible sole that allows for natural movement and a breathable upper for comfort during high-intensity workouts.",
        pictures_1: "/pictures/shoes/Nike Free/Nike_Free_1.png",
        pictures_2: "/pictures/shoes/Nike Free/Nike_Free_2.png",
        pictures_3: "/pictures/shoes/Nike Free/Nike_Free_3.png",
        pictures_4: "/pictures/shoes/Nike Free/Nike_Free_4.png",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,
        
        size_41_out_of_stock: false,
        size_41: 41,
    },
    {
        id: 3,
        name: "Nike React",
        category: "Training Shoes",
        subtext: "Training Shoes",
        price: 369.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike React Infinity is a running shoe that is designed for both training and racing. It features a cushioned React foam midsole for a responsive and comfortable ride, a breathable upper, and a durable outsole.",
        pictures_1: "/pictures/shoes/Nike React vision/Nike_React.png",
        pictures_2: " ",
        pictures_3: " ",
        pictures_4: " ",
    },
    {
        id: 4,
        name: "Nike Air Force 1",
        category: "Lifestyle Shoes",
        subtext: "Lifestyle Shoes",
        price: 123.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike Air Force 1 is a classic lifestyle shoe that was first released in 1982. It features a cushioned midsole, a durable leather upper, and a rubber outsole. The shoe has become a staple in streetwear fashion and continues to be popular among sneaker enthusiasts.",
        pictures_1: "/pictures/shoes/Nike Air Force 1/Nike_Air_Force.png",
        pictures_2: " ",
        pictures_3: " ",
        pictures_4: " ",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,
        
        size_41_out_of_stock: false,
        size_41: 41,
    },
    {
        id: 5,
        name: "Nike Cortez",
        category: "Lifestyle Shoes",
        subtext: "Lifestyle Shoes",
        price: 199.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike Cortez is a vintage-inspired lifestyle shoe that was first released in 1972. It features a classic design with a leather or synthetic upper, a foam sole, and a rubber outsole. The shoe is often worn as a fashion statement and has been featured in numerous movies and television shows.",
        pictures_1: "/pictures/shoes/Nike Cortez/Nike Cortez.png",
        pictures_2: " ",
        pictures_3: " ",
        pictures_4: " ",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,
        
        size_41_out_of_stock: false,
        size_41: 41,
    },
    {
        id: 6,
        name: "Nike Blazer",
        category: "Lifestyle Shoes",
        subtext: "Lifestyle Shoes",
        price: 349.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike Blazer is a lifestyle shoe that was first released in 1972. It features a vintage-inspired design with a suede or leather upper, a foam sole, and a rubber outsole. The shoe is often worn as a fashion statement and has been seen on the feet of many celebrities.",
        pictures_1: "/pictures/shoes/Nike Blazer/Nike Blazer.png",
        pictures_2: " ",
        pictures_3: " ",
        pictures_4: " ",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,
        
        size_41_out_of_stock: false,
        size_41: 41,
    },
    {
        id: 7,
        name: "Nike Pegasus",
        category: "Running Shoes",
        subtext: "Running Shoes",
        price: 499.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike Pegasus is a versatile running shoe that is designed for runners of all levels. It features a cushioned midsole, a breathable upper, and a durable outsole. The shoe is suitable for both short and long-distance running, and it has a variety of versions for different types of foot and running needs.",
        pictures_1: "/pictures/shoes/Nike Pegasus/Nike Pegasus.png",
        pictures_2: " ",
        pictures_3: " ",
        pictures_4: " ",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,
        
        size_41_out_of_stock: false,
        size_41: 41,
    },
    {
        id: 8,
        name: "Nike Zoom",
        category: "Running Shoes",
        subtext: "Running Shoes",
        price: 199.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike Zoom is a lightweight and responsive running shoe that is designed for speed and agility. It features a Zoom Air unit in the heel for added cushioning, a breathable upper, and a durable outsole. The shoe is suitable for both short and long-distance running, and it has a variety of versions for different types of foot and running needs.",
        pictures_1: "/pictures/shoes/Nike Zoom/Nike Zoom.png",
        pictures_2: " ",
        pictures_3: " ",
        pictures_4: " ",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,
        
        size_41_out_of_stock: false,
        size_41: 41,
    },
    {
        id: 9,
        name: "Nike ZoomX",
        category: "Running Shoes",
        subtext: "Running Shoes",
        price: 179.99,
        sale: true,
        saleAmount: 200,
        bio: "The Nike ZoomX is a premium running shoe that features Nike's most responsive foam cushioning, ZoomX, in the midsole. It's designed for runners who want a shoe that provides a lot of energy return and cushioning. It also has a breathable upper and a durable outsole.",
        pictures_1: "/pictures/shoes/Nike ZoomX/Nike ZoomX.png",
        pictures_2: " ",
        pictures_3: " ",
        pictures_4: " ",

        size_38_out_of_stock: false,
        size_38: 38,

        size_39_out_of_stock: false,
        size_39: 39,

        size_40_out_of_stock: false,
        size_40: 40,
        
        size_41_out_of_stock: false,
        size_41: 41,
    },

]