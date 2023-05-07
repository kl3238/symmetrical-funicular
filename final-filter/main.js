console.log('this works')

//---------- DATASET

const dishes = [

  
        {
            image: "https://user-images.githubusercontent.com/113488749/236106608-a92a9dd4-905c-47e1-a7ff-37cd730e3f5c.png",
            name: "Stewed Pork with Cabbage",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Chives",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106609-f112e416-7900-49ec-bf38-d801bb6d1086.png",
            name: "Beijing Lentil Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "RedPepper",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106612-c35318ba-265f-4d9a-b5f2-fc09bae65627.png",
            name: "Stir-fried Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Mushrooms",
            Vegetable2: "Leaves",
            Vegetable3: "Beans",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106613-09359e33-e01e-4109-98f6-e4abbdab314c.png",
            name: "Stewed Chicken",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Chives",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106615-6de3e0f3-fd4f-44cd-b669-cd98cde4db0b.png",
            name: "Kung Pao Chicken",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106616-79855c7f-0afa-47a3-a728-1261fb7bbcf0.png",
            name: "Taiwanese 3Cup Chicken",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106618-95092053-e80a-4d78-9c8d-46f32fe97a87.png",
            name: "Sichuan Dry Fried Green Beans",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106620-96a03c07-2151-4160-ad49-e30a02452b02.png",
            name: "Stewed Chicken with Snow Peas",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106621-89b09048-aa75-4830-8cd8-0e03784702b5.png",
            name: "Mapo Tofu",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "Tofu",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Chives",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106622-f040e7da-0bc9-4c8a-9322-1372f7abdb6a.png",
            name: "Braised Pork Belly",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106623-54d14e56-0b17-4887-b2ec-afcc3425faa3.png",
            name: "Stir-fried Pork with Garlic Stalks",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106625-f2741662-4921-4285-9056-9bc0c5c65590.png",
            name: "Fried Noodles with Vegetables",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "Beans",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106626-237ea748-e322-4b2a-b06f-7a43e43498a1.png",
            name: "Shanghai Scallion Oil Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Chives",
            IsIngredients: "Ingredients"
        },
        
        {
            image: "https://user-images.githubusercontent.com/113488749/236106628-1d4045f8-f96b-4b1b-ae0b-47d74fe9985c.png",
            name: "Jajang Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "Leaves",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106629-9e83124b-f291-4135-8169-c848a7159fd4.png",
            name: "Wonton",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Wonton",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Chives",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106632-c88949bc-d8cb-445b-95ac-b178c08ba421.png",
            name: "Egg and Tomato Stir-fry",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "Egg",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106633-788fd131-487f-43a9-83de-e415a815eb8f.png",
            name: "Mapo Tofu",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "Tofu",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106634-ce55e00e-05c5-420b-baaa-46c061cabd05.png",
            name: "Stir-fried Crab with Ginger",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "Crab",
            IsSeafood: "Seafood",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106635-a08fbad8-5e48-461d-873e-01f297a21e06.png",
            name: "Steamed Chicken Feet with Black Bean Sauce",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106636-514cd6ed-85da-436e-915a-5ef0042215ee.png",
            name: "Maoxuewang",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "No",
            Vegetable3: "Mushrooms",
            Meat: "Duck",
            IsMeat: "Meat",
            Other: "Tofu",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106637-e43316d0-87e4-49f8-a310-64dae4aeef8b.png",
            name: "Hot Dry Noodles",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Rice",
            Seafood: "Shrimp",
            IsSeafood: "Seafood",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106639-cca89e43-b08a-4fa8-87d7-867328f91cb4.png",
            name: "Spicy Lemon Chicken Feet",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "Lemon",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106641-c1c760ca-cbf9-4fa4-8234-9c6733ef5df6.png",
            name: "Stewed Pig's Trotters",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "Nuts",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106642-fc466658-e6ba-4f4b-ba2a-1fb11929cc33.png",
            name: "Spicy Stir-fried Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "Leaves",
            Vegetable3: "Beans",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106643-af5f9525-540f-4719-a9a5-d7900d74e621.png",
            name: "Mixed Vegetables",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "Beans",
            Vegetable3: "Nuts",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106644-5c3a6f7b-f29e-4441-a726-79698b5ee4b0.png",
            name: "Spicy Stewed Pig's Trotters",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106645-8c9832ca-cf0c-4d63-a30a-79ff2a694d0b.png",
            name: "Lotus Root Salad",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "Leaves",
            Vegetable3: "Roots",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106647-29c2b66e-d54f-45fc-ad4b-81b098c8a874.png",
            name: "Water Kimchi",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
       
        {
            image: "https://user-images.githubusercontent.com/113488749/236106648-f469dde6-940a-4755-90a3-740e11499591.png",
            name: "Fried Shrimp with Corn",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Roots",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "Shrimp",
            IsSeafood: "Seafood",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106649-241ed4bc-63e7-4145-bdd3-beb9213c85b9.png",
            name: "Sliced Beef and Ox Tongue in Chilli Sauce",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "Leaves",
            Vegetable3: "Mushrooms",
            Meat: "Beef",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106651-71a359c3-20ea-4712-990a-0cdbcd30caa6.png",
            name: "Curry Fish Ball",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "Curry",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "Fish",
            IsSeafood: "Seafood",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106652-326babe8-5c5f-405e-b4c4-394cc0000ddb.png",
            name: "Dandan Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "Seafood",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106654-f56fe3ae-4893-4497-94fe-b4c95f2c659c.png",
            name: "Braised Pork Ribs in Soy Sauce",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Chives",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106655-f2482f5c-9742-47a4-9588-f9318b0cd3ae.png",
            name: "L\ufffd\ufffdb\ufffd\ufffd Rice Porridge",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Nuts",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Rice",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
         
        {
            image: "https://user-images.githubusercontent.com/113488749/236106656-ab9ca394-8afa-44fe-8c3f-30f0060f3355.png",
            name: "Tossed Mung Clear Noodles in Sauce",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "Leaves",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "GreenPepper",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106657-89b3a1db-10ce-41ba-a33c-db723678ce0e.png",
            name: "Shaved Snow with Fruits",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "Fruits",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106658-6c0cffdf-235c-4991-80ee-1b908fcde1f6.png",
            name: "Five-nuts Mooncake",
            IsVegetable: "Vegetable",
            Vegetable1: "Nuts",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Cake",
            IsRicee: "Cake",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
       
        {
            image: "https://user-images.githubusercontent.com/113488749/236106661-494c4530-3b27-41fc-89a7-55f9d4cf67dd.png",
            name: "Stir-fried Chicken Gizzard",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "GreenPepper",
            IsIngredients: "Ingredients"
        },
        
        {
            image: "https://user-images.githubusercontent.com/113488749/236106662-1d35a89e-1d77-4142-abcc-365b8ddf56d5.png",
            name: "Steamed Head with Chopped Chili",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "Fish",
            IsSeafood: "Seafood",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106663-00bd4652-e4d5-4b35-8320-c4f320de22d4.png",
            name: "Bitter Melon Salad",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
         
        {
            image: "https://user-images.githubusercontent.com/113488749/236106664-f5227aca-c84f-492c-92cf-db952e913adb.png",
            name: "Diced Chicken With Spicy Chilies",
            IsVegetable: "Vegetable",
            Vegetable1: "Nuts",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106669-e79da610-69c2-4779-bd51-f5bf096a15dd.png",
            name: "Cashew Chicken",
            IsVegetable: "Vegetable",
            Vegetable1: "Nuts",
            Vegetable2: "Beans",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106670-29f8c5df-fd98-4f7c-9a12-264332150fa2.png",
            name: "Shredded Potato Stir Fry",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "Leaves",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "GreenPepper",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106671-4d91e32a-76d0-43cd-b58c-227c1b2c830b.png",
            name: "Grass Jelly with Taro Balls and Coconut Milk",
            IsVegetable: "Vegetable",
            Vegetable1: "No",
            Vegetable2: "Nuts",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Cake",
            IsRicee: "Cake",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106672-9fea7e15-513c-46d2-8608-7834b9565e03.png",
            name: "Fried Shanghai Qing",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106673-5e74d91e-cdaa-4c05-be04-e80d6a58c9e6.png",
            name: "Cold Vegetbale Dish",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "Roots",
            Vegetable3: "Beans",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106674-a18f230d-250e-43f9-83c0-22104e6583a2.png",
            name: "Sweet and Sour Ribs ",
            IsVegetable: "No",
            Vegetable1: "Leaves",
            Vegetable2: "Roots",
            Vegetable3: "Mushrooms",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "GreenPepper",
            IsIngredients: "Ingredients"
        },
        
        {
            image: "https://user-images.githubusercontent.com/113488749/236106675-6a86a331-db25-4923-8f97-c14053c696b1.png",
            name: "Spicy Hot Pot",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "Roots",
            Vegetable3: "Mushrooms",
            Meat: "No",
            IsMeat: "No",
            Other: "Tofu",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106676-9d8d3c9a-3012-42f7-874c-5f1f2458b69e.png",
            name: "Sichuan Boiled Fish",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "Fish",
            IsSeafood: "Seafood",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106678-f6b72835-2862-4561-851c-1ea214795eb1.png",
            name: "Sichuan Boiled Spicy Pork",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106680-5eaf782c-40a9-4b62-92c0-a9ba92d3fd7e.png",
            name: "Stir-fried Beef with Coriander",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        
        {
            image: "https://user-images.githubusercontent.com/113488749/236106681-444b6b20-9aa5-4aae-ab2e-eb5771f85c1e.png",
            name: "Egg Fried Rice",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "Mushrooms",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "Egg",
            IsOther: "Other",
            Ricee: "Rice",
            IsRicee: "Rice",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
       
        {
            image: "https://user-images.githubusercontent.com/113488749/236106682-3714244a-ca2a-4113-be13-3c9835b79673.png",
            name: "Griddle Pork Intestines",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        
        {
            image: "https://user-images.githubusercontent.com/113488749/236106683-352f1561-361c-46ec-91e0-10a4b82e44a8.png",
            name: "Sauerkraut Fish",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "Roots",
            Vegetable3: "Mushrooms",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "Fish",
            IsSeafood: "Seafood",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106684-90be300d-21bb-484d-93a0-130911532491.png",
            name: "Saut\ufffd\ufffded Celery and Lily Bulbs",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "Roots",
            Vegetable3: "Beans",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106685-62133249-c5f5-49a4-8327-ae189759a024.png",
            name: "Braised Chicken",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Chives",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106686-dc3560d8-196a-43e3-b2f8-afe53b3760e6.png",
            name: "Long Beans Braised Noodle",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "RedPepper",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106687-269d30d2-3fc5-4357-b9e6-9de1885dffaf.png",
            name: "Egg Fried Noodles",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "Egg",
            IsOther: "Other",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106688-46de133f-4c48-45c9-9f08-f2e0164aab11.png",
            name: "Braised Pork Trotter",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106689-a7ce0063-f29a-41dd-9853-cd1b3773cb8e.png",
            name: "Rougamo",
            IsVegetable: "Vegetable",
            Vegetable1: "Leaves",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "Cake",
            IsRicee: "Cake",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106690-1354307e-26e1-4dc2-a8c8-189a0cfbfae4.png",
            name: "Corn Soup with Pork Ribs",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106692-3cc5c2a2-532d-4e30-85db-0e085c2ec7a2.png",
            name: "Curry Chicken",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Roots",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "Curry",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106694-b9926ddd-c029-4a5b-ad61-41387a5e96e4.png",
            name: "Beijing Noodle Bowl",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "Egg",
            IsOther: "Other",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        
        {
            image: "https://user-images.githubusercontent.com/113488749/236106696-16e1e6c5-b865-4a0f-b4fa-fe0a1d6e75df.png",
            name: "Lanzhou Stretched Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Mushrooms",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "Shrimp",
            IsSeafood: "Seafood",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106697-e67010eb-9698-4977-a3c9-08a3b77d3e07.png",
            name: "Chicken Soup",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Mushrooms",
            Meat: "Chicken",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106698-41cec792-c269-45ea-9a8e-6d18dc314794.png",
            name: "Plain Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Mushrooms",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        
        {
            image: "https://user-images.githubusercontent.com/113488749/236106699-26e72b3b-1053-4af6-825d-5f55cef8d4d3.png",
            name: "Liuzhou river snails rice noodle",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Mushrooms",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106700-a41f40b1-79d1-45da-b59d-e2b3ae9fd133.png",
            name: "Egg and Tomato Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Roots",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "Egg",
            IsOther: "Other",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "Coriander",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106701-da97d472-e601-4e22-a364-b30c44a41b57.png",
            name: "Cold Noodles",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Mushrooms",
            Meat: "No",
            IsMeat: "No",
            Other: "Egg",
            IsOther: "Other",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106702-49659bb1-49bf-475e-b5a2-db19d2d47ebf.png",
            name: "Pickled Radish",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "BirdEyeChillies",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106703-e2d433d4-d60d-408d-b3fc-8c5cf47d4a50.png",
            name: "Yangzhou Fried Rice",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "Rice",
            IsRicee: "Rice",
            Seafood: "Shrimp",
            IsSeafood: "Seafood",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106704-a045d190-cf8e-40ee-935c-864f686f409e.png",
            name: "Red-braised Beef Noodle Soup",
            IsVegetable: "No",
            Vegetable1: "No",
            Vegetable2: "No",
            Vegetable3: "No",
            Meat: "Pork",
            IsMeat: "Meat",
            Other: "No",
            IsOther: "No",
            Ricee: "Noodles",
            IsRicee: "Noodles",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "RedPepper",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106706-3e84b519-f7f2-4065-8041-ffbcf2a9d53a.png",
            name: "Stew Vegetable",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Roots",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106707-1b31def8-095d-4fa8-912f-88764ca14257.png",
            name: "Chinese Chives Soup",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Roots",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "RedPepper",
            IsIngredients: "Ingredients"
        },
        {
            image: "https://user-images.githubusercontent.com/113488749/236106709-f27c0c65-ae84-4124-99cb-e9e6752433f8.png",
            name: "Old Cucumber Soup with Tofu",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "Roots",
            Meat: "No",
            IsMeat: "No",
            Other: "Tofu",
            IsOther: "Other",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "No",
            IsSeafood: "No",
            Ingredients: "No",
            IsIngredients: "No"
        },
    
        {
            image: "https://user-images.githubusercontent.com/113488749/236647902-eba87f8f-5a00-4bfc-a0ac-fe009ce44248.png",
            name: "Casserole Porridge",
            IsVegetable: "Vegetable",
            Vegetable1: "Beans",
            Vegetable2: "Leaves",
            Vegetable3: "No",
            Meat: "No",
            IsMeat: "No",
            Other: "No",
            IsOther: "No",
            Ricee: "No",
            IsRicee: "No",
            Seafood: "Shrimp",
            IsSeafood: "Seafood",
            Ingredients: "No",
            IsIngredients: "No"
        },

    ];
    





//---------- RENDER DISHES TO PAGE

const ul = document.querySelector("ul");

function renderDishesToPage(results) {
  // iterate over data set
  for(let i = 0; i < results.length; i++){
    // create the list item
    let listItem = document.createElement('li');

    //* add a class to each item of the results
    listItem.classList.add('card', results[i].IsVegetable, results[i].Vegetable1,results[i].Vegetable2,results[i].Vegetable3,results[i].IsMeat,results[i].Meat,results[i].Other,results[i].IsOther,results[i].Ricee,results[i].IsRicee,results[i].Seafood,results[i].IsSeafood,results[i].Ingredients,results[i].IsIngredients) // red
   
    // add dish name
    let title = document.createElement('h3')
    title.textContent = results[i].name 
    
    // add dish image
    let image = document.createElement('img')
    image.setAttribute('src', results[i].image)

    // add dish is vegetable
    let isV = document.createElement('h4')
    isV.classList.add(results[i].IsVegetable)
    isV.textContent = results[i]. IsVegetable

    // add dish vegetable1
    
      let v1 = document.createElement("p");
      v1.classList.add(results[i].Vegetable1);
      v1.textContent = results[i].Vegetable1;

      // add dish vegetable2
    
      let v2 = document.createElement("p");
      v2.classList.add(results[i].Vegetable2);
      v2.textContent = results[i].Vegetable2;

      // add dish vegetable1
    
      let v3 = document.createElement("p");
      v3.classList.add(results[i].Vegetable3);
      v3.textContent = results[i].Vegetable3;

      // add dish is meat
    
      let isM = document.createElement("h4");
      isM.classList.add(results[i].IsMeat);
      isM.textContent = results[i].IsMeat;
  
      // add dish meat
    
      let meat1 = document.createElement("p");
      meat1.classList.add(results[i].Meat);
      meat1.textContent = results[i].Meat;

      // add dish is other
    
      let isO = document.createElement("h4");
      isO.classList.add(results[i].IsOther);
      isO.textContent = results[i].IsOther;

      // add dish other
    
      let other = document.createElement("p");
      other.classList.add(results[i].Other);
      other.textContent = results[i].Other;

       // add dish is ricee
    
       let isR = document.createElement("h4");
       isR.classList.add(results[i].IsRicee);
       isR.textContent = results[i].IsRicee;

       // add dish ricee
    
       let ricee = document.createElement("p");
       ricee.classList.add(results[i].Ricee);
       ricee.textContent = results[i].Ricee;

        // add dish is seafood
    
      let isS = document.createElement("h4");
      isS.classList.add(results[i].IsSeafood);
      isS.textContent = results[i].IsSeafood;

        // add dish seafood
    
      let seafood = document.createElement("p");
      seafood.classList.add(results[i].Seafood);
      seafood.textContent = results[i].Seafood;

       // add dish is ingredients
    
       let isI = document.createElement("h4");
       isI.classList.add(results[i].IsIngredients);
       isI.textContent = results[i].IsIngredients;

       // add dish ingredients
    
       let ingredients = document.createElement("p");
       ingredients.classList.add(results[i].Ingredients);
       ingredients.textContent = results[i].Ingredients;
 


      // manage render elements
    ul.appendChild(listItem)
    listItem.appendChild(title)
    listItem.appendChild(image)



    if (results[i].IsVegetable !== "No") {

      listItem.appendChild(isV) 
      listItem.appendChild(v1) 
      if (results[i].Vegetable2 !== "No") {

        listItem.appendChild(v2) 
        
      }
      if (results[i].Vegetable3 !== "No") {

        listItem.appendChild(v3) 
        
      }
    }

    if (results[i].IsMeat !== "No") {

      listItem.appendChild(isM) 
      listItem.appendChild(meat1) 
     
    }

    if (results[i].IsOther !== "No") {

      listItem.appendChild(isO) 
      listItem.appendChild(other) 
     
    }

    if (results[i].IsRicee !== "No") {

      listItem.appendChild(isR) 
      listItem.appendChild(ricee) 
     
    }

    if (results[i].IsSeafood!== "No") {

      listItem.appendChild(isS) 
      listItem.appendChild(seafood) 
     
    }
    if (results[i].IsIngredients !== "No") {

      listItem.appendChild(isI) 
      listItem.appendChild(ingredients) 
     
    }


  
    
  }



}
renderDishesToPage(dishes);





//---------- FILTER FLOWERS BY COLOR

let filterBtns = document.querySelector(".filters");

//---------- Show selected

let cards = document.querySelectorAll(".card");



function showlabel(event){
  let activeBtns = filterBtns.querySelectorAll(".active");
  let filterValues = [];
  activeBtns.forEach((btn) => {
    filterValues.push(btn.getAttribute("data-filter"));
  });


let labels = document.querySelectorAll('.label .selectedlabel');

console.log(labels.length);

let counter = 0;
for (let i = 0; i < 28; i++){
    
  if( filterValues.includes(labels[i].getAttribute("data-filter"))){

   labels[i].style.display='inline';
   console.log(labels[i].getAttribute("data-filter") + labels[i].style.display);
   counter++;
  
  }else{
   labels[i].style.display='none';
  }
  
 }

 console.log(counter);


}

function filterFn(event) {
  if (event.target.classList.contains("filter-btn")) {
    // 切换激活状态
    event.target.classList.toggle("active");

    // 获取所有激活的按钮的过滤值
    let activeBtns = filterBtns.querySelectorAll(".active");
    let filterValues = [];
    activeBtns.forEach((btn) => {
      filterValues.push(btn.getAttribute("data-filter"));
    });

    
    console.log(cards.length);

    // 遍历所有卡片元素
    for (let i = 0; i < cards.length; i++) {
      // 如果卡片包含所有过滤值或没有激活的按钮（显示所有）
      if (
        filterValues.every((value) => cards[i].classList.contains(value)) ||
        filterValues.length === 0
      ) {
        cards[i].classList.remove("hide");
        cards[i].classList.add("show");
      } else {
        cards[i].classList.remove("show");
        cards[i].classList.add("hide");
      }
    }
  }
}
filterBtns.addEventListener("click", filterFn);
filterBtns.addEventListener("click", showlabel);

