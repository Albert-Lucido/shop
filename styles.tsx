import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Safe Area View for all screens
  safeArea: {
    flex: 1,
    backgroundColor: '#ffe6f2', 
  },

  // Home Screen Styles
  homeContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffe6f2', 
  },

  // Styling for TECHSTORE name
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4A0072', 
    textAlign: 'center',
    marginBottom: 16,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },

  homeProduct: {
    marginBottom: 12,
    backgroundColor: 'white',
    padding: 14, 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4, 
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8, 
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  homeProductText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A0072', 
  },
  productDescription: {
    fontSize: 14,
    color: '#7a527a', 
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ff4081', 
  },
  homeButton: {
    marginTop: 6,
    backgroundColor: '#9c27b0', 
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  homeButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Navigation Buttons
  navigationButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  homeCartButton: {
    backgroundColor: '#d81b60', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  homeCartButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },

  // Cart Screen Styles
  cartContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffe6f2', 
  },
  cartProduct: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  cartProductImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 10,
  },
  cartProductInfo: {
    flex: 1,
  },
  cartProductText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A0072', 
  },
  cartProductDetails: {
    fontSize: 14,
    color: '#7a527a', 
  },
  cartControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: '#d500f9', 
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5, 
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Cart Footer (Total & Checkout Button)
  cartFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#9c27b0', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },

  // Checkout Screen
  checkoutContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffe6f2', 
  },
  checkoutProduct: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    elevation: 2,
  },
  checkoutProductText: {
    fontSize: 16,
    color: '#4A0072', 
  },
  checkoutTotal: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginTop: 10,
    color: '#d81b60', 
  },
  checkoutCompleteButton: {
    backgroundColor: '#9c27b0', 
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 6,
    marginTop: 10,
  },
  checkoutCompleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  // Empty Cart Message
  emptyCartText: {
    fontSize: 16,
    color: '#7a527a', 
    textAlign: 'center',
    marginTop: 20,
  },

  // Toast Notification (Auto-Disappear)
  toastContainer: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  toastText: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});
