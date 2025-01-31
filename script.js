let products = [
    {
        id: 1,
        url: 'https://assets.ajio.com/medias/sys_master/root/20241109/0tsd/672e8ecbf9b8ef490b10254d/-473Wx593H-700628392-brown-MODEL.jpg',
        title: 'Solid Regular Fit Shirt',
        brand: 'IKON FASHION',
        price: 299,
        discount: 10, // percentage
        warranty: '6 months',
        actualPrice: 332,
        discountedPrice: 299,
        size: ['M', 'L', 'XL'],
        inStock: 20
    },
    {
        id: 2,
        url: 'https://assets.ajio.com/medias/sys_master/root/20230728/J7mR/64c3c2e1eebac147fc92766f/-473Wx593H-469215580-coral-MODEL.jpg',
        title: 'Checked Shirt with Patch Pocket',
        brand: 'THE INDIAN GARAGE CO',
        price: 560,
        discount: 15,
        warranty: '1 year',
        actualPrice: 650,
        discountedPrice: 560,
        size: ['S', 'M', 'L'],
        inStock: 0
    },
    {
        id: 3,
        url: 'https://assets.ajio.com/medias/sys_master/root/20241210/QO9l/6757d225c148fa1b30291884/-473Wx593H-442655291-blue-MODEL.jpg',
        title: 'Striped Button-Down Standard Oxford Shirt',
        brand: 'GAP',
        price: 1400,
        discount: 5,
        warranty: '6 months',
        actualPrice: 1470,
        discountedPrice: 1400,
        size: ['L', 'XL'],
        inStock: 10
    },
    {
        id: 4,
        url: 'https://assets.ajio.com/medias/sys_master/root/20250108/1B3m/677e67ac0431850e0d8aba6d/-473Wx593H-701026910-multi-MODEL.jpg',
        title: 'Men Checks Relaxed Fit Shirt',
        brand: 'THE BEAR HOUSE',
        price: 1862,
        discount: 20,
        warranty: '1 year',
        actualPrice: 2327,
        discountedPrice: 1862,
        size: ['M', 'L', 'XL'],
        inStock: 50
    },
    {
        id: 5,
        url: 'https://assets.ajio.com/medias/sys_master/root/20240326/ziea/6602a27416fd2c6e6a808044/-473Wx593H-467004317-white-MODEL.jpg',
        title: 'Double Cuff Slim Fit Cotton Shirt',
        brand: 'SNITCH',
        price: 999,
        discount: 25,
        warranty: '6 months',
        actualPrice: 1332,
        discountedPrice: 999,
        size: ['M', 'L'],
        inStock: 0
    },
    {
        id: 6,
        url: 'https://assets.ajio.com/medias/sys_master/root/20241220/zqZy/67658eefc148fa1b30531fcc/-473Wx593H-700958585-green-MODEL.jpg',
        title: 'Men Shirt with Cuban Collar',
        brand: 'RECNSTRCT',
        price: 4499,
        discount: 10,
        warranty: '2 years',
        actualPrice: 4999,
        discountedPrice: 4499,
        size: ['S', 'M', 'L', 'XL'],
        inStock: 5
    },
    {
        id: 7,
        url: 'https://assets.ajio.com/medias/sys_master/root/20230602/v4Ms/64793ff942f9e729d70e042f/-473Wx593H-461725396-maroon-MODEL.jpg',
        title: 'Men Slim Fit Checked Shirt',
        brand: 'THE BEAR HOUSE',
        price: 1123,
        discount: 12,
        warranty: '6 months',
        actualPrice: 1272,
        discountedPrice: 1123,
        size: ['M', 'L'],
        inStock: 0
    },
    {
        id: 8,
        url: 'https://assets.ajio.com/medias/sys_master/root/20241126/n4QF/6745e25d0f47f80c87ad3975/-473Wx593H-700810029-aqua-MODEL.jpg',
        title: 'Men Shirt with Band Collar',
        brand: 'QUELEA',
        price: 549,
        discount: 5,
        warranty: '1 year',
        actualPrice: 578,
        discountedPrice: 549,
        size: ['L', 'XL'],
        inStock: 15
    },
    {
        id: 9,
        url: 'https://assets.ajio.com/medias/sys_master/root/20241104/xkqm/672821c3f9b8ef490bfd6960/-473Wx593H-700673874-grey-MODEL.jpg',
        title: 'Man Stripes Regular Fit Shirt',
        brand: 'URBAN BUCCACHI',
        price: 479,
        discount: 0,
        warranty: '3 months',
        actualPrice: 479,
        discountedPrice: 479,
        size: ['S', 'M', 'L'],
        inStock: 30
    },
    {
        id: 10,
        url: 'https://assets.ajio.com/medias/sys_master/root/20250109/eupJ/677fe3800431850e0d8ecd98/-473Wx593H-701033919-blue-MODEL.jpg',
        title: 'Men Shirt with Button-Down Collar',
        brand: 'U.S. POLO ASSN.',
        price: 1400,
        discount: 0,
        warranty: '1 year',
        actualPrice: 1400,
        discountedPrice: 1400,
        size: ['M', 'L'],
        inStock: 8
    },
    {
        id: 11,
        url: 'https://assets.ajio.com/medias/sys_master/root/20230925/uZ7H/6511baafafa4cf41f50930b1/-473Wx593H-443021137-navy-MODEL.jpg',
        title: 'Men Printed Slim Fit Shirt',
        brand: 'NETPLAY',
        price: 315,
        discount: 20,
        warranty: '6 months',
        actualPrice: 394,
        discountedPrice: 315,
        size: ['M', 'L', 'XL'],
        inStock: 20
    },
    {
        id: 12,
        url: 'https://assets.ajio.com/medias/sys_master/root/20230621/tQsK/64928a82d55b7d0c639079cc/-473Wx593H-464175602-grey-MODEL.jpg',
        title: 'Men Knit Classic Shirt',
        brand: 'ANDAMEN',
        price: 3000,
        discount: 15,
        warranty: '2 years',
        actualPrice: 3000,
        size: ['M', 'L', 'XL'],
        inStock: false,
        remaining: 0
    },
    {
        id: 13,
        url: 'https://assets.ajio.com/medias/sys_master/root/20240924/usEp/66f25225260f9c41e81fb972/-473Wx593H-462323964-white-MODEL.jpg',
        title: 'Full Sleeves Slim Fit Shirt',
        brand: 'DENNISLINGO PREMIUM ATTIRE',
        price: 500,
        discount: 5,
        warranty: '6 months',
        actualPrice: 525,
        discountedPrice: 500,
        size: ['M', 'L'],
        inStock: 10
    },
    {
        id: 14,
        url: 'https://assets.ajio.com/medias/sys_master/root/20250110/PXT8/678051240431850e0d907744/-473Wx593H-701033908-grey-MODEL.jpg',
        title: 'Men Shirt with Spread Collar',
        brand: 'KHUSHI CREATION',
        price: 599,
        discount: 15,
        warranty: '6 months',
        actualPrice: 705,
        discountedPrice: 599,
        size: ['M', 'L', 'XL'],
        inStock: 18
    },
    {
        id: 15,
        url: 'https://assets.ajio.com/medias/sys_master/root/20230629/d3Lr/649cbd11eebac147fc2f36e8/-473Wx593H-466007999-multi-MODEL.jpg',
        title: 'Striped Slim Fit Shirt with Patch Pocket',
        brand: 'THE BEAR HOUSE',
        price: 1000,
        discount: 10,
        warranty: '6 months',
        actualPrice: 1111,
        discountedPrice: 1000,
        size: ['M', 'L'],
        inStock: 50
    },
    {
        id: 16,
        url: 'https://assets.ajio.com/medias/sys_master/root/20241204/uPbi/675052580f47f80c87d4b4fc/-473Wx593H-469708955-multi-MODEL.jpg',
        title: 'Men Oxford Checked Slim Fit Shirt with Patch Pocket',
        brand: 'U.S. POLO ASSN.',
        price: 1300,
        discount: 10,
        warranty: '1 year',
        actualPrice: 1444,
        discountedPrice: 1300,
        size: ['M', 'L'],
        inStock: 5
    },
    {
        id: 17,
        url: 'https://assets.ajio.com/medias/sys_master/root/20241224/nD6N/676a47a70f47f80c871c9ffb/-473Wx593H-442659273-navy-MODEL.jpg',
        title: 'Checked Button-Down Poplin Shirt',
        brand: 'GAP',
        price: 2000,
        discount: 0,
        warranty: '2 years',
        actualPrice: 2000,
        discountedPrice: 2000,
        size: ['S', 'M'],
        inStock: 20
    },
    {
        id: 18,
        url: 'https://assets.ajio.com/medias/sys_master/root/20241211/Cewx/67589e520f47f80c87ed5d31/-473Wx593H-700905265-green-MODEL.jpg',
        title: 'Men Slim Fit Striped Shirt',
        brand: 'ANDAMEN',
        price: 1800,
        discount: 5,
        warranty: '6 months',
        actualPrice: 1890,
        discountedPrice: 1800,
        size: ['L', 'XL'],
        inStock: 15
    }
];

function displayProducts() {
    let productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous content

    products.forEach(product => {
        let productHTML = `
        <div class="col-sm-2 col-md-4 col-lg-3">
            <a href="${product.id}" style="text-decoration: none"><div class="card p-1 m-2"'>
                <img style='border-radius:5px;' class='img-fluid' src="${product.url}" alt="${product.title}">
                <hr>
                <h6>${product.brand}</h6>
                <p>${product.title}</P>
                <p><b>₹${product.discountedPrice}</b> / <span style="text-decoration:line-through;color:#ffffff8f"> ₹${product.actualPrice}</span> <span><b> ${product.discount}% off </b></p>
            </div></a>
        </div>
    `;
        productList.innerHTML += productHTML;
    });
}
window.onload = displayProducts;


