import React, { useState, useMemo } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Check, 
  Eye, 
  Sparkles, 
  Truck, 
  ShieldCheck 
} from 'lucide-react';
import { SHOP_PRODUCTS } from '../data/shopData';
import { Product, ProductCategory } from '../types/shop';
import { formatCurrencyXAF } from '../utils/formatters';
import { useCart } from '../hooks/useCart';
import { AnimatedSection } from '../components/common/AnimatedSection';
import { Badge } from '../components/common/Badge';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';

export const ShopPage: React.FC = () => {
  const { addItem, openCart, totalItems, totalPriceXAF } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  
  // Local state for product selections
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({});
  const [selectedColors, setSelectedColors] = useState<Record<string, string>>({});
  const [addedAnimationId, setAddedAnimationId] = useState<string | null>(null);
  const [detailedProduct, setDetailedProduct] = useState<Product | null>(null);

  const categories: ProductCategory[] = [
    'Textile & T-Shirts',
    'Goodies & Merch',
    'Formations & Ressources',
    'Accessoires Tech'
  ];

  const filteredProducts = useMemo(() => {
    return SHOP_PRODUCTS.filter((product) => {
      const matchSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchStock = !inStockOnly || product.inStock;

      return matchSearch && matchCategory && matchStock;
    });
  }, [searchQuery, selectedCategory, inStockOnly]);

  const handleAddToCart = (product: Product) => {
    if (!product.inStock) return;

    const size = selectedSizes[product.id] || (product.sizes ? product.sizes[0] : undefined);
    const color = selectedColors[product.id] || (product.colors ? product.colors[0] : undefined);

    addItem(product, 1, size, color);

    setAddedAnimationId(product.id);
    setTimeout(() => {
      setAddedAnimationId(null);
    }, 1200);
  };

  return (
    <div className="w-full pb-24">
      {/* 1. Shop Header */}
      <section className="relative py-20 sm:py-28 bg-radial-hero overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Badge variant="amber" dot size="md" className="mb-6">
            Boutique Officielle
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            Merch, Équipements &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400">
              Ressources Tech 237.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Chaque achat soutient directement l&apos;organisation des meetups gratuits, le mentorat des étudiants et les chantiers de recherche open source comme AgriLucid.
          </p>

          {/* Delivery Trust Banner */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-blue-400" />
              Livraison Douala & Yaoundé
            </span>
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Retrait gratuit lors des meetups
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Paiement à la livraison ou Mobile Money
            </span>
          </div>
        </div>
      </section>

      {/* 2. Search & Filters Bar */}
      <AnimatedSection className="py-8 bg-slate-950 border-t border-slate-900 sticky top-16 z-30 backdrop-blur-md bg-slate-950/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Rechercher un t-shirt, sticker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Category Pills & Stock Toggle */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-blue-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                }`}
              >
                Tous
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-500 text-slate-950 font-bold'
                      : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}

              <label className="flex items-center gap-2 text-xs text-slate-400 ml-auto md:ml-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={inStockOnly}
                  onChange={(e) => setInStockOnly(e.target.checked)}
                  className="rounded border-slate-700 bg-slate-800 text-blue-500 focus:ring-blue-500 h-3.5 w-3.5"
                />
                <span>En stock</span>
              </label>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* 3. Products Grid */}
      <AnimatedSection className="py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center text-slate-400 space-y-3">
              <ShoppingBag className="w-10 h-10 text-slate-600 mx-auto" />
              <p className="text-base font-semibold text-white">Aucun produit trouvé</p>
              <p className="text-xs">Essayez d&apos;ajuster vos critères de recherche ou de catégorie.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => {
                const isAdded = addedAnimationId === product.id;

                return (
                  <div
                    key={product.id}
                    className="rounded-3xl bg-slate-900/80 border border-slate-800 overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between hover:-translate-y-1 shadow-md shadow-black/20"
                  >
                    {/* Product Image */}
                    <div className="relative h-64 w-full bg-slate-800 overflow-hidden group">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      {product.badge && (
                        <div className="absolute top-3 left-3">
                          <Badge variant="amber" size="sm">
                            {product.badge}
                          </Badge>
                        </div>
                      )}

                      <div className="absolute top-3 right-3">
                        <Badge
                          variant={product.inStock ? 'cyan' : 'slate'}
                          size="sm"
                        >
                          {product.inStock ? 'Disponible' : 'Épuisé'}
                        </Badge>
                      </div>

                      {/* Quick Details Trigger */}
                      <button
                        type="button"
                        onClick={() => setDetailedProduct(product)}
                        className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700/80 backdrop-blur-md transition-all cursor-pointer opacity-90 hover:opacity-100"
                        title="Voir la fiche détaillée"
                        aria-label={`Voir les détails de ${product.name}`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-1">
                          {product.category}
                        </span>
                        <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                          {product.name}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-3">
                          {product.description}
                        </p>

                        {/* Size Picker if applicable */}
                        {product.sizes && (
                          <div className="space-y-1.5 pt-2">
                            <span className="text-[11px] font-semibold text-slate-400">Taille :</span>
                            <div className="flex flex-wrap gap-1.5">
                              {product.sizes.map((s) => {
                                const currentSize = selectedSizes[product.id] || product.sizes![0];
                                const isSelected = currentSize === s;

                                return (
                                  <button
                                    key={s}
                                    type="button"
                                    onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: s })}
                                    className={`text-[11px] font-mono px-2 py-1 rounded-lg border transition-all ${
                                      isSelected
                                        ? 'bg-blue-500/20 text-blue-400 border-blue-500/50 font-bold'
                                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                                    }`}
                                  >
                                    {s}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Color Picker if applicable */}
                        {product.colors && (
                          <div className="space-y-1.5 pt-2">
                            <span className="text-[11px] font-semibold text-slate-400">Coloris :</span>
                            <div className="flex flex-wrap gap-1.5">
                              {product.colors.map((c) => {
                                const currentColor = selectedColors[product.id] || product.colors![0];
                                const isSelected = currentColor === c;

                                return (
                                  <button
                                    key={c}
                                    type="button"
                                    onClick={() => setSelectedColors({ ...selectedColors, [product.id]: c })}
                                    className={`text-[11px] font-mono px-2 py-1 rounded-lg border transition-all ${
                                      isSelected
                                        ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50 font-bold'
                                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                                    }`}
                                  >
                                    {c}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Pricing & Add to Cart */}
                      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider block">Prix</span>
                          <span className="text-lg font-black text-blue-400 font-mono">
                            {formatCurrencyXAF(product.priceXAF)}
                          </span>
                        </div>

                        <Button
                          variant={isAdded ? 'primary' : product.inStock ? 'primary' : 'secondary'}
                          size="sm"
                          disabled={!product.inStock}
                          onClick={() => handleAddToCart(product)}
                          rightIcon={isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
                        >
                          {isAdded ? 'Ajouté !' : product.inStock ? 'Ajouter' : 'Rupture'}
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* 4. Floating Cart Summary Pill */}
      {totalItems > 0 && (
        <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <button
            type="button"
            onClick={openCart}
            className="flex items-center gap-3 px-5 py-3 rounded-full bg-blue-500 text-slate-950 font-bold shadow-2xl shadow-blue-500/40 hover:bg-blue-400 transition-all hover:scale-105 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="text-sm">Voir le panier ({totalItems})</span>
            <span className="text-xs font-mono bg-slate-950/20 px-2 py-0.5 rounded-full">
              {formatCurrencyXAF(totalPriceXAF)}
            </span>
          </button>
        </div>
      )}

      {/* 5. Product Detail Modal */}
      <Modal
        isOpen={!!detailedProduct}
        onClose={() => setDetailedProduct(null)}
        title={detailedProduct?.name}
        maxWidth="lg"
      >
        {detailedProduct && (
          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden h-56 bg-slate-800">
              <img
                src={detailedProduct.imageUrl}
                alt={detailedProduct.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="amber" size="sm">{detailedProduct.category}</Badge>
                <span className="text-xl font-black text-blue-400 font-mono">
                  {formatCurrencyXAF(detailedProduct.priceXAF)}
                </span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {detailedProduct.description}
              </p>
            </div>

            {detailedProduct.features && (
              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Caractéristiques :
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {detailedProduct.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setDetailedProduct(null)}>
                Fermer
              </Button>
              <Button
                variant="primary"
                disabled={!detailedProduct.inStock}
                onClick={() => {
                  handleAddToCart(detailedProduct);
                  setDetailedProduct(null);
                }}
              >
                Ajouter au panier
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ShopPage;
