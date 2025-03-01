import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Home Screen Styles
  homeContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C0A47', 
  },
  homeProduct: {
    marginBottom: 20,
    backgroundColor: '#3E1251', 
    padding: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  homeProductText: {
    fontSize: 18,
    color: '#FFFFFF', 
    marginBottom: 10,
  },
  homeButton: {
    backgroundColor: '#F29C9B', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  homeButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  homeCartButton: {
    padding: 10,
    backgroundColor: '#F29C9B',
    marginTop: 20,
    borderRadius: 5,
  },
  homeCartButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },

  // Cart Screen Styles
  cartContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C0A47',
  },
  cartProduct: {
    marginBottom: 20,
    backgroundColor: '#3E1251',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cartProductText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  cartControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  cartAddButton: {
    backgroundColor: '#F29C9B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cartAddButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  cartRemoveButton: {
    backgroundColor: '#F29C9B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  cartRemoveButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 16,
  },
  total: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#F29C9B',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
  },
  checkoutButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },

  // Checkout Screen Styles
  checkoutContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#2C0A47',
  },
  checkoutProduct: {
    marginBottom: 15,
    backgroundColor: '#3E1251',
    padding: 15,
    borderRadius: 8,
  },
  checkoutProductText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  checkoutTotal: {
    fontSize: 20,
    color: '#FFFFFF',
    marginTop: 20,
    textAlign: 'right',
  },
  checkoutCompleteButton: {
    backgroundColor: '#F29C9B',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 30,
  },
  checkoutCompleteButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 18,
  },
});
