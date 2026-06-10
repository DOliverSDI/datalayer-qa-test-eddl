/**
 * Test EDDL / dataLayer spec for DataLayer QA Apps Script
 * Repo: datalayer-qa-test-eddl
 */

window.dataLayer = window.dataLayer || [];

// 1. Page View
window.dataLayer.push({
  event: "page_view",
  page: {
    category: "Shoes",
    name: "Mens Sneakers",
    type: "Product Listing Page",
    language: "en-US",
    site_section: "Footwear"
  },
  user: {
    login_status: "guest",
    customer_type: "new"
  }
});

// 2. Product Listing View
window.dataLayer.push({
  event: "view_item_list",
  ecommerce: {
    item_list_id: "mens_sneakers",
    item_list_name: "Mens Sneakers",
    items: [
      {
        item_id: "SNK-100",
        item_name: "Leather Sneaker",
        item_category: "Shoes",
        item_category2: "Sneakers",
        price: 89.99,
        index: 1
      },
      {
        item_id: "SNK-101",
        item_name: "Canvas Sneaker",
        item_category: "Shoes",
        item_category2: "Sneakers",
        price: 64.99,
        index: 2
      }
    ]
  }
});

// 3. Product Detail View
window.dataLayer.push({
  event: "view_item",
  ecommerce: {
    currency: "USD",
    value: 89.99,
    items: [
      {
        item_id: "SNK-100",
        item_name: "Leather Sneaker",
        item_brand: "Example Brand",
        item_category: "Shoes",
        item_category2: "Sneakers",
        item_variant: "Black / Size 11",
        price: 89.99,
        quantity: 1
      }
    ]
  }
});

// 4. Add to Cart
window.dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    currency: "USD",
    value: 89.99,
    items: [
      {
        item_id: "SNK-100",
        item_name: "Leather Sneaker",
        item_brand: "Example Brand",
        item_category: "Shoes",
        item_category2: "Sneakers",
        item_variant: "Black / Size 11",
        price: 89.99,
        quantity: 1
      }
    ]
  }
});

// 5. Begin Checkout
window.dataLayer.push({
  event: "begin_checkout",
  ecommerce: {
    currency: "USD",
    value: 154.98,
    coupon: null,
    checkout_step: 1,
    items: [
      {
        item_id: "SNK-100",
        item_name: "Leather Sneaker",
        price: 89.99,
        quantity: 1
      },
      {
        item_id: "SNK-101",
        item_name: "Canvas Sneaker",
        price: 64.99,
        quantity: 1
      }
    ]
  }
});

// 6. Purchase
window.dataLayer.push({
  event: "purchase",
  ecommerce: {
    transaction_id: "ORD-98765",
    currency: "USD",
    value: 162.97,
    tax: 8.99,
    shipping: 7.99,
    coupon: "WELCOME10",
    items: [
      {
        item_id: "SNK-100",
        item_name: "Leather Sneaker",
        item_brand: "Example Brand",
        item_category: "Shoes",
        item_category2: "Sneakers",
        item_variant: "Black / Size 11",
        price: 89.99,
        quantity: 1,
        discount: 10.00
      },
      {
        item_id: "SNK-101",
        item_name: "Canvas Sneaker",
        item_brand: "Example Brand",
        item_category: "Shoes",
        item_category2: "Sneakers",
        item_variant: "White / Size 11",
        price: 64.99,
        quantity: 1,
        discount: 0
      }
    ]
  }
});

// 7. Search
window.dataLayer.push({
  event: "search",
  search: {
    term: "black sneakers",
    results_count: 24,
    filters_applied: true,
    sort_by: "Price Low to High"
  }
});

// 8. CTA Click
window.dataLayer.push({
  event: "cta_click",
  click: {
    text: "Shop Now",
    location: "Hero Banner",
    destination_url: "/mens/shoes/sneakers",
    component_name: "Homepage Hero"
  }
});

// 9. Form Submit
window.dataLayer.push({
  event: "form_submit",
  form: {
    form_id: "newsletter-signup",
    form_name: "Newsletter Signup",
    form_location: "Footer",
    success: true,
    error_message: null
  }
});

// 10. Modal Open
window.dataLayer.push({
  event: "modal_open",
  modal: {
    modal_id: "size-guide",
    modal_name: "Size Guide",
    modal_type: "Help Content",
    trigger_text: "View Size Guide"
  }
});
