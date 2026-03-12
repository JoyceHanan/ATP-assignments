/*           ii. cart.js - Shopping cart operations
                          import { getProductById, checkStock } from './product.js';            
                          let cartItems = [];
                          // TODO: Implement these functions  
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                          }                         
                          export function removeFromCart(productId) {
                            // Remove product from cart
                          }    
                          export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            // Check stock before updating
                          }                         
                          export function getCartItems() {
                            // Return all cart items with product details
                          }                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            // Return total
                          }                         
                          export function clearCart() {
                            // Empty the cart
                          }*/
     import { getProductById, checkStock } from './product.js';  
     let cartItem=[];
     export function addToCart(productId, quantity) {
                            // 1. Get product details
                            return getProductById(productId)
                            // 2. Check stock availability
                            if(!checkStock(productId,quantity)){
                                return "No stock"
                            }
                            // 3. Check if product already in cart
                            const incart=cartItem.find(item=>item.productId===productId);
                            if(incart){
                                incart.quantity+=quantity;
                            } else {
                                cartItem.push({productId, quantity});
                            }                          
                            // 4. Return success/error message
                            return "succesfully added to cart"
                          }    
    export function removeFromCart(productId) {
                            // Remove product from cart
                             const items = cartItem.filter(item => item.productId !== productId);
                              return "Item removed";
                          }    
export function updateQuantity(productId, newQuantity) {
                            // Update quantity of product in cart
                            const incart = cartItem.find(item => item.productId === productId);
                            if (incart) {
                                incart.quantity = newQuantity;
                            }
                            // Check stock before updating
                            if (!checkStock(productId, newQuantity)) {
                                return "No stock";
                            }
                            return "Quantity updated";
                          }
      export function getCartItems() {
                            // Return all cart items with product details
                              return cartItem.reduce((total, item) => {
                                const product = getProductById(item.productId);
                                return total + product.price * item.quantity;
                              }, 0);
                            
                          }                      
      export function getCartTotal() {
                            // Calculate total price of all items in cart
                            const total = cartItem.reduce((sum, item) => {
                               const product = getProductById(item.productId);
                                return sum + product.price * item.quantity;
                            }, 0);
                            return total;
                          }      
export function clearCart() {             
                            cartItem = [];
                          }
                          