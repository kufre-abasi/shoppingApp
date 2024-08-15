// app/Store/slices/product.ts
import create from 'zustand';
import Cookies from 'js-cookie';

// Define types
export type UserState = {
  cartItems: { [id: string]: { quantity: number; product: any } }; // Add cart items state
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  loading: boolean;
};

export type UserActions = {
  addToCart: (product: any) => void; // Add to cart action
  updateCartQuantity: (productId: string, quantity: number) => void; // Update quantity action
};

export type CartStore = UserState & UserActions;

export const useCartStore = create<CartStore>((set, get) => ({
  cartItems: Cookies.get('cartItems')
    ? JSON.parse(Cookies.get('cartItems')!)
    : {}, // Load cart items from cookies
  status: 'idle',
  error: null,
  loading: false,

  addToCart: (product) => {
    const currentCart = get().cartItems;
    const newCart = {
      ...currentCart,
      [product.id]: {
        product,
        quantity: currentCart[product.id]?.quantity
          ? currentCart[product.id].quantity + 1
          : 1
      }
    };
    Cookies.set('cartItems', JSON.stringify(newCart));
    set({ cartItems: newCart });
  },

  updateCartQuantity: (productId, quantity) => {
    const currentCart = get().cartItems;
    if (quantity <= 0) {
      const { [productId]: _, ...rest } = currentCart;
      Cookies.set('cartItems', JSON.stringify(rest));
      set({ cartItems: rest });
    } else {
      const newCart = {
        ...currentCart,
        [productId]: {
          ...currentCart[productId],
          quantity
        }
      };
      Cookies.set('cartItems', JSON.stringify(newCart));
      set({ cartItems: newCart });
    }
  }
}));
