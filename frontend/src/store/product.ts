import create from 'zustand'; // ✅ default import in Zustand v3

type ProductsType = {
  products: any[];
  setProducts: (products: any[]) => void;
};

const useProduct = create<ProductsType>((set) => ({
  products: [],
  setProducts: (data) => set({ products: data }),
}));

export default useProduct;
