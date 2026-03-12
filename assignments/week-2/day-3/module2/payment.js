// iv. payment.js - Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
export function processPayment(paymentMethod, couponCode = null) {
  // 1. Get cart items and total
  const items = getCartItems();
  const subtotal = getCartTotal();
  if (items.length === 0) {
    return {
      status: 'failed',
      message: 'Cart is empty'
    };
  }
  // 2. Apply discount if coupon provided
  let discountData = {
    originalTotal: subtotal,
    discount: 0,
    finalTotal: subtotal,
    message: 'No coupon applied'
  };
  if (couponCode) {
    discountData = applyDiscount(subtotal, couponCode, items);
  }
  // 3. Validate payment method (card/upi/cod)
  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: 'failed',
      message: 'Invalid payment method'
    };
  }
  // 4. Process payment (simulate)
  const paymentStatus = 'success';
  // 5. Reduce stock for all items
  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });
  // 6. Clear cart
  clearCart();
  //7.Generate order summary
  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: discountData.originalTotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod: paymentMethod,
    status: paymentStatus,
    message: 'Order placed successfully'
  };
}
export function validatePaymentMethod(method) {
  // Check if method is valid (card/upi/cod)
  return method === 'card' || method === 'upi' || method === 'cod';
}
function generateOrderId() {
  // Generate random order ID
  return 'ORD' + Date.now();
}