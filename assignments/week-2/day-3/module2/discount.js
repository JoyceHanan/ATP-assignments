// iii. discount.js - Coupon and discount logic
// Available coupons
const coupons = {
  'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
  'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
  'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
};

export function validateCoupon(couponCode, cartTotal, cartItems) {
  // 1. Check if coupon exists
  const coupon = coupons[couponCode];
  if (!coupon) {
    return { valid: false, message: 'Invalid coupon code' };
  }
  // 2. Check minimum amount requirement
  if (cartTotal < coupon.minAmount) {
    return { valid: false, message: 'Minimum amount not satisfied' };
  }
  // 3. Check category requirement (if any)
  if (coupon.category) {
    const hasRequiredCategory = cartItems.some(
      item => item.category === coupon.category
    );
    if (!hasRequiredCategory) {
      return { valid: false, message: 'Coupon not applicable for these items' };
    }
  }
  // Return { valid: true/false, message: '...' }
  return { valid: true, message: 'Coupon valid' };
}
export function calculateDiscount(couponCode, cartTotal) {
  // Calculate discount amount based on coupon type
  const coupon = coupons[couponCode];
  if (coupon.type === 'percentage') {
    return (cartTotal * coupon.value) / 100;
  }
  if (coupon.type === 'flat') {
    return coupon.value;
  }
  // Return discount amount
  return 0;
}
export function applyDiscount(cartTotal, couponCode, cartItems) {
  // 1. Validate coupon
  const validation = validateCoupon(couponCode, cartTotal, cartItems);

  if (!validation.valid) {
    return { 
      originalTotal: cartTotal, 
      discount: 0, 
      finalTotal: cartTotal,
      message: validation.message
    };
  }
  // 2. If valid, calculate discount
  const discount = calculateDiscount(couponCode, cartTotal);
  // 3. Return final amount and discount details
  // Return { 
  //   originalTotal: ..., 
  //   discount: ..., 
  //   finalTotal: ...,
  //   message: '...'
  // }
  return { 
    originalTotal: cartTotal, 
    discount: discount, 
    finalTotal: cartTotal - discount,
    message: 'Discount applied successfully'
  };
}